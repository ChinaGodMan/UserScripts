import os
import re

def list_md_files(directory):
    # 存储所有 .md 和 .MD 文件的路径
    md_files = []

    # 遍历目录及其子目录
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.md'):
                md_files.append(os.path.join(root, file))

    return md_files

def contains_markdown_table(file_path):
    # 定义 Markdown 表格的正则表达式模式
    table_pattern = re.compile(r'\|.*?\|\s*\n(\|\s*[-:]+\s*\|)+', re.MULTILINE)

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            # 检查文件内容是否包含 Markdown 表格
            if table_pattern.search(content):
                return True
    except Exception as e:
        print(f"无法读取文件 {file_path}: {e}")

    return False

def main():
    # 直接在代码中指定要搜索的目录路径
    directory = '/renmindeqinwuyuan'

    # 获取所有 .md 和 .MD 文件路径
    md_files = list_md_files(directory)

    # 输出包含 Markdown 表格的文件路径
    found_files = [file for file in md_files if contains_markdown_table(file)]

    if found_files:
        print("包含 Markdown 表格的 .md 和 .MD 文件路径：")
        for file in found_files:
            print(file)
    else:
        print("没有找到包含 Markdown 表格的 .md 或 .MD 文件。")

if __name__ == "__main__":
    main()
