<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)"
                srcset="https://assets.aiwebextensions.com/images/icons/earth/white/icon32.svg">
            <img height=14
                src="https://assets.aiwebextensions.com/images/icons/earth/black/icon32.svg">
        </picture>
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README.md">简体中文</a> |
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_zh-TW.md">繁體中文</a>|
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_en.md">English</a> |
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_ja.md">日本語</a>|
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_vi.md">Tiếng Việt</a>|
        <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/docs/help/README_ko.md">대한민국</a>
    </h6>
</div>

# []() Grease Monkey スクリプトのインストール方法？

### [](#) 1. ユーザースクリプトマネージャーをインストールする

ここで一緒に “**スクロールボタン**” 例えば，まずスクリプトマネージャーをインストールします Tampermonkey，アイコンはこんな感じ：

**異なるプラットフォーム，さまざまなブラウザ Tampermonkey インストール先アドレスは以下の通りです：**

Windows

| #   | ブラウザ                     | Tampermonkey ダウンロードアドレス                                                                                                                                                                                                                                 | 設置方法                                                                                                     |
| --- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|     | Chrome ブラウザ              | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#chromeブラウザ)               |
|     | Edge ブラウザ                | [Crx 相双増築店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推薦する）または [~Edge アドイン~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（とても遅い）                        | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#edgeブラウザ)                 |
|     | Firefox                      | [Crx 相双増築店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦する）                                                                                                                                                                                 | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Firefox)                      |
|     | ウォーターフォックスブラウザ | [Crx 相双増築店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦する）                                                                                                                                                                                 | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#ウォーターフォックスブラウザ) |
|     | 100% ブラウザ                | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#100% ブラウザ)                |
|     | 360 非常に高速なブラウザ     | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360非常に高速なブラウザ)     |
|     | 360 安全なブラウザ           | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360安全なブラウザ)           |
|     | QQ ブラウザ                  | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#qqブラウザ)                   |
|     | 総合ブラウザ                 | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#総合ブラウザ)                 |
|     | マクソンブラウザ             | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#マクソンブラウザ)             |
|     | スターウィッシュブラウザ     | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#スターウィッシュブラウザ)     |
|     | Vivaldi ブラウザ             | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#vivaldiブラウザ)              |
|     | Yandex ブラウザ              | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#yandexブラウザ)               |
|     | Opera ブラウザ               | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#operaブラウザ)                |
|     | チーターブラウザ             | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#チーターブラウザ)             |

Mac

| #   | ブラウザ                     | Tampermonkey ダウンロードアドレス                                                                                                                                                                                                                                 | 設置方法                                                                                                     |
| --- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|     | Chrome ブラウザ              | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#chromeブラウザ)               |
|     | Edge ブラウザ                | [Crx 相双増築店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推薦する）または [~Edge アドイン~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（とても遅い）                        | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#edgeブラウザ)                 |
|     | Firefox                      | [Crx 相双増築店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦する）                                                                                                                                                                                 | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#Firefox)                      |
|     | ウォーターフォックスブラウザ | [Crx 相双増築店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦する）                                                                                                                                                                                 | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#ウォーターフォックスブラウザ) |
|     | 360 非常に高速なブラウザ     | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360非常に高速なブラウザ)     |
|     | 360 安全なブラウザ           | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360安全なブラウザ)           |
|     | マクソンブラウザ             | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#マクソンブラウザ)             |
|     | スターウィッシュブラウザ     | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#スターウィッシュブラウザ)     |
|     | Vivaldi ブラウザ             | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#vivaldiブラウザ)              |
|     | Yandex ブラウザ              | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#yandexブラウザ)               |
|     | Opera ブラウザ               | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#operaブラウザ)                |

Linux

| #   | ブラウザ                     | Tampermonkey ダウンロードアドレス                                                                                                                                                                                                                                 | 設置方法                                                                                                     |
| --- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|     | Chrome ブラウザ              | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#chromeブラウザ)               |
|     | Edge ブラウザ                | [Crx 相双増築店](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（推薦する）または [~Edge アドイン~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（とても遅い）                        | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#edgeブラウザ)                 |
|     | Firefox                      | [Crx 相双増築店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦する）                                                                                                                                                                                 | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#Firefox)                      |
|     | ウォーターフォックスブラウザ | [Crx 相双増築店](https://www.crxsoso.com/firefox/detail/tampermonkey)（推薦する）                                                                                                                                                                                 | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#ウォーターフォックスブラウザ) |
|     | Vivaldi ブラウザ             | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#vivaldiブラウザ)              |
|     | Yandex ブラウザ              | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#yandexブラウザ)               |
|     | Opera ブラウザ               | [Crx 相双増築店](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（推薦する）または [~Chrome オンラインアプリケーションストア~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（壁に囲まれた） | [クリックして表示](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#operaブラウザ)                |

インストールが成功すると、ブラウザの拡張機能バーに次のアイコンが表示されます。：

![](https://pic.rmb.bdstatic.com/bjh/1f8c55cc8c410979414290118979c4659140.png)

▲ Tampermonkey インストール済み

### [#](#_2-インストールするアシスタントを選択してください) 2. インストールするアシスタントを選択してください

次に、対応するアシスタントのインストール ページを開くだけです。：

<table>
    <thead>
        <tr>
            <th>スクリプト名</th>
            <th>スクリプトの説明</th>
            <th>GitHub</th>
            <th>Greasyfork</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">リリース時間</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">更新時間</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">最新バージョン</th>
            <th><img src="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/docs/icon/icons8-project-management-48.png" width="16" height="16">初めて作成しました</th>
        </tr>
    </thead>
    <tbody>
<tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505209" target="_blank">ChatGPTコードのフォントサイズが小さくなりました</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-code-styling.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-code-styling" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>させて ChatGPT コードのフォントサイズが小さくなる wsucixjv</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-code-styling.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-code-styling.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505209.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505209?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/506166" target="_blank">ChatGPT 文字カウンター</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-counter.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-counter" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>添加一キャラクター计数器到输入框，に限定される 32732 キャラクター。（ChatGPT 限界は 32732 个字符。）</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-counter.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-counter.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506166.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506166?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/504901" target="_blank">ChatGPT セルフメッセージと最大幅を折りたたむ</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-plus" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>自分が送信した長いメッセージを自動的に折りたたむ，画面スペースを節約する。チャットウィンドウの最大幅を設定できます。，長いメッセージが指定範囲を超えないようにする。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-plus.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504901.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504901?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/497403" target="_blank">Web ページ書き込みクリップ バージョン認証マネージャー</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/clipboard-manager.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/clipboard-manager" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>Web ページが編集されたバージョンを公開することを禁止する，緑はリリース用，赤の禁止，オレンジ色の臨時ルート</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/clipboard-manager.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/clipboard-manager.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497403.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497403?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505207" target="_blank">リフトCSDNログインコピーの制限</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/csdn-blocker.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/csdn-blocker" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>ファックユー CSDN ログインコピー，ログインせずにコードボックスの内容をコピーする</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/csdn-blocker.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505207.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505207?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/507036" target="_blank">ゴージャスなグラデーションで Web フォームを美しくする</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/colorful-table.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/colorful-table" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>Web ページ上の表のすべての列にカラー グラデーション美化を自動的に適用します。.</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/colorful-table.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/colorful-table.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/507036.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/507036?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505830" target="_blank">GitHub送信情報表示HTML</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-commit-viewer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-commit-viewer" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>このスクリプトは、 GitHub 投稿情報は、 HTML ビュー，提出物の詳細をより明確に確認するには。情報リストを自動的に送信します、コミットヘッダーと最新のコミット情報が変換されます。 HTML 形式，より優れた視覚効果とユーザーエクスペリエンスを提供する。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-commit-viewer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-commit-viewer.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505830.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505830?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505496" target="_blank">GitHubフォルダーのダウンロード</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-folder-downloader.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-folder-downloader" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>ダウンロードボタンを追加する，特定のファイルを簡単にダウンロードできます GitHub フォルダ。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-folder-downloader.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-folder-downloader.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505496.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505496?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505501" target="_blank">GitHub単一ファイルのダウンロードとファイルのコピーURL</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-raw-file-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-raw-file-plus" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>各ファイル行の末尾にある「追加」ボタン，元のファイルをコピーするには URL そしてファイルをダウンロードする</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-raw-file-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-raw-file-plus.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505501.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505501?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/502291" target="_blank">github倉庫のサイズを表示</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-repo-size-view.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-repo-size-view" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>存在するGithub倉庫の表示および検索時に倉庫のサイズを表示する</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-repo-size-view.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-repo-size-view.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502291.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502291?color=%23990000&label=Installs">
                    <br>インストール
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
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>倉庫リストファイルのソート方法を日付の降順に変更する，最新の更新されたファイルを簡単に表示できます。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-sort-by-date.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-sort-by-date.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505218.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505218?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/502652" target="_blank">Google 詳細検索</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-advanced-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-advanced-search" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>これは、 Google 詳細検索フォームのユーザー スクリプトを追加する。ページの上部に非表示可能な高度な検索フォームを追加します，より正確に情報を検索できるようになります。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-advanced-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-advanced-search.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502652.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502652?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/500262" target="_blank">Google 特定のサイトを検索してブロックする</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-block-search-sites.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-block-search-sites" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>検索エンジンの結果から特定のサイトをブロックする，ユーザーが不要な検索結果を除外できるようにする。 カスタム入力ブロック サイト。形式-zhihu -baidu Google 検索コンテンツをブロックするために使用されます</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-block-search-sites.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-block-search-sites.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500262.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500262?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/497317" target="_blank">GreasyFork強化に適した</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-link.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-link" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>スクリプトの詳細ページが追加され、クリックすると Web ページが開きます。，Webページをコピーする,タイヤ検索</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-link.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-link.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497317.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497317?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/506717" target="_blank">GreaysFork 強化する WebHook同期設定</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-webhook-sync-enhanced.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-webhook-sync-enhanced" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>このスクリプトは、スクリプト同期情報を迅速に入力するのに役立ちます。，複数の国の言語コードをバッチで追加します，選択ボックスを 1 つずつクリックして対応する URL に移動するのではなく、。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-webhook-sync-enhanced.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-webhook-sync-enhanced.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506717.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506717?color=%23990000&label=Installs">
                    <br>インストール
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
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>フォーラムでデフォルトで使用されます Markdown 形式，フォーマットのヘルプリンクを追加し、 Markdown ツールバーの紹介</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-markdown-toolbar.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-markdown-toolbar.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505164.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505164?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/501119" target="_blank">GreasyFork 脚本の評価を表示する</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-ranks.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-ranks" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>評価スコアをスクリプトリストに追加</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-ranks.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-ranks.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501119.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501119?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505215" target="_blank">GreasyFork 詳細検索</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-search" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>Googleを使って検索する GreasyFork そして SleazyFork 上的脚本 </td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-search.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505215.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505215?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/501880" target="_blank">GreasyFork ナビゲーションバーの強化</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-user-control-panel-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-user-control-panel-button" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>強化するgreasyforkナビゲーションバー,ユーザーリストを追加,ユーザーコンソールなど</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-user-control-panel-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-user-control-panel-button.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501880?color=%23990000&label=Installs">
                    <br>インストール
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
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>強化するgreasyfork,コードをコピーする，スクリプトのダウンロード，秒単位の正確な時間，ホームページのクリーンアップ，ワンクリックレポートについて話し合う，スクリプトリストジャンプコード追加ダウンロード コードの表示とコード参照ファイルの表示を美しくする，スクリプトアイコンを表示，アダルト スクリプトやその他の操作にジャンプします</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-utility-toolkit.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-utility-toolkit.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497346.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497346?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/506345" target="_blank">Greasyfork 通知アシスタント</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-discussion-watcher.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-discussion-watcher" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>あなたのスクリプトまたはあなたが参加しているディスカッションに対して新しい返信があったとき，スクリプトは、Web ページ上のモーダル ウィンドウに最新のディスカッション コンテンツを表示します。。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-discussion-watcher.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-discussion-watcher.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506345.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506345?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/498906" target="_blank">Web ページ上のキーワードを強調表示する+(推薦する)</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>Web ページ上のテキストを強調表示する</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498906.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498906?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/498905" target="_blank">Web テキストを強調表示する_ミニバージョン</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords-mini.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords-mini" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>スクロール時に動的に読み込まれるコンテンツを含む、Web ページ上のカスタム キーワードの強調表示</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords-mini.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords-mini.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498905.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498905?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505325" target="_blank">MiSSAV自動ログイン</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-auto-login-helper" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>検出 MisssAV 州，ログインしていない場合は自動的にログインします</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-auto-login-helper.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505325.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505325?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/497682" target="_blank">MissAVコレクションマネージャー</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-explorer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-explorer" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>missプレイリストのバックアップ，写真のダウンロードとビデオ情報の保存をサポート.ローカル Web ページをエクスポートする へのエクスポートをサポートwebdav</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-explorer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-explorer.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497682.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497682?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/506528" target="_blank">TissAV自動ログイン</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/thisav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/thisav-auto-login-helper" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>検出 TissAV 州，ログインしていない場合は自動的にログインします</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/thisav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/thisav-auto-login-helper.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506528.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506528?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/506730" target="_blank">JableTV自動ログイン</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/jable-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/jable-auto-login-helper" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>検出 JableTV 州，ログインしていない場合は自動的にログインします</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/jable-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/jable-auto-login-helper.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506730.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506730?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/504890" target="_blank">外国語ターミネータ</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/no-zh-terminator.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/no-zh-terminator" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>中国語以外の文字を認識する，長さがそれより長い場合は、 5 翻訳されたテキストには中国語が含まれていません，それを中国語に置き換えます,アクセスできる必要があるgoogleネットワーク</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/no-zh-terminator.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/no-zh-terminator.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504890.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504890?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/504880" target="_blank">小さなウィンドウでプレビュー</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/popup-window.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/popup-window" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>リンクをドラッグするとポップアップ ウィンドウでリンクが開きます，開く前にプレビューを提供します，使用 Edge 先読み技術。同時に、開いたときの小窓の後ろにアクリル効果を追加します。。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/popup-window.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/popup-window.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504880?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/498625" target="_blank">リンクの下線を削除する</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/remove-link-underlines.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/remove-link-underlines" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>Web リンクから下線を削除する</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/remove-link-underlines.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/remove-link-underlines.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498625.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498625?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/498904" target="_blank">Script Finderグリース モンキー スクリプト ファインダー</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/script-finder-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/script-finder-plus" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>Script Finder ユーザースクリプトです（userscript），あらゆる Web サイト上のユーザースクリプトの検索と管理に役立ちます</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/script-finder-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/script-finder-plus.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498904.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498904?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/497251" target="_blank">小さな上下スクロールボタン</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-button" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>ページの右側に上下のスクロール ボタンを追加します。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-button.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497251.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497251?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/500255" target="_blank">ワンタッチの上下ボタン</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-to-top-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-to-top-button" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>から変更されましたGreasyforkユーザースクリプト Web ページに上部と下部のボタンを追加する，長いページの上部または下部への素早い移動を容易にします。。 下にスクロールしたときにボタンの色の変更を追加しました，3数秒以内にスクロールがない場合は自動的に停止します</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-to-top-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-to-top-button.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500255.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500255?color=%23990000&label=Installs">
                    <br>インストール
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
                <a href="https://greasyfork.org/zh-CN/scripts/505208" target="_blank">ウェブページの翻訳——自動的に中国語に翻訳されます</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/translate-only-chinese.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/translate-only-chinese" target="_blank">
                    <mark>詳しい</mark>
                </a>
            </td>
            <td>中国語以外の各 Web ページの右下隅に記入してください（左下隅に調整可能）追加します google 翻訳アイコン，このバージョンは中国語翻訳版です，外国語のみを中国語に翻訳する，自動翻訳を追加する</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/translate-only-chinese.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/translate-only-chinese.user.js?style=social" alt="size">
                    <br>インストール
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505208.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505208?color=%23990000&label=Installs">
                    <br>インストール
                </a>
            </td>
            <td><sub>2024-08-26 11:37:23</sub></td>
            <td><sub>2024-09-08 08:45:21</sub></td>
             <td><sub>0.31.0.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    </tbody>
</table>
下の画像の緑色のボタンをクリックしてください

![Snipaste_2024-09-09_07-54-33.png](https://s2.loli.net/2024/09/09/nUdqo2KifQwYzpC.png)

ポップアップウィンドウで「インストール」をクリックし続けます，成功するとウィンドウが自動的に閉じます

この時点で、有効なページ更新が行われます，楽しめ!!!!

![1111.png](https://s2.loli.net/2024/09/09/b8sGXUgz3Q2v7ph.png)
