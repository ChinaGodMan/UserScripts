#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: script_user_info_generator.py
# Project: UserScripts
# File Created: 2025/03/08,Saturday 21:20:44
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/05/23,Friday 09:19:58
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
from helper import get_md_files
from helper import is_file_updated_more_than
from writer import process_file_plus


def fetch_script_json(greasyfork_id, is_sleazy=False, retrie=True):
    base_url = 'https://api.sleazyfork.org' if is_sleazy else 'https://api.greasyfork.org'
    base_site_url = base_url.replace('api.', '')
    url = f'{base_url}/scripts/{greasyfork_id}.json'
    try:
        response = requests.get(url)
        if response.status_code == 404 and retrie:
            return fetch_script_json(greasyfork_id, not is_sleazy, False)
        response.raise_for_status()
        data = response.json()
        script_name = data.get("name", "NULL")
        users = data.get("users", [])
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
    return ''


def process_script_ids(input_file):
    result_text = []
    try:
        with open(input_file, 'r', encoding='utf-8') as infile:
            first_line = infile.readline().strip()
            if first_line.startswith("<!--") and first_line.endswith("-->"):
                greasyfork_ids = first_line[4:-3].split(',')
                print(f"GreasyFork ID: {greasyfork_ids}")
            else:
                print(f"错误：第一行格式无效 {first_line}")
                return None

            for greasyfork_id in greasyfork_ids:
                greasyfork_id = greasyfork_id.strip()
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
    script_directory = args.input
    authors_file = script_directory + '/AUTHORS.md'
    start_tag = "<!--AUTHORS-->"
    end_tag = "<!--AUTHORS-END-->"

    # 文件不存在直接结束
    if not os.path.exists(authors_file):
        sys.exit()

    # 跳过未变动文件
    if is_file_updated_more_than(authors_file, 5):
        sys.exit()

    # 生产最新的内容
    result_text = process_script_ids(authors_file)
    others = get_file_description(authors_file, '<!--OTHERS-->', '<!--OTHERS-END-->')

    #  构建的greasyfork网站的链接和其他引用信息都为空.
    if not result_text and not others:
        print(f' ==> \033[38;2;255;0;0m[{authors_file}] 没有内容\033[0m')
        sys.exit()

    scripts_link = '## 💖 脚本参考或使用了以下脚本:\n' + result_text

    # 写出到`authors_file`
    process_file_plus(authors_file, scripts_link, start_tag, end_tag, "<!--HISTORY-END-->", "below")

    # greasyfork的链接和其他引用拼接起来
    if others:
        # 没有greasyfrok的链接，不添加换行符
        scripts_link += f'<br>\n{others}' if result_text else others

    old_scripts_link = get_file_description(script_directory + '/README.md', start_tag, end_tag)

    # 新的脚本链接和旧的脚本链接一样，也不用更新.
    if scripts_link == old_scripts_link:
        print(f' ==> \033[38;2;255;0;0m[{script_directory}/README.md] 描述未变化\033[0m')
    else:
        md_files = get_md_files(script_directory)
        for md_file in md_files:
            file_path = os.path.join(script_directory, md_file)
            process_file_plus(file_path, scripts_link, start_tag, end_tag, "<!--HISTORY-END-->", "below")


if __name__ == "__main__":

    main()
