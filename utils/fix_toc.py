import re
import sys
from content_snippet import get_file_description
from writer import process_file
from helper import read_json
from helper import is_file_modified

if not is_file_modified("docs/README.md"):
    sys.exit()

start_tag = "<!--SCRIPTS_COUNT-->"
end_tag = "<!--SCRIPTS_COUNT-END-->"
readme_start_tag = "<!--README-TOC-->"
readme_end_tag = "<!--README-TOC-END-->"

reg_group_toc = r'href="(.*?)"'  # 脚本目录导航
reg_return = r'<div align="right"><a href="(.*?)">(.*?)</a></div>'  # 每个脚本组下的返回
reg_readme = r"\((#[^)]+)\)"  # readme导航
reg_relative = r'<a href="([./][^"]+)">'  # 相对路径


group_toc_template = 'href="{}"'
return_link_template = '<div align="right"><a href="{}">{}</a></div>'
readme_toc_template = "({})"

docs = read_json("utils/docs/translate_readme.json")


def replace_links(match, template):
    original_link = match.group(1)
    updated_link = original_link.replace(" ", "-")
    return template.format(updated_link, *match.groups()[1:])


def modify_path(path):
    if path.startswith('./'):
        return '../' + path[2:]
    elif path.startswith('../'):
        return '../../' + path[3:]
    return path


def get_top_path(paths):
    paths = sorted(set(paths), key=len)
    top_level_paths = []
    for path in paths:
        """
        ../chatgpt-code-styling/#readme
        ../chatgpt-code-styling/chatgpt-code-styling.user.js
        ../chatgpt-code-styling
        只保留,防止多次替换../chatgpt-code-styling
        """
        if '/' not in path.strip('./').strip('../'):
            top_level_paths.append(path)
        elif "README.md" in path:
            top_level_paths.append(path)
    return top_level_paths


for item in docs['files']:
    source = item['source']
    if source == "docs/README.md":
        target = item['target']
        for lang in target:
            readme = f"docs/{lang}/README.md"
            # 脚本toc
            old = get_file_description(readme, start_tag, end_tag)
            new = re.sub(reg_group_toc, lambda match: replace_links(match, group_toc_template), old)
            process_file(readme, new, start_tag, end_tag, "head")

            # readme toc
            old = get_file_description(readme, readme_start_tag, readme_end_tag)
            new = re.sub(reg_readme, lambda match: replace_links(match, readme_toc_template), old)
            process_file(readme, new, readme_start_tag, readme_end_tag, "head")

            # 每个脚本组返回到脚本toc的链接
            with open(readme, 'r', encoding='utf-8', newline='\n') as file:
                content = file.read()
            updated_content = re.sub(reg_return, lambda match: replace_links(match, return_link_template), content)

            # 增加上级相对路径
            matches = re.findall(reg_relative, updated_content)
            matches = get_top_path(matches)
            for match in matches:
                modified_path = modify_path(match)
                updated_content = updated_content.replace(match, modified_path)
            with open(readme, 'w', encoding='utf-8', newline='\n') as file:
                file.write(updated_content)
