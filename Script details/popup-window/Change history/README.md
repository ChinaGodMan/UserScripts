- **2024/9/02 05:34 - Ver:.2.4.0.18** 
  - 请求:[#527625](https://greasyfork.org/zh-CN/scripts/504880-small-window-preview/discussions/258301#comment-527625)<br><span style="color: blue;">添加功能:</span><br>*长按鼠标模式下按下键盘不触发预览窗口<br>拖拽模式下浏览器拖住拖拽链接到新标签打开,不会触发预览窗口*
- **2024/8/29 08:39 - Ver:.2.4.0.9** *添加拖拽时超时显示超时进度条,时间耗光取消拖拽打开预览窗口*
- **2024/8/29 06:28 - Ver:.2.4.0.8** *移出长按时检测鼠标移动监听器,改为监听鼠标进入拖拽状态取消打开预览窗口.[#526172](https://greasyfork.org/zh-CN/scripts/504880-small-window-preview/discussions/257270#comment-526172)*
- **2024/8/27 00:33 - Ver: 2.4.0.5** 
  - *[#526054](https://greasyfork.org/zh-CN/scripts/504880-small-window-preview/discussions/257270#comment-526054) BUG反馈:当打开一个链接的预览窗，然后点击原窗口焦点关闭预览窗之后再长按另外一个链接 , 有概率无法触发时间条打开预览窗<br>添加代码:`if (state.popupWindow) `当窗口存在时执行代码*
  

- **2024/8/25 04:59 - Ver: 2.4.0.2**
  - *[#257270](https://greasyfork.org/zh-CN/scripts/504880/discussions/257270) 添加长按时显示倒计时, 修复长按时间过短导致在拖拽时触发长按逻辑, 增加记住窗口位置*

- **2024/8/24 07:29 - Ver: 2.4**
  - *优化脚本<br>添加语言包*

- **2024/8/23 08:12 - Ver: 2.4**
  - *<优化脚本<br>添加长按链接弹出小窗口，用于兼容chrome插件 `Google Chrome 的超级拖拽 0.9.9`<br>修复点击小窗口右上角关闭按钮时，亚克力图层不关闭的问题*
