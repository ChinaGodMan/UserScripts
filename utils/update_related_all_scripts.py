from writer import process_file_plus
from content_snippet import get_file_description
from searcher import search_in_file
import re
import json
import os
import sys
sys.dont_write_bytecode = True


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
def generate_description(current_script, all_scripts, code):
    descriptions = []
    # 获取当前脚本的 relatedscripts 值作为分类名
    relatedscripts_category = current_script
    # 如果没有 relatedscripts，返回空描述
    if not relatedscripts_category:
        return "无相关脚本。\n\n"
    # 添加分类名到描述中
    descriptions.append(f'<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">\n\n> ### 🔍你可能在找{relatedscripts_category}\n>')
    # 遍历所有脚本，查找具有相同 relatedscripts 值的脚本
    for script in all_scripts:
        script_relatedscripts = script.get('relatedscripts')
        # 如果脚本的 relatedscripts 与当前脚本相同，就将其添加到描述中
        if script_relatedscripts == relatedscripts_category:
            greasyfork_id = script.get('GreasyFork', '未知ID')
            full_path = script.get("backuppath") + "/" + script.get("path")
            results = search_in_file(full_path, code)
            name = "\n".join(results.name_matches)
            description = "\n".join(results.description_matches)
            link = f"[**{name}**](https://greasyfork.org/scripts/{greasyfork_id})"
            descriptions.append(f"> -   {link}: {description}")

    return "\n".join(descriptions) + "\n"


def process_script(script, scripts, start_tag, end_tag, key):
    backuppath = script.get('backuppath', '')
    cnfile_path = os.path.join(backuppath, "README.md")

    descriptions = generate_description(key, scripts, "zh-CN")

    olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
    if olddescriptions is None:
        olddescriptions = "ggg"
    if olddescriptions + "\n" == descriptions:
        return
    else:
        print(f"----[\033[94m{script.get('name', '')}\033[0m--\033[95m{key}\033[0m]\033[92m 内容变化,执行替换\033[0m")

    if backuppath and os.path.isdir(backuppath):
        for file in os.listdir(backuppath):
            if file.endswith('.md'):
                file_path = os.path.join(backuppath, file)
                match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
                if match:
                    lang_code = match.group(1)
                else:
                    lang_code = "zh-CN"
                descriptions = generate_description(key, scripts, lang_code)
                print(descriptions)
                process_file_plus(file_path, descriptions, start_tag, end_tag, "<!--FOOTER-->")


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    related_scripts_map = {}
    for script in scripts:
        relatedscripts = script.get('relatedscripts')
        if relatedscripts:
            if relatedscripts not in related_scripts_map:
                related_scripts_map[relatedscripts] = []
                related_scripts_map[relatedscripts].append(relatedscripts)
    for script in scripts:
        for key, value in related_scripts_map.items():
            start_tag = f"<!--AUTO_{key}_PLEASE_DONT_DELETE_IT-->"
            end_tag = f"<!--AUTO_{key}_PLEASE_DONT_DELETE_IT-END-->"
            process_script(script, scripts, start_tag, end_tag, key)


if __name__ == "__main__":
    main()
