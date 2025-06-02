<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

## 简介

用于自动处理需要年龄验证的网站，通过点击页面上的验证按钮或自动添加必要的 URL 参数，帮助用户无缝通过年龄验证页面，提升浏览体验。

---

## 功能

### 1. 验证按钮点击（`verifyButton`）

通过匹配网站域名和特定的 CSS 选择器，自动点击页面上的年龄验证按钮。

#### 核心功能

- **配置规则**
    - 使用 `config` 对象定义支持的网站域名及其对应的按钮选择器。
    - 支持特定网站的动态处理（如 DLsite 和 animate-onlineshop.jp）。
- **多次验证处理**

    - 针对部分需要每次访问都验证的网站（如 DLsite 的移动端版本），不保存验证状态。

- **自动点击逻辑**
    - 匹配当前网站的域名和路径。
    - 根据匹配结果找到对应的选择器并自动点击。

<!--AUTHORS-->
## 💖 脚本参考或使用了以下脚本:
[🧑‍💻 **@Vinfall**](https://github.com/Vinfall) ⇒ 📜 _[cnm.r18.user.js](https://github.com/Vinfall/UserScripts/blob/main/cnm.r18.user.js)_
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
