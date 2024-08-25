import json
import os
import re
from urllib.parse import urlencode
from urllib.request import urlopen

# 读取 translate_table.json 文件中的翻译表
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'translate_table.json')
with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as f:
    translate_table = json.load(f)

# 提取翻译目标语言的国家代码
target_languages = [item['code'] for item in translate_table if item.get('translated', False)]

# 读取 JSON 文件中的翻译文件 
NEW_CONTENT_PATH = os.path.join(script_dir, 'translate_readme.json')
with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

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

# 遍历 translatelist 中的每个条目
for item in data['translatelist']:
    if not item.get('translated', False):  # 检查 translated 的值，如果为 False 则跳过
        print(f"条目 {item['foldpath']} 的 translated 为 false，跳过翻译。")
        continue

    foldpath = item['foldpath']
    translatefile = item['translatefile']

    # 读取要翻译的 README 文件
    readme_path = os.path.join(foldpath, translatefile)
    if not os.path.exists(readme_path):
        print(f'文件 {readme_path} 不存在，跳过翻译。')
        continue

    with open(readme_path, 'r', encoding='utf-8') as f_in:
        lines = f_in.readlines()

    # 遍历目标语言并进行翻译
    for lang in target_languages:
        # 修改文件内容
        updated_lines = []
        for line in lines:
            if '@name' in line or '@description' in line:
                # 找到 @name 或 @description 后，将目标语言代码插入到内容末尾
                updated_line = re.sub(r'(@name|@description)', r'\1:' + lang, line)
                updated_lines.append(updated_line)
            else:
                updated_lines.append(line)

        # 创建目标文件的路径
        output_path = os.path.join(foldpath, f'README_{lang}.md')

        # 存储中文文本的位置和对应的翻译
        translations = []

        for line_number, line in enumerate(updated_lines):
            # 查找所有中文文本
            for match in chinese_pattern.finditer(line):
                chinese_text = match.group()
                # 翻译中文文本
                translated_text = translate_text(chinese_text, lang)
                if translated_text is not None:
                    # 记录中文文本的位置和翻译
                    translations.append((line_number, chinese_text, translated_text))

        # 替换文本中的中文部分为翻译后的文本
        new_lines = []
        for line_number, line in enumerate(updated_lines):
            # 将翻译后的中文文本替换为目标语言的翻译
            for original_text, translated_text in [(text, trans) for ln, text, trans in translations if ln == line_number]:
                line = line.replace(original_text, translated_text)
            new_lines.append(line)  # 添加翻译后的行内容

        # 新建或覆盖目标文件并保存翻译后的内容
        with open(readme_path, 'a', encoding='utf-8') as f_out:
           f_out.writelines(new_lines)

        print(f"翻译完成，已将 {lang} 语言的结果写入 '{readme_path}'。")
