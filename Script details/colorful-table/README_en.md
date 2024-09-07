<center><div align="center"><a href="https://github.com/ChinaGodMan" target="_blank">
    <img height="96px" width="96px" src="https://avatars.githubusercontent.com/u/96548841?v=4" alt="UserScripts"></a>
<h4><a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><ruby>人民的勤务员/UserScripts<rt>Github:@ChinaGodMan</rt></ruby></a></h4>
<a href="https://greasyfork.org/users/1169082-%E4%BA%BA%E6%B0%91%E7%9A%84%E5%8B%A4%E5%8A%A1%E5%91%98?per_page=200" target="_blank"><img src="https://img.shields.io/static/v1?label=%20&message=GreasyFork&logo=greasyfork&logoColor=white&labelColor=%23670000&color=%23670000&style=for-the-badge" alt="GreasyFork"></a>
<img src="https://img.shields.io/badge/dynamic/json?&label=Total number of installs of all scripts&query=$.totalInstalls&logo=greasyfork&logoColor=white&labelColor=%23670000&color=blue&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Total Installs">
<img src="https://img.shields.io/badge/dynamic/json?&label=Number of all script installations today&query=$.totalDailyInstalls&logo=greasyfork&logoColor=white&labelColor=%23670000&color=blue&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Total Daily Installs">
<img src="https://img.shields.io/badge/dynamic/json?&label=Number of scripts&query=$.numScripts&logo=greasyfork&logoColor=white&labelColor=%23670000&color=%23670000&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Scripts Count"><br>
<img src="https://img.shields.io/badge/dynamic/json?&label=All positive reviews&query=$.totalGoodRatings&logo=greasyfork&logoColor=white&labelColor=%23670000&color=4CAF50&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Good Ratings">
<img src="https://img.shields.io/badge/dynamic/json?&label=All general&query=$.totalOkRatings&logo=greasyfork&logoColor=white&labelColor=%23670000&color=FF9800&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Ok Ratings">
<img src="https://img.shields.io/badge/dynamic/json?label=All negative reviews&query=$.totalBadRatings&logo=greasyfork&logoColor=white&labelColor=%23670000&color=F44336&style=for-the-badge&url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/total_installs.json" alt="Bad Ratings">
<a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><img src="https://img.shields.io/github/stars/ChinaGodMan/UserScripts?label=star&logo=github&logoColor=white&labelColor=black&color=FF69B4&style=for-the-badge" alt="Stars"></a>
<a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><img src="https://img.shields.io/github/forks/ChinaGodMan/UserScripts?label=replica&logo=github&logoColor=white&labelColor=black&color=grey&style=for-the-badge" alt="Forks"></a>
<a href="https://github.com/ChinaGodMan/UserScripts/issues" target="_blank"><img src="https://img.shields.io/github/issues/ChinaGodMan/UserScripts?label=question&logo=github&logoColor=white&labelColor=black&style=for-the-badge" alt="Issue"></a>
<code><br>
⭐<a href="https://github.com/ChinaGodMan/UserScripts" target="_blank">If the script helps you,I can give one↑Little star to encourage</a></code>
</div></center></div></center></div></center></div></center></div></center></div></center></div></center></div></center><img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center">
    <h1>Beautify web forms with gorgeous gradients</h1>
    <p>「 Automatically apply color gradient beautification to all columns of tables on web pages. 」</p>
    <img src="https://views.whatilearened.today/views/github/507036/hmjz100.svg" alt="Views">
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/colorful-table">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/507036">Greasy
            Fork</a></p><details><summary>Update record</summary><ul>
<li><strong>2024/9/6 05:41 - Ver: 1.0.0.0</strong> <em>Change to automatic gradient color..</em></li>
</ul></details> 
    <img src="https://raw.gitmirror.com/ChinaGodMan/UserScriptsHistory/main/stats/507036.png">
</div></center>

# Gorgeous Gradient Table Beautification Script

This script automatically applies gradient colors to all tables on a webpage, based on the numerical values in each column. It enhances the visual appeal of the table without any manual clicks or operations by the user.

#### Features
1. **Automatic Gradient Application**: The script scans tables on the page and automatically applies gradient colors to each column based on the data, without requiring user intervention.
2. **Data-Driven Gradients**: Colors are generated based on the minimum and maximum values in each column, with greater color variation for larger or smaller values.
3. **Continuous Monitoring**: The script checks the page every second to automatically apply gradients to any new tables that are loaded.
4. **Gradient Color Configuration**: Colors are based on the HSL color model, with adjustable parameters for hue range (`HUE_RANGE`), saturation (`SATURATION`), and lightness (`LIGHTNESS`).

#### Key Parameters
- **HUE_RANGE**: Sets the hue range for the gradient color, with a default value of 120 degrees, representing a gradient from green to red.
- **SATURATION**: Controls the color saturation, with a default of 80% for a vibrant color effect.
- **LIGHTNESS**: Controls the color lightness, with a default of 88% to ensure a soft and non-straining color gradient.

#### Core Logic
1. **extractFirstFloat**: Extracts the first floating-point number from the cell's text, ignoring non-numeric content to ensure only numerical values are used for gradient calculation.
2. **applyGradient**: Automatically calculates the minimum and maximum values for each column and generates corresponding gradient background colors.
3. **initializeTables**: Periodically checks for tables on the page and applies gradient colors to any new or uninitialized tables.

#### Use Cases
This script is suitable for any webpage containing tables, automatically applying gradient colors to enhance data visualization and make it easier to distinguish data differences.

## Project & Feedback
- **Original Script:** [yearly](https://greasyfork.org/zh-CN/users/1312063)'s [Colorful Table | Table Data Visualization](https://greasyfork.org/zh-CN/scripts/502933)
- **Project Page:** [GitHub Repository](https://github.com/ChinaGodMan/UserScripts)
- **Support & Issue Reporting:** [Report an Issue](https://github.com/ChinaGodMan/UserScripts/issues)

![colorful-table-2.png](https://s2.loli.net/2024/09/06/CjBMp6ERigxsYAV.png)
![colorful-table.png](https://s2.loli.net/2024/09/06/IA7pxwj1ZC4c56a.png)







<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->
> ### Web related scripts
> - [**Remove link underline**](https://greasyfork.org/scripts/498625): Remove underline from web links
> - [**LiftCSDNLoginCopy限制**](https://greasyfork.org/scripts/505207): fuck you CSDN 登录复制，Copy code box content without logging in
> - [**Web page writing clip version authorization manager**](https://greasyfork.org/scripts/497403): Ban web pages from pooping on edited versions，green for release，red ban，orange temporary directions
> - [**Small window preview**](https://greasyfork.org/scripts/504880): Open link in popup window when dragging link，and provide a preview before opening，use Edge pre-reading technology。At the same time, add an acrylic effect behind the small window when it is opened.。
> - [**Beautify web forms with gorgeous gradients**](https://greasyfork.org/scripts/507036): Automatically apply color gradient beautification to all columns of tables on web pages.

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->
## Help
<p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>More user scripts</strong></a> /
<a href="#top">back to top↑</a></p>
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->
