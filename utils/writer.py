import os
import subprocess
from datetime import datetime, timedelta
import sys
sys.dont_write_bytecode = True

# 废弃此函数,越写越乱,


def is_first_commit(file_path):
    try:
        # 获取文件的提交次数
        result = subprocess.run(
            ['git', 'rev-list', '--count', 'HEAD', '--', file_path],
            capture_output=True, text=True, check=True
        )
        commit_count = int(result.stdout.strip())
        return commit_count == 1
    except subprocess.CalledProcessError as e:
        print(f"错误: 无法获取提交次数 - {file_path} : {e}")
        return False


# 废弃此函数,越写越乱,
def is_commit_recent(file_path, minutes):
    last_commit_time = get_last_git_commit_time(file_path)
    current_time = datetime.now()
    if current_time - last_commit_time > timedelta(minutes=minutes):
        return False
    else:
        return True


# 废弃此函数,越写越乱,
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


# 废弃此函数,越写越乱,
def is_md_empty(file_path, start_tag, end_tag):
    """判断 md 文件中 start_tag 和 end_tag 之间是否有内容。
    参数:
        file_path: 要检查的文件路径
        start_tag: 开始标签
        end_tag: 结束标签
    返回:
        如果没有内容，返回 True；否则返回 False。
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        # 使用 start_tag 和 end_tag 来查找内容
        start_index = content.find(start_tag)
        end_index = content.find(end_tag, start_index)
        if start_index == -1 or end_index == -1:
            # 如果找不到任一标签，认为没有内容
            return True
        # 获取 start_tag 和 end_tag 之间的内容
        content_between_tags = content[start_index + len(start_tag):end_index].strip()
        # 判断内容是否为空
        if not content_between_tags:
            return True  # 没有内容
        else:
            return False  # 有内容
    except FileNotFoundError:
        print(f"文件未找到: {file_path}")
        return True
    except Exception as e:
        print(f"发生错误: {e}")
        return True


# 废弃此函数,越写越乱,
def should_process_file(file_path, skip_time_check, writer_path, history_true, start_tag, end_tag):
    if skip_time_check:
        return True
    """判断文件是否需要处理
    file_path,需要检查的文件,update-shields和help遍历了所有md这里做个修复,
    因为他们传递进来的检查文件是SHIELDS.md,所以我们还要传递一下writer_path用于检查当前是否是更新日志.
 history_true ,当前为更新日志,直接检查,放在顶端执行,防止在下面被跳过,
 start_tag  end_tag 用来检查writer_path文件内标志之间是否是空白,如是空白内容直接添加.
    """
    # 获取当前时间
    # 获取文件的最后一次 Git 提交时间
    last_commit_time = get_last_git_commit_time(file_path)
    current_time = datetime.now()
    if history_true:
        print(f"\033[93m 为{history_true}执行时间检查...\033[0m")
        if current_time - last_commit_time > timedelta(minutes=5):
            print(f"\033[91m history_true文件被跳过: {file_path}（最后一次提交时间大于5分钟）\033[0m",)
            return False
        else:
            return True  # 提交时间在 5 分钟以内，继续处理文件
    # 检查文件名是否包含 "Change history"
    if "Change history" in file_path:
        # print(f"\033[91m 文件被跳过: {file_path}（包含 'Change history'）\033[0m")
        return False
    if "Change history" in writer_path:
        # print(f"\033[91m 文件被跳过: {writer_path}（包含 'Change history'）\033[0m")
        return False
    if is_first_commit(writer_path):
        # print(f"\033[91m 首次提交,直接添加........。...\033[0m")
        return True
    if is_md_empty(writer_path, start_tag, end_tag):
        # print(f"\033[91m 标志之间无内容直接添加.\033[0m")
        return True  # 没有内容，返回 True
    # 如果指定了跳过时间检查，直接处理文件
    if skip_time_check:
        return True
    if last_commit_time is None:
        return True  # 如果无法获取提交时间，默认继续处理
    # 如果最后一次提交时间距离现在大于 5 分钟，跳过处理
    if current_time - last_commit_time > timedelta(minutes=5):
        # print(f"\033[91m 文件被跳过: {file_path}（最后一次提交时间大于5分钟）\033[0m")
        return False
    return True


# 废弃此函数,越写越乱,
def process_markdown(new_content, target_file, start_tag, end_tag, insert_position='tail', skip_time_check=False, check_file=None, history_true=False):
    """
    修改 Markdown 文件内容模块。
    :param new_content: 要插入的内容字符串
    :param target_file: 要修改的目标文件路径
    :param start_tag: 标记头的开始标记
    :param end_tag: 标记头的结束标记
    :param insert_position: 如果找不到标记，内容插入在头部还是尾部 (head/tail)，默认是 'tail'
    :param skip_time_check: 是否跳过时间检查，默认是 False
    :param check_file: 用于检查的文件路径，如果未指定，则使用 target_file
    :param history_true: 用于 merge-change-history，仅用于检查时间，不修改 history 文件
    """
    # 选择检查的文件（如果没有传递 check_file，则使用 target_file）
    file_to_check = check_file if check_file else target_file
    # 判断是否需要处理该文件
    if os.path.isfile(target_file) and should_process_file(file_to_check, skip_time_check, target_file, history_true, start_tag, end_tag):
        process_file(target_file, new_content, start_tag, end_tag, insert_position)
