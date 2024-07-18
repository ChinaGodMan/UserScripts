# [![Gmail](https://img.shields.io/badge/Contact-Gmail-yellow?svg&)](mailto:toniaiwanowskiskr47@gmail.com)人民的勤务员/UserScripts

[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII= "Greasyfork")](https://greasyfork.org/users/1169082)
![Total Installs](https://img.shields.io/badge/dynamic/json?color=0084ff&label=Total%20Installs&query=$.totalInstalls&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Total Daily Installs](https://img.shields.io/badge/dynamic/json?color=0084ff&label=Total%20Daily%20Installs&query=$.totalDailyInstalls&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Scripts Count](https://img.shields.io/badge/dynamic/json?color=1E90FF&label=Scripts%20Count&query=$.numScripts&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Good Ratings](https://img.shields.io/badge/dynamic/json?color=4CAF50&label=Good%20Ratings&query=$.totalGoodRatings&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Ok Ratings](https://img.shields.io/badge/dynamic/json?color=FF9800&label=Ok%20Ratings&query=$.totalOkRatings&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)
![Bad Ratings](https://img.shields.io/badge/dynamic/json?color=F44336&label=Bad%20Ratings&query=$.totalBadRatings&url=https://raw.githubusercontent.com/10086100886/UserScripts/main/docs/total_installs.json)

[![Github](https://img.shields.io/badge/Github-100000?svg&logo=github&logoColor=white)](https://github.com/10086100886/)
![license](https://img.shields.io/github/license/10086100886/UserScripts?svg&style=flat-square&color=4285dd&logo=github)
![star](https://img.shields.io/github/forks/10086100886/UserScripts?svg&style=flat-square&label=Fork&color=4285dd&logo=github" "复刻数量")
![COM](https://img.shields.io/badge/CopyRight-人民的勤务员-4285dd" "人民的勤务员为人民服务")
![JavaScript](https://img.shields.io/badge/JavaScript-323330?svg&logo=javascript&logoColor=F7DF1E "JavaScript")
![yiti](https://img.shields.io/github/issues/10086100886/UserScripts/github-chinese?style=flat-square&logo=github&label=Issue "议题")
![Support](https://img.shields.io/badge/Support-Chrome%7CFirefox%7CEdge-blue?svg&)
![**Tampermonkey OK**](https://img.shields.io/badge/Tampermonkey-OK-006989?labelColor=012A36)
![**Violentmonkey OK**](https://img.shields.io/badge/Violentmonkey-OK-006989?labelColor=4B3F72)
![**FireMonkey OK**](https://img.shields.io/badge/FireMonkey-OK-006989?labelColor=885053)
## 脚本介绍

在其他地方下载的脚本，作者不知道是谁很不错，防范牛皮癣。用 ChatGPT 修改了下，让脚本在 PC 端浏览时可以使用快捷键复制，专防网页后台复制各种口令。该脚本与复制限制解除类脚本可能不兼容！

脚本生效时，会在网页右下角显示半透明小圆点，不同颜色对应不同状态，说明如下：

- **红色** : 拦截所有复制行为，并弹窗通知是否授权。
- **绿色** : 放行所有复制行为，等于脚本不运行。
- **橙色** : 临时解除拦截，该状态仅出现在手动复制时，用户完成复制后自动变为红色，恢复拦截。
- **红点默认不显示**，在检测到剪贴板写入行为后会显示 4s。这个时间你可以点击切换状态，选择是否放行这个网页的剪贴板写入行为。


