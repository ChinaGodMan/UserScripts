<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

# Github Email Finder (Alpha)

该脚本用于在 GitHub 用户主页自动提取用户公开的提交（PushEvent）中的邮箱地址(如果没有公开的邮箱地址,)，并将邮箱信息插入到页面中，同时提供一键复制邮箱到剪贴板的功能。

## 功能概述

-   检查当前页面是否已有邮箱信息展示。
-   如果没有，从 GitHub API 获取用户公开事件数据，提取最近的 PushEvent 中的提交邮箱。
-   将提取到的邮箱插入到用户资料页的联系信息区域。
-   在邮箱旁边插入一个剪贴板图标，点击即可将邮箱复制到剪贴板。
-   复制成功后，剪贴板图标会替换为打钩图标，提示复制成功。

## 使用说明

1. 确保配置了有效的 GitHub 个人访问令牌（`GITHUB_TOKEN`）[此处](https://github.com/settings/tokens/new?description=Github%20Email%20Finder&scopes=repo)生成新令牌，以避免 API 请求限制。

## 注意

-   此脚本获取的并不是准确的邮箱地址，而是提交者邮箱地址，可能不是用户注册邮箱。(比如合并请求中的邮箱地址,那么显示的邮箱地址就是合并请求发起者的邮箱地址)
-   此脚本目前处于测试阶段，存在一些问题。

<!--AUTHORS-->
<!--AUTHORS-END-->
<!--SCREENSHOT-->

![2025.05.26](https://s2.loli.net/2025/05/26/uHZBkn8x7PLWMmp.png)

<!--SCREENSHOT-END-->
<!--TEXT-END-->

<!--RELATED-->
<!--RELATED-END-->
<!--HELP-->
<!--HELP-END-->
<!--FOOTER-->

<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center"><p><a href="https://github.com/ChinaGodMan/UserScripts#readme"><strong>更多用户脚本</strong></a> /<a href="#top">回到顶部↑</a></p></div></center>

<!--FOOTER--END-->
