import argparse
import os
import re
import subprocess
import threading
from concurrent.futures import ThreadPoolExecutor

from google_translate import translate_text, translation_lock
from helper import read_json, sort_userscript_section
from searcher import search_in_file


# 清理不规则的文本
def clean_text(text):
    # 替换多个空格或特殊空白字符为单个空格
    text = re.sub(r"[\u200b\u00a0\t]+", " ", text)
    # 替换多余的连续空格为单个空格
    text = re.sub(r" +", " ", text)
    # 去除行尾空格
    text = re.sub(r"\s+$", "", text)
    return text


# 在meta中插入翻译的区域化
def insert_into_meta(file_path, content, file_lock):
    with file_lock:
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
        for i, line in enumerate(lines):
            if "==UserScript==" in line:
                lines.insert(i + 1, content + "\n")
                break
        else:
            return
        with open(file_path, 'w', encoding='utf-8', newline='\n') as file:
            file.writelines(lines)
    print(f"\033[34m内容已插入到 '{file_path}' 中 \033[0m")


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
    chunk_size = len(chinese_texts) // 5 or 1  # 每次访问api为5个.
    for i in range(0, len(chinese_texts), chunk_size):
        chunk = chinese_texts[i:i + chunk_size]
        thread = threading.Thread(target=translate_worker, args=(chunk, translations, lang))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()
    translation_output = ""
    for line_number, chinese_text, translated_text in [(ln, ct, translations.get((ln, ct), None)) for ln, ct in chinese_texts if (ln, ct) in translations]:
        translated_text = clean_text(translated_text)
        if line_number == 0:  # 第一行永远是标题
            translation_output += f'// @name:{lang}    {translated_text}\n'
        else:
            translation_output += f'// @description:{lang}    {translated_text}'
    return translation_output


def translate_task(file_path, lang, chinese_texts, file_lock):
    if lang == "zh-CN":  # 翻译你麻痹
        return
    print(f"\033[32m开始翻译语言=>[{lang}]\033[0m")
    translation_output = translate_and_collect(chinese_texts, lang)
    if translation_output != "":
        insert_into_meta(file_path, translation_output, file_lock)


def translate_localized(file_path, target_langs):
    chinese_texts = read_file_to_memory(file_path)
    file_lock = threading.Lock()
    max_threads = 5
    with ThreadPoolExecutor(max_threads) as executor:
        futures = [
            executor.submit(translate_task, file_path, lang, chinese_texts, file_lock)
            for lang in target_langs
        ]
        for future in futures:
            future.result()


def main():
    lang_map = read_json('utils/docs/lang_map.json')
    lang_codes = []
    for lang_dict in lang_map["langs"]:
        lang_codes.extend(lang_dict.keys())
    parser = argparse.ArgumentParser(description="UserScript 多语言自动化翻译与优化工具")
    parser.add_argument("file_path", type=str, help="需要处理的 UserScript 文件路径")
    parser.add_argument("-l", "--langs", nargs="+", default=lang_codes,
                        help="目标翻译语言列表，默认包含 所有语言")
    parser.add_argument("-f", "--filter", action="store_true",
                        help="是否过滤掉文件中已存在的语言")
    args = parser.parse_args()
    file_path = args.file_path
    target_langs = args.langs

    if args.filter:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            filtered_langs = []
            for lang in target_langs:
                if f"// @name:{lang}" not in content:
                    filtered_langs.append(lang)
            target_langs = filtered_langs

    translate_localized(file_path, target_langs)
    sort_userscript_section(file_path)
    # subprocess.run(['node', 'utils/single-format-monkey-meta.js', file_path], check=True)
    os.system("npm run lint:fix")
    print("翻译和排序完成！")


if __name__ == "__main__":
    main()
