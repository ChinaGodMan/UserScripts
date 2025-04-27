from writer import process_file
from searcher import search_in_file
import json
import sys
import argparse
sys.dont_write_bytecode = True

# 定义需要查找的语言
LANG_CODE = 'zh-CN'


# 读取 JSON 文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)


# 生成描述信息，仅针对当前脚本的 relatedscripts
def generate_description(all_scripts, single_group=False):
    related_scripts_map = {}
    # single_group为True时，脚本归入“所有脚本”组,不进行分类
    if single_group:
        related_scripts_map['所有脚本'] = all_scripts
    else:
        for script in all_scripts:
            relatedscript = script.get('group')
            if relatedscript not in related_scripts_map:
                related_scripts_map[relatedscript] = []
            related_scripts_map[relatedscript].append(script)
    return related_scripts_map


# 生成 HTML 表格
def generate_html_table(scripts):
    html_table = ''''''
    for script in scripts:
        img_tag = f'<img width=511 src="{script.get("preview")}">' if script.get("preview") else ""
        script_id = script.get("greasyfork_id")
        script_fold = script.get("directory")
        # ? 直接从尼玛的脚本中读取脚本名称和介绍,废弃掉从json内读取,让README.md显示完整的信息
        script_absolute_path = script.get("directory") + "/" + script.get("js_name")
        sreach_result = search_in_file(script_absolute_path, LANG_CODE)
        script_name = sreach_result.name_matches[0]
        script_description = sreach_result.description_matches[0]
        # ! 对没有预览截图的脚本,只显示介绍就行了
        screenshot_block = f'''<details>
    <summary>{script_description}</summary>
    <br><blockquote>
        <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script_fold}">
           {img_tag}</a>
    </blockquote>
</details>''' if img_tag else script_description

        html_table += f'''<h3>
    <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script_fold}">
        <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="{script.get("icon")}"><img width=18 src="{script.get("icon")}" width=18></a>
    <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script_fold}">{script_name}</a>&nbsp;
    <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script_fold}">
        <img height=24 src="https://img.shields.io/greasyfork/dt/{script_id}?logo=greasyfork&logoColor=white&labelColor=%23670000&color=%23670000&style=for-the-badge&label=%E7%94%A8%E6%88%B7%E6%95%B0%E9%87%8F"></a>
</h3>

{screenshot_block}

<blockquote>
    <a href="https://greasyfork.org/scripts/{script_id}">
        <img height=13 src="https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/images/icons/platforms/tampermonkey/icon28.png"><img height=13.5 src="https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/images/svg/vm.svg"><img height=13 src="https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/images/icons/platforms/scriptcat/icon108.png"><img height=13 src="https://github.com/ChinaGodMan/UserScriptsHistory/blob/main/images/icons/platforms/orangemonkey/icon112.png"></a>
    <a href="https://greasyfork.org/scripts/{script_id}">
        Greasemonkey</a> /
    <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script_fold}/#readme">
        <picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://assets.aiwebextensions.com/images/icons/paper-sheet/white.svg"><img height=13 src="https://assets.aiwebextensions.com/images/icons/paper-sheet/black.svg"></picture></a>
    <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script_fold}/#readme">
        自述文件</a> /
    <a href="https://github.com/ChinaGodMan/UserScripts/discussions">
        <picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://assets.aiwebextensions.com/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://assets.aiwebextensions.com/images/icons/speech-bubble-square/black.svg"></picture></a>
    <a href="https://github.com/ChinaGodMan/UserScripts/discussions">讨论</a>
</blockquote>
        '''

    return html_table


# 生成分组后的HTML
def generate_grouped_html(related_scripts_map, use_details=True, center=False):
    html_output = ""
    center_o = ''
    center_c = ''
    # 居中显示
    if center:
        center_o = '<div align="center">'
        center_c = '</div>'
    for related_id, scripts in related_scripts_map.items():
        # 分组下的内容收缩
        if use_details:
            html_output += f'{center_o}<details><summary>{related_id}</summary>'
        else:
            # 不分组时，添加分隔符用于区分
            html_output += f'<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest"><h1>{related_id}</h1>'
        html_output += generate_html_table(scripts)
        if use_details:
            print(center_c)
            html_output += f"{center_c}</details>"
    return html_output


def main():
    # 自定义当前脚本列表使用的语言和文件
    parser = argparse.ArgumentParser(description="更新脚本列表,并可指定语言")
    parser.add_argument("--lang_code", default="zh-CN", help="语言代码")
    parser.add_argument("--readme_path", default="docs/README.md", help="需要更新脚本列表的README 文件路径")
    parser.add_argument("--json_file_path", default="docs/ScriptsPath.json", help="脚本列表的 JSON 文件路径")
    args = parser.parse_args()
    # 赋值全局变量
    global LANG_CODE
    LANG_CODE = args.lang_code
    json_file_path = args.json_file_path
    readme_path = args.readme_path
    data = read_json(json_file_path)
    related_scripts_map = generate_description(data.get('scripts', []))
    html_output = generate_grouped_html(related_scripts_map, False, False)
    process_file(readme_path, html_output, "<!--AUTO_SCRIPTS_PLEASE_DONT_DELETE_IT-->", "<!--AUTO_SCRIPTS_PLEASE_DONT_DELETE_IT-END-->", "head")


if __name__ == "__main__":
    main()
