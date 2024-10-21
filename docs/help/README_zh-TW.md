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

# []() 如何安裝油猴腳本？

### [](#) 1. 安裝一個使用者腳本管理器

這裡以 “**上下滾動按鈕**” 為例，首先安裝腳本管理器 Tampermonkey，圖標長這樣：

**不同平台，不同瀏覽器 Tampermonkey 安裝位址如下：**

Windows

| #   | 瀏覽器         | Tampermonkey 下載地址                                                                                                                                                                                                               | 安裝方法                                                                               |
| --- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|     | Chrome 瀏覽器  | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#chrome瀏覽器)   |
|     | Edge 瀏覽器    | [Crx 搜搜擴展商店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推薦）或 [~Edge 外接程序~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（很慢）      | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#edge瀏覽器)     |
|     | 火狐瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦）                                                                                                                                                     | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#火狐瀏覽器)     |
|     | 水狐瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦）                                                                                                                                                     | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#水狐瀏覽器)     |
|     | 百分瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#百分瀏覽器)     |
|     | 360 極速瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360極速瀏覽器) |
|     | 360 安全瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360安全瀏覽器) |
|     | QQ 瀏覽器      | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#qq瀏覽器)       |
|     | 搜狗瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#搜狗瀏覽器)     |
|     | 傲遊瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#傲遊瀏覽器)     |
|     | 星願瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#星願瀏覽器)     |
|     | Vivaldi 瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#vivaldi瀏覽器)  |
|     | Yandex 瀏覽器  | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#yandex瀏覽器)   |
|     | Opera 瀏覽器   | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#opera瀏覽器)    |
|     | 獵豹瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#獵豹瀏覽器)     |

Mac

| #   | 瀏覽器         | Tampermonkey 下載地址                                                                                                                                                                                                               | 安裝方法                                                                               |
| --- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|     | Chrome 瀏覽器  | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#chrome瀏覽器)   |
|     | Edge 瀏覽器    | [Crx 搜搜擴展商店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推薦）或 [~Edge 外接程序~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（很慢）      | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#edge瀏覽器)     |
|     | 火狐瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦）                                                                                                                                                     | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#火狐瀏覽器)     |
|     | 水狐瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦）                                                                                                                                                     | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#水狐瀏覽器)     |
|     | 360 極速瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360極速瀏覽器) |
|     | 360 安全瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360安全瀏覽器) |
|     | 傲遊瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#傲遊瀏覽器)     |
|     | 星願瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#星願瀏覽器)     |
|     | Vivaldi 瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#vivaldi瀏覽器)  |
|     | Yandex 瀏覽器  | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#yandex瀏覽器)   |
|     | Opera 瀏覽器   | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#opera瀏覽器)    |

Linux

| #   | 瀏覽器         | Tampermonkey 下載地址                                                                                                                                                                                                               | 安裝方法                                                                              |
| --- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|     | Chrome 瀏覽器  | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#chrome瀏覽器)  |
|     | Edge 瀏覽器    | [Crx 搜搜擴展商店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推薦）或 [~Edge 外接程序~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（很慢）      | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#edge瀏覽器)    |
|     | 火狐瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦）                                                                                                                                                     | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#火狐瀏覽器)    |
|     | 水狐瀏覽器     | [Crx 搜搜擴展商店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦）                                                                                                                                                     | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#水狐瀏覽器)    |
|     | Vivaldi 瀏覽器 | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#vivaldi瀏覽器) |
|     | Yandex 瀏覽器  | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#yandex瀏覽器)  |
|     | Opera 瀏覽器   | [Crx 搜搜擴展商店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦）或 [~Chrome 網路應用程式商店~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（被牆） | [點擊查看](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#opera瀏覽器)   |

安裝成功後瀏覽器擴充功能列將出現如下圖標：

![](https://pic.rmb.bdstatic.com/bjh/1f8c55cc8c410979414290118979c4659140.png)

▲ Tampermonkey已安裝

### [#](#_2-選擇要安裝的助手) 2. 選擇要安裝的助手

接下來只需要開啟對應助理的安裝頁面：

<table>
    <thead>
        <tr>
            <th>腳本名稱</th>
            <th>腳本說明</th>
            <th>GitHub</th>
            <th>Greasyfork</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">發佈時間</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">更新時間</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">最新版本</th>
            <th><img src="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/docs/icon/icons8-project-management-48.png" width="16" height="16">首次創建</th>
        </tr>
    </thead>
    <tbody>
<tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505209" target="_blank">ChatGPT程式碼字體縮小</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-code-styling.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-code-styling" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>讓 ChatGPT 程式碼字體變小 wsucixjv</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-code-styling.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-code-styling.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505209.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505209?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/506166" target="_blank">ChatGPT 字元計數器</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-counter.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-counter" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>添加一個字元计数器到输入框，限制為 32732 個字元。（ChatGPT 的限制是 32732 个字符。）</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-counter.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-counter.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506166.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506166?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/504901" target="_blank">ChatGPT 折疊自己訊息和最大寬度</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-plus" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>自動折疊由你發送的長訊息，節省螢幕空間。允許你設定聊天視窗的最大寬度，使得長訊息不會超出指定範圍。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-plus.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504901.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504901?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/497403" target="_blank">網頁寫入剪輯版授權管理員</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/clipboard-manager.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/clipboard-manager" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>禁止網頁向剪輯版拉屎，綠色為放行，紅色禁止，橙色臨時方向</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/clipboard-manager.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/clipboard-manager.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497403.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497403?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505207" target="_blank">解除CSDN登入複製限制</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/csdn-blocker.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/csdn-blocker" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>去你媽的 CSDN 登入複製，無需登入即可複製程式碼框內容</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/csdn-blocker.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505207.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505207?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/507036" target="_blank">絢麗漸層美化網頁表格</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/colorful-table.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/colorful-table" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>自動為網頁上的表格所有欄位套用顏色漸層美化.</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/colorful-table.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/colorful-table.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/507036.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/507036?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505830" target="_blank">GitHub提交資訊顯示HTML</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-commit-viewer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-commit-viewer" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>該腳本將 GitHub 上的提交資訊轉化為 HTML 視圖，以更清晰地查看提交詳情。它會自動將提交資訊列表、提交頭部和最新提交資訊轉化為 HTML 格式，提供更佳的視覺效果與使用者體驗。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-commit-viewer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-commit-viewer.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505830.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505830?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505496" target="_blank">GitHub資料夾下載</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-folder-downloader.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-folder-downloader" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>新增一個下載按鈕，允許輕鬆下載特定的 GitHub 資料夾。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-folder-downloader.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-folder-downloader.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505496.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505496?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505501" target="_blank">GitHub下載單一文件和複製文件URL</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-raw-file-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-raw-file-plus" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>在每個文件行的末尾新增按鈕，以複製原始文件 URL 和下載文件</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-raw-file-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-raw-file-plus.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505501.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505501?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/502291" target="_blank">github顯示倉庫大小</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-repo-size-view.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-repo-size-view" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>在Github查看倉庫和搜尋倉庫時顯示倉庫大小</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-repo-size-view.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-repo-size-view.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502291.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502291?color=%23990000&label=Installs">
                    <br>安裝
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
                    <mark>詳細</mark>
                </a>
            </td>
            <td>倉庫列表文件排序方式改為日期降序，方便查看最新更新的文件。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-sort-by-date.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-sort-by-date.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505218.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505218?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/502652" target="_blank">Google 進階搜尋</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-advanced-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-advanced-search" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>這是一個為 Google 新增進階搜尋表單的使用者腳本。它能在頁面頂部添加一個可隱藏的高級搜尋表單，使您能夠更精確地搜尋訊息。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-advanced-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-advanced-search.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502652.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502652?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/500262" target="_blank">Google 搜尋屏蔽指定站點</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-block-search-sites.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-block-search-sites" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>在搜尋引擎結果中封鎖特定的站點，幫助用戶過濾掉不需要的搜尋結果。 自訂輸入屏蔽站點。格式-zhihu -baidu 用於封鎖谷歌搜尋內容</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-block-search-sites.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-block-search-sites.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500262.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500262?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/497317" target="_blank">GreasyFork適用於增強</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-link.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-link" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>腳本詳情頁增加適用於連結增加點擊開啟網頁，複製網頁,輪胎搜尋</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-link.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-link.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497317.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497317?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/506717" target="_blank">GreaysFork 增強 WebHook同步設定</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-webhook-sync-enhanced.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-webhook-sync-enhanced" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>這個腳本可以幫助你快速輸入腳本同步訊息，並批量增加多個國家的語言代碼，而不用一個個地點擊選擇框再去對應的網址。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-webhook-sync-enhanced.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-webhook-sync-enhanced.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506717.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506717?color=%23990000&label=Installs">
                    <br>安裝
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
                    <mark>詳細</mark>
                </a>
            </td>
            <td>在論壇預設使用 Markdown 格式，添加格式幫助連結及 Markdown 工具列紹</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-markdown-toolbar.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-markdown-toolbar.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505164.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505164?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/501119" target="_blank">GreasyFork 顯示腳本評分</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-ranks.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-ranks" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>腳本清單新增評價分數</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-ranks.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-ranks.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501119.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501119?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505215" target="_blank">GreasyFork 進階搜尋</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-search" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>使用谷歌搜尋 GreasyFork 和 SleazyFork 上體文字 </td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-search.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505215.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505215?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/501880" target="_blank">GreasyFork 導覽列增強</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-user-control-panel-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-user-control-panel-button" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>增強greasyfork導覽列,增加用戶列表,使用者控制台等</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-user-control-panel-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-user-control-panel-button.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501880?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/497346" target="_blank">Greasyfork膠水工匠</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-utility-toolkit.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-utility-toolkit" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>增強greasyfork,複製程式碼，腳本下載，精確時間到秒，主頁清理，討論一鍵舉報，腳本清單跳轉代碼添加下載 美化查看程式碼顯示程式碼引用文件，顯示腳本圖示，跳轉成人腳本等等一些操作</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-utility-toolkit.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-utility-toolkit.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497346.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497346?color=%23990000&label=Installs">
                    <br>安裝
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
                    <mark>詳細</mark>
                </a>
            </td>
            <td>當你的腳本或你參與的討論有新回應時，腳本會在網頁上以模態視窗顯示最新的討論內容。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-discussion-watcher.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-discussion-watcher.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506345.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506345?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/498906" target="_blank">網頁高亮關鍵字+(推薦)</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>對網頁上的文字進行高亮顯示</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498906.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498906?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/498905" target="_blank">高亮網頁文本_迷你版</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords-mini.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords-mini" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>在網頁上自訂關鍵字突出顯示包括滾動時動態載入的內容</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords-mini.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords-mini.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498905.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498905?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505325" target="_blank">MiSSAV自動登入</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-auto-login-helper" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>偵測 MisssAV 狀態，並且在未登入時自動登入</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-auto-login-helper.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505325.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505325?color=%23990000&label=Installs">
                    <br>安裝
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
                    <mark>詳細</mark>
                </a>
            </td>
            <td>miss單張備份，支援下載圖片保存影片訊息.導出本地網頁 支援導出到webdav</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-explorer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-explorer.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497682.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497682?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/506528" target="_blank">TissAV自動登入</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/thisav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/thisav-auto-login-helper" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>偵測 TissAV 狀態，並且在未登入時自動登入</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/thisav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/thisav-auto-login-helper.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506528.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506528?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/506730" target="_blank">JableTV自動登入</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/jable-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/jable-auto-login-helper" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>偵測 JableTV 狀態，並且在未登入時自動登入</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/jable-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/jable-auto-login-helper.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506730.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506730?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/504890" target="_blank">外語終結者</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/no-zh-terminator.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/no-zh-terminator" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>識別非中文字符，如果長度大於 5 且翻譯文中不含中文，則替換為中文,需要可訪問google的網路</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/no-zh-terminator.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/no-zh-terminator.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504890.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504890?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/504880" target="_blank">小視窗預覽</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/popup-window.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/popup-window" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>拖曳連結時在彈出視窗中開啟鏈接，並在打開前提供預覽，使用 Edge 的預讀技術。同時在小窗口打開時在背後添加壓克力效果。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/popup-window.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/popup-window.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504880?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/498625" target="_blank">去除連結下劃線</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/remove-link-underlines.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/remove-link-underlines" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>去除網頁連結的下劃線</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/remove-link-underlines.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/remove-link-underlines.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498625.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498625?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/498904" target="_blank">Script Finder油猴腳本查找器</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/script-finder-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/script-finder-plus" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>Script Finder 是一個使用者腳本（userscript），它可以幫助你在任何網站上尋找和管理使用者腳本</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/script-finder-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/script-finder-plus.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498904.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498904?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/497251" target="_blank">上下滾動小按鈕</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-button" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>頁面右側新增上下滾動按鈕</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-button.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497251.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497251?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/500255" target="_blank">一鍵置頂和置底按鈕</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-to-top-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-to-top-button" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>修改自Greasyfork使用者腳本 為網頁新增置頂和置底按鈕，方便在長頁面中快速移動到頂部或底部。 增加向下滾動時按鈕變色，3秒內無滾動自動停止</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-to-top-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-to-top-button.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500255.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500255?color=%23990000&label=Installs">
                    <br>安裝
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
                <a href="https://greasyfork.org/zh-CN/scripts/505208" target="_blank">網頁翻譯——自動翻譯為中文</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/translate-only-chinese.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/translate-only-chinese" target="_blank">
                    <mark>詳細</mark>
                </a>
            </td>
            <td>給每個非中文的網頁右下角（可以調整到左下角）添加一個 google 翻譯圖示，此版本為中文翻譯版本，只把外文翻譯為中文，新增自動翻譯</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/translate-only-chinese.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/translate-only-chinese.user.js?style=social" alt="size">
                    <br>安裝
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505208.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505208?color=%23990000&label=Installs">
                    <br>安裝
                </a>
            </td>
            <td><sub>2024-08-26 11:37:23</sub></td>
            <td><sub>2024-09-08 08:45:21</sub></td>
             <td><sub>0.31.0.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    </tbody>
</table>
點擊下圖中綠色按鈕

![Snipaste_2024-09-09_07-54-33.png](https://s2.loli.net/2024/09/09/nUdqo2KifQwYzpC.png)

在彈出的視窗中繼續點擊安裝，成功後視窗自動關閉

此時來到生效的頁面刷新，盡情享受吧!!!!

![1111.png](https://s2.loli.net/2024/09/09/b8sGXUgz3Q2v7ph.png)
