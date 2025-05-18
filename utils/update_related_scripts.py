import re
import os
from writer import process_file_plus
from helper import get_md_files
from helper import read_json
from helper import get_repo_name
from helper import format_str

from content_snippet import get_file_description
from searcher import search_in_file


# 生成描述信息，仅针对当前脚本的gro
def generate_description(current_group, all_scripts, lang):
    descriptions = []
    # 如果没有 current_group，返回空描述
    if not current_group:
        return "无相关脚本。\n\n"
    # 添加分类名到描述中
    descriptions.append(
        f'<img height="6px" width="100%" '
        'src="{separator}">\n\n'
        f'> ### 🔍你可能在找{current_group}\n>')
    # id升序
    sorted_scripts = sorted(all_scripts, key=lambda x: x['greasyfork_id'] if x.get('greasyfork_id') is not None else 0)
    # 遍历所有脚本，查找具有相同 group 值的脚本
    for script in sorted_scripts:
        script_group = script.get('group')
        # 如果脚本的 relatedscripts 与当前脚本相同，就将其添加到描述中
        if script_group == current_group:
            greasyfork_id = script.get('greasyfork_id')
            full_path = script.get('directory') + "/" + script.get('js_name')
            results = search_in_file(full_path, lang)
            name = results.name_matches[0]
            description = results.description_matches[0]
            # 导入失败的脚本没有id直接使用github
            if greasyfork_id in (None, 0):
                item = f"[**{name}**](https://github.com/{get_repo_name()}/tree/main/{script.get('directory')}#readme)"
            else:
                item = f"[**{name}**](https://greasyfork.org/scripts/{greasyfork_id})"

            descriptions.append(f"> -   {item}: {description}")
    str = format_str("\n".join(descriptions) + "\n")
    return str


def process_script(script, scripts, start_tag, end_tag, group):
    # group 可以从script.get('group')获取,这里直接使用直接传递的
    script_directory = script.get('directory', '')
    cnfile_path = os.path.join(script_directory, "README.md")
    descriptions = generate_description(group, scripts, "zh-CN")
    olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
    if olddescriptions is None:
        olddescriptions = "ggg"
    if olddescriptions + "\n" == descriptions:
        return
    else:
        print(f"----[\033[94m{script.get('name', '')}\033[0m--\033[95m{group}\033[0m]\033[92m 内容变化,执行替换\033[0m")
    md_files = get_md_files(script_directory)
    for file_name in md_files:
        file_path = os.path.join(script_directory, file_name)
        match = re.match(r'README_([a-zA-Z\-]+)\.md', file_name)
        lang_code = match.group(1) if match else "zh-CN"
        descriptions = generate_description(group, scripts, lang_code)
        process_file_plus(file_path, descriptions, start_tag, end_tag, "<!--FOOTER-->")


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    start_tag = "<!--RELATED-->"
    end_tag = "<!--RELATED-END-->"
    for script in scripts:
        process_script(script, scripts, start_tag, end_tag, script.get('group'))


if __name__ == "__main__":
    main()
