<!--AUTO_NAVIGATION_PLEASE_DONT_DELETE_IT-->
<!--AUTO_NAVIGATION_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->
<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-->
<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->
<!--TEXT-->

# GitHub 快捷翻译

该脚本通过监听键盘快捷键 `Ctrl + Q`，实现对选中文本进行翻译并将翻译结果替换到原文本框中的功能。翻译调用了 Google Translate API。

## 功能描述

1. **快捷键触发**：按下 `Ctrl + Q` 时触发翻译功能。
2. **选中文本翻译**：自动检测文本框中选中的文本，并将其翻译为目标语言。
3. **翻译结果替换**：将翻译后的文本替换到原文本框中选中的位置。
4. 支持对 GitHub 上的`issues`和`pull`页面的`markdown`的信息进行翻译。
5. 你可以在脚本自定义你需要的翻译语言,默认翻译为英文。`const translate = 'en'`

## 脚本逻辑

1. 监听键盘事件，判断是否按下了 `Ctrl + Q`。
2. 如果在目标文本框中检测到选中文本：
    - 提取选中的文本。
    - 调用 Google Translate API 进行翻译。
    - 用翻译结果替换原选中文本。
3. 如果未选中文本或未找到目标文本框，会在控制台输出提示信息。

<!--AUTHORS-->
<!--AUTHORS-END-->
<!--SCREENSHOT-->

![2025.03.20](https://s2.loli.net/2025/03/20/oCRakSZyIOmcpWX.gif)

<!--SCREENSHOT-END-->
<!--TEXT-END-->

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->
<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->
<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->
<!--FOOTER-->

<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center"><p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>更多用户脚本</strong></a> /<a href="#top">回到顶部↑</a></p></div></center>

<!--FOOTER--END-->
