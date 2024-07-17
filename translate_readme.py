from googletrans import Translator
import time
import re  # 导入正则表达式模块用于提取 HTML 中的文本

# 创建翻译器实例
translator = Translator()

# 读取 README 文件
with open('Script details/糊裱匠/README_zh-CN.md', 'r', encoding='utf-8') as f_in:
    lines = f_in.readlines()

# 存储中文文本的位置和对应的英文翻译
translations = []
new_lines = []

# 正则表达式提取 HTML 中的文本内容
def extract_text_from_html(html):
    # 提取 HTML 标签之间的文本内容
    return re.findall(r'>([^<>]+)<', html)

# 翻译每一行中的中文文本
for line_number, line in enumerate(lines):
    if any('\u4e00' <= char <= '\u9fff' for char in line):  # 检查是否包含中文字符
        text_blocks = extract_text_from_html(line)  # 从 HTML 中提取中文文本块
        for text in text_blocks:
            if '\u4e00' <= text[0] <= '\u9fff':  # 只处理以中文字符开头的文本块
                # 翻译中文文本
                translated_text = translator.translate(text, src='zh-CN', dest='en').text
                # 记录中文文本的位置和翻译
                translations.append((line_number, text, translated_text))
                time.sleep(1)  # 暂停1秒，防止请求过多被屏蔽

# 替换文本中的中文部分为英文翻译
for line_number, line in enumerate(lines):
    # 将翻译后的中文文本替换为英文翻译
    for original_text, translated_text in [(text, trans) for ln, text, trans in translations if ln == line_number]:
        line = line.replace(original_text, translated_text)
    new_lines.append(line)  # 添加翻译后的行内容

# 将翻译后的内容写入 fanyi.md 文件
with open('Script details/糊裱匠/fanyi.md', 'w', encoding='utf-8') as f_out:
    f_out.writelines(new_lines)

print("翻译完成，已将结果写入 'Script details/糊裱匠/fanyi.md'.")
