// ==UserScript==
// @name         Greasy Fork - 分析发布的脚本增强版本
// @namespace    millle@foxmail.com
// @version      9
// @description  在任何用户资料页和搜索页面显示每种评分的总数、总安装数/每日安装数以及发布的脚本总数。
// @author        hacker09
// @match        https://greasyfork.org/*
// @match        https://greasyfork.org/*/scripts?q=*
// @match        https://greasyfork.org/*/scripts/by-site/*
// @match        https://greasyfork.org/zh-CN/scripts?set=*
// @icon         https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://greasyfork.org/&size=64
// @require   https://cdn.jsdelivr.net/npm/jszip@3.7.1/dist/jszip.min.js
// ==/UserScript==

(async function() {
  'use strict';
   let link;
if (location.href.match(/org\/.*\/scripts\?set=/)) {
  // 如果 URL 中包含 org/ 任意字符 /scripts?set= 的部分，则条件成立
  console.log('URL 匹配成功',document.querySelector('link[href*= ".json"]').href);
 link = document.querySelector('link[href*=".json"]').href;

} else {
  console.log('URL 匹配失败');
  link = document.querySelector('link[href$=".json"]').href;
}


  const data = await (await fetch(link)).json(); //
    console.log(data);

 var LatestCreated, LatestUpdated, ok, bad, good, DailyTotal, TotalInstalls, ScriptsArray, element, SignedIN = ''; // 创建新变量

  document.head.insertAdjacentHTML('beforeend', '<style>.list-option:not(.list-current) {display: flex; flex-direction: row; align-items: center;} .list-option:not(.list-current) > span {position: relative; left: -7px;} .list-option.list-current > span {position: relative; left: 5px;}</style>'); // 添加一个空间

if (location.href.match(/org\/.*\/scripts\?set=/)) {
element = ".width-constraint:nth-child(2)";
    ScriptsArray = data;

  }else{  if (location.href.match(/org\/.*\/scripts/)) {
    element = ".width-constraint:nth-child(2)";
    ScriptsArray = data;
  } else {
    element = "#user-script-sets-section, #user-script-list-section";
   if (document.querySelector(".sign-in-link") === null) {
    // 如果不存在 .sign-in-link 元素
    var userProfileLinkElement = document.querySelector(".user-profile-link");
     var userProfileLink = userProfileLinkElement.querySelector("a").href;
      var userIdFromLink = getUserIdFromUrl(userProfileLink);
       var userIdFromlocalhelf = getUserIdFromUrl(location.href);
        if ( userIdFromLink === userIdFromlocalhelf) {
        ScriptsArray = data.scripts;
    } else {
      ScriptsArray = data.all_listable_scripts;
    }

} else {
    // 如果存在 .sign-in-link 元素
    ScriptsArray = data.all_listable_scripts;
}
  }

  }
  // 根据当前页面是否是脚本搜索页面以及用户是否已登录，获取当前页面元素



  function getUserIdFromUrl(url) {
    var regex = /users\/(\d+)/;
    var match = regex.exec(url);
    return match ? match[1] : null;
}

  // 计算各项数据
  LatestCreated = new Date(Math.max(...ScriptsArray.map(obj => new Date(obj.created_at))));
  LatestUpdated = new Date(Math.max(...ScriptsArray.map(obj => new Date(obj.code_updated_at))));
  ok = ScriptsArray.map(obj => parseInt(obj.ok_ratings, 10)).reduce((acc, curr) => acc + curr, 0);
  bad = ScriptsArray.map(obj => parseInt(obj.bad_ratings, 10)).reduce((acc, curr) => acc + curr, 0);
  good = ScriptsArray.map(obj => parseInt(obj.good_ratings, 10)).reduce((acc, curr) => acc + curr, 0);
  DailyTotal = ScriptsArray.map(obj => parseInt(obj.daily_installs, 10)).reduce((acc, curr) => acc + curr, 0);
  TotalInstalls = ScriptsArray.map(obj => parseInt(obj.total_installs, 10)).reduce((acc, curr) => acc + curr, 0);

  // 创建数组来存储不同状态的脚本条目HTML
  let notDeletedScripts = [];
let notDeletedCSS = [];
let notDeletedLibs = [];
let deletedHTML = [];

// 生成每个脚本条目的HTML
ScriptsArray.forEach(script => {
  const createdTime = convertToShanghaiTime(script.created_at);
  const updatedTime = convertToShanghaiTime(script.code_updated_at);
  const scriptName = script.code_url.endsWith('.user.js')
   ? createStyledSpan(`【JS】${script.name}`, '#FFFFFF', '#0000FF', '#FF0000', '#FFC0CB', script.deleted) // JS: 白色文字，蓝色背景，红色边框，粉红色圆球
    : script.code_url.endsWith('.user.css')
    ? createStyledSpan(`【CSS】${script.name}`, '#FFFFFF', '#FFA500', '#FF00FF', '#00FF00', script.deleted) // CSS: 白色文字，绿色背景，紫色边框，绿色圆球
    : createStyledSpan(`【库】${script.name}`, '#FFFFFF', '#FFA500', '#0000FF', '#00FF00', script.deleted); // 库: 白色文字，橙色背景，蓝色边框，橙色圆球
  const scriptHTML =`
  <a href="${script.url}" target="_blank" style="${script.deleted ? 'color: grey; text-decoration: line-through;' : ''}">
    <b>${scriptName}</b>
    <span>${script.deleted ? '已删除' : ''}</span>
    <span>创建: ${createdTime}</span>
    <span>更新: ${updatedTime}</span>
    <a href="${script.code_url}" target="_blank" style="color: green;">安装${script.version}</a>
    <a href="${script.code_url}" class="download-link" download="${script.name}">下载</a>
  </a>
<br>
  `;

function createStyledSpan(name, textColor = '#FFFFFF', bgColor = '#2D2D2D', outlineColor = '#FFC0CB', circleColor = '#FFC0CB', deleted = false) {
    if (deleted) {
        textColor = '#FF0000'; // 红色文字
        bgColor = '#2D2D2D';   // 灰色背景
        circleColor = '#FF0000'; // 红色小圆球
    }

    const outlineStyle = deleted ? '' : `outline: 2px solid ${outlineColor};`;
    const circleBgColor = circleColor;

    return `
        <span style="font-size: 15px; border-radius: 3px; background: ${bgColor}; color: ${textColor}; margin: 0px 4px; padding: 0 4px; ${outlineStyle}">
            <span style="width: 8px; height: 8px; display: inline-flex; margin-bottom: 1px; margin-left: 4px; border-radius: 50%; background: ${circleBgColor};"></span>
            ${name}
        </span>
    `;
}
  if (script.deleted) {
    deletedHTML.push(scriptHTML); // 将删除的脚本条目添加到删除数组
  } else {
    if (script.code_url.endsWith('.user.js')) {
      notDeletedScripts.push({
        html: scriptHTML,
        createdAt: script.created_at,
        upadataat: script.code_updated_at
      });
    } else if (script.code_url.endsWith('.user.css')) {
      notDeletedCSS.push({
        html: scriptHTML,
        createdAt: script.created_at,
        upadataat: script.code_updated_at

      });
    } else {
      notDeletedLibs.push({
        html: scriptHTML,
        createdAt: script.created_at,
        upadataat: script.code_updated_at

      });
    }
  }
});

// 对未删除的脚本按创建时间排序
notDeletedScripts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
notDeletedCSS.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
notDeletedLibs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

// 合并所有脚本条目HTML
const allScriptsHTML = `
  <section>
    <header>
      <h3>所有脚本</h3>
    </header>
    <section class="text-content">
      <ul>
        ${notDeletedScripts.map(script => script.html).join('')}
        ${notDeletedCSS.map(script => script.html).join('')}
        ${notDeletedLibs.map(script => script.html).join('')}
        ${deletedHTML.join('')}
      </ul>
      <button id="downloadAllButton">一键下载所有脚本</button>
    </section>

  </section>
`;
const color = '#ffcc00'; // 替换为你想要的颜色值
const csstotal = document.querySelectorAll('[data-css-available-as-js="true"]').length;
const libtotal = document.querySelectorAll('#user-library-script-list > li').length;
const jstotal = document.querySelectorAll('#user-script-list > [data-css-available-as-js="false"]').length;
const jstotalsearch = document.querySelectorAll('#browse-script-list > li[data-script-language="js"]').length;
const csstotalsearch = document.querySelectorAll('#browse-script-list > [data-css-available-as-js="true"]').length;
const sensitive = document.querySelectorAll('li[data-sensitive="true"]').length;
  // 将总计部分和所有脚本条目信息合并在一个<section>中，并将其插入到页面
document.querySelector(element).insertAdjacentHTML("afterbegin", `
    <section>
        <header>
            <h3><span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 统计</span></h3>
        </header>
        <section class="text-content">
            <ul>
               <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 所有脚本: ${ScriptsArray.length}</span><br>
               <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> JS: ${jstotal}   CSS:${csstotal}   LIB:${libtotal}</span><br>
               <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 每日安装数: ${DailyTotal.toLocaleString()}</span><br>
               <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 总安装数: ${TotalInstalls.toLocaleString()}</span><br>
                <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 总好评数: ${ok.toLocaleString()}</span><br>
                <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 总差评数: ${bad.toLocaleString()}</span><br>
                <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 总好评数: ${good.toLocaleString()}</span><br>
               <span style="font-size: 15px;border-radius: 3px;background: rgb(45, 45, 45);color: rgb(255, 255, 255);margin: 0px 4px;padding: 0 4px;outline: 2px solid ${color};"><span style="width: 8px;height: 8px;display: inline-flex;margin-bottom: 1px;margin-left: 4px;border-radius: 50%;background: ${color};"></span> 最近更新: ${convertToShanghaiTime(LatestCreated)}</span><br>
            </ul>
        </section>
        ${allScriptsHTML}
    </section>
`);

// https://update.greasyfork.org/scripts/437234/GreasyFork%20Total%20Scripts.user.js

  // 在侧边栏上添加每日安装总数、总安装总数和评分总数
  document.querySelector(".list-option").innerHTML += `<span>(${DailyTotal.toLocaleString()})</span>`;
  document.querySelector(".list-option:nth-child(2)").innerHTML += `<span>(${TotalInstalls.toLocaleString()})</span>`;
  document.querySelector(".list-option:nth-child(3)").innerHTML += `<span>(${parseInt(ok + bad + good).toLocaleString()})</span>`;

  // 转换时间为上海时间
  function convertToShanghaiTime(dateString) {
    const date = new Date(dateString);
    const options = { timeZone: 'Asia/Shanghai', hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleString('zh-CN', options);
  }
document.querySelectorAll('.download-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认的点击行为
    const url = this.getAttribute('href');
    const name = this.getAttribute('download');
    downloadScript(url, name);
  });
});
function downloadScript(url, name, zipInstance) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      if (zipInstance) {
        // 如果传入了 zipInstance，则将 blob 添加到压缩包中
        zipInstance.file(name, blob);

        console.log(blob);
      } else {
        // 如果未传入 zipInstance，则直接下载该脚本
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = name; // 设置下载的文件名
        document.body.appendChild(link);
        link.click(); // 模拟点击下载链接
        document.body.removeChild(link); // 下载完成后移除链接元素
      }
    })
    .catch(error => {
      console.error('下载脚本时出错：', error);
    });
}

document.getElementById('downloadAllButton').addEventListener('click', function() {
  // 创建一个新的 JSZip 实例
  var zip = new JSZip();
  const downloadButton = document.getElementById('downloadAllButton');
  downloadButton.textContent = '正在下载...'; // 更改按钮标题
let downloadedCount = 0;
  // 收集所有脚本的下载链接的 Promise 数组
  const downloadPromises = [];

  // 遍历所有脚本
  ScriptsArray.forEach(script => {

    const url = script.code_url;
    const scriptName = script.name;
    let filename;

    // 确定文件名
    if (url.endsWith('.user.css')) {
      filename = `${scriptName}.user.css`;
    } else if (url.endsWith('.user.js')) {
      filename = `${scriptName}.user.js`;
    } else {
      filename = `${scriptName}.js`;
    }

    // 添加下载每个脚本的 Promise
    downloadPromises.push(
      fetch(url)
        .then(response => response.blob())
        .then(blob => {

          zip.file(filename, blob);
          console.log(`Added ${filename} to zip`);
           downloadedCount++;
          downloadButton.textContent = `${downloadedCount}/${ScriptsArray.length}`;
        })
    );
  });

  // 等待所有下载完成
  Promise.all(downloadPromises)
    .then(() => {
      // 所有脚本下载完成后，生成压缩包并下载
      return zip.generateAsync({ type: 'blob' }); // 生成压缩包的 Blob 对象
    })
    .then(blob => {
      // 创建一个虚拟的链接（a标签）
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
    link.download = `${data.name}_${ScriptsArray.length}scripts.zip`;
      document.body.appendChild(link);
      link.click(); // 模拟点击下载链接
      document.body.removeChild(link); // 下载完成后移除链接元素
       downloadButton.textContent = '下载完成'; // 更改按钮标题为下载完成
    })
    .catch(error => {
      console.error('一键下载所有脚本时出错：', error);
    });
});


})();
