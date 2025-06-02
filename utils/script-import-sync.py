import argparse
import json
import os
import re
import shutil
import subprocess
import sys
from urllib.parse import unquote

import pyotp
import requests
from bs4 import BeautifulSoup
from helper import (
    get_md_files,
    get_repo_name,
    is_file_changed_in_last_commit,
    read_json
)
from searcher import search_in_file

'''
名称:       自动添加脚本并更新附加信息
版本:            2025-05-19 @ 22:14:51 Monday +0800
介绍:     当docs/ScriptsPath.json有新的脚本目录被加入,但没有有对应的脚本ID时.自动创建脚本并且同步附加信息
          或者当仓库名称被改变时,更新所有的脚本信息,防止因为仓库名称改变导致脚本webhook失效


#DONE          1. 添加批量更新功能(当仓库名称被改变时,自动更新所有脚本信息)
#DONE               1.1. 在`for script in scripts:`可以增加一个环境变量,当这个变量为True时,就跳过导入脚本,区域化,复制文档.直接进行更新操作
#TODO          2. 添加更多的错误处理

作者:            人民的勤务员 <china.qinwuyuan@gmail.com>
主页:     https://github.com/ChinaGodMan/UserScripts
'''

REPO_URL = f"https://raw.githubusercontent.com/{get_repo_name()}/main/"


# 构建同步文档地址
def build_urls(directory):
    urls = []
    md_files = get_md_files(directory)
    for filename in md_files:
        if filename != 'README_en.md':
            '''
        可以将readme_en.md也包括在urls当中
        gf会自动将en的语言设置成默认的语言
        但是会导致脚本管理页面的元素发生变化
        导致油猴脚本 [506717-GreaysFork增强WebHook同步设置]无法获取到元素.
        不想改那个脚本,就兼容下得了.
            '''
            # 仓库的默认介绍语言一律是中文,需要手动设置
            if filename == 'README.md':
                urls.append(REPO_URL + directory + "/" + filename + "##zh-CN")
            else:
                urls.append(REPO_URL + directory + "/" + filename)
    return urls


# 和谐url 去除特殊字符
def extract_locale_key(url):
    if '##' in url:
        match = re.search(r'##[^\(]*\(([^)]*)\)$', url) or re.search(r'##([^#]*)$', url)
    else:
        match = re.search(r'README_(.*?)\.md', url)
    return match.group(1) if match else None


# 复制多语言文档
def copy_readme(source_path, suffixes):
    if not suffixes:
        return
    readme_file = os.path.join(source_path, 'README.md')
    for suffix in suffixes:
        new_file_name = f'README_{suffix}.md'
        new_file_path = os.path.join(source_path, new_file_name)
        shutil.copy(readme_file, new_file_path)


# GreasyFork API类
class GreasyFork:
    def __init__(self):
        self.session = requests.Session()
        self.csrf_token = None

    def fetch_csrf_token(self):
        """
        提取 CSRF Token。
        """
        url = 'https://greasyfork.org'
        response = self.session.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            csrf_token_meta = soup.find('meta', {'name': 'csrf-token'})
            if csrf_token_meta:
                self.csrf_token = csrf_token_meta.get('content')
                return self.csrf_token
            else:
                raise ValueError("CSRF Token meta tag not found")
        else:
            raise Exception(
                f"Failed to fetch the page. Status Code: {response.status_code}")

    def login(self, email, password, totp):
        if self.csrf_token is None:
            self.fetch_csrf_token()

        login_url = 'https://greasyfork.org/zh-CN/users/sign_in'
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        data = {
            'authenticity_token': self.csrf_token,
            'user[email]': email,
            'user[password]': password,
            'user[remember_me]': '1',
            'user[otp_attempt]': totp,
            'commit': '登录'
        }

        response = self.session.post(login_url, headers=headers, data=data)
        if response.ok:
            soup = BeautifulSoup(response.text, 'html.parser')
            # 登录提示
            tip = soup.select_one("body > div.width-constraint > p")
            # 用户信息
            user_info = soup.select_one("#nav-user-info > span.user-profile-link > a")
            match = re.search(r'/users/(\d+)-', user_info.get('href', ''))
            user_id = match.group(1) if match else None
            user_name = user_info.get_text()
            print(f"\033[32m{user_name}({user_id}):{tip.get_text()}\033[0m")
            self.fetch_csrf_token()  # 登录成功后重新获取csrf_token.所有的请求都需要csrf_token,而且获取一次就行了,一个csrf_token可以多次使用
        else:
            raise Exception(f"Login failed. Status Code: {response.status_code}\n{response.text}")

    def get(self, url):
        response = self.session.get(url)
        return response

    def post(self, url, data, headers=None):
        response = self.session.post(url, data=data, headers=headers)
        return response

    def get_csrf_token(self):
        """
        获取 CSRF Token 的方法，供外部调用。
        """
        if self.csrf_token is None:
            return self.fetch_csrf_token()
        return self.csrf_token

    def import_scripts(self, sync_urls):
        """
        导入脚本并提取脚本ID
        # NOTE (可以多个脚本同时导入,不知道返回的列表是否与导入顺序一致,没测试过.)
        """

        # 刷新 CSRF Token,历史代码.无需调用.
        self.fetch_csrf_token()
        import_url = 'https://greasyfork.org/zh-CN/import/add'
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        data = {
            'authenticity_token': self.csrf_token,
            'sync_urls': sync_urls,
            'sync-type': 'automatic',
            'commit': '导入'
        }
        response = self.session.post(import_url, headers=headers, data=data)

        # 解析返回的脚本ID信息
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            # 提取返回的脚本列表
            results = []  # TODO 用于存储解析后的数组(目前只支持单个导入脚本,如果需要多个,需要下面的代码)
            ul_element = soup.select_one("body > div.width-constraint > section > ul")
            if ul_element:
                li_elements = ul_element.find_all("li")
                for li in li_elements:
                    a_tag = li.find("a")
                    if a_tag and 'href' in a_tag.attrs:
                        link = a_tag['href']
                        match = re.search(r'/scripts/(\d+)-(.+)', link)
                        script_id = match.group(1)  # ID
                        description = unquote(match.group(2))  # 名称
                        results.append([script_id, description])
                        return int(script_id)
            else:
                print("脚本返回的元素未找到,需要手动检查脚本是否被导入了.")
                return 0
        else:
            raise Exception(
                f"导入被拒绝,状态码: {response.status_code}\n{response.text}")
        return 0

    def sync_update(self, script_url, script_id, attribute_default, additional_info):
        """
        更新脚本附加同步信息
        """

        # 历史代码.保留以备用
        if self.csrf_token is None:
            self.fetch_csrf_token()

        # 按照顺序构建区域代码(与 GreasyFork 保持一致)
        langmap = read_json('utils/docs/lang_map.json')
        area = {}
        index = 1
        for lang_dict in langmap["langs"]:
            for lang_code in lang_dict.keys():
                area[lang_code] = str(index)
                index += 1

        # 设置表单数据
        form_data = {
            '_method': 'patch',
            'authenticity_token': self.csrf_token,
            'script[sync_identifier]': script_url,
            'script[sync_type]': 'webhook',
            'update-and-sync': '更新设置并立即同步'
        }

        # 默认的语言文件
        if attribute_default:
            form_data['additional_info_sync[0][attribute_default]'] = 'true'
            form_data['additional_info_sync[0][sync_identifier]'] = attribute_default
            form_data['additional_info_sync[0][value_markup]'] = 'markdown'

        # 遍历每个 语言URL,用于构建区域化文件
        for index, url in enumerate(additional_info):
            locale_key = extract_locale_key(url)
            locale = area.get(locale_key, '')
            clean_url = re.sub(r'##.*', '', url)
            form_data[f'additional_info_sync[{index + 1}][attribute_default]'] = 'false'
            form_data[f'additional_info_sync[{index + 1}][locale]'] = locale
            form_data[f'additional_info_sync[{index + 1}][sync_identifier]'] = clean_url
            form_data[f'additional_info_sync[{index + 1}][value_markup]'] = 'markdown'
        response = self.session.post(f"https://greasyfork.org/zh-CN/scripts/{script_id}/sync_update", data=form_data, headers={'Content-Type': 'application/x-www-form-urlencoded'})
        soup = BeautifulSoup(response.text, 'html.parser')
        script_name = soup.select_one('#script-info > header > h2')
        specific_element = soup.select_one('body > div.width-constraint > p')
        return f"[{script_name.get_text()}]:{specific_element.get_text()}" if specific_element else None


if __name__ == "__main__":

    # 重新同步脚本
    parser = argparse.ArgumentParser(description="是否为同步模式")
    parser.add_argument("-s", "--sync", action="store_true", help="仅为重新同步所有脚本")
    args = parser.parse_args()
    ONLY_SYNC = args.sync

    json_path = 'docs/ScriptsPath.json'
    if not is_file_changed_in_last_commit(json_path) and not ONLY_SYNC:
        print(f"\033[31m[{json_path}]在最后一次提交未找到修改记录!\033[0m")
        sys.exit()

    user_email = os.getenv('GFU')
    p = os.getenv('GFP')
    s = os.getenv('GREASYFORK_TOTP_SECRET')
    totp = pyotp.TOTP(s)
    GF = GreasyFork()
    GF.login(user_email, p, totp.now())

    data = read_json(json_path)
    scripts = data.get('scripts', [])
    for script in scripts:
        greasyfork_id = script.get('greasyfork_id')
        script_directory = script.get('directory')
        script_path = script_directory + "/" + script.get('js_name')
        script_url = REPO_URL + script_path
        if greasyfork_id in (None, 0) or ONLY_SYNC:
            #  更新引用的脚本信息
            if not ONLY_SYNC:

                # 先更新json内的脚本信息与名称
                script_info = search_in_file(script_path, "zh-CN")
                script['name'] = "\n".join(script_info.name_matches)
                script['description'] = "\n".join(script_info.description_matches)
                subprocess.run(['python', 'utils/script_user_info_generator.py', '-i', script_directory], check=True)

                # 复制多语言文档,用于之后的翻译
                # ! 将字符串列表转换为数组(在json内使用"locales": ["zh-TW", "vi", "en", "ko"]数组
                # ! 数组在最后写入会被格式化成多行,还是使用字符串得了.懒得还原成一行,还是字符串方便呢.
                locales = [locale.strip() for locale in script.get('locales', '').split(',')] if script.get('locales') else []

                # 更新下区域化声明,如果`locales`为空,不进行区域化(仅中国地区使用的脚本)
                if locales:
                    copy_readme(script_directory, locales)
                    subprocess.run(['python', 'utils/userscript_localization_tool.py', script_path], check=True)

                # 导入脚本,用于之后的同步附加信息
                import_script_id = GF.import_scripts(script_url)
                script['greasyfork_id'] = import_script_id

                # 写出更新后的当前脚本信息.
                with open(json_path, 'w', encoding='utf-8', newline='\n') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                    f.write('\n')

            if ONLY_SYNC:
                import_script_id = greasyfork_id

            # 同步附加信息
            additional_md_urls = build_urls(script_directory)
            default_md = f"{script_directory}/README_en.md" if os.path.exists(f"{script_directory}/README_en.md") else f"{script_directory}/README.md"
            default_md = REPO_URL + default_md
            result = GF.sync_update(script_url, import_script_id, default_md, additional_md_urls)

            print(f"----\033[94m脚本ID:({import_script_id})-{script.get('js_name')}]→→→→\033[38;2;255;165;0m{result}\033[0m")
