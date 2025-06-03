<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->

## 介绍

用于快速下载 Twitter 被屏蔽用户列表的用户脚本。它通过自动滚动并提取被屏蔽用户的信息，生成一个包含账号和用户名的 `.tsv` 文件，方便您备份和管理被屏蔽的账户。

---

## 功能

**自动获取屏蔽列表**：

- 脚本会自动遍历屏蔽账户页面的内容，并将账号信息保存到本地。

**文件下载**：

- 获取到的屏蔽账户信息会保存为 `.tsv` 格式，方便您在 Excel 或其他工具中查看和管理。

**按钮操作**：

- 页面右上角会生成一个 “Download Blocklist” 按钮，点击即可手动触发下载。

---

## 使用步骤

**添加书签**：

- 创建一个新的书签，命名为 `GetBlocklist`,将以下链接复制到书签的 URL 栏：或者你也可以直接访问[https://x.com/settings/blocked/all#DOWNLOAD](https://x.com/settings/blocked/all#DOWNLOAD)
- 创建一个新的书签，命名为 `GetMutedlist`, 将以下链接复制到书签的 URL 栏：或者你也可以直接访问[https://x.com/settings/muted/all#DOWNLOAD](https://x.com/settings/muted/all#DOWNLOAD)

**点击书签或按钮**：

- 点击您创建的书签，或者直接使用页面右上角生成的 “Download” 按钮。

**等待下载**：

- 脚本会自动遍历页面的屏蔽账户列表，并在遍历完成后弹出下载对话框。

---

## 文件格式

下载的文件为 `.tsv` 格式，内容如下：  
No. Account Name  
1 @example1 User Name 1  
2 @example2 User Name 2

<!--AUTHORS-->
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
