#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: helper.py
# Project: UserScripts
# File Created: 2025/03/23,Sunday 09:19:42
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/03/23,Sunday 10:37:41
# Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# License: MIT License
# Copyright © 2024 - 2025 ChinaGodMan,Inc
###
import re
import subprocess
import time
import io
import json


# 读取文件到内存
def read_file_to_memory(file_path):
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()
    virtual_file = io.StringIO(content)
    lines = [line for line in virtual_file]
    virtual_file.close()
    return lines


# 检查文件提交时间是否超过指定时间
def is_file_updated_more_than(file_path, timeout_minutes):
    try:
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ct', file_path],
            capture_output=True, text=True, check=True
        )
        last_commit_time = int(result.stdout.strip())
        current_time = int(time.time())
        time_diff_minutes = (current_time - last_commit_time) / 60
        return time_diff_minutes > timeout_minutes
    except subprocess.CalledProcessError as e:
        print(f"错误: 无法获取提交时间 - {file_path} {e}")
        return None


# 加载json文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)


def extract_lang_code(file):
    match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
    if match:
        return match.group(1)
    return None
