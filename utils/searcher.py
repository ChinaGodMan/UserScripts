import re


class SearchResults:
    def __init__(self):
        self.name_matches = []
        self.description_matches = []


def search_in_file(file_path, search_string):
    results = SearchResults()

    def perform_search(content, search_str):
        name_pattern = re.compile(r'// @name:\s*' + re.escape(search_str) + r'\s*(.+)')
        description_pattern = re.compile(r'// @description:\s*' + re.escape(search_str) + r'\s*(.+)')
        results.name_matches.extend([match.strip() for match in name_pattern.findall(content)])
        results.description_matches.extend([match.strip() for match in description_pattern.findall(content)])

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            perform_search(content, search_string)

            if not results.name_matches and not results.description_matches:
                perform_search(content, "zh-CN")

    except FileNotFoundError:
        print("文件未找到，请检查文件路径。")
    except Exception as e:
        print(f"发生错误: {e}")

    return results
