
<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">

<h2><a href="https://greasyfork.org/zh-CN/scripts/424966">网页翻译——翻译为中文</a>修改脚本为自动翻译.无需点击或者按键</h2>
<h2>特别说明</h2>
<ul>
    <li>
        <p><span style="color: red; --darkreader-inline-color: #f61c1c;" data-darkreader-inline-color="">已适配 PC
                端，移动端</span></p>
    </li>
    <li>
        <p><span style="color: red; --darkreader-inline-color: #f61c1c;"
                data-darkreader-inline-color="">该版本主要只针对外语翻译为中文，如果你需要多种语言的互相翻译，请直接下载原脚本：</span><a
                href="https://greasyfork.org/zh-CN/scripts/398746-%E7%BD%91%E9%A1%B5%E7%BF%BB%E8%AF%91">网页翻译</a></p>
    </li>
</ul>
<h2>1 功能介绍</h2>
<ul>
    <li>给每个非中文的网页在<span style="color: red; --darkreader-inline-color: #f61c1c;"
            data-darkreader-inline-color="">左下角</span>添加一个 google 翻译图标，在<span
            style="color: red; --darkreader-inline-color: #f61c1c;" data-darkreader-inline-color="">右下角</span>添加显示原网页按钮
    </li>
    <li>快捷键：点击油猴或者暴力猴扩展的图标，脚本下面有【设置快捷键】，点击进行设置</li>
</ul>
<h2>2 插件实现简介</h2>
<ul>
    <li>直接调用 Google 的翻译接口对非中文网页进行翻译.</li>
</ul>
<h2>3 使用注意</h2>
<ul>
    <li>由于脚本调用了 Google 的翻译接口，所以可能需要<span style="color: red; --darkreader-inline-color: #f61c1c;"
            data-darkreader-inline-color="">科学上网</span>手段（目前暂时不需要，可能后面谷歌的被墙了就要了）</li>
    <li>由于一些网站使用了 <span style="color: red; --darkreader-inline-color: #f61c1c;"
            data-darkreader-inline-color="">CSP</span>(如:github)，所以可能有些网站翻译不了。有些网站可以使用以下方法解决，使用扩展，先去掉 <span
            style="color: red; --darkreader-inline-color: #f61c1c;"
            data-darkreader-inline-color="">CSP</span>，就能够解决这类网站不能翻译的问题.下列扩展亲测可用： <ul>
            <li>可以直接到扩展商店搜索<span style="color: red; --darkreader-inline-color: #f61c1c;"
                    data-darkreader-inline-color="">Disable Content-Security-Policy </span>下载（方法来源: <a
                    href="/zh-CN/users/453123-andy-ao">@Andy AO</a>）</li>
            <li>或者<a href="https://www.crx4chrome.com/crx/16901/" rel="nofollow">点击跳转到 Crx4Chrome 下载 Disable
                    Content-Security-Policy 3.0.0</a>（方法来源: <a href="/zh-CN/users/453123-andy-ao">@Andy AO</a>）</li>
            <li>或者到油猴的<span style="color: red; --darkreader-inline-color: #f61c1c;"
                    data-darkreader-inline-color="">设置</span>里找<span
                    style="color: red; --darkreader-inline-color: #f61c1c;"
                    data-darkreader-inline-color="">安全</span>-&gt;<span
                    style="color: red; --darkreader-inline-color: #f61c1c;"
                    data-darkreader-inline-color="">如果站点有内容安全策略（CSP）则向其策略</span>-&gt;改为<span
                    style="color: red; --darkreader-inline-color: #f61c1c;"
                    data-darkreader-inline-color="">全部移除</span>(方法来源: <a href="/zh-CN/users/566096-xxxxue">@xxxxue</a>)
            </li>
        </ul>
    </li>
</ul>
## 使用帮助
### 安装浏览器
|                               推荐浏览器                                |                                                          安装管理器                                                           | 安装浏览器                                                                      |
| :---------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------- |
| <center> Chrome 或 基于 Chromium 内核的浏览器[![][chrome]][chrome_link] | <center>![.png][TM][Tampermonkey][Tampermonkey]  ![.png][vm][Violentmonkey][Violentmonkey]  ![.png][cat][ScriptCat][cat_link] | <center>  [![][chrome]][chrome_link]  [![][edge]][edge_link] [![][QQ]][QQ_link] |
|  <center>Safari 浏览器（macOS, iOS, iPadOS）[![][safari]][safari_link]  |                                 <center>![][Macaquer] [Macaque][Macaque] 或 ![][stayr] [Stay]                                 | <center>[![][safari]][safari_link]                                              |
| <center>Firefox 或 基于 Gecko 内核的浏览器[![][firefox]][firefox_link]  | <center>![.png][TM][Tampermonkey][Tampermonkey]  ![.png][vm][Violentmonkey][Violentmonkey]  ![.png][cat][ScriptCat][cat_link] | <center>[![][firefox]][firefox_link]                                            |
|         <center>          Opera 浏览器[![][opera]][opera_link]          | <center>![.png][TM][Tampermonkey][Tampermonkey]  ![.png][vm][Violentmonkey][Violentmonkey]  ![.png][cat][ScriptCat][cat_link] | <center>[![][opera]][opera_link]                                                |
|         <center>      Via 浏览器（Android）[![][via]][via_link]         |                              <center>                                               浏览器内自带                              | <center>[![][via]][via_link]                                                    |
|           <center>      X浏览器（Android）  [![][x]][x_link]            |                               <center>                                             浏览器内自带                               | <center>[![][x]][x_link]                                                        |
|       <center>       KIWI浏览器（Android）[![][kiwi]][kiwi_link]        | <center>![.png][TM][Tampermonkey][Tampermonkey]  ![.png][vm][Violentmonkey][Violentmonkey]  ![.png][cat][ScriptCat][cat_link] | <center>[![][kiwi]][kiwi_link]                                                  |
|         <center>       狐猴浏览器（Android）[![][le]][le_link]          | <center>![.png][TM][Tampermonkey][Tampermonkey]  ![.png][vm][Violentmonkey][Violentmonkey]  ![.png][cat][ScriptCat][cat_link] | <center>[![][le]][le_link]                                                      |
|                                                                         |                                                                                                                               |                                                                                 |

[Tampermonkey]:http://tampermonkey.net/ "篡改猴"
[Violentmonkey]:https://violentmonkey.github.io/ "暴力猴"
[Macaque]:https://macaque.app/ "猕猴"
[Macaquer]:https://img.xwyue.com/i/2024/08/02/66acc93b56b9f.png
[Stay]:https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171 "Stay-for-safari"
[stayr]:https://img.xwyue.com/i/2024/08/02/66acc93b56b6c.png
[opera]:https://img.xwyue.com/i/2024/08/02/66ac91cad9499.png
[opera_link]:https://www.opera.com "opera浏览器"
[edge]:https://img.xwyue.com/i/2024/08/02/66ac91cae4276.png
[edge_link]:https://www.microsoft.com/edge  "edge 浏览器"
[firefox]: https://img.xwyue.com/i/2024/08/02/66ac91cae7577.png
[firefox_link]:https://www.firefox.com "Firefox浏览器"
[chrome]: https://img.xwyue.com/i/2024/08/02/66ac91cae814c.png
[chrome_link]:https://gooogleweb.com/index.html "Chrome浏览器"
[QQ]: https://img.xwyue.com/i/2024/08/02/66ac91cae9ff7.png
[QQ_link]:https://browser.qq.com/ "QQ浏览器"
[safari]:https://img.xwyue.com/i/2024/08/02/66ac91cb0a2ed.png
[safari_link]:https://www.apple.com/vn/safari/ "Safari浏览器"
[via]:https://img.xwyue.com/i/2024/08/02/66ac91cb15181.png
[via_link]:https://viayoo.com/ "VIA浏览器"
[x]:https://img.xwyue.com/i/2024/08/02/66ac91cb1638a.png
[x_link]:https://www.xbext.com/ "X浏览器"
[vm]: https://img.xwyue.com/i/2024/08/02/66ac94776b711.png "暴力猴"
[cat]:https://img.xwyue.com/i/2024/08/02/66ac94776a4e6.png
[cat_link]:https://docs.scriptcat.org/ "脚本猫"
[TM]:https://img.xwyue.com/i/2024/08/02/66ac94776a4f8.png "篡改猴"
[le]:https://img.xwyue.com/i/2024/08/02/66ac9deb3647d.png
[le_link]:https://lemurbrowser.com/ "狐猴浏览器"
[kiwi]:https://img.xwyue.com/i/2024/08/02/66ac9deb33bc1.jpg
[kiwi_link]:https://kiwibrowser.com/ "KIWI浏览器"
<p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>更多用户脚本</strong></a> /
<a href="#top">回到顶部↑</a></p>