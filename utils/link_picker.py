import re
file_path = "README_en.md"
output_file = "urls.txt"
with open(file_path, "r", encoding="utf-8") as file:
    content = file.read()
urls = re.findall(r'https?://[^\s)>"\']+', content)
unique_urls = list(dict.fromkeys(urls))
with open(output_file, "w", encoding="utf-8") as file:
    file.write("\n".join(unique_urls))
