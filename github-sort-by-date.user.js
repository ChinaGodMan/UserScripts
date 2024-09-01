// ==UserScript==
// @name         GitHub Sort by Date
// @name:zh-CN   GitHub 按日期排序
// @name:vi      GitHub Sắp xếp theo Ngày
// @name:ja      GitHub 日付順ソート
// @name:ko      GitHub 날짜별 정렬
// @description  Change the file sorting order to descending by date for easier viewing of the most recently updated files.
// @description:zh-CN  将文件排序方式改为日期降序，方便查看最新更新的文件。
// @description:vi     Thay đổi thứ tự sắp xếp tệp thành giảm dần theo ngày để dễ dàng xem các tệp được cập nhật gần đây nhất.
// @description:ja     ファイルの並び順を日付の降順に変更し、最新の更新ファイルを簡単に確認できるようにします。
// @description:ko     파일 정렬 순서를 날짜 내림차순으로 변경하여 가장 최근에 업데이트된 파일을 쉽게 확인할 수 있습니다。
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @version 1.1.0.9
// @author       @Androidcn ,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
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
