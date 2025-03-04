from content_snippet import get_file_description
from writer import process_file
from searcher import search_in_file
import os
import re
import json
import markdown
import sys

sys.dont_write_bytecode = True
json_file_path = 'docs/ScriptsPath.json'


def md_to_html(md_file):
    if not os.path.isfile(md_file):
        print(f"文件 {md_file} 不存在。")
        return None
    with open(md_file, 'r', encoding='utf-8') as f:
        md_text = f.read()
    html_text = markdown.markdown(md_text, extensions=['tables'])
    return html_text


# 读取 JSON 文件
with open(json_file_path, 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)


# 生产HTML内容
def generate_html_content(nation, path, greasyfork_id, filepath, backuppath, readme_html):
    results = search_in_file(path, nation)
    name = "\n".join(results.name_matches)
    description = "\n".join(results.description_matches)
    img_tag = f'<img src="https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/stats/{greasyfork_id}.png">'
    html_content = f"""
<center><div align="center">
    <h1>{name}</h1>
    <p>「 {description} 」</p>
    <img src="https://views.whatilearened.today/views/github/{greasyfork_id}/hmjz100.svg" alt="Views">
    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/{filepath}?color=%23990000">
    <p>Download:<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{backuppath}">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/{greasyfork_id}">Greasy
            Fork</a></p>{readme_html}
    {img_tag}
</div></center>
"""
    return html_content


# 遍历 JSON 数据中的每个脚本信息
for script in data['scripts']:
    backuppath = script.get('backuppath', '')
    name = script.get('name', '')
    description = script.get('description', '')
    greasyfork_id = script.get('GreasyFork', '')
    filepath = script.get('backuppath', '') + "/" + script.get('path', '')
    readme_path = os.path.join(backuppath, "Change history", "README.md")
    readme_html = ''
    if os.path.isfile(readme_path):
        readme_html = "<details><summary>更新记录</summary>" + \
            md_to_html(readme_path) + "</details>"
    html_content = generate_html_content("zh-CN", filepath, greasyfork_id, filepath, backuppath, readme_html)
    # 检查 backuppath 是否存在
    if backuppath and os.path.exists(backuppath):
        start_tag = "<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-->"
        end_tag = "<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->"
        backup_readme_path = os.path.join(backuppath, 'Change history/README.md')
        his = get_file_description(os.path.join(backuppath, "README.md"), start_tag, end_tag)
        if "\n" + his + "\n" == html_content:
            continue
        else:
            print(f"----[\033[94m{script.get('name', '')}\033[0m]\033[92m 头部描述改变,执行替换!\033[0m")
        for file_name in os.listdir(backuppath):
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(backuppath, file_name)
                match = re.match(r'README_([a-zA-Z\-]+)\.md', file_name)
                if match:
                    lang_code = match.group(1)
                else:
                    lang_code = "zh-CN"
                html_content = generate_html_content(lang_code, filepath, greasyfork_id, filepath, backuppath, readme_html)
                process_file(file_path, html_content, start_tag, end_tag, "head")
