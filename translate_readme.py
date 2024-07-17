from googletrans import Translator

# 创建翻译器实例
translator = Translator()

# 读取 README 文件
with open('Script details/糊裱匠/README_zh-CN.md', 'r', encoding='utf-8') as f_in:
    lines = f_in.readlines()

# 存储中文文本的位置和对应的英文翻译
translations = []
new_lines = []

# 翻译每一行
for line_number, line in enumerate(lines):
    if any('\u4e00' <= char <= '\u9fff' for char in line):  # 检查是否包含中文字符
        translated_text = translator.translate(line, src='zh-CN', dest='en').text
        translations.append((line_number, line.strip(), translated_text))  # 记录中文文本的位置和翻译
    new_lines.append(line)  # 保持原始的文本行

# 替换文本中的中文部分为英文翻译
for line_number, original_text, translated_text in translations:
    # 获取该行的内容
    line = new_lines[line_number]
    # 替换该行中的中文文本
    new_lines[line_number] = line.replace(original_text, translated_text)

# 将翻译后的内容写入 fanyi.md 文件
with open('Script details/糊裱匠/fanyi.md', 'w', encoding='utf-8') as f_out:
    f_out.writelines(new_lines)

print("翻译完成，已将结果写入 'Script details/糊裱匠/fanyi.md'.")
