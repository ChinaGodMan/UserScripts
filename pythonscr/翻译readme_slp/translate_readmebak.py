import json
import os
import re
import time
from urllib.parse import urlencode
from urllib.request import urlopen

# 读取 JSON 文件中的翻译列表
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'translate_readme.json')

with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)


# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')
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
translation_cache = {
    "复刻": "Fork",
    "问题": "issues",
    # 可以继续添加其他常见的翻译
}
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

    with open(readme_path, 'r', encoding='utf-8') as f_in:
        lines = f_in.readlines()

    # 提取中文文本进行翻译
    blacklist = ["人民的勤务员", "中文简体", "中文繁体"]
    for lang in translatedto:
        # 创建目标文件的路径
        output_path = os.path.join(foldpath, f'docs/README_{lang}.md')

        # 存储中文文本的位置和对应的翻译
        translations = []

        for line_number, line in enumerate(lines):
            # 查找所有中文文本
            for match in chinese_pattern.finditer(line):
                chinese_text = match.group()
                if chinese_text in blacklist:
                    print(f"'{chinese_text}' 在黑名单中，跳过翻译。")
                    continue  # 跳过此文本，不进行翻译
                
                # 翻译中文文本
                translated_text = translate_text(chinese_text, lang)
                if translated_text is not None:
                    # 记录中文文本的位置和翻译
                    translations.append((line_number, chinese_text, translated_text))
                  #  time.sleep(0.5)  # 添加请求间隔时间以防止被限制

        # 替换文本中的中文部分为翻译后的文本
        new_lines = []
       
        for line_number, line in enumerate(lines):
            # 将翻译后的中文文本替换为目标语言的翻译
            for original_text, translated_text in [(text, trans) for ln, text, trans in translations if ln == line_number]:
                line = line.replace(original_text, translated_text)
            new_lines.append(line)  # 添加翻译后的行内容

        # 新建或覆盖目标文件并保存翻译后的内容
        with open(output_path, 'w', encoding='utf-8') as f_out:
            f_out.writelines(new_lines)

        print(f"翻译完成，已将 {lang} 语言的结果写入 '{output_path}'。")
