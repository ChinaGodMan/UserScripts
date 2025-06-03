// ==UserScript==
// @name               Twitter(X) Download Blocklist and Mutedlist
// @name:zh-CN         Twitter(X)黑名单和屏蔽列表下载
// @description        This script allows you to download Twitter(X) blocklist and muted list, supports automatic page detection, and exports the corresponding list as a TSV file for easy backup and management.
// @description:zh-CN  用于下载 Twitter(X) 黑名单和屏蔽列表，支持自动检测页面并导出对应列表为 TSV 文件，方便备份和管理。
// @author             Skeeve,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @match              https://x.com/*
// @icon               https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/x.svg
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.3.1
// @created            2025-06-03 08:56:25
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-download-blocklist/twitter-download-blocklist.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-download-blocklist/twitter-download-blocklist.user.js
// ==/UserScript==

/**
 * File: twitter-download-blocklist.user.js
 * Project: UserScripts
 * File Created: 2025/06/03,Tuesday 08:56:25
 * Author: Skeeve,人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/06/03,Tuesday 10:50:55
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

/* Create a bookmark "GetBlocklist"
    https://x.com/settings/blocked/all#DOWNLOAD
    When clicking that bookmark, below userscript will kick in.
*/
/* Create a bookmark "GetMutedlist"
    https://x.com/settings/muted/all#DOWNLOAD
    When clicking that bookmark, below userscript will kick in.
*/

(function () {
    'use strict'

    var blockedAccounts = {}
    var blockedList = 'No.\tAccount\tName\n'
    let count = 0

    function download() {

        let blocklist = document.querySelector('[id^="accessible-list-"]').nextElementSibling
        if (blocklist === null || blocklist.querySelectorAll('a[aria-hidden]').length == 0) {
            console.log('waiting (download)')
            window.setTimeout(download, 100)
            return
        }
        let foundNew = false
        let lastFound = undefined
        blocklist.querySelectorAll('a:not([aria-hidden]):not([tabindex]):not([target="_blank"]):not([style~="color:"])').forEach(lnk => {
            if (blockedAccounts[lnk.pathname] == undefined) {
                foundNew = true
                blockedAccounts[lnk.pathname] = true
                lastFound = lnk
                ++count
                blockedList += count + '\t@' + lnk.pathname.substr(1) + '\t' + lnk.textContent + '\n'
            }
        })
        if (foundNew) {
            lastFound.scrollIntoView(true)
            window.setTimeout(download, 1000)
            return
        }
        console.log(blockedAccounts, count)
        if (confirm('Blocked accounts: ' + count + '\n\nDownload?')) {
            const blob = new Blob([blockedList], { type: 'text/tab-separated-values' })
            const fileURL = URL.createObjectURL(blob)
            const downloadLink = document.createElement('a')
            downloadLink.href = fileURL
            let Now = new Date()
            downloadLink.download = 'BlockedAccounts ' + Now.toISOString().split('.')[0].replace(/T/, ' ') + '.tsv'
            document.body.appendChild(downloadLink)
            downloadLink.click()
            URL.revokeObjectURL(fileURL)
        }
    }

    function createButton() {
        const button = document.createElement('button')
        button.innerText = 'Download'
        button.style.position = 'fixed'
        button.style.top = '10px'
        button.style.right = '10px'
        button.style.padding = '10px 20px'
        button.style.zIndex = 10000
        button.style.backgroundColor = '#1DA1F2'
        button.style.color = '#ffffff'
        button.style.border = 'none'
        button.style.borderRadius = '5px'
        button.style.cursor = 'pointer'
        button.style.fontSize = '14px'
        button.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)'
        button.addEventListener('click', download)
        button.style.display = 'none'
        document.body.appendChild(button)
        return button
    }

    const button = createButton()
    function checkUrl() {
        if (
            window.location.href.includes('/blocked/all') ||
            window.location.href.includes('/muted/all')
        ) {
            button.style.display = 'block'
        } else {
            button.style.display = 'none'
        }
    }
    (function () {
        const _wr = function (type) {
            const original = history[type]
            return function () {
                const result = original.apply(this, arguments)
                window.dispatchEvent(new Event(type))
                return result
            }
        }
        history.pushState = _wr('pushState')
        history.replaceState = _wr('replaceState')
    })()
    window.addEventListener('popstate', checkUrl)
    window.addEventListener('pushState', checkUrl)
    window.addEventListener('replaceState', checkUrl)
    checkUrl()

    switch (window.location.hash) {
        case '#DOWNLOAD':
            if (
                window.location.href.includes('/settings/blocked/all') ||
                window.location.href.includes('/settings/muted/all')
            ) {
                setTimeout(() => {
                    download()
                }, 3000)
            }
            break
        default:
            return
    }

})()
