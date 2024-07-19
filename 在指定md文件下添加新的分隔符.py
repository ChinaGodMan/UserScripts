import os

def add_text_after_string(file_path, search_string, text_to_add):
    """在指定文件中搜索特定字符串并在其下方添加新文本。"""
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    with open(file_path, 'w', encoding='utf-8') as file:
        for line in lines:
            file.write(line)
            if search_string in line:
                file.write('\n')  # 添加换行符
                file.write(text_to_add + '\n')  # 添加新文本及换行符

def process_md_files(root_dir, search_string, text_to_add):
    """遍历指定目录，处理所有 .md 文件。"""
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith('.md'):
                file_path = os.path.join(root, file)
                add_text_after_string(file_path, search_string, text_to_add)

def main():
    # 获取当前目录
    current_dir = os.getcwd()
    # 指定要查找的字符串和要添加的文本
    search_string = "![**FireMonkey OK**](https://img.shields.io/badge/FireMonkey-OK-006989?labelColor=885053)"
    text_to_add = '<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">'
    
    # 处理所有 .md 文件
    process_md_files(current_dir, search_string, text_to_add)

if __name__ == '__main__':
    main()
