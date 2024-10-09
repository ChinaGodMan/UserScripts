import os
import sys
import json
sys.dont_write_bytecode = True
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from writer import process_markdown
from writer import process_file
from content_snippet import get_file_description
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'SHIELDS.md')
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)
def get_new_content():
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        return file.read()
def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    new_content = get_new_content()
    start_tag = "<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->"
    end_tag = "<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->"
    for script in scripts:
        backuppath = script.get('backuppath', '')
        cnfile_path = os.path.join(backuppath, "README.md")
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        if olddescriptions+"\n" == new_content:#换行符添加上,就这样了能用就行
                #print(f"----[{script.get('name', '')}]\033[91m 内容无变化,当前脚本目录MD文件不会执行替换。\033[0m")
                continue
        else:
                print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 内容变化,执行替换\033[0m")
        if backuppath and os.path.isdir(backuppath):
            for file in os.listdir(backuppath):
                if file.endswith('.md'):
                    file_path = os.path.join(backuppath, file)
                # process_markdown(descriptions,file_path,start_tag,end_tag, 'tail' ,False,'docs/ScriptsPath.json')
                    process_file(file_path, new_content, start_tag, end_tag, "head")
if __name__ == '__main__':
    main()
