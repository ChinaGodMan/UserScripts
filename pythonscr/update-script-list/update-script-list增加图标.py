import json
import os
import re
import sys
import requests

# JSON 文件路径
json_file_path = 'docs/ScriptsPath.json'

# 读取 JSON 数据
with open(json_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)
# 获取 scripts 成员的数量
scripts_count = len(data.get('scripts', []))
print(f"脚本数量: {scripts_count}")
# 定义数量文件的名称
script_dir = os.path.dirname(os.path.abspath(__file__))
count_file = os.path.join(script_dir, f'{scripts_count}.txt')

from datetime import datetime, timedelta

def convert_utc_to_china_time(utc_time_str):
    """
    将 UTC 时间字符串转换为中国时间字符串，格式为 'yyyy/m/d tt:mm:ss'。
    
    参数:
    utc_time_str (str): UTC 时间字符串，格式为 'YYYY-MM-DDTHH:MM:SS.ZZZZ'。
    
    返回:
    str: 转换后的中国时间字符串，格式为 'yyyy/m/d tt:mm:ss'。
    """
    # 将 UTC 时间字符串解析为 datetime 对象
    utc_time = datetime.fromisoformat(utc_time_str.replace('Z', '+00:00'))
    
    # 将 UTC 时间转换为中国时间（北京时间）
    china_time = utc_time + timedelta(hours=8)
    
    # 格式化为 'yyyy/m/d tt:mm:ss'
    formatted_time = china_time.strftime('%Y/%m/%d %H:%M:%S')
    
    return formatted_time

if os.path.exists(count_file):
    print(f"文件 '{count_file}' 已存在，程序退出。")
    #sys.exit()


 # 如果文件不存在，则创建文件
with open(count_file, 'w', encoding='utf-8') as file:
    file.write(f"脚本数量: {scripts_count}\n")
print(f"文件 '{count_file}' 已创建。")   
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
style='?&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII='
# 遍历每个脚本条目并生成表格行
for script in data.get('scripts', []):
    script_id = script.get("GreasyFork")
    if script_id:
        is_sleazy = script.get('isSleazy', False)
       # url = f'https://greasyfork.org/zh-CN/scripts/{script_id}.json'
        base_url = 'https://sleazyfork.org' if is_sleazy else 'https://greasyfork.org'
        url = f'{base_url}/zh-CN/scripts/{script_id}.json'
        response = requests.get(url)
        if response.status_code == 200:
            json_data = response.json()
            created_at = json_data.get('created_at')
            created_at = convert_utc_to_china_time(created_at)
            code_updated_at = json_data.get('code_updated_at')
            code_updated_at = convert_utc_to_china_time(code_updated_at)
            if created_at:
                # 在这里可以使用created_at变量
                print(f"脚本ID: {script_id} 的创建时间是: {created_at}")
            else:
                print(f"脚本ID: {script_id} 的创建时间字段不存在")
        else:
            print(f"请求失败，状态码: {response.status_code}，URL: {url}")
    else:
        print("脚本没有 GreasyFork ID")
    html_table += f'''<tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/{script.get("GreasyFork")}" target="_blank">{script.get("name")}</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/{script.get("path")}" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{script.get("backuppath")}" target="_blank">
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
                <img src="https://img.shields.io/greasyfork/dt/{script.get("GreasyFork")}{style}">
                <img src="https://img.shields.io/greasyfork/dd/{script.get("GreasyFork")}{style}">
                <img src="https://img.shields.io/greasyfork/v/{script.get("GreasyFork")}{style}">
                <img src="https://img.shields.io/greasyfork/rating-count/{script.get("GreasyFork")}{style}">
                <img src="https://img.shields.io/badge/created-{created_at}-12{style}">
                <img src="https://img.shields.io/badge/updated-{code_updated_at}-12{style}">
                <a href="https://update.greasyfork.org/scripts/{script.get("GreasyFork")}.user.js">
                    <br>安装
                </a>
            </td>
        </tr>
    '''

html_table += '''</tbody>
</table>
'''

# 输出到 HTML 文件
#html_file_path = '1.html'
#with open(html_file_path, 'w', encoding='utf-8') as file:
#   file.write(html_table)
# print(f'HTML 表格已保存为 {html_file_path}')
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

print(f"执行完毕")   
