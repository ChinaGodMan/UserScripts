import os
import json
import re

# 定义分隔符和 JSON 文件路径
SEPARATOR = 'https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">'
json_file_path = 'docs/ScriptsPath.json'

# 读取 JSON 文件
with open(json_file_path, 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# 遍历 JSON 数据中的每个脚本信息
for script in data['scripts']:
    backuppath = script.get('backuppath', '')
    name = script.get('name', '')
    description = script.get('description', '')
    greasyfork_id = script.get('GreasyFork', '')

    # 检查 preview 图片是否存在
    img_path = os.path.join(backuppath, "preview", "statshistory.png")
    img_tag = ''
    if os.path.exists(img_path):
        img_tag = f'<img src="https://raw.gitmirror.com/ChinaGodMan/UserScripts/main/{backuppath}/preview/statshistory.png">'

    # 准备要添加或替换的 HTML 代码
    html_content = f"""
<center>
    <h1>{name}</h1>
    <p>「 {description} 」</p>
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{backuppath}">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/{greasyfork_id}">Greasy
            Fork</a></p>
    {img_tag}
</center>
"""

    # 检查 backuppath 是否存在
    if backuppath and os.path.exists(backuppath):
        # 遍历 backuppath 目录下的所有 .md 文件
        for file_name in os.listdir(backuppath):
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(backuppath, file_name)
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()

                if SEPARATOR in content:
                    # 找到分隔符位置
                    separator_index = content.index(SEPARATOR) + len(SEPARATOR)
                    after_separator = content[separator_index:]

                    # 使用正则表达式匹配 <center>.*?</center>
                    match = re.search(r'<center>.*?</center>', after_separator, re.DOTALL)

                    if match:
                        # 如果匹配成功，替换匹配的内容为新的 HTML 代码
                        content = content[:separator_index] + re.sub(r'<center>.*?</center>', html_content.strip(), after_separator, flags=re.DOTALL)
                        print(f"已替换: {file_path}")
                    else:
                        # 如果没有匹配成功，在分隔符下添加新的 HTML 代码
                        content = content[:separator_index] + "\n" + html_content.strip() + after_separator
                        print(f"已添加: {file_path}")

                    # 将修改后的内容写回文件
                    with open(file_path, 'w', encoding='utf-8') as file:
                        file.write(content)
