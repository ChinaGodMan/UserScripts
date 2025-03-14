#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: script_user_info_generator.py
# Project: UserScripts
# File Created: 2025/03/08,Saturday 21:20:44
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/03/15,Saturday 06:31:55
# Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# License: MIT License
# Copyright © 2024 - 2025 ChinaGodMan
###

import os
import sys
import requests
import json
import argparse
from writer import process_file


def fetch_script_json(greasyfork_id, is_sleazy=False):
    base_url = 'https://api.sleazyfork.org' if is_sleazy else 'https://api.greasyfork.org'
    url = f'{base_url}/scripts/{greasyfork_id}.json'
    try:
        response = requests.get(url)
        if response.status_code == 404:
            return fetch_script_json(greasyfork_id, not is_sleazy)
        response.raise_for_status()
        data = response.json()
        script_name = data.get("name", "NULL")
        users = data.get("users", [])
        base_site_url = 'https://sleazyfork.org' if is_sleazy else 'https://greasyfork.org'
        user_links = [
            f"[🧑‍💻 **@{user.get('name')}**]({base_site_url}/users/{user.get('id')})"
            for user in users
        ]
        script_link = f"[{script_name}]({base_site_url}/scripts/{greasyfork_id})"
        return f"{', '.join(user_links)} ⇒ 📜 _{script_link}_"
    except requests.exceptions.RequestException as e:
        print(f"{url} 失败: {e}")
    except json.JSONDecodeError as e:
        print(f"解析脚本统计数据时出错: {e}")
    return None


def process_script_ids(input_file):
    result_text = []
    try:
        with open(input_file, 'r', encoding='utf-8') as infile:
            for line in infile:
                greasyfork_id = line.strip()
                if not greasyfork_id.isdigit():
                    print(f"警告：跳过无效的脚本编号 {greasyfork_id}")
                    continue

                result = fetch_script_json(int(greasyfork_id))
                if result:
                    result_text.append(result)
                    print(f"成功处理脚本编号 {greasyfork_id}")
                else:
                    print(f"失败：无法获取脚本编号 {greasyfork_id}")
        return '<br>\n'.join(result_text)
    except FileNotFoundError:
        print(f"错误：找不到输入文件 {input_file}")
    except Exception as e:
        print(f"运行时出错：{e}")
    return None


def main():
    parser = argparse.ArgumentParser(description="从指定文件读取脚本编号并输出脚本信息")
    parser.add_argument(
        "-i", "--input", required=True, help="输入文件路径，每行一个脚本编号"
    )

    args = parser.parse_args()
    input_file = args.input
    if not os.path.exists(input_file):
        print(f"文件 {input_file} 不存在！")
        sys.exit()
    result_text = '## 💖 脚本参考或使用了以下脚本:\n' + process_script_ids(input_file + '/authors')
    print(result_text)
    process_file(input_file + '/README.md', result_text, '<!--AUTHORS-->', '<!--AUTHORS-END-->', "head")


if __name__ == "__main__":

    main()
