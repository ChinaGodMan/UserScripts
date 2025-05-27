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

### Better GitHub Co-Authors

此脚本的功能是为 GitHub 的 Pull Request（PR）页面添加一个按钮，用于快速将 PR 的参与者添加为 co-author，从而简化协作流程。  
修改了原始脚本,让其能够支持`TOKEN`访问用于避免`API`访问频率限制

### 功能说明

1. **首次运行初始化**  
   当脚本首次运行时，会提示用户输入 GitHub 的 Token。Token 将被安全地存储，用于后续调用 GitHub API。

2. **动态页面加载支持**  
   脚本会监听 GitHub 页面上的导航事件（`turbo:render`），以确保在页面切换时按钮仍然可用。

3. **用户界面**  
   在 PR 页面中添加一个按钮 "Add co-authors" 和状态提示框，用户可以通过该按钮一键添加 co-author 信息。

4. **自动获取参与者**
    - 脚本会从当前 PR 的以下来源中提取参与者：
        - PR 评论
        - Review 评论
        - 审核记录
    - 对每位参与者生成 `Co-authored-by` 格式的消息。

### 用法

1. 安装脚本
2. 打开 GitHub PR 页面。
3. 点击脚本自动生成的 "Add co-authors" 按钮。
4. 脚本会自动将参与者的 `Co-authored-by` 信息添加到提交消息中。

### 使用效果

![light.png](https://s2.loli.net/2025/05/27/NQwCL6jeE4WnBog.png)
![2025.05.27](https://s2.loli.net/2025/05/27/mnyBwaU46Jtfbse.png)

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
