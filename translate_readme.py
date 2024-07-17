from googletrans import Translator
import re
import os

# 创建翻译器实例
translator = Translator()

# 读取 tr.txt 文件中的语言列表
with open('Script details/糊裱匠/tr.txt', 'r', encoding='utf-8') as f_tr:
    languages = [line.strip() for line in f_tr if line.strip()]

# 正则表达式匹配中文字符
chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')

# 遍历每一种语言
for lang in languages:
    # 读取 README 文件
    readme_path = f'Script details/糊裱匠/README_zh-CN.md'
    if not os.path.exists(readme_path):
        print(f'文件 {readme_path} 不存在，跳过翻译。')
        continue

    with open(readme_path, 'r', encoding='utf-8') as f_in:
        lines = f_in.readlines()

    # 存储中文文本的位置和对应的翻译
    translations = []

    # 提取中文文本进行翻译
    for line_number, line in enumerate(lines):
        # 查找所有中文文本
        for match in chinese_pattern.finditer(line):
            chinese_text = match.group()
            # 翻译中文文本
            translated_text = translator.translate(chinese_text, src='zh-CN', dest=lang).text
            # 记录中文文本的位置和翻译
            translations.append((line_number, chinese_text, translated_text))

    # 替换文本中的中文部分为翻译后的文本
    new_lines = []
    for line_number, line in enumerate(lines):
        # 将翻译后的中文文本替换为目标语言的翻译
        for original_text, translated_text in [(text, trans) for ln, text, trans in translations if ln == line_number]:
            line = line.replace(original_text, translated_text)
        new_lines.append(line)  # 添加翻译后的行内容

    # 保存翻译后的内容到对应的 README 文件中
    output_path = f'Script details/糊裱匠/README_{lang}.md'
    with open(output_path, 'w', encoding='utf-8') as f_out:
        f_out.writelines(new_lines)

    print(f"翻译完成，已将 {lang} 语言的结果写入 '{output_path}'。")
