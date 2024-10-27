import os
import json
import re
import time
import io
import threading
from urllib.parse import urlencode
from urllib.request import urlopen
import urllib.parse
import subprocess


def is_file_updated_more_than(file_path, timeout_minutes):
    try:
        # 使用 git log 获取文件的最后提交时间（Unix 时间戳）
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ct', file_path],
            capture_output=True, text=True, check=True
        )
        last_commit_time = int(result.stdout.strip())

        # 获取当前时间的 Unix 时间戳
        current_time = int(time.time())

        # 计算时间差（分钟）
        time_diff_minutes = (current_time - last_commit_time) / 60

        # 检查文件是否在超时时间之前被更新
        return time_diff_minutes > timeout_minutes
    except subprocess.CalledProcessError as e:
        print(f"错误: 无法获取提交时间 - {file_path} {e}")
        return None


# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

# 全局翻译缓存字典
translation_cache = {
    "复刻": ("Fork", False),  # 不需要 API 翻译，直接使用缓存值
    "问题": ("issues", False),
    "所有脚本总安装数": ("issues", True),  # 需要翻译,且需要URL编码
    "用户数量": ("issues", True),  # 需要翻译,且需要URL编码
    "今日所有脚本安装数": ("issues", True),
    "所有一般": ("issues", True),
    "联系": ("issues", True),
    "所有差评": ("issues", True),
    "所有好评": ("issues", True),
    "星标": ("issues", True),
    "脚本数量": ("issues", True),
    "代码质量": ("issues", True),
    # 可以继续添加其他常见的翻译
}

# 翻译字典，用于替换特定编码内容
json_data = {
    "所有脚本总安装数": "%E6%89%80%E6%9C%89%E8%84%9A%E6%9C%AC%E6%80%BB%E5%AE%89%E8%A3%85%E6%95%B0",
    "今日所有脚本安装数": "%E4%BB%8A%E6%97%A5%E6%89%80%E6%9C%89%E8%84%9A%E6%9C%AC%E5%AE%89%E8%A3%85%E6%95%B0",
    "脚本数量": "%E8%84%9A%E6%9C%AC%E6%95%B0%E9%87%8F",
    "所有好评": "%E6%89%80%E6%9C%89%E5%A5%BD%E8%AF%84",
    "所有一般": "%E6%89%80%E6%9C%89%E4%B8%80%E8%88%AC",
    "所有差评": "%E6%89%80%E6%9C%89%E5%B7%AE%E8%AF%84",
    "星标": "%E6%98%9F%E6%A0%87",
    "复刻": "%E5%A4%8D%E5%88%BB",
    "问题": "%E9%97%AE%E9%A2%98",
    "联系": "%E8%81%94%E7%B3%BB",
    "代码质量": "%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F",
    "用户数量": "%E7%94%A8%E6%88%B7%E6%95%B0%E9%87%8F",
}


# 翻译函数

def translate_text(text, target_lang):

    # 如果在缓存中，判断布尔值
    if text in translation_cache:
        cached_translation, needs_api_translation = translation_cache[text]
        # 如果缓存中的布尔值为 False，直接使用缓存翻译
        if not needs_api_translation:
            # print(f"从缓存中获取翻译：{text} -> {cached_translation}")
            return cached_translation
        # 如果布尔值为 True，强制调用 API 翻译，不使用缓存的翻译
        else:
            print(f"{text} 在缓存中，但需要通过 API 翻译。")
    # 调用翻译 API 进行翻译
    api_url = 'https://translate.googleapis.com/translate_a/single'
    params = {'client': 'gtx', 'dt': 't', 'sl': 'auto', 'tl': target_lang, 'q': text}
    full_url = api_url + '?' + urlencode(params)
    try:
        # 调用 API 获取翻译
        response = urlopen(full_url)
        data = response.read().decode('utf-8')
        translated_text = json.loads(data.replace("'", "\u2019"))[0][0][0]
        # print(f"API 翻译：{text} -> {translated_text}")
        # 如果缓存中该词条的布尔值为 True，进行 URL 编码
        if text in translation_cache and translation_cache[text][1]:
            translated_text = urllib.parse.quote(translated_text)
            # print(f"URL 编码后的翻译：{translated_text}")
        return translated_text
    except Exception as e:
        print(f"翻译错误：{e}")
        return None
# 读取文件并查找中文文本


def read_file_to_memory(file_path, json_data):
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()

    virtual_file = io.StringIO(content)
    updated_lines = []
    for line in virtual_file:
        for chinese_text, encoded_value in json_data.items():
            if encoded_value in line:
                line = line.replace(encoded_value, chinese_text)
        updated_lines.append(line)

    virtual_file.close()
    return updated_lines


# 翻译锁，确保多个线程不会同时修改 translations
translation_lock = threading.Lock()


# 用于保存翻译结果的线程函数
def translate_worker(chinese_texts, translations, lang):
    for idx, chinese_text in chinese_texts:
        translated_text = translate_text(chinese_text, lang)
        if translated_text:
            # 使用锁确保线程安全地修改 translations
            with translation_lock:
                translations[(idx, chinese_text)] = translated_text


# 翻译特定语言的函数（并行处理每种语言）
def translate_language(lines, chinese_texts, lang, foldpath, translatefile):
    translations = {}  # 每种语言有自己的翻译结果
    threads = []
    chunk_size = len(chinese_texts) // 5 or 1  # 假设5个线程，按块划分
    for i in range(0, len(chinese_texts), chunk_size):
        chunk = chinese_texts[i:i + chunk_size]
        thread = threading.Thread(
            target=translate_worker, args=(chunk, translations, lang))
        threads.append(thread)
        thread.start()

    # 等待所有线程完成
    for thread in threads:
        thread.join()

    # 从后往前替换中文文本
    new_lines = lines[:]
    for line_number, chinese_text, translated_text in reversed(
            [(ln, ct, translations.get((ln, ct), None)) for ln, ct in chinese_texts if (ln, ct) in translations]):
        new_lines[line_number] = new_lines[line_number].replace(
            chinese_text, translated_text, 1)

    # 设置保存路径：如果 foldpath 为空，使用 translatefile 的路径
    if not foldpath:
        output_dir = os.path.dirname(translatefile)
    else:
        output_dir = os.path.join(foldpath, 'docs')

    # 创建保存目录（如果不存在）
    os.makedirs(output_dir, exist_ok=True)

    # 保存翻译后的文件
    dir_with_lang = os.path.join(output_dir, lang)
    if not os.path.exists(dir_with_lang):
        os.makedirs(dir_with_lang)
    # output_path = os.path.join(output_dir, f'README_{lang}.md')
    output_path = os.path.join(dir_with_lang, 'README.md')
    with open(output_path, 'w', encoding='utf-8') as f_out:
        f_out.writelines(new_lines)
    print(f"翻译完成，已将 {lang} 语言的结果写入 '{output_path}'。")


# 主函数
def translate_readme(data, json_data):
    blacklist = ["人民的勤务员", "简体中文", "繁體中文", "日本語"]

    for item in data['translatelist']:
        if not item.get('translated', False):
            print(f"条目 {item['foldpath']} 的 translated 为 false，跳过翻译。")
            continue

        foldpath = item['foldpath']
        translatefile = item['translatefile']
        translatedto = item['translatedto']
        readme_path = os.path.join(foldpath, translatefile) if foldpath else translatefile

        if not os.path.exists(readme_path):
            print(f'文件 {readme_path} 不存在，跳过翻译。')
            continue
        if is_file_updated_more_than(readme_path, 5):
            print("跳过文件 ，因为需要翻译的文件在五分钟之内没有新提交。")
            continue
        # 读取文件内容
        lines = read_file_to_memory(readme_path, json_data)

        # 保存中文文本的位置信息
        chinese_texts = []
        for line_number, line in enumerate(lines):
            for match in chinese_pattern.finditer(line):
                chinese_text = match.group()
                if chinese_text not in blacklist:
                    chinese_texts.append((line_number, chinese_text))

        # 为每种语言启动一个线程并行翻译
        language_threads = []
        for lang in translatedto:
            thread = threading.Thread(target=translate_language, args=(
                lines, chinese_texts, lang, foldpath, translatefile))
            language_threads.append(thread)
            thread.start()

        # 等待所有语言线程完成
        for thread in language_threads:
            thread.join()


#  JSON 数据读取与处理
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'docs/translate_readme.json')
with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)
# 开始翻译
translate_readme(data, json_data)
