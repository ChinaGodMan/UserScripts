#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: helper.py
# Project: UserScripts
# File Created: 2025/03/23,Sunday 09:19:42
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/03/24,Monday 02:28:55
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


# 提取语言代码
def extract_lang_code(file):
    match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
    if match:
        return match.group(1)
    return None


# 排序脚本元数据
def sort_userscript_section(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.readlines()
    # 找到 // ==UserScript== 和 // ==/UserScript== 的范围
    start_index = None
    end_index = None
    for i, line in enumerate(content):
        if "// ==UserScript==" in line:
            start_index = i
        elif "// ==/UserScript==" in line:
            end_index = i
            break
    # 如果没有找到对应范围，直接返回
    if start_index is None or end_index is None:
        print("未找到有效的 UserScript 区域")
        return
    # 提取范围内的内容
    userscript_section = content[start_index + 1:end_index]
    # 按类别分组
    descriptions = []
    names = []
    others = []
    for line in userscript_section:
        if re.match(r"// @description", line):
            descriptions.append(line.strip())
        elif re.match(r"// @name", line) and not re.match(r"// @namespace", line):
            names.append(line.strip())
        else:
            others.append(line.strip())
    # 按语言后缀排序（按规范排列规则，语言后缀优先）

    def sort_by_suffix(lines):
        return sorted(lines, key=lambda x: re.search(r"[:\-]([a-zA-Z\-]*)", x).group(1) if re.search(r"[:\-]([a-zA-Z\-]*)", x) else "")

    sorted_descriptions = sort_by_suffix(descriptions)
    sorted_names = sort_by_suffix(names)
    # 合并排序结果
    sorted_section = sorted_names + sorted_descriptions + others
    # 替换原始内容中的 UserScript 区域
    content[start_index + 1:end_index] = [line + "\n" for line in sorted_section]
    # 写入文件
    with open(file_path, "w", encoding="utf-8") as file:
        file.writelines(content)
