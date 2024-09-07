<center><div align="center"><a href="https://github.com/ChinaGodMan" target="_blank">
    <img height="96px" width="96px" src="https://avatars.githubusercontent.com/u/96548841?v=4" alt="UserScripts"></a>
<h4><a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><ruby>人民的勤务员/UserScripts<rt>Github:@ChinaGodMan</rt></ruby></a></h4>
  <a href="mailto:toniaiwanowskiskr47@gmail.com"><img src=" https://img.shields.io/badge/CopyRight-QinWuYuan-4285dd?logo=Gmail&style=for-the-badge&label=联系" alt="Gmail" /></a>
<a href="https://greasyfork.org/users/1169082-%E4%BA%BA%E6%B0%91%E7%9A%84%E5%8B%A4%E5%8A%A1%E5%91%98?per_page=200" target="_blank"><img src="https://img.shields.io/static/v1?label=%20&message=GreasyFork&logo=greasyfork&logoColor=white&labelColor=%23670000&color=%23670000&style=for-the-badge" alt="GreasyFork"></a>
<img src="https://img.shields.io/badge/dynamic/json?&label=所有脚本总安装数&query=$.totalInstalls&logo=greasyfork&logoColor=white&labelColor=%23670000&color=blue&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Total Installs">
<img src="https://img.shields.io/badge/dynamic/json?&label=今日所有脚本安装数&query=$.totalDailyInstalls&logo=greasyfork&logoColor=white&labelColor=%23670000&color=blue&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Total Daily Installs">
<img src="https://img.shields.io/badge/dynamic/json?&label=脚本数量&query=$.numScripts&logo=greasyfork&logoColor=white&labelColor=%23670000&color=%23670000&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Scripts Count"><br>
<img src="https://img.shields.io/badge/dynamic/json?&label=所有好评&query=$.totalGoodRatings&logo=greasyfork&logoColor=white&labelColor=%23670000&color=4CAF50&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Good Ratings">
<img src="https://img.shields.io/badge/dynamic/json?&label=所有一般&query=$.totalOkRatings&logo=greasyfork&logoColor=white&labelColor=%23670000&color=FF9800&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Ok Ratings">
<img src="https://img.shields.io/badge/dynamic/json?label=所有差评&query=$.totalBadRatings&logo=greasyfork&logoColor=white&labelColor=%23670000&color=F44336&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Bad Ratings">
<a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><img src="https://img.shields.io/github/stars/ChinaGodMan/UserScripts?label=星标&logo=github&logoColor=white&labelColor=black&color=FF69B4&style=for-the-badge" alt="Stars"></a>
<a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><img src="https://img.shields.io/github/forks/ChinaGodMan/UserScripts?label=复刻&logo=github&logoColor=white&labelColor=black&color=grey&style=for-the-badge" alt="Forks"></a>
<a href="https://github.com/ChinaGodMan/UserScripts/issues" target="_blank"><img src="https://img.shields.io/github/issues/ChinaGodMan/UserScripts?label=问题&logo=github&logoColor=white&labelColor=black&style=for-the-badge" alt="Issue"></a>
<code><br>
⭐<a href="https://github.com/ChinaGodMan/UserScripts" target="_blank">如果脚本对你有帮助,可以给个↑小星以资鼓励</a></code>
</div></center></div></center></div></center><img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center">
    <h1>Google 高级搜索</h1>
    <p>「 这是一个为 Google 添加高级搜索表单的用户脚本。它能在页面顶部添加一个可隐藏的高级搜索表单，使您能够更精确地搜索信息。 」</p>
    <img src="https://views.whatilearened.today/views/github/502652/hmjz100.svg" alt="Views">
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-advanced-search">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/502652">Greasy
            Fork</a></p><details><summary>更新记录</summary><ul>
<li><strong>2024/8/5 23:18 - Ver: 0.1.9.1</strong></li>
<li>
<p><em><mark>增加脚本图标</mark></em></p>
</li>
<li>
<p><strong>2024/8/5 10:26 - Ver: 0.1.9</strong></p>
</li>
<li><em><mark>问题: 移动设备无法显示高级搜索框</mark></em></li>
<li><em><mark>修复方式：下面代码仅在PC端生效</mark> <code>searchContainer.appendChild(toggleButton</code></em></li>
</ul></details> 
    <img src="https://raw.gitmirror.com/ChinaGodMan/UserScriptsHistory/main/stats/502652.png">
</div></center>


# Google Advanced Search Assistant

This is a user script that adds an advanced search form to Google. It adds a collapsible advanced search form at the top of the page, allowing you to search for information with more precision.

## Features

- Adds an "Advanced Search" button at the top of the Google search page. Clicking the button will display the advanced search form.
- The advanced search form includes the following search options:
  - "All of these words": The search results must include all specified keywords.
  - "Exact word or phrase": The search results must include an exact match of the specified word or phrase.
  - "Any of these words": The search results must include any of the specified keywords.
  - "None of these words": The search results must not include the specified keywords.
  - "Number range": The search results must include numbers within the specified range.
  - "Last update": The search results must include results that were last updated within the specified time frame.
  - "Site or domain": The search results must include results from the specified website or domain.
  - "File type": The search results must include results of the specified file type.
- The script can save previous search options, so the form will be automatically filled when opening a new page.
- Provides a "Clear" button to clear the form data.

## Usage

1. Install a user script manager, such as Tampermonkey.
2. Install this Userscipt.
3. When opening a Google search page, you would see a button called "Advanced search" on the top of the page.
4. Click the blue button and the form of advanced search will be shown.
5. Fill in the desired search options in the form.
6. Click the "Search" button to perform the search, or click the "Clear" button to clear the form data.

Note: This script is specifically designed for the Google search page and can only be used on Google search pages.

## Author

The script is modified from the user **[shiquda](https://greasyfork.org/users/935206)**'s script [Google Advanced Search Assistant](https://greasyfork.org/scripts/474178) Thanks to the original author** shiquda**’s **hard work** and **wisdom**


![mb_en.png](https://s2.loli.net/2024/08/05/VcqI6pXs3AaOW1C.png)
![PC_en.png](https://s2.loli.net/2024/08/05/MXF8JdpqnyreuRf.png)





<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->
> ### Google相关脚本
> - [**Google 高级搜索**](https://greasyfork.org/scripts/502652): 这是一个为 Google 添加高级搜索表单的用户脚本。它能在页面顶部添加一个可隐藏的高级搜索表单，使您能够更精确地搜索信息。
> - [**Google 搜索屏蔽指定站点**](https://greasyfork.org/scripts/500262): 在搜索引擎结果中屏蔽特定的站点，帮助用户过滤掉不需要的搜索结果。 自定义输入屏蔽站点。格式-zhihu -baidu 用于屏蔽谷歌搜索内容

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->
## 使用帮助
<p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>更多用户脚本</strong></a> /
<a href="#top">回到顶部↑</a></p>
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->
