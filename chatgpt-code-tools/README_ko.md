<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

# 脚本功能与实现

代码块添加“保存代码”和“复制代码”按钮，以便快速保存或复制代码片段。

## 功能概述

### 1. **检测代码块**

- 自动为每个代码块添加操作按钮（避免重复添加）。

### 2. **添加操作按钮**

- **保存代码按钮**：

    - 基于代码块的语言（通过类名推断文件扩展名）。

    - 根据扩展名动态设置 MIME 类型。

    - 创建下载链接并触发下载。

- **复制代码按钮**：

    - 将代码片段复制到剪贴板。

    - 提供状态反馈（如“复制成功”或“复制失败”）。

### 3. **动态适配**

- 监听 DOM 的变化，自动为新增的代码块添加按钮。

### 4. **按钮样式与交互**

- 自定义按钮样式（背景色、边框、鼠标悬停效果）。

- 状态反馈机制：

    - 正常状态：蓝色按钮。

    - 工作中：绿色按钮显示状态（如“保存中...”或“已复制”）。

    - 错误状态：红色按钮显示错误信息。

<!--AUTHORS-->
## 💖 脚本参考或使用了以下脚本:
[🧑‍💻 **@CarpeNoctemXD**](https://github.com/CarpeNoctemXD) ⇒ 📜 _[ChatGPT Code Tools](https://github.com/CarpeNoctemXD/UserScripts/blob/main/chatgpt/chatgpt_code_tools.js)_
<!--AUTHORS-END-->
<!--SCREENSHOT-->

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
