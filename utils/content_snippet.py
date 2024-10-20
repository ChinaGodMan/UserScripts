def get_file_description(file_path, start_tag, end_tag):
    """
    获取 文件中的相关脚本内容 之间的内容。

    参数:
        file_path: 要检查的文件路径
        start_tag: 开始标签
        end_tag: 结束标签

    返回:
        如果找到，返回开始标签和结束标签之间的内容；否则返回 None。
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        start_index = content.find(start_tag)
        end_index = content.find(end_tag, start_index)
        if start_index == -1 or end_index == -1:
            return "1"
        content_between_tags = content[start_index + len(start_tag):end_index].strip()
        return content_between_tags
    except FileNotFoundError:
        print(f"文件未找到: {file_path}")
        return "1"
    except Exception as e:
        print(f"发生错误: {e}")
        return "1"
