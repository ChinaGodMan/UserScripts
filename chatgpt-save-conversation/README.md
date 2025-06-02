<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

# 聊天内容保存按钮脚本介绍

自动添加一个固定位置的“保存对话”按钮，点击按钮后会将当前页面中的聊天对话内容提取并保存为纯文本文件，方便用户导出和备份聊天记录。

---

## 主要功能

- **提取聊天消息**  
  从页面中所有包含 `data-message-id` 属性的元素提取对话内容，并根据 `data-message-author-role` 属性判断角色（User / Assistant 等）。

- **格式化文本**  
  按照 `角色名:` 换行，再写入对应的文本内容，每条消息之间用分隔符 `---` 分隔。

- **生成文件名**  
  优先使用网页标题的前40个字符作为文件名，若无标题则用对话开头前5个单词的小写拼接作为文件名，默认文件名为 `conversation.txt`。

- **下载文本文件**  
  利用 Blob 对象创建下载链接，模拟点击下载对话内容文本文件。

- **界面交互**  
  页面左上角固定显示一个小按钮，点击即可保存当前对话。

---

## 代码结构说明

- `capitalizeRole(role)`：根据角色字符串格式化角色名首字母大写。
- `generateFileName(messages)`：根据页面标题或首条消息生成文件名。
- `saveConversation()`：核心函数，收集消息内容、格式化、生成文件并触发下载。
- `createDownloadButton()`：创建并添加固定的“保存对话”按钮到页面。
- `waitForBody` 定时器：等待页面主体和聊天消息加载完成后执行按钮创建。

---

## 使用方式

1. 将此脚本添加至浏览器用户脚本管理器（如 Tampermonkey）。
2. 打开含聊天对话的网页（支持带有 `data-message-id` 和 `data-message-author-role` 属性的结构）。
3. 页面左上角出现“保存对话”按钮，点击后即可导出当前聊天内容为 `.txt` 文件。

---

## 适用场景

- 导出和备份网页聊天记录。
- 离线查看对话内容。
- 方便分享或存档聊天文本。

---

## 注意事项

- 依赖页面结构，要求消息节点带有 `data-message-id` 和 `data-message-author-role` 属性。
- 只提取带有 `.whitespace-pre-wrap` 或 `.markdown` 类的文本内容。
- 按钮样式简洁固定，位置可根据需要自定义修改。

---

此脚本适合需要快速保存网页聊天记录的用户使用。

<!--AUTHORS-->
## 💖 脚本参考或使用了以下脚本:
[🧑‍💻 **@Taylor-eOS**](https://github.com/Taylor-eOS) ⇒ 📜 _[Save Conversation](https://github.com/Taylor-eOS/tampermonkey-scripts/blob/main/save_conversation.user.js)_
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
