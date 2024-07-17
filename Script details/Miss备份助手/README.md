# [![Gmail](https://img.shields.io/badge/Contact-Gmail-yellow?svg&)](mailto:toniaiwanowskiskr47@gmail.com)人民的勤务员/UserScripts

[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5?svg&VasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII= "Greasyfork")](https://greasyfork.org/users/1169082)
![Total Installs](https://img.shields.io/badge/dynamic/json?color=0084ff&label=Total%20Installs&query=$.totalInstalls&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Total Daily Installs](https://img.shields.io/badge/dynamic/json?color=0084ff&label=Total%20Daily%20Installs&query=$.totalDailyInstalls&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Scripts Count](https://img.shields.io/badge/dynamic/json?color=1E90FF&label=Scripts%20Count&query=$.numScripts&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Good Ratings](https://img.shields.io/badge/dynamic/json?color=4CAF50&label=Good%20Ratings&query=$.totalGoodRatings&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Ok Ratings](https://img.shields.io/badge/dynamic/json?color=FF9800&label=Ok%20Ratings&query=$.totalOkRatings&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Bad Ratings](https://img.shields.io/badge/dynamic/json?color=F44336&label=Bad%20Ratings&query=$.totalBadRatings&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)

[![Github](https://img.shields.io/badge/Github-100000?svg&?logo=github&logoColor=white)](https://github.com/10086100886/)
![license](https://img.shields.io/github/license/10086100886/UserScripts?svg&?style=flat-square&color=4285dd&logo=github)
![star](https://img.shields.io/github/forks/10086100886/UserScripts?svg&?style=flat-square&label=Fork&color=4285dd&logo=github" "复刻数量")
![COM](https://img.shields.io/badge/CopyRight-人民的勤务员-4285dd" "人民的勤务员为人民服务")
![JavaScript](https://img.shields.io/badge/JavaScript-323330?svg&?logo=javascript&logoColor=F7DF1E "JavaScript")
![yiti](https://img.shields.io/github/issues/10086100886/UserScripts/github-chinese?style=flat-square&logo=github&label=Issue "议题")
![Support](https://img.shields.io/badge/Support-Chrome%7CFirefox%7CEdge-blue?svg&)
![**Tampermonkey OK**](https://img.shields.io/badge/Tampermonkey-OK-006989?labelColor=012A36)
![**Violentmonkey OK**](https://img.shields.io/badge/Violentmonkey-OK-006989?labelColor=4B3F72)
![**FireMonkey OK**](https://img.shields.io/badge/FireMonkey-OK-006989?labelColor=885053)
# Missav 批量提取器

## 简介

Missav 批量提取器是一个用于备份收藏夹和提取视频内容的工具。它可以抓取除了主页下的所有视频，并提供了自定义提取速度和文件命名的功能。下载完成后，生成一个包含图片的 `img` 文件夹和一个 `保存文件名.html` 命名网页文件，用于查看获得的视频信息。

## 功能

- **抓取视频**：可以抓取除主页外的所有视频，视频播放页面未测试过。
- **生成按钮**：在页面右上角生成一个按钮，用于启动提取操作。
- **自定义提取速度**：可以按自己想要的速度进行视频抓取。
- **下载完成后生成文件**：
  - **img 图片文件夹**：存储视频缩略图。
  - **jsonindex 网页文件**：包含视频信息，包括图片预览，点击图片可查看预览视频，点击标题可跳转到 Missav 自定义翻页和显示的页面。
- **批量下载**：支持合并所有片单进行批量下载。
- **批量操作**：支持从多个片单中批量提取视频。
- **自定义文件名称**：支持自定义保存文件的名称。
- **自定义提取速度**：可以设置提取视频的速度。
- **HTML 生成界面**：支持从网络获取图片并生成 HTML 界面。
- **高清大图下载**：支持下载高清大图。
- **支持WebDAV备份**：在下载同时保存到webdav。

## 更新记录

### 2024/6/14 更新

- **批量下载合并所有片单**：支持将所有片单合并进行批量下载。
- **除视频播放界面的所有视频提取**：提取除了视频播放界面外的所有视频。
- **批量选取片单进行批量操作**：支持批量选取片单进行操作。
- **去除弹出输入框**：去掉了不必要的输入框。
- **自定义下载保存文件名称**：支持自定义下载文件的名称。
- **自定义提取速度**：可以设置提取速度。
- **HTML 生成的界面支持从网络获取图片**：生成的 HTML 界面可以从网络获取图片。
- **下载高清大图**：支持下载高清大图。

## 已知问题
- **最后一页获取完成后提示获取超出最大页的信息**：实际不会去获取。

## 使用说明

1. **在视频分类下的首页使用**：打开视频分类页面的首页。
2. **点击右上角的按钮**：启动提取操作。
3. **设置提取速度**：根据需要调整提取速度。
4. **下载视频和图片**：提取完成后会生成文件和图片。
5. **查看 `jsonindex` 网页文件**：查看视频信息，点击图片查看预览，点击标题跳转到 Missav 页面。


