import os

from content_snippet import get_file_description
from helper import extract_lang_code, format_str, get_md_files, read_json
from writer import process_file

NEW_CONTENT_PATH = 'utils/templates/HELP.md'


def get_new_content(lang_code=""):
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        content = file.read()
        new_content = format_str(content, lang_code)
        return new_content


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    start_tag = "<!--HELP-->"
    end_tag = "<!--HELP-END-->"
    new_content = get_new_content()
    for script in scripts:
        script_directory = script.get('directory', '')
        cnfile_path = os.path.join(script_directory, "README.md")
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        if olddescriptions + "\n" == new_content:  # 换行符添加上,就这样了能用就行
            continue
        else:
            print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 内容变化,执行替换\033[0m")
        md_files = get_md_files(script_directory)
        for md_file in md_files:
            lang = extract_lang_code(md_file)
            if lang is None:
                lang = ""
            file_path = os.path.join(script_directory, md_file)
            new_content = get_new_content(lang)
            process_file(file_path, new_content, start_tag, end_tag, "head")


if __name__ == '__main__':
    main()
