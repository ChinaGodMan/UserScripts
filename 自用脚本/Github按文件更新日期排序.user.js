// ==UserScript==
// @name         Github按文件更新日期排序
// @namespace    https://github.com/androidcn/
// @version      1.1
// @description  Github按文件更新日期排序...
// @author       @Androidcn
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none

// @downloadURL https://update.greasyfork.org/scripts/492514/Github%E6%8C%89%E6%96%87%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%97%A5%E6%9C%9F%E6%8E%92%E5%BA%8F.user.js
// @updateURL https://update.greasyfork.org/scripts/492514/Github%E6%8C%89%E6%96%87%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%97%A5%E6%9C%9F%E6%8E%92%E5%BA%8F.meta.js
// ==/UserScript==
(function () {
    'use strict'

    function createButton() {
        // Create a button element
        const button = document.createElement('button')
        button.textContent = '排序'
        button.style.position = 'fixed'
        button.style.top = '60px'
        button.style.right = '20px'
        button.style.zIndex = '9999'

        // Append the button to the body
        document.body.appendChild(button)

        // Add click event listener to the button
        button.addEventListener('click', performSortedAction)
    }
    function waitForElement(selector) {
        return new Promise((resolve) => {
            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) {
                    resolve()
                    observer.disconnect()
                }
            })
            observer.observe(document.body, { childList: true, subtree: true })
        })
    }
    function performSortedAction() {

        var files = document.querySelector('[aria-labelledby="folders-and-files"] tbody')
        var children = [...files.children]
        files.replaceChildren(
            children[0], ...[...files.querySelectorAll('.react-directory-row')].sort((a, b) => new Date(a.querySelector('relative-time').datetime) < new Date(b.querySelector('relative-time').datetime) ? 1 : -1), children.at(-1),
        )
        console.log('已按文件更新日期排序')
    }
    function WaitForRelativeTime() {
        waitForElement('relative-time').then(() => {
            performSortedAction()
        })
    }
    // Wait for the page to load
    window.addEventListener('load', WaitForRelativeTime)


})()
