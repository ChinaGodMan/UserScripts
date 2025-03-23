import os
import threading
from google_translate import translate_and_save
from google_translate import replace_encoded_with_utf8
from google_translate import extract_chinese_texts
from helper import is_file_updated_more_than
from helper import read_file_to_memory
from helper import read_json
from helper import extract_lang_code


# 翻译并行任务
def process_file(root, file, lang_code):
    file_path = os.path.join(root, file)
    if is_file_updated_more_than(file_path, 30):
        print(f"翻译时跳过文件 {file_path}，因为文件在30分钟之内没有更新")
        return  # 使用 return 结束当前函数的执行，而不是 continue
    print(f"开始处理文件: {file_path}，语言代码: {lang_code}")
    # 读取文件内容
    lines = read_file_to_memory(file_path)
    # 替换编码内容为中文
    lines = replace_encoded_with_utf8(lines)
    # 保存中文文本的位置信息
    chinese_texts = extract_chinese_texts(lines)
    # 翻译并保存结果，覆盖原文件
    translate_and_save(lines, chinese_texts, lang_code, False, file_path)


# 主函数，遍历二级目录并处理 README_xx.md 文件
def process_files():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    file_threads = []  # 存储处理文件的线程
    # max_threads = 20  # 设置最大同时处理的线程数

    for script in scripts:
        backuppath = script.get('backuppath', '')
        for root, dirs, files in os.walk(backuppath):
            for file in files:
                # 排除 README.md 文件，仅处理 README_xx.md 格式的文件
                if file == 'README.md':
                    continue
                # 匹配 README_xx.md 格式的文件，并提取语言代码
                lang_code = extract_lang_code(file)
                if lang_code is None:
                    continue
            # while threading.active_count() > max_threads:time.sleep(0.1)
                # 为每个文件启动一个线程处理
                thread = threading.Thread(target=process_file, args=(root, file, lang_code))
                file_threads.append(thread)
                thread.start()

    # 等待所有文件处理完成
    for thread in file_threads:
        thread.join()


process_files()
