import os
import json
import re
import time
import io
import threading
from urllib.parse import urlencode
from urllib.request import urlopen

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

# 全局翻译缓存字典
translation_cache = {
    "复刻": "Fork",
    "问题": "issues",
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
    "联系": "%E8%81%94%E7%B3%BB"
}

# 翻译函数
def translate_text(text, target_lang):
    if text in translation_cache:
        print(f"从缓存中获取翻译：{text} -> {translation_cache[text]}")
        return translation_cache[text]
    
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
        translation_cache[text] = translated_text  # 保存到缓存中
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

# 用于保存翻译结果的线程函数
def translate_worker(chinese_texts, translations, lang):
    for idx, chinese_text in chinese_texts:
        translated_text = translate_text(chinese_text, lang)
        if translated_text:
            translations[idx] = translated_text

# 主函数
def translate_readme(data, json_data):
    blacklist = ["人民的勤务员", "中文简体", "中文繁体"]

    for item in data['translatelist']:
        if not item.get('translated', False):
            print(f"条目 {item['foldpath']} 的 translated 为 false，跳过翻译。")
            continue

        foldpath = item['foldpath']
        translatefile = item['translatefile']
        translatedto = item['translatedto']
        readme_path = os.path.join(foldpath, translatefile)

        if not os.path.exists(readme_path):
            print(f'文件 {readme_path} 不存在，跳过翻译。')
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

        # 多线程翻译
        translations = {}
        threads = []
        for lang in translatedto:
            thread = threading.Thread(target=translate_worker, args=(chinese_texts, translations, lang))
            threads.append(thread)
            thread.start()

        # 等待所有线程完成
        for thread in threads:
            thread.join()

        # 从后往前替换中文文本
        new_lines = lines[:]
        for line_number, chinese_text, translated_text in reversed(
                [(ln, ct, translations.get(ln, None)) for ln, ct in chinese_texts if ln in translations]):
            new_lines[line_number] = new_lines[line_number].replace(chinese_text, translated_text)

        # 保存翻译后的文件
        for lang in translatedto:
            output_path = os.path.join(foldpath, f'docs/README_{lang}.md')
            with open(output_path, 'w', encoding='utf-8') as f_out:
                f_out.writelines(new_lines)
            print(f"翻译完成，已将 {lang} 语言的结果写入 '{output_path}'。")

# 示例 JSON 数据读取与处理
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'translate_readme.json')

with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 开始翻译
translate_readme(data, json_data)
