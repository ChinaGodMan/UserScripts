import json
import os
import re

# JSON 文件路径
json_file_path = 'docs/ScriptsPath.json'

# 读取 JSON 数据
with open(json_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# 生成 HTML 表格
html_table = '''
<table>
    <thead>
        <tr>
            <th>脚本名称</th>
            <th>脚本说明</th>
            <th>GitHub</th>
            <th>Greasyfork</th>
        </tr>
    </thead>
    <tbody>
'''

# 遍历每个脚本条目并生成表格行
for script in data.get('scripts', []):
    html_table += f'''
        <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/{script.get("GreasyFork")}" target="_blank">{script.get("name")}</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/{script.get("path")}" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script%20details/{script.get("backuppath")}" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>{script.get("description")}</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/{script.get("path")}">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/{script.get("path")}?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/{script.get("GreasyFork")}.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/{script.get("GreasyFork")}?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
        </tr>
    '''

html_table += '''
    </tbody>
</table>
'''

# 输出到 HTML 文件
html_file_path = '1.html'
with open(html_file_path, 'w', encoding='utf-8') as file:
    file.write(html_table)

# 读取 README.md 文件
readme_path = 'README.md'
with open(readme_path, 'r', encoding='utf-8') as file:
    readme_content = file.read()

# 替换 <table> 表格
# 使用正则表达式查找并替换 <table> 部分
new_readme_content = re.sub(r'<table>.*?</table>', html_table, readme_content, flags=re.DOTALL)

# 写回 README.md 文件
with open(readme_path, 'w', encoding='utf-8') as file:
    file.write(new_readme_content)

print(f'HTML 表格已保存为 {html_file_path}')
