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