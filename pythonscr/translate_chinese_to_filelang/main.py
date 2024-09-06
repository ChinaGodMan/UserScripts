import os
import re
import json
from urllib.parse import urlencode
from urllib.request import urlopen

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]')

# 函数来请求翻译API
def translate_text(text, target_lang):
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
