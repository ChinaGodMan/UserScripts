# **🛠️   GrreasyFork 用户脚本数据可视化 更新日志**


### **📅 2024-09-19 12:56:19- Ver 1.1.1.0**
**修改**: •修改`chart.js`为首次加载,加载完成后保存在`localStorage`无需每次重复加载

---

### **📅 2024-09-19 08:25:19- Ver 1.1.0.0**
**修复**: • 修复图表一些问题<br>

| 修改前                                                            | 修改后                                                            |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
|                                                                   |
| ![修改前.png](https://s2.loli.net/2024/09/19/A6KoYdv5nbRkMCF.png) | ![修改后.png](https://s2.loli.net/2024/09/19/2UCM18tuWXirgxB.png) |
| ![修改前.gif](https://s2.loli.net/2024/09/19/khLXwEFQI58qjdZ.gif) | ![修改后.gif](https://s2.loli.net/2024/09/19/azlGiIBEg2SAFPc.gif) |

---

### **📅 2024-09-18 11:01:32- Ver 1.0.0.0**
**增加**: •增加了原作者[138 Aspen](https://greasyfork.org/zh-CN/users/1177387)另外脚本[Displays the number of scripts published by the user, the total number of installations](https://greasyfork.org/zh-CN/scripts/482623)里面的从当前网页获取用户数据,可以在脚本内或者脚本菜单中设置从JSON数据获取还是从当前页面获取脚本数据默认向GreasyFrok下载用户数据<br>
**修改**: •~~修改`chart.js`为@require 加载,无需每次重复加载~~Greasyfork不允许使用未经批准的外部脚本<br>
**修改**: •修改从网络获取用户数据时,按照总安装量由高到低排序<br>
**修改**: •修改寻找用户ID的表达式为`/(\d+)/`,兼容[Greasyfork 糊裱匠](https://greasyfork.org/zh-CN/scripts/497346)`清除链接无用字符功能`<br>

---
