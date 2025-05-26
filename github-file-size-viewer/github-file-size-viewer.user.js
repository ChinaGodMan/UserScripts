// ==UserScript==
// @name        GitHub File Size Viewer
// @name:zh-CN   GitHub 显示文件和文件夹大小
// @description  GitHub File Size Viewer is a lightweight userscript that displays the size of each file and folder in GitHub repositories. It uses the GitHub API to fetch details, including recursive folder sizes, making it easy to see the total size of nested directories.
// @description:zh-CN 显示 GitHub 存储库中每个文件和文件夹的大小。它使用 GitHub API 获取详细信息，包括递归文件夹大小，从而轻松查看嵌套目录的总大小。 以 KB、MB 或 GB 显示文件大小
// @author       Abhay,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL   https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL  https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @match        https://github.com/*
// @icon        https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/github-file-size-viewer.jpg
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @compatible   opera
// @compatible   safari
// @compatible   kiwi
// @compatible   qq
// @compatible   via
// @compatible   brave
// @version      2025.5.26.1
// @grant GM_setValue
// @grant GM_getValue
// @downloadURL  https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-file-size-viewer/github-file-size-viewer.user.js
// @updateURL    https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-file-size-viewer/github-file-size-viewer.user.js
// ==/UserScript==
/**
 * File: github-file-size-viewer.user.js
 * Project: UserScripts
 * File Created: 2025/05/26,Monday 18:12:15
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/05/26,Monday 18:37:36
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

console.log('Content script loaded.')

let GITHUB_TOKEN = GM_getValue('GITHUB_TOKEN', '')
if (!GITHUB_TOKEN) {
    GM_setValue('GITHUB_TOKEN', prompt('Please enter your GitHub Token'))
    GITHUB_TOKEN = GM_getValue('GITHUB_TOKEN', '')
}

// Format the size in a human-readable way
function formatSize(bytes) {
    if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
    } else {
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
    }
}

// Recursively calculate the total size of a folder
async function calculateFolderSize(apiUrl, headers) {
    //console.log('Calculating folder size for:', apiUrl)
    try {
        const response = await fetch(apiUrl, { headers })
        if (!response.ok) {
            console.error('Folder API error:', response.status, response.statusText)
            return 0
        }
        const data = await response.json()
        let totalSize = 0
        if (Array.isArray(data)) {
            const sizePromises = data.map((item) => {
                if (item.type === 'file' && typeof item.size === 'number') {
                    return Promise.resolve(item.size)
                } else if (item.type === 'dir') {
                    return calculateFolderSize(item.url, headers)
                } else {
                    return Promise.resolve(0)
                }
            })
            const sizes = await Promise.all(sizePromises)
            totalSize = sizes.reduce((sum, size) => sum + size, 0)
        }
        return totalSize
    } catch (error) {
        console.error('Error calculating folder size:', error)
        return 0
    }
}

// Fetch file/folder size from GitHub API with enhanced error handling
async function fetchFileSize(apiUrl) {
    const token = GITHUB_TOKEN
    let headers = { 'Accept': 'application/vnd.github.v3+json' }
    if (token) {
        headers['Authorization'] = 'token ' + token
    }
    //console.log('Fetching size for:', apiUrl)
    try {
        const response = await fetch(apiUrl, { headers })
        if (!response.ok) {
            console.error('GitHub API responded with error:', response.status, response.statusText)
            return 'N/A'
        }
        const data = await response.json()
        //console.log('Received data:', data)
        if (data && data.message) {
            console.error('GitHub API error message:', data.message)
            return 'N/A'
        }
        if (data && !Array.isArray(data) && data.type === 'file') {
            if (typeof data.size === 'number') {
                return formatSize(data.size)
            } else {
                console.error('File object missing size:', data)
                return 'N/A'
            }
        } else if (Array.isArray(data)) {
            const folderSize = await calculateFolderSize(apiUrl, headers)
            return folderSize > 0 ? formatSize(folderSize) : 'Folder'
        } else {
            return 'N/A'
        }
    } catch (error) {
        console.error('Error fetching file size:', error)
        return 'N/A'
    }
}

// Insert the size next to each file/folder link with GitHub-like styling
function insertSizeAfterLink(link, sizeText) {
    const sizeSpan = document.createElement('span')
    sizeSpan.style.marginLeft = '10px'
    sizeSpan.style.fontSize = 'smaller'
    sizeSpan.style.color = '#6a737d'
    sizeSpan.textContent = `(${sizeText})`
    link.insertAdjacentElement('afterend', sizeSpan)
}

// Main function: find all GitHub file/folder links, fetch sizes concurrently, display them
async function displayFileSizes() {
    console.log('Running displayFileSizes...')
    const table = document.querySelector('table tbody')
    // 不要在这里选择document,不然就把readme里面的文件大小也特么的添加上了
    const links = table.querySelectorAll('a[href*="/blob/"], a[href*="/tree/"]')
    console.log('Found potential file/folder links:', links.length)
    const promises = Array.from(links).map(async (link) => {
        const urlParts = link.href.split('/')
        const user = urlParts[3]
        const repo = urlParts[4]
        const typeSegment = link.href.includes('/blob/') ? 'blob' : 'tree'
        const branchIndex = urlParts.indexOf(typeSegment) + 1
        const branch = urlParts[branchIndex]
        const filePath = urlParts.slice(branchIndex + 1).join('/')
        const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${filePath}?ref=${branch}`
        const sizeText = await fetchFileSize(apiUrl)
        insertSizeAfterLink(link, sizeText)
    })
    await Promise.all(promises)
}

window.addEventListener('load', () => {
    setTimeout(displayFileSizes, 2000)
})
function observeUrlChanges(callback, delay = 10) {
    let lastUrl = location.href
    const observer = new MutationObserver(() => {
        const url = location.href
        if (url !== lastUrl) {
            lastUrl = url
            setTimeout(() => {
                callback()
            }, delay)
        }
    })
    observer.observe(document, { subtree: true, childList: true })
    return observer
}
observeUrlChanges(displayFileSizes, 2000)
