import re
from content_snippet import get_file_description
from writer import process_file
from helper import read_json

start_tag = "<!--SCRIPTS_COUNT-->"
end_tag = "<!--SCRIPTS_COUNT-END-->"

pattern_toc = r'href="(.*?)"'
pattern = r'<div align="right"><a href="(.*?)">(.*?)</a></div>'
docs = read_json("utils/docs/translate_readme.json")


def replace_toc(match):
    original_link = match.group(1)
    updated_link = original_link.replace(" ", "-")
    return f'href="{updated_link}"'


def replace_return_link(match):
    original_link = match.group(1)
    updated_link = original_link.replace(" ", "-")
    return f'<div align="right"><a href="{updated_link}">{match.group(2)}</a></div>'


for item in docs['files']:
    source = item['source']
    if source == "docs/README.md":
        target = item['target']
        for lang in target:
            readme = f"docs/{lang}/README.md"
            old = get_file_description(readme, start_tag, end_tag)
            new = re.sub(pattern_toc, replace_toc, old)
            process_file(readme, new, start_tag, end_tag, "head")
            with open(readme, 'r', encoding='utf-8', newline='\n') as file:
                content = file.read()
            updated_content = re.sub(pattern, replace_return_link, content)
            with open(readme, 'w', encoding='utf-8', newline='\n') as file:
                file.write(updated_content)
