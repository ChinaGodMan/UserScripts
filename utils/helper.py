#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: helper.py
# Project: UserScripts
# File Created: 2025/03/23,Sunday 09:19:42
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/05/23,Friday 23:20:22
# Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# License: MIT License
# Copyright © 2024 - 2025 ChinaGodMan,Inc
###
import io
import json
import os
import re
import subprocess
import time
import urllib.parse

from content_snippet import get_file_description


# 找md文件,并排除特定文件,不直接获取含有`README`字符的文件,以防未来增加新功能.
def get_md_files(directory):
    file = read_json("utils/docs/excluded_json_files.json")
    excluded_files = file.get("files", [])
    return [file for file in os.listdir(directory)
            if file.lower().endswith('.md') and file.lower() not in [f.lower() for f in excluded_files]]


# 读取文件到内存
def read_file_to_memory(file_path):
    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()
    virtual_file = io.StringIO(content)
    lines = [line for line in virtual_file]
    virtual_file.close()
    return lines


# 比较提交记录
def is_file_changed_in_last_commit(file_path):
    try:
        result = subprocess.run(
            ['git', 'diff', '--name-only', 'HEAD^', 'HEAD'],
            capture_output=True,
            text=True,
            check=True
        )
        changed_files = result.stdout.splitlines()
        return file_path in changed_files
    except subprocess.CalledProcessError as e:
        print(f"Error occurred while running git command: {e}")
        return False


def is_file_modified(file_path):
    try:
        result = subprocess.run(
            ["git", "status", "-s", file_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        if result.stdout.strip():
            return True
        else:
            return False
    except Exception as e:
        print(f"发生错误：{e}")
        return False


# 检查文件提交时间是否超过指定时间
def is_file_updated_more_than(file_path, timeout_minutes):
    # 对于被修改的文件,直接返回False
    if (is_file_modified(file_path)):
        return False
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
    with open(file_path, "w", encoding="utf-8", newline='\n') as file:
        file.writelines(content)


def format_str(input_str, lang=""):
    settings = read_json('utils/docs/settings.json')

    # 提取脚本列表标记点
    readme_start_tag = "<!--README-TOC-->"
    readme_end_tag = "<!--README-TOC-END-->"
    toc = get_file_description(f'docs/{lang}/README.md', readme_start_tag, readme_end_tag)
    last_line = toc.strip().split('\n')[-1]
    match = re.search(r"#(.+?)\)", last_line)
    scripts_list_mark = match.group(1)
    scripts_list_mark = urllib.parse.quote(scripts_list_mark)

    placeholders = {
        'repo_name': settings['repository'],
        'sub_repo_name': settings['sub_repository'],
        'separator': settings['separator'],
        'greasyfork_user_id': str(settings['greasyfork_user_id']),
        'scripts_list': scripts_list_mark,
        'lang_code': lang
    }

    def replacer(match):
        key = match.group(1)
        return placeholders.get(key, match.group(0))
    pattern = re.compile(r'{([^}]+)}')
    formatted_str = pattern.sub(replacer, input_str)
    return formatted_str


def get_repo_name():
    settings = read_json('utils/docs/settings.json')
    return settings['repository']


def get_sub_repo_name():
    settings = read_json('utils/docs/settings.json')
    return settings['sub_repository']
