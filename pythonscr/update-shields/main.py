import os
import subprocess
import time


script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'SHIELDS.md')

def get_new_content():
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        return file.read()


def main():
    new_content = get_new_content()

    # 遍历当前目录下的所有 .md 文件
    for root, dirs, files in os.walk('./Script details/'):
        for file_name in files:
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(root, file_name)
                start_tag = "<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->"
                end_tag = "<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->"
                command = [
    'python', 'pythonscr/writer.py',
    '--new-content', new_content,
    '--target-file', file_path,
    '--start-tag', start_tag,
    '--end-tag', end_tag,
    '--check-file','.pythonscr/update-shields/SHIELDS.md'
]
                subprocess.run(command)

if __name__ == '__main__':
    main()
