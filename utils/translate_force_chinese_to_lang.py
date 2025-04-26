import os
import shutil
import subprocess
from google_translate import translate_and_save
from concurrent.futures import ThreadPoolExecutor
from google_translate import replace_encoded_with_utf8
from google_translate import extract_chinese_texts
from helper import is_file_updated_more_than
from helper import read_file_to_memory
from helper import read_json


def translate_readme(data):
    for item in data['files']:
        if not item.get('translated', False):
            print(f"文件 {item['source']},跳过翻译")
            continue
        MAX_THREADS = 2
        path = item['fold']
        source = item['source']
        target = item['target']
        readme_path = os.path.join(path, source) if path else source
        if not os.path.exists(readme_path):
            print(f'文件 {readme_path} 不存在，跳过翻译。')
            continue
        if is_file_updated_more_than(readme_path, 5):
            print("跳过文件 ，因为需要翻译的文件在五分钟之内没有新提交。")
            continue
        with ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
            for lang in target:
                # 对每个目标语言重新复制一份新的中文文件,并刷新对应的语言脚本列表.减少翻译量咯.
                new_file_name = f"docs/qwy_{lang}.md"  # "qwy_"被.gitignore忽略,不让重定向文件被git追踪.
                shutil.copy(readme_path, new_file_name)
                # 复制完成重定向翻译文件地址
                readme_path = new_file_name
                # 刷新每个语言的脚本列表
                subprocess.run(['python', 'utils/update_scripts_list.py', '--lang_code', lang, '--readme_path', readme_path], check=True)
                # 读取文件内容
                lines = read_file_to_memory(readme_path)
                lines = replace_encoded_with_utf8(lines)
                # 保存中文文本的位置信息
                chinese_texts = extract_chinese_texts(lines)
                executor.submit(translate_and_save, lines, chinese_texts, lang, True, source)


data = read_json('utils/docs/translate_readme.json')
translate_readme(data)
