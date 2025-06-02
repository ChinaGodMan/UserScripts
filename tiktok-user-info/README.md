<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

# TikTok 用户信息提取脚本

此脚本用于在 TikTok 用户页面上提取用户详细信息并显示额外的用户数据。包括用户 ID、地区、语言、账户创建时间、好友数等，同时提供下载用户头像的功能。

---

## 主要功能

1. **检测用户名变更**  
   通过监听 URL 和用户数据中的用户名，检测是否发生变更，如果变更则自动刷新页面。

2. **提取用户信息**  
   从页面中的 `__UNIVERSAL_DATA_FOR_REHYDRATION__` 脚本提取用户信息，包括：

    - 用户 ID
    - 地区及国旗
    - 语言及语言名称
    - 账户创建时间
    - 好友数量
    - 是否为卖家
    - 是否为组织账户
    - 用户名修改时间
    - 昵称修改时间

3. **下载用户头像**  
   提供一个按钮，点击后可直接下载用户头像，保存为带时间戳的 `.jpg` 文件。

4. **动态界面显示**  
   在用户页面的分享标题容器中，动态插入一个信息框，显示提取的详细数据。

---

## 使用方式

1. **安装脚本**  
   将代码复制到浏览器用户脚本管理工具（如 Tampermonkey）。

2. **打开 TikTok 用户页面**  
   例如 `https://www.tiktok.com/@username`。

3. **查看用户数据**  
   页面加载完成后，会自动显示额外的用户信息框，点击“Download Profile Pic”按钮可以下载头像。

---

## 注意事项

- **页面结构依赖**  
  本脚本依赖 TikTok 当前的页面 DOM 结构，若 TikTok 更新页面结构，脚本可能需要修改。

- **数据来源**  
  数据来源于 `__UNIVERSAL_DATA_FOR_REHYDRATION__` 脚本标签，若此标签不存在，脚本将无法运行。

- **头像下载依赖**  
  下载功能依赖 `GM_download`，需要支持 Greasemonkey / Tampermonkey。

---

## 示例

信息框包含以下内容：

- 用户 ID
- 地区（带国旗）
- 语言（带全名）
- 账户创建时间
- 好友数
- 卖家与组织账户状态
- 用户名和昵称修改时间
- 用户头像下载按钮

<!--AUTHORS-->
## 💖 脚本参考或使用了以下脚本:
[🧑‍💻 **@bruddaa**](https://github.com/bruddaa) ⇒ 📜 _[TikTok User Info](https://github.com/bruddaa/UserScripts/blob/main/TikTok%20User%20Info/script.js)_
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
