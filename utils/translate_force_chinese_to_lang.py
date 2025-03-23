import os
import threading
from google_translate import translate_and_save
from google_translate import replace_encoded_with_utf8
from google_translate import extract_chinese_texts
from helper import is_file_updated_more_than
from helper import read_file_to_memory
from helper import read_json


# 主函数
def translate_readme(data):
    for item in data['translatelist']:
        if not item.get('translated', False):
            print(f"条目 {item['foldpath']} 的 translated 为 false，跳过翻译。")
            continue

        foldpath = item['foldpath']
        translatefile = item['translatefile']
        translatedto = item['translatedto']
        readme_path = os.path.join(foldpath, translatefile) if foldpath else translatefile

        if not os.path.exists(readme_path):
            print(f'文件 {readme_path} 不存在，跳过翻译。')
            continue
        if is_file_updated_more_than(readme_path, 5):
            print("跳过文件 ，因为需要翻译的文件在五分钟之内没有新提交。")
            continue
        # 读取文件内容
        lines = read_file_to_memory(readme_path)
        lines = replace_encoded_with_utf8(lines)

        # 保存中文文本的位置信息
        chinese_texts = extract_chinese_texts(lines)

        # 为每种语言启动一个线程并行翻译
        language_threads = []
        for lang in translatedto:
            thread = threading.Thread(target=translate_and_save, args=(
                lines, chinese_texts, lang, True, translatefile))
            language_threads.append(thread)
            thread.start()

        # 等待所有语言线程完成
        for thread in language_threads:
            thread.join()


script_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(script_dir, 'docs/translate_readme.json')
data = read_json(json_path)
# 开始翻译
translate_readme(data)
