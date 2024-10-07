import os
import sys
sys.dont_write_bytecode = True
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from writer import process_markdown
script_dir = os.path.dirname(os.path.abspath(__file__))
NEW_CONTENT_PATH = os.path.join(script_dir, 'HELP.md')
def get_new_content():
    with open(NEW_CONTENT_PATH, 'r', encoding='utf-8') as file:
        return file.read()
def main():
    new_content = get_new_content()
    for root, dirs, files in os.walk('./Script details/'):
        for file_name in files:
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(root, file_name)
                if "Change history" in file_path:
                    continue
                start_tag = "<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->"
                end_tag = "<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->"
                process_markdown(new_content,file_path,start_tag,end_tag, 'tail' ,False,NEW_CONTENT_PATH)
if __name__ == '__main__':
    main()
