import os
import shutil
import glob

# 定义源目录和目标目录
source_dir = 'Script details'
target_dir = '.'

# 查找所有 .js 文件
js_files = glob.glob(os.path.join(source_dir, '**', '*.js'), recursive=True)

# 复制每个 .js 文件到目标目录
for file_path in js_files:
    # 构造目标文件路径
    target_path = os.path.join(target_dir, os.path.basename(file_path))
    
    # 复制文件
    shutil.copy(file_path, target_path)
    print(f'复制 {file_path} 到 {target_path}')
