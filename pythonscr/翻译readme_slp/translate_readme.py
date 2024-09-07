import json
import os
import re
import time
import io
from urllib.parse import urlencode
from urllib.request import urlopen

# 读取 JSON 文件中的翻译列表
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'translate_readme.json')
with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

# 创建一个全局翻译缓存字典
translation_cache = {
    "复刻": "Fork",
    "问题": "issues",
    # 可以继续添加其他常见的翻译
}

# json_data：用于替换编码的映射表
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

# 逐行读取文件，并匹配中文字符
def match_chinese_in_text(lines):
    # 存储中文及其位置 (行号, 列号, 中文文本)
    chinese_matches = []
    for line_number, line in enumerate(lines):
        for match in chinese_pattern.finditer(line):
            chinese_text = match.group()
            start_index = match.start()
            chinese_matches.append((line_number, start_index, chinese_text))
    return chinese_matches

# 批量翻译函数，将多个文本合并并发送到翻译API
def translate_text_batch(text_list, target_lang):
    concatenated_text = '----'.join(text_list)  # 用 "----" 连接字符串
    api_url = 'https://translate.googleapis.com/translate_a/single'
    params = {
        'client': 'gtx',
        'dt': 't',
        'sl': 'auto',
        'tl': target_lang,
        'q': concatenated_text
    }
    full_url = api_url + '?' + urlencode(params)

    try:
        response = urlopen(full_url)
        data = response.read().decode('utf-8')
        translated_text = json.loads(data.replace("'", "\u2019"))[0][0][0]

        # 将翻译后的文本按 "----" 分隔符分割回原始的字符串列表
        return translated_text.split('----')
    except Exception as e:
        print(f"翻译错误：{e}")
        return None

# 读取文件并进行编码替换
def read_file_to_memory(file_path, json_data):
    """ 将文件内容读取到内存中，并进行编码替换 """
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()  # 读取整个文件内容为一个字符串

    # 使用 StringIO 创建虚拟文件
    virtual_file = io.StringIO(content)

    # 读取虚拟文件的内容，并进行编码替换
    updated_lines = []
    for line in virtual_file:
        for chinese_text, encoded_value in json_data.items():
            if encoded_value in line:
                line = line.replace(encoded_value, chinese_text)
        updated_lines.append(line)

    virtual_file.close()
    return updated_lines

# 处理文件翻译流程
def process_file(file_path, translatedto, json_data):
    # 读取文件内容到内存
    lines = read_file_to_memory(file_path, json_data)

    # 匹配所有中文字符及其位置
    chinese_matches = match_chinese_in_text(lines)

    if not chinese_matches:
        print("没有找到需要翻译的中文文本。")
        return

    # 提取所有中文字符
    chinese_texts = [match[2] for match in chinese_matches]

    # 翻译目标语言的文档
    for lang in translatedto:
        print(f"开始翻译为 {lang}...")
        translated_results = []
        batch_size = 15  # 每次批量翻译15个中文文本（表内的15个数组项）

        # 将中文字符分批发送进行翻译
        for i in range(0, len(chinese_texts), batch_size):
            batch = chinese_texts[i:i+batch_size]
            translated_batch = translate_text_batch(batch, lang)
            if translated_batch:
                translated_results.extend(translated_batch)

        # 确保翻译数量和匹配中文数量一致
        if len(translated_results) != len(chinese_matches):
            print("翻译后的结果数量与匹配的中文数量不一致！")
            return

        # 从后往前替换中文文本，避免位置错乱
        for i in range(len(chinese_matches) - 1, -1, -1):
            line_number, start_index, original_text = chinese_matches[i]
            translated_text = translated_results[i]
            line = lines[line_number]
            # 替换对应位置的中文文本
            lines[line_number] = line[:start_index] + translated_text + line[start_index + len(original_text):]

        # 新建或覆盖目标文件并保存翻译后的内容
        output_path = os.path.join(os.path.dirname(file_path), f'docs/README_{lang}.md')
        with open(output_path, 'w', encoding='utf-8') as f_out:
            f_out.writelines(lines)
        print(f"翻译完成，已将 {lang} 语言的结果写入 '{output_path}'。")

# 遍历 translatelist 中的每个条目
for item in data['translatelist']:
    if not item.get('translated', False):  # 检查 translated 的值，如果为 False 则跳过
        print(f"条目 {item['foldpath']} 的 translated 为 false，跳过翻译。")
        continue
    foldpath = item['foldpath']
    translatefile = item['translatefile']
    translatedto = item['translatedto']
    # 读取要翻译的 README 文件
    readme_path = os.path.join(foldpath, translatefile)

    if not os.path.exists(readme_path):
        print(f'文件 {readme_path} 不存在，跳过翻译。')
        continue

    process_file(readme_path, translatedto, json_data)
