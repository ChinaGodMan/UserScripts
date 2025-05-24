from content_snippet import get_file_description
from helper import get_md_files
from helper import is_file_changed_in_last_commit
from helper import read_json
from helper import format_str
from helper import get_repo_name
from writer import process_file
from searcher import search_in_file
import os
import subprocess
import re
import markdown

TEMPLATE = "utils/templates/OVERVIEW.html"
START_TAG = "<!--HISTORY-->"
END_TAG = "<!--HISTORY-END-->"


def md_to_html(md_file):
    if not os.path.isfile(md_file):
        print(f"文件 {md_file} 不存在。")
        return None
    with open(md_file, 'r', encoding='utf-8') as f:
        md_text = f.read()
    html_text = markdown.markdown(md_text, extensions=['tables'])
    return html_text


# 生产HTML内容
def generate_html_content(nation, js_path, greasyfork_id, script_directory, readme_html):
    with open(TEMPLATE, 'r', encoding='utf-8') as file:
        html_template = file.read()
    results = search_in_file(js_path, nation)
    name = results.name_matches[0]
    description = results.description_matches[0]
    html_template = format_str(html_template)
    html_content = html_template.format(
        name=name,
        description=description,
        greasyfork_id=greasyfork_id,
        filepath=js_path,
        backuppath=script_directory,
        readme_html=readme_html
    )
    return html_content


scripts = read_json('docs/ScriptsPath.json')

# 遍历 JSON 数据中的每个脚本信息
for script in scripts['scripts']:
    script_directory = script.get('directory', '')
    name = script.get('name', '')
    description = script.get('description', '')
    greasyfork_id = script.get('greasyfork_id', '')
    full_path = script.get('directory', '') + "/" + script.get('js_name', '')
    authors_file = script_directory + '/AUTHORS.md'

    # 每次更新脚本原作者信息
    if is_file_changed_in_last_commit(authors_file):
        subprocess.run(['python', 'utils/script_user_info_generator.py', '-i', script.get('directory')], check=True)

    change_log_path = script_directory + '/CHANGELOG.md'

    # 没有目录存在,跳过(可能是误更改了json文件)
    if not os.path.exists(script_directory):
        continue

    # 生成更新记录 HTML
    readme_html = ''
    if os.path.exists(change_log_path):
        readme_html = (
            f'<details>'
            f'<summary style="color:#FFD700">更新记录</summary>'
            '<div align="right">'
            f'<a href="https://github.com/{get_repo_name()}/tree/main/{change_log_path}">'
            '<img src="https://img.shields.io/badge/-GitHub-3A3A3A?style=flat&logo=GitHub&logoColor=white"></a>'
            '</div>'
            f'{md_to_html(change_log_path)}</details>'
        )

    # 构建最新的内容(zh-CN)用于比对
    html_content = generate_html_content("zh-CN", full_path, greasyfork_id, script_directory, readme_html)

    old_log = get_file_description(script_directory + '/README.md', START_TAG, END_TAG)

    # 新内容和旧内容一致,跳过
    if old_log + "\n" == html_content:
        continue
    else:
        print(f"----[\033[94m{script.get('name', '')}\033[0m]\033[92m 头部描述改变,执行替换!\033[0m")

    # 遍历所有所有readme文件,替换头部显示
    md_files = get_md_files(script_directory)
    for file_name in md_files:
        f"{script_directory}/{file_name}"
        file_path = f"{script_directory}/{file_name}"
        match = re.match(r'README_([a-zA-Z\-]+)\.md', file_name)
        lang_code = match.group(1) if match else "zh-CN"
        html_content = generate_html_content(lang_code, full_path, greasyfork_id, script_directory, readme_html)
        process_file(file_path, html_content, START_TAG, END_TAG, "head")
