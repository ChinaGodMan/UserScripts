from pathlib import Path
from writer import process_file
from content_snippet import get_file_description
from helper import get_md_files
from helper import read_json
import os
import re


national = [{'aa': 'Afar'}, {'ab': 'аҧсуа бызшәа'}, {'ae': 'Avestan'}, {'af': 'Afrikaans'}, {'ak': 'Akan'}, {'am': 'አማርኛ'}, {'ar': 'العربية'}, {'as': 'Assamese'}, {'ast': 'Asturian'}, {'av': 'Avar'}, {'ay': 'Aymara'}, {'az': 'azərbaycan'}, {'ba': 'Bashkir'}, {'be': 'Беларуская'}, {'bg': 'Български'}, {'bh': 'Bihari'}, {'bi': 'Bislama'}, {'bm': 'Bamanankan'}, {'bn': 'Bengali'}, {'bo': 'Tibetan'}, {'br': 'Breton'}, {'bs': 'Bosanski'}, {'ca': 'Català'}, {'ce': 'Chechen'}, {'ceb': 'Cebuano'}, {'ch': 'Chamorro'}, {'chr': 'Cherokee'}, {'co': 'Corsican'}, {'cr': 'Cree'}, {'cs': 'Čeština'}, {'cu': 'Old Slavonic'}, {'cv': 'Chuvash'}, {'cy': 'Cymraeg'}, {'da': 'Dansk'}, {'de': 'Deutsch'}, {'dv': 'Maldivian'}, {'dz': 'Bhutani'}, {'ee': 'Ɛʋɛ'}, {'el': 'Ελληνικά'}, {'en': 'English'}, {'eo': 'Esperanto'}, {'es': 'Español'}, {'et': 'Eesti'}, {'eu': 'Euskera'}, {'fa': 'فارسی'}, {'ff': 'Fulfulde'}, {'fi': 'Suomi'}, {'fil': 'Filipino'}, {'fj': 'Fiji'}, {'fo': 'Faeroese'}, {'fr': 'Français'}, {'fy': 'Frysk'}, {'ga': 'Gaeilge'}, {'gd': 'Scots Gaelic'}, {'gl': 'Galego'}, {'gn': 'Guarani'}, {'gsw-berne': 'Swiss German'}, {'gu': 'Gujarati'}, {'gv': 'Manx'}, {'ha': 'Hausa'}, {'he': 'עברית'}, {'hi': 'हिन्दी'}, {'hmn': 'Hmong'}, {'ho': 'Hiri Motu'}, {'hr': 'Hrvatski'}, {'ht': 'Haitian Creole'}, {'hu': 'Magyar'}, {'hy': 'Հայերեն'}, {'hz': 'Herero'}, {'ia': 'Interlingua'}, {'id': 'Bahasa Indonesia'}, {'ie': 'Interlingue'}, {'ig': 'Igbo'}, {'ik': 'Inupiak'}, {'is': 'Íslenska'}, {'it': 'Italiano'}, {'iu': 'Inuktitut'}, {'ja': '日本語'}, {'jv': 'Javanese'}, {'ka': 'Georgian'}, {'kg': 'Kongo'}, {'ki': 'Kikuyu'}, {'kj': 'Kwanyama'}, {'kk': 'Қазақ'}, {'kl': 'Greenlandic'}, {'km': 'Cambodian'}, {'kn': 'ಕನ್ನಡ'}, {'ko': '한국어'}, {'kr': 'Kanuri'}, {'ks': 'Kashmiri'}, {'ku': 'Kurdî'}, {'kv': 'Komi'}, {'kw': 'Cornish'}, {'ky': 'Кыргызча'}, {'la': 'Latina'}, {'lb': 'Luxembourgish'}, {'lg': 'Luganda'}, {'lif': 'Limbu'}, {'ln': 'Lingala'}, {'lo': 'Laothian'}, {'lt': 'Lietuvių'}, {'lv': 'Latviešu'}, {'mg': 'Malagasy'}, {'mh': 'Marshallese'}, {'mi': 'Māori'}, {'mk': 'Македонски'}, {'ml': 'മലയാളം'}, {'mn': 'Mongolian'}, {'mo': 'Moldavian'}, {'mr': 'Marathi'}, {'ms': 'Bahasa Melayu'}, {'mt': 'Malti'}, {'my': 'Burmese'}, {'na': 'Nauru'}, {'nd': 'North Ndebele'}, {'ne': 'Nepali'}, {'ng': 'Ndonga'}, {'nl': 'Nederlands'}, {'nb': 'Bokmål'}, {'nn': 'Nynorsk'}, {'nr': 'South Ndebele'}, {'nv': 'Navajo'}, {'ny': 'Chichewa'}, {'oc': 'Occitan'}, {'om': 'Oromo'}, {'or': 'Oriya'}, {'os': 'Ossetian'}, {'pa': 'Punjabi'}, {'pi': 'Pali'}, {'pl': 'Polski'}, {'ps': 'پښتو'}, {'pt': 'Portuguese, International'}, {'pt-PT': 'Português'}, {'pt-BR': 'Português do Brasil'}, {'qu': 'Quechua'}, {'rm': 'Rhaeto-Romance'}, {'rn': 'Kirundi'}, {'ro': 'Română'}, {'ru': 'Русский'}, {'rw': 'Kinyarwanda'}, {'sa': 'Sanskrit'}, {'sc': 'Sardinian'}, {'sco': 'Scots'}, {'sd': 'Sindhi'}, {'se': 'Northern Sami'}, {'sg': 'Sango'}, {'sh': 'Serbo-Croatian'}, {'si': 'සිංහල'}, {'sk': 'Slovenčina'}, {'sl': 'Slovenščina'}, {'sm': 'Samoan'}, {'sn': 'Shona'}, {'so': 'Somali'}, {'sq': 'Shqip'}, {'sr': 'Српски'}, {'ss': 'Siswati'}, {'st': 'Sesotho'}, {'su': 'Sudanese'}, {'sv': 'Svenska'}, {'sw': 'Kiswahili'}, {'syr': 'Syriac'}, {'ta': 'தமிழ்'}, {'te': 'తెలుగు'}, {'tg': 'Tajik'}, {'th': 'ภาษาไทย'}, {'ti': 'Tigrinya'}, {'tk': 'Turkmen'}, {'tl': 'Tagalog'}, {'tn': 'Setswana'}, {'to': 'Tonga'}, {'tr': 'Türkçe'}, {'ts': 'Tsonga'}, {'tt': 'Tatarça'}, {'tw': 'Twi'}, {'ty': 'Tahitian'}, {'ug': 'ئۇيغۇرچە'}, {'uk': 'Українська'}, {'ur': 'اردو'}, {'uz': "o'zbek"}, {'ve': 'Venda'}, {'vi': 'Tiếng Việt'}, {'wo': 'Wolof'}, {'xh': 'isiXhosa'}, {'yi': 'Yiddish'}, {'yo': 'Yorùbá'}, {'za': 'Zhuang'}, {'zh-CN': '简体中文'}, {'zh-TW': '繁體中文'}, {'zh-HK': '繁體中文'}, {'zu': 'isiZulu'}, {'fr-CA': 'Français canadien'}, {'t': 'کوردیی ناوەندی'}]


def find_locale(key_to_find):
    for item in national:
        if key_to_find in item:
            return item[key_to_find]
    return None


def build_html(md_files, path, lang='zh-CN'):
    template_path = "utils/templates/SELECTOR.html"
    with open(template_path, 'r', encoding='utf-8') as file:
        html_template = file.read()
    base_url = "https://github.com/ChinaGodMan/UserScripts/blob/main/"
    links = []
    for file in md_files:
        match = re.match(r'README_([a-zA-Z\-]+)\.md', file)
        lang_code = match.group(1) if match else lang
        title = find_locale(lang_code)
        links.append(f'<a href="{base_url}{path}/{file}">{title}</a>')
    # 格式化的换行符
    links_html = "|\n        ".join(links)
    html = html_template.replace('{{links}}', links_html)
    return html


def main():
    json_path = 'docs/ScriptsPath.json'
    data = read_json(json_path)
    scripts = data.get('scripts', [])
    # 定义开始和结束标签
    start_tag = "<!--NAVIGATION-->"
    end_tag = "<!--NAVIGATION-END-->"
    for script in scripts:
        script_directory = script.get('directory', '')
        cnfile_path = os.path.join(script_directory, "README.md")
        # Linux和Windows统一排序方式,防止ci在github运行时排序不一致
        c = Path(script_directory)
        md_files = sorted([file.name for file in c.glob('*.md')])
        descriptions = build_html(md_files, script_directory)
        olddescriptions = get_file_description(cnfile_path, start_tag, end_tag)
        olddescriptions = olddescriptions if olddescriptions is not None else "1"
        # 从md文件中获取所有文件名
        md_old = re.findall(r'README[^"]*\.md', olddescriptions)
        md_new = get_md_files(script_directory)
        all_in_old = all(md in set(md_old) for md in md_new)
        if all_in_old:
            continue
        if olddescriptions + "\n" == descriptions:  # 换行符添加上,就这样了能用就行
            continue
        else:
            print(f"----\033[94m[{script.get('name', '')}]\033[0m\033[92m 内容变化,执行替换\033[0m")
        for md_file in md_new:
            file_path = os.path.join(script_directory, md_file)
            process_file(file_path, descriptions, start_tag, end_tag, "head")


if __name__ == "__main__":
    main()
