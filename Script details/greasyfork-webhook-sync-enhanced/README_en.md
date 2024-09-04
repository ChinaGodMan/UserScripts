
<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center">
    <h1>GreaysFork 增强 WebHook同步设置</h1>
    <p>「 这个脚本可以帮助你快速输入脚本同步信息，并批量增加多个国家的语言代码，而不用一个个地点击选择框再去对应的网址。 」</p>
    <p>Download：<a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-webhook-sync-enhanced">Github</a> | ⭐<a
            href="https://greasyfork.org/zh-CN/scripts/506717">Greasy
            Fork</a></p><details><summary>更新记录</summary><ul>
<li><strong>2024/9/4 11:52 - Ver: 1.0.0.0</strong> <em>初始版本.欢迎使用.</em></li>
</ul></details> 
    <img src="https://images.weserv.nl/?url=https://github.com/ChinaGodMan/UserScriptsHistory/raw/main/stats/506717.png">
</div></center>

<video src="https://github.com/ChinaGodMan/UserScripts/raw/main/Script%20details/greasyfork-webhook-sync-enhanced/preview/video.mp4"
       poster="https://s2.loli.net/2024/09/04/S29ePTaR78uBsrF.png"
       width="320" height="240" controls loop>
</video>

# GreasyFork - Enhanced WebHook Synchronization Settings

When setting up synchronization information on GreasyFork, you might often find that after submitting, the sync information hasn't been successfully saved, requiring you to re-enter it. This is one of the small issues with the website. To solve this problem, this script helps you quickly input script synchronization information and batch-add multiple country language codes without having to click on each checkbox and then go to the corresponding URL.

## Features
- **Quick Input of Synchronization Information**: No need to manually repeat input, allowing you to quickly set and sync information.
- **Batch Add Language Codes**: Supports batch addition of multiple country/region language codes without the need to select each one individually.
- **Supports Multiple Formats**: You can choose different URL formats for setup based on your needs.

## Instructions (For more details, refer to the images below or the video above)
- **Script Management Page**: On the script management page, an additional button is added at the bottom. After clicking it, you can manage the current script.
- **Website Top Navigation Bar**: Adds an option to the navigation bar that, when clicked, automatically retrieves the WebHook synchronized scripts for multiple management.

## Supported Formats
Currently, the following three formats are supported:

1.  **Get Country Language from Markdown File**: Only supports `README_xxx.md`.
   `https://www.xxx.com/path/to/your/README_xxxxx.md `
2. **Directly Set Corresponding Country Language (Simple Format)**: Supports other format files.
    ` https://www.xxx.com/path/to/your/filename.md##ko` 
3. **Directly Set Corresponding Country Language (Detailed Format)**: Supports other format files.
    ` https://www.xxx.com/path/to/your/filename.md##简体中文 (zh-CN)` 

Example code: If you have more options, you can extend it.
`let localeKey = url.includes('##') ? url.match(/##.*\((.*?)\)$/) || url.match(/##(.*?)$/) : url.match(/README_(.*?)\.md/)`

## Attention:
- When submitting localized country information, there must be a header declaration such as//@ name: zh CN in the code, otherwise even if the submission is successful, it will still fail!
- The script must exist! Otherwise, synchronization will fail,

## Project and Feedback

- **Project Page:** [GitHub Repository](https://github.com/ChinaGodMan/UserScripts)
- **Support and Issues:** [Report Issues](https://github.com/ChinaGodMan/UserScripts/issues)

![sync.png](https://s2.loli.net/2024/09/04/oYGt17AV9MD43w6.png)
![nav.png](https://s2.loli.net/2024/09/04/S29ePTaR78uBsrF.png)