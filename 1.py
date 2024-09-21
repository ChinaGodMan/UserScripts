import os
import argparse
import subprocess
from datetime import datetime, timedelta

def get_last_git_commit_time(file_path):
    """获取文件的最后一次 git 提交时间"""
    try:
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ct', file_path], 
            stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True
        )
        timestamp = int(result.stdout.strip())
        return datetime.fromtimestamp(timestamp)
    except subprocess.CalledProcessError:
        print(f"无法获取文件的 Git 提交时间: {file_path}")
        return None

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

def should_process_file(file_path, skip_time_check):
    """判断文件是否需要处理"""
    # 检查文件名是否包含 "Change history"
    if "Change history" in file_path:
        print(f"\033[91m 文件被跳过: {file_path}（包含 'Change history'）\033[0m")
        return False
    
    # 如果指定了跳过时间检查，直接处理文件
    if skip_time_check:
        return True

    # 获取文件的最后一次 Git 提交时间
    last_commit_time = get_last_git_commit_time(file_path)
    if last_commit_time is None:
        return True  # 如果无法获取提交时间，默认继续处理

    # 获取当前时间
    current_time = datetime.now()

    # 如果最后一次提交时间距离现在小于 5 分钟，跳过处理
    if current_time - last_commit_time < timedelta(minutes=5):
        print(f"\033[91m 文件被跳过: {file_path}（最后一次提交时间小于5分钟）\033[0m")
        return False

    return True

def main():
    # 定义命令行参数
    parser = argparse.ArgumentParser(description="修改 Markdown 文件内容")
    parser.add_argument('--new-content', required=True, help="要插入的内容字符串")
    parser.add_argument('--target-file', required=True, help="要修改的目标文件路径")
    parser.add_argument('--start-tag', required=True, help="标记头的开始标记")
    parser.add_argument('--end-tag', required=True, help="标记头的结束标记")
    parser.add_argument('--insert-position', choices=['head', 'tail'], default='tail', help="如果找不到标记，内容插入在头部还是尾部 (head/tail)")
    parser.add_argument('--skip-time-check', action='store_true', help="跳过时间检查，直接修改文件")

    args = parser.parse_args()

    # 判断是否需要处理该文件
    if os.path.isfile(args.target_file) and should_process_file(args.target_file, args.skip_time_check):
        process_file(args.target_file, args.new_content, args.start_tag, args.end_tag, args.insert_position)
    else:
        print(f"目标文件无效或不符合处理条件：{args.target_file}")

if __name__ == '__main__':
    main()
