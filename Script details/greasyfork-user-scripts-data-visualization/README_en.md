<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->
徽章区域
<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->


# GrreasyFork 用户脚本数据可视化

<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">

## 描述

该用户脚本使用 Chart.js 库从 GreasyFork 上的用户脚本页面中提取和可视化脚本数据。它提供了以下功能：

- **数据提取**: 从用户的脚本页面中提取安装次数数据，包括总安装次数和每日安装次数。
- **数据可视化**: 使用图表（条形图）展示每个脚本的总安装次数和每日安装次数。
- **数据展示**: 在图表下方显示总安装次数、每日安装总数以及已发布脚本的数量。

<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">

## 功能

1. **获取用户数据**: 从用户脚本页面中提取相关数据。
2. **数据可视化**: 使用 Chart.js 绘制图表来展示脚本的安装数据。
3. **展示统计信息**: 在图表下方显示总的每日安装次数、总安装次数和已发布脚本的数量。

<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">

## 安装

1. **安装 Greasemonkey 或 Tampermonkey 插件**: 请确保您的浏览器已安装 Greasemonkey 或 Tampermonkey 插件。
2. **添加脚本**:
   -  点击上方绿色安装按钮进行安装

<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">

## 使用

1. **访问 GreasyFork 用户脚本页面**: 打开任意用户的脚本页面，例如 [https://greasyfork.org/users/1169082](https://greasyfork.org/users/1169082)。
2. **查看图表和统计数据**: 脚本将在用户的个人页面加载后自动生成并展示数据图表和统计信息。
3. **从网络或者从当前页面加载**: 脚本在代码顶端提供了一个设置,当为`true`时,从当前网页获取,为`false`,向GreasyFrok下载用户数据`JSON`

<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">

## 支持

如遇到问题或需要支持，请访问 [GitHub 问题页面](https://github.com/ChinaGodMan/UserScripts/issues) 提交问题。

## 贡献
此脚本修改自[138 Aspen](https://greasyfork.org/zh-CN/users/1177387)发布的脚本[GrreasyFork User Script Data Visualization](https://greasyfork.org/zh-CN/scripts/499755)
修改说明:<br>
**增加**: •增加了原作者[138 Aspen](https://greasyfork.org/zh-CN/users/1177387)另外脚本[Displays the number of scripts published by the user, the total number of installations](https://greasyfork.org/zh-CN/scripts/482623)里面的从当前网页获取用户数据,可以在脚本内或者脚本菜单中设置从JSON数据获取还是从当前页面获取脚本数据<br>
**修改**: •~~修改`chart.js`为@require 加载,无需每次重复加载~~Greasyfork不允许使用未经批准的外部脚本.....<br>
**修改**: •修改从网络获取用户数据时,按照总安装量由高到低排序<br>
**修改**: •修改寻找用户ID的表达式为`/(\d+)/`,兼容[Greasyfork 糊裱匠](https://greasyfork.org/zh-CN/scripts/497346)`清除链接无用字符功能`<br>

欢迎贡献和改进脚本！请访问 [GitHub 仓库](https://github.com/ChinaGodMan/UserScripts) 提交拉取请求或报告问题。

## 授权

该脚本遵循 MIT 许可证。有关详细信息，请查看 [LICENSE](https://github.com/ChinaGodMan/UserScripts/blob/main/LICENSE) 文件。

![Snipaste_2024-09-18_11-25-20.png](https://s2.loli.net/2024/09/18/Qixhtq13b4lMwIF.png)

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->
关于区域
<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->

<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->
帮助区域
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->
