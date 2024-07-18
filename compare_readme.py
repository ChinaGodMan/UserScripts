import os
import json
import subprocess

# 读取 translate_readme.json
with open('docs/translate_readme.json', 'r', encoding='utf-8') as file:
    config = json.load(file)

# 比较本地文件和远程文件的内容
def compare_file_contents(local_file, remote_branch, remote_file_path):
    # 从远程分支中获取文件内容
    result = subprocess.run(
        ['git', 'show', f'{remote_branch}:{remote_file_path}'],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        print(f"git show 失败: {result.stderr}")
        return False  # 如果获取远程文件失败，返回 False

    remote_file_content = result.stdout
    
    # 读取本地文件内容
    with open(local_file, 'r', encoding='utf-8') as file:
        local_file_content = file.read()

    # 统一换行符为 LF
    local_file_content = local_file_content.replace('\r\n', '\n')
    remote_file_content = remote_file_content.replace('\r\n', '\n')

    # 比较文件内容
    return local_file_content != remote_file_content

# 检查是否需要拉取更新
pull_required = False

for item in config['translatelist']:
    local_file = os.path.join(item['foldpath'], item['translatefile'])
    remote_file_path = os.path.join(item['foldpath'], item['translatefile']).replace('\\', '/')

    if os.path.exists(local_file):
        # 比较本地文件和远程文件内容
        if compare_file_contents(local_file, 'origin/main', remote_file_path):
            print(f"文件 {local_file} 发生更改，标记为 true")
            item['translated'] = True
            pull_required = True
        else:
            print(f"文件 {local_file} 未发生更改，标记为 false")
            item['translated'] = False
    else:
        print(f"文件 {local_file} 不存在，标记为 true")
        item['translated'] = True
        pull_required = True

# 更新 JSON 文件
with open('docs/translate_readme.json', 'w', encoding='utf-8') as file:
    json.dump(config, file, ensure_ascii=False, indent=4)

# 输出是否需要拉取更新
print(f"::set-output name=pull_required::{str(pull_required).lower()}")
