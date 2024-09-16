// ==UserScript==
// @name         外语终结者
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @version 1.3.98.24
// @description  识别非中文字符，如果长度大于5且翻译文本中不含中文，则替换为中文
// @license      MIT
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEUAAADqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTInqTIn////yp7387vL2zdjvka7uian99ff30dv52eH++Pr64ujwnLXtgKPyrL/rVY32yNT1xtPrXpHrWY764ef99/j++vvqUIr65Or53+bwm7TugqTtfKHteqD1wc/88fT2ytX76Oz41N30u8vxpLvzscPsapdcPEFQAAAAHXRSTlMA2JQoSQiLNvfnfz8Q8My5sW/fX1ROGr+hmCAbpYFuRDsAAAOsSURBVHja7dtrU9pAFMbxVYvi/X7vWQLBEA0QInewivX7f6dqu7OHsJDNMrN7pmN+L8U2/4aHRNrCFlzt/7Br54CtVLq82QX7jrZ3lh/+1PrRseGSKX6cgUvXdyxtGxw7vEid/mNwb4+hE6BwSnT+0b44/j4QORPXhA2gssm+nAOZ8h2eABrbjLEdILRL9xLAF8IRkMCrURkonbAtILVRBOQLmNSED9CwFFDlQgU0ioBvHOB7KWEwHcZOA2pc0X2rEQWgZEQcwLuznnnAR2XRgAtV5SEMWCGIjQNq3ID+F/Vj4gAe9IgD+Iw6oDtyEBD7KcPpC0eJ/QBVL2pwyXcYgMZ1+V1vJAEwbsgVdNYK8KqCx4VBVejmCYBIdg7XCghWX4rruQJ6colTmgCY4m9FEzDkQkgU4Ms5FQFFQBFQBKwVED4KAy60xReGjXwBI08YOL4dq4qAbxTQrgsBTUDzWT40IQmIuNQmCQi5VO+sGTB5WORxIVQegrQnPued4C+pfvE5ifuADk4QZ+gyIOIpbecBIU957jgNwAniDF0G4ARR4jQAJ4gmTgMirmg5DQjl+F7l1bDpMAAn2Ipwhg4DcIJPcQNn6CygKQ8aAlQ1MzQLwB8y3nNNsDL/dLRd/bMdTrDxNbx+1gwtBKT+zMr5UNgIaOEE4VM8twiFjYDm4gFxhmNQ6QMGnjAClGuCkfKUrBXgccFfZ4KQmmHPZoB6FVzysrQdoE4wPcPEfkBHHuylIvVxhtYDIp6pZT0g5JnqTcsBI65RsRzQ4hqJpQCcoM7ENACf1UfQqnCtlnFAoLmQKrG6GZoGTOULu6e/CuZQMQ0Y4s0l/wQfqovkOgamAXFX3l3GunfEGVt/wBkaBsAbPn/ZBZWs0+zjDE0DfC41oowd4G33ednQXnGGhgGQcPTSHvop8fIbseo3nh/TgFGXr1ZbfiNWxThD0wCY5QnACYagUH42NAvoBVkB6gR1W2qbBkDc1wRoJogzxO8wCoA40AQoE9TM0DQAerPuigD1HbH+XpnoA1SjJCugk+f9D0aODQKQ/9ZdEqCdIBrhDI0CUGc4DUIvxReXek94xYFlvMvqiy/8f/+rVioCioAiwEJACUhdk33IBj9mcwOULhi7BELlA8ZKh0DnhH3aAxL4ebsDulNwwv46BSLlLfbPMdA4ZcLBGVD4yaStXXDvuMTQ/RG4dlti80qb4NThOVu043CK5c0rhjDh1s0UNvbw8ErD+famXXsX92zeHzuqGriI4sATAAAAAElFTkSuQmCC
// @iconbak https://immersive-translate.owenyoung.com/favicon.png
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @connect      translate.googleapis.com
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
//https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dj=1&dt=t&dt=rm&q=你好
(function () {
    'use strict'
    // 添加一个对象来跟踪已经翻译过的节点
    var translatedNodes = {}
    var skipClasses = GM_getValue('skipClasses') || ['prettyprint', 'linenums', 'lang-js']
    // 创建一个 MutationObserver 实例
    var observer = new MutationObserver(function (mutationsList) {
        // 遍历每一个发生变化的 mutation
        for (var mutation of mutationsList) {
            // 检查是否有子节点被添加到文档中
            //if (mutation.type === 'childList') {
            // 遍历新增加的节点
            mutation.addedNodes.forEach(function (addedNode) {
                // 如果新增节点是元素节点，可以递归扫描子节点以查找文本内容
                if (addedNode.nodeType === Node.ELEMENT_NODE) {
                    if (!isInsidePreCode(addedNode)) {
                        scanTextNodes(addedNode)
                    }
                    //  scanTextNodes(addedNode);
                    // console.log("New element node added:", addedNode.nodeName);
                }
            })
            // }
        }
    })
    function isInsidePreCode(node) {
        while (node) {
            if (node.matches && node.matches('pre')) {
                return true
            }
            node = node.parentElement
        }
        return false
    }
    // 配置 MutationObserver 监听的目标节点和观察的属性
    var config = { childList: true, subtree: true }
    // 开始监听文档的变化
    observer.observe(document.body, config)
    // 添加或移除翻译功能
    function toggleTranslation() {
        var currentSite = window.location.hostname
        var enabledSites = GM_getValue('enabledSites') || []
        if (enabledSites.includes(currentSite)) {
            enabledSites = enabledSites.filter(function (site) {
                return site !== currentSite
            })
            GM_setValue('enabledSites', enabledSites)
            Toast('已移出翻译！', 3000, 'rgba(0, 128, 0, 0.7)', '#fff')
            location.reload()
        } else {
            enabledSites.push(currentSite)
            GM_setValue('enabledSites', enabledSites)
            Toast('已添加翻译！', 3000, 'rgba(0, 128, 0, 0.7)', '#fff')
            location.reload()
        }
    }
    var skipClasses = ['prettyprint', 'linenums', 'lang-js']
    function shouldSkipElement(element) {
        // 跳过类名包含 "prettyprint"、"linenums" 和 "lang-js" 的元素
        if (element.classList.contains('prettyprint') ||
            element.classList.contains('linenums') ||
            element.classList.contains('lang-js')) {
            return true
        }
        // 还可以根据其他需要跳过的条件进行判断
        return false
    }
    // 编辑生效站点列表
    function editSites() {
        // 检查是否已经存在编辑窗口
        if (document.getElementById('editorContainer')) {
            return
        }
        var enabledSites = GM_getValue('enabledSites') || []
        var siteList = enabledSites.join('\n')
        var editorWindow = document.createElement('div')
        editorWindow.innerHTML = `
            <div id="editorContainer" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; border-radius: 5px; z-index: 9999;">
                <textarea id="siteList" style="width: 300px; height: 200px; margin-bottom: 10px;">${siteList}</textarea><br>
                <button id="saveButton" style="padding: 5px 10px; background: #007bff; color: #fff; border: none; border-radius: 3px; cursor: pointer;">保存</button>
                <button id="cancelButton" style="margin-left: 10px; padding: 5px 10px; background: #ccc; color: #333; border: none; border-radius: 3px; cursor: pointer;">取消</button>
            </div>
            <div id="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999;"></div>
        `
        document.body.appendChild(editorWindow)
        var saveButton = document.getElementById('saveButton')
        var cancelButton = document.getElementById('cancelButton')
        var siteListTextarea = document.getElementById('siteList')
        var overlay = document.getElementById('overlay')
        saveButton.addEventListener('click', function () {
            var editedSites = siteListTextarea.value.split('\n').map(function (site) {
                return site.trim()
            }).filter(Boolean)
            GM_setValue('enabledSites', editedSites)
            Toast('已保存生效站点列表！', 3000, 'rgba(0, 128, 0, 0.7)', '#fff')
            document.body.removeChild(editorWindow)
            document.body.removeChild(overlay)
        })
        cancelButton.addEventListener('click', function () {
            document.body.removeChild(editorWindow)
            document.body.removeChild(overlay)
        })
    }
    // 注册油猴菜单命令
    GM_registerMenuCommand(isCurrentSiteEnabled() ? '移出翻译' : '添加翻译', toggleTranslation)
    GM_registerMenuCommand('编辑生效站点', editSites)
    // GM_registerMenuCommand('开启/关闭高亮和删除功能', toggleMouseListeners)
    // 递归遍历给定节点及其后代（深度优先搜索）
    function scanTextNodes(node) {
        if (!node.parentNode || !document.body.contains(node)) {
            return
        }
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                if (node.tagName.toLowerCase() === 'script' || node.isContentEditable) {
                    return
                }
                if (shouldSkipElement(node)) {
                    return
                }
                if (shouldTranslateNode(node)) { // 检查是否应该翻译该节点
                    node.childNodes.forEach(scanTextNodes)
                }
                break
            case Node.TEXT_NODE:
                var text = node.nodeValue.trim()
                if (!containsChinese(text) && text.length > 5 && isCurrentSiteEnabled() && shouldTranslateNode(node.parentNode)) {
                    translateText(node, text)
                }
                break
        }
    }
    // 检查当前站点是否在生效站点列表中
    function isCurrentSiteEnabled() {
        var currentSite = window.location.hostname
        var enabledSites = GM_getValue('enabledSites') || []
        return enabledSites.includes(currentSite)
    }
    // 检查字符串是否含中文或者片假字
    function containsChinese(str) {
        // 日文片假字范围：\u3040-\u30FF\uFF66-\uFF9F
        var katakanaRegex = /[\u3040-\u30FF\uFF66-\uFF9F]/
        if (katakanaRegex.test(str)) {
            return false // 如果包含日文片假字，则返回 false
        }
        // 中文字符范围：\u4E00-\u9FA5
        var chineseRegex = /[\u4E00-\u9FA5]/
        return chineseRegex.test(str) // 返回是否包含中文字符
    }
    // 检查字符串是否含有数字
    function containsNumbers(str) {
        return /^\s*[a-zA-Z\u4E00-\u9FA5\s]+\s*$/.test(str)
    }
    // 检查字符串是否为网址
    function isURL(str) {
        return /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/=]|\w([\w._-])+@\w[\w\._-]+\.(com|cn|org|net|info|tv|cc|gov|edu)|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc|gov|edu))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi.test(str)
    }
    // 检查是否应该翻译该节点
    function shouldTranslateNode(node) {
        // 检查是否已经翻译过该节点
        return !translatedNodes[node.textContent]
    }
    // 翻译文本
    function translateText(node, text) {
        // 检查是否已经翻译过该节点
        if (translatedNodes[node.textContent]) {
            return
        }
        var api = 'https://translate.googleapis.com/translate_a/single'
        var params = {
            client: 'gtx',
            dt: 't',
            sl: 'auto',
            tl: 'zh-CN',
            q: text
        }
        GM_xmlhttpRequest({
            method: 'GET',
            url: api + buildQueryString(params),
            onload: function (response) {
                try {
                    var data = JSON.parse(response.responseText.replace("'", '\u2019'))
                    var translatedText = data[0][0][0]
                    showTranslation(node, text, translatedText)
                    // 标记该节点已经翻译过
                    translatedNodes[node.textContent] = true
                } catch (error) {
                    console.error('翻译失败：', error)
                }
            },
            onerror: function (response) {
                console.error('请求翻译失败：', response.statusText)
            }
        })
    }
    // 构建查询字符串
    function buildQueryString(params) {
        return '?' + Object.keys(params).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        }).join('&')
    }
    // 显示翻译
    // 显示翻译
    function showTranslation(node, originalText, translatedText) {
        // 创建 <ruby> 元素和 <rt> 元素
        var rubyElement = document.createElement('ruby') // 创建包含音标的元素
        var rtElement = document.createElement('rt') // 创建音标元素
        // 设置音标元素的文本内容
        rtElement.textContent = translatedText
        // 设置音标元素的字体大小
        rtElement.style.fontSize = 'smaller'
        // 设置音标元素的文本左对齐
        rtElement.style.textAlign = 'left'
        rtElement.style.color = 'red' // 设置音标元素的颜色
        // 将音标元素添加到包含音标的元素中
        rubyElement.appendChild(rtElement)
        // 在中文翻译节点之后插入包含音标的元素
        //node.parentNode.insertBefore(rubyElement, node.nextSibling);
        // 将原始的非中文字符串替换为翻译后的文本
        node.textContent = translatedText // 替换原始的非中文字符串
    }
    // 主函数
    function main() {
        // 在页面加载时进行一次扫描
        scanTextNodes(document.body)
    }
    // 启动脚本
    main()
    // 弹出提示信息
    function Toast(msg, duration, backgroundColor, textColor) {
        duration = isNaN(duration) ? 3000 : duration
        backgroundColor = backgroundColor || 'rgba(0, 0, 0, 0.7)'
        textColor = textColor || 'rgb(255, 255, 255)'
        var m = document.createElement('div')
        m.innerHTML = msg
        m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: " + textColor + ";line-height: 40px;text-align: center;border-radius: 12px;position: fixed;top: 95%;left: 50%;transform: translate(-50%, -50%);z-index: 2147483647;background: " + backgroundColor + ";font-size: 16px;"
        document.body.appendChild(m)
        setTimeout(function () {
            var d = 0.5
            m.style.transition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
            m.style.opacity = '0'
            setTimeout(function () {
                document.body.removeChild(m)
            }, d * 1000)
        }, duration)
    }
})()
