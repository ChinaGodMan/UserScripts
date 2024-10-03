import os
import shutil
import subprocess

# 定义目标目录
target_dir = '.'

# 获取变更的文件列表
result = subprocess.run(['git', 'diff', '--name-only', 'HEAD^', 'HEAD'], capture_output=True, text=True)
changed_files = result.stdout.splitlines()

# 遍历变更的文件列表
for file in changed_files:
    if file.endswith('.js'):
        # 检查文件是否存在于当前目录
        file_path = os.path.join(os.getcwd(), file)
        if os.path.exists(file_path):
            target_path = os.path.join(target_dir, os.path.basename(file))
            
            # 复制文件
            shutil.copy(file_path, target_path)
            print(f'复制 {file_path} 到 {target_path}')
        else:
            print(f'文件 {file} 不存在，跳过')
