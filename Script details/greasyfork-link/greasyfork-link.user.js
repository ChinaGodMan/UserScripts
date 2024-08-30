// ==UserScript==
// @name         Greasy fork脚本页面适用于网址增强
// @namespace     https://github.com/qinwuyuan-cn/UserScripts
// @version 0.9.3.49
// @description  脚本详情页适用于网址不默认跳转搜索 转为可点击的文本链接并弹出提示
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://*.greasyfork.org/zh-CN/scripts/*
// @match        https://*.sleazyfork.org/zh-CN/scripts/*
// @icon              https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
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

