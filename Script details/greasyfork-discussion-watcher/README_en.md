<center><div align="center"><a href="https://github.com/ChinaGodMan" target="_blank">
    <img height="96px" width="96px" src="https://avatars.githubusercontent.com/u/96548841?v=4" alt="UserScripts"></a>
<h4><a href="https://github.com/ChinaGodMan/UserScripts" target="_blank"><ruby>人民的勤务员/UserScripts<rt>Github:@ChinaGodMan</rt></ruby></a></h4>
  <a href="mailto:toniaiwanowskiskr47@gmail.com"><img src=" https://img.shields.io/badge/CopyRight-QinWuYuan-4285dd?logo=Gmail&style=for-the-badge&label=connect" alt="Gmail" /></a>
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
</div></center></div></center></div></center><img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center">
    <h1>Greasyfork Notification assistant</h1>
    <p>「 When there’s a new reply to your script or to a discussion you’re participating in，The script will display the latest discussion content in a modal window on the web page。 」</p>
    <img src="https://views.whatilearened.today/views/github/506345/hmjz100.svg" alt="Views">
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-discussion-watcher">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/506345">Greasy
            Fork</a></p><details><summary>Update record</summary><ul>
<li><strong>2024/9/7 09:06 - Ver: 1.3.0.0</strong> <em>Use the site’s discussion list instead,Add categories to information</em></li>
<li><strong>2024/9/4 04:39 - Ver: 1.2.0.0</strong> <em>Added grease monkey menu to set the maximum number of messages,Added skip last speaker is<code>Own</code></em></li>
<li><strong>2024/9/3 09:10 - Ver: 1.1.0.0</strong> <em>Added oil monkey menu to set refresh time</em></li>
<li><strong>2024/9/2 12:24 - Ver: 1.0.0.0</strong> <em>initial version,Welcome</em></li>
</ul></details> 
    <img src="https://raw.gitmirror.com/ChinaGodMan/UserScriptsHistory/main/stats/506345.png">
</div></center>

# GreasyFork Discussion Watcher

A Tampermonkey script designed to enhance the discussion list functionality on GreasyFork. When there are new replies to your scripts or discussions you are involved in, the script will display the latest discussion content in a modal window on the webpage.

## Features

- **Customizable Style:** Provides a clean, user-friendly modal window to display the latest discussion content, with customizable styles.
- **Automatic Updates:** The script periodically checks for discussion updates and notifies you when there are new replies.
- **Information Extraction:** Extracts discussion titles, timestamps, and usernames from the webpage and organizes them into the modal window.

## Custom Check Interval

The script uses the `delay` configuration option to set the interval for checking updates. The time format can be one of the following combinations:

- `1h1m`: 1 hour and 1 minute
- `30m`: 30 minutes
- `1h`: 1 hour
- `1m`: 1 minute
- `1s`: 1 second
- `2m1s`: 2 minutes and 1 second

You can modify the value of the `delay` configuration option as needed to adjust how often the script checks for discussion updates. For example, if you want to check every 15 minutes, you can set `delay` to `15m`.

## Project and Feedback

- **Project Page:** [GitHub Repository](https://github.com/ChinaGodMan/UserScripts)
- **Support and Issues:** [Report Issues](https://github.com/ChinaGodMan/UserScripts/issues)

![Snipaste_2024-09-02_12-30-03.png](https://s2.loli.net/2024/09/02/Ftpq1KomRcALjIE.png)



<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->
> ### GreasyForkRelated scripts
> - [**GreasyForksuitable for enhancement**](https://greasyfork.org/scripts/497317): The script details page is added. It is suitable for links to be added. Click to open the web page.，Copy web page,tire search
> - [**GreaysFork Enhance WebHookSync settings**](https://greasyfork.org/scripts/506717): This script can help you quickly enter script synchronization information，And add language codes for multiple countries in batches，Instead of clicking the selection boxes one by one and going to the corresponding URL。
> - [**GreasyFork Markdown toobar**](https://greasyfork.org/scripts/505164): Used by default in forums Markdown Format，添加Format帮助链接及 Markdown Toolbar introduction
> - [**GreasyFork Show script ratings**](https://greasyfork.org/scripts/501119): Add evaluation scores to script list
> - [**GreasyFork Advanced search**](https://greasyfork.org/scripts/505215): Search using Google GreasyFork and SleazyFork superior script 
> - [**GreasyFork Navigation bar enhancement**](https://greasyfork.org/scripts/501880): EnhancegreasyforkNavigation bar,Add user list,User console, etc.
> - [**GreasyforkGlue craftsman**](https://greasyfork.org/scripts/497346): Enhancegreasyfork,Copy code，Script download，Precise time to seconds，Home page cleanup，Discuss one-click reporting，Script list jump code added download Beautify view code and display code reference files，show script icon，Jump to adult scripts and other operations
> - [**Greasyfork Notification assistant**](https://greasyfork.org/scripts/506345): When there’s a new reply to your script or to a discussion you’re participating in，The script will display the latest discussion content in a modal window on the web page。
> - [**Script FinderGrease Monkey Script Finder**](https://greasyfork.org/scripts/498904): Script Finder is a user script（userscript），It helps you find and manage userscripts on any website

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->
## Help
<p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>More user scripts</strong></a> /
<a href="#top">back to top↑</a></p>
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->
