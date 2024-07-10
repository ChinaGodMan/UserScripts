// ==UserScript==
// @name         去你妈的CSDN登录复制
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  去你妈的CSDN登录复制
// @author       Your Name
// @match        https://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function timeoutAfterLoad(callback, delay) {
        setTimeout(callback, delay);
    }

    timeoutAfterLoad(() => {
        // 修改复制按钮
        document.querySelectorAll(".hljs-button").forEach((e) => {
            e.setAttribute("data-title", "点击复制");
            e.classList.remove("signin");
            e.removeAttribute("onclick");
            e.addEventListener("click", () => {
                e.setAttribute("data-title", " ");
                navigator.clipboard.writeText(e.parentNode.innerText);
                e.setAttribute("data-title", "复制成功");
                setTimeout(() => e.setAttribute("data-title", "点击复制"), 1200);
            });
        });

        // 复制功能
        document.querySelector(".blog-content-box").addEventListener(
            "copy",
            (e) => {
                e.stopPropagation();
                e.preventDefault();

                navigator.clipboard.writeText(window.getSelection().toString());
            },
            true,
        );
        document.addEventListener(
            "keydown",
            (e) => {
                if (e.ctrlKey && e.keyCode == 67) { // Ctrl+C
                    e.stopPropagation();
                    e.preventDefault();

                    navigator.clipboard.writeText(window.getSelection().toString());
                }
            },
            true,
        );

        document.oncopy = null;
        window.oncopy = null;
    }, 500);
})();
