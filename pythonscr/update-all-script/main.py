import json
import os
import time
import subprocess


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


# 配置标记
START_TAG = "<!--AUTO_ALLSCRIPT_PLEASE_DONT_DELETE_IT-->"
END_TAG = "<!--AUTO_ALLSCRIPT_PLEASE_DONT_DELETE_IT-END-->"

# 读取JSON文件


def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

# 根据relatedscripts的id找到对应的脚本


def find_script_by_greasyfork_id(scripts, greasyfork_id):
    for script in scripts:
        if str(script.get('GreasyFork')) == str(greasyfork_id):
            return script
    return None

# 生成描述信息，仅针对当前脚本的relatedscripts


def generate_description(all_scripts):
    related_scripts_map = {}

    # 遍历所有脚本，收集相同 relatedscripts 的脚本信息
    for script in all_scripts:
        relatedscripts_category = script.get('relatedscripts')
        if relatedscripts_category:
            if relatedscripts_category not in related_scripts_map:
                related_scripts_map[relatedscripts_category] = []

            greasyfork_id = script.get('GreasyFork', '未知ID')
            name = script.get('name', '未知名称')
            description = script.get('description', '无描述')

            # 存储相关脚本的信息
            related_scripts_map[relatedscripts_category].append({
                'name': name,
                'description': description,
                'link': f"https://greasyfork.org/scripts/{greasyfork_id}"
            })

    # 生成描述信息
    descriptions = []
    for category, scripts in related_scripts_map.items():
        descriptions.append(
            f'\n<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">\n\n> ### 🔍你可能在找 {category}')

        for script in scripts:
            link = f"[**{script['name']}**]({script['link']})"
            descriptions.append(f"> - {link}: {script['description']}")

    return "\n".join(descriptions) + "\n\n"


# 更新Markdown文件内容
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
        new_lines.append(new_content)  # 直接插入新的内容，无需手动添加换行符
        new_lines.extend(lines[end_index:])  # 保留结束标记之后的内容
    else:
        # 如果没有找到标记，则在文件末尾插入新的标记和内容
        new_lines = lines
        if start_index == -1:  # 如果开始标记没有找到
            new_lines.append(f"\n{START_TAG}\n")
        new_lines.append(new_content)  # 直接插入新的内容
        if end_index == -1:  # 如果结束标记没有找到
            new_lines.append(f"\n{END_TAG}\n")

    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)

# 主函数


def main():
    json_path = 'docs/ScriptsPath.json'

    # 读取并解析JSON
    data = read_json(json_path)
    scripts = data.get('scripts', [])

    # 遍历每个脚本，处理它的backuppath
    for script in scripts:
        backuppath = script.get('backuppath', '')
        if backuppath and os.path.isdir(backuppath):
            # 只获取backuppath路径下的md文件（不递归）
            for file in os.listdir(backuppath):
                if file.endswith('.md'):
                    file_path = os.path.join(backuppath, file)
                    if is_file_updated_more_than("./docs/ScriptsPath.json", 5):
                        print(f"跳过文件 ，因为脚本描述文件并没有更新。")
                        # continue
                    # 针对所有脚本
                    descriptions = generate_description(scripts)

                    # 更新当前Markdown文件内容
                    process_file(
                        file_path, f'\n<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest"> \n\n### 查看所有发布脚本 \n\n'+descriptions+f'\n<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest"><center><div align="center"><a href="#top"><strong>回到顶部↑</strong></a></div></center>\n\n')
                    print(f"Updated {file_path}")


if __name__ == "__main__":
    main()
