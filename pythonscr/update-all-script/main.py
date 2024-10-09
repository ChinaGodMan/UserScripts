import json
import os
import sys
sys.dont_write_bytecode = True
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from content_snippet import get_file_description
from writer import process_markdown
from writer import process_file
# 读取JSON文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)
# 根据relatedscripts的id找到对应的脚本
def find_script_by_greasyfork_id(scripts, greasyfork_id):
    for script in scripts:
        if str(script.get('GreasyFork')) == str(greasyfork_id):
            return script
    return None
# 生成描述信息，仅针对当前脚本的relatedscripts
def generate_description(all_scripts):
    related_scripts_map = {}
    # 遍历所有脚本，收集相同 relatedscripts 的脚本信息
    for script in all_scripts:
        relatedscripts_category = script.get('relatedscripts')
        if relatedscripts_category:
            if relatedscripts_category not in related_scripts_map:
                related_scripts_map[relatedscripts_category] = []
            greasyfork_id = script.get('GreasyFork', '未知ID')
            name = script.get('name', '未知名称')
            description = script.get('description', '无描述')
            # 存储相关脚本的信息
            related_scripts_map[relatedscripts_category].append({
                'name': name,
                'description': description,
                'link': f"https://greasyfork.org/scripts/{greasyfork_id}"
            })
    # 生成描述信息
    descriptions = []
    for category, scripts in related_scripts_map.items():
        descriptions.append(
            f'\n<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">\n\n> ### 🔍你可能在找 {category}')
        for script in scripts:
            link = f"[**{script['name']}**]({script['link']})"
            descriptions.append(f"> - {link}: {script['description']}")
    return "\n".join(descriptions) + "\n\n"

def main():
    json_path = 'docs/ScriptsPath.json'
    # 读取并解析JSON
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    descriptions = generate_description(scripts)
    backuppath = scripts[0].get('backuppath', '')
    cnfile_path = os.path.join(backuppath, "README.md")
    start_tag = "<!--AUTO_ALLSCRIPT_PLEASE_DONT_DELETE_IT-->"
    end_tag = "<!--AUTO_ALLSCRIPT_PLEASE_DONT_DELETE_IT-END-->"
    new_content = f'\n<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest"> \n\n### 查看所有发布脚本 \n\n'+descriptions+f'\n<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest"><center><div align="center"><a href="#top"><strong>回到顶部↑</strong></a></div></center>\n\n'
    olddescriptions = get_file_description(
                cnfile_path, start_tag, end_tag)
    if "\n"+olddescriptions+"\n\n" == new_content:#换行符添加上,就这样了能用就行
        print(f"\033[91m 所有相关脚本未变化,当前任务被结束\033[0m")
        return
    # 遍历每个脚本，处理它的backuppath
    for script in scripts:
        backuppath = script.get('backuppath', '')
        if backuppath and os.path.isdir(backuppath):
            print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 所有相关脚本变化,执行替换\033[0m")
            for file in os.listdir(backuppath):
                if file.endswith('.md'):
                    file_path = os.path.join(backuppath, file)
                    #process_markdown(new_content,file_path,start_tag,end_tag, 'tail' ,False,'docs/ScriptsPath.json')
                    process_file(file_path, new_content, start_tag, end_tag, "head")
if __name__ == "__main__":
    main()
