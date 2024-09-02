// ==UserScript==
// @name         网页关键词高亮显示
// @namespace    https://greasyfork.org/zh-CN/users/1169082
// @version 1.0.5.14
// @description  在网页上自定义关键词突出显示包括滚动时动态加载的内容
// @description:zh-CN 在网页上自定义关键词突出显示包括滚动时动态加载的内容
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>  &  leconte112
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @license MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @icon   https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-mark-96.png
// ==/UserScript==

(function () {
    'use strict'

    let keywordsToMatch = GM_getValue('keywordsToMatch', [])
    let backgroundColor = GM_getValue('backgroundColor', '#FF0000')
    let textColor = GM_getValue('textColor', '#FFFF00')
    let blackBoxStyle = `background-color: ${backgroundColor} !important; color: ${textColor} !important;`

    function applyBlackBoxToElements() {
        const allTextNodes = []
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)

        let node
        while ((node = walker.nextNode())) {
            allTextNodes.push(node)
        }

        function processBatch(batch) {
            for (let textNode of batch) {
                const text = textNode.textContent.toLowerCase()
                for (const keyword of keywordsToMatch) {
                    if (text.includes(keyword.toLowerCase())) {
                        const parentElement = textNode.parentElement
                        if (parentElement) {
                            parentElement.style.cssText += blackBoxStyle
                        }
                        break
                    }
                }
            }
        }

        const batchSize = 100  // 每次处理100个节点
        for (let i = 0; i < allTextNodes.length; i += batchSize) {
            processBatch(allTextNodes.slice(i, i + batchSize))
        }
    }

    function observeAndApplyBlackBox() {
        const observer = new MutationObserver(function (mutations) {
            const addedNodes = []
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    addedNodes.push(...mutation.addedNodes)
                }
            }
            if (addedNodes.length > 0) {
                setTimeout(applyBlackBoxToElements, 500)  // 延迟处理
            }
        })

        const config = { childList: true, subtree: true }
        observer.observe(document.body, config)
    }

    function handleScroll() {
        let timeout
        window.addEventListener('scroll', function () {
            clearTimeout(timeout)
            timeout = setTimeout(applyBlackBoxToElements, 200)  // 延迟处理
        })
    }

    function processPage() {
        applyBlackBoxToElements()
        observeAndApplyBlackBox()
        handleScroll()
    }

    function openEditDialog() {
        const dialogHTML = `
    <div id="editDialog" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 3px 3px 5px rgba(0,0,0,0.3); z-index: 9999; width: 60%; max-width: 600px; resize: both; overflow: auto;">
        <h3 style="cursor: move;">编辑高亮关键词和颜色</h3>
        <p>请输入用"#"号分隔的关键词：</p>
        <textarea id="keywordsInput" style="width: 100%; height: 100px; resize: vertical;">${keywordsToMatch.join('#')}</textarea>
        <p>请选择背景色：</p>
        <input type="color" id="bgColorPicker" value="${backgroundColor}">
        <p>请选择字体颜色：</p>
        <input type="color" id="textColorPicker" value="${textColor}">
        <div style="text-align: right; margin-top: 10px;">
            <button id="saveBtn">保存</button>
            <button id="cancelBtn">取消</button>
        </div>
    </div>
    <div id="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9998;"></div>
`
        document.body.insertAdjacentHTML('beforeend', dialogHTML)

        const keywordsInput = document.getElementById('keywordsInput')
        const bgColorPicker = document.getElementById('bgColorPicker')
        const textColorPicker = document.getElementById('textColorPicker')

        bgColorPicker.addEventListener('input', function () {
            keywordsInput.style.backgroundColor = bgColorPicker.value
        })

        textColorPicker.addEventListener('input', function () {
            keywordsInput.style.color = textColorPicker.value
        })
        document.getElementById('saveBtn').addEventListener('click', function () {
            const newKeywords = document.getElementById('keywordsInput').value.split('#').map(keyword => keyword.trim())
            keywordsToMatch = newKeywords
            GM_setValue('keywordsToMatch', keywordsToMatch)

            backgroundColor = document.getElementById('bgColorPicker').value
            textColor = document.getElementById('textColorPicker').value
            GM_setValue('backgroundColor', backgroundColor)
            GM_setValue('textColor', textColor)

            blackBoxStyle = `background-color: ${backgroundColor} !important; color: ${textColor} !important;`

            closeEditDialog()
            processPage()
        })

        document.getElementById('cancelBtn').addEventListener('click', function () {
            closeEditDialog()
        })
    }

    function closeEditDialog() {
        const dialog = document.getElementById('editDialog')
        const overlay = document.getElementById('overlay')
        if (dialog) {
            dialog.remove()
        }
        if (overlay) {
            overlay.remove()
        }
    }

    GM_registerMenuCommand('编辑高亮关键词和颜色', openEditDialog)
    processPage()
})()
