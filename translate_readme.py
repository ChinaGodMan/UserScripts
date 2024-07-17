from googletrans import Translator

# 创建翻译器实例
translator = Translator()

# 读取 README 文件
with open('Script details/糊裱匠/README_zh-CN.md', 'r', encoding='utf-8') as f_in:
    lines = f_in.readlines()

# 存储翻译后的内容
translated_lines = []

# 翻译每一行中的中文文本
for line in lines:
    # 检查是否包含中文字符
    if any('\u4e00' <= char <= '\u9fff' for char in line):
        # 提取中文文本
        chinese_texts = [text for text in line.split(' ') if '\u4e00' <= text[0] <= '\u9fff']
        for text in chinese_texts:
            # 翻译中文文本
            translated_text = translator.translate(text, src='zh-CN', dest='en').text
            # 替换行中的中文文本
            line = line.replace(text, translated_text)
    translated_lines.append(line)  # 添加翻译后的行内容

# 创建或写入翻译后的文件
with open('Script details/糊裱匠/fanyi.md', 'w', encoding='utf-8') as f_out:
    f_out.writelines(translated_lines)

print("翻译完成，已将结果写入 'Script details/糊裱匠/fanyi.md'.")
