import re
from content_snippet import get_file_description
from writer import process_file
from helper import read_json

start_tag = "<!--SCRIPTS_COUNT-->"
end_tag = "<!--SCRIPTS_COUNT-END-->"
readme_start_tag = "<!--README-TOC-->"
readme_end_tag = "<!--README-TOC-END-->"

patter_group_toc = r'href="(.*?)"'
patter_return = r'<div align="right"><a href="(.*?)">(.*?)</a></div>'
patter_readme = r"\((#[^)]+)\)"

docs = read_json("utils/docs/translate_readme.json")

group_toc_template = 'href="{}"'
return_link_template = '<div align="right"><a href="{}">{}</a></div>'
readme_toc_template = "({})"


def replace_links(match, template):
    original_link = match.group(1)
    updated_link = original_link.replace(" ", "-")
    return template.format(updated_link, *match.groups()[1:])


for item in docs['files']:
    source = item['source']
    if source == "docs/README.md":
        target = item['target']
        for lang in target:
            readme = f"docs/{lang}/README.md"
            # 脚本toc
            old = get_file_description(readme, start_tag, end_tag)
            new = re.sub(patter_group_toc, lambda match: replace_links(match, group_toc_template), old)
            process_file(readme, new, start_tag, end_tag, "head")

            # readme toc
            old = get_file_description(readme, readme_start_tag, readme_end_tag)
            new = re.sub(patter_readme, lambda match: replace_links(match, readme_toc_template), old)
            process_file(readme, new, readme_start_tag, readme_end_tag, "head")

            # 每个脚本组返回到脚本toc的链接
            with open(readme, 'r', encoding='utf-8', newline='\n') as file:
                content = file.read()
            updated_content = re.sub(patter_return, lambda match: replace_links(match, return_link_template), content)
            with open(readme, 'w', encoding='utf-8', newline='\n') as file:
                file.write(updated_content)
