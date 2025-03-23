import subprocess
import argparse
import threading
from google_translate import translate_text
from google_translate import translation_lock
from searcher import search_in_file
from helper import sort_userscript_section


def insert_into_meta(file_path, content):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    if len(lines) < 1:
        lines.append("\n")
    lines.insert(1, content + "\n")

    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)
    print(f"\033[34m区域化已插入 '{file_path}' 的元数据下\033[0m")


# 删除中文头部描述,也可以在默认语言中删除zh-CN
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
    chinese_texts = []
    for name_match in search_results.name_matches:
        lines.append(name_match)
        chinese_texts.append((len(lines) - 1, name_match))
    for description_match in search_results.description_matches:
        lines.append(description_match)
        chinese_texts.append((len(lines) - 1, description_match))
    remove_zh_cn_lines(file_path)
    return chinese_texts


# 用于保存翻译结果的线程函数
def translate_worker(chinese_texts, translations, lang):
    for idx, chinese_text in chinese_texts:
        translated_text = translate_text(chinese_text, lang)
        if translated_text:
            with translation_lock:
                translations[(idx, chinese_text)] = translated_text


# 翻译并返回翻译结果
def translate_and_collect(chinese_texts, lang):
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
    translation_output = ""
    for line_number, chinese_text, translated_text in [(ln, ct, translations.get((ln, ct), None)) for ln, ct in chinese_texts if (ln, ct) in translations]:
        if line_number == 0:  # 第一行永远是标题
            translation_output += f'// @name:{lang}    {translated_text}\n'
        else:
            translation_output += f'// @description:{lang}    {translated_text}'
    return translation_output


# 循环翻译
def translate_localized(readme_path, target_langs):
    # 获取元的中文名称和简介
    chinese_texts = read_file_to_memory(readme_path)
    # 遍历 target_langs 中的语言
    for lang_code in target_langs:
        print(f"\033[32m开始翻译语言=>[{lang_code}]\033[0m")
        translation_output = translate_and_collect(chinese_texts, lang_code)
        insert_into_meta(readme_path, translation_output)


def main():
    # 创建命令行参数解析器
    parser = argparse.ArgumentParser(description="UserScript 多语言自动化翻译与优化工具")
    parser.add_argument("file_path", type=str, help="需要处理的 UserScript 文件路径")
    parser.add_argument("--langs", nargs="+", default=['af', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bn', 'bo', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'dv', 'dz', 'el', 'en', 'en-GB', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gd', 'gl', 'gu', 'haw', 'he', 'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kab', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'pa', 'pap', 'pl', 'ps', 'pt', 'ro', 'ru', 'rw', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tn', 'to', 'tpi', 'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'zh', 'zh-HK', 'zh-SG', 'zh-TW', 'zu'],
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
