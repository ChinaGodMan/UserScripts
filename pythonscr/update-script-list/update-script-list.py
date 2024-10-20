import json
import os
import sys
sys.dont_write_bytecode = True
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from writer import process_file
# 读取 JSON 文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)
# 根据 relatedscripts 的 ID 找到对应的脚本
def find_script_by_greasyfork_id(scripts, greasyfork_id):
    for script in scripts:
        if str(script.get('GreasyFork')) == str(greasyfork_id):
            return script
    return None
# 生成描述信息，仅针对当前脚本的 relatedscripts
def generate_description(all_scripts, single_group=False):
    related_scripts_map = {}
    if single_group:
        related_scripts_map['所有脚本'] = all_scripts
    else:
        for script in all_scripts:
            relatedscript = script.get('relatedscripts')
            if relatedscript not in related_scripts_map:
                related_scripts_map[relatedscript] = []
            related_scripts_map[relatedscript].append(script)
    return related_scripts_map
# 生成 HTML 表格
def generate_html_table(scripts):
    html_table = '''<table>
    <thead>
        <tr>
            <th>脚本名称</th>
            <th>脚本说明</th>
            <th>GitHub</th>
            <th>Greasyfork</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">发布时间</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">更新时间</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">最新版本</th>
            <th><img src="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/docs/icon/icons8-project-management-48.png" width="16" height="16">首次创建</th>
        </tr>
    </thead>
    <tbody>
    '''
    for script in scripts:
        full_path=script.get("backuppath")+"/"+script.get("path")
        html_table += f'''<tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/{script.get("GreasyFork")}" target="_blank">{script.get("name")}</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/{full_path}" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script.get("backuppath")}#readme" target="_blank">
                    <mark>Readme</mark>
                </a>
            </td>
            <td>{script.get("description")}</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/{full_path}">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/{full_path}?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/{script.get("GreasyFork")}.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/{script.get("GreasyFork")}?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>{script.get("created_at")}</sub></td>
            <td><sub>{script.get("code_updated_at")}</sub></td>
            <td><sub>{script.get("version")}</sub></td>
            <td><sub>{script.get("local_created_at")}</sub></td>
        </tr>
        '''
    html_table += '''</tbody>
    </table>'''
    return html_table
def generate_grouped_html(related_scripts_map, use_details=True,center=False):
    html_output = ""
    center_o=''
    center_c=''
    if center:
        center_o='<div align="center">'
        center_c='</div>'
    for related_id, scripts in related_scripts_map.items():
        if use_details:
            html_output += f'{center_o}<details><summary>{related_id}</summary>'
        else:
            html_output += f"<h2>{related_id}</h2>"
        html_output += generate_html_table(scripts)
        if use_details:
            print(center_c)
            html_output += f"{center_c}</details>"
    return html_output  
# 主程序
json_file_path = 'docs/ScriptsPath.json'
data = read_json(json_file_path)
# 按 relatedscripts 分类脚本
related_scripts_map = generate_description(data.get('scripts', []))
html_output = generate_grouped_html(related_scripts_map, True)
# 读取 README.md 文件并替换表格
readme_path = 'docs/README.md'
process_file(readme_path, html_output, "<!--AUTO_SCRIPTS_PLEASE_DONT_DELETE_IT-->", "<!--AUTO_SCRIPTS_PLEASE_DONT_DELETE_IT-END-->", "head")
