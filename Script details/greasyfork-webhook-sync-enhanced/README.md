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

# GreasyFork - 增强WebHook同步设置
在GreasyFork上设置同步信息时，常常会遇到提交后查看时，发现同步信息并没有被设置成功，导致需要重新输入。这是网站的小问题之一。为了解决这个问题，这个脚本可以帮助你快速输入脚本同步信息，并批量增加多个国家的语言代码，而不用一个个地点击选择框再去对应的网址。

## 功能特点
- **快速输入同步信息**：无需手动重复输入，可以快速地设置和同步信息。
- **批量增加语言代码**：支持批量添加多个国家/地区的语言代码，无需逐个选择。
- **支持多种格式**：可以根据需要选择不同的URL格式进行设置。

## 使用说明 (详情可以查看下方图片或上方视频)
- **脚本管理页面**：处于脚本管理页面,在下方增加一个按钮,点击之后可以对当前脚本进行管理。
- **网站顶部导航栏**：导航栏增加一个选项,用于点击之后自动获取Webhook同步的脚本.进行多个管理.
## 支持的格式
目前支持以下三种格式：

1. **从Markdown文件获取国家语言**  仅支持README_xxx.md
   `https://www.xxx.com/path/to/your/README_xxxxx.md `
3. **直接设置对应的国家语言（简洁格式）**  支持其他格式文件
    ` https://www.xxx.com/path/to/your/filename.md##ko` 
4. **直接设置对应的国家语言（详细格式）**支持其他格式文件
    ` https://www.xxx.com/path/to/your/filename.md##简体中文 (zh-CN)` 

代码如下: 如果你有更多的选择可以拓展
`let localeKey = url.includes('##') ? url.match(/##.*\((.*?)\)$/) || url.match(/##(.*?)$/) : url.match(/README_(.*?)\.md/)`

## 注意:
- 提交的本地化国家信息时,代码内必须存在头部声明 例如//@name:zh-CN,否则即使提交成功也是失败的!
- 脚本必须存在!否则同步失败,

## 项目与反馈

- **项目页面：** [GitHub 仓库](https://github.com/ChinaGodMan/UserScripts)
- **支持与问题反馈：** [报告问题](https://github.com/ChinaGodMan/UserScripts/issues)

![sync.png](https://s2.loli.net/2024/09/04/oYGt17AV9MD43w6.png)
![nav.png](https://s2.loli.net/2024/09/04/S29ePTaR78uBsrF.png)
