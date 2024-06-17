// ==UserScript==
// @name        MissAv批量备份收藏视频
// @namespace    https://github.com/10086100886/
// @version      0.9.2
// @description  从当前missav页面获取图片文件和视频信息，并合并结果后提供下载生成的网页文件
// @license MIT
// @author      人民的勤务员 <toniaiwanowskiskr47@gmail.com>  &  ChatGPT
// @match        https://missav.com/*

// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @icon         https://pic.616pic.com/ys_bnew_img/00/35/79/Gv93yQh7v6.jpg
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js
// @require      https://update.greasyfork.org/scripts/498124/1395427/video.js
// ==/UserScript==

(function() {
    'use strict';

var controlButton = createButton('备份', '10px', '10px');
    var buttonA = createButton('备份当前', '70px', '10px');
    var buttonB = createButton('备份片单', '130px', '10px');
    var buttonC = createButton('设置选项', '190px', '10px');

    // 设置按钮的背景颜色和样式
    controlButton.style.backgroundColor = 'blue'; // 控制按钮改为蓝色背景
    buttonA.style.backgroundColor = 'green';
    buttonB.style.backgroundColor = 'blue';
    buttonC.style.backgroundColor = 'red';

    // 隐藏初始的三个按钮
    buttonA.style.display = 'none';
    buttonB.style.display = 'none';
    buttonC.style.display = 'none';

    // 添加按钮到页面
    document.body.appendChild(controlButton);
    document.body.appendChild(buttonA);
    document.body.appendChild(buttonB);
    document.body.appendChild(buttonC);

    // 控制按钮的点击事件
    controlButton.addEventListener('click'， function() {
        if (buttonA.style.display === 'none') {
            // 显示三个按钮
            buttonA.style.display = 'block';
            buttonB.style.display = 'block';
            buttonC.style.display = 'block';
            controlButton.innerHTML = '隐藏';
        } else {
            // 隐藏三个按钮
            buttonA.style.display = 'none';
            buttonB.style.display = 'none';
            buttonC.style.display = 'none';
            controlButton.innerHTML = '备份';
        }
    });

    // 按钮A的点击事件
    buttonA.addEventListener('click'， function() {
           resetGlobalVariables();
     singleFileDownload =true;
      var currentDate = new Date();
    var currentTime = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + '_' +currentDate.getHours() + '-' + currentDate.getMinutes() + '-' + currentDate.getSeconds();
if (useDefaultTitle) {
            name = document.querySelector('meta[name="twitter:title"]').content;
        } else {
            const twitterTitleContent = document.querySelector('meta[name="twitter:title"]').content;
            name = prompt("请输入自定义名称：", twitterTitleContent);
            if (name === null) {
                name = twitterTitleContent;
            }
        }
     inurl = window.location.href;
        const defaultPages = getTotalPagesd();

        const totalPages = setTotalPage(defaultPages);
        allpages=totalPages
        //const delay = settime();
        if (totalPages ) {
            start(totalPages);
        }

    });

    // 按钮B的点击事件
    buttonB.addEventListener('click', function() {
          // 点击按钮时执行的操作
  resetGlobalVariables();
 fetchJsonData();


    });

    // 按钮C的点击事件
    buttonC.addEventListener('click', function() {
         createSettingsUI();

        // 这里可以添加按钮C点击后的具体操作，比如打开链接或执行其他动作
    });

    // 创建按钮的辅助函数
    function createButton(text, top, left) {
        var button = document.createElement('button');
        button.innerHTML = text;
        button.style.position = 'fixed';
        button.style.bottom = top;
        button.style.right = left;
        button.style.zIndex = '1000';
        button.style.padding = '10px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.color = '#fff';
        button.style.fontSize = '14px';
        button.style.fontWeight = 'bold';
        button.style.textAlign = 'center';
        button.style.width = '100px'; // 调整按钮宽度
        return button;
    }
// 全局变量
var allResults = []; // 存储所有的结果数据
var zip = new JSZip(); // 创建一个压缩文件实例
var allzip = new JSZip(); // 另一个可能的压缩文件实例
var imgFolder = zip.folder("img"); // 在 zip 中创建一个名为 "img" 的文件夹，用于存储图片文件
var allimgFolder = allzip.folder("img"); // 在 allzip 中创建一个名为 "img" 的文件夹，可能用于另一个压缩文件的图片存储
var ALLfiledown = false; // 标识是否所有文件已下载完毕的布尔变量
var videos = []; // 存储视频文件或相关信息的数组
var finalData = []; // 存储最终处理数据的数组
var inurl = ""; // 当前下载地址的变量
var pendingRequests = 0; // 当前待处理的请求数量
var delayTime; // 延迟时间，以毫秒为单位，用于控制异步操作的时间间隔
var currentPage = 1; // 当前处理的页数，可能用于分页处理或其他进度跟踪
var currentUrlIndex = 0; // 当前处理的 urls 数组中的索引位置
var name = ""; // 当前下载的名称
var urls = []; // 存储需要处理的网址数组
var a = -1; // 循环中的计数或索引，初始值为 -1
var allZipContents = []; // 存储所有压缩文件内容的数组
var singleFileDownload = false; // 标识是否为单个文件下载模式的布尔变量
var names = []; // 存储下载名称列表的数组
var allpages = 0; // 存储总页数或其他页面处理相关信息的变量
var modalContainer = null; // 存储模态窗口容器的全局变量，用于显示下载进度或其他信息
var shouldReplace = false; // 控制是否在下载大图时进行替换操作的布尔变量
var temporaryData = [];
var saveJson= false ;
var useDefaultTitle= true;
var pageCount= true;
var saveVideoInfo= false;
var   saveImage= false;
 ini();//读取配置
function resetGlobalVariables() {
    zip = new JSZip(); // 重置为一个新的 JSZip 实例，用于创建新的压缩文件
    allzip = new JSZip(); // 可能是另一个新的 JSZip 实例，用于其他用途的压缩文件
   if (saveImage) {
      imgFolder = zip.folder("img"); // 在 zip 中创建一个名为 "img" 的文件夹，用于存储图片文件
    allimgFolder = allzip.folder("img"); // 在 allzip 中创建一个名为 "img" 的文件夹，可能用于另一个压缩文件的图片存储
   }

    ALLfiledown = false; // 重置为 false，表示所有文件未下载完毕
    videos = []; // 清空存储视频文件或相关信息的数组
    finalData = []; // 清空存储最终处理数据的数组
    inurl = ""; // 重置当前下载地址为空字符串
    pendingRequests = 0; // 重置待处理的请求数量为 0

    currentPage = 1; // 重置当前处理的页数为 1
    currentUrlIndex = 0; // 重置当前处理的 urls 数组索引为 0
    name = ""; // 重置当前下载的名称为空字符串
    urls = []; // 清空存储需要处理的网址数组
    a = -1; // 重置循环中的计数或索引为 -1
    allZipContents = []; // 清空存储所有压缩文件内容的数组
    singleFileDownload = false; // 重置为 false，表示不是单个文件下载模式
    names = []; // 清空存储下载名称列表的数组
    allpages = 0; // 重置存储总页数或其他页面处理相关信息的变量为 0
    temporaryData = [];
}


async function processUrls() {
    //delayTime = 20;
    let completedTasks = 0; // 计数已完成的任务数量

    for (const url of urls) {
        a = a + 1; // 每次循环递增 a
        inurl = url;
        console.log("正在处理网址:", url, names[a]);
        name = names[a];

        try {
            const totalPages = await getTotalPages(url); // 等待 getTotalPages 返回结果
            console.log("Total pages for", url, ":", totalPages); // 显示总页数
            allpages = totalPages;
            start(totalPages); // 启动处理流程

            // 等待当前页面的请求完成
            while (pendingRequests > 0) {
                await new Promise(resolve => setTimeout(resolve, 100)); // 每隔 100 毫秒检查一次是否所有请求都已完成
            }

            completedTasks++; // 标记当前任务已完成
        } catch (error) {
            console.error("Error processing URL:", url, error); // 处理错误信息
            allpages = 1;
            start(1); // 启动处理流程
          while (pendingRequests > 0) {
                await new Promise(resolve => setTimeout(resolve, 100)); // 每隔 100 毫秒检查一次是否所有请求都已完成
            }
            completedTasks++; // 标记当前任务已完成
        }
    }

    // 如果所有任务都已完成且 urls 数组不为空，则调用下载函数
    if (completedTasks === urls.length && urls.length !== 0) {
        downloadAllZips();
    }
}




function getAllCookies() {
        return document.cookie;
    }

    // 获取指定 JSON 数据的函数




    function fetchJsonData() {
        const cookies = getAllCookies();
        console.log('Current page cookies:', cookies);

        // 构建 API URL
        const apiUrl = 'https://missav.com/api/playlists/dfe-057';

        // 发送带有 cookies 的请求
        GM_xmlhttpRequest({
            method: 'GET',
            url: apiUrl,
            headers: {
                'Cookie': cookies
            },
            onload: function(response) {
                if (response.status === 200) {
                    try {
                        const jsonResponse = JSON.parse(response.responseText);
                        if (jsonResponse && Array.isArray(jsonResponse.data)) {
                           createReportUI(jsonResponse.data, 500); // 假设每页显示 10 个项目

                         // 调用 processUrls 函数处理 URLs
                        } else {
                            console.error('Invalid JSON format or missing data array');
                        }
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                } else {
                    console.error('Request failed with status:', response.status);
                }
            },
            onerror: function(error) {
                console.error('Request failed:', error);
            }
        });
    }

  function processUrl(url) {
    // 检查是否包含 `page=` 参数
    var pageIndex = url.indexOf('page=');

    if (pageIndex !== -1) {
        // 找到 `page=` 参数并删除它及其后的所有内容
        var baseUrl = url.substring(0, pageIndex + 5); // +5 to include `page=`
        return baseUrl;
    } else {
        // 检查是否已有其他参数
        if (url.includes('?')) {
            // 有其他参数，添加 `&page=`
            return url + '&page=';
        } else {
            // 没有其他参数，添加 `?page=`
            return url + '?page=';
        }
    }
}
  function settime() {
    // 让用户输入延时时间
   delayTime = prompt("请输入每页请求的延时时间（毫秒）：", "1000");

    // 检查用户是否取消输入
    if (delayTime === null) {
        alert("输入取消");
        return;
    }

    delayTime = parseInt(delayTime);

    // 检查输入的延时时间是否有效
    if (isNaN(delayTime) || delayTime <= 0) {
        alert("请输入有效的延时时间（正整数）！");
        return;
    }

    // 返回有效的延时时间
    return delayTime;
}


   function getTotalPagesd() { // 获取总页数
    var totalPagesElement = document.querySelector('#price-currency');
    var totalPagesText = totalPagesElement ? totalPagesElement.innerText : '';
    var totalPages = parseInt(totalPagesText.replace('/', '').trim(), 10);

    // 如果获取总页数失败，则返回 1
    if (isNaN(totalPages) || totalPages <= 0) {
        totalPages = 1;
    }

    return totalPages;
}
  function getTotalPages(url) {
    return new Promise((resolve, reject) => {
        // 如果没有提供 URL，则使用当前页面的 URL
        if (!url) {
            url = window.location.href;
        }

        // 发起 GM_xmlhttpRequest 请求获取页面内容
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            headers: { "Cookie": document.cookie },
            onload: function(response) {
                // 处理响应
                if (response.status === 200) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(response.responseText, 'text/html');
                    const totalPagesElement = doc.querySelector('#price-currency'); // 替换为实际选择器
                    if (totalPagesElement) {
                        const totalPagesText = totalPagesElement.innerText;
                        const totalPages = parseInt(totalPagesText.replace('/', '').trim(), 10);
                        resolve(totalPages); // 成功时返回总页数
                    } else {
                        reject('Total pages element not found'); // 页面中没有找到总页数元素
                    }
                } else {
                    reject(`Request failed with status ${response.status}`); // 请求失败
                }
            },
            onerror: function() {
                reject('Request failed'); // 请求出错
            }
        });
    });
}


 // 设置总页数
function setTotalPage(defaultPages) {
    if (!pageCount) {
        return defaultPages;
    }

    const inputPages = parseInt(prompt(`当前 ${name} 总页数为 ${defaultPages}。请输入你想要抓取的页数（不输入抓取全部）：`, defaultPages), 10);
    if (isNaN(inputPages) || inputPages <= 0) {
        return defaultPages;
    }
    return inputPages;
}
   // 开始处理页面抓取
    function start(totalPages, callback) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    pendingRequests = pages.length;
    fetchPage(pages.shift(), pages, callback);
}

   // 点击按钮时执行操作



 // 异步获取页面内容
   function fetchPage(pageNum, pages, callback) {
    const pageUrl = `${processUrl(inurl)}${pageNum}`;
    console.log(`正在获取第 ${pageNum} 页的内容...`);
    //showModal(`正在获取${name} 第 ${pageNum} / ${allpages}页 `);
if (a !== -1) {
    showModal(`${a + 1}/${names.length} 正在获取 ${name} 第 ${pageNum} / ${allpages} 页`);
} else {
    showModal(`正在获取 ${name} 第 ${pageNum} / ${allpages} 页`);
}
    GM_xmlhttpRequest({
        method: "GET",
        url: pageUrl,
        headers: { "Cookie": document.cookie },
        onload: function(response) {
            if (response.status === 200) {
                processPageContent(response.responseText, pageNum, pages, callback);
            } else {
                pendingRequests--;
                checkIfComplete(callback);
                if (pages.length > 0) {
                    setTimeout(() => fetchPage(pages.shift(), pages, callback), delayTime);
                }
            }
        }
    });
}


  //获取视频信息
      function extractInformation(htmlContent) {
        let data = {}; // 创建一个空对象来存储提取的数据
       let xhr = new XMLHttpRequest();
    xhr.open('GET', htmlContent, false); // 同步方式打开请求
    xhr.send();


        // 创建一个虚拟的<div>元素，用于加载HTML内容
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML =  xhr.responseText;

        // 获取所有包含信息的父元素列表
        let parentElements = tempDiv.querySelectorAll('div.space-y-2 > div');

        if (parentElements.length > 0) {
            let allInfo = {}; // 初始化一个空对象来存储所有信息

            // 遍历每个包含信息的<div>元素
            parentElements.forEach(div => {
                let span = div.querySelector('span'); // 获取第一个<span>元素

                if (span) {
                    let category = span.textContent.trim(); // 获取主分类名称

                    if (!allInfo[category]) {
                        allInfo[category] = []; // 初始化一个空数组来存储该分类下的所有信息
                    }

                    // 查找所有的<a>元素和<time>元素
                    div.querySelectorAll('a, time').forEach(element => {
                        let info = {};

                        // 判断元素是否是<a>元素
                        if (element.tagName === 'A') {
                            info['name'] = element.textContent.trim(); // 获取名称
                            info['link'] = element.href.trim(); // 获取链接
                        } else if (element.tagName === 'TIME') {
                            info = element.textContent.trim(); // 如果是<time>元素，则直接保存其文本内容
                        }

                        // 添加信息对象到相应的主分类数组中
                        allInfo[category].push(info);
                    });

                    // 如果没有找到<a>元素，则尝试获取<span>标签内的文本内容
                    if (div.querySelectorAll('a').length === 0) {
                        let spanText = div.querySelector('span.font-medium');
                        if (spanText) {
                            let info = spanText.textContent.trim();
                            allInfo[category].push(info);
                        }
                    }
                }
            });

            // 提取class="mb-1 text-secondary break-all line-clamp-2"的内容
            let descriptionElement = tempDiv.querySelector('.mb-1.text-secondary.break-all.line-clamp-2');
            let descriptionContent = descriptionElement ? descriptionElement.textContent.trim() : '';
            allInfo['description'] = descriptionContent;

            // 将所有信息存储到data对象中
            data['videosinfo'] = allInfo;
              return allInfo;

        } else {
            console.error('未找到匹配的父元素 div.space-y-2');
           return null;
        }
    }

    // 使用XMLHttpRequest获取页面内容
    function fetchPageforinfo(url) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    extractInformation(xhr.responseText); // 将获取的页面内容传递给提取信息的函数
                } else {
                    console.error('请求失败：' + xhr.status);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    }


    // 处理获取到的页面内容
function processPageContent(htmlContent, pageNum, pages, callback) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const divElements = doc.querySelectorAll('div.relative.aspect-w-16.aspect-h-9.rounded.overflow-hidden.shadow-lg');

    if (divElements.length === 0) {
        console.log(`获取第 ${pageNum} 页失败。`);
    }

    divElements.forEach(div => {
        var imgUrl = div.querySelector('img').getAttribute('data-src');


if (shouldReplace) {
  imgUrl = imgUrl.replace('cover-t.jpg', 'cover-n.jpg');
}
        const video = {
            fileName: div.querySelector('a').getAttribute('alt'),
            imgUrl: imgUrl,
            videoUrl: div.querySelector('video').getAttribute('data-src'),
            markContent: Array.from(div.querySelectorAll('span')).map(mark => mark.textContent).join(' '),
            altText: div.querySelector('img').getAttribute('alt'),
            jumpUrl: div.querySelector('a').getAttribute('href'),

        };

 if(saveVideoInfo){
          video.info=extractInformation(video.jumpUrl);
   showBanner(`正在获取 ${video.fileName} 信息`);
   console.log()
        };



        if (video.imgUrl && video.altText) {
            videos.push(video);
             if (saveImage) {
            pendingRequests++;
            GM_xmlhttpRequest({
                method: 'GET',
                url: video.imgUrl,
                responseType: 'blob',
                onload: function(response) {
                    if (response.status === 200) {
                      if (saveImage) {
    if (singleFileDownload) {
        console.log("这是单个文件下载");
        imgFolder.file(`${video.fileName}.jpg`, response.response, { binary: true });
    } else {
        console.log("这是批量文件下载");
        allimgFolder.file(`${video.fileName}.jpg`, response.response, { binary: true });
    }
}

                        pendingRequests--;
                        checkIfComplete(callback);
                    } else {
                        pendingRequests--;
                        checkIfComplete(callback);
                    }
                }
            });
        }
          }else {
               pendingRequests--;
                        checkIfComplete(callback);
          }
    });

 showModal(`获取第 ${pageNum} 页的内容完成，等待 ${delayTime} 毫秒加载第 ${pageNum + 1} 页。`);
    pendingRequests--;
    checkIfComplete(callback);
    if (pages.length > 0) {
        setTimeout(() => fetchPage(pages.shift(), pages, callback), delayTime);
    } else {

    }
}

  closeModal();
function sanitizeFileName(name) {
    return name.replace(/[\\\/:*?"<>|]/g, '_');
}

function checkIfComplete(callback) {
    if (pendingRequests === 0) {

      const additionalInfo = {
    timestamp: new Date().toISOString(),
    inurl: inurl

};
        if (singleFileDownload) {
            showModal("获取完毕，正在生成单个文件...");

      finalData = {
    info: additionalInfo,
    video: videos
};
if (saveJson) {
          zip.file("data.json", JSON.stringify(finalData, null, 4));
}
            const jsonIndexContent = generateJsonIndexContent(finalData);
            const numFiles = Object.keys(zip.files).length; // 获取压缩包中文件的数量

         if (numFiles === 0) {
                    const htmlContent = jsonIndexContent; // 替换为实际的HTML内容
                    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
                    const htmlUrl = URL.createObjectURL(htmlBlob);

                    const a = document.createElement('a');
                    a.href = htmlUrl;
                    a.download = `${sanitizeFileName(name)}.html`;
                    a.click();
            closeModal();
                if (callback) callback();
         }else{
                      zip.file(`${sanitizeFileName(name)}.html`, jsonIndexContent);
    // 生成并下载单个文件
            zip.generateAsync({ type: "blob" }, function updateCallback(metadata) {
                const progress = metadata.percent.toFixed(2);
                showModal(`压缩进度: ${progress}%`);
            }).then(content => {
                const zipUrl = URL.createObjectURL(content);
                const a = document.createElement('a');
                a.href = zipUrl;
                a.download = `${name}.zip`;
                a.click();
                URL.revokeObjectURL(zipUrl);
                closeModal();
                if (callback) callback();
            });
                    }


        } else {
                finalData = {
    info: additionalInfo,
    video: videos
};
            if (saveJson) {
          allzip.file(`${sanitizeFileName(name)}.json`, JSON.stringify(finalData, null, 4));
            }
            const jsonIndexContent =  generateJsonIndexContent(finalData);;
            allzip.file(`${sanitizeFileName(name)}.html`, jsonIndexContent);
                  finalData = [];

                    videos= [];
            if (callback) callback();
        }

    }
}
function downloadAllZips() {
if (singleFileDownload === false) {
   showModal("获取完毕，正在生成压缩文件...");

    const numFiles = Object.keys(allzip.files).length; // 获取压缩包中文件的数量

         if (numFiles === 1) {
            // 如果压缩包中只有一个文件，直接处理该文件
            const fileName = Object.keys(allzip.files)[0]; // 获取唯一的文件名
            const file = allzip.files[fileName];

            // 根据文件类型获取文件内容
            file.async('blob').then(content => {
                // 创建一个Blob对象，并下载
                const blob = new Blob([content]);
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a); // 添加到文档中以确保点击有效
                a.click();
                document.body.removeChild(a); // 下载完成后移除元素
                URL.revokeObjectURL(url);
                closeModal();
            }).catch(error => {
                console.error('Error fetching file content:', error);
                closeModal();
            });

            return; // 结束函数执行，不生成压缩包
        }



    allzip.generateAsync({ type: "blob" }, function updateCallback(metadata) {
                const progress = metadata.percent.toFixed(2);
                showModal(`压缩进度: ${progress}%`);
            }).then(content => {
                const zipUrl = URL.createObjectURL(content);
                const a = document.createElement('a');
                a.href = zipUrl;
                a.download = `批量备份${urls.length}个片单.zip`;
                a.click();
                URL.revokeObjectURL(zipUrl);
                closeModal();
                if (callback) callback();
            });
    // 如果 singleFileDownload 等于假，则执行这里的代码
}


}

function showBanner(text) {
    // 查找现有的横幅元素
    var existingBanner = document.querySelector('.banner');

    if (existingBanner) {
        // 如果横幅已经存在，直接更新文本内容
        existingBanner.textContent = text;
    } else {
        // 如果横幅不存在，创建一个新的横幅
        var banner = document.createElement('div');
        banner.className = 'banner'; // 添加一个类名以便识别
        banner.style.position = 'fixed';
        banner.style.bottom = '20px'; // 距离底部的距离
        banner.style.left = '20px'; // 距离左侧的距离
        banner.style.width = 'auto'; // 根据文本自动调整宽度
        banner.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        banner.style.color = '#000'; // 黑色文本
        banner.style.textAlign = 'center';
        banner.style.padding = '20px';
        banner.style.borderRadius = '8px';
        banner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        banner.style.zIndex = '9999';
        banner.textContent = text; // 将传入的文本设置为横幅内容

        document.body.appendChild(banner); // 将横幅添加到文档的末尾

        // 3秒后移除横幅提示
        setTimeout(function() {
            banner.remove();
        }, 3000);
    }
}



// 创建或更新模态窗口
function showModal(message) {
    // 如果模态窗口不存在，则创建新的模态窗口
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        modalContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            padding: 20px;
        `;
        document.body.appendChild(modalContainer);
    }

    // 更新模态窗口的内容
    modalContainer.textContent = message;

    // 自动关闭模态窗口
    //setTimeout(closeModal, 2000);
}

// 关闭模态窗口
function closeModal() {
    // 如果模态窗口存在，则从 DOM 中移除
    if (modalContainer) {
        document.body.removeChild(modalContainer);
        modalContainer = null; // 将变量重置为 null，以便下次创建新的模态窗口
    }
}

// 创建JSONindex

function createReportUI(data, itemsPerPage) {
  temporaryData = data;
 // 创建全屏遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1); /* 全黑不透明背景 */
        z-index: 9999; /* 确保遮罩层位于所有内容之上 */
    `;
   // document.body.appendChild(overlay);

    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 1);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10000; /* 确保弹出框位于遮罩层之上 */
        padding: 20px;
        width: 80%;
        max-width: 800px;
    `;
    const title = document.createElement('h2');
    title.textContent =`当前共有片单数量: ${temporaryData.length}`;

    title.style.textAlign = 'center';
    modalContainer.appendChild(title);

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    modalContainer.appendChild(closeButton);

    closeButton.addEventListener('click', () => {

    //   document.body.removeChild(overlay); // 移除遮罩层
        document.body.removeChild(modalContainer); // 移除模态框
    });

    const tableContainer = document.createElement('div');
    tableContainer.style.cssText = `
        max-height: 60vh;
        overflow-y: auto;
    `;
    modalContainer.appendChild(tableContainer);

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '16px';
    tableContainer.appendChild(table);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    const checkboxHeader = document.createElement('th');
    checkboxHeader.textContent = '选择';
    checkboxHeader.style.textAlign = 'center';
    checkboxHeader.style.padding = '10px';
    headerRow.appendChild(checkboxHeader);

    const nameHeader = document.createElement('th');
    nameHeader.textContent = '片单';
    nameHeader.style.padding = '10px';
    nameHeader.style.width = '40%';
    headerRow.appendChild(nameHeader);

    const urlHeader = document.createElement('th');
    urlHeader.textContent = '地址';
    urlHeader.style.padding = '10px';
    urlHeader.style.width = '40%';
    headerRow.appendChild(urlHeader);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let currentPage = 1;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function generateTableData(page) {
        tbody.innerHTML = '';

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < endIndex && i < data.length; i++) {
            const row = document.createElement('tr');
            tbody.appendChild(row);
    // 序号列
        const indexCell = document.createElement('td');
        indexCell.textContent = i + 1; // 显示序号，从1开始
        indexCell.style.textAlign = 'center';
        indexCell.style.padding = '5px';
        row.appendChild(indexCell);
            const checkboxCell = document.createElement('td');
            checkboxCell.style.textAlign = 'center';
            checkboxCell.style.padding = '5px';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `checkbox_${i}`;
            checkbox.value = i;
            checkboxCell.appendChild(checkbox);
            row.appendChild(checkboxCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = data[i].name;
            nameCell.style.padding = '10px';
            nameCell.style.borderBottom = '1px solid #ddd';
            row.appendChild(nameCell);

const urlCell = document.createElement('td');
const fullUrl = "https://missav.com/playlists/" + data[i].key;
const link = document.createElement('a');
link.textContent = fullUrl;
link.href = fullUrl;
link.target = '_blank'; // 在新标签页中打开链接
urlCell.appendChild(link);
urlCell.style.padding = '10px';
urlCell.style.borderBottom = '1px solid #ddd';
row.appendChild(urlCell);
        }
    }

    generateTableData(currentPage);

    const paginationContainer = document.createElement('div');
    paginationContainer.style.marginTop = '20px';
    paginationContainer.style.textAlign = 'center';
    modalContainer.appendChild(paginationContainer);

    const prevButton = document.createElement('button');
    prevButton.textContent = '上一页';
    prevButton.style.marginRight = '10px';
    prevButton.disabled = true;

    const pageIndicator = document.createElement('span');
    pageIndicator.style.marginRight = '10px';
    updatePageIndicator();
    paginationContainer.appendChild(pageIndicator);

    const nextButton = document.createElement('button');
    nextButton.textContent = '下一页';
    nextButton.style.marginLeft = '10px';
    if (totalPages <= 1) {
        nextButton.disabled = true;
    }

    prevButton.addEventListener('click', () => {
        currentPage--;
        generateTableData(currentPage);
        updatePaginationButtons();
        updatePageIndicator();
    });

    nextButton.addEventListener('click', () => {
        currentPage++;
        generateTableData(currentPage);
        updatePaginationButtons();
        updatePageIndicator();
    });

    function updatePaginationButtons() {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    function updatePageIndicator() {
        pageIndicator.textContent = `第 ${currentPage}/${totalPages} 页`;
    }
 const selectAllButton = document.createElement('button');
selectAllButton.textContent = '全部选择';
selectAllButton.style.marginRight = '10px';
selectAllButton.style.marginTop = '20px';
selectAllButton.style.padding = '10px 20px';
selectAllButton.style.fontSize = '16px';
selectAllButton.style.backgroundColor = '#007bff';
selectAllButton.style.color = '#fff';
selectAllButton.style.border = 'none';
selectAllButton.style.borderRadius = '5px';
selectAllButton.style.cursor = 'pointer';
selectAllButton.style.float = 'left';
    modalContainer.appendChild(selectAllButton);

let selectAll = true;

selectAllButton.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll;
    });

    if (selectAll) {
        selectAllButton.textContent = '取消选择';
    } else {
        selectAllButton.textContent = '全部选择';
    }

    selectAll = !selectAll;
});
//

    const confirmButton = document.createElement('button');
    confirmButton.textContent = '确认选择';
    confirmButton.style.marginTop = '20px';
    confirmButton.style.padding = '10px 20px';
    confirmButton.style.fontSize = '16px';
    confirmButton.style.backgroundColor = '#007bff';
    confirmButton.style.color = '#fff';
    confirmButton.style.border = 'none';
    confirmButton.style.borderRadius = '5px';
    confirmButton.style.cursor = 'pointer';
    confirmButton.style.float = 'right';
    modalContainer.appendChild(confirmButton);

    document.body.appendChild(modalContainer);

confirmButton.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let anyCheckboxChecked = false;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {

            const index = parseInt(checkbox.value, 10);
            if (index >= 0 && index < temporaryData.length) {
                // 检查 temporaryData[index] 是否为 undefined 或 null
                if (temporaryData[index]) {
                    // 将选中的名称和URL推送到全局变量
                    names.push(temporaryData[index].name);
                    urls.push("https://missav.com/playlists/"+temporaryData[index].key);
                  anyCheckboxChecked = true;
                } else {
                    console.error(`temporaryData[${index}] is undefined or null.`);
                }
            } else {
                console.error(`Index ${index} is out of bounds for temporaryData.`);
            }
        }

    });

 document.body.removeChild(modalContainer);
//  document.body.removeChild(overlay);
       if (anyCheckboxChecked) {

        processUrls();
    }

});
}
function ini() {
  delayTime= GM_getValue('delayTime', 1000); // 从GM存储中读取延迟时间
   shouldReplace=GM_getValue('shouldReplace', false); // 从GM存储中读取状态
  saveJson=GM_getValue('saveJson', false); // 从GM存储中读取状态
 useDefaultTitle = GM_getValue('useDefaultTitle', true);
  pageCount= GM_getValue('pageCount', true);
saveVideoInfo= GM_getValue('saveVideoInfo', false);
  saveImage= GM_getValue('saveImage', true);

}
 // 创建设置界面
function createControl(tagName, attributes = {}, styles = {}, parent = document.body) {
    const element = document.createElement(tagName);

    // 设置属性
    for (const key in attributes) {
        element[key] = attributes[key];
    }

    // 设置样式
    Object.assign(element.style, styles);

    // 添加到父元素
    if (parent) {
        parent.appendChild(element);
    }

    return element;
}

function createSettingsUI() {
    const modalContainer = createControl('div', {
        className: 'settings-modal'
    }, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        padding: '20px',
        width: '400px',
        maxWidth: '80%'
    });

    const title = createControl('h2', {
        textContent: '设置'
    }, {
        textAlign: 'center'
    });
    modalContainer.appendChild(title);

    // 创建控件并添加到模态框
    const controls = [
        {
            type: 'checkbox',
            id: 'saveImageCheckbox',
            label: '保存图片',
            checked: GM_getValue('saveImage', true),
            onchange: function() { GM_setValue('saveImage', this.checked); }
        },
      {
            type: 'checkbox',
            id: 'saveJsonCheckbox',
            label: '保存JSON',
            checked: GM_getValue('saveJson', false),
            onchange: function() { GM_setValue('saveJson', this.checked); }
        },
        {
            type: 'checkbox',
            id: 'hdImageCheckbox',
            label: '高清大图',
            checked: GM_getValue('shouldReplace', false),
            onchange: function() { GM_setValue('shouldReplace', this.checked); }
        },
        {
            type: 'checkbox',
            id: 'defaultTitleCheckbox',
            label: '使用网页标题名保存',
            checked: GM_getValue('useDefaultTitle', true),
            onchange: function() { GM_setValue('useDefaultTitle', this.checked); }
        },
        {
            type: 'checkbox',
            id: 'saveVideoInfoCheckbox',
            label: '保存视频信息',
            checked: GM_getValue('saveVideoInfo', false),
            onchange: function() { GM_setValue('saveVideoInfo', this.checked); }
        },
        {
            type: 'checkbox',
            id: 'pageCountCheckbox',
            label: '自定义抓取页数',
            checked: GM_getValue('pageCount', true),
            onchange: function() { GM_setValue('pageCount', this.checked); }
        },
        {
            type: 'number',
            id: 'delayInput',
            label: '设置延迟（毫秒）',
            value: GM_getValue('delayTime', 1000),
            placeholder: '设置延迟（毫秒）',
            onchange: function() { GM_setValue('delayTime', this.value); },
            style: {
                width: '10px' // 设置输入框宽度为100%
            }
        }
    ];

    controls.forEach(control => {
        const input = createControl('input', {
            type: control.type,
            id: control.id,
            checked: control.checked,
            value: control.value,
            placeholder: control.placeholder,
            onchange: control.onchange
        }, {
            marginRight: '10px'
        });

        const label = createControl('label', {
            textContent: control.label,
            htmlFor: control.id
        }, {
            fontSize: '14px',
            marginLeft: '5px'
        });

        modalContainer.appendChild(input);
        modalContainer.appendChild(label);
        modalContainer.appendChild(createControl('br'));
    });

    // 关闭按钮
    const closeButton = createControl('button', {
        textContent: '关闭',
        onclick: () => {
          ini();
            document.body.removeChild(modalContainer);
        }
    }, {
        marginTop: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        float: 'right'
    });

    modalContainer.appendChild(closeButton);

    // 将模态框添加到页面
    document.body.appendChild(modalContainer);
}
// 调用示例


})();


