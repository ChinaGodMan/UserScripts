// ==UserScript==
// @name:zh-CN         在Github上打开jsDelivr链接
// @description:zh-CN  打开jsDelivr上的GitHub链接,用于快速下载文件
// @author             hungtcs,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL    https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @match        https://github.com/**/*
// @icon         https://camo.githubusercontent.com/6a5d2046028682a99b5fa88ef0f3399c9bced1d514179686a3973a323bccbf44/68747470733a2f2f7777772e6a7364656c6976722e636f6d2f69636f6e5f323536783235362e706e67
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @version         2025.02.24.06.00
// @Created         2025-02-24 06:00:00
// @modified        2025-02-24 06:00:00
// ==/UserScript==
(function () {
    'use strict'

    const iconUrl = 'https://camo.githubusercontent.com/6a5d2046028682a99b5fa88ef0f3399c9bced1d514179686a3973a323bccbf44/68747470733a2f2f7777772e6a7364656c6976722e636f6d2f69636f6e5f323536783235362e706e67'

    function run() {
        const copyPathButton = document.querySelector('[aria-label="Copy path"]')
        if (!copyPathButton) {
            return
        }

        const url = new URL(window.location.href)
        const { pathname } = url
        const isFile = pathname.includes('/blob/')
        const isFolder = pathname.includes('/tree/')

        let link
        if (isFolder) {
            const index = pathname.indexOf('/tree/')
            const author = pathname.slice(1, index)
            let rest = pathname.slice(index + 6)
            const version = rest.slice(0, rest.indexOf('/'))
            const filepath = rest.slice(rest.indexOf('/'))
            link = `https://cdn.jsdelivr.net/gh/${author}@${version}${filepath}/`
        } else if (isFile) {
            const index = pathname.indexOf('/blob/')
            const author = pathname.slice(1, index)
            let rest = pathname.slice(index + 6)
            const version = rest.slice(0, rest.indexOf('/'))
            const filepath = rest.slice(rest.indexOf('/'))
            link = `https://cdn.jsdelivr.net/gh/${author}@${version}${filepath}`
        } else {
            return
        }

        let actionButton = document.querySelector('button[aria-label="Open JsDelivr Link"]')
        if (!actionButton) {
            const copyPathButtonWrapper = copyPathButton.parentElement
            const container = copyPathButtonWrapper.parentElement
            const actionNode = copyPathButtonWrapper.cloneNode(true)
            actionButton = actionNode.querySelector('button')
            actionButton.setAttribute('title', 'Open JsDelivr Link')
            actionButton.setAttribute('aria-label', 'Open JsDelivr Link')
            actionButton.innerHTML = `<img src=${iconUrl} style="height: 16px;" />`
            container.appendChild(actionNode)
            Array.from(actionNode.children).forEach(child => child.getAttribute('title') !== 'Open JsDelivr Link' && actionNode.removeChild(child))
        }


        actionButton.onclick = () => {
            window.open(link)
        }
    }

    setInterval((event) => {
        run()
    }, 1000)
})()