import os

# 定义分隔符和新内容文件的路径
SEPARATOR = 'https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">'
NEW_CONTENT_PATH = os.path.join('pythonscr', 'new')

def get_new_content():
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        return file.read()

def process_file(file_path, new_content):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    # 找到分隔符的索引
    try:
        separator_index = next(i for i, line in enumerate(lines) if SEPARATOR in line)
    except StopIteration:
        # 如果分隔符没有找到，返回原文件内容
        print(f"No separator found in {file_path}.")
        return

    # 生成新的内容
    new_lines = [new_content]  # 替换的内容
    new_lines.extend(lines[separator_index:])  # 保留分隔符及其后的内容
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)
    print(f"Processed {file_path}")

def main():
    new_content = get_new_content()
    
    # 遍历当前目录下的所有 .md 文件
    for root, dirs, files in os.walk('/'):
        for file_name in files:
             if file_name.lower().endswith('.md'):
                file_path = os.path.join(root, file_name)
                process_file(file_path, new_content)
                

if __name__ == '__main__':
    main()
