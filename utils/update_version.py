from searcher import search_in_file
import subprocess
import re
import datetime
import os


# https://github.com/murdos/musicbrainz-userscripts/blob/master/tools/update_version.py
def make_version_line(old_value='0.0.0.0', spacing=' ' * 8, eol="\n"):
    prev_version = [int(x) for x in old_value.split('.')]
    now = datetime.datetime.now()
    version = [now.year, now.month, now.day, 1]
    if prev_version[:3] == version[:3]:
        version[3] = prev_version[3] + 1
    version_str = '%04d.%d.%d.%d' % tuple(version)
    return ('// @version' + spacing + version_str, version_str)


def process_files(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    version_match = re.search(r'(//\s*@version)(\s+)(\S+)', content)
    if version_match:
        spaces = version_match.group(2)  # 匹配中间的空格数
        old_version = version_match.group(3)  # 匹配旧版本号
        updated_line, version_str = make_version_line(old_version, spaces)
        print(f"{file_path}:{old_version} (old)")
        print(f"{file_path}:{version_str} (new)")
        updated_content = content.replace(version_match.group(0), updated_line)
        with open(file_path, 'w', encoding='utf-8', newline='\n') as file:
            file.write(updated_content)
    return version_str


def list_userjs():
    result = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True, check=True)
    modified_files = []
    for line in result.stdout.splitlines():
        status = line[:2].strip()
        file_path = line[3:].strip()
        if status in {"M", "A", "R", "D"}:
            if ".user.js" in file_path:
                modified_files.append(file_path)
    return modified_files


def update_log(md_path, lines_to_add):
    with open(md_path, "r", encoding="utf-8") as f:
        original_content = f.readlines()
    # 在脚本名称后插入新的更新段.
    updated_content = original_content[:1] + lines_to_add + original_content[1:]
    with open(md_path, "w", encoding="utf-8", newline='\n') as f:
        f.writelines("\n" + line + "\n" if not line.endswith("\n") else line for line in updated_content)


if __name__ == "__main__":
    modified_files = list_userjs()
    if modified_files:
        for file in modified_files:
            new = process_files(file)
            results = search_in_file(file, 'zh-CN')
            name = results.name_matches[0]
            change_log = os.path.dirname(file) + "/CHANGELOG.md"
            if not os.path.exists(change_log):
                with open(change_log, 'w', encoding='utf-8', newline='\n') as f:
                    f.write(f"# **🛠️ {name} 更新日志**\n")
            lines = [
                f"### **📅 {new}**",
                "**新增**: 说明....<br>",
                "---",
            ]
            update_log(change_log, lines)
            os.system(f"code {change_log}")
