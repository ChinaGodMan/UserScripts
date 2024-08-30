// ==UserScript==
// @name         ChatGPT Code Box Styling
// @description  Change the font size and enable word wrap in ChatGPT code boxes
// @name:zh-CN        ChatGPT 代码字体变小
// @description:zh-CN   让 ChatGPT 代码字体变小,
// @namespace   https://greasyfork.org/users/1169082/
// @version 0.1.0.5
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://chatgpt.com/*
// @grant        none
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

(function () {
    'use strict'

    // 创建并插入自定义的CSS样式
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `
        pre code {
            font-size: 12px !important; /* 设置字体大小为12px */
            white-space: pre-wrap !important; /* 设置自动换行 */
            word-break: break-word !important; /* 设置单词断行 */
        }

        pre {
            overflow-x: auto !important; /* 允许水平滚动 */
        }
    `
    document.head.appendChild(style)
})()
