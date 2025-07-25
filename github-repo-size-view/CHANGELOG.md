# **🛠️ GitHub Repo Size+ 升级日志**

### **📅 2025.5.27.1**

**Fix**: 修复在储存库页面不显示快捷跳转按钮的问题[#137](https://github.com/ChinaGodMan/UserScripts/issues/137)，其他脚本导致页面元素变化<br>

---

### **📅 2025.5.16.1**

**Fix**: 修复在储存库页面不显示快捷跳转按钮的问题 <br>

---

### **📅 2025.04.25.1850**

**修复上个版本小问题**:快捷跳转>在开启自定义获取用户仓库数量时,默认只获取第一页<br>

---

### **📅 2025.04.22.1003**

**新增**:快捷跳转:自定义获取用户仓库数量和每页显示数量<br>
**新增**:固定头部导航栏:自定义启用<br>
**新增**:本地缓存:允许自定义刷新缓存的时间<br>

---

### **📅 2025.04.16.2350**

**新增**:[通知页面](https://github.com/notifications)支持系统`浅色模式`和`深色模式`<br>
**截图**:![2025.04.16](https://s2.loli.net/2025/04/16/LPuwO96n7eGgzFY.gif)<br>

---

### **📅 2025.04.16.1439**

**新增**:[通知页面](https://github.com/notifications)点击左侧仓库,直接显示指定仓库的信息<br>兼容`2025.04.15`版本在所有通知信息上悬浮的功能.<br>感谢:[qbmiller](https://github.com/qbmiller) 的脚本代码,[github_enhance](https://github.com/qbmiller/UserScripts) <br>Issue:[#111](https://github.com/ChinaGodMan/UserScripts/issues/111)<br>
**截图**:!![Image](https://github.com/user-attachments/assets/6bf713f9-4d17-4844-bd5d-36a0172af9fe)<br>

---

### **📅 2025.04.15.1536**

**新增**:[通知页面](https://github.com/notifications)显示仓库信息<br>感谢:[qbmiller](https://github.com/qbmiller) 的脚本代码,[github_enhance](https://github.com/qbmiller/UserScripts) <br>Issue:[#111](https://github.com/ChinaGodMan/UserScripts/issues/111)<br>
**截图**:![2025.04.15](https://s2.loli.net/2025/04/15/NuBUJ54zVjoWsrw.gif)<br>

---

### **📅 2025.03.16.0506**

**新增**:GitHub 全局导航栏固定 代码来自[GitHub 增强套件](https://greasyfork.org/scripts/529862)<br>
**截图**:![2025.03.16](https://s2.loli.net/2025/03/16/WrzHm1OaQYBFEkJ.png)<br>

---

### **📅 2024/10/07 01:53 - Ver 0.1.3.7**

**新增**:双因素验证码自动填充功能`Two-factor authentication` 方便快速填充,持续监听,直到触发验证....<br>
**新增**:用户资料页面的已星标仓库也添加显示仓库大小,`?tab=stars`下执行<br>
**修复**:用户主题不同,元素也不同,选择器更改为`document.querySelector('.jxTzTd')`<br>
**修复**:已登录用户如果`TOKEN `不为空,使用自己的列表 API`https://api.github.com/user/repos`.防止返回错误代码`401`<br>
**修复**:修复`代码搜索和仓库代码搜索`下会重复对一个仓库进行两次获取大小<br>

---

### **📅 2024/10/06 05:17 - Ver 0.1.3.6**

**新增**:已经获取的用户仓库列表保存在本地,`24h`刷新一次<br>
**新增**: 合并[github-ossinsight](https://greasyfork.org/zh-CN/scripts/456878) 脚本功能 ，并支持移动设备，设置为动态监听<br>
**新增**: 合并[Github 快捷查找活跃的 Forks 列表](https://greasyfork.org/zh-CN/scripts/494365) 脚本功能 并支持移动设备，设置为动态监听<br>
**新增**: 合并[GitHub Delete Repositories](https://greasyfork.org/zh-CN/scripts/500173) 脚本功能 在个人仓库和`?tab=repositories`页面快速删除 并支持移动设备，设置为动态监听<br>
**优化**: 检测器十秒找不到元素停止运行<br>

---

### **📅 2024/10/05 13:16 - Ver 0.1.3.5**

**修复**:CSS 在移动端小分隔条被错误隐藏：`d-none d-md-block border-top`→`border-top`

---

### **📅 2024/10/05 08:10 - Ver 0.1.3.4**

**新增**: 快捷跳转列表添加鼠标悬浮`Title`显示仓库基本信息<br>
**优化**: 现在可以显示用户的全部仓库，但不建议这么做，影响体验。<br> 在脚本的 343 行使用代码`getUserAllRepos(reposApi, headers, true, 1) ` <br>参数三为真时递归获取用户列表<br>参数四限制参数三为真时递归最大页数<br>
**修复**：列表重复添加问题<br>
**修复**：`if (maxPage !== 0 && page > maxPage) break` → `if (maxPage !== 0 && page == maxPage) break `

---

### **📅 2024/10/05 07:25 - Ver 0.1.3.3**

**新增**: GitHub 侧边栏跳转仓库比较繁琐,增加一个在仓库内快捷跳转用户的其他仓库<br>

| `红色` 为公开仓库 `绿色` 为私人仓库 `复刻` 复刻的仓库 (登录的用户,必须键入 TOKEN) | 新增演示 ~~仅显示第一页 30 个仓库,超出不会显示,目前够我自己使用的了~~ ` 0.1.3.4`已支持全部 |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
|                                                                                   |
| ![New.png](https://s2.loli.net/2024/10/05/NhexpPYWIwSvgrA.png)                    | ![1.gif](https://s2.loli.net/2024/10/05/fOGDTQ3SZzro4tj.gif)                               |

---

### **📅 2024/9/26 09:05 - Ver 0.1.3.2**

**优化**: 优化小标签<br>
**新增**: 不活跃开发横幅右下角显示最后一次`Push`距现在多久<br>

---

### **📅 2024/9/26 02:16 - Ver 0.1.3.1**

**优化**: 优化执行效率,提升加载速度<br>
**i18n**: zh,zh-HK,zh-MO,zh-SG<br>

---

### **📅 2024/9/25 10:06 - Ver 0.1.3.0**

**新增**: [Github - Inactive Development Warning](https://greasyfork.org/zh-CN/scripts/419645) 在仓库页面显示不活跃开发提醒。<br>
**i18n**: zh-CN,zh-TW,ja,ko,vi,en<br>

| 一年以上无更新                                                   | 半年内无更新                                                       |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ |
|                                                                  |
| ![years.png](https://s2.loli.net/2024/09/25/cL9GuhJCkK68lsV.png) | ![6months.png](https://s2.loli.net/2024/09/25/gxzAbUdr4W5BCcT.png) |

---

### **📅 2024/8/20 05:28 - Ver 0.1.2.26**

**新增**: [GitHub Repo Size Display](https://greasyfork.org/zh-CN/scripts/503821) 使用该脚本的设置界面。

---

### **📅 2024/8/13 00:19 - Ver 0.1.2.18**

**新增**: 增加脚本菜单 → 设置 GitHub Token 界面，无需在代码内修改。

---

### **📅 2024/8/12 21:56 - Ver 0.1.2.17**

**新增**: [#254059](https://greasyfork.org/zh-CN/scripts/502291/discussions/254059) 增加在用户资料仓库列表和组织列表显示仓库大小。

---

### **📅 2024/8/5 05:18 - Ver 0.1.2.8**

**修复**: [#254059](https://greasyfork.org/zh-CN/scripts/502291/discussions/254059) 原作者令牌失效导致无法访问公共仓库。修复方式：删除原作者令牌，GitHub 生成的公共令牌总是被清除，因此不再添加。

---

### **📅 2024/8/1 03:43 - Ver 0.1.2**

**修复**: 修复在搜索页面失效的问题。
**修复**: 修复查看其他仓库时不显示的问题（增加延时）。

---
