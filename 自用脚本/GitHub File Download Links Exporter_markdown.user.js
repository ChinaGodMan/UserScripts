// ==UserScript==
// @name         GitHub File Download Links Exporter
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Export file names and download links from a GitHub repository as a Markdown list
// @author       Your Name
// @match        https://github.com/*/*
// @grant        GM_addStyle
// ==/UserScript==





(function () {
    'use strict'

    // 添加按钮
    function addButton() {
        const btn = document.createElement('button')
        btn.innerHTML = 'Export Download Links'
        btn.style.position = 'fixed'
        btn.style.top = '10px'
        btn.style.right = '10px'
        btn.style.zIndex = '9999'
        btn.onclick = exportDownloadLinks
        document.body.appendChild(btn)
    }

    // 导出下载链接
    async function exportDownloadLinks() {
        const [_, owner, repo] = window.location.pathname.split('/')
        const branch = 'main' // 默认分支

        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`

        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error(`Error: Unable to fetch repository data. Status code: ${response.status}`)
            }

            const data = await response.json()
            const tree = data.tree
            const downloadLinks = tree
                .filter(item => item.type === 'blob')
                .map(item => {
                    return {
                        name: item.path,
                        url: `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${item.path}`
                    }
                })

            showMarkdownLinks(downloadLinks)
        } catch (error) {
            console.error(error)
        }
    }

    // 显示 Markdown 下载链接
    function showMarkdownLinks(links) {
        const markdownList = links.map(link => `- [${link.name}](${link.url})`).join('\n')

        const container = document.createElement('textarea')
        container.style.position = 'fixed'
        container.style.top = '50px'
        container.style.right = '10px'
        container.style.width = '400px'
        container.style.height = '400px'
        container.style.overflow = 'auto'
        container.style.backgroundColor = '#fff'
        container.style.border = '1px solid #ccc'
        container.style.padding = '10px'
        container.style.zIndex = '9999'
        container.value = markdownList

        document.body.appendChild(container)
    }

    // 初始化
    function init() {
        if (window.location.hostname === 'github.com' && window.location.pathname.split('/').length >= 3) {
            addButton()
        }
    }

    init()
})()
