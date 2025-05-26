import argparse
import os

from helper import format_str, get_repo_name, read_json
from searcher import search_in_file
from writer import process_file


# 生成描述信息，仅针对当前脚本的 group
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
    template_path = "utils/templates/ScriptCard.html"
    with open(template_path, 'r', encoding='utf-8') as file:
        html_template = file.read()
        html_template = format_str(html_template)
    for script in scripts:

        script_id = script.get("greasyfork_id")
        script_fold = script.get("directory")
        js_name = script.get("js_name")

        # ? 直接从尼玛的脚本中读取脚本名称和介绍,废弃掉从json内读取,让README.md显示完整的信息
        script_absolute_path = script.get("directory") + "/" + js_name

        # 含有更新日志的脚本,显示更新日志链接
        change_log = script.get("directory") + "/CHANGELOG.md"
        changelog_block = ""
        if os.path.exists(change_log):
            changelog_block = (
                f' /\n<a href="https://github.com/{get_repo_name()}/tree/main/{script_fold}/CHANGELOG.md">\n'
                f'        <img hight=16 width=15 src="https://img.icons8.com/parakeet/48/renew-subscription.png">'
                f'更新日志</a>')

        # 含有引用的脚本,显示链接
        author = script.get("directory") + "/AUTHORS.md"
        author_block = ""
        if os.path.exists(author):
            author_block = (
                f' /\n<a href="https://github.com/{get_repo_name()}/tree/main/{script_fold}/AUTHORS.md">\n'
                f'        <img hight=18 width=18 src="https://raw.githubusercontent.com/{get_repo_name()}History/main/images/authors.svg">'
                f'修改自</a>')

        sreach_result = search_in_file(script_absolute_path, LANG_CODE)
        script_name = sreach_result.name_matches[0]
        script_description = sreach_result.description_matches[0]

        # 跳转到对应语言的readme
        readme_file_name = f'README_{LANG_CODE}.md'
        if not os.path.exists(f'{script.get("directory")}/{readme_file_name}'):
            readme_file_name = "README_en.md"

        # 直接跳转到目录
        if LANG_CODE == "zh-CN":
            readme_file_name = "#readme"

        # 构建预览截图
        previews = script.get("preview")
        img_tag = ''
        if previews:
            if isinstance(previews, list):
                img_tag = "\n            ".join(f'<img width=511 src="{item}">' for item in previews)
            else:
                img_tag = f'<img width=511 src="{previews}">'
        # 对没有预览截图的脚本,只显示介绍就行了
        details_block = f'''<details>
    <summary>{script_description}</summary>
    <br><blockquote>
        <a href="https://github.com/{get_repo_name()}/tree/main/{script_fold}">
            {img_tag}</a>
    </blockquote>
</details>''' if img_tag else script_description

        html_table += html_template.format(
            script_name=script_name,
            js_name=js_name,
            script_description=script_description,
            script_fold=script_fold,
            script_id=script_id,
            icon=script.get("icon"),
            details_block=details_block,
            changelog_block=changelog_block,
            author_block=author_block,
            readme_file=readme_file_name
        )

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
    for index, (related_id, scripts) in enumerate(related_scripts_map.items()):
        # 分组下的内容收缩
        if use_details:
            html_output += f'{center_o}<details><summary>{related_id}</summary>'
        else:
            html_output += (
                f'<div align="center"><h1>{related_id} ({len(scripts)})</h1></div>'
            )
        html_output += generate_html_table(scripts)
        html_output += (
            '<div align="right"><a href="#-脚本列表">返回目录</a></div>\n'
            '<img height=6px width="100%" '
            'src="{separator}">\n'
        )
        if use_details:
            print(center_c)
            html_output += f"{center_c}</details>"
        html_output = format_str(html_output)
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
    sorted_scripts = sorted(data.get('scripts', []), key=lambda x: x['greasyfork_id'] if x.get('greasyfork_id') is not None else 0)
    related_scripts_map = generate_description(sorted_scripts)
    html_output = generate_grouped_html(related_scripts_map, False, False)
    process_file(readme_path, html_output, "<!--AUTO_SCRIPTS_PLEASE_DONT_DELETE_IT-->", "<!--AUTO_SCRIPTS_PLEASE_DONT_DELETE_IT-END-->", "head")
    scripts_count = len(data.get('scripts', []))
    result = " | ".join(
        f'<a href="#{related_id}-{len(scripts)}">'
        f'{related_id} ({len(scripts)})</a>\n'
        for related_id, scripts in related_scripts_map.items()
    )
    tip = f"**储存库当前发布脚本数量:{scripts_count},脚本包括:**\n<h6>{result}</h6>"
    process_file(readme_path, tip, "<!--SCRIPTS_COUNT-->", "<!--SCRIPTS_COUNT-END-->", "head")


if __name__ == "__main__":
    main()
