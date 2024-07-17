import os
import json
import subprocess

# 读取 translate_readme.json
with open('docs/translate_readme.json', 'r', encoding='utf-8') as file:
    config = json.load(file)

pull_required = False

for item in config['translatelist']:
    local_file = os.path.join(item['foldpath'], item['translatefile'])
    
    # 检查本地文件是否存在
    if os.path.exists(local_file):
        # 使用 git diff 比较本地和远程文件
        result = subprocess.run(
            ['git', 'diff', 'origin/HEAD', '--', local_file],
            capture_output=True,
            text=True
        )
        
        # 如果 git diff 有输出，说明文件有变化
        if result.stdout:
            item['istranslated'] = True
            pull_required = True
        else:
            item['istranslated'] = False
    else:
        item['istranslated'] = False

# 更新 JSON 文件
with open('docs/translate_readme.json', 'w', encoding='utf-8') as file:
    json.dump(config, file, ensure_ascii=False, indent=4)

# 输出是否需要拉取更新
print(f"::set-output name=pull_required::{str(pull_required).lower()}")
