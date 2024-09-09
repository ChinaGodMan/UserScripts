<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)"
                srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-white-icon32.svg">
            <img height=14
                src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-icon32.svg">
        </picture>
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README.md">简体中文</a> |
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_zh-TW.md">繁體中文</a>|
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_en.md">English</a> |
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_ja.md">日本語</a>|
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_vi.md">Tiếng Việt</a>|
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_ko.md">대한민국</a>
    </h6>
</div>

[]() 如何安装油猴脚本？
========================

### [](#) 1. 安装一个用户脚本管理器

这里以 “**上下滚动按钮**” 为例，首先安装脚本管理器 Tampermonkey，图标长这样：

**不同平台，不同浏览器 Tampermonkey 安装地址如下：**

Windows

| #   | 浏览器         | Tampermonkey 下载地址                                                                                                                                                                                                          | 安装方法                                                                               |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
|     | Chrome 浏览器  | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#chrome浏览器)   |
|     | Edge 浏览器    | [Crx 搜搜扩展商店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推荐）或 [~Edge 外接程序~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（很慢） | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#edge浏览器)     |
|     | 火狐浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推荐）                                                                                                                                                | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#火狐浏览器)     |
|     | 水狐浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推荐）                                                                                                                                                | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#水狐浏览器)     |
|     | 百分浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#百分浏览器)     |
|     | 360 极速浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360极速浏览器) |
|     | 360 安全浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360安全浏览器) |
|     | QQ 浏览器      | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#qq浏览器)       |
|     | 搜狗浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#搜狗浏览器)     |
|     | 傲游浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#傲游浏览器)     |
|     | 星愿浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#星愿浏览器)     |
|     | Vivaldi 浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#vivaldi浏览器)  |
|     | Yandex 浏览器  | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#yandex浏览器)   |
|     | Opera 浏览器   | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#opera浏览器)    |
|     | 猎豹浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#猎豹浏览器)     |

Mac

| #   | 浏览器         | Tampermonkey 下载地址                                                                                                                                                                                                          | 安装方法                                                                               |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
|     | Chrome 浏览器  | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#chrome浏览器)   |
|     | Edge 浏览器    | [Crx 搜搜扩展商店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推荐）或 [~Edge 外接程序~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（很慢） | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#edge浏览器)     |
|     | 火狐浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推荐）                                                                                                                                                | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#火狐浏览器)     |
|     | 水狐浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推荐）                                                                                                                                                | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#水狐浏览器)     |
|     | 360 极速浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360极速浏览器) |
|     | 360 安全浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360安全浏览器) |
|     | 傲游浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#傲游浏览器)     |
|     | 星愿浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#星愿浏览器)     |
|     | Vivaldi 浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#vivaldi浏览器)  |
|     | Yandex 浏览器  | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#yandex浏览器)   |
|     | Opera 浏览器   | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#opera浏览器)    |

Linux

| #   | 浏览器         | Tampermonkey 下载地址                                                                                                                                                                                                          | 安装方法                                                                              |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|     | Chrome 浏览器  | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#chrome浏览器)  |
|     | Edge 浏览器    | [Crx 搜搜扩展商店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推荐）或 [~Edge 外接程序~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（很慢） | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#edge浏览器)    |
|     | 火狐浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推荐）                                                                                                                                                | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#火狐浏览器)    |
|     | 水狐浏览器     | [Crx 搜搜扩展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推荐）                                                                                                                                                | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#水狐浏览器)    |
|     | Vivaldi 浏览器 | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#vivaldi浏览器) |
|     | Yandex 浏览器  | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#yandex浏览器)  |
|     | Opera 浏览器   | [Crx 搜搜扩展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推荐）或 [~Chrome 网上应用店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被墙）  | [点击查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#opera浏览器)   |

安装成功后浏览器扩展栏将出现如下图标：

![](https://pic.rmb.bdstatic.com/bjh/1f8c55cc8c410979414290118979c4659140.png)

▲ Tampermonkey已安装

### [#](#_2-选择要安装的助手) 2. 选择要安装的助手

接下来只需要打开对应助手的安装页面：

<table>
    <thead>
        <tr>
            <th>脚本名称</th>
            <th>脚本说明</th>
            <th>GitHub</th>
            <th>Greasyfork</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">发布时间</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">更新时间</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">最新版本</th>
            <th><img src="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/docs/icon/icons8-project-management-48.png" width="16" height="16">首次创建</th>
        </tr>
    </thead>
    <tbody>
<tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505209" target="_blank">ChatGPT代码字体缩小</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-code-styling.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-code-styling" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>让 ChatGPT 代码字体变小 wsucixjv</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-code-styling.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-code-styling.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505209.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505209?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-26 11:42:17</sub></td>
            <td><sub>2024-09-08 08:45:08</sub></td>
             <td><sub>0.1.0.19</sub></td>
              <td><sub>2024-07-27 20:58:35</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506166" target="_blank">ChatGPT 字符计数器</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-counter.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-counter" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>添加一个字符计数器到输入框，限制为 32732 个字符。（ChatGPT 的限制是 32732 个字符。）</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-counter.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-counter.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506166.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506166?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-09-01 09:51:01</sub></td>
            <td><sub>2024-09-08 08:45:08</sub></td>
             <td><sub>1.3.1.10</sub></td>
              <td><sub>2024-09-01 09:45:50</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/504901" target="_blank">ChatGPT 折叠自己消息和最大宽度</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-plus" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>自动折叠由你发送的长消息，节省屏幕空间。允许你设置聊天窗口的最大宽度，使得长消息不会超出指定范围。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-plus.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504901.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504901?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-24 11:33:58</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>0.1.0.21</sub></td>
              <td><sub>2024-08-24 11:09:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497403" target="_blank">网页写入剪辑版授权管理器</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/clipboard-manager.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/clipboard-manager" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>禁止网页向剪辑版拉屎，绿色为放行，红色禁止，橙色临时方向</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/clipboard-manager.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/clipboard-manager.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497403.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497403?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-09 10:17:55</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>1.2.2.69</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505207" target="_blank">解除CSDN登录复制限制</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/csdn-blocker.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/csdn-blocker" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>去你妈的 CSDN 登录复制，无需登录即可复制代码框内容</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/csdn-blocker.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505207.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505207?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-26 11:37:22</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>1.0.0.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/507036" target="_blank">绚丽渐变美化网页表格</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/colorful-table.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/colorful-table" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>自动为网页上的表格所有列应用颜色渐变美化.</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/colorful-table.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/colorful-table.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/507036.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/507036?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-09-06 06:08:08</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>1.0.0.5</sub></td>
              <td><sub>2024-09-06 05:02:49</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505830" target="_blank">GitHub提交信息显示HTML</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-commit-viewer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-commit-viewer" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>该脚本将 GitHub 上的提交信息转化为 HTML 视图，以更清晰地查看提交详情。它会自动将提交信息列表、提交头部和最新提交信息转化为 HTML 格式，提供更佳的视觉效果和用户体验。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-commit-viewer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-commit-viewer.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505830.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505830?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-30 10:13:44</sub></td>
            <td><sub>2024-09-08 08:45:10</sub></td>
             <td><sub>1.0.0.15</sub></td>
              <td><sub>2024-08-30 03:21:51</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505496" target="_blank">GitHub文件夹下载</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-folder-downloader.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-folder-downloader" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>添加一个下载按钮，允许轻松下载特定的 GitHub 文件夹。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-folder-downloader.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-folder-downloader.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505496.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505496?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-28 04:27:35</sub></td>
            <td><sub>2024-09-08 08:45:10</sub></td>
             <td><sub>0.7.0.19</sub></td>
              <td><sub>2024-08-29 06:11:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505501" target="_blank">GitHub下载单文件和复制文件URL</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-raw-file-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-raw-file-plus" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>在每个文件行的末尾添加按钮，以复制原始文件 URL 和下载文件</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-raw-file-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-raw-file-plus.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505501.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505501?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-28 05:20:14</sub></td>
            <td><sub>2024-09-09 06:21:05</sub></td>
             <td><sub>2.2.0.18</sub></td>
              <td><sub>2024-08-29 06:11:33</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/502291" target="_blank">github显示仓库大小</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-repo-size-view.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-repo-size-view" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>在Github查看仓库和搜索仓库时显示仓库大小</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-repo-size-view.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-repo-size-view.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502291.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502291?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-01 03:43:19</sub></td>
            <td><sub>2024-09-08 08:45:11</sub></td>
             <td><sub>0.1.2.52</sub></td>
              <td><sub>2024-08-01 00:53:59</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505218" target="_blank">GitHub Sort by Date</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-sort-by-date.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-sort-by-date" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>仓库列表文件排序方式改为日期降序，方便查看最新更新的文件。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-sort-by-date.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-sort-by-date.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505218.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505218?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-26 12:30:53</sub></td>
            <td><sub>2024-09-08 08:45:11</sub></td>
             <td><sub>1.1.0.19</sub></td>
              <td><sub>2024-08-06 01:28:58</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/502652" target="_blank">Google 高级搜索</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-advanced-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-advanced-search" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>这是一个为 Google 添加高级搜索表单的用户脚本。它能在页面顶部添加一个可隐藏的高级搜索表单，使您能够更精确地搜索信息。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-advanced-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-advanced-search.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502652.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502652?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-05 10:28:20</sub></td>
            <td><sub>2024-09-08 08:45:12</sub></td>
             <td><sub>0.1.9.41</sub></td>
              <td><sub>2024-08-06 00:32:20</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/500262" target="_blank">Google 搜索屏蔽指定站点</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-block-search-sites.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-block-search-sites" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>在搜索引擎结果中屏蔽特定的站点，帮助用户过滤掉不需要的搜索结果。 自定义输入屏蔽站点。格式-zhihu -baidu 用于屏蔽谷歌搜索内容</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-block-search-sites.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-block-search-sites.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500262.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500262?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-07-11 14:21:02</sub></td>
            <td><sub>2024-09-08 08:45:12</sub></td>
             <td><sub>0.0.1.47</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497317" target="_blank">GreasyFork适用于增强</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-link.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-link" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>脚本详情页增加适用于链接增加点击打开网页，复制网页,轮胎搜索</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-link.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-link.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497317.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497317?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-08 05:36:47</sub></td>
            <td><sub>2024-09-08 08:45:13</sub></td>
             <td><sub>0.9.3.62</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506717" target="_blank">GreaysFork 增强 WebHook同步设置</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-webhook-sync-enhanced.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-webhook-sync-enhanced" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>这个脚本可以帮助你快速输入脚本同步信息，并批量增加多个国家的语言代码，而不用一个个地点击选择框再去对应的网址。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-webhook-sync-enhanced.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-webhook-sync-enhanced.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506717.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506717?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-09-04 12:12:18</sub></td>
            <td><sub>2024-09-08 08:45:16</sub></td>
             <td><sub>1.1.0.6</sub></td>
              <td><sub>2024-09-04 12:08:47</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505164" target="_blank">GreasyFork Markdown toobar</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-markdown-toolbar.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-markdown-toolbar" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>在论坛默认使用 Markdown 格式，添加格式帮助链接及 Markdown 工具栏绍</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-markdown-toolbar.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-markdown-toolbar.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505164.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505164?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-26 02:12:29</sub></td>
            <td><sub>2024-09-08 08:45:13</sub></td>
             <td><sub>2.0.4.20</sub></td>
              <td><sub>2024-08-06 00:32:53</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/501119" target="_blank">GreasyFork 显示脚本评分</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-ranks.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-ranks" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>脚本列表添加评价分数</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-ranks.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-ranks.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501119.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501119?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-07-19 09:44:01</sub></td>
            <td><sub>2024-09-08 08:45:13</sub></td>
             <td><sub>1.3.3.59</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505215" target="_blank">GreasyFork 高级搜索</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-search" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>使用谷歌搜索 GreasyFork 和 SleazyFork 上的脚本 </td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-search.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505215.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505215?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-26 12:08:49</sub></td>
            <td><sub>2024-09-09 06:20:39</sub></td>
             <td><sub>0.6.5.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/501880" target="_blank">GreasyFork 导航栏增强</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-user-control-panel-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-user-control-panel-button" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>增强greasyfork导航栏,增加用户列表,用户控制台等</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-user-control-panel-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-user-control-panel-button.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501880?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-07-27 09:34:43</sub></td>
            <td><sub>2024-09-08 08:45:14</sub></td>
             <td><sub>0.3.1.53</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497346" target="_blank">Greasyfork糊裱匠</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-utility-toolkit.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-utility-toolkit" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>增强greasyfork,复制代码，脚本下载，精确时间到秒，主页清理，讨论一键举报，脚本列表跳转代码添加下载 美化查看代码显示代码引用文件，显示脚本图标，跳转成人脚本等等一些操作</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-utility-toolkit.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-utility-toolkit.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497346.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497346?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-08 17:06:26</sub></td>
            <td><sub>2024-09-08 08:45:15</sub></td>
             <td><sub>2.2.0.87</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506345" target="_blank">Greasyfork 通知助手</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-discussion-watcher.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-discussion-watcher" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>当你的脚本或你参与的讨论有新回复时，脚本会在网页上以模态窗口显示最新的讨论内容。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-discussion-watcher.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-discussion-watcher.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506345.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506345?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-09-02 12:36:00</sub></td>
            <td><sub>2024-09-08 08:45:12</sub></td>
             <td><sub>1.3.0.1</sub></td>
              <td><sub>2024-09-02 12:34:55</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498906" target="_blank">网页高亮关键字+(推荐)</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>对网页上的文字进行高亮显示</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498906.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498906?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-26 07:05:05</sub></td>
            <td><sub>2024-09-08 08:45:16</sub></td>
             <td><sub>1.1.2.68</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498905" target="_blank">高亮网页文本_迷你版</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords-mini.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords-mini" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>在网页上自定义关键词突出显示包括滚动时动态加载的内容</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords-mini.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords-mini.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498905.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498905?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-26 06:53:12</sub></td>
            <td><sub>2024-09-08 08:45:16</sub></td>
             <td><sub>1.0.5.22</sub></td>
              <td><sub>2024-08-24 06:02:07</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505325" target="_blank">MiSSAV自动登录</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-auto-login-helper" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>检测 MisssAV 状态，并且在未登录时自动登录</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-auto-login-helper.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505325.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505325?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-27 04:15:17</sub></td>
            <td><sub>2024-09-08 08:45:17</sub></td>
             <td><sub>1.0.1.3</sub></td>
              <td><sub>2024-08-27 02:45:07</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497682" target="_blank">MissAV收藏管理器</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-explorer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-explorer" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>miss片单备份，支持下载图片保存视频信息.导出本地网页 支持导出到webdav</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-explorer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-explorer.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497682.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497682?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-12 10:58:39</sub></td>
            <td><sub>2024-09-08 08:45:18</sub></td>
             <td><sub>1.2.3.69</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506528" target="_blank">TissAV自动登录</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/thisav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/thisav-auto-login-helper" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>检测 TissAV 状态，并且在未登录时自动登录</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/thisav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/thisav-auto-login-helper.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506528.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506528?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-09-03 08:50:59</sub></td>
            <td><sub>2024-09-08 08:45:20</sub></td>
             <td><sub>1.0.1.4</sub></td>
              <td><sub>2024-09-03 08:52:46</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506730" target="_blank">JableTV自动登录</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/jable-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/jable-auto-login-helper" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>检测 JableTV 状态，并且在未登录时自动登录</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/jable-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/jable-auto-login-helper.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506730.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506730?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-09-04 13:43:00</sub></td>
            <td><sub>2024-09-08 08:45:17</sub></td>
             <td><sub>1.0.0.6</sub></td>
              <td><sub>2024-09-04 13:44:42</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/504890" target="_blank">外语终结者</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/no-zh-terminator.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/no-zh-terminator" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>识别非中文字符，如果长度大于 5 且翻译文本中不含中文，则替换为中文,需要可访问google的网络</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/no-zh-terminator.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/no-zh-terminator.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504890.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504890?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-24 10:37:08</sub></td>
            <td><sub>2024-09-08 08:45:18</sub></td>
             <td><sub>1.3.98.21</sub></td>
              <td><sub>2024-07-27 20:58:35</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/504880" target="_blank">小窗口预览</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/popup-window.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/popup-window" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>拖拽链接时在弹出窗口中打开链接，并在打开前提供预览，使用 Edge 的预读技术。同时在小窗口打开时在背后添加亚克力效果。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/popup-window.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/popup-window.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504880?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-24 06:51:35</sub></td>
            <td><sub>2024-09-08 08:45:18</sub></td>
             <td><sub>2.4.0.28</sub></td>
              <td><sub>2024-08-23 07:20:13</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498625" target="_blank">去除链接下划线</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/remove-link-underlines.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/remove-link-underlines" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>去除网页链接的下划线</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/remove-link-underlines.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/remove-link-underlines.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498625.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498625?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-23 11:35:07</sub></td>
            <td><sub>2024-09-08 08:45:19</sub></td>
             <td><sub>1.2.0.59</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498904" target="_blank">Script Finder油猴脚本查找器</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/script-finder-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/script-finder-plus" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>Script Finder 是一个用户脚本（userscript），它可以帮助你在任何网站上查找和管理用户脚本</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/script-finder-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/script-finder-plus.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498904.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498904?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-26 06:43:47</sub></td>
            <td><sub>2024-09-08 08:45:19</sub></td>
             <td><sub>0.1.6.75</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497251" target="_blank">上下滚动小按钮</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-button" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>页面右侧添加上下滚动按钮</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-button.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497251.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497251?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-06-07 08:33:17</sub></td>
            <td><sub>2024-09-08 08:45:20</sub></td>
             <td><sub>1.0.0.22</sub></td>
              <td><sub>2024-08-24 06:05:19</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/500255" target="_blank">一键置顶和置底按钮</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-to-top-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-to-top-button" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>修改自Greasyfork用户脚本 为网页添加置顶和置底按钮，方便在长页面中快速移动到顶部或底部。 增加向下滚动时按钮变色，3秒内无滚动自动停止</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-to-top-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-to-top-button.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500255.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500255?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-07-11 13:57:29</sub></td>
            <td><sub>2024-09-08 08:45:20</sub></td>
             <td><sub>1.2.0.68</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505208" target="_blank">网页翻译——自动翻译为中文</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/translate-only-chinese.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/translate-only-chinese" target="_blank">
                    <mark>详细</mark>
                </a>
            </td>
            <td>给每个非中文的网页右下角（可以调整到左下角）添加一个 google 翻译图标，该版本为中文翻译版本，只把外语翻译为中文，添加自动翻译</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/translate-only-chinese.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/translate-only-chinese.user.js?style=social" alt="size">
                    <br>安装
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505208.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505208?color=%23990000&label=Installs">
                    <br>安装
                </a>
            </td>
            <td><sub>2024-08-26 11:37:23</sub></td>
            <td><sub>2024-09-08 08:45:21</sub></td>
             <td><sub>0.31.0.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    </tbody>
</table>
点击下图中绿色按钮

![Snipaste_2024-09-09_07-54-33.png](https://s2.loli.net/2024/09/09/nUdqo2KifQwYzpC.png)

在弹出的窗口中继续点击安装，成功后窗口自动关闭

此时来到生效的页面刷新，尽情享受吧!!!!

![1111.png](https://s2.loli.net/2024/09/09/b8sGXUgz3Q2v7ph.png)