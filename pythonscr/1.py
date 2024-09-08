import sys
import subprocess
import time

# 获取传递的文件路径
file_path = sys.argv[1]

# 固定超时时间为 5 分钟
timeout_minutes = 30

# 使用 git log 获取文件的最后提交时间
result = subprocess.run(['git', 'log', '-1', '--format=%ct', file_path], capture_output=True, text=True)

# 获取最后提交的 Unix 时间戳
last_commit_time = int(result.stdout.strip())

# 获取当前时间的 Unix 时间戳
current_time = int(time.time())

# 计算时间差（分钟）
time_diff_minutes = (current_time - last_commit_time) / 60

# 判断是否超过 5 分钟，并返回 True 或 False
if time_diff_minutes > timeout_minutes:
    print("False")  # 超过 5 分钟，返回 False
else:
    #print(time_diff_minutes)
    print("True")   # 未超过 5 分钟，返回 True
