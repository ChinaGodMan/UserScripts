import os
import json
import re
import markdown  # 确保导入 markdown 模块

# 定义分隔符和 JSON 文件路径
SEPARATOR = 'https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">'
json_file_path = 'docs/ScriptsPath.json'

def md_to_html(md_file):
    # 检查 Markdown 文件是否存在
    if not os.path.isfile(md_file):
        print(f"文件 {md_file} 不存在。")
        return None

    # 读取 Markdown 文件内容
    with open(md_file, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # 将 Markdown 转换为 HTML
    html_text = markdown.markdown(md_text)

    # 返回 HTML 文本字符串
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

    # 检查 Change history/README.md 文件是否存在并转化为 HTML
    readme_path = os.path.join(backuppath, "Change history", "README.md")
    readme_html = ''
    if os.path.isfile(readme_path):
        readme_html = "<details><summary>更新记录</summary>"+md_to_html(readme_path)+"</details>"

    # 检查 preview 图片是否存在
    img_path = os.path.join(backuppath, "preview", "statshistory.png")
    img_tag = ''
    isAddImage = True#添加历史安装图片
    if isAddImage:#if os.path.exists(img_path):
        # img_tag = f'<img src="https://raw.gitmirror.com/ChinaGodMan/UserScripts/main/{backuppath}/preview/statshistory.png">'
        # img_tag = f'<img src="https://raw.gitmirror.com/ChinaGodMan/UserScriptsHistory/main/stats/{greasyfork_id}.png">'
        img_tag = f'<img src="https://images.weserv.nl/?url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/stats/{greasyfork_id}.png">'


    # 准备要添加或替换的 HTML 代码
    html_content = f"""
<center><div align="center">
    <h1>{name}</h1>
    <p>「 {description} 」</p>
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/{backuppath}">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/{greasyfork_id}">Greasy
            Fork</a></p>{readme_html} 
    {img_tag}
</div></center>
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
