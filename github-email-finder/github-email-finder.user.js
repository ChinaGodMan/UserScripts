// ==UserScript==
// @name         Github Email Finder (Alpha)
// @name:zh-CN   GitHub 邮箱地址查找器
// @description  Using public event data (e.g. commits pushed to a public repository), it fetches the user's commit email address and displays it on their profile page. Additionally, it adds a handy "Copy to Clipboard" button for easy copying.
// @description:zh-CN 使用公开事件数据（例如，推送到公开代码库的提交），获取用户的提交邮箱地址并将其显示在个人资料页面上。此外，它还添加了一个便捷的“复制到剪贴板”按钮，方便复制.
// @author       jsjoeio,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL   https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL  https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @match        https://github.com/*
// @icon        https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/github-commit-viewer.png
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
// @downloadURL  https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-email-finder/github-email-finder.user.js
// @updateURL    https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-email-finder/github-email-finder.user.js
// ==/UserScript==
/**
 * File: github-email-finder.user.js
 * Project: UserScripts
 * File Created: 2025/05/26,Monday 17:27:27
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/05/26,Monday 18:00:02
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

// 设置
const PER_PAGE = 10
let GITHUB_TOKEN = GM_getValue('GITHUB_TOKEN', '')
if (!GITHUB_TOKEN) {
    GM_setValue('GITHUB_TOKEN', prompt('Please enter your GitHub Token'))
    GITHUB_TOKEN = GM_getValue('GITHUB_TOKEN', '')
}

// 类名与模板
const EMAIL_CLASS = '.u-email'
const V_CARD_CLASS = '.vcard-details'
const CLIPBOARD_CONTAINER_DIV_ID = 'github-email-extension_copy-clipboard-svg'
const copiedCheckMarkHTML = `<div id="github-email-extension_copy-clipboard-svg" style="display: inline-block;cursor: copy;float: right;">
<div style="
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 94px;
    height: 20px;
    align-items: flex-start;
">
<span style="
    display: block;
">Copied</span>
<svg aria-label="1 / 1 checks OK" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check" style="
    display: block;
    fill: rgb(38, 205, 77);
">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg></div></div>`

const clipboardHTML = `<div id="github-email-extension_copy-clipboard-svg" style="display: inline-block;cursor: copy;float: right;">
<div style="
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 94px;
    height: 20px;
    align-items: flex-start;
">

<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy" style="/* float: right; *//* margin-right: 120px; */">
<path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg></div></div>`

async function copyToClipboard(_window, _document, _navigator) {
    const email = _document.querySelector(EMAIL_CLASS)
    if (email) {
        const selection = _window?.getSelection()?.selectAllChildren(email)

        await _navigator.clipboard.writeText(email.textContent || '')
        // Unselect text
        _window.getSelection()?.removeAllRanges()

        const divContainer = _document.querySelector(`#${CLIPBOARD_CONTAINER_DIV_ID}`)

        if (divContainer) {
            // Replace element with our other one
            divContainer.outerHTML = copiedCheckMarkHTML
        }
    }
}

function registerCopyToClipboardEventListener(_window, _document, _navigator, divElement) {
    divElement.addEventListener('click', () => {
        copyToClipboard(_window, _document, _navigator)
    })
}

function isEmailInDOM(_document) {
    const emailElement = _document.querySelector(EMAIL_CLASS)
    return emailElement !== null
}

function getGitHubUsernameFromURL(_location) {
    return _location.href.split('/')[3]
}

async function fetchGitHubUserEventData(username) {
    const url = `https://api.github.com/users/${username}/events/public?per_page=${PER_PAGE}`
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

function getEmailFromGitHubEventData(data) {
    let email = null
    const pushEvents = data.filter((eventData) => eventData.type === 'PushEvent')

    loopThroughPushEvents: for (let i = 0; i < pushEvents.length; i++) {
        const event = pushEvents[i]
        const commits = event.payload.commits
        for (let j = 0; j < commits.length; j++) {
            const foundEmail = commits[i].author.email
            if (foundEmail) {
                email = foundEmail
                break loopThroughPushEvents
            }
        }
    }

    return email
}

function insertEmailIntoDOM(_document, email) {
    const vCardElement = _document.querySelector(V_CARD_CLASS)

    const emailElement = buildEmailElement(email)

    vCardElement?.insertAdjacentHTML('beforeend', emailElement)
}

function insertClipboardSVGIntoDOM(_document) {
    const emailListeElement = _document.querySelector('[itemprop="email"]')
    if (emailListeElement) {
        emailListeElement.insertAdjacentHTML('beforeend', clipboardHTML)
    }
}

function buildEmailElement(email) {
    return `<li itemprop="email" aria-label="Email: ${email}" class="vcard-detail pt-1 css-truncate css-truncate-target "><svg class="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
  <a class="u-email Link--primary " href="mailto:${email}">${email}</a>
</li>`
}

async function init() {
    const hasEmailInProfile = isEmailInDOM(document)

    if (!hasEmailInProfile) {
        const username = getGitHubUsernameFromURL(location)
        const userEventData = await fetchGitHubUserEventData(username)
        const email = getEmailFromGitHubEventData(userEventData)
        if (email) {
            insertEmailIntoDOM(document, email)
        } else {
            console.warn(
                '[GitHub Email Extension]: Could not find email in user\'s latest public event data.'
            )
            return
        }
    }

    insertClipboardSVGIntoDOM(document)

    const divElement = document.querySelector('#github-email-extension_copy-clipboard-svg')

    if (divElement) {
        registerCopyToClipboardEventListener(
            window,
            document,
            navigator,
            divElement
        )
    }
}

(async function () {
    await init()
})()
