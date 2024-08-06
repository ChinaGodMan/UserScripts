import os

# 定义分隔符和新内容文件的路径
SEPARATOR = "## 使用帮助"
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'NewUserScriptslist.md')

def get_new_content():
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        return file.read()

def process_file(file_path, new_content):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    # 尝试找到分隔符的索引
    try:
        separator_index = next(i for i, line in enumerate(lines) if SEPARATOR in line)
        # 生成新的内容
        new_lines = lines[:separator_index]  # 保留分隔符之前的内容
        new_lines.append(new_content + '\n')  # 添加新内容
    except StopIteration:
        # 如果分隔符没有找到，直接在文件末尾添加新内容
        new_lines = lines
        new_lines.append('\n' + new_content)  # 添加新内容
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)
    print(f"Processed {file_path}")

def main():
    new_content = get_new_content()
    
    # 遍历当前目录下的所有 .md 文件
    for root, dirs, files in os.walk('./Script details/'):
        for file_name in files:
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(root, file_name)
                if "Change history" in file_path:
                     continue
                process_file(file_path, new_content)
                

if __name__ == '__main__':
    main()
