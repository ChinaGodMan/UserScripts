from writer import process_file
from content_snippet import get_file_description
from helper import get_md_files
from helper import read_json
from helper import get_repo_name
import os
import re

USE_FLAG = False
langmap = read_json('utils/docs/lang_map.json')
national = []
for lang_dict in langmap["langs"]:
    for lang_code, lang_info in lang_dict.items():
        value = lang_info["flag"] + " " + lang_info["title"] if USE_FLAG else lang_info["title"]
        national.append({lang_code: value})


def find_locale(key_to_find):
    for item in national:
        if key_to_find in item:
            return item[key_to_find]
    return None


def build_html(md_files, path, lang='zh-CN'):
    template_path = "utils/templates/SELECTOR.html"
    with open(template_path, 'r', encoding='utf-8') as file:
        html_template = file.read()
    base_url = f"https://github.com/{get_repo_name()}/blob/main/"
    links = []
    for file in md_files:
        match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
        lang_code = match.group(1) if match else lang
        title = find_locale(lang_code)
        links.append(f'<a href="{base_url}{path}/{file}">{title}</a>')
    # 格式化的换行符
    links_html = " |\n        ".join(links)
    html = html_template.replace('{{links}}', links_html)
    return html


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    # 定义开始和结束标签
    start_tag = "<!--NAVIGATION-->"
    end_tag = "<!--NAVIGATION-END-->"
    for script in scripts:
        script_directory = script.get('directory', '')
        cnfile_path = os.path.join(script_directory, "README.md")

        # Linux和Windows统一排序方式,防止ci在github运行时排序不一致
        # ! fix: 排序应从滤过后中获取，不是从目录中获取
        md_files = sorted(get_md_files(script_directory))

        # 生成html和获取文件中的html
        descriptions = build_html(md_files, script_directory)
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        olddescriptions = olddescriptions if olddescriptions is not None else "1"

        # 从md文件中获取所有readme文件名
        md_old = re.findall(r'README[^"]*\.md', olddescriptions)  # 从readme文件中获取
        md_new = get_md_files(script_directory)  # 获取当前脚本目录下的所有过滤后的md文件
        all_in_old = all(md in set(md_old) for md in md_new)  # 如果当前过滤后的readme文件名都md_old 不进行替换
        if all_in_old:  # 哪怕导航栏模版发生变动,只要导航栏指向github的链接没变动就不进行替换
            print("链接在内容中存在")
            # continue

        # 相等跳过
        if olddescriptions + "\n" == descriptions:  # 换行符添加上,就这样了能用就行
            continue
        else:
            print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 内容变化,执行替换\033[0m")
        for md_file in md_new:
            file_path = os.path.join(script_directory, md_file)
            process_file(file_path, descriptions, start_tag, end_tag, "head")


if __name__ == "__main__":
    main()
