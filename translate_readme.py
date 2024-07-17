from googletrans import Translator

translator = Translator()

# 读取 README 文件
with open('Script details/糊裱匠/README_zh-CN.md', 'r', encoding='utf-8') as f_in:
    lines = f_in.readlines()

translated_lines = []

# 翻译每一行
for line in lines:
    translated_line = line.strip()
    if any('\u4e00' <= char <= '\u9fff' for char in line):  # 检查是否包含中文字符
        translated_line = translator.translate(line, src='zh-CN', dest='en').text
    translated_lines.append(translated_line + '\n')

# 创建或写入翻译后的文件
with open('Script details/糊裱匠/fanyi.md', 'w', encoding='utf-8') as f_out:
    f_out.writelines(translated_lines)
