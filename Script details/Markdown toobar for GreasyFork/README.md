这个脚本是 [wOxxOm](https://greasyfork.org/en/scripts/6779-markdown-toolbar-for-gf-and-uso/code?version=179573) 编写的脚本的一个分支，旨在使其适应新的 GF 布局。  
感谢他制作了如此重要的脚本。

- 常用格式化按钮（仅限 Markdown）
- （论坛）HTML 和 Markdown 格式化帮助链接
- CODE Markdown 按钮，用于将选中的文本包裹在 ` 或 ``` 中（如果选中了多行文本）。
- 默认情况下，新的评论使用 MARKDOWN 格式 - 也可以在您的个人资料设置中进行设置。

该脚本在 Tampermonkey 和 Violentmonkey 上经过测试并正常工作。  
不支持 Greasemonkey 的任何版本（脚本可能工作，但未经过测试）。

**注意事项：**

- 如果您遇到脚本问题，请在 [repo](https://github.com/darkred/Userscripts/issues) 中报告，始终欢迎 PR。  
- 另外，请注意，我并没有自己编写脚本：  
  我付出了努力，使由其他人编写的、比我更有经验的脚本在新的 GF 布局中正常工作。  
  我的目标是恢复其功能，仅此而已。  
- `.markup_choice` 单选按钮是网站的，而不是脚本的！  
  ![markup_choice](https://i.imgur.com/fUkqf9I.jpg)
- 已知问题：  
  - 目前用于在切换到预览标签时隐藏工具栏的方法不幸存在缺陷：  
    有时工具栏可能没有隐藏，或者之后没有恢复。  
    并且它被隐藏得比预期更早：点击预览时立即隐藏 - 而不是当预览标签本身获得红色焦点时才隐藏。

**修改：**
- 2024-08-04T08:59:11 `DOMContentLoaded` 有时会与其他脚本冲突，导致监听失败。已更改为 `load`。



**截图：**（见附件）

如果您有任何错误、修复建议或创意，请在我的 [GitHub repo](https://github.com/darkred/Userscripts) 上报告。

![截图 1](https://greasyfork.s3.us-east-2.amazonaws.com/ovrm7oyb7emsuy02mder765txu9d)  
![截图 2](https://greasyfork.s3.us-east-2.amazonaws.com/2y6vh1wst0mm2o24ywoyqc4fxqy2)  
![截图 3](https://greasyfork.s3.us-east-2.amazonaws.com/p3zqbf7mpmv06wqpc9ffnzdi74sz)  
![截图 4](https://greasyfork.s3.us-east-2.amazonaws.com/d2h03acaewidd0duft297r1g732c)
