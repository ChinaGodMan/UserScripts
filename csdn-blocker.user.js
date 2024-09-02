// ==UserScript==
// @name         解除CSDN登录复制
// @namespace    https://greasyfork.org/users/1169082/
// @version 1.0.0.11
// @description  去你妈的CSDN登录复制,无需登录即可复制
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://blog.csdn.net/*
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @grant        none
// @license      MIT
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLDlIMTguNUwxMywzLjVWOU02LDJIMTRMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkM0Ljg5LDIyIDQsMjEuMSA0LDIwVjRDNCwyLjg5IDQuODksMiA2LDJNMTAuNSwxMUM4LDExIDYsMTMgNiwxNS41QzYsMTggOCwyMCAxMC41LDIwQzEzLDIwIDE1LDE4IDE1LDE1LjVDMTUsMTMgMTMsMTEgMTAuNSwxMU0xMC41LDEyLjVBMywzIDAgMCwxIDEzLjUsMTUuNUMxMy41LDE2LjA2IDEzLjM1LDE2LjU4IDEzLjA4LDE3TDksMTIuOTJDOS40MiwxMi42NSA5Ljk0LDEyLjUgMTAuNSwxMi41TTcuNSwxNS41QzcuNSwxNC45NCA3LjY1LDE0LjQyIDcuOTIsMTRMMTIsMTguMDhDMTEuNTgsMTguMzUgMTEuMDYsMTguNSAxMC41LDE4LjVBMywzIDAgMCwxIDcuNSwxNS41WiIgZmlsbD0iI2NjMDAwMCIgLz48L3N2Zz4=


// ==/UserScript==
(function () {
    'use strict'

    function timeoutAfterLoad(callback, delay) {
        setTimeout(callback, delay)
    }

    timeoutAfterLoad(() => {
        // 修改复制按钮
        document.querySelectorAll(".hljs-button").forEach((e) => {
            e.setAttribute("data-title", "点击复制")
            e.classList.remove("signin")
            e.removeAttribute("onclick")
            e.addEventListener("click", () => {
                e.setAttribute("data-title", " ")
                navigator.clipboard.writeText(e.parentNode.innerText)
                e.setAttribute("data-title", "复制成功")
                setTimeout(() => e.setAttribute("data-title", "点击复制"), 1200)
            })
        })

        // 复制功能
        document.querySelector(".blog-content-box").addEventListener(
            "copy",
            (e) => {
                e.stopPropagation()
                e.preventDefault()

                navigator.clipboard.writeText(window.getSelection().toString())
            },
            true,
        )
        document.addEventListener(
            "keydown",
            (e) => {
                if (e.ctrlKey && e.keyCode == 67) { // Ctrl+C
                    e.stopPropagation()
                    e.preventDefault()

                    navigator.clipboard.writeText(window.getSelection().toString())
                }
            },
            true,
        )

        document.oncopy = null
        window.oncopy = null
    }, 500)
})()
