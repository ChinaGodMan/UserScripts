import subprocess
import requests
import re
from bs4 import BeautifulSoup
from urllib.parse import unquote
from searcher import search_in_file
import json
import shutil
import os
'''
名称:       自动添加脚本并更新附加信息
版本:            2024.11.2.21:26:26
介绍:     当docs/ScriptsPath.json有新的脚本目录被加入,但没有有对应的脚本ID时.自动创建脚本并且同步附加信息
                        或者当仓库名称被改变时,更新所有的脚本信息,防止因为仓库名称改变导致脚本webhook失效
作者:            人民的勤务员 <china.qinwuyuan@gmail.com>
主页:     https://github.com/ChinaGodMan/UserScripts
'''
人民勤务员的仓库链接 = "https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/"


# 构建同步文档地址
def build_urls(directory):
    urls = []
    for filename in os.listdir(directory):
        if filename.endswith('.md') and filename != 'README_en.md':
            '''
        可以将readme_en.md也包括在urls当中
        gf会自动将en的语言设置成默认的语言
        但是会导致脚本管理页面的元素发生变化
        导致油猴脚本 [506717-GreaysFork增强WebHook同步设置]无法获取到元素.
        不想改那个脚本,就兼容下得了.
            '''
            if filename == 'README.md':  # 仓库的默认介绍语言一律是中文,需要手动设置
                urls.append(人民勤务员的仓库链接 + directory + "/" + filename + "##zh-CN")
            else:
                urls.append(人民勤务员的仓库链接 + directory + "/" + filename)
    return urls


# 读取json文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)


# 和谐url，去除特殊字符
def extract_locale_key(url):
    if '##' in url:
        match = re.search(r'##[^\(]*\(([^)]*)\)$', url) or re.search(r'##([^#]*)$', url)
    else:
        match = re.search(r'README_(.*?)\.md', url)
    return match.group(1) if match else None


# 复制多语言文档罢了
def copy_readme(source_path, suffixes):
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

    def login(self, email, password):
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
            'commit': '登录'
        }

        response = self.session.post(login_url, headers=headers, data=data)
        if response.ok:
            soup = BeautifulSoup(response.text, 'html.parser')
            tip = soup.select_one("body > div.width-constraint > p")
            print(tip.get_text())
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

        # 导入脚步
    def import_scripts(self, sync_urls):
        """
        导入脚步并提取脚本ID
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
            # 提取返回的脚步列表
            results = []  # 用于存储解析后的数组
            ul_element = soup.select_one("body > div.width-constraint > section > ul")
            if ul_element:
                li_elements = ul_element.find_all("li")  # 获取所有<li>元素
                for li in li_elements:
                    a_tag = li.find("a")  # 查找每个<li>中的<a>标签
                    if a_tag and 'href' in a_tag.attrs:
                        link = a_tag['href']
                        match = re.search(r'/scripts/(\d+)-(.+)', link)
                        script_id = match.group(1)  # ID
                        description = unquote(match.group(2))  # 名称
                        results.append([script_id, description])
                        return script_id
            else:
                return "脚本返回的元素未找到,需要手动检查脚本是否被导入了."
        else:
            raise Exception(
                f"导入被拒绝,状态码: {response.status_code}\n{response.text}")

    def sync_update(self, script_url, defaultfile, script_id, urls):
        """
        更新附加同步信息
        """
        # 历史代码.保留以备用
        if self.csrf_token is None:
            self.fetch_csrf_token()
        area = {'aa': '1', 'ab': '2', 'ae': '3', 'af': '4', 'ak': '5', 'am': '6', 'as': '8', 'ast': '9', 'av': '10', 'ay': '11', 'az': '12', 'ba': '13', 'be': '14', 'bh': '16', 'bi': '17', 'bm': '18', 'bn': '19', 'bo': '20', 'br': '21', 'bs': '22', 'ca': '23', 'ce': '24', 'ceb': '25', 'ch': '26', 'chr': '27', 'co': '28', 'cr': '29', 'cs': '30', 'cu': '31', 'cv': '32', 'cy': '33', 'da': '34', 'de': '35', 'dv': '36', 'dz': '37', 'ee': '38', 'el': '39', 'en': '40', 'eo': '41', 'es': '42', 'et': '43', 'eu': '44', 'fa': '45', 'ff': '46', 'fi': '47', 'fil': '48', 'fj': '49', 'fo': '50', 'fr': '51', 'fy': '52', 'ga': '53', 'gd': '54', 'gl': '55', 'gn': '56', 'gsw-berne': '57', 'gu': '58', 'gv': '59', 'ha': '60', 'he': '61', 'hi': '62', 'hmn': '63', 'ho': '64', 'hr': '65', 'ht': '66', 'hu': '67', 'hy': '68', 'hz': '69', 'ia': '70', 'id': '71', 'ie': '72', 'ig': '73', 'ik': '74', 'is': '75', 'it': '76', 'iu': '77', 'ja': '78', 'jv': '79', 'ka': '80', 'kg': '81', 'ki': '82', 'kj': '83', 'kk': '84', 'kl': '85', 'km': '86', 'kn': '87', 'ko': '88', 'kr': '89', 'ks': '90', 'ku': '91', 'kv': '92', 'kw': '93', 'ky': '94', 'la': '95', 'lb': '96', 'lg': '97', 'lif': '98', 'ln': '99', 'lo': '100', 'lt': '101', 'lu': '102', 'lv': '103', 'mg': '104', 'mh': '105', 'mi': '106', 'mk': '107', 'ml': '108', 'mn': '109', 'mo': '110', 'mr': '111', 'ms': '112', 'mt': '113', 'my': '114', 'na': '115', 'nb': '119', 'nd': '120', 'ne': '121', 'ng': '122', 'nl': '118', 'nn': '124', 'no': '125', 'nr': '126', 'nv': '127', 'ny': '128', 'oc': '129', 'pa': '131', 'pi': '132', 'ps': '133', 'pt': '134', 'qu': '135', 'rm': '136', 'rn': '137', 'ro': '138', 'ru': '139', 'rw': '140', 'sa': '141', 'sc': '142', 'sd': '143', 'sg': '144', 'sh': '145', 'si': '146', 'sk': '149', 'sl': '150', 'sm': '151', 'sn': '152', 'so': '153', 'sq': '154', 'sr': '155', 'ss': '156', 'st': '157', 'su': '158', 'sv': '159', 'sw': '160', 'ta': '161', 'te': '162', 'tg': '163', 'th': '165', 'ti': '166', 'tk': '167', 'tl': '168', 'tn': '169', 'to': '170', 'tr': '171', 'ts': '172', 'tt': '173', 'tw': '174', 'ty': '175', 'ug': '176', 'uk': '177', 'ur': '178', 'uz': '179', 've': '180', 'vi': '181', 'vo': '182', 'wa': '183', 'wo': '184', 'xh': '185', 'yi': '186', 'zh-CN': '187', 'zh-TW': '188', 'zu': '189'}
        # 设置表单数据
        form_data = {
            '_method': 'patch',
            'authenticity_token': self.csrf_token,
            'script[sync_identifier]': script_url,
            'script[sync_type]': 'webhook'
        }
        # 默认的语言文件
        if defaultfile:
            form_data['additional_info_sync[0][attribute_default]'] = 'true'
            form_data['additional_info_sync[0][sync_identifier]'] = defaultfile
            form_data['additional_info_sync[0][value_markup]'] = 'markdown'
        # 遍历每个 语言URL,用于构建区域化文件
        for index, url in enumerate(urls):
            locale_key = extract_locale_key(url)
            locale = area.get(locale_key, '')
            clean_url = re.sub(r'##.*', '', url)
            form_data[f'additional_info_sync[{index + 1}][attribute_default]'] = 'false'
            form_data[f'additional_info_sync[{index + 1}][locale]'] = locale
            form_data[f'additional_info_sync[{index + 1}][sync_identifier]'] = clean_url
            form_data[f'additional_info_sync[{index + 1}][value_markup]'] = 'markdown'
        form_data['update-and-sync'] = '更新设置并立即同步'
        response = self.session.post(f"https://greasyfork.org/zh-CN/scripts/{script_id}/sync_update", data=form_data, headers={'Content-Type': 'application/x-www-form-urlencoded'})
        soup = BeautifulSoup(response.text, 'html.parser')
        script_name = soup.select_one('#script-info > header > h2')
        specific_element = soup.select_one('body > div.width-constraint > p')
        return "\033[94m" + script_name.get_text() + "\033[0m→→→→" + specific_element.get_text() if specific_element else None


if __name__ == "__main__":
    user_email = os.getenv('GFU')
    p = os.getenv('GFP')
    GF = GreasyFork()
    GF.login(user_email, p)
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    for script in scripts:
        if script.get('greasyfork_id') == "":
            # 先更新json内的脚本信息与名称
            full_path = script.get('directory') + "/" + script.get('js_name')
            #  更新引用信息
            subprocess.run(['python', 'utils/script_user_info_generator.py', '-i', script.get('directory')], check=True)
            # 更新下区域化声明罢了
            subprocess.run(['python', 'utils/userscript_localization_tool.py', full_path], check=True)
            results = search_in_file(full_path, "zh-CN")
            name = "\n".join(results.name_matches)
            description = "\n".join(results.description_matches)
            script['name'] = name
            script['description'] = description
            # 复制多语言文档,用于之后的翻译
            copy_readme(script.get('directory'), ['zh-TW', 'vi', 'en', 'ko'])
            # 导入脚本,用于之后的同步附加信息
            sync_urls = 人民勤务员的仓库链接 + full_path
            import_script_id = GF.import_scripts(sync_urls)
            script['greasyfork_id'] = import_script_id
            # 同步附加信息
            urls = build_urls(script.get('directory'))
            defaultfile = 人民勤务员的仓库链接 + script.get('directory') + "/README_en.md"
            result = GF.sync_update(sync_urls, defaultfile, import_script_id, urls)
            # 更新json
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print(f"----\033[94m脚本ID:({import_script_id})-[{script.get('js_name')}]→→→→\033[0m\033[92m 勤务员提醒:新添加的脚本已被添加到GreasyFork网站!\033[0m")
