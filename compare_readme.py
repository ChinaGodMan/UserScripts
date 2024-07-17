import os
import json
import subprocess

# 读取 translate_readme.json
with open('docs/translate_readme.json', 'r', encoding='utf-8') as file:
    config = json.load(file)

pull_required = False

for item in config['translatelist']:
    local_file = os.path.join(item['foldpath'], item['translatefile'])

    if os.path.exists(local_file):
        # 使用 git diff 比较本地文件和远程 HEAD 版本
        result = subprocess.run(
            ['git', 'diff', '--name-only', 'HEAD', 'origin/HEAD', '--', local_file],
            capture_output=True,
            text=True
        )
        print(f"Comparing {local_file}:")
        print(result.stdout)
        if local_file in result.stdout.splitlines():
            item['translated'] = 'true'
            pull_required = True
        else:
            item['translated'] = 'false'
    else:
        item['translated'] = 'true'
        pull_required = True

# 更新 JSON 文件
with open('docs/translate_readme.json', 'w', encoding='utf-8') as file:
    json.dump(config, file, ensure_ascii=False, indent=4)

# 输出是否需要拉取更新
print(f"::set-output name=pull_required::{str(pull_required).lower()}")
