<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-->

徽章区域

<!--AUTO_SHIELDS_PLEASE_DONT_DELETE_IT-END-->

<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-->

头部更新历史区域

<!--AUTO_HISTORY_PLEASE_DONT_DELETE_IT-END-->

## Github 代码语言列表显示全部脚本

该脚本用于扩展 Github 上的代码语言列表，展示每一种语言，而不是将小部分隐藏在“其他”下方。它允许用户查看代码库中所有使用的语言及其对应的百分比，并提供设置 GitHub Token 以访问私有库的功能。

### 安装步骤

**设置 Github Token**：

-   如果你需要访问自己的私人仓库,可以输入 GitHub 的个人访问令牌（Personal Access Token）。
-   如果你没有 Token，请前往 [GitHub Token 生成页面](https://github.com/settings/tokens/new?description=GitHub-Linguist-Expand-UserScript&scopes=repo) 创建一个新的 Token，并确保勾选“repo”权限。

    **使用方法**：

-   安装后，进入任意一个 GitHub 仓库页面，脚本会自动在页面上显示所有使用的语言和它们的百分比。
-   在语言栏中点击任意语言名称，即可查看该语言对应的代码部分。

### 脚本功能

-   **展示所有语言**：  
    默认情况下，GitHub 只显示主要的语言，并将小比例的语言归类为“其他”。该脚本会取消这种限制，显示每个使用的语言以及其对应的百分比。

-   **语言颜色标识**：  
    每种语言都有一个对应的颜色标识，脚本通过 GitHub 官方的 [语言颜色表](https://github.com/github/linguist) 来确定语言的颜色，并在页面上显示。

-   **支持多语言**：  
    脚本支持多种语言，包括中文、英文、德文、西班牙文等，界面内容会根据用户的浏览器语言自动切换。

### 示例

在代码库页面中，你可以看到如下展示：

-   一个完整的语言条形图，显示各语言的占比。
-   每种语言的彩色标识，点击语言名称可以直接搜索该语言的代码。

### 项目地址

-   [Github 用户脚本仓库](https://github.com/ChinaGodMan/UserScripts)
-   如果您想报告此脚本的问题或建议新功能，请在[此处](https://github.com/ChinaGodMan/UserScripts/issues)创建新问题

### 贡献者

-   [Davoleo](https://greasyfork.org/zh-CN/users/857225) [Linguist Expand](https://greasyfork.org/scripts/442856) 脚本的初始创建者.

### 技术细节

-   **API 使用**：  
    该脚本通过 GitHub API 来获取仓库的语言信息，并动态渲染语言条形图和语言标签。
-   **兼容性**：  
    该脚本兼容主流浏览器，包括 Chrome、Firefox、Edge、Opera 和 Safari。

![1.png](https://s2.loli.net/2024/09/24/NlaYfsZdcW7hTr5.png)

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-->

关于区域

<!--AUTO_ABOUT_PLEASE_DONT_DELETE_IT-END-->

<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-->

帮助区域

<!--AUTO_HELP_PLEASE_DONT_DELETE_IT-END-->

<!--AUTO_ALLSCRIPT_PLEASE_DONT_DELETE_IT-->

全部脚本区域

<!--AUTO_ALLSCRIPT_PLEASE_DONT_DELETE_IT-END-->
