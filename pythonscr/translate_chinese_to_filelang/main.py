import os
import re
import json
from urllib.parse import urlencode
from urllib.request import urlopen
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
# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')
def replace_encoded_with_utf8(file_path, json_data):
    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()

    # 进行 JSON 数据中的编码解码和替换
    for chinese_text, encoded_value in json_data.items():
        if encoded_value in content:
            # 进行 UTF-8 解码并替换
            content = content.replace(encoded_value, chinese_text)

    # 将替换后的内容写回文件
    with open(file_path, 'w', encoding='utf-8') as f_out:
        f_out.write(content)

    print(f"文件 '{file_path}' 替换完成。")
# 函数来请求翻译API
# 创建一个全局翻译缓存字典
translation_cache = {
    "复刻": "Fork",
    "问题": "issues",
    # 可以继续添加其他常见的翻译
}

# 函数来请求翻译API，并使用缓存字典
def translate_text(text, target_lang):
    # 如果文本在缓存字典中，直接返回对应的翻译
    if text in translation_cache:
        print(f"从缓存中获取翻译：{text} -> {translation_cache[text]}")
        return translation_cache[text]

    # 不在缓存中的文本，调用翻译API
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
        
        # 将新翻译的文本添加到缓存字典中
        #translation_cache[text] = translated_text
        
        return translated_text
    except Exception as e:
        print(f"翻译错误：{e}")
        return None

# 遍历 Script details/ 下的二级目录
base_dir = "Script details"
for root, dirs, files in os.walk(base_dir):
    for file in files:
        # 排除 README.md 和 README_zh-TW.md 文件 为全体华人提供繁体得了.
        #if file == 'README.md' or file == 'README_zh-TW.md':
        if file == 'README.md':
            continue
        
        # 匹配 README_xx.md 格式的文件，并提取语言代码
        match = re.match(r'README_([a-z]{2})\.md', file)
        if not match:
            continue

        lang_code = match.group(1)  # 提取语言代码

        # 构造文件路径
        file_path = os.path.join(root, file)
        replace_encoded_with_utf8(file_path, json_data)
        print(f"正在翻译文件：{file_path}，目标语言：{lang_code}")

        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f_in:
            lines = f_in.readlines()

        # 存储中文文本的位置和对应的翻译
        translations = []
        blacklist = ["人民的勤务员", "中文简体", "中文繁体"]

        for line_number, line in enumerate(lines):
            # 查找所有中文文本
            for match in chinese_pattern.finditer(line):
                chinese_text = match.group()
                if chinese_text in blacklist:
                    print(f"'{chinese_text}' 在黑名单中，跳过翻译。")
                    continue  # 跳过此文本，不进行翻译
                
                # 翻译中文文本
                translated_text = translate_text(chinese_text, lang_code)
                if translated_text is not None:
                    # 记录中文文本的位置和翻译
                    translations.append((line_number, chinese_text, translated_text))

        # 替换文本中的中文部分为翻译后的文本
        new_lines = []
        for line_number, line in enumerate(lines):
            # 将翻译后的中文文本替换为目标语言的翻译
            for original_text, translated_text in [(text, trans) for ln, text, trans in translations if ln == line_number]:
                line = line.replace(original_text, translated_text)
            new_lines.append(line)  # 添加翻译后的行内容

        # 覆盖原文件并保存翻译后的内容
        with open(file_path, 'w', encoding='utf-8') as f_out:
            f_out.writelines(new_lines)

        print(f"翻译完成，已覆盖文件 '{file_path}'。")
