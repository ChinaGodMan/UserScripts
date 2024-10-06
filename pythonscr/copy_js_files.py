import os
import shutil
import subprocess
import json
target_dir = '.'
result = subprocess.run(['git', 'diff', '--name-only',
                        'HEAD^', 'HEAD'], capture_output=True, text=True)
changed_files = result.stdout.splitlines()
with open('docs/ScriptsPath.json', 'r', encoding='utf-8') as json_file:
    scripts_data = json.load(json_file)
for file in changed_files:
    if file.endswith('.js'):
        file_path = os.path.join(os.getcwd(), file)
        if os.path.exists(file_path):
            file_name = os.path.basename(file)
            found = any(script['path'] ==
                        file_name for script in scripts_data['scripts'])
            if not found:
                print(f'文件 {file_name} 在 JSON 中找不到，跳过操作。')
                continue
            target_path = os.path.join(target_dir, file_name)
            subprocess.run(
                ['node', 'utils/single-format-monkey-meta.js', file_path], check=True)
            shutil.copy(file_path, target_path)
            print(f'复制 {file_path} 到 {target_path}')
        else:
            print(f'文件 {file} 不存在，跳过')
