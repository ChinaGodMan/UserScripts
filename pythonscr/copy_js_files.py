import os
import shutil

# 定义源目录和目标目录
source_dir = 'Script details'
target_dir = '.'

# 遍历源目录的子目录
for root, dirs, files in os.walk(source_dir):
    # 计算相对深度
    depth = root[len(source_dir):].count(os.sep)
    
    # 只处理到第二层目录（即深度为 2）
    if depth > 1:
        continue
    
    # 处理每个 .js 文件
    for file in files:
        if file.endswith('.js'):
            file_path = os.path.join(root, file)
            target_path = os.path.join(target_dir, file)
            
            # 复制文件
            shutil.copy(file_path, target_path)
            print(f'复制 {file_path} 到 {target_path}')
