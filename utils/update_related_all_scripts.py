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
        script_relatedscripts = script.get('group')
        # 如果脚本的 relatedscripts 与当前脚本相同，就将其添加到描述中
        if script_relatedscripts == relatedscripts_category:
            greasyfork_id = script.get('greasyfork_id', '未知ID')
            full_path = script.get("directory") + "/" + script.get("js_name")
            results = search_in_file(full_path, code)
            name = "\n".join(results.name_matches)
            description = "\n".join(results.description_matches)
            link = f"[**{name}**](https://greasyfork.org/scripts/{greasyfork_id})"
            descriptions.append(f"> -   {link}: {description}")

    return "\n".join(descriptions) + "\n"


# 获取readme文件中相关脚本分组
def check_related_readme(file_path, related_scripts_map):
    not_in_scriptspath = []
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        # 匹配 <!--AUTO_{key}_PLEASE_DONT_DELETE_IT--> 标签
        matches = re.findall(r'<!--RELATED-([a-zA-Z0-9\-一-龥]+)-END-->', content)
        if matches:
            for key in matches:
                # 分组必须包含中文字符串,老代码了,早知道就换个格式了,妈的.
                if re.search(r'[\u4e00-\u9fa5]', key):
                    if key not in related_scripts_map:
                        not_in_scriptspath.append(key)
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
    return not_in_scriptspath


# 删除readme文件中不存在的相关脚本分组
def delete_related_readme(directory_path, not_in_map):
    for file in os.listdir(directory_path):
        if file.endswith('.md') and os.path.isfile(os.path.join(directory_path, file)):
            file_path = os.path.join(directory_path, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            is_modified = False

            # 删除对应标签和内容
            for key in not_in_map:
                start_tag = f"<!--RELATED-{key}-->"
                end_tag = f"<!--RELATED-{key}-END-->"
                pattern = re.compile(re.escape(start_tag) + r'.*?' + re.escape(end_tag), re.DOTALL)
                if re.search(pattern, content):
                    content = re.sub(pattern, '', content)
                    print(f" {file_path} 中的失效分组[\033[31m{key}\033[0m]已被删除。")
                    is_modified = True
            if is_modified:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)


def process_script(script, scripts, start_tag, end_tag, key):
    backuppath = script.get('directory', '')
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
                process_file_plus(file_path, descriptions, start_tag, end_tag, "<!--FOOTER-->")


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    related_scripts_map = {}
    for script in scripts:
        # 构建`相关脚本`分组
        relatedscripts = script.get('group')
        if relatedscripts:
            if relatedscripts not in related_scripts_map:
                related_scripts_map[relatedscripts] = []
                related_scripts_map[relatedscripts].append(relatedscripts)
    for script in scripts:
        # 列出`readme`文本中的相关脚本分钟
        cnfile_path = os.path.join(script.get('directory', ''), "README.md")
        not_in_map = check_related_readme(cnfile_path, related_scripts_map)
        # 如果有不存在的`相关脚本`,就删除不存在的`相关脚本`分组
        if len(not_in_map) > 0:
            delete_related_readme(script.get('directory', ''), not_in_map)
        for key, value in related_scripts_map.items():
            start_tag = f"<!--RELATED-{key}-->"
            end_tag = f"<!--RELATED-{key}-END-->"
            process_script(script, scripts, start_tag, end_tag, key)


if __name__ == "__main__":
    main()
