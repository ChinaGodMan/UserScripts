#!/usr/bin/env python3
# -*- coding:utf-8 -*-
###
# File: google_translate.py
# Project: UserScripts
# File Created: 2025/03/23,Sunday 08:44:46
# Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# Last Modified: 2025/05/14,Wednesday 06:31:08
# Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
# -----
# License: MIT License
# Copyright © 2024 - 2025 ChinaGodMan,Inc
###
from urllib.parse import urlencode
from urllib.request import urlopen
import urllib.parse
import threading
import json
import os
import re


# 黑名单：不需要翻译的中文文本
blacklist = ["人民的勤务员", "简体中文", "繁體中文", "日本語"]

"""
    ! 翻译缓存表,用于url编码的中文是需要翻译还是直接使用缓存
    ! False 不需要 API 翻译，直接使用缓存值,并且不需要url编码
    ! True 需要API翻译,并且需要url编码

    ? 在md文件使用的是html显示小徽章,中文必须编码.不然github代理图片时在显示也会炸
        中文未编码,github炸图:<img src="https://img.shields.io/badge/dynamic/json?&label=安装总
        中文未编码,使用md不会炸:![d](https://img.shields.io/badge/dynamic/json?&label=安装总)
    ? 必须对字符串进行url编码,不然翻译后含有空格会导致图炸了.
"""
# 徽章图标的原始中文字符串,在翻译之前需要转换为url编码替换掉文件内的对应url编码字符串
encode_map = {
    "复刻": ("Forks", False),
    "问题": ("issues", False),
    "所有脚本总安装数": ("issues", True),
    "今日所有脚本安装数": ("issues", True),
    "所有一般": ("issues", True),
    "联系": ("issues", True),
    "所有差评": ("issues", True),
    "所有好评": ("issues", True),
    "星标": ("issues", True),
    "脚本数量": ("issues", True),
    "代码质量": ("issues", True),
    "操作系统": ("issues", True),
    "推荐浏览器": ("issues", True),
    "脚本管理器": ("issues", True),
    "用户数量": ("issues", True),
}


class TranslationCaching:
    def __init__(self):
        self.cache = []

    def add_translation(self, lang, key, value):
        for lang_obj in self.cache:
            if lang_obj["language"] == lang:
                lang_obj["entry"][key] = value
                return
        self.cache.append({
            "language": lang,
            "entry": {key: value}
        })

    def check_translation(self, lang, key):
        for lang_obj in self.cache:
            if lang_obj["language"] == lang:
                return key in lang_obj["entry"]
        return False

    def get_translation(self, lang, key):
        for lang_obj in self.cache:
            if lang_obj["language"] == lang:
                return lang_obj["entry"].get(key, key)
        return key


# 将编码后的中文字符替换成可阅读的中文字符
def replace_encoded_with_utf8(lines):
    updated_lines = []
    for line in lines:
        for chinese_text, encoded_value in encode_map.items():
            encoded_key = urllib.parse.quote(chinese_text)
            if encoded_key in line:
                line = line.replace(encoded_key, chinese_text)
        updated_lines.append(line)
    return updated_lines


#
def extract_chinese_texts(lines):
    chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')  # Matches Chinese characters
    chinese_texts = []

    for line_number, line in enumerate(lines):
        if "<!--" in line:
            continue
        for match in chinese_pattern.finditer(line):
            chinese_text = match.group()
            chinese_texts.append((line_number, chinese_text))
    return chinese_texts


cache_manager = TranslationCaching()


# 调用谷歌API进行翻译
def translate_text(text, target_lang):
    # 整个字符串为黑名单中文本,直接返回
    if text in blacklist:
        return text
    if cache_manager.check_translation(target_lang, text):
        cache_text = cache_manager.get_translation(target_lang, text)
        return cache_text
    # 对文本中含有黑名单的部分进行替换,并临时替换
    forbiddens = []
    c = 0
    for forbidden in blacklist:
        if forbidden in text:
            c += 1
            replacement = f'2025323_{c}'
            forbiddens.append((forbidden, replacement))
            text = text.replace(forbidden, replacement)
    # 如果在缓存中，判断布尔值
    if text in encode_map:
        cached_translation, needs_api_translation = encode_map[text]
        # 如果缓存中的布尔值为 False，直接使用缓存翻译
        if not needs_api_translation:
            # print(f"从缓存中获取翻译：{text} -> {cached_translation}")
            return cached_translation
        # 如果布尔值为 True，强制调用 API 翻译，不使用缓存的翻译
        else:
            print(f"{text} 在缓存中，但需要通过 API 翻译。")
    # 调用翻译 API 进行翻译
    api_url = 'https://translate.googleapis.com/translate_a/single'
    params = {'client': 'gtx', 'dt': 't', 'sl': 'auto', 'tl': target_lang, 'q': text}
    full_url = api_url + '?' + urlencode(params)
    try:
        # 调用 API 获取翻译
        response = urlopen(full_url)
        data = response.read().decode('utf-8')
        parsed_data = json.loads(data.replace("'", "\u2019"))
        translations = []
        for segment in parsed_data[0]:
            if len(segment) > 0:
                translations.append(segment[0])
        translated_text = " ".join(translations)
        # 如果缓存中该词条的布尔值为 True，进行 URL 编码
        if text in encode_map and encode_map[text][1]:
            translated_text = urllib.parse.quote(translated_text)
        # 包含黑名单的字符串,需要替换为原来的未翻译结果
        for forbidden, replacement in forbiddens:
            translated_text = translated_text.replace(replacement, forbidden)
        if not cache_manager.check_translation(target_lang, text):
            cache_manager.add_translation(target_lang, text, translated_text)
        return translated_text
    except Exception as e:
        print(f"翻译错误：{e}")
        return None


# 翻译锁，确保多个线程不会同时修改 translations
translation_lock = threading.Lock()


# 锁
def translate_worker(chinese_texts, translations, lang):
    for idx, chinese_text in chinese_texts:
        translated_text = translate_text(chinese_text, lang)
        if translated_text:
            # 使用锁确保线程安全地修改 translations
            with translation_lock:
                translations[(idx, chinese_text)] = translated_text


# 翻译并保存结果，覆盖原文件
def translate_and_save(lines, chinese_texts, lang, shrink, file_path):
    translations = {}  # 每种语言有自己的翻译结果
    threads = []
    chunk_size = len(chinese_texts) // 50 or 1  # 加大数量
    for i in range(0, len(chinese_texts), chunk_size):
        chunk = chinese_texts[i:i + chunk_size]
        thread = threading.Thread(target=translate_worker, args=(chunk, translations, lang))
        threads.append(thread)
        thread.start()
    # 等待所有线程完成
    for thread in threads:
        thread.join()
    # 从后往前替换中文文本
    new_lines = lines[:]
    for line_number, chinese_text, translated_text in reversed(
            [(ln, ct, translations.get((ln, ct), None)) for ln, ct in chinese_texts if (ln, ct) in translations]):
        new_lines[line_number] = new_lines[line_number].replace(
            chinese_text, translated_text, 1)
    if shrink:  # 允许创建多级目录,将每个语言作为单独的readme.md文件
        output_dir = os.path.dirname(file_path)
        dir_with_lang = os.path.join(output_dir, lang)
        if not os.path.exists(dir_with_lang):
            os.makedirs(dir_with_lang)
        output_path = os.path.join(dir_with_lang, 'README.md')
        with open(output_path, 'w', encoding='utf-8') as f_out:
            f_out.writelines(new_lines)
        print(f"翻译完成，收缩到 [{lang}]目录,写入内容到'{output_path}'")
    else:
        with open(file_path, 'w', encoding='utf-8') as f_out:
            f_out.writelines(new_lines)
        print(f"翻译完成，已将结果覆盖保存到 '{file_path}'")
