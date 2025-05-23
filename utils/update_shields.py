from content_snippet import get_file_description
from writer import process_file
from helper import get_md_files
from helper import read_json
from helper import format_str
from helper import get_repo_name
from helper import extract_lang_code

import os

NEW_CONTENT_PATH = 'utils/templates/SHIELDS.md'


def get_new_content(script_directory, lang_code=""):
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        content = file.read()
        new_content = format_str(content, lang_code)
        # 判断目录下的passed.json
        if os.path.exists(script_directory + "/docs/passed.json"):
            URL = f"https://github.com/{get_repo_name()}/raw/main/{script_directory}/docs/passed.json"
        else:
            URL = f"https://github.com/{get_repo_name()}/raw/main/docs/passed.json"
        new_content = new_content.format(
            PASSED_URL=URL
        )
        return new_content


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    start_tag = "<!--SHIELDS-->"
    end_tag = "<!--SHIELDS-END-->"
    for script in scripts:
        script_directory = script.get('directory', '')
        cnfile_path = os.path.join(script_directory, "README.md")
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        # 构建中文徽章信息比对olddescriptions
        new_content = get_new_content(script_directory)
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
            new_content = get_new_content(script_directory, lang)
            process_file(file_path, new_content, start_tag, end_tag, "head")


if __name__ == '__main__':
    main()
