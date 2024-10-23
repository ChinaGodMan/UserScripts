// ==UserScript==
// @name              网页关键词高亮显示
// @name:zh-CN        网页关键词高亮显示
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @version           1.0.5.26
// @description       在网页上自定义关键词突出显示包括滚动时动态加载的内容
// @description:zh-CN 在网页上自定义关键词突出显示包括滚动时动态加载的内容
// @author            人民的勤务员 <china.qinwuyuan@gmail.com> & leconte112
// @match             *://*/*
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_registerMenuCommand
// @grant             GM_addStyle
// @license           MIT
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts
// @icon              data:image/png;base64,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
// @iconbak           https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-mark-96.png
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
