from pathlib import Path
from writer import process_file
from content_snippet import get_file_description
import json
import os
import sys
import re
sys.dont_write_bytecode = True


# 读取JSON文件
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)


# 根据relatedscripts的id找到对应的脚本
def find_script_by_greasyfork_id(scripts, greasyfork_id):
    for script in scripts:
        if str(script.get('GreasyFork')) == str(greasyfork_id):
            return script
    return None


national = [{'aa': 'Afar'}, {'ab': 'аҧсуа бызшәа'}, {'ae': 'Avestan'}, {'af': 'Afrikaans'}, {'ak': 'Akan'}, {'am': 'አማርኛ'}, {'ar': 'العربية'}, {'as': 'Assamese'}, {'ast': 'Asturian'}, {'av': 'Avar'}, {'ay': 'Aymara'}, {'az': 'azərbaycan'}, {'ba': 'Bashkir'}, {'be': 'Беларуская'}, {'bg': 'Български'}, {'bh': 'Bihari'}, {'bi': 'Bislama'}, {'bm': 'Bamanankan'}, {'bn': 'Bengali'}, {'bo': 'Tibetan'}, {'br': 'Breton'}, {'bs': 'Bosanski'}, {'ca': 'Català'}, {'ce': 'Chechen'}, {'ceb': 'Cebuano'}, {'ch': 'Chamorro'}, {'chr': 'Cherokee'}, {'co': 'Corsican'}, {'cr': 'Cree'}, {'cs': 'Čeština'}, {'cu': 'Old Slavonic'}, {'cv': 'Chuvash'}, {'cy': 'Cymraeg'}, {'da': 'Dansk'}, {'de': 'Deutsch'}, {'dv': 'Maldivian'}, {'dz': 'Bhutani'}, {'ee': 'Ɛʋɛ'}, {'el': 'Ελληνικά'}, {'en': 'English'}, {'eo': 'Esperanto'}, {'es': 'Español'}, {'et': 'Eesti'}, {'eu': 'Euskera'}, {'fa': 'فارسی'}, {'ff': 'Fulfulde'}, {'fi': 'Suomi'}, {'fil': 'Filipino'}, {'fj': 'Fiji'}, {'fo': 'Faeroese'}, {'fr': 'Français'}, {'fy': 'Frysk'}, {'ga': 'Gaeilge'}, {'gd': 'Scots Gaelic'}, {'gl': 'Galego'}, {'gn': 'Guarani'}, {'gsw-berne': 'Swiss German'}, {'gu': 'Gujarati'}, {'gv': 'Manx'}, {'ha': 'Hausa'}, {'he': 'עברית'}, {'hi': 'हिन्दी'}, {'hmn': 'Hmong'}, {'ho': 'Hiri Motu'}, {'hr': 'Hrvatski'}, {'ht': 'Haitian Creole'}, {'hu': 'Magyar'}, {'hy': 'Հայերեն'}, {'hz': 'Herero'}, {'ia': 'Interlingua'}, {'id': 'Bahasa Indonesia'}, {'ie': 'Interlingue'}, {'ig': 'Igbo'}, {'ik': 'Inupiak'}, {'is': 'Íslenska'}, {'it': 'Italiano'}, {'iu': 'Inuktitut'}, {'ja': '日本語'}, {'jv': 'Javanese'}, {'ka': 'Georgian'}, {'kg': 'Kongo'}, {'ki': 'Kikuyu'}, {'kj': 'Kwanyama'}, {'kk': 'Қазақ'}, {'kl': 'Greenlandic'}, {'km': 'Cambodian'}, {'kn': 'ಕನ್ನಡ'}, {'ko': '한국어'}, {'kr': 'Kanuri'}, {'ks': 'Kashmiri'}, {'ku': 'Kurdî'}, {'kv': 'Komi'}, {'kw': 'Cornish'}, {'ky': 'Кыргызча'}, {'la': 'Latina'}, {'lb': 'Luxembourgish'}, {'lg': 'Luganda'}, {'lif': 'Limbu'}, {'ln': 'Lingala'}, {'lo': 'Laothian'}, {'lt': 'Lietuvių'}, {'lv': 'Latviešu'}, {'mg': 'Malagasy'}, {'mh': 'Marshallese'}, {'mi': 'Māori'}, {'mk': 'Македонски'}, {'ml': 'മലയാളം'}, {'mn': 'Mongolian'}, {'mo': 'Moldavian'}, {'mr': 'Marathi'}, {'ms': 'Bahasa Melayu'}, {'mt': 'Malti'}, {'my': 'Burmese'}, {'na': 'Nauru'}, {'nd': 'North Ndebele'}, {'ne': 'Nepali'}, {'ng': 'Ndonga'}, {'nl': 'Nederlands'}, {'nb': 'Bokmål'}, {'nn': 'Nynorsk'}, {'nr': 'South Ndebele'}, {'nv': 'Navajo'}, {'ny': 'Chichewa'}, {'oc': 'Occitan'}, {'om': 'Oromo'}, {'or': 'Oriya'}, {'os': 'Ossetian'}, {'pa': 'Punjabi'}, {'pi': 'Pali'}, {'pl': 'Polski'}, {'ps': 'پښتو'}, {'pt': 'Portuguese, International'}, {'pt-PT': 'Português'}, {'pt-BR': 'Português do Brasil'}, {'qu': 'Quechua'}, {'rm': 'Rhaeto-Romance'}, {'rn': 'Kirundi'}, {'ro': 'Română'}, {'ru': 'Русский'}, {'rw': 'Kinyarwanda'}, {'sa': 'Sanskrit'}, {'sc': 'Sardinian'}, {'sco': 'Scots'}, {'sd': 'Sindhi'}, {'se': 'Northern Sami'}, {'sg': 'Sango'}, {'sh': 'Serbo-Croatian'}, {'si': 'සිංහල'}, {'sk': 'Slovenčina'}, {'sl': 'Slovenščina'}, {'sm': 'Samoan'}, {'sn': 'Shona'}, {'so': 'Somali'}, {'sq': 'Shqip'}, {'sr': 'Српски'}, {'ss': 'Siswati'}, {'st': 'Sesotho'}, {'su': 'Sudanese'}, {'sv': 'Svenska'}, {'sw': 'Kiswahili'}, {'syr': 'Syriac'}, {'ta': 'தமிழ்'}, {'te': 'తెలుగు'}, {'tg': 'Tajik'}, {'th': 'ภาษาไทย'}, {'ti': 'Tigrinya'}, {'tk': 'Turkmen'}, {'tl': 'Tagalog'}, {'tn': 'Setswana'}, {'to': 'Tonga'}, {'tr': 'Türkçe'}, {'ts': 'Tsonga'}, {'tt': 'Tatarça'}, {'tw': 'Twi'}, {'ty': 'Tahitian'}, {'ug': 'ئۇيغۇرچە'}, {'uk': 'Українська'}, {'ur': 'اردو'}, {'uz': "o'zbek"}, {'ve': 'Venda'}, {'vi': 'Tiếng Việt'}, {'wo': 'Wolof'}, {'xh': 'isiXhosa'}, {'yi': 'Yiddish'}, {'yo': 'Yorùbá'}, {'za': 'Zhuang'}, {'zh-CN': '简体中文'}, {'zh-TW': '繁體中文'}, {'zh-HK': '繁體中文'}, {'zu': 'isiZulu'}, {'fr-CA': 'Français canadien'}, {'t': 'کوردیی ناوەندی'}]


def find_locale(key_to_find):
    for item in national:
        if key_to_find in item:
            return item[key_to_find]
    return None


def build_html(md_files, path):
    html = """
<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)"
                srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-white-icon32.svg">
            <img height=14
                src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-icon32.svg">
        </picture>
"""
    base_url = "https://github.com/ChinaGodMan/UserScripts/blob/main/"
    for file in md_files:
        match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
        if match:
            lang_code = match.group(1)
        else:
            lang_code = "zh-CN"
        title = find_locale(lang_code)
        html += f'        <a href="{base_url}{path}/{file}">{title}</a> | \n'
    html = html.rstrip(' | \n')
    html += """
    <br>
    <em><sub>👆️访问GitHub 上的自述文件以获得更好的体验。</sub></em>
    </h6>
</div>
"""
    return html


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    for script in scripts:
        backuppath = script.get('backuppath', '')
        # 定义开始和结束标签
        start_tag = "<!--AUTO_NAVIGATION_PLEASE_DONT_DELETE_IT-->"
        end_tag = "<!--AUTO_NAVIGATION_PLEASE_DONT_DELETE_IT-END-->"
        cnfile_path = os.path.join(backuppath, "README.md")
        c = Path(backuppath)
        md_files = sorted([file.name for file in c.glob('*.md')])
        descriptions = build_html(md_files, backuppath)
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        olddescriptions = olddescriptions if olddescriptions is not None else "1"
        if "\n" + olddescriptions + "\n" == descriptions:  # 换行符添加上,就这样了能用就行
            continue
        else:
            print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 内容变化,执行替换\033[0m")
        if backuppath and os.path.isdir(backuppath):
            for file in os.listdir(backuppath):
                if file.endswith('.md'):
                    file_path = os.path.join(backuppath, file)
                    process_file(file_path, descriptions, start_tag, end_tag, "head")


if __name__ == "__main__":
    main()
