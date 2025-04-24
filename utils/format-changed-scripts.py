import os
import subprocess
import json
target_dir = '.'
result = subprocess.run(['git', 'diff', '--name-only', 'HEAD^', 'HEAD'], capture_output=True, text=True)
changed_files = result.stdout.splitlines()
with open('docs/ScriptsPath.json', 'r', encoding='utf-8') as json_file:
    scripts_data = json.load(json_file)
for file in changed_files:
    if file.endswith('.js'):
        file_path = os.path.join(os.getcwd(), file)
        if os.path.exists(file_path):
            file_name = os.path.basename(file)
            matching_script = next((script for script in scripts_data['scripts'] if script['js_name'] == file_name), None)
            if not matching_script:
                print(f'文件 {file_name}不在列表中,无需格式化')
                continue
            if not matching_script.get('greasyfork_id') or not matching_script['greasyfork_id'].strip():
                print(f'脚本未发布,此次格式化由\033[38;2;54;114;115m[utils/script-import-sync.py]\033[0m==>\033[38;2;237;147;149m[{file_path}]\033[0m 进行操作.')
                continue
            target_path = os.path.join(target_dir, file_name)
            subprocess.run(['node', 'utils/single-format-monkey-meta.js', file_path], check=True)
        else:
            print(f'文件 {file} 不存在，跳过')
