import os
import json
import re
import threading
from urllib.parse import urlencode
from urllib.request import urlopen

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

# 全局翻译缓存字典
translation_cache = {
    "复刻": ("Fork", False),
    "问题": ("issues", False),
    # 可以继续添加其他常见的翻译
}

# 翻译函数
def translate_text(text, target_lang):
    if text in translation_cache:
        cached_translation, needs_api_translation = translation_cache[text]
        if not needs_api_translation:
            return cached_translation
    api_url = 'https://translate.googleapis.com/translate_a/single'
    params = {
        'client': 'gtx',
        'dt': 't',
        'sl': 'auto',
        'tl': target_lang,
        'q': text
    }
    full_url = api_url + '?' + urlencode(params)
    try:
        response = urlopen(full_url)
        data = response.read().decode('utf-8')
        translated_text = json.loads(data.replace("'", "\u2019"))[0][0][0]
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
        else:
            translation_output += f'// @description:{lang}    {translated_text}\n'
    
    return translation_output

# 读取文件并查找中文文本
def read_file_to_memory(file_path):
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()
    lines = content.splitlines()
    return lines

# 主函数，处理翻译逻辑
def translate_readme(readme_path, target_langs):
    # 读取 readme 文件内容
    lines = read_file_to_memory(readme_path)

    # 保存中文文本的位置信息
    chinese_texts = []
    for line_number, line in enumerate(lines):
        for match in chinese_pattern.finditer(line):
            chinese_text = match.group()
            chinese_texts.append((line_number, chinese_text))

    # 存储所有翻译结果的字符串
    all_translations = ""

    # 遍历 target_langs 中的语言
    for lang_code in target_langs:
        print(f"开始翻译 {lang_code} ...")
        translation_output = translate_and_collect(lines, chinese_texts, lang_code)
        all_translations += translation_output
        print(f"{lang_code} 翻译完成")

    # 所有语言翻译完成后一次性追加到文件末尾
    with open(readme_path, 'a', encoding='utf-8') as f_out:
        f_out.write("\n" + all_translations)
    print(f"所有语言翻译完成，已将翻译结果追加到 '{readme_path}' 文件。")

# 示例目标语言列表
target_langs = ['af', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bn', 'bo', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'dv', 'dz', 'el', 'en', 'en-GB', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gd', 'gl', 'gu', 'haw', 'he', 'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kab', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'pa', 'pap', 'pl', 'ps', 'pt', 'ro', 'ru', 'rw', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tn', 'to', 'tpi', 'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'zh',  'zh-HK', 'zh-SG', 'zh-TW', 'zu']
#target_langs = ['ar', 'bg', 'cs', 'da', 'de', 'el', 'en', 'eo', 'es', 'fi', 'fr', 'he', 'hr', 'hu', 'id', 'it', 'ja', 'ka', 'ko', 'nl', 'nb', 'pl', 'pt-BR', 'ro', 'ru', 'sk', 'sr', 'sv', 'th', 'tr', 'ug', 'uk', 'vi', 'zh-TW', 'zh-HK', 'fr-CA'] #GreasyFork支持的国家语言.
# 示例文件路径
script_dir = os.path.dirname(os.path.abspath(__file__))
README_PATH = os.path.join(script_dir, 'read.md')

# 开始翻译并将结果追加到 read.md 文件
translate_readme(README_PATH, target_langs)
