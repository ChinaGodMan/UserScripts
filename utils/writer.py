def process_file_plus(file_path, new_content, start_tag, end_tag, insert_position, position_control='above'):
    """
    处理指定文件，将新内容插入到标记之间或在特定字符串上方或下方，
    并包括开始和结束标记。

    参数:
    - file_path: 文件路径
    - new_content: 需要插入的新内容
    - start_tag: 开始标记
    - end_tag: 结束标记
    - insert_position: 查找的插入位置字符串
    - position_control: 控制插入到指定行的上方（'above'）或下方（'below'）
    """
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

    # 判断是否找到了开始和结束标记
    if start_index != -1 and end_index != -1 and start_index < end_index:
        # 找到了标记，删除标记之间的内容并插入新的内容
        new_lines = lines[:start_index + 1]  # 保留开始标记之前的内容（包含开始标记）
        new_lines.append(new_content + '\n')  # 添加新的内容
        new_lines.extend(lines[end_index:])  # 保留结束标记之后的内容
    else:
        # 未找到开始和结束标记，查找插入位置字符串
        insert_index = -1
        for i, line in enumerate(lines):
            if insert_position in line:
                insert_index = i
                break

        # 如果找到了插入位置字符串，则按位置控制参数插入内容
        if insert_index != -1:
            if position_control == 'above':
                # 插入到该行上方
                new_lines = (
                    lines[:insert_index] +
                    [f"{start_tag}\n", new_content + '\n', f"{end_tag}\n"] +
                    lines[insert_index:]
                )
            else:
                # 插入到该行下方
                new_lines = (
                    lines[:insert_index + 1] +
                    [f"{start_tag}\n", new_content + '\n', f"{end_tag}\n"] +
                    lines[insert_index + 1:]
                )
        else:
            # 如果没有找到插入位置字符串，则将新内容插入到文件末尾，并添加开始和结束标记
            new_lines = lines
            new_lines.append(f"{start_tag}\n")
            new_lines.append(new_content + '\n')
            new_lines.append(f"{end_tag}\n")

    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)
    print(f"Processed {file_path}")


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
