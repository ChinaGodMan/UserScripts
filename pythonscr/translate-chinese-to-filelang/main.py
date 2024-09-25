import os
import re
import threading
import io
import json
from urllib.parse import urlencode
import urllib.parse
from urllib.request import urlopen
import time
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
        print(f"错误: 无法获取提交时间 - {file_path}")
        return None


# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')
# 翻译对照表，替换特定编码内容
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

}
# 黑名单：不需要翻译的中文文本
blacklist = ["人民的勤务员", "中文简体", "中文繁体"]
# 翻译函数
translation_cache = {
    "复刻": ("Fork", False),  # 不需要 API 翻译，直接使用缓存值
    "问题": ("issues", False),
    "所有脚本总安装数": ("issues", True),
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


def translate_text_s(text, target_lang):  # 不操作
    if text in translation_cache:
        print(f"从缓存中获取翻译：{text} -> {translation_cache[text]}")
        return translation_cache[text]
    # 模拟调用翻译 API
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
        # translated_text = json.loads(data.replace("'", "\u2019"))[0][0][0]
        translated_text = ''.join(
            item[0] for item in json.loads(data.replace("'", "\u2019"))[0])
        return translated_text
    except Exception as e:
        print(f"\033[31m翻译错误：{e}\033[0m")
        return None
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
    params = {
        'client': 'gtx',
        'dt': 't',
        'sl': 'auto',
        'tl': target_lang,
        'q': text
    }
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
# 读取文件并查找中文文本


def read_file_to_memory(file_path):
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()
    virtual_file = io.StringIO(content)
    lines = [line for line in virtual_file]
    virtual_file.close()
    return lines
# 替换编码内容为中文


def replace_encoded_with_utf8(lines, json_data):
    updated_lines = []
    for line in lines:
        for chinese_text, encoded_value in json_data.items():
            if encoded_value in line:
                line = line.replace(encoded_value, chinese_text)
        updated_lines.append(line)
    return updated_lines
# 翻译并保存结果，覆盖原文件


def translate_and_save(lines, chinese_texts, lang, file_path):
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
    # 直接覆盖原文件
    with open(file_path, 'w', encoding='utf-8') as f_out:
        f_out.writelines(new_lines)
    print(f"翻译完成，已将结果覆盖保存到 '{file_path}'。")
# 翻译并行任务


def process_file(root, file, lang_code):
    file_path = os.path.join(root, file)
    if is_file_updated_more_than(file_path, 30):
        print(f"翻译时跳过文件 {file_path}，因为文件在5分钟之内没有更新")
        return  # 使用 return 结束当前函数的执行，而不是 continue
    print(f"开始处理文件: {file_path}，语言代码: {lang_code}")
    # 读取文件内容
    lines = read_file_to_memory(file_path)
    # 替换编码内容为中文
    lines = replace_encoded_with_utf8(lines, json_data)
    # 保存中文文本的位置信息，跳过黑名单
    chinese_texts = []
    for line_number, line in enumerate(lines):
        for match in chinese_pattern.finditer(line):
            chinese_text = match.group()
            if chinese_text not in blacklist:
                chinese_texts.append((line_number, chinese_text))
    # 翻译并保存结果，覆盖原文件
    translate_and_save(lines, chinese_texts, lang_code, file_path)
# 主函数，遍历二级目录并处理 README_xx.md 文件


def process_files(base_dir):
    file_threads = []  # 存储处理文件的线程
    max_threads = 1  # 设置最大同时处理的线程数
    for root, dirs, files in os.walk(base_dir):
        # 遍历到第二级目录
        if root.count(os.sep) - base_dir.count(os.sep) == 1:
            for file in files:
                # 排除 README.md 文件，仅处理 README_xx.md 格式的文件
                if file == 'README.md':
                    continue
                # 匹配 README_xx.md 格式的文件，并提取语言代码
                match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
                if not match:
                    continue
                lang_code = match.group(1)  # 提取语言代码
                while threading.active_count() > max_threads:
                    time.sleep(0.1)  # 短暂等待，避免 CPU 占用过高
                # 为每个文件启动一个线程处理
                thread = threading.Thread(
                    target=process_file, args=(root, file, lang_code))
                file_threads.append(thread)
                thread.start()
    # 等待所有文件处理完成
    for thread in file_threads:
        thread.join()


# 示例：处理 base_dir 目录下的二级目录中的所有文件
base_dir = "Script details"
process_files(base_dir)
