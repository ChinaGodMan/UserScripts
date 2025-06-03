<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

<!--AUTHORS-->
<!--AUTHORS-END-->
<!--SCREENSHOT-->

<!--SCREENSHOT-END-->
<!--TEXT-END-->

## 概述

根据浏览器窗口的宽度动态调整每行显示的视频数量，优化了YouTube视频网格布局。  
此脚本确保布局具有响应性，从而优化屏幕空间，提供更好的浏览体验。  
该脚本会计算最佳的视频数量（介于3到12之间），并应用必要的CSS覆盖。

> 无法保证此脚本长期有效。

## 快速开始

**使用脚本**：

- 在浏览器中访问[YouTube](https://www.youtube.com/)。
- 脚本会根据窗口大小自动调整视频网格。
- 调整浏览器窗口大小即可看到网格动态适配。
- 在URL后添加`?debug=1`（例如，`https://www.youtube.com/?debug=1`）可以启用调试日志。

## 功能

- **响应式网格**：根据窗口宽度调整每行显示的视频数量（3到12）。
- **无缝集成**：适用于YouTube主页及其他视频网格页面。
- **高效更新**：使用MutationObserver和事件监听器实现实时网格调整。
- **回退机制**：包括轮询和重试以确保与YouTube的动态加载兼容。

## 使用方法

- 脚本会在YouTube页面（`*://www.youtube.com/*` 和 `*://youtube.com/*`）上自动运行。
- 无需配置；网格会根据你的浏览器窗口宽度自动调整。
- 为了获得最佳性能，请避免同时运行多个网格修改脚本。

## 参数

- `videoWidth`: 340px（缩略图宽度，适用于3440x1440屏幕显示约9个视频）
- `margin`: 40px（左右总边距）
- `gap`: 10px（缩略图间距）

<!--RELATED-->
<!--RELATED-END-->
<!--HELP-->
<!--HELP-END-->
<!--FOOTER-->

<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center"><p><a href="https://github.com/ChinaGodMan/UserScripts#readme"><strong>更多用户脚本</strong></a> /<a href="#top">回到顶部↑</a></p></div></center>

<!--FOOTER--END-->
