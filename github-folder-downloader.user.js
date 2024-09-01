// ==UserScript==
// @name        GitHub Folder Downloader
// @name:en        GitHub Folder Downloader
// @name:zh-CN    GitHub 文件夹下载器
// @name:zh-TW    GitHub 文件夾下載器
// @name:ja      GitHub フォルダー ダウンローダー
// @name:vi      Trình tải xuống thư mục GitHub
// @name:ko      GitHub 폴더 다운로더
// @description  To add a download button for a GitHub folder, which allows easy downloading of a specific folder, you can follow these steps
// @description:en  To add a download button for a GitHub folder, which allows easy downloading of a specific folder, you can follow these steps
// @description:zh-CN  添加一个下载按钮，允许轻松下载特定的 GitHub 文件夹。
// @description:zh-TW  添加一個下載按鈕，允許輕鬆下載特定的 GitHub 文件夾。
// @description:ja      特定の GitHub フォルダーを簡単にダウンロードできるダウンロードボタンを追加します。
// @description:vi      Thêm một nút tải xuống cho phép tải xuống thư mục GitHub cụ thể một cách dễ dàng.
// @description:ko      특정 GitHub 폴더를 쉽게 다운로드할 수 있는 다운로드 버튼을 추가합니다.
// @namespace               https://github.com/ChinaGodMan/UserScripts
// @version 0.7.0.10
// @author       EricKwok,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @match        *://github.com/*
// @icon         https://i.loli.net/2021/03/30/ULV9XunaHesqGIR.png
// @run-at       document-idle
// @grant        none
// @license      MIT
// ==/UserScript==
// 记录页面宽度是否允许 GitHub 展开完整页面的变量
var isFold = false
var isRun = false
function observeAndAddLinks() {
    const parentElement = document.querySelector('#__primerPortalRoot__')
    if (!parentElement) return
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.addedNodes.length > 0) {
                for (const node of mutation.addedNodes) {
                    const ulElement = parentElement.querySelector('ul[role="menu"]')
                    if (document.querySelector('.github-folder-download')) return
                    console.log(node)
                    if (ulElement) {
                        const _html = `
                            <li class="github-folder-download">
                                <p style="padding:0px 8px 2px 10px; color:grey; margin:0; font-size:10px;">Download folder with..</p>
                            </li>
                            <a class="dropdown-item" target="_blank" href="https://download-directory.github.io?url=${window.location.href}">
                                download-directory
                            </a>
                            <a class="dropdown-item" target="_blank" href="https://downgit.github.io/#/home?url=${window.location.href}">
                                DownGit
                            </a>
                            <li class="d-block d-md-none dropdown-divider github-folder-download" role="none"></li>`
                        ulElement.insertAdjacentHTML("beforeend", _html)
                    }
                    return
                }
            }
        }
    })
    const config = { childList: true, subtree: true }
    if (!isRun) {
        isRun = true
        observer.observe(parentElement, config)
    }
    return true
}
observeAndAddLinks()
// 注入下载文件夹按钮
function injectDownloadFolderBtn() {
    if (document.querySelector('.github-folder-download')) return
    if (!isFold) {
        // 展开状态（PC端）
        let html = document.querySelector('[data-testid="tree-overflow-menu-anchor"]')//.types__StyledButton-sc-ws60qy-0.feqCqy
        let _html = `
            <details data-view-component="true" class="details-overlay details-reset position-relative mr-2 github-folder-download">
                <summary role="button" data-view-component="true">
                    <span class="btn d-none d-md-flex flex-items-center">
                        Download folder
                        <span class="dropdown-caret ml-1"></span>
                    </span>
                    <span class="btn d-inline-block d-md-none">
                        <svg aria-label="More options" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
                            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </span>
                </summary>
                <div class="dropdown-menu dropdown-menu-sw" style="top:32px;width:220px;">
                    <ul class="list-style-none">
                        <li class="Box-row Box-row--hover-gray p-3 mt-0">
                            <a class="d-flex flex-items-center color-text-primary text-bold no-underline" rel="noopener" target="_blank" href="https://download-directory.github.io?url=${window.location.href}">
                            With download - directory
                            </a >
                        </li >
                        <li class="Box-row Box-row--hover-gray p-3 mt-0">
                            <a class="d-flex flex-items-center color-text-primary text-bold no-underline" rel="noopener" target="_blank" href="https://downgit.github.io/#/home?url=${window.location.href}">
                                With DownGit
                            </a>
                        </li>
                    </ul >
                </div >
            </detials>`
        html.insertAdjacentHTML("beforebegin", _html)
    } else {
        observeAndAddLinks()
    }
}
function removeAllInjectedElem() {
    document.querySelectorAll(".github-folder-download").forEach(elem => elem.remove())
}
function detectFoldUnfold() {
    if (document.body.clientWidth <= 1200 && !isFold) {
        console.log("收起" + document.body.clientWidth)
        isFold = true
    } else if (document.body.clientWidth > 1200 && isFold) {
        console.log("展开" + document.body.clientWidth)
        isFold = false
    }
}
function reinject() {
    if (document.querySelector(".octicon.octicon-copy")) {//复制路径的元素
        // 仅当处于文件夹内时注入按钮
        removeAllInjectedElem()
        injectDownloadFolderBtn()
    }
}
function main() {
    detectFoldUnfold()
    reinject()
}
(function () {
    'use strict'
    /**
     * 在浏览器窗口大小改变时自动重新定位设置菜单
     */
    window.onresize = function () {
        // 监听窗口大小改变
        main()
    }
    function observeUrlChanges(callback, delay = 1000) {
        let lastUrl = location.href
        const observer = new MutationObserver(() => {
            const url = location.href
            if (url !== lastUrl) {
                lastUrl = url
                setTimeout(() => {
                    console.log("页面发生变动,")
                    callback()
                }, delay)
            }
        })
        observer.observe(document, { subtree: true, childList: true })
        return observer
    }
    observeUrlChanges(main)
    main()
})()
