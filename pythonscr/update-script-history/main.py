import json
import os
import requests
import matplotlib.pyplot as plt
import pandas as pd
import mplcyberpunk
import time  # 导入 time 模块

# 读取 JSON 文件
try:
    with open('docs/ScriptsPath.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
except FileNotFoundError:
    print("错误：找不到 JSON 文件 'docs/ScriptsPath.json'")
    exit()
except json.JSONDecodeError as e:
    print(f"错误：解析 JSON 文件时出错: {e}")
    exit()

for script in data.get('scripts', []):
    # 获取 GreasyFork 的 ID 和备份路径
    greasyfork_id = script.get('GreasyFork')
    backuppath = script.get('backuppath')

    if not greasyfork_id or not backuppath:
        print("错误：脚本数据不完整")
        continue

    # 构造 URL
    url = f'https://greasyfork.org/zh-CN/scripts/{greasyfork_id}/stats.json'
    
    # 获取数据
    response = requests.get(url)
    
    # 调试信息
    print(f"请求 URL: {url}")
    print(f"响应状态码: {response.status_code}")
    print(f"响应内容: {response.text[:500]}")  # 只打印前500个字符
    
    # 检查响应内容是否为有效的 JSON
    if response.status_code != 200:
        print(f"错误：请求失败，状态码 {response.status_code}")
        continue
    
    try:
        star_json = json.loads(response.text)
    except json.JSONDecodeError as e:
        print(f"解析 JSON 时出错: {e}")
        continue  # 如果解析出错，跳过这个脚本
    
    star_date = []
    star_installs = []
    star_temp = 0
    
    for i in star_json:
        star_date.append(str(i))
        star_temp += star_json[i].get('installs', 0)
        star_installs.append(star_temp)
    
    # 打印调试信息
    print("日期:", star_date)
    print("安装数:", star_installs)
    
    # 确保文件夹存在
    output_dir = os.path.join(backuppath, 'preview')
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 绘制图像
    plt.style.use("cyberpunk")
    plt.figure(figsize=(20, 10), dpi=100)
    plt.rcParams['font.sans-serif'] = ['HYWenHei']  # 用来正常显示中文标签
    plt.title(script.get('name'), fontdict={'size': 30})
    plt.xlabel("时间", fontdict={'size': 30})
    plt.ylabel("总安装数（Greasy Fork）", fontdict={'size': 30})
    plt.xticks(fontsize=20)
    plt.yticks(fontsize=20)
    plt.plot(pd.to_datetime(star_date), star_installs, linewidth=4.0)
    plt.savefig(os.path.join(output_dir, 'statshistory.png'))
    plt.close()
    
    # 延时 3 秒钟
      # time.sleep(3)
