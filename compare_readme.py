import os
import json
import hashlib

# 读取 translate_readme.json
with open('docs/translate_readme.json', 'r', encoding='utf-8') as file:
    config = json.load(file)

# 计算文件的 MD5 哈希值
def md5(file_path):
    hash_md5 = hashlib.md5()
    with open(file_path, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

pull_required = False

for item in config['translatelist']:
    local_file = os.path.join(item['foldpath'], item['translatefile'])
    remote_file = os.path.join('remote_files', item['foldpath'], item['translatefile'])
    
    if os.path.exists(local_file) and os.path.exists(remote_file):
        local_md5 = md5(local_file)
        remote_md5 = md5(remote_file)
        if local_md5 != remote_md5:
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
