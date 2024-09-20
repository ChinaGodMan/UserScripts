import os
import re

# 定义分隔符和新内容
SEPARATOR = '<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->'
START_TAG = "<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-->\n"
END_TAG = "\n<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->"

# 正则表达式匹配 <center>...</center>
CENTER_PATTERN = re.compile(r'<center>.*?</center>', re.DOTALL)

def process_file(file_path):
    if "Change history" in file_path:
        print(f"\033[93m 跳过文件: {file_path}\033[0m")
        return

    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # 找到分隔符的索引
    separator_index = content.find(SEPARATOR)
    if separator_index == -1:
        print(f"\033[91m 未找到分隔符 {file_path}.\033[0m")
        return

    # 从分隔符之后匹配第一个 <center>...</center>
    match = CENTER_PATTERN.search(content, separator_index)
    if not match:
        print(f"\033[91m 未找到 <center>...</center> 标签: {file_path}\033[0m")
        return

    # 获取匹配的位置
    start_pos = match.start()
    end_pos = match.end()

    # 构建新的内容：在 <center>...</center> 上方插入 START_TAG， 在其下方插入 END_TAG
    new_content = (
        content[:start_pos] +
        START_TAG + content[start_pos:end_pos] +
        END_TAG + content[end_pos:]
    )

    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

    print(f"\033[92m 已在文件 {file_path} 中插入更新标记。\033[0m")

def main():
    # 遍历当前目录下的所有 .md 文件
    for root, dirs, files in os.walk('./Script details/'):
        for file_name in files:
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(root, file_name)
                process_file(file_path)

if __name__ == '__main__':
    main()
