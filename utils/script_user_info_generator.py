#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: script_user_info_generator.py
# Project: UserScripts
# File Created: 2025/03/08,Saturday 21:20:44
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/03/16,Sunday 19:09:18
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
from content_snippet import get_file_description
from writer import process_file_plus


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


# 检查脚本id是否已经被写入到README.md中
def check_scripts_in_links(input_file, old_links_text):
    """_summary_: 检查脚本id是否已经被写入到README.md中

    Args:
        input_file (str): 要检查的id文件路径
        old_links_text (str): 旧的内容

    Returns:
        bool: 如果存在返回True(如果文件是空的,也返回True)否则返回False
    """
    try:
        with open(input_file, 'r', encoding='utf-8') as infile:
            for line in infile:
                greasyfork_id = line.strip()
                if not greasyfork_id.isdigit():
                    return False
                search_string = f"scripts/{greasyfork_id}"
                if search_string not in old_links_text:
                    return False
        return True
    except FileNotFoundError:
        print(f"文件 {input_file} 未找到，请检查路径。")
        return False


def main():
    parser = argparse.ArgumentParser(description="从指定文件读取脚本编号并输出脚本信息")
    parser.add_argument(
        "-i", "--input", required=True, help="输入文件路径，每行一个脚本编号"
    )
    start_tag = "<!--AUTHORS-->"
    end_tag = "<!--AUTHORS-END-->"
    args = parser.parse_args()
    input_file = args.input

    # 多重验证................

    # 文件不存在直接结束这个.
    if not os.path.exists(input_file + '/authors'):
        print(f"==> \033[38;2;255;0;0m文件 {input_file} 不存在！\033[0m")
        sys.exit()

    old_scripts_link = get_file_description(input_file + '/README.md', start_tag, end_tag)

    # 从脚本id使用正则表达式匹配原来的旧信息 如果文件是空的,或者没有新的脚本加入
    if (check_scripts_in_links(input_file + '/authors', old_scripts_link)):
        print(f"==> \033[38;2;255;0;0m文件 {input_file} 未发现新的脚本ID\033[0m")
        sys.exit()

    # 生产最新的内容
    result_text = process_script_ids(input_file + '/authors')

    #  没有字也退出.
    if result_text is None or result_text.strip() == "":
        print(f' ==> \033[38;2;255;0;0m[{input_file}/authors] 结果为空\033[0m')
        sys.exit()
    scripts_link = '## 💖 脚本参考或使用了以下脚本:\n' + result_text

    # 新的脚本链接和旧的脚本链接一样，也不用更新.
    if old_scripts_link == scripts_link:
        print(f' ==> \033[38;2;255;0;0m[{input_file}/README.md] 描述未变化\033[0m')
    else:
        for file in os.listdir(input_file):
            if file.endswith('.md'):
                file_path = os.path.join(input_file, file)
                print(file_path)
                process_file_plus(file_path, scripts_link, start_tag, end_tag, "<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->", "below")


if __name__ == "__main__":

    main()
