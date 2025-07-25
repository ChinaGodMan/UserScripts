import os
from concurrent.futures import ThreadPoolExecutor

from google_translate import (
    extract_chinese_texts,
    replace_encoded_with_utf8,
    translate_and_save
)
from helper import (
    extract_lang_code,
    get_md_files,
    is_file_updated_more_than,
    read_file_to_memory,
    read_json
)


# 翻译单个文件
def process_file(root, file, lang_code):
    file_path = os.path.join(root, file)
    # 读取文件内容
    lines = read_file_to_memory(file_path)
    # 替换编码内容为中文
    lines = replace_encoded_with_utf8(lines)
    # 保存中文文本的位置信息
    chinese_texts = extract_chinese_texts(lines)
    # 翻译并保存结果，覆盖原文件
    translate_and_save(lines, chinese_texts, lang_code, False, file_path)


# 遍历所有的脚本,投递任务进行翻译
def go_work():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    MAX_THREADS = 3  # 每次只允许操作三个文件,再大谷歌就限制请求了.
    FILE_TIMEOUT = 30
    GREEN = '\033[32m'
    YELLOW = '\033[33m'
    RESET = '\033[0m'
    with ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        for script in scripts:
            script_directory = script.get('directory', '')
            md_files = get_md_files(script_directory)
            TEMP_OUT = False
            for file in md_files:
                if file == 'README.md':  # 直接退出,无需下面进行提取语言代码再退出.
                    continue
                    # 匹配 README_xx.md 格式的文件，并提取语言代码
                lang_code = extract_lang_code(file)
                if lang_code is None:
                    continue
                if is_file_updated_more_than(f'{script_directory}/{file}', FILE_TIMEOUT):
                    continue
                else:
                    if (not TEMP_OUT):
                        TEMP_OUT = True
                        print(f"正在处理脚本: {GREEN}{script.get('name', '')}{RESET} [{YELLOW}{script_directory}{RESET}]")
                    print(f"{YELLOW}    ==>处理文件: [{script_directory}/{file}] |语言代码: {lang_code}{RESET}")
                executor.submit(process_file, script_directory, file, lang_code)


go_work()
