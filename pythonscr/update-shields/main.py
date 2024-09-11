import os
import subprocess
import time
def is_file_updated_more_than(file_path, timeout_minutes):
    try:
        # 使用 git log 获取文件的最后提交时间（Unix 时间戳）
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ct', file_path],
            capture_output=True, text=True, check=True
        )
        last_commit_time = int(result.stdout.strip())

        # 获取当前时间的 Unix 时间戳
        current_time = int(time.time())

        # 计算时间差（分钟）
        time_diff_minutes = (current_time - last_commit_time) / 60

        # 检查文件是否在超时时间之前被更新
        return time_diff_minutes > timeout_minutes
    except subprocess.CalledProcessError as e:
        print(f"错误: 无法获取提交时间 - {file_path}")
        return None
# 定义标记和新内容文件的路径
START_TAG = "<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->"
END_TAG = "<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->"
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'SHIELDS.md')

def get_new_content():
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        return file.read()

def process_file(file_path, new_content):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    start_index = -1
    end_index = -1

    # 查找开始和结束标记的位置
    for i, line in enumerate(lines):
        if START_TAG in line:
            start_index = i
        elif END_TAG in line:
            end_index = i
            break

    # 如果找到了这两个标记，删除中间的内容并插入新的内容
    if start_index != -1 and end_index != -1 and start_index < end_index:
        new_lines = lines[:start_index + 1]  # 保留开始标记之前的内容（包括开始标记）
        new_lines.append(new_content + '\n')  # 添加新的内容
        new_lines.extend(lines[end_index:])  # 保留结束标记之后的内容
    else:
        # 如果没有找到标记，则在文件顶部插入新的标记和内容
        new_lines = []
        if start_index == -1:  # 如果开始标记没有找到
            new_lines.append(f"{START_TAG}\n")
        new_lines.append(new_content + '\n')
        if end_index == -1:  # 如果结束标记没有找到
            new_lines.append(f"{END_TAG}\n")
        new_lines.extend(lines)  # 保留原始内容在插入的新标记和内容之后

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
                if is_file_updated_more_than("pythonscr/update-shields/SHIELDS.md", 5):
                     print(f"跳过文件 ，因为小徽章文件SHIELDS.md并没有更新。")
                     continue
                if "Change history" in file_path:
                    print(f"\033[91m 文件被跳过 {file_path}\033[0m")
                    continue
                process_file(file_path, new_content)

if __name__ == '__main__':
    main()
