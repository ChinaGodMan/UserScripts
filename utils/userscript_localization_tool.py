import argparse
import os
import json
import re
import threading
from urllib.parse import urlencode
from urllib.request import urlopen
from searcher import search_in_file
import subprocess

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

# 全局翻译缓存字典
translation_cache = {
    "复刻": ("Fork", False),
    "问题": ("issues", False),
    # 可以继续添加其他常见的翻译
}


def insert_into_meta(file_path, content):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    if len(lines) < 1:
        lines.append("\n")
    lines.insert(1, content + "\n")

    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)
    print(f"区域化已插入 '{file_path}' 的元数据下")


# 删除中文
def remove_zh_cn_lines(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
        filtered_lines = [
            line for line in lines
            if not line.strip().startswith("// @name:zh-CN") and not line.strip().startswith("// @description:zh-CN")
        ]
        with open(file_path, 'w', encoding='utf-8') as file:
            file.writelines(filtered_lines)
    except FileNotFoundError:
        print("文件未找到，请检查文件路径。")
    except Exception as e:
        print(f"发生错误: {e}")


# 读取文件并查找中文简介
def read_file_to_memory(file_path):
    search_results = search_in_file(file_path, "zh-CN")
    lines = []
    for name_match in search_results.name_matches:
        lines.append("\n".join(search_results.name_matches))
    for description_match in search_results.description_matches:
        lines.append("\n".join(search_results.description_matches))
    remove_zh_cn_lines(file_path)
    return lines


# 排序文本
def sort_userscript_section(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.readlines()

    # 找到 // ==UserScript== 和 // ==/UserScript== 的范围
    start_index = None
    end_index = None

    for i, line in enumerate(content):
        if "// ==UserScript==" in line:
            start_index = i
        elif "// ==/UserScript==" in line:
            end_index = i
            break

    # 如果没有找到对应范围，直接返回
    if start_index is None or end_index is None:
        print("未找到有效的 UserScript 区域")
        return

    # 提取范围内的内容
    userscript_section = content[start_index + 1:end_index]

    # 按类别分组
    descriptions = []
    names = []
    others = []

    for line in userscript_section:
        if re.match(r"// @description", line):
            descriptions.append(line.strip())
        elif re.match(r"// @name", line) and not re.match(r"// @namespace", line):
            names.append(line.strip())
        else:
            others.append(line.strip())

    # 按语言后缀排序（按规范排列规则，语言后缀优先）
    def sort_by_suffix(lines):
        return sorted(lines, key=lambda x: re.search(r"[:\-]([a-zA-Z\-]*)", x).group(1) if re.search(r"[:\-]([a-zA-Z\-]*)", x) else "")

    sorted_descriptions = sort_by_suffix(descriptions)
    sorted_names = sort_by_suffix(names)

    # 合并排序结果
    sorted_section = sorted_names + sorted_descriptions + others

    # 替换原始内容中的 UserScript 区域
    content[start_index + 1:end_index] = [line + "\n" for line in sorted_section]

    # 写入文件
    with open(file_path, "w", encoding="utf-8") as file:
        file.writelines(content)


# 翻译函数
def translate_text(text, target_lang):
    text = text.replace("// @name:zh-CN", '').replace("// @description:zh-CN", '')
    if text in translation_cache:
        cached_translation, needs_api_translation = translation_cache[text]
        if not needs_api_translation:
            return cached_translation
    api_url = 'https://translate.googleapis.com/translate_a/single'
    params = {'client': 'gtx', 'dt': 't', 'sl': 'auto', 'tl': target_lang, 'q': text}
    full_url = api_url + '?' + urlencode(params)
    try:
        response = urlopen(full_url)
        data = response.read().decode('utf-8')
        translated_text = ''.join(item[0] for item in json.loads(data.replace("'", "\u2019"))[0])
        return translated_text
    except Exception as e:
        print(f"翻译错误：{e}")
        return None


# 翻译锁，确保多个线程不会同时修改 translations
translation_lock = threading.Lock()


# 用于保存翻译结果的线程函数
def translate_worker(chinese_texts, translations, lang):
    for idx, chinese_text in chinese_texts:
        translated_text = translate_text(chinese_text, lang)
        if translated_text:
            with translation_lock:
                translations[(idx, chinese_text)] = translated_text


# 翻译并返回翻译结果
def translate_and_collect(lines, chinese_texts, lang):
    translations = {}
    threads = []
    chunk_size = len(chinese_texts) // 5 or 1
    for i in range(0, len(chinese_texts), chunk_size):
        chunk = chinese_texts[i:i + chunk_size]
        thread = threading.Thread(target=translate_worker, args=(chunk, translations, lang))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    # 收集翻译结果，保存在字符串中
    translation_output = ""
    for line_number, chinese_text, translated_text in [(ln, ct, translations.get((ln, ct), None)) for ln, ct in chinese_texts if (ln, ct) in translations]:
        if line_number == 0:  # 假设第一行是标题
            translation_output += f'// @name:{lang}    {translated_text}\n'
            if lang == 'en':
                translation_output += f'// @name    {translated_text}\n'
        else:
            translation_output += f'// @description:{lang}    {translated_text}'
            if lang == 'en':
                translation_output += f'\n// @description    {translated_text}'
    return translation_output


# 处理翻译逻辑
def translate_localized(readme_path, target_langs):
    lines = read_file_to_memory(readme_path)
    # 保存整行包含中文文本的位置信息
    chinese_texts = []
    for line_number, line in enumerate(lines):
        if chinese_pattern.search(line):  # 整行匹配中文文本
            chinese_texts.append((line_number, line))

    # 遍历 target_langs 中的语言
    for lang_code in target_langs:
        print(f"开始翻译 {lang_code} ...")
        translation_output = translate_and_collect(lines, chinese_texts, lang_code)
        insert_into_meta(readme_path, translation_output)


def main():
    # 创建命令行参数解析器
    parser = argparse.ArgumentParser(description="UserScript 多语言自动化翻译与优化工具")
    parser.add_argument("file_path", type=str, help="需要处理的 UserScript 文件路径")
    parser.add_argument("--langs", nargs="+", default=['ar', 'bg', 'cs', 'da', 'de', 'el', 'en', 'eo', 'es', 'fi', 'fr', 'he', 'hr', 'hu', 'id', 'it', 'ja', 'ka', 'ko', 'nl', 'nb', 'pl', 'pt-BR', 'ro', 'ru', 'sk', 'sr', 'sv', 'th', 'tr', 'ug', 'uk', 'vi', 'zh-SG', 'zh', 'zh-TW', 'zh-HK', 'zh-CN', 'fr-CA'],
                        help="目标翻译语言列表，默认包含 所有语言")
    args = parser.parse_args()
    file_path = args.file_path
    target_langs = args.langs

    translate_localized(file_path, target_langs)
    sort_userscript_section(file_path)
    subprocess.run(['node', 'utils/single-format-monkey-meta.js', file_path], check=True)
    print("翻译和排序完成！")


if __name__ == "__main__":
    main()
