<!--AUTO_NAVIGATION_PLEASE_DONT_DELETE_IT-->
<!--AUTO_NAVIGATION_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->
<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-->
<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->
<!--正文区域-->

# 显示 Greasyfork 用户注册时间，识别恶意评论

## 功能介绍

该脚本用于在 GreasyFork 或 SleazyFork 上显示用户的**注册时间**，帮助识别**恶意注册**的账户。恶意注册的账户通常会在**注册后不久**给予差评，且**账号活动较少**。通过显示用户的注册时间，可以推测用户的可信度。如果注册时间显示为**未来的时间**，则该用户很可能是**恶意注册**的。
这个脚本在 greasyfork 的各种评论、留言相关页面显示发言者的注册时间。如果你是开发者，可以帮你分辨恶意评论的小号；如果你不是开发者，也可以帮你辨认发言者是老用户还是新用户。

## 功能亮点：

-   **显示用户注册时间**：脚本会自动获取用户的注册时间，并将其显示在用户名旁边，帮助区分新用户与长期活跃用户。
-   **推测注册时间**：通过访问 GreasyFork 提供的 API，脚本推测并显示每个用户的注册时间。
-   **识别恶意账户**：注册时间若为未来时间，表示该用户可能是恶意注册的账号，警示用户注意。

## 支持的语言：

-   English
-   简体中文
-   繁体中文
-   日本語
-   Русский
-   한국어

## 使用方式：

1. 💯 安装该脚本后，它会在你浏览 GreasyFork 或 SleazyFork 网站时自动加载。
2. 👍 当页面加载完成后，脚本会在用户信息旁边显示该用户的注册时间。
3. ⏲️ 如果页面上已有该用户的注册时间，脚本会直接显示；如果没有，会显示一个按钮，点击后可以获取并显示该时间。(脚本直接通过`GreasyFork`提供的 API 获取注册时间，为了防止被屏蔽,所以添加按钮手动获取)
4. 🇹🇱 默认显示的时间格式为`YYYY-MM-DD HH:mm:ss`。脚本变量`absoluteTime`改为`relative-time`使用网站的时间显示.

## 适用环境：

-   💯 支持 Chrome、Firefox、Edge、Opera、Safari、Kiwi 等浏览器。

## 联系方式：

-   👨‍🦰 **作者**: 人民的勤务员@ChinaGodMan
-   📧 **邮箱**: china.qinwuyuan@gmail.com
-   🕸️ **项目主页**: [UserScripts](https://github.com/ChinaGodMan/UserScripts)

<!--AUTHORS-->
<!--AUTHORS-END-->
<!--SCREENSHOT-->

## 截图预览:

1. _匹配评论列表页面：[https://greasyfork.org/zh-CN/scripts/\\d+/feedback](https://greasyfork.org/zh-CN/scripts/\d+/feedback)_

![](https://s3.bmp.ovh/imgs/2022/09/02/42c32b26a20c4b01.png)

2. _匹配评论页面：[https://greasyfork.org/zh-CN/scripts/\\d+/discussions/\\d](https://greasyfork.org/zh-CN/scripts/\d+/discussions/\d)+_

3. ![](https://s3.bmp.ovh/imgs/2022/09/02/9d5924d4f8412416.png)

4. _匹配用户讨论页面：[https://greasyfork.org/zh-CN/discussions?user=\\d](https://greasyfork.org/zh-CN/discussions?user=\d)+_

![](https://s3.bmp.ovh/imgs/2022/09/02/993a3ac7ec9fd2ab.png)

5._匹配讨论列表页：[https://greasyfork.org/zh-CN/discussions](https://greasyfork.org/zh-CN/discussions)_

![](https://s3.bmp.ovh/imgs/2022/09/02/9a7ff6eddf3a74bb.png)

6. _匹配各类页面上的脚本作者链接_

![](https://s3.bmp.ovh/imgs/2022/09/02/94b38eda3fb69948.png)

7. _匹配用户列表页 [https://greasyfork.org/zh-CN/users](https://greasyfork.org/zh-CN/users)_

![](https://s3.bmp.ovh/imgs/2022/09/03/aa2e429f08ddc797.png)

8. _匹配脚本表页：[https://greasyfork.org/zh-CN/scripts](https://greasyfork.org/zh-CN/discscriptsussions)_

![111.png](https://s2.loli.net/2025/03/10/dcBIG1FPsuRJKpA.png)

<!--SCREENSHOT-END-->
<!--正文区域-END-->

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->
<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->
<!--FOOTER-->

<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center"><p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>更多用户脚本</strong></a> /<a href="#top">回到顶部↑</a></p></div></center>

<!--FOOTER--END-->
