// ==UserScript==
// @name         ChatGPT Code Box Styling
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change the font size and enable word wrap in ChatGPT code boxes
// @author       ChatGPT
// @match        https://chatgpt.com/*
// @grant        none
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
