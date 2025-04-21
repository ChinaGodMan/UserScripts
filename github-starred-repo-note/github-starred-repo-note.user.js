// ==UserScript==
// @name         GitHub RepoNotesHelper
// @name:zh-CN   GitHub 星标仓库备注助手
// @description  Have you forgotten what the repository you starred is for? This is a script that can add notes to the repository you starred, and your notes can be uploaded and downloaded to GitHub Gist
// @description:zh-CN 曾经 Star 过的仓库是不是忘记了它们的用途? 这是一个可以给你收藏过的仓库添加备注的的脚本,并且你备注的信息可以上传下载到 GitHub Gist
// @author       malagebidi,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL   https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL  https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @match        https://github.com/*
// @icon              data:image/png;base64,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
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @compatible   opera
// @compatible   safari
// @compatible   kiwi
// @compatible   qq
// @compatible   via
// @compatible   brave
// @version      2025.04.21.1652
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @grant              GM_xmlhttpRequest
// @grant              GM_registerMenuCommand
// @created      2025-04-21 16:52:52
// @modified     2025-04-21 16:52:52
// @downloadURL  https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-starred-repo-note/github-starred-repo-note.user.js
// @updateURL    https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-starred-repo-note/github-starred-repo-note.user.js
// ==/UserScript==
/**
 * File: github-starred-repo-note.user.js
 * Project: UserScripts
 * File Created: 2025/04/21,Monday 16:52:52
 * Author: malagebidi<https://greasyfork.org/zh-CN/users/314803>,人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/04/21,Monday 18:32:01
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

(async function () {
    'use strict'
    // --- Configuration ---
    var GITHUB_PAT_TOKEN = GM_getValue('GITHUB_PAT_TOKEN', '')
    const userLang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        'en'
    const translations = {
        en: {
            NOTE_PLACEHOLDER: 'Enter your note...',
            ADD_BUTTON_TEXT: 'Add Note',
            EDIT_BUTTON_TEXT: 'Edit Note',
            SAVE_BUTTON_TEXT: 'Save',
            CANCEL_BUTTON_TEXT: 'Cancel',
            DELETE_BUTTON_TEXT: 'Delete',
            DOWNLOAD_BUTTON_TEXT: 'Download notes',
            UPLOAD_BUTTON_TEXT: 'Upload notes',
            NO_TOKEN_ALERT_TEXT: 'Please enter your GitHub token',
            DOWNLOAD_GIST_SUCCESS: 'Your cloud backup notes have been restored, please refresh the current page. ',
            DOWNLOAD_GIST_FAILURE: 'Your cloud backup notes failed to be restored, please check whether the GitHub Token is correct. ',
            UPLOAD_GIST_SUCCESS: 'Your cloud backup notes have been saved',
            UPLOAD_GIST_FAILURE: 'Your cloud backup notes failed to be saved, please check whether the GitHub Token is correct. ',
            DELETE_CONFIRM: 'Are you sure you want to delete the note for \"{repoFullName}\"?'

        },
        'zh-CN,zh,zh-SG': {
            NOTE_PLACEHOLDER: '输入备注...',
            ADD_BUTTON_TEXT: '备注',
            EDIT_BUTTON_TEXT: '编辑备注',
            SAVE_BUTTON_TEXT: '保存',
            CANCEL_BUTTON_TEXT: '取消',
            DELETE_BUTTON_TEXT: '删除',
            DOWNLOAD_BUTTON_TEXT: '下载备注',
            UPLOAD_BUTTON_TEXT: '上传备注',
            NO_TOKEN_ALERT_TEXT: '请先输入GitHub Token',
            DOWNLOAD_GIST_SUCCESS: '你的云备份笔记已被恢复,请刷新当前页面.',
            DOWNLOAD_GIST_FAILURE: '你的云备份笔记恢复失败,请检查GitHub Token是否正确.',
            UPLOAD_GIST_SUCCESS: '你的云备份笔记已被保存',
            UPLOAD_GIST_FAILURE: '你的云备份笔记保存失败,请检查GitHub Token是否正确.',
            DELETE_CONFIRM: '你确定要删除\"{repoFullName}\"仓库的备注嘛?'

        },
        'zh-TW,zh-HK,zh-MO': {
            NOTE_PLACEHOLDER: '輸入您的筆記...',
            ADD_BUTTON_TEXT: '添加筆記',
            EDIT_BUTTON_TEXT: '編輯筆記',
            SAVE_BUTTON_TEXT: '保存',
            CANCEL_BUTTON_TEXT: '取消',
            DELETE_BUTTON_TEXT: '刪除'
        },
        vi: {
            NOTE_PLACEHOLDER: 'Nhập ghi chú của bạn...',
            ADD_BUTTON_TEXT: 'Thêm ghi chú',
            EDIT_BUTTON_TEXT: 'Chỉnh sửa ghi chú',
            SAVE_BUTTON_TEXT: 'Lưu',
            CANCEL_BUTTON_TEXT: 'Hủy bỏ',
            DELETE_BUTTON_TEXT: 'Xóa'
        },
        ja: {
            NOTE_PLACEHOLDER: 'メモを入力してください...',
            ADD_BUTTON_TEXT: 'メモを追加',
            EDIT_BUTTON_TEXT: 'メモを編集',
            SAVE_BUTTON_TEXT: '保存',
            CANCEL_BUTTON_TEXT: 'キャンセル',
            DELETE_BUTTON_TEXT: '削除'
        },
        ko: {
            NOTE_PLACEHOLDER: '메모를 입력하세요...',
            ADD_BUTTON_TEXT: '메모 추가',
            EDIT_BUTTON_TEXT: '메모 편집',
            SAVE_BUTTON_TEXT: '저장',
            CANCEL_BUTTON_TEXT: '취소',
            DELETE_BUTTON_TEXT: '삭제'
        }

    }
    const getTranslations = (lang) => {
        for (const key in translations) {
            if (key === lang || key.split(',').includes(lang)) {
                return translations[key]
            }
        }
        return translations['en']
    }
    const translate = new Proxy(
        function (key) {
            const lang = userLang
            const strings = getTranslations(lang)
            return strings[key] || translations['en'][key]
        },
        {
            get(target, prop) {
                const lang = userLang
                const strings = getTranslations(lang)
                return strings[prop] || translations['en'][prop]
            }
        }
    )

    // --- Styles ---
    GM_addStyle(`
        .ghsn-container {
            padding-right: var(--base-size-24, 24px) !important;
            color: var(--fgColor-muted, var(--color-fg-muted)) !important;
            width: 74.99999997%;
        }
        .ghsn-display {
            font-style: italic;
            border: var(--borderWidth-thin) solid var(--borderColor-default, var(--color-border-default, #d2dff0));
            border-radius: 100px;
            padding: 2.5px 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            max-width: fit-content;
        }
        .ghsn-textarea {
            width: 100%;
            min-height: 60px;
            margin-bottom: 5px;
            padding: 5px;
            border: 1px solid var(--color-border-default);
            border-radius: 3px;
            background-color: var(--color-canvas-default);
            color: var(--color-fg-default);
            box-sizing: border-box;
        }
        .ghsn-buttons button {
            margin-right: 5px;
            padding: 3px 8px;
            font-size: 0.9em;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid var(--color-border-muted);
        }
        .ghsn-buttons button.ghsn-save {
            background-color: var(--color-btn-primary-bg);
            color: var(--color-btn-primary-text);
            border-color: var(--color-btn-primary-border);
        }
        .ghsn-buttons button.ghsn-delete {
            background-color: var(--color-btn-danger-bg);
            color: var(--color-btn-danger-text);
            border-color: var(--color-btn-danger-border);
        }
        .ghsn-buttons button.ghsn-cancel {
            background-color: var(--color-btn-bg);
            color: var(--color-btn-text);
        }
        .ghsn-buttons button:hover {
            filter: brightness(1.1);
        }
        .ghsn-hidden {
            display: none !important;
        }
        .ghsn-note-btn {
            margin-left: 16px;
            color: var(--fgColor-muted);
            cursor: pointer;
            text-decoration: none;
        }
        .ghsn-note-btn:hover {
            color: var(--fgColor-accent) !important;
            -webkit-text-decoration: none;
            text-decoration: none;
        }
        .ghsn-note-btn svg {
            margin-right: 4px;
        }
    `)

    /* ------------------------------- GITHUB GIST ------------------------------ */
    const GistManager = {
        githubToken: null,
        description: null,

        init: function (token, description) {
            this.githubToken = token
            this.description = description || 'Default Gist Description'
        },
        updateToken: function (newToken) {
            this.githubToken = newToken
        },
        // 查找 Gist 根据描述
        findGistByDescription: function (callback) {
            const url = 'https://api.github.com/gists'
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
                headers: {
                    'Authorization': `token ${this.githubToken}`,
                    'Content-Type': 'application/json'
                },
                onload: function (response) {
                    if (response.status === 200) {
                        const gists = JSON.parse(response.responseText)
                        for (let gist of gists) {
                            if (gist.description === GistManager.description) {
                                console.log('找到匹配的 Gist:', gist.html_url)
                                return callback(gist.id)
                            }
                        }
                        callback(null)
                    } else {
                        console.error('获取 Gist 列表失败:', response.responseText)
                        callback(null)
                    }
                }
            })
        },

        // 上传或更新 Gist
        uploadToGist: function (filename, content) {

            this.findGistByDescription((gistId) => {
                if (gistId) {
                    this.updateGist(gistId, filename, content)
                } else {
                    this.createGist(filename, content)
                }
            })
        },

        // 创建新的 Gist
        createGist: function (filename, content) {
            const url = 'https://api.github.com/gists'
            const data = {
                'description': this.description,
                'public': false,
                'files': {
                    [filename]: {
                        'content': content
                    }
                }
            }
            GM_xmlhttpRequest({
                method: 'POST',
                url: url,
                headers: {
                    'Authorization': `token ${this.githubToken}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data),
                onload: function (response) {
                    if (response.status === 201) {
                        const responseData = JSON.parse(response.responseText)
                        console.log('Gist 创建成功:', responseData.html_url)
                    } else {
                        console.error('Gist 创建失败:', response.responseText)
                    }
                }
            })
        },
        downloadGistAsJson: function (filename) {
            this.findGistByDescription((gistId) => {
                if (!gistId) {
                    console.error('未找到匹配的 Gist')
                    return
                }

                const url = `https://api.github.com/gists/${gistId}`
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Authorization': `token ${this.githubToken}`,
                        'Content-Type': 'application/json'
                    },
                    onload: function (response) {
                        if (response.status === 200) {
                            const gistData = JSON.parse(response.responseText)
                            const fileContent = gistData.files[filename].content
                            const parsedJson = JSON.parse(fileContent)
                            GM_setValue('starred_notes', parsedJson)
                            alert(translate.DOWNLOAD_GIST_SUCCESS)
                        } else {
                            alert(translate.DOWNLOAD_GIST_FAILURE)
                            console.error('下载 Gist 失败:', response.responseText)
                        }
                    }
                })
            })
        },

        // 更新已有的 Gist
        updateGist: function (gistId, filename, content) {
            const url = `https://api.github.com/gists/${gistId}`
            const data = {
                'files': {
                    [filename]: {
                        'content': content
                    }
                }
            }
            GM_xmlhttpRequest({
                method: 'PATCH',
                url: url,
                headers: {
                    'Authorization': `token ${this.githubToken}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data),
                onload: function (response) {
                    if (response.status === 200) {
                        alert(translate.UPLOAD_GIST_SUCCESS)
                    } else {
                        alert(translate.UPLOAD_GIST_FAILURE)
                        console.error('Gist 更新失败:', response.responseText)
                    }
                }
            })
        }
    }
    const firstLanuch = GM_getValue('firstLanuch', true)//!首次启动脚本,提醒输入GitHub Token用于上传下载Gist
    if (firstLanuch && !GITHUB_PAT_TOKEN) {
        const userInput = prompt(translate.NO_TOKEN_ALERT_TEXT)
        if (userInput) {
            GM_setValue('GITHUB_PAT_TOKEN', userInput)
            GITHUB_PAT_TOKEN = userInput
        }
        GM_setValue('firstLanuch', false)
    }
    const description = 'github_starred_repo_note'
    GistManager.init(GITHUB_PAT_TOKEN, description)
    const filename = 'github_starred_repo_note.json'
    GM_registerMenuCommand(translate.UPLOAD_BUTTON_TEXT, uploadToGist)
    GM_registerMenuCommand(translate.DOWNLOAD_BUTTON_TEXT, downloadGistAsJson)
    if (Object.keys(GM_getValue('starred_notes', {})).length === 0 && GITHUB_PAT_TOKEN) {
        downloadGistAsJson()
    }
    function uploadToGist() {
        const panelData = GM_getValue('starred_notes', {})
        if (!getGitHubToken()) {
            return
        }
        const jsonData = JSON.stringify(panelData, null, 2)
        GistManager.uploadToGist(filename, jsonData)
    }
    function downloadGistAsJson() {
        if (!getGitHubToken()) {
            return
        }
        GistManager.downloadGistAsJson(filename)
    }
    function getGitHubToken() {
        if (GITHUB_PAT_TOKEN) {
            return true
        }
        const userInput = prompt(translate.NO_TOKEN_ALERT_TEXT)
        if (userInput) {
            GM_setValue('GITHUB_PAT_TOKEN', userInput)
            GITHUB_PAT_TOKEN = userInput
            GistManager.updateToken(GITHUB_PAT_TOKEN)
            return true
        }
        return false
    }
    /* ---------------------------------- json ---------------------------------- */
    // 写
    function saveStarredNote(storageKey, newNote) {
        let starredNotes = GM_getValue('starred_notes', '{}')
        starredNotes = JSON.parse(starredNotes)
        starredNotes[storageKey] = newNote
        GM_setValue('starred_notes', JSON.stringify(starredNotes))
    }
    //读
    function getStarredNote(storageKey) {
        let starredNotes = GM_getValue('starred_notes', '{}')
        starredNotes = JSON.parse(starredNotes)
        return starredNotes[storageKey] || ''
    }
    //删
    function deleteStarredNote(storageKey) {
        let starredNotes = GM_getValue('starred_notes', '{}')
        starredNotes = JSON.parse(starredNotes)

        if (storageKey in starredNotes) {
            delete starredNotes[storageKey]
            GM_setValue('starred_notes', JSON.stringify(starredNotes))
        }
    }
    // --- Core Logic ---
    // Get repo unique identifier (owner/repo)
    function getRepoFullName(repoElement) {
        const link = repoElement.querySelector('div[itemprop="name codeRepository"] > a, h3 > a, h2 > a')
        if (link && link.pathname) {
            return link.pathname.substring(1).replace(/\/$/, '')
        }
        const starForm = repoElement.querySelector('form[action^="/stars/"]')
        if (starForm && starForm.action) {
            const match = starForm.action.match(/\/stars\/([^/]+\/[^/]+)\/star/)
            if (match && match[1]) {
                return match[1]
            }
        }
        console.warn('RepoNotes: Could not find repo name for element:', repoElement)
        return null
    }
    // Create note button with icon
    function createNoteButton(isEdit = false) {
        const button = document.createElement('a')
        button.className = 'ghsn-note-btn'
        button.href = 'javascript:void(0);' // 使用 void(0) 避免页面跳转
        // SVG icon (pencil)
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('aria-hidden', 'true')
        svg.setAttribute('height', '16')
        svg.setAttribute('width', '16')
        svg.setAttribute('viewBox', '0 0 16 16')
        svg.setAttribute('fill', 'currentColor')
        svg.setAttribute('class', 'octicon octicon-star')
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        // Pencil icon path data
        path.setAttribute('d', 'M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z')
        svg.appendChild(path)
        button.appendChild(svg)
        const textNode = document.createTextNode(isEdit ? translate.EDIT_BUTTON_TEXT : translate.ADD_BUTTON_TEXT)
        button.appendChild(textNode)
        button.updateText = function (isEditing) {
            textNode.textContent = isEditing ? translate.EDIT_BUTTON_TEXT : translate.ADD_BUTTON_TEXT
        }
        return button
    }
    // Add note UI for a single repository
    async function addNoteUI(repoElement) {
        if (repoElement.querySelector('.ghsn-container')) {
            // console.log('RepoNotes: UI already exists for this repo element. Skipping.');
            return
        }
        const existingButton = repoElement.querySelector('.ghsn-star-row .ghsn-note-btn')
        if (existingButton) {
            // console.log('RepoNotes: Button already exists in star row. Skipping.');
            return
        }
        const repoFullName = getRepoFullName(repoElement)
        if (!repoFullName) {
            // console.warn('RepoNotes: Could not get repo full name. Skipping element:', repoElement);
            return
        }
        const storageKey = `ghsn_${repoFullName}`
        let currentNote = getStarredNote(storageKey)
        const starLink = repoElement.querySelector('a[href$="/stargazers"]')
        if (!starLink) {
            // console.warn(`RepoNotes: Could not find star link for repo: ${repoFullName}. Skipping.`);
            return
        }
        let starRow = starLink.parentNode
        if (!starRow.classList.contains('d-flex') && !starRow.classList.contains('float-right')) {
            const potentialRow = starLink.closest('span, div.d-inline-block, div.color-fg-muted')
            if (potentialRow) {
                starRow = potentialRow
            }
        }
        starRow.classList.add('ghsn-star-row')
        const noteButton = createNoteButton(!!currentNote) // !!currentNote 将其转为布尔值
        const container = document.createElement('div')
        container.className = 'ghsn-container'
        if (!currentNote) {
            container.classList.add('ghsn-hidden')
        }
        const displaySpan = document.createElement('span')
        displaySpan.className = 'ghsn-display'
        displaySpan.textContent = currentNote
        if (!currentNote) {
            displaySpan.classList.add('ghsn-hidden')
        }
        const noteTextarea = document.createElement('textarea')
        noteTextarea.className = 'ghsn-textarea ghsn-hidden'
        noteTextarea.placeholder = translate.NOTE_PLACEHOLDER
        const buttonsDiv = document.createElement('div')
        buttonsDiv.className = 'ghsn-buttons ghsn-hidden'
        const saveButton = document.createElement('button')
        saveButton.textContent = translate.SAVE_BUTTON_TEXT
        saveButton.className = 'ghsn-save'
        const cancelButton = document.createElement('button')
        cancelButton.textContent = translate.CANCEL_BUTTON_TEXT
        cancelButton.className = 'ghsn-cancel'
        const deleteButton = document.createElement('button')
        deleteButton.textContent = translate.DELETE_BUTTON_TEXT
        deleteButton.className = 'ghsn-delete'
        noteButton.addEventListener('click', (e) => {
            e.preventDefault()
            const isEditing = !noteTextarea.classList.contains('ghsn-hidden')
            if (!isEditing) {
                noteTextarea.value = currentNote
                displaySpan.classList.add('ghsn-hidden')
                noteTextarea.classList.remove('ghsn-hidden')
                buttonsDiv.classList.remove('ghsn-hidden')
                if (currentNote) {
                    deleteButton.classList.remove('ghsn-hidden')
                } else {
                    deleteButton.classList.add('ghsn-hidden')
                }
                container.classList.remove('ghsn-hidden')
                noteTextarea.focus()
            } else {
                cancelButton.click()
            }
        })
        cancelButton.addEventListener('click', () => {
            noteTextarea.classList.add('ghsn-hidden')
            buttonsDiv.classList.add('ghsn-hidden')
            if (currentNote) {
                displaySpan.textContent = currentNote
                displaySpan.classList.remove('ghsn-hidden')
                container.classList.remove('ghsn-hidden')
            } else {
                container.classList.add('ghsn-hidden')
            }
        })
        saveButton.addEventListener('click', async () => {
            const newNote = noteTextarea.value.trim()
            saveStarredNote(storageKey, newNote)
            currentNote = newNote
            noteButton.updateText(!!newNote)
            if (newNote) {
                displaySpan.textContent = newNote
                displaySpan.classList.remove('ghsn-hidden')
                container.classList.remove('ghsn-hidden')
            } else {
                displaySpan.classList.add('ghsn-hidden')
                container.classList.add('ghsn-hidden')
                deleteStarredNote(storageKey)

            }
            noteTextarea.classList.add('ghsn-hidden')
            buttonsDiv.classList.add('ghsn-hidden')
        })
        deleteButton.addEventListener('click', async () => {
            const showInfo = translate.DELETE_CONFIRM.replace('{repoFullName}', repoFullName)
            //${repoFullName}
            if (window.confirm(`${showInfo}`)) {
                deleteStarredNote(storageKey)
                currentNote = ''
                noteButton.updateText(false)
                displaySpan.classList.add('ghsn-hidden')
                noteTextarea.classList.add('ghsn-hidden')
                buttonsDiv.classList.add('ghsn-hidden')
                container.classList.add('ghsn-hidden')
            }
        })
        buttonsDiv.appendChild(deleteButton)
        buttonsDiv.appendChild(saveButton)
        buttonsDiv.appendChild(cancelButton)
        container.appendChild(displaySpan)
        container.appendChild(noteTextarea)
        container.appendChild(buttonsDiv)
        // 修改这里：将按钮作为starRow的最后一个元素
        starRow.appendChild(noteButton)
        const description = repoElement.querySelector('p.color-fg-muted')
        const topics = repoElement.querySelector('.topic-tag-list')
        const insertAfterElement = topics || description || repoElement.querySelector('h3, h2')
        if (insertAfterElement && insertAfterElement.parentNode) {
            insertAfterElement.parentNode.insertBefore(container, insertAfterElement.nextSibling)
        } else {
            repoElement.appendChild(container)
            console.warn(`RepoNotes: Could not find ideal insertion point for note container in repo: ${repoFullName}. Appending to end.`)
        }
    }
    // --- Process all repositories on the page ---
    function processRepositories() {
        const repoSelector = 'div.col-12.d-block.width-full.py-4.border-bottom.color-border-muted, article.Box-row'
        const repoElements = document.querySelectorAll(repoSelector)
        // console.log(`RepoNotes: Found ${repoElements.length} repository elements.`);
        if (repoElements.length === 0) {
            // console.log("RepoNotes: No repository elements found with selector:", repoSelector);
            const fallbackSelector = 'li[data-view-component="true"].Box-row'
            const fallbackElements = document.querySelectorAll(fallbackSelector)
            fallbackElements.forEach(addNoteUI)
        } else {
            repoElements.forEach(addNoteUI)
        }
    }

    // --- Observe DOM changes (handle dynamic loading like infinite scroll) ---
    let observer = null

    function setupObserver() {
        if (observer) {
            observer.disconnect()
        }

        const targetNode = document.getElementById('user-repositories-list') || document.querySelector('main') || document.body

        if (!targetNode) {
            console.error('RepoNotes: Could not find target node for MutationObserver.')
            return
        }
        // console.log('RepoNotes: Setting up MutationObserver on target:', targetNode);

        observer = new MutationObserver(mutations => {
            // console.log('RepoNotes: MutationObserver detected changes.');
            let needsProcessing = false
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        const repoSelector = 'div.col-12.d-block.width-full.py-4.border-bottom.color-border-muted, article.Box-row, li[data-view-component="true"].Box-row'
                        if (node.matches(repoSelector)) {
                            // console.log('RepoNotes: Added node matches repo selector:', node);
                            addNoteUI(node)
                            needsProcessing = true
                        } else {
                            const nestedRepos = node.querySelectorAll(repoSelector)
                            if (nestedRepos.length > 0) {
                                // console.log(`RepoNotes: Found ${nestedRepos.length} nested repos in added node:`, node);
                                nestedRepos.forEach(addNoteUI)
                                needsProcessing = true
                            }
                        }
                    }
                })
            })
        })

        observer.observe(targetNode, {
            childList: true,
            subtree: true
        })
    }

    // --- Startup and Navigation Handling ---

    function initializeOrReinitialize() {
        if (window.location.search.includes('tab=stars') || document.querySelector('div.col-12.d-block.width-full.py-4') || document.querySelector('article.Box-row')) {
            // console.log('RepoNotes: Running processRepositories.');
            processRepositories()
            // console.log('RepoNotes: Setting up observer.');
            setupObserver()
        } else {
            // console.log('RepoNotes: Not on a relevant page, skipping processing and observer setup.');
            if (observer) {
                observer.disconnect()
                // console.log('RepoNotes: Disconnected observer.');
            }
        }
    }

    document.addEventListener('turbo:load', () => {
        // console.log('RepoNotes: turbo:load event detected.');
        initializeOrReinitialize()
    })

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeOrReinitialize)
    } else {
        initializeOrReinitialize()
    }

})()
