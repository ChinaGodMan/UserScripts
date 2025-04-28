import subprocess
import argparse
import threading
from concurrent.futures import ThreadPoolExecutor
from google_translate import translate_text
from google_translate import translation_lock
from searcher import search_in_file
from helper import sort_userscript_section
import re


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
        with open(file_path, 'w', encoding='utf-8') as file:
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
    print(f"\033[32m开始翻译语言=>[{lang}]\033[0m")
    translation_output = translate_and_collect(chinese_texts, lang)
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
    # 创建命令行参数解析器
    parser = argparse.ArgumentParser(description="UserScript 多语言自动化翻译与优化工具")
    parser.add_argument("file_path", type=str, help="需要处理的 UserScript 文件路径")
    parser.add_argument("--langs", nargs="+", default=['af', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bn', 'bo', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'dv', 'dz', 'el', 'en', 'en-GB', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'fr-CA', 'gd', 'gl', 'gu', 'haw', 'he', 'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'ckb', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'pa', 'pap', 'pl', 'ps', 'pt', 'pt-BR', 'ro', 'ru', 'rw', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tn', 'to', 'tpi', 'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'zh', 'zh-MY', 'zh-MO', 'zh-HK', 'zh-SG', 'zh-TW', 'zu'],
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
