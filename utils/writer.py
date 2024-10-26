import os
import subprocess
from datetime import datetime, timedelta
import sys
sys.dont_write_bytecode = True


def process_file(file_path, new_content, start_tag, end_tag, insert_position):
    """处理指定文件，将新内容插入到标记之间"""
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    start_index = -1
    end_index = -1
    # 查找开始和结束标记的位置
    for i, line in enumerate(lines):
        if start_tag in line:
            start_index = i
        elif end_tag in line:
            end_index = i
            break
    # 如果找到了这两个标记，删除中间的内容并插入新的内容
    if start_index != -1 and end_index != -1 and start_index < end_index:
        new_lines = lines[:start_index + 1]  # 保留开始标记之前的内容（包括开始标记）
        new_lines.append(new_content + '\n')  # 添加新的内容
        new_lines.extend(lines[end_index:])  # 保留结束标记之后的内容
    else:
        # 如果没有找到标记，根据参数选择插入到头部还是尾部
        if insert_position == 'head':
            new_lines = [f"{start_tag}\n", new_content + '\n', f"{end_tag}\n"] + lines
        else:
            new_lines = lines
            if start_index == -1:  # 如果开始标记没有找到
                new_lines.append(f"\n{start_tag}\n")
            new_lines.append(new_content + '\n')
            if end_index == -1:  # 如果结束标记没有找到
                new_lines.append(f"{end_tag}\n")
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)
    print(f"Processed {file_path}")
