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

def extract_markdown_tables(file_path):
    # 定义 Markdown 表格的正则表达式模式
    table_pattern = re.compile(
        r'(\|(?:[^\|\n]*\|)+)\n(\|(?:[-:]+\|)+)\n(?:\|(?:[^\|\n]*\|)+\n?)+',
        re.MULTILINE
    )
    
    tables = []

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            # 查找所有 Markdown 表格
            matches = table_pattern.findall(content)
            # 组合表格的各行
            for match in matches:
                table = "\n".join(match).strip()
                # 补充表格中的分隔符行
                table_with_divider = f"{match[0]}\n{match[1]}\n" + "\n".join(row for row in match[2:])
                tables.append(table_with_divider)
    except Exception as e:
        print(f"无法读取文件 {file_path}: {e}")

    return tables

def main():
    # 直接在代码中指定要搜索的目录路径
    directory = '/UserScripts'

    # 获取所有 .md 和 .MD 文件路径
    md_files = list_md_files(directory)

    # 输出包含 Markdown 表格的文件路径和表格内容
    for file in md_files:
        tables = extract_markdown_tables(file)
        if tables:
            print(f"文件: {file}")
            for i, table in enumerate(tables, start=1):
                print(f"表格 {i}:")
                print(table)
                print("\n" + "-"*40 + "\n")  # 分隔线
        else:
            print(f"文件: {file} 没有找到 Markdown 表格。")

if __name__ == "__main__":
    main()
