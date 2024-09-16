// ==UserScript==
// @name         Greasy fork脚本页面适用于网址增强
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @version 0.9.3.65
// @description  脚本详情页适用于网址不默认跳转搜索 转为可点击的文本链接并弹出提示
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://*.greasyfork.org/zh-CN/scripts/*
// @match        https://*.sleazyfork.org/zh-CN/scripts/*
// @icon              data:image/png;base64,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
// @iconbak https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @license      MIT
// @grant        GM_getValue
// @grant        GM_setValue
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

(function () {
    'use strict'
    let useWindowOpen = GM_getValue('useWindowOpen', false) // 默认在当前页面跳转
    let linkBehavior = GM_getValue('linkBehavior', 0)
    let shouldMatchLink = false // 添加一个全局变量，默认为假 不显示适用于脚本的数量

    function Toast(msg, duration) {
        duration = isNaN(duration) ? 3000 : duration
        var m = document.createElement('div')
        m.innerHTML = msg
        m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: black;line-height: 40px;text-align: center;border-radius: 12px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 2147483647;background: white;font-size: 16px;"
        document.body.appendChild(m)
        setTimeout(function () {
            var d = 0.5
            m.style.transition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
            m.style.opacity = '0'; setTimeout(function () { document.body.removeChild(m) }, d * 1000)
        }, duration)
    }


    function navigateTo(url, useWindowOpen) {
        if (useWindowOpen) {
            window.open(url, '_blank')
        } else {
            window.location.href = url
        }
    }

    const ddElements = document.querySelectorAll('dd.script-show-applies-to ul.block-list.expandable > li')

    ddElements.forEach(dd => {
        const link = dd.querySelector('a[title^="查看其他"]')
        const text = dd.textContent.trim()
        if (shouldMatchLink && link) { // 检查 shouldMatchLink 变量的值
            const match = link.title.match(/查看其他 (\d+) 个适用/)
            if (match) {
                const count = match[1]
                const note = document.createElement('sup')
                note.textContent = count
                link.appendChild(note)
                link.title = link.title.replace(/ \d+ /, ' ')
                link.addEventListener('click', function (event) {
                    event.preventDefault()
                    handleLinkClick(text)
                })
            }
        } else {
            const newLink = document.createElement('a')
            newLink.textContent = text
            newLink.href = '#'
            newLink.addEventListener('click', function (event) {
                event.preventDefault()
                handleLinkClick(text)
            })
            dd.textContent = ''
            dd.appendChild(newLink)
        }
    })

    function handleLinkClick(linkText) {
        if (linkBehavior === 0) {
            const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor
            const dialogBox = document.createElement('div')
            dialogBox.style.position = 'fixed'
            dialogBox.style.top = '50%'
            dialogBox.style.left = '50%'
            dialogBox.style.transform = 'translate(-50%, -50%)'
            dialogBox.style.background = bodyBackgroundColor
            dialogBox.style.padding = '20px'
            dialogBox.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            dialogBox.style.borderRadius = '8px'
            dialogBox.style.zIndex = '9999'
            dialogBox.innerHTML = `
                <span id="closeBtn" style="position: absolute; top: 10px; right: 10px; color: red; cursor: pointer; font-size: 30px;">&times;</span>
                <p style="font-weight: bold; font-size: 20px;"> <span id="linkTextSpan" style="color: red;">${linkText}</span> 操作</p>
                <button id="forumSearchBtn">论坛搜索</button>
                <button id="openUrlBtn">打开网址</button>
                <button id="copyLinkBtn">复制链接</button>
            `
            document.body.appendChild(dialogBox)

            let dialogInitialX, dialogInitialY, initialX, initialY
            dialogBox.addEventListener('mousedown', onMouseDown)
            dialogBox.addEventListener('touchstart', onTouchStart)

            function onMouseDown(event) {
                dialogInitialX = dialogBox.offsetLeft
                dialogInitialY = dialogBox.offsetTop
                initialX = event.clientX
                initialY = event.clientY
                document.addEventListener('mousemove', onMouseMove)
                document.addEventListener('mouseup', onMouseUp)
            }

            function onTouchStart(event) {
                dialogInitialX = dialogBox.offsetLeft
                dialogInitialY = dialogBox.offsetTop
                initialX = event.touches[0].clientX
                initialY = event.touches[0].clientY
                document.addEventListener('touchmove', onTouchMove)
                document.addEventListener('touchend', onTouchEnd)
            }

            function onMouseMove(event) {
                const deltaX = event.clientX - initialX
                const deltaY = event.clientY - initialY
                dialogBox.style.left = dialogInitialX + deltaX + 'px'
                dialogBox.style.top = dialogInitialY + deltaY + 'px'
            }

            function onTouchMove(event) {
                const deltaX = event.touches[0].clientX - initialX
                const deltaY = event.touches[0].clientY - initialY
                dialogBox.style.left = dialogInitialX + deltaX + 'px'
                dialogBox.style.top = dialogInitialY + deltaY + 'px'
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove)
                document.removeEventListener('mouseup', onMouseUp)
            }

            function onTouchEnd() {
                document.removeEventListener('touchmove', onTouchMove)
                document.removeEventListener('touchend', onTouchEnd)
            }

            document.getElementById('linkTextSpan').style.pointerEvents = 'none'
            document.getElementById('closeBtn').addEventListener('click', function () {
                document.body.removeChild(dialogBox)
            })

            document.getElementById('copyLinkBtn').addEventListener('click', function () {
                const linkText = document.getElementById('linkTextSpan').innerText
                const tempTextarea = document.createElement('textarea')
                tempTextarea.value = linkText
                document.body.appendChild(tempTextarea)
                tempTextarea.select()
                document.execCommand('copy')
                document.body.removeChild(tempTextarea)
                document.body.removeChild(dialogBox)
                Toast('文本已复制到剪贴板！', 1000)
            })

            document.getElementById('forumSearchBtn').addEventListener('click', function () {
                const newUrl = `https://${location.host}/zh-CN/scripts/by-site/${linkText}`
                navigateTo(newUrl, useWindowOpen)
                document.body.removeChild(dialogBox)
            })

            document.getElementById('openUrlBtn').addEventListener('click', function () {
                const originalUrl = `https://${linkText.replace(/\d+/g, '')}`
                navigateTo(originalUrl, useWindowOpen)
                document.body.removeChild(dialogBox)
            })
        } else if (linkBehavior === 1) {
            const originalUrl = `https://${linkText.replace(/\d+/g, '')}`
            navigateTo(originalUrl, useWindowOpen)
        } else if (linkBehavior === 2) {
            const newUrl = `https://${location.host}/zh-CN/scripts/by-site/${linkText}`
            navigateTo(newUrl, useWindowOpen)
        }
    }

    const appliesToSection = document.querySelector('dt.script-show-applies-to')
    if (appliesToSection) {
        const changeConfigText = document.createElement('span')
        changeConfigText.textContent = '［适用于] '
        changeConfigText.style.fontWeight = 'bold'

        const checkboxLabel = document.createElement('label')
        checkboxLabel.textContent = '新窗口打开'
        checkboxLabel.style.marginLeft = '10px'

        const checkboxInput = document.createElement('input')
        checkboxInput.type = 'checkbox'
        checkboxInput.checked = useWindowOpen
        checkboxInput.style.marginRight = '5px'

        checkboxInput.addEventListener('change', function () {
            useWindowOpen = checkboxInput.checked
            GM_setValue('useWindowOpen', useWindowOpen)
        })

        checkboxLabel.appendChild(checkboxInput)

        const selectList = document.createElement('select')
        selectList.style.width = '7em'
        const options = [
            { value: 0, text: '弹出提示' },
            { value: 1, text: '打开网址' },
            { value: 2, text: '论坛搜索' }
        ]
        options.forEach(option => {
            const optionElement = document.createElement('option')
            optionElement.textContent = option.text
            optionElement.value = option.value
            if (linkBehavior === option.value) {
                optionElement.selected = true
            }
            selectList.appendChild(optionElement)
        })
        selectList.addEventListener('change', function () {
            linkBehavior = parseInt(selectList.value)
            GM_setValue('linkBehavior', linkBehavior)
            Toast(`点击"适用于"网址已设置为: ${options.find(option => option.value === linkBehavior).text}`, 1000)
        })

        appliesToSection.parentElement.appendChild(changeConfigText)
        appliesToSection.parentElement.appendChild(selectList)
        appliesToSection.parentElement.appendChild(checkboxLabel)
    }
})();

