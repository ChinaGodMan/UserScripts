// ==UserScript==
// @name        MissAv批量备份收藏视频
// @namespace    https://github.com/100816100886
// @version 1.2.3.45
// @description  从当前missav页面获取图片文件和视频信息，并合并结果后提供下载生成的网页文件
// @license MIT
// @author      人民的勤务员 <toniaiwanowskiskr47@gmail.com>  &  ChatGPT
// @match        https://missav.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_openInTab
// @icon         https://pic.616pic.com/ys_bnew_img/00/35/79/Gv93yQh7v6.jpg
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js
// @require https://update.greasyfork.org/scripts/498124/1396763/video.js
// @require https://update.greasyfork.org/scripts/498149/1395619/%E4%BF%A1%E6%81%AF%E6%9F%A5%E7%9C%8B%E5%99%A8.js
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

(function () {
    'use strict'

    var controlButton = createButton('备份', '10px', '10px')
    var buttonA = createButton('备份当前', '70px', '10px')
    var buttonB = createButton('备份片单', '130px', '10px')
    var buttonC = createButton('设置选项', '190px', '10px')
    var webdavbutton = createButton('WebDav', '250px', '10px')
    // 设置按钮的背景颜色和样式
    controlButton.style.backgroundColor = 'blue' // 控制按钮改为蓝色背景
    buttonA.style.backgroundColor = 'green'
    buttonB.style.backgroundColor = 'blue'
    buttonC.style.backgroundColor = 'red'
    webdavbutton.style.backgroundColor = 'blue'
    // 隐藏初始的三个按钮
    buttonA.style.display = 'none'
    buttonB.style.display = 'none'
    buttonC.style.display = 'none'
    webdavbutton.style.display = 'none'
    // 添加按钮到页面
    document.body.appendChild(controlButton)
    document.body.appendChild(buttonA)
    document.body.appendChild(buttonB)
    document.body.appendChild(buttonC)
    document.body.appendChild(webdavbutton)
    // 控制按钮的点击事件
    controlButton.addEventListener('click', function () {
        if (buttonA.style.display === 'none') {
            // 显示三个按钮
            buttonA.style.display = 'block'
            buttonB.style.display = 'block'
            buttonC.style.display = 'block'
            webdavbutton.style.display = 'block'
            controlButton.innerHTML = '隐藏'
        } else {
            // 隐藏三个按钮
            buttonA.style.display = 'none'
            buttonB.style.display = 'none'
            buttonC.style.display = 'none'
            webdavbutton.style.display = 'none'
            controlButton.innerHTML = '备份'
        }
    })
    webdavbutton.addEventListener('click', function () {
        // 点击按钮时执行的操作
        WebDAVManager.listFilesAndFolders(webdavfold)


    })

    // 按钮A的点击事件
    buttonA.addEventListener('click', function () {
        resetGlobalVariables()
        singleFileDownload = true
        window.showLogContainer()
        var currentDate = new Date()
        var currentTime = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + '_' + currentDate.getHours() + '-' + currentDate.getMinutes() + '-' + currentDate.getSeconds()
        if (useDefaultTitle) {
            name = document.querySelector('meta[name="twitter:title"]').content
        } else {
            const twitterTitleContent = document.querySelector('meta[name="twitter:title"]').content
            name = prompt("请输入自定义名称：", twitterTitleContent)
            if (name === null) {
                name = twitterTitleContent
            }
        }
        inurl = window.location.href
        const defaultPages = getTotalPagesd()

        const totalPages = setTotalPage(defaultPages)
        allpages = totalPages
        //const delay = settime();
        if (totalPages) {
            start(totalPages)
        }

    })

    // 按钮B的点击事件
    buttonB.addEventListener('click', function () {
        // 点击按钮时执行的操作
        resetGlobalVariables()
        fetchJsonData()


    })

    // 按钮C的点击事件
    buttonC.addEventListener('click', function () {
        createSettingsUI()

        // 这里可以添加按钮C点击后的具体操作，比如打开链接或执行其他动作
    })

    // 创建按钮的辅助函数
    function createButton(text, top, left) {
        var button = document.createElement('button')
        button.innerHTML = text
        button.style.position = 'fixed'
        button.style.bottom = top
        button.style.right = left
        button.style.zIndex = '1000'
        button.style.padding = '10px'
        button.style.border = 'none'
        button.style.cursor = 'pointer'
        button.style.color = '#fff'
        button.style.fontSize = '14px'
        button.style.fontWeight = 'bold'
        button.style.textAlign = 'center'
        button.style.width = '100px' // 调整按钮宽度
        return button
    }
    // 全局变量
    var allResults = [] // 存储所有的结果数据
    var zip = new JSZip() // 创建一个压缩文件实例
    var allzip = new JSZip() // 另一个可能的压缩文件实例
    var imgFolder = zip.folder("img") // 在 zip 中创建一个名为 "img" 的文件夹，用于存储图片文件
    var allimgFolder = allzip.folder("img") // 在 allzip 中创建一个名为 "img" 的文件夹，可能用于另一个压缩文件的图片存储
    var ALLfiledown = false // 标识是否所有文件已下载完毕的布尔变量
    var videos = [] // 存储视频文件或相关信息的数组
    var finalData = [] // 存储最终处理数据的数组
    var inurl = "" // 当前下载地址的变量
    var pendingRequests = 0 // 当前待处理的请求数量
    var delayTime // 延迟时间，以毫秒为单位，用于控制异步操作的时间间隔
    var currentPage = 1 // 当前处理的页数，可能用于分页处理或其他进度跟踪
    var currentUrlIndex = 0 // 当前处理的 urls 数组中的索引位置
    var name = "" // 当前下载的名称
    var urls = [] // 存储需要处理的网址数组
    var a = -1 // 循环中的计数或索引，初始值为 -1
    var allZipContents = [] // 存储所有压缩文件内容的数组
    var singleFileDownload = false // 标识是否为单个文件下载模式的布尔变量
    var names = [] // 存储下载名称列表的数组
    var allpages = 0 // 存储总页数或其他页面处理相关信息的变量
    var modalContainer = null // 存储模态窗口容器的全局变量，用于显示下载进度或其他信息
    var shouldReplace = false // 控制是否在下载大图时进行替换操作的布尔变量
    var temporaryData = []
    var saveJson = false
    var useDefaultTitle = true
    var pageCount = true
    var saveVideoInfo = false
    var saveImage = false
    var downloadLog = {}
    var errorLogs = {}
    var downloadLogFileA = false // 这里设置为 true 时载日志
    var webdavfold = "missavsave"
    //var   webdavfold="1111";
    var savetowebdav = false
    var webdavUrl = ''
    var webdavUsername = ''
    var webdavPassword = ''
    var deleteSelected = false
    ini()//读取配置
    function resetGlobalVariables() {
        zip = new JSZip() // 重置为一个新的 JSZip 实例，用于创建新的压缩文件
        allzip = new JSZip() // 可能是另一个新的 JSZip 实例，用于其他用途的压缩文件
        if (saveImage) {
            imgFolder = zip.folder("img") // 在 zip 中创建一个名为 "img" 的文件夹，用于存储图片文件
            allimgFolder = allzip.folder("img") // 在 allzip 中创建一个名为 "img" 的文件夹，可能用于另一个压缩文件的图片存储
        }
        downloadLog = {}
        errorLogs = {}
        ALLfiledown = false // 重置为 false，表示所有文件未下载完毕
        videos = [] // 清空存储视频文件或相关信息的数组
        finalData = [] // 清空存储最终处理数据的数组
        inurl = "" // 重置当前下载地址为空字符串
        pendingRequests = 0 // 重置待处理的请求数量为 0

        currentPage = 1 // 重置当前处理的页数为 1
        currentUrlIndex = 0 // 重置当前处理的 urls 数组索引为 0
        name = "" // 重置当前下载的名称为空字符串
        urls = [] // 清空存储需要处理的网址数组
        a = -1 // 重置循环中的计数或索引为 -1
        allZipContents = [] // 清空存储所有压缩文件内容的数组
        singleFileDownload = false // 重置为 false，表示不是单个文件下载模式
        names = [] // 清空存储下载名称列表的数组
        allpages = 0 // 重置存储总页数或其他页面处理相关信息的变量为 0
        temporaryData = []
    }


    async function processUrls() {
        //delayTime = 20;
        let completedTasks = 0 // 计数已完成的任务数量

        for (const url of urls) {
            a = a + 1 // 每次循环递增 a
            inurl = url
            console.log("正在处理网址:", url, names[a])
            window.addToLog("处理:" + url + names[a], 'info')
            name = names[a]

            try {
                const totalPages = await getTotalPages(url) // 等待 getTotalPages 返回结果
                console.log("Total pages for", url, ":", totalPages) // 显示总页数
                window.addToLog(name + " 总页数:" + url + totalPages, 'info')
                allpages = totalPages
                start(totalPages) // 启动处理流程

                // 等待当前页面的请求完成
                while (pendingRequests > 0) {
                    await new Promise(resolve => setTimeout(resolve, 100)) // 每隔 100 毫秒检查一次是否所有请求都已完成
                }

                completedTasks++ // 标记当前任务已完成
            } catch (error) {
                console.error("Error processing URL:", url, error) // 处理错误信息
                allpages = 1
                start(1) // 启动处理流程
                while (pendingRequests > 0) {
                    await new Promise(resolve => setTimeout(resolve, 100)) // 每隔 100 毫秒检查一次是否所有请求都已完成
                }
                completedTasks++ // 标记当前任务已完成
            }
        }

        // 如果所有任务都已完成且 urls 数组不为空，则调用下载函数
        if (completedTasks === urls.length && urls.length !== 0) {
            downloadAllZips()
        }
    }




    function getAllCookies() {
        return document.cookie
    }

    // 获取指定 JSON 数据的函数




    function fetchJsonData() {
        const cookies = getAllCookies()
        //alert(cookies);
        console.log('Current page cookies:', cookies)

        // 构建 API URL
        const apiUrl = 'https://missav.com/api/playlists/dfe-057'

        // 发送带有 cookies 的请求
        GM_xmlhttpRequest({
            method: 'GET',
            url: apiUrl,
            headers: {
                'Cookie': cookies
            },
            onload: function (response) {
                if (response.status === 200) {
                    try {
                        const jsonResponse = JSON.parse(response.responseText)
                        if (jsonResponse && Array.isArray(jsonResponse.data)) {
                            createReportUI(jsonResponse.data, 500) // 假设每页显示 10 个项目

                            // 调用 processUrls 函数处理 URLs
                        } else {
                            console.error('JSON 格式无效')
                            showModal("JSON 格式无效", 2000)
                        }
                    } catch (error) {
                        console.error('Error parsing JSON:', error)
                        showModal("解析错误" + error, 2000)
                    }
                } else {
                    console.error('Request failed with status:', response.status)
                    showModal("解析错误", 2000)
                }
            },
            onerror: function (error) {
                showModal("解析错误" + error, 2000)
            }
        })
    }

    function processUrl(url) {
        // 检查是否包含 `page=` 参数
        var pageIndex = url.indexOf('page=')

        if (pageIndex !== -1) {
            // 找到 `page=` 参数并删除它及其后的所有内容
            var baseUrl = url.substring(0, pageIndex + 5) // +5 to include `page=`
            return baseUrl
        } else {
            // 检查是否已有其他参数
            if (url.includes('?')) {
                // 有其他参数，添加 `&page=`
                return url + '&page='
            } else {
                // 没有其他参数，添加 `?page=`
                return url + '?page='
            }
        }
    }
    function settime() {
        // 让用户输入延时时间
        delayTime = prompt("请输入每页请求的延时时间（毫秒）：", "1000")

        // 检查用户是否取消输入
        if (delayTime === null) {
            alert("输入取消")
            return
        }

        delayTime = parseInt(delayTime)

        // 检查输入的延时时间是否有效
        if (isNaN(delayTime) || delayTime <= 0) {
            alert("请输入有效的延时时间（正整数）！")
            return
        }

        // 返回有效的延时时间
        return delayTime
    }


    function getTotalPagesd() { // 获取总页数
        var totalPagesElement = document.querySelector('#price-currency')
        var totalPagesText = totalPagesElement ? totalPagesElement.innerText : ''
        var totalPages = parseInt(totalPagesText.replace('/', '').trim(), 10)

        // 如果获取总页数失败，则返回 1
        if (isNaN(totalPages) || totalPages <= 0) {
            totalPages = 1
        }

        return totalPages
    }
    function getTotalPages(url) {
        return new Promise((resolve, reject) => {
            // 如果没有提供 URL，则使用当前页面的 URL
            if (!url) {
                url = window.location.href
            }

            // 发起 GM_xmlhttpRequest 请求获取页面内容
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                headers: { "Cookie": document.cookie },
                onload: function (response) {
                    // 处理响应
                    if (response.status === 200) {
                        const parser = new DOMParser()
                        const doc = parser.parseFromString(response.responseText, 'text/html')
                        const totalPagesElement = doc.querySelector('#price-currency') // 替换为实际选择器
                        if (totalPagesElement) {
                            const totalPagesText = totalPagesElement.innerText
                            const totalPages = parseInt(totalPagesText.replace('/', '').trim(), 10)
                            resolve(totalPages) // 成功时返回总页数
                        } else {
                            window.addToLog('页面中没有找到总页数,默认为1页', 'warning')
                            reject('Total pages element not found') // 页面中没有找到总页数元素
                        }
                    } else {
                        window.addToLog('请求失败', 'warning')
                        reject(`Request failed with status ${response.status}`) // 请求失败
                    }
                },
                onerror: function () {
                    window.addToLog('请求出错', 'warning')
                    reject('Request failed') // 请求出错

                }
            })
        })
    }


    // 设置总页数
    function setTotalPage(defaultPages) {
        if (!pageCount) {
            return defaultPages
        }

        const inputPages = parseInt(prompt(`当前 ${name} 总页数为 ${defaultPages}。请输入你想要抓取的页数（不输入抓取全部）：`, defaultPages), 10)
        if (isNaN(inputPages) || inputPages <= 0) {
            return defaultPages
        }
        return inputPages
    }
    // 开始处理页面抓取
    function start(totalPages, callback) {
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
        pendingRequests = pages.length
        fetchPage(pages.shift(), pages, callback)
    }

    // 点击按钮时执行操作



    // 异步获取页面内容
    function fetchPage(pageNum, pages, callback) {
        const pageUrl = `${processUrl(inurl)}${pageNum}`
        console.log(`正在获取第 ${pageNum} 页的内容...`)
        //showModal(`正在获取${name} 第 ${pageNum} / ${allpages}页 `);
        if (a !== -1) {
            showModal(`${a + 1}/${names.length} 正在获取 ${name} 第 ${pageNum} / ${allpages} 页`)
        } else {
            showModal(`正在获取 ${name} 第 ${pageNum} / ${allpages} 页`)
        }
        GM_xmlhttpRequest({
            method: "GET",
            url: pageUrl,
            headers: { "Cookie": document.cookie },
            onload: function (response) {
                if (response.status === 200) {
                    processPageContent(response.responseText, pageNum, pages, callback)
                } else {
                    pendingRequests--
                    checkIfComplete(callback)
                    if (pages.length > 0) {
                        setTimeout(() => fetchPage(pages.shift(), pages, callback), delayTime)
                    }
                }
            }
        })
    }


    //获取视频信息
    function extractInformation(htmlContent) {
        let data = {} // 创建一个对象来存储提取的数据
        let xhr = new XMLHttpRequest()
        xhr.open('GET', htmlContent, false) // 同步方式打开请求
        xhr.send()

        // 创建一个虚拟的 <div> 元素来加载 HTML 内容
        let tempDiv = document.createElement('div')
        tempDiv.innerHTML = xhr.responseText

        // 获取所有包含信息的父元素列表
        let parentElements = tempDiv.querySelectorAll('div.space-y-2 > div')

        if (parentElements.length > 0) {
            let allInfo = {} // 初始化一个空对象来存储所有信息

            // 遍历每个包含信息的 <div> 元素
            parentElements.forEach(div => {
                let span = div.querySelector('span') // 获取第一个 <span> 元素

                if (span) {
                    let category = span.textContent.trim() // 获取主分类名称

                    if (!allInfo[category]) {
                        allInfo[category] = [] // 初始化一个空数组来存储该分类下的所有信息
                    }

                    // 查找所有的 <a> 元素和 <time> 元素
                    div.querySelectorAll('a, time').forEach(element => {
                        let info = {}

                        // 判断元素是否是 <a> 元素
                        if (element.tagName === 'A') {
                            info['name'] = element.textContent.trim() // 获取名称
                            info['link'] = element.href.trim() // 获取链接
                        } else if (element.tagName === 'TIME') {
                            info = element.textContent.trim() // 如果是 <time> 元素，则直接保存其文本内容
                        }

                        // 添加信息对象到相应的主分类数组中
                        allInfo[category].push(info)
                    })

                    // 如果没有找到 <a> 元素，则尝试获取 <span> 标签内的文本内容
                    if (div.querySelectorAll('a').length === 0) {
                        let spanText = div.querySelector('span.font-medium')
                        if (spanText) {
                            let info = spanText.textContent.trim()
                            allInfo[category].push(info)
                        }
                    }
                }
            })

            // 提取 class="mb-1 text-secondary break-all line-clamp-2" 的内容
            let descriptionElement = tempDiv.querySelector('.mb-1.text-secondary.break-all.line-clamp-2')
            let descriptionContent = descriptionElement ? descriptionElement.textContent.trim() : ''
            allInfo['简介'] = descriptionContent

            // 将所有信息存储到 data 对象中
            data['videosinfo'] = allInfo

            // 查找包含 x-cloak 和 x-show="currentTab === 'magnets'" 的第二个元素
            let secondElement = tempDiv.querySelector('div[x-cloak][x-show="currentTab === \'magnets\'"]')

            if (secondElement) {
                let linksAndInfo = []

                // 遍历第二个元素内的 <a> 元素
                secondElement.querySelectorAll('a[rel="nofollow"]').forEach(a => {
                    let linkInfo = {
                        name: a.textContent.trim(),
                        link: a.href.trim()
                    }

                    // 查找相邻的 <td> 元素，获取大小和日期信息
                    let sizeTd = a.closest('td').nextElementSibling
                    if (sizeTd && sizeTd.classList.contains('font-mono')) {
                        linkInfo['size'] = sizeTd.textContent.trim() // 获取大小信息
                    }

                    let dateTd = sizeTd ? sizeTd.nextElementSibling : null
                    if (dateTd && dateTd.classList.contains('hidden')) {
                        linkInfo['date'] = dateTd.textContent.trim() // 获取日期信息
                    }
                    let nextSibling = a.nextElementSibling

                    // 循环处理所有紧邻的<span>元素
                    while (nextSibling && nextSibling.tagName === 'SPAN') {
                        let spanText = nextSibling.textContent.trim()
                        linkInfo['name'] += ' ' + spanText // 将<span>元素的文本内容追加到name中

                        nextSibling = nextSibling.nextElementSibling // 继续查找下一个兄弟元素
                    }
                    linksAndInfo.push(linkInfo)
                })

                // 将第二个元素的链接和信息添加到 data 中
                data['secondElementLinksInfo'] = linksAndInfo
            } else {
                console.error('未找到包含 x-cloak 和 x-show="currentTab === \'magnets\'" 的第二个元素。')
            }

            return data // 返回结构化的数据

        } else {
            console.error('未找到匹配的父元素 div.space-y-2')
            return null // 如果未找到匹配的父元素，返回 null
        }
    }  ///大




    // 使用XMLHttpRequest获取页面内容
    function fetchPageforinfo(url) {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    extractInformation(xhr.responseText) // 将获取的页面内容传递给提取信息的函数
                } else {
                    console.error('请求失败：' + xhr.status)
                }
            }
        }

        xhr.open('GET', url, true)
        xhr.send()
    }


    // 处理获取到的页面内容
    function processPageContent(htmlContent, pageNum, pages, callback) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlContent, 'text/html')
        const divElements = doc.querySelectorAll('div.relative.aspect-w-16.aspect-h-9.rounded.overflow-hidden.shadow-lg')
        const logEntry = {
            url: `${processUrl(inurl)}${pageNum}`,
            elementsFetched: divElements.length
        }

        // 如果当前名称的日志组不存在，则创建一个新数组
        if (!downloadLog[name]) {
            downloadLog[name] = []
        }

        // 将日志条目添加到日志数组中
        downloadLog[name].push(logEntry)
        if (divElements.length === 0) {
            const logEntry = {
                url: `${processUrl(inurl)}${pageNum}`,
                elementsFetched: 0, // 这里可以根据实际需求设置其他信息
                errorMessage: `获取第 ${pageNum} 页失败。`
            }
            if (!errorLogs[name]) {
                errorLogs[name] = []
            }
            errorLogs[name].push(logEntry)
            console.log(`获取第 ${pageNum} 页失败。`)
            window.addToLog(`${name}${processUrl(inurl)}${pageNum}+获取失败 数量：` + divElements.length, 'error')
        }




        divElements.forEach(div => {
            var imgUrl = div.querySelector('img').getAttribute('data-src')


            if (shouldReplace) {
                imgUrl = imgUrl.replace('cover-t.jpg', 'cover-n.jpg')
            }
            const video = {
                fileName: div.querySelector('a').getAttribute('alt'),
                imgUrl: imgUrl,
                videoUrl: div.querySelector('video').getAttribute('data-src'),
                markContent: Array.from(div.querySelectorAll('span')).map(mark => mark.textContent).join(' '),
                altText: div.querySelector('img').getAttribute('alt'),
                jumpUrl: div.querySelector('a').getAttribute('href'),

            }

            if (saveVideoInfo) {
                video.info = extractInformation(video.jumpUrl)
                //showBanner(`正在获取 ${video.fileName} 信息`);
                window.addToLog(`正在获取 ${video.fileName} 信息`, 'info')
                console.log()
            };



            if (video.imgUrl && video.altText) {
                videos.push(video)
                if (saveImage) {
                    window.addToLog(`保存` + video.imgUrl, 'info')
                    pendingRequests++
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: video.imgUrl,
                        responseType: 'blob',
                        onload: function (response) {
                            if (response.status === 200) {
                                if (saveImage) {
                                    if (singleFileDownload) {
                                        console.log("这是单个文件下载")
                                        imgFolder.file(`${video.fileName}.jpg`, response.response, { binary: true })
                                    } else {
                                        console.log("这是批量文件下载")
                                        allimgFolder.file(`${video.fileName}.jpg`, response.response, { binary: true })
                                    }
                                }

                                pendingRequests--
                                checkIfComplete(callback)
                            } else {
                                pendingRequests--
                                checkIfComplete(callback)
                            }
                        }
                    })
                }
            } else {
                pendingRequests--
                checkIfComplete(callback)
            }
        })

        showModal(`获取第 ${pageNum} 页的内容完成，等待 ${delayTime} 毫秒加载第 ${pageNum + 1} 页。`)
        pendingRequests--
        checkIfComplete(callback)
        if (pages.length > 0) {
            setTimeout(() => fetchPage(pages.shift(), pages, callback), delayTime)
        } else {

        }
    }

    closeModal()

    function downloadLogFile() {


        if (!downloadLogFileA) {
            console.log('日志下载已被跳过')
            return
        }
        if (Object.keys(errorLogs).length === 0) {
            // 如果错误日志为空，直接下载正常日志文件
            const logBlob = new Blob([JSON.stringify(downloadLog, null, 4)], { type: 'application/json' })
            const logUrl = URL.createObjectURL(logBlob)
            const logLink = document.createElement('a')
            logLink.href = logUrl
            logLink.download = 'download_log.json'
            logLink.click()
            URL.revokeObjectURL(logUrl)
        } else {
            // 创建一个JSZip实例
            const zip = new JSZip()

            // 添加正常日志文件到压缩包
            const logBlob = new Blob([JSON.stringify(downloadLog, null, 4)], { type: 'application/json' })
            zip.file('download_log.json', logBlob)

            // 添加错误日志文件到压缩包
            const errorLogBlob = new Blob([JSON.stringify(errorLogs, null, 4)], { type: 'application/json' })
            zip.file('error_log.json', errorLogBlob)

            // 生成压缩包并触发下载
            zip.generateAsync({ type: 'blob' }).then(function (content) {
                const zipUrl = URL.createObjectURL(content)
                const link = document.createElement('a')
                link.href = zipUrl
                link.download = 'logs.zip'
                link.click()
                URL.revokeObjectURL(zipUrl)
            })
        }
    }



    function sanitizeFileName(name) {
        return name.replace(/[\\\/:*?"<>|]/g, '_')
    }

    function checkIfComplete(callback) {
        if (pendingRequests === 0) {

            const additionalInfo = {
                timestamp: new Date().toISOString(),
                inurl: inurl

            }
            if (singleFileDownload) {
                showModal("获取完毕，正在生成单个文件...")

                finalData = {
                    info: additionalInfo,
                    video: videos
                }
                if (saveJson) {
                    zip.file("data.json", JSON.stringify(finalData, null, 4))
                }
                if (savetowebdav) {

                    WebDAVManager.uploadFile(webdavfold, `${sanitizeFileName(name)}.json`, JSON.stringify(finalData, null, 4))
                }



                const jsonIndexContent = generateJsonIndexContent(finalData)
                const numFiles = Object.keys(zip.files).length // 获取压缩包中文件的数量

                if (numFiles === 0) {
                    const htmlContent = jsonIndexContent // 替换为实际的HTML内容
                    const htmlBlob = new Blob([htmlContent], { type: 'text/html' })
                    const htmlUrl = URL.createObjectURL(htmlBlob)

                    const a = document.createElement('a')
                    a.href = htmlUrl
                    a.download = `${sanitizeFileName(name)}.html`
                    a.click()
                    closeModal()
                    downloadLogFile()

                    if (callback) callback()
                } else {
                    zip.file(`${sanitizeFileName(name)}.html`, jsonIndexContent)

                    // 生成并下载单个文件
                    zip.generateAsync({ type: "blob" }, function updateCallback(metadata) {
                        const progress = metadata.percent.toFixed(2)
                        showModal(`压缩进度: ${progress}%`)
                    }).then(content => {
                        const zipUrl = URL.createObjectURL(content)
                        const a = document.createElement('a')
                        a.href = zipUrl
                        a.download = `${name}.zip`
                        a.click()
                        URL.revokeObjectURL(zipUrl)
                        closeModal()
                        downloadLogFile()
                        if (callback) callback()
                    })
                }


            } else {
                finalData = {
                    info: additionalInfo,
                    video: videos
                }
                if (saveJson) {
                    allzip.file(`${sanitizeFileName(name)}.json`, JSON.stringify(finalData, null, 4))
                }
                if (savetowebdav) {
                    WebDAVManager.uploadFile(webdavfold, `${sanitizeFileName(name)}.json`, JSON.stringify(finalData, null, 4))
                }

                const jsonIndexContent = generateJsonIndexContent(finalData);;
                allzip.file(`${sanitizeFileName(name)}.html`, jsonIndexContent)
                finalData = []

                videos = []
                if (callback) callback()
            }

        }
    }
    function downloadAllZips() {
        if (singleFileDownload === false) {
            showModal("获取完毕，正在生成压缩文件...")

            const numFiles = Object.keys(allzip.files).length // 获取压缩包中文件的数量

            if (numFiles === 1) {
                // 如果压缩包中只有一个文件，直接处理该文件
                const fileName = Object.keys(allzip.files)[0] // 获取唯一的文件名
                const file = allzip.files[fileName]

                // 根据文件类型获取文件内容
                file.async('blob').then(content => {
                    // 创建一个Blob对象，并下载
                    const blob = new Blob([content])
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = fileName
                    document.body.appendChild(a) // 添加到文档中以确保点击有效
                    a.click()
                    document.body.removeChild(a) // 下载完成后移除元素
                    URL.revokeObjectURL(url)
                    closeModal()
                }).catch(error => {
                    console.error('Error fetching file content:', error)
                    closeModal()
                })
                downloadLogFile()
                return // 结束函数执行，不生成压缩包
            }



            allzip.generateAsync({ type: "blob" }, function updateCallback(metadata) {
                const progress = metadata.percent.toFixed(2)
                showModal(`压缩进度: ${progress}%`)
            }).then(content => {
                const zipUrl = URL.createObjectURL(content)
                const a = document.createElement('a')
                a.href = zipUrl
                a.download = `批量备份${urls.length}个片单.zip`
                a.click()
                URL.revokeObjectURL(zipUrl)
                closeModal()
                downloadLogFile()
                if (callback) callback()
            })
            // 如果 singleFileDownload 等于假，则执行这里的代码
        }


    }

    function showBanner(text) {
        // 查找现有的横幅元素
        var existingBanner = document.querySelector('.banner')

        if (existingBanner) {
            // 如果横幅已经存在，直接更新文本内容
            existingBanner.textContent = text
        } else {
            // 如果横幅不存在，创建一个新的横幅
            var banner = document.createElement('div')
            banner.className = 'banner' // 添加一个类名以便识别
            banner.style.position = 'fixed'
            banner.style.bottom = '20px' // 距离底部的距离
            banner.style.left = '20px' // 距离左侧的距离
            banner.style.width = 'auto' // 根据文本自动调整宽度
            banner.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
            banner.style.color = '#000' // 黑色文本
            banner.style.textAlign = 'center'
            banner.style.padding = '20px'
            banner.style.borderRadius = '8px'
            banner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            banner.style.zIndex = '9999'
            banner.textContent = text // 将传入的文本设置为横幅内容

            document.body.appendChild(banner) // 将横幅添加到文档的末尾

            // 3秒后移除横幅提示
            setTimeout(function () {
                banner.remove()
            }, 3000)
        }
    }



    // 创建或更新模态窗口
    function showModal(message, autoCloseDelay = 0) {
        // 如果模态窗口不存在，则创建新的模态窗口
        if (!modalContainer) {
            modalContainer = document.createElement('div')
            modalContainer.className = 'modal-container'
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
        `
            document.body.appendChild(modalContainer)
        }

        // 更新模态窗口的内容
        modalContainer.textContent = message

        // 自动关闭模态窗口
        if (autoCloseDelay > 0) {
            setTimeout(closeModal, autoCloseDelay)
        }
    }

    // 关闭模态窗口
    function closeModal() {
        // 如果模态窗口存在，则从 DOM 中移除
        if (modalContainer) {
            document.body.removeChild(modalContainer)
            modalContainer = null // 将变量重置为 null，以便下次创建新的模态窗口
        }
    }

    // 创建JSONindex

    function createReportUI(data, itemsPerPage) {
        temporaryData = data
        // 创建全屏遮罩层
        const overlay = document.createElement('div')
        overlay.className = 'overlay'
        overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1); /* 全黑不透明背景 */
        z-index: 9999; /* 确保遮罩层位于所有内容之上 */
    `
        // document.body.appendChild(overlay);

        const modalContainer = document.createElement('div')
        modalContainer.className = 'modal-container'
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
    `
        const title = document.createElement('h2')
        title.textContent = `当前共有片单数量: ${temporaryData.length}`

        title.style.textAlign = 'center'
        modalContainer.appendChild(title)

        const closeButton = document.createElement('button')
        closeButton.textContent = '×'
        closeButton.style.position = 'absolute'
        closeButton.style.top = '10px'
        closeButton.style.right = '10px'
        closeButton.style.backgroundColor = 'transparent'
        closeButton.style.border = 'none'
        closeButton.style.fontSize = '24px'
        closeButton.style.cursor = 'pointer'
        modalContainer.appendChild(closeButton)

        closeButton.addEventListener('click', () => {

            //   document.body.removeChild(overlay); // 移除遮罩层
            document.body.removeChild(modalContainer) // 移除模态框
        })

        const tableContainer = document.createElement('div')
        tableContainer.style.cssText = `
        max-height: 60vh;
        overflow-y: auto;
    `
        modalContainer.appendChild(tableContainer)

        const table = document.createElement('table')
        table.style.width = '100%'
        table.style.borderCollapse = 'collapse'
        table.style.fontSize = '16px'
        tableContainer.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        const headerRow = document.createElement('tr')
        thead.appendChild(headerRow)

        const checkboxHeader = document.createElement('th')
        checkboxHeader.textContent = '选择'
        checkboxHeader.style.textAlign = 'center'
        checkboxHeader.style.padding = '10px'
        headerRow.appendChild(checkboxHeader)

        const nameHeader = document.createElement('th')
        nameHeader.textContent = '片单'
        nameHeader.style.padding = '10px'
        nameHeader.style.width = '40%'
        headerRow.appendChild(nameHeader)

        const urlHeader = document.createElement('th')
        urlHeader.textContent = '地址'
        urlHeader.style.padding = '10px'
        urlHeader.style.width = '40%'
        headerRow.appendChild(urlHeader)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        let currentPage = 1
        const totalItems = data.length
        const totalPages = Math.ceil(totalItems / itemsPerPage)

        function generateTableData(page) {
            tbody.innerHTML = ''

            const startIndex = (page - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage

            for (let i = startIndex; i < endIndex && i < data.length; i++) {
                const row = document.createElement('tr')
                tbody.appendChild(row)
                // 序号列
                const indexCell = document.createElement('td')
                indexCell.textContent = i + 1 // 显示序号，从1开始
                indexCell.style.textAlign = 'center'
                indexCell.style.padding = '5px'
                row.appendChild(indexCell)
                const checkboxCell = document.createElement('td')
                checkboxCell.style.textAlign = 'center'
                checkboxCell.style.padding = '5px'
                const checkbox = document.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.id = `checkbox_${i}`
                checkbox.value = i
                checkboxCell.appendChild(checkbox)
                row.appendChild(checkboxCell)

                const nameCell = document.createElement('td')
                nameCell.textContent = data[i].name
                nameCell.style.padding = '10px'
                nameCell.style.borderBottom = '1px solid #ddd'
                row.appendChild(nameCell)

                const urlCell = document.createElement('td')
                const fullUrl = "https://missav.com/playlists/" + data[i].key
                const link = document.createElement('a')
                link.textContent = fullUrl
                link.href = fullUrl
                link.target = '_blank' // 在新标签页中打开链接
                urlCell.appendChild(link)
                urlCell.style.padding = '10px'
                urlCell.style.borderBottom = '1px solid #ddd'
                row.appendChild(urlCell)
            }
        }

        generateTableData(currentPage)

        const paginationContainer = document.createElement('div')
        paginationContainer.style.marginTop = '20px'
        paginationContainer.style.textAlign = 'center'
        modalContainer.appendChild(paginationContainer)

        const prevButton = document.createElement('button')
        prevButton.textContent = '上一页'
        prevButton.style.marginRight = '10px'
        prevButton.disabled = true

        const pageIndicator = document.createElement('span')
        pageIndicator.style.marginRight = '10px'
        updatePageIndicator()
        paginationContainer.appendChild(pageIndicator)

        const nextButton = document.createElement('button')
        nextButton.textContent = '下一页'
        nextButton.style.marginLeft = '10px'
        if (totalPages <= 1) {
            nextButton.disabled = true
        }

        prevButton.addEventListener('click', () => {
            currentPage--
            generateTableData(currentPage)
            updatePaginationButtons()
            updatePageIndicator()
        })

        nextButton.addEventListener('click', () => {
            currentPage++
            generateTableData(currentPage)
            updatePaginationButtons()
            updatePageIndicator()
        })

        function updatePaginationButtons() {
            prevButton.disabled = currentPage === 1
            nextButton.disabled = currentPage === totalPages
        }

        function updatePageIndicator() {
            pageIndicator.textContent = `第 ${currentPage}/${totalPages} 页`
        }
        const selectAllButton = document.createElement('button')
        selectAllButton.textContent = '全部选择'
        selectAllButton.style.marginRight = '10px'
        selectAllButton.style.marginTop = '20px'
        selectAllButton.style.padding = '10px 20px'
        selectAllButton.style.fontSize = '16px'
        selectAllButton.style.backgroundColor = '#007bff'
        selectAllButton.style.color = '#fff'
        selectAllButton.style.border = 'none'
        selectAllButton.style.borderRadius = '5px'
        selectAllButton.style.cursor = 'pointer'
        selectAllButton.style.float = 'left'
        modalContainer.appendChild(selectAllButton)

        let selectAll = true

        selectAllButton.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]')
            checkboxes.forEach(checkbox => {
                checkbox.checked = selectAll
            })

            if (selectAll) {
                selectAllButton.textContent = '取消选择'
            } else {
                selectAllButton.textContent = '全部选择'
            }

            selectAll = !selectAll
        })
        //

        const confirmButton = document.createElement('button')
        confirmButton.textContent = '确认选择'
        confirmButton.style.marginTop = '20px'
        confirmButton.style.padding = '10px 20px'
        confirmButton.style.fontSize = '16px'
        confirmButton.style.backgroundColor = '#007bff'
        confirmButton.style.color = '#fff'
        confirmButton.style.border = 'none'
        confirmButton.style.borderRadius = '5px'
        confirmButton.style.cursor = 'pointer'
        confirmButton.style.float = 'right'
        modalContainer.appendChild(confirmButton)

        document.body.appendChild(modalContainer)

        confirmButton.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]')
            let anyCheckboxChecked = false
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {

                    const index = parseInt(checkbox.value, 10)
                    if (index >= 0 && index < temporaryData.length) {
                        // 检查 temporaryData[index] 是否为 undefined 或 null
                        if (temporaryData[index]) {
                            // 将选中的名称和URL推送到全局变量
                            names.push(temporaryData[index].name)
                            urls.push("https://missav.com/playlists/" + temporaryData[index].key)
                            anyCheckboxChecked = true
                        } else {
                            console.error(`temporaryData[${index}] is undefined or null.`)
                        }
                    } else {
                        console.error(`Index ${index} is out of bounds for temporaryData.`)
                    }
                }

            })

            document.body.removeChild(modalContainer)
            //  document.body.removeChild(overlay);
            if (anyCheckboxChecked) {

                processUrls()
                window.showLogContainer()
            }

        })
    }
    function ini() {
        delayTime = GM_getValue('delayTime', 1000) // 从GM存储中读取延迟时间
        shouldReplace = GM_getValue('shouldReplace', false) // 从GM存储中读取状态
        saveJson = GM_getValue('saveJson', false) // 从GM存储中读取状态
        useDefaultTitle = GM_getValue('useDefaultTitle', true)
        pageCount = GM_getValue('pageCount', true)
        saveVideoInfo = GM_getValue('saveVideoInfo', false)
        saveImage = GM_getValue('saveImage', true)
        downloadLogFileA = GM_getValue('downloadLogFileA', false)
        savetowebdav = GM_getValue('savetowebdav', false)
        webdavUrl = GM_getValue('webdavUrl', '')
        webdavUsername = GM_getValue('webdavUsername', '')
        webdavPassword = GM_getValue('webdavPassword', '')

    }
    // 创建设置界面
    function createControl(tagName, attributes = {}, styles = {}, parent = document.body) {
        const element = document.createElement(tagName)

        // 设置属性
        for (const key in attributes) {
            element[key] = attributes[key]
        }

        // 设置样式
        Object.assign(element.style, styles)

        // 添加到父元素
        if (parent) {
            parent.appendChild(element)
        }

        return element
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
        })

        const title = createControl('h2', {
            textContent: '设置'
        }, {
            textAlign: 'center'
        })
        modalContainer.appendChild(title)

        // 创建控件并添加到模态框
        const controls = [
            {
                type: 'checkbox',
                id: 'saveImageCheckbox',
                label: '下载图片',
                checked: GM_getValue('saveImage', true),
                onchange: function () { GM_setValue('saveImage', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'saveJsonCheckbox',
                label: '下载JSON',
                checked: GM_getValue('saveJson', false),
                onchange: function () { GM_setValue('saveJson', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'hdImageCheckbox',
                label: '下载高清大图',
                checked: GM_getValue('shouldReplace', false),
                onchange: function () { GM_setValue('shouldReplace', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'defaultTitleCheckbox',
                label: '使用网页标题名保存',
                checked: GM_getValue('useDefaultTitle', true),
                onchange: function () { GM_setValue('useDefaultTitle', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'saveVideoInfoCheckbox',
                label: '下载视频信息',
                checked: GM_getValue('saveVideoInfo', false),
                onchange: function () { GM_setValue('saveVideoInfo', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'pageCountCheckbox',
                label: '自定义抓取页数',
                checked: GM_getValue('pageCount', true),
                onchange: function () { GM_setValue('pageCount', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'downloadLogFileA',
                label: '保存下载日志',
                checked: GM_getValue('downloadLogFileA', false),
                onchange: function () { GM_setValue('downloadLogFileA', this.checked) }
            },
            {
                type: 'checkbox',
                id: 'savetowebdav',
                label: '上传JSON到WebDav',
                checked: GM_getValue('savetowebdav', false),
                onchange: function () { GM_setValue('savetowebdav', this.checked) }
            },
            {
                type: 'number',
                id: 'delayInput',
                label: '设置延迟（毫秒）',
                value: GM_getValue('delayTime', 1000),
                placeholder: '设置延迟（毫秒）',
                onchange: function () { GM_setValue('delayTime', this.value) },
                style: {
                    width: '1px' // 设置输入框宽度为100%
                }
            },
            {
                type: 'text',
                id: 'webdavUrlInput',
                label: 'WebDAV 网址',
                value: GM_getValue('webdavUrl', ''),
                placeholder: '输入WebDAV网址',
                onchange: function () { GM_setValue('webdavUrl', this.value) }
            },
            {
                type: 'text',
                id: 'webdavUsernameInput',
                label: 'WebDAV 账号',
                value: GM_getValue('webdavUsername', ''),
                placeholder: '输入WebDAV账号',
                onchange: function () { GM_setValue('webdavUsername', this.value) }
            },
            {
                type: 'text',
                id: 'webdavPasswordInput',
                label: 'WebDAV 密码',
                value: GM_getValue('webdavPassword', ''),
                placeholder: '输入WebDAV密码',
                onchange: function () { GM_setValue('webdavPassword', this.value) }
            }
        ]

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
            })

            const label = createControl('label', {
                textContent: control.label,
                htmlFor: control.id
            }, {
                fontSize: '14px',
                marginLeft: '5px'
            })

            modalContainer.appendChild(input)
            modalContainer.appendChild(label)
            modalContainer.appendChild(createControl('br'))
        })

        // 关闭按钮
        const closeButton = createControl('button', {
            textContent: '关闭',
            onclick: () => {
                ini()
                WebDAVManager.updateConfig(webdavUrl, webdavUsername, webdavPassword)
                document.body.removeChild(modalContainer)
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
        })

        modalContainer.appendChild(closeButton)

        // 将模态框添加到页面
        document.body.appendChild(modalContainer)

        // 添加移动端样式
        const mediaQuery = window.matchMedia('(max-width: 600px)')
        if (mediaQuery.matches) {
            modalContainer.style.width = '90%'
            modalContainer.style.maxWidth = '90%'
            modalContainer.style.padding = '10px'
        }
    }

    // 在页面加载时调用设置界面创建函数


    // 调用示例


    const WebDAVManager = (function () {
        // WebDAV 配置
        let url = webdavUrl
        let username = webdavUsername
        let password = webdavPassword


        // 通用 GM_xmlhttpRequest 封装函数
        function GM_xhr({ path = '/', method, success, fail, headers = {}, data, ...config }) {

            return new Promise(resolve => {
                GM_xmlhttpRequest({
                    url: url + path,
                    method,
                    ...config,
                    headers: {
                        'Connection': 'Keep-Alive', // 保持连接
                        'User-Agent': 'Mozilla/5.0', // 用户代理
                        'Authorization': 'Basic ' + btoa(username + ':' + password), // 基本认证
                        ...headers
                    },
                    data,
                    onload: xhr => {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            if (success) success(xhr)
                        } else {
                            if (fail) fail(xhr)
                        }
                        resolve(xhr)
                    },
                    onerror: xhr => {
                        if (fail) fail(xhr)
                        resolve(xhr)
                    }
                })
            })
        }
        //登录
        async function login() {
            let retryCount = 2 // 设置重试次数为2次

            while (retryCount > 0) {
                // 构建登录请求
                const LOGIN = {
                    method: 'PROPFIND', // 使用 PROPFIND 方法检查根目录
                    path: retryCount === 2 ? '/' : '', // 根据重试次数设置 path
                    headers: {
                        'Depth': '1',
                        'Authorization': 'Basic ' + btoa(username + ':' + password),
                        'Connection': 'Keep-Alive', // 保持连接
                        'User-Agent': 'Mozilla/5.0' // 用户代理
                    }
                }

                // 发起登录请求
                const loginResponse = await GM_xhr(LOGIN)

                // 判断登录结果
                if (loginResponse.status === 207) {
                    console.log('登录成功')
                    // 登录成功后，可以执行其他操作
                    showModal("Webdav登录成功！", 1000)
                    return true // 返回登录成功标志
                } else {
                    console.error('登录失败:', loginResponse.status)
                    if (retryCount === 1) {
                        showModal("Webdav登录失败！" + loginResponse.status, 1000)
                        return false // 返回登录失败标志
                    } else {
                        retryCount-- // 减少重试次数
                    }
                }
            }

            // 如果重试次数用尽仍未登录成功，执行其他操作（可根据实际情况添加代码）
            console.error('重试次数用尽，登录失败')
            showModal("Webdav登录失败！重试次数用尽", 1000)
            return false
        }

        //刷新
        function updateConfig(newUrl, newUsername, newPassword) {
            if (newUrl && newUsername && newPassword) {
                url = newUrl
                username = newUsername
                password = newPassword
                // 在这里调用登录函数
                login()
            } else {
                console.error('WebDAV 配置信息不完整')
            }
        }
        // 获取 WebDAV 中指定路径下的所有文件和文件夹
        async function listFilesAndFolders(folderName) {
            const path = folderName.endsWith('/') ? folderName : folderName + '/'
            const PROPFIND = {
                method: 'PROPFIND',
                headers: {
                    'Depth': '1'
                },
                success: (xhr) => {
                    const parser = new DOMParser()
                    const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml')
                    const responses = xmlDoc.getElementsByTagNameNS('DAV:', 'response')

                    let fileCount = 0
                    //let fileList = `<div class="custom-hr"></div>`;
                    let fileList = ""

                    for (let i = 0; i < responses.length; i++) {
                        const href = decodeURIComponent(responses[i].getElementsByTagNameNS('DAV:', 'href')[0].textContent.trim())
                        const displayName = href.substring(href.lastIndexOf('/') + 1)
                        const isCollection = responses[i].getElementsByTagNameNS('DAV:', 'collection').length > 0

                        if (!isCollection) {
                            fileList += `
            <li class="file-item">
    <input type="checkbox" name="fileCheckbox" class="file-checkbox">
    <span>${fileCount + 1}.</span> <!-- 文件序号 -->
    <a href="#" data-display-name="${displayName}" onclick="WebDAVManager.downloadAndDisplayFile('${folderName}', '${displayName}')" class="file-link">${displayName}</a> <!-- 文件名链接 -->
    <div class="file-actions">
        <a href="#" onclick="WebDAVManager.renameFile('${folderName}', '${displayName}')" class="file-action">更名</a>
        <a href="#" onclick="WebDAVManager.deleteFile('${folderName}', '${displayName}')" class="file-action">删除</a>
        <a href="#" onclick="WebDAVManager.downloadFile('${folderName}', '${displayName}')" class="file-action">下载</a>
    </div>
    <div style="clear: both;"></div> <!-- 清除浮动 -->
</li>
        `
                            fileCount++
                        }
                    }
                    /*fileList += `
                        <div class="custom-hr"></div>
                        <p>文件数量: ${fileCount}</p>
                        </ul>
                    `;*/
                    fileList += '</ul>'

                    showDialog(`
        <span style="font-size: 24px;">文件夹 ${folderName}</span><br>
        <span style="color: green;"><span id="fileCountLabel">文件数量:</span> <span class="file-count">${fileCount}</span></span>
        <div class="custom-hr"></div>
    `, fileList)

                },
                fail: (xhr) => {
                    alert('获取文件列表失败：' + xhr.status)
                }
            }

            await GM_xhr({ ...PROPFIND, path })
        }

        // 下载文件函数

        // 在 WebDAV 中创建新文件夹
        async function createFolder(folderName) {
            const MKCOL = {
                method: 'MKCOL',
                path: folderName.endsWith('/') ? folderName : folderName + '/',
                success: () => {
                    alert('文件夹创建成功')
                },
                fail: (xhr) => {
                    if (xhr.status === 409) {
                        // alert('冲突：文件夹可能已经存在或路径不正确');
                    } else {
                        //alert('创建文件夹失败：' + xhr.status);
                    }
                }
            }

            await GM_xhr({ ...MKCOL })
        }

        // 上传文件到 WebDAV

        async function uploadFile(folderName, fileName, fileContent) {
            // 检查文件是否已存在
            const HEAD = {
                method: 'HEAD',
                path: folderName + '/' + fileName,
                success: () => {
                    //alert('文件已存在，无需重复上传');
                    window.addToLog(fileName + '文件存在', 'info')
                    // 可以在这里执行文件已存在时的逻辑，比如显示提示信息或执行其他操作
                },
                fail: async (xhr) => {
                    if (xhr.status === 404) {
                        // 文件不存在，执行上传操作
                        const PUT = {
                            method: 'PUT',
                            path: folderName + '/' + fileName,
                            data: fileContent,
                            success: () => {

                                window.addToLog(fileName + '文件上传成功', 'info')
                            },
                            fail: (xhr) => {
                                window.addToLog(fileName + '文件上传失败', 'error')
                            }
                        }

                        await GM_xhr({ ...PUT })
                    } else {
                        window.addToLog(fileName + '文件检查上传失败', 'error')
                    }
                }
            }

            await GM_xhr({ ...HEAD })
        }

        // 重命名文件
        async function renameFile(folderName, oldFileName) {
            // 弹出对话框让用户输入新文件名
            const newFileName = prompt(`请输入 ${oldFileName} 的新文件名：`)
            if (!newFileName) {
                alert('未输入新文件名，操作已取消。')
                return
            }
            const encodedOldFileName = encodeURIComponent(oldFileName) // 对旧文件名进行编码

            const encodedNewFileName = encodeURIComponent(newFileName + '.json') // 对新文件名进行编码
            const sourcePath = folderName + '/' + encodedOldFileName
            const destinationPath = folderName + '/' + encodedNewFileName

            const MOVE = {
                method: 'MOVE',
                path: sourcePath,
                headers: {
                    'Destination': url + destinationPath,
                    'Overwrite': 'T' // 允许覆盖目标文件
                },
                success: () => {
                    alert(`文件 ${oldFileName} 已成功重命名为 ${newFileName}`)
                    listFilesAndFolders(folderName) // 刷新文件列表
                },
                fail: (xhr) => {
                    if (xhr.status === 409) {
                        alert('冲突：文件名可能已存在或路径不正确')
                    } else {
                        alert('重命名文件失败：' + xhr.status)
                    }
                }
            }

            await GM_xhr({ ...MOVE })
        }


        // 删除文件
        async function deleteFile(folderName, fileName) {
            let confirmdelete = false
            if (deleteSelected) {
                confirmdelete = true
            } else {
                confirmdelete = confirm(`确定要删除文件 ${fileName} 吗？`)
            }

            if (confirmdelete) {
                try {
                    await deleteFileFromServer(folderName, fileName)
                    const fileItem = document.querySelector(`a[onclick*="${fileName}"]`).closest('li')
                    const checkbox = fileItem.querySelector('input[type="checkbox"]')
                    if (checkbox && checkbox.checked) {
                        checkbox.checked = false // 清除选中状态
                        checkbox.disabled = true // 禁止操作
                    }
                    markItemDeleted(fileItem)
                } catch (error) {
                    alert('删除文件失败：' + error.message)
                }
            }
        }
        function markItemDeleted(fileItem) {
            // 将文件名链接标记为已删除
            const fileNameLink = fileItem.querySelector('a')
            fileNameLink.style.textDecoration = 'line-through'
            fileNameLink.removeAttribute('onclick')
            fileNameLink.style.pointerEvents = 'none' // 不可点击
            fileNameLink.style.color = 'gray' // 设置为灰色

            // 将后续按钮标记为已删除
            const actionButtons = fileItem.querySelectorAll('div > a')
            actionButtons.forEach(button => {
                button.style.textDecoration = 'line-through'
                button.removeAttribute('onclick')
                button.style.pointerEvents = 'none' // 不可点击
                button.style.color = 'gray' // 设置为灰色
            })
        }
        // 实际删除文件的函数
        async function deleteFileFromServer(folderName, fileName) {
            const DELETE = {
                method: 'DELETE',
                path: folderName + '/' + fileName,
            }

            return new Promise((resolve, reject) => {
                GM_xhr({ ...DELETE, success: resolve, fail: reject })
            })
        }

        // 检查文件夹是否存在
        async function checkFolderExists(folderName) {
            const HEAD = {
                method: 'HEAD',
                path: folderName.endsWith('/') ? folderName : folderName + '/',
                success: (xhr) => {
                    if (xhr.status === 200) {
                        //  alert('文件夹存在');
                    } else if (xhr.status === 404) {
                        alert('文件夹不存在')
                    } else {
                        alert('检查文件夹状态失败：' + xhr.status)
                    }
                },
                fail: (xhr) => {
                    alert('检查文件夹失败：' + xhr.status)
                }
            }

            await GM_xhr({ ...HEAD })
        }

        // 下载并展示文件
        async function downloadFile(folderName, fileName, zip = null) {
            return new Promise((resolve, reject) => {
                // 发起 GET 请求下载文件内容
                const GET = {
                    method: 'GET',
                    path: folderName + '/' + fileName,
                    success: (xhr) => {
                        const fileContent = xhr.responseText
                        const jsonData = JSON.parse(fileContent)
                        const content = generateJsonIndexContent(jsonData)

                        if (zip) {
                            // 如果传入了压缩包实例，则将文件内容添加到压缩包中
                            const sanitizedFileName = sanitizeFileName(fileName.replace('.json', '')) + '.html'
                            zip.file(sanitizedFileName, content)
                            resolve()
                        } else {
                            // 否则直接下载文件
                            const blob = new Blob([content], { type: 'text/html' })
                            const htmlUrl = URL.createObjectURL(blob)
                            const a = document.createElement('a')
                            a.href = htmlUrl
                            a.download = sanitizeFileName(fileName.replace('.json', '')) + '.html'
                            a.click()
                            resolve()
                        }
                    },
                    fail: (xhr) => {
                        reject(new Error('下载文件失败：' + xhr.status))
                    }
                }

                GM_xhr({ ...GET })
            })
        }



        async function downloadAndDisplayFile(folderName, fileName) {
            const GET = {
                method: 'GET',
                path: folderName + '/' + fileName,
                success: (xhr) => {
                    try {
                        const fileContent = xhr.responseText
                        const jsonData = JSON.parse(fileContent)
                        const content = generateJsonIndexContent(jsonData)

                        // 打开一个新的浏览器标签页显示内容
                        const dataUrl = 'data:text/html;charset=utf-8,' + encodeURIComponent(content)
                        GM_openInTab(dataUrl)
                    } catch (e) {
                        alert('解析 JSON 文件失败：' + e.message)
                    }
                },
                fail: (xhr) => {
                    alert('下载文件失败：' + xhr.status)
                }
            }

            await GM_xhr({ ...GET })
        }
        //我是你爹啊
        // 显示对话框
        function showDialog(title, fileList, folderName) {
            // 添加CSS样式
            const style = document.createElement('style')
            style.textContent = `
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
}

.dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-height: 80%;
    overflow-y: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 9999;
}

.dialog-title {
    margin-bottom: 20px;
}

.dialog-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
}

.select-button {
    background-color: #007BFF;
    color: #fff;
}

.delete-button {
    background-color: #dc3545;
    color: #fff;
    margin-left: 10px;
}

.select-all-button {
    background-color: #28a745;
    color: #fff;
    margin-left: 10px;
}

.download-button {
    background-color: #007BFF;
    color: #fff;
    margin-left: 10px;
}

.search-button {
    background-color: #6c757d;
    color: #fff;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
 .close-x-button {
 background-color: #6c757d;
    color: red;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
        }

.search-button:hover {
    background-color: #495057;
}

.close-button {
    background-color: #007BFF;
    color: #fff;
    margin-top: 20px;
}

.file-list {
    list-style-type: none;
    padding: 0;
}

.file-action {
    margin-right: 10px;
    float: left;
    color: blue;
    cursor: pointer;
}

.file-actions-container {
    float: right;
}

.clear-float {
    clear: both;
}

.file-item {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    display: flex;
    align-items: center;
}

.file-checkbox {
    margin-right: 10px;
}

.file-link {
    margin-right: 10px;
    color: blue;
    flex-grow: 1;
}

.file-actions {
    display: flex;
    gap: 10px;
}

.file-action {
    color: #007BFF;
    cursor: pointer;
}

.custom-hr {
    height: 1px;
    background-color: #007BFF;
    margin: 20px 0;
}

.file-action:hover {
    text-decoration: underline;
}

@media (max-width: 600px) {
    .dialog-button {
        padding: 5px 10px;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .delete-button,
    .download-button,
    .select-all-button,
    .close-x-button,
    .search-button {
        margin-left: 0;
    }

    .button-container {
        right: 5px;
    }
}

    `
            document.head.appendChild(style)

            // 创建对话框
            const dialog = document.createElement('div')
            dialog.className = 'dialog'
            // 创建遮罩


            function close() {
                document.body.removeChild(dialog)

            }

            // 标题
            const titleElement = document.createElement('h1')
            titleElement.innerHTML = title
            titleElement.className = 'dialog-title'
            dialog.appendChild(titleElement)


            const buttonContainer = document.createElement('div')
            const buttonConfigs = [
                { text: '选择列表', className: 'dialog-button select-button', onclick: toggleSelection },
                { text: '搜索列表', className: 'dialog-button search-button', onclick: toggleSearch },
                { text: '关闭窗口', className: 'dialog-button close-x-button', onclick: close },
                { text: '全部选中', className: 'dialog-button select-all-button', onclick: toggleSelectAll },
                { text: '删除选中', className: 'dialog-button delete-button', onclick: deleteSelectedFiles },
                { text: '下载选中', className: 'dialog-button download-button', onclick: downloadSelectedFiles }

                // 可以添加更多按钮配置
            ]
            let count = 0 // 计数器，用于控制显示状态
            buttonConfigs.forEach(config => {
                const button = document.createElement('button')
                button.textContent = config.text
                button.className = config.className
                button.onclick = config.onclick

                if (count < 3) {
                    button.style.display = 'inline-block' // 前两个按钮初始可见
                } else {
                    button.style.display = 'none' // 后面的按钮初始隐藏
                }

                buttonContainer.appendChild(button)
                count++ // 每创建一个按钮，计数器加一
            })
            // 将按钮容器添加到对话框中
            dialog.appendChild(buttonContainer)

            // 文件列表
            const fileListContainer = document.createElement('ul')
            fileListContainer.className = 'file-list'
            fileListContainer.innerHTML = fileList
            dialog.appendChild(fileListContainer)

            // 添加到body

            document.body.appendChild(dialog)
            let selectButtonInitialTop = 0
            let selectAllButton = document.querySelector('.select-all-button')
            let searchButton = document.querySelector('.search-button')
            let downloadSelectedButton = document.querySelector('.download-button')
            let deleteSelectedButton = document.querySelector('.delete-button')
            let selectButton = document.querySelector('.select-button')
            let closeXButton = document.querySelector('.close-x-button')
            let scrollTimeout = 0 // 定义全局变量存储定时器
            // 记录选择按钮的初始位置
            if (selectButton) {
                selectButtonInitialTop = selectButton.offsetTop
            }

            // 监听对话框的滚动事件
            dialog.addEventListener('scroll', function () {
                clearTimeout(scrollTimeout)
                const buttons = [
                    { button: selectButton, offsetHeight: true },
                    { button: selectAllButton, offsetHeight: true },

                    { button: deleteSelectedButton, offsetHeight: true },
                    { button: downloadSelectedButton, offsetHeight: true },
                    { button: searchButton, offsetHeight: true },
                    { button: closeXButton, offsetHeight: true },


                    // 添加更多按钮对象，如果有的话
                ]
                scrollTimeout = setTimeout(() => {
                    if (buttons.every(buttonObj => buttonObj.button)) {
                        const dialogRect = dialog.getBoundingClientRect()
                        const fileListRect = fileListContainer.getBoundingClientRect()
                        const newButtonTopBase = Math.max(fileListRect.top, dialog.scrollTop)
                        let newButtonTop = newButtonTopBase

                        for (const { button, offsetHeight } of buttons) {
                            if (button) {
                                button.style.position = dialog.scrollTop === 0 ? 'static' : 'absolute'
                                button.style.top = `${newButtonTop}px`
                                button.style.right = '10px'
                                if (offsetHeight) {
                                    newButtonTop += button.offsetHeight
                                }
                            }
                        }
                    }
                }, 300) // 设置 300 毫秒的超时
            })


            // 获取所有复选框
            const checkboxes = fileListContainer.querySelectorAll('input[type="checkbox"]')

            // 初始隐藏复选框
            checkboxes.forEach(checkbox => {
                checkbox.style.display = 'none'
            })
            //选中全部
            function toggleSelectAll() {
                const checkboxes = document.querySelectorAll('input[name="fileCheckbox"]')
                const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked)

                checkboxes.forEach(checkbox => {
                    checkbox.checked = !allChecked
                })

                // 切换按钮文本和背景颜色
                if (allChecked) {
                    selectAllButton.textContent = '全部选中'
                    selectAllButton.style.backgroundColor = '' // 恢复默认背景颜色
                } else {
                    selectAllButton.textContent = '全部取消选中'
                    selectAllButton.style.backgroundColor = 'red' // 改为红色背景
                }
            }
            //搜索
            //---------------
            function toggleSearch() {
                if (searchButton.textContent === '搜索列表') {
                    // 如果当前是搜索状态，则进行搜索
                    const searchTerm = prompt('请输入搜索内容：') // 弹出输入框等待用户输入搜索内容
                    if (searchTerm !== null) { // 用户点击了确定按钮
                        filterFiles(searchTerm) // 调用过滤文件函数，传入搜索关键词
                        searchButton.textContent = '回到列表' // 将搜索按钮文本改为"Back"
                    }
                } else {
                    // 如果当前是Back状态，则恢复初始文件列表
                    resetFileList()
                }
            }

            function filterFiles(searchTerm) {
                const files = Array.from(fileListContainer.children) // 获取文件列表的所有子元素（文件项）
                let matchCount = 0 // 初始化匹配数量为 0

                // 遍历文件列表，根据搜索关键词过滤显示符合条件的文件项
                files.forEach(file => {
                    const fileName = file.querySelector('.file-link').textContent.toLowerCase() // 获取文件名并转换为小写
                    if (fileName.includes(searchTerm.toLowerCase())) {
                        file.style.display = '' // 匹配到的文件项显示
                        matchCount++ // 匹配数量加一
                    } else {
                        file.style.display = 'none' // 不匹配的文件项隐藏
                    }
                })

                // 更新文件数量标签内容
                const fileCountLabel = document.getElementById('fileCountLabel')
                if (fileCountLabel) {
                    fileCountLabel.textContent = `搜索数量: `
                }

                // 更新包裹文件数量的元素内容
                const fileCountElement = document.querySelector('.file-count')
                if (fileCountElement) {
                    fileCountElement.textContent = matchCount
                }
            }


            // 恢复初始文件列表函数
            function resetFileList() {
                const files = Array.from(fileListContainer.children) // 获取文件列表的所有子元素（文件项）
                files.forEach(file => {
                    file.style.display = '' // 显示所有文件项
                })
                searchButton.textContent = '搜索列表' // 恢复搜索按钮文本为"搜索"

                // 更新文件数量标签内容为 "文件数量："
                const fileCountLabel = document.getElementById('fileCountLabel')
                if (fileCountLabel) {
                    fileCountLabel.textContent = '文件数量：'
                }

                // 更新包裹文件数量的元素内容为当前文件数量
                const fileCountElement = document.querySelector('.file-count')
                if (fileCountElement) {
                    const currentFileCount = files.length // 获取当前文件数量
                    fileCountElement.textContent = currentFileCount
                }
            }
            //搜索结束
            //---------------

            // 选择列表
            function toggleSelection() {

                checkboxes.forEach(checkbox => {
                    checkbox.style.display = checkbox.style.display === 'none' ? 'inline-block' : 'none'
                    checkbox.checked = false // 取消复选框的选中状态
                })

                // 切换显示“删除选中”和“下载选中”按钮
                deleteSelectedButton.style.display = deleteSelectedButton.style.display === 'none' ? 'inline-block' : 'none'
                downloadSelectedButton.style.display = downloadSelectedButton.style.display === 'none' ? 'inline-block' : 'none'
                selectAllButton.style.display = selectAllButton.style.display === 'none' ? 'inline-block' : 'none'
                selectButton.textContent = downloadSelectedButton.style.display === 'none' ? '选择列表' : '取消选择'
            }

        }
        //选中下载
        async function downloadSelectedFiles() {
            // 获取所有选中的复选框
            const checkboxes = document.querySelectorAll('input[name="fileCheckbox"]:checked')
            if (checkboxes.length === 0) {
                showModal('没有选中的文件', 2000)
                return
            }
            // 创建一个 JSZip 实例
            const zip = new JSZip()

            try {
                // 遍历所有选中的复选框
                for (const checkbox of checkboxes) {
                    // 获取文件项信息
                    const fileItem = checkbox.closest('li')
                    const fileName = fileItem.querySelector('a[data-display-name]').dataset.displayName

                    // 调用 downloadFile 函数，将文件添加到压缩包中
                    await downloadFile(webdavfold, fileName, zip)
                }

                // 生成 ZIP 文件
                const zipBlob = await zip.generateAsync({ type: 'blob' })

                // 创建下载链接并触发下载
                const zipUrl = URL.createObjectURL(zipBlob)
                const a = document.createElement('a')
                a.href = zipUrl
                a.download = 'selected_files.zip'
                a.click()

                console.log('压缩包下载完成')
                showModal('下载选中完成:', 2000)
            } catch (error) {
                console.error('下载选中文件失败:', error)
                showModal('下载选中文件失败: ' + error.message, 2000)

            }
        }


        //选中删除
        function deleteSelectedFiles() {
            // 获取所有选中的复选框
            const selectedCheckboxes = document.querySelectorAll('input[name="fileCheckbox"]:checked')

            if (selectedCheckboxes.length === 0) {
                alert('没有选中文件')
                return
            }

            // 弹出确认删除的提示框
            const confirmDelete = confirm('确定要删除选中的文件吗？')

            if (confirmDelete) {
                deleteSelected = true
                selectedCheckboxes.forEach(checkbox => {
                    const fileItem = checkbox.closest('li')
                    const deleteButton = fileItem.querySelector('a[onclick*="deleteFile"]')

                    // 调试日志
                    console.log('fileItem:', fileItem)
                    console.log('deleteButton:', deleteButton)

                    // 获取文件名
                    const fileName = fileItem.querySelector('a[data-display-name]').dataset.displayName

                    // 添加调试日志
                    console.log('Deleting file:', fileName)

                    // 触发删除按钮的点击事件
                    deleteButton.click()
                    //deleteFile(webdavfold,fileName);

                    // 将文件项标记为已删除
                    // markItemDeleted(fileItem);
                })
                deleteSelected = false
                console.log('删除选中文件')
            }
        }


        // 将 API 方法公开
        return {
            listFilesAndFolders,
            updateConfig,
            createFolder,
            uploadFile,
            renameFile,
            deleteFile,
            downloadFile,
            downloadAndDisplayFile,
            checkFolderExists
        }
    })()

    // 将库暴露到全局作用域
    unsafeWindow.WebDAVManager = WebDAVManager

    // 示例用法：列出文件和文件夹，创建新文件夹，上传文件，删除文件
    if (!url || !username || !password) {
        console.error('WebDAV 配置更新失败：缺少 URL、用户名或密码')
        return
    }
    WebDAVManager.updateConfig(webdavUrl, webdavUsername, webdavPassword)
    WebDAVManager.createFolder(webdavfold)
    WebDAVManager.checkFolderExists(webdavfold)

    //WebDAVManager.uploadFile(webdavfold, 'nidie.txt', '这是 example.txt 的内容');
    // WebDAVManager.deleteFile('Missav保存', 'example.txt');

})();


