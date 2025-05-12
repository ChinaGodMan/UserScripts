from helper import read_json
from update_related_scripts import process_script
import re
import os


# 获取readme文件中相关脚本分组
def check_related_readme(file_path, related_scripts_map):
    not_in_scriptspath = []
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        # 匹配 <!--RELATED- -END-->标签
        matches = re.findall(r'<!--RELATED-([a-zA-Z0-9\-一-龥]+)-END-->', content)
        if matches:
            for group in matches:
                if re.search(r'[\u4e00-\u9fa5]', group):
                    if group not in related_scripts_map:
                        not_in_scriptspath.append(group)
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
    return not_in_scriptspath


# 删除readme文件中不存在的相关脚本分组
def delete_related_readme(directory_path, not_in_map):
    for file in os.listdir(directory_path):
        if file.endswith('.md') and os.path.isfile(os.path.join(directory_path, file)):
            file_path = os.path.join(directory_path, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            is_modified = False

            # 删除对应标签和内容
            for key in not_in_map:
                start_tag = f"<!--RELATED-{key}-->"
                end_tag = f"<!--RELATED-{key}-END-->"
                pattern = re.compile(re.escape(start_tag) + r'.*?' + re.escape(end_tag), re.DOTALL)
                if re.search(pattern, content):
                    content = re.sub(pattern, '', content)
                    print(f" {file_path} 中的失效分组[\033[31m{key}\033[0m]已被删除。")
                    is_modified = True
            if is_modified:
                with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
                    f.write(content)


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    related_scripts_map = {}
    for script in scripts:
        # 构建`相关脚本`分组
        relatedscripts = script.get('group')
        if relatedscripts:
            if relatedscripts not in related_scripts_map:
                related_scripts_map[relatedscripts] = []
                related_scripts_map[relatedscripts].append(relatedscripts)
    for script in scripts:
        # 列出`readme`文本中的相关脚本分钟
        cnfile_path = os.path.join(script.get('directory', ''), "README.md")
        not_in_map = check_related_readme(cnfile_path, related_scripts_map)
        # 如果有不存在的`相关脚本`,就删除不存在的`相关脚本`分组
        if len(not_in_map) > 0:
            delete_related_readme(script.get('directory', ''), not_in_map)
        for group, value in related_scripts_map.items():
            start_tag = f"<!--RELATED-{group}-->"
            end_tag = f"<!--RELATED-{group}-END-->"
            process_script(script, scripts, start_tag, end_tag, group)


if __name__ == "__main__":
    main()
