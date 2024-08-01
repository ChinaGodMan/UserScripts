| 文件名                | 说明                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| translate_readme_A.py | 该脚本用于读取 translate_readme.json里面的翻译文件 并执行翻译操作，生成翻译后的 README 文件。          |
| translate_readme.py   | 该脚本包含主要的翻译逻辑，从 translate_readme.json 读取翻译文件和翻译列表并调用翻译 API。              |
| translate_readme.json | 存储需要翻译的 README 文件的列表及翻译国家代码,json内的翻译国家代码只会被translate_readme.py读取使用。 |
| translate_table.json  | 存储翻译表信息，包括各语言的国家代码及是否已翻译的标志。  被translate_readme_A.py调用                  |
