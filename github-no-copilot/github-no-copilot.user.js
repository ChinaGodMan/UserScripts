// ==UserScript==
// @name         GitHub No Copilot
// @name:zh-CN   GitHub 隐藏 Copilot
// @description  Hiding Silly Copilot in GitHub
// @description:zh-CN 在 GitHub 上隐藏愚蠢的 Copilot
// @author       人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL   https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL  https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @match        https://github.com/*
// @icon        https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/github-commit-viewer.png
// @grant        none
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @compatible   opera
// @compatible   safari
// @compatible   kiwi
// @compatible   qq
// @compatible   via
// @compatible   brave
// @version      2025.5.19.1
// @created      2025-05-19 02:19:24
// @downloadURL  https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-no-copilot/github-no-copilot.user.js
// @updateURL    https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-no-copilot/github-no-copilot.user.js
// ==/UserScript==
/**
 * File: github-no-copilot.user.js
 * Project: UserScripts
 * File Created: 2025/05/19,Monday 02:19:25
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/05/19,Monday 03:27:16
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

//! 删除顶部的 Copilot
const FUCK_HEAD_COPILOT = true

//! 删除文件右上角的 Copilot
const FUCK_FILE_COPILOT = true

//!https://github.com/dashboard 对话框
const style = document.createElement('style')
style.textContent = `
h2.my-2 {
        display: none !important;
    }
#dashboard > div > div.copilotPreview__container > copilot-dashboard-entrypoint {
    display: none !important;
}
`
document.head.appendChild(style)

function remove() {
    // 无需确认的元素
    const selectors = [
        //dashboard 同上css
        '.copilotPreview__container',

        //dashboard 同上css
        '.copilot-dashboard-entrypoint',

        // 侧边栏
        'a[data-analytics-event*="COPILOT"]'
    ]
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => element.remove())
    })

    // 可自定义开启或者关闭的元素
    const ButtonGroup = document.querySelector('#repos-sticky-header [class*=\'ButtonGroup\']')
    const CopilotChat = document.querySelector('.AppHeader-CopilotChat')
    if (FUCK_FILE_COPILOT && ButtonGroup) ButtonGroup.style.display = 'none'
    if (FUCK_HEAD_COPILOT && CopilotChat) CopilotChat.style.display = 'none'

}

new MutationObserver(remove).observe(document.body, {
    childList: true,
    subtree: true
})
