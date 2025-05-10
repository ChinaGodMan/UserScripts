from writer import process_file
from helper import get_md_files
from content_snippet import get_file_description
from searcher import search_in_file
import re
import json
import os


# 读取JSON文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)


# 生成描述信息，仅针对当前脚本的relatedscripts
def generate_description(current_script, all_scripts, code):
    descriptions = []
    # 获取当前脚本的 relatedscripts 值作为分类名
    relatedscripts_category = current_script.get('group')
    # 如果没有 relatedscripts，返回空描述
    if not relatedscripts_category:
        return "无相关脚本。\n\n"
    # 添加分类名到描述中
    descriptions.append(f'<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">\n\n> ### 🔍你可能在找{relatedscripts_category}\n>')
    # 遍历所有脚本，查找具有相同 relatedscripts 值的脚本
    for script in all_scripts:
        script_relatedscripts = script.get('group')
        # 如果脚本的 relatedscripts 与当前脚本相同，就将其添加到描述中
        if script_relatedscripts == relatedscripts_category:
            greasyfork_id = script.get('greasyfork_id', '未知ID')
            full_path = script.get('directory') + "/" + script.get('js_name')
            results = search_in_file(full_path, code)
            name = results.name_matches[0]
            description = results.description_matches[0]
            link = f"[**{name}**](https://greasyfork.org/scripts/{greasyfork_id})"
            descriptions.append(f"> -   {link}: {description}")
    return "\n".join(descriptions) + "\n"


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    for script in scripts:
        script_directory = script.get('directory', '')
        start_tag = "<!--RELATED-->"
        end_tag = "<!--RELATED-END-->"
        cnfile_path = os.path.join(script_directory, "README.md")
        descriptions = generate_description(script, scripts, "zh-CN")
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        if olddescriptions + "\n" == descriptions:  # 换行符添加上,就这样了能用就行
            continue
        else:
            print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 内容变化,执行替换\033[0m")
        md_files = get_md_files(script_directory)
        for file_name in md_files:
            file_path = os.path.join(script_directory, file_name)
            match = re.match(r'README_([a-zA-Z\-]+)\.md', file_name)
            lang_code = match.group(1) if match else "zh-CN"
            descriptions = generate_description(script, scripts, lang_code)
            process_file(file_path, descriptions, start_tag, end_tag, "head")


if __name__ == "__main__":
    main()
