import json
import os
import time
import subprocess


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
def generate_description(current_script, all_scripts):
    descriptions = []
    
    # 获取当前脚本的 relatedscripts 值作为分类名
    relatedscripts_category = current_script.get('relatedscripts')
    
    # 如果没有 relatedscripts，返回空描述
    if not relatedscripts_category:
        return "无相关脚本。\n\n"
    
    # 添加分类名到描述中
    descriptions.append(f'<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">\n\n> ### 🔍你可能在找{relatedscripts_category}')
    
    # 遍历所有脚本，查找具有相同 relatedscripts 值的脚本
    for script in all_scripts:
        # 获取脚本的 relatedscripts 值
        script_relatedscripts = script.get('relatedscripts')
        
        # 如果脚本的 relatedscripts 与当前脚本相同，就将其添加到描述中
        if script_relatedscripts == relatedscripts_category:
            greasyfork_id = script.get('GreasyFork', '未知ID')
            name = script.get('name', '未知名称')
            description = script.get('description', '无描述')
            # 创建点击可跳转的 Markdown 链接
            link = f"[**{name}**](https://greasyfork.org/scripts/{greasyfork_id})"
            descriptions.append(f"> - {link}: {description}")
    
    # 在生成的描述最后加一个换行符
    return "\n".join(descriptions) + "\n\n"




# 主函数
def main():
    json_path = 'docs/ScriptsPath.json'
    
    # 读取并解析 JSON
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    
    # 遍历每个脚本，处理它的 backuppath
    for script in scripts:
        backuppath = script.get('backuppath', '')
        if backuppath and os.path.isdir(backuppath):
            # 只获取 backuppath 路径下的 md 文件（不递归）
            for file in os.listdir(backuppath):
                if file.endswith('.md'):
                    file_path = os.path.join(backuppath, file)
                    
                    # 定义开始和结束标签
                    start_tag = "<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->"
                    end_tag = "<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->"

                    # 生成描述并执行命令
                    descriptions = generate_description(script, scripts)
                    command = [
                        'python', 'pythonscr/writer.py',
                        '--new-content', descriptions,  # 传递生成的描述内容
                        '--target-file', file_path,
                        '--start-tag', start_tag,
                        '--end-tag', end_tag,
                        '--check-file','./docs/ScriptsPath.json'
                    ]
                    subprocess.run(command)


if __name__ == "__main__":
    main()
