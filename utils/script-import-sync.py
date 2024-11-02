import requests
import re
from bs4 import BeautifulSoup
from urllib.parse import unquote
'''
Script:       自动添加脚步并更新附加信息
Version:            2024.11.1.1
Description:     当docs/ScriptsPath.json有新的脚本目录被加入,但没有有对应的脚本ID时.自动创建脚本并且同步附加信息
                        或者当仓库名称被改变时,更新所有的脚本信息,防止因为仓库名称改变导致脚本webhook失效
Author:            人民的勤务员
Homepage:     https://github.com/ChinaGodMan/UserScripts
'''
# 暂时没完成,仅做了核心导入更新代码,未增加判断docs/ScriptsPath.json内容


# 和谐url，去除特殊字符
def extract_locale_key(url):
    if '##' in url:
        match = re.search(r'##[^\(]*\(([^)]*)\)$', url) or re.search(r'##([^#]*)$', url)
    else:
        match = re.search(r'README_(.*?)\.md', url)

    return match.group(1) if match else None


# 操作类
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
        导入脚步并提取脚步ID
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

        # 解析返回的脚步ID信息
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
                        return results
            else:
                return "脚步返回的元素未找到,需要手动检查脚本是否被导入了."
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
    user_email = ''
    p = ''
    GF = GreasyFork()
    # 登录
    GF.login(user_email, p)
    # 进行导入操作 ,此处仅为测试使用,批量更新需后续增加代码.666
    sync_urls = 'https://github.com/ChinaGodMan/UserScripts/raw/main/translate-only-chinese/translate-only-chinese.user.js'
    result = GF.import_scripts(sync_urls)
    print(result)
    # 同步脚本,,此处仅为测试使用,批量更新需后续增加获取仓库名称和直接判断目录下的js文件和md文件,拼接字符串后批量更新
    script_url = "https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker/csdn-blocker.user.js"
    defaultfile = "https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker/README.md"
    script_id = "505207"
    urls = [
        "https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker/README.md##zh-TW",
        "https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker/README.md##ja",
    ]
    result = GF.sync_update(script_url, defaultfile, script_id, urls)
    print(result)
