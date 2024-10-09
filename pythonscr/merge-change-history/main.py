import os
import json
import markdown  
import sys
sys.dont_write_bytecode = True
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from writer import process_markdown
from writer import process_file
from content_snippet import get_file_description
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
# 遍历 JSON 数据中的每个脚本信息
for script in data['scripts']:
    backuppath = script.get('backuppath', '')
    name = script.get('name', '')
    description = script.get('description', '')
    greasyfork_id = script.get('GreasyFork', '')
    filepath = script.get('path', '')
    readme_path = os.path.join(backuppath, "Change history", "README.md")
    readme_html = ''
    if os.path.isfile(readme_path):
        readme_html = "<details><summary>更新记录</summary>" + \
            md_to_html(readme_path)+"</details>"
    img_path = os.path.join(backuppath, "preview", "statshistory.png")
    img_tag = ''
    isAddImage = True  # 添加历史安装图片
    if isAddImage:  
        img_tag = f'<img src="https://raw.gitmirror.com/ChinaGodMan/UserScriptsHistory/main/stats/{greasyfork_id}.png">'
    html_content = f"""
<center><div align="center">
    <h1>{name}</h1>
    <p>「 {description} 」</p>
    <img src="https://views.whatilearened.today/views/github/{greasyfork_id}/hmjz100.svg" alt="Views">
    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/{filepath}?color=%23990000">
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{backuppath}">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/{greasyfork_id}">Greasy
            Fork</a></p>{readme_html} 
    {img_tag}
</div></center>
"""
    # 检查 backuppath 是否存在
    if backuppath and os.path.exists(backuppath):
        start_tag = "<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-->"
        end_tag = "<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->"
        backup_readme_path = os.path.join(backuppath, 'Change history/README.md')
        his= get_file_description(os.path.join(backuppath, "README.md"), start_tag, end_tag)
        if "\n"+his+"\n" == html_content:
                #print(f"----[{script.get('name', '')}]\033[91m 更新日志没有改变,拒绝写入!\033[0m")
                continue
        for file_name in os.listdir(backuppath):
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(backuppath, file_name)
                #process_markdown(html_content, file_path, start_tag, end_tag, 'tail', False, backup_readme_path, True)
                process_file(file_path, html_content, start_tag, end_tag, "head")
