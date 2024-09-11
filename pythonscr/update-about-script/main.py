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
START_TAG = "<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->"
END_TAG = "<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->"

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
def generate_description(current_script, all_scripts):
    descriptions = []
    
    relatedscripts = current_script.get('relatedscripts', {})
    
    # 遍历relatedscripts下的每个属性
    for category, related_ids in relatedscripts.items():
        #descriptions.append(f"### {category}\n")
        descriptions.append(f"> ### {category}")
        # 对于每个id，查找GreasyFork匹配的脚本
        for greasyfork_id in related_ids:
            related_script = find_script_by_greasyfork_id(all_scripts, greasyfork_id)
            
            if related_script:
                name = related_script.get('name', '未知名称')
                description = related_script.get('description', '无描述')
                # 创建点击可跳转的 Markdown 链接
                link = f"[**{name}**](https://greasyfork.org/scripts/{greasyfork_id})"
                descriptions.append(f"> - {link}: {description}")
            else:
                descriptions.append(f"- 未找到与 GreasyFork ID {greasyfork_id} 对应的脚本。")
    
    # 在生成的描述最后加一个换行符
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
                     continue
                    # 针对当前脚本生成描述
                    descriptions = generate_description(script, scripts)
                    
                    # 更新当前Markdown文件内容
                    process_file(file_path, descriptions)
                    print(f"Updated {file_path}")

if __name__ == "__main__":
    main()
