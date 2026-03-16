// ==UserScript==
// @name               Twitter(X)-Plus
// @name:zh-CN         Twitter(X)-Plus
// @description        Unmute videos, disable automatic looping of videos, delete retweets and Grok/view count buttons for tweets, add one-click blocking, and one-click copy tweet URL buttons.
// @description:zh-CN  视频取消静音,视频取消自动循环播放,推文删除转发、Grok/浏览量按钮,添加一键屏蔽,一键复制推文网址按钮
// @author             Kdroidwin,@dmtri,legendary_warrior_1, Hzbrrbmin,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @match              https://twitter.com/*
// @match              https://x.com/*
// @match              https://mobile.x.com/*
// @icon               https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/x.svg
// @grant              GM_setClipboard
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2026.3.16.1
// @created            2026-03-16 13:09:27
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter(X)-plus/twitter(X)-plus.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter(X)-plus/twitter(X)-plus.user.js
// ==/UserScript==

//LINK - 隐藏按钮
const style = document.createElement('style')
style.id = 'x-btn-hider-styles'
style.textContent = `
/* 右上角Grok 暂时只测试了 中文页面 后续待添加 */
button[aria-label="Grok 操作"] {
    display: none !important;
}

/* 转发 */
[data-testid="retweet"] {
    display: none !important;
}

/* 浏览量 */
a[href*="/analytics"] {
    display: none !important;

`
document.head.appendChild(style)

//SECTION - 拉黑
// --- SVG icon---
const blockIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>`

const copyIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4
             a2 2 0 0 1 2-2h9
             a2 2 0 0 1 2 2v1"></path>
</svg>`

const checkIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`

// --- Utilities ---
const simulateClick = (element) => {
    if (element) {
        element.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// --- Block sequence ---
async function blockUser(event) {
    event.preventDefault()
    event.stopPropagation()

    console.log('OneClickBlock: Starting block sequence...')

    const tweetElement = event.currentTarget.closest('article[data-testid="tweet"]')
    if (!tweetElement) return

    const moreButton = tweetElement.querySelector('button[data-testid="caret"]')
    if (!moreButton) return

    simulateClick(moreButton)
    await sleep(150)

    const blockMenuItem = document.querySelector('div[data-testid="block"]')
    if (!blockMenuItem) {
        simulateClick(moreButton)
        return
    }

    simulateClick(blockMenuItem)
    await sleep(150)

    const confirmButton = document.querySelector('button[data-testid="confirmationSheetConfirm"]')
    if (!confirmButton) return

    simulateClick(confirmButton)

    // Fade out blocked tweet
    tweetElement.style.transition = 'opacity 0.4s'
    tweetElement.style.opacity = '0.3'

    setTimeout(() => {
        tweetElement.style.display = 'none'
    }, 400)
}

// --- Add button to tweet ---
function addBlockButtons() {
    const tweets = document.querySelectorAll('article[data-testid="tweet"]')

    tweets.forEach(tweet => {
        if (tweet.querySelector('.one-click-block-btn')) return

        const insertionPoint = tweet.querySelector('[role="group"]')
        if (!insertionPoint) return

        const button = document.createElement('div')
        button.className = 'one-click-block-btn'
        button.innerHTML = blockIconSVG
        button.style.cursor = 'pointer'
        button.style.marginLeft = '8px'
        button.style.display = 'flex'
        button.style.alignItems = 'center'
        button.style.color = 'rgb(113, 118, 123)'
        button.title = 'Block this user'

        button.addEventListener('mouseenter', () => {
            button.style.color = 'rgb(239, 68, 68)'
        })

        button.addEventListener('mouseleave', () => {
            button.style.color = 'rgb(113, 118, 123)'
        })

        button.addEventListener('click', blockUser)

        insertionPoint.appendChild(button)
    })
}

function copyLink(event) {
    event.preventDefault()
    event.stopPropagation()
    const button = event.currentTarget
    console.log('OneClickBlock: Starting copy this tweet url...')
    const tweetElement = button.closest('article[data-testid="tweet"]')
    if (!tweetElement) return
    const timeLink = tweetElement.querySelector('a[href*="/status/"] > time')?.parentElement
    if (!timeLink) return
    const url = 'https://x.com' + timeLink.getAttribute('href')
    GM_setClipboard(url)
    button.innerHTML = checkIconSVG
    button.style.color = 'rgb(13, 194, 58)'
    setTimeout(() => {
        button.innerHTML = copyIconSVG
        button.style.color = 'rgb(113, 118, 123)'
    }, 2000)
}
function addCopyButtons() {
    const tweets = document.querySelectorAll('article[data-testid="tweet"]')
    tweets.forEach(tweet => {
        if (tweet.querySelector('.one-click-copy-btn')) return
        const insertionPoint = tweet.querySelector('[role="group"]')
        if (!insertionPoint) return
        const button = document.createElement('div')
        button.className = 'one-click-copy-btn'
        button.innerHTML = copyIconSVG
        button.style.cursor = 'pointer'
        button.style.marginLeft = '8px'
        button.style.display = 'flex'
        button.style.alignItems = 'center'
        button.style.color = 'rgb(113, 118, 123)'
        button.title = 'Copy this tweet URL'
        button.addEventListener('mouseenter', () => {
            button.style.color = 'rgb(13, 194, 58)'
        })
        button.addEventListener('mouseleave', () => {
            button.style.color = 'rgb(113, 118, 123)'
        })
        button.addEventListener('click', copyLink)
        insertionPoint.appendChild(button)
    })
}

//SECTION - 视频操作
// Keep track of processed videos
const processedVideos = new WeakSet()

const stopVideoLoop = () => {
    const vids = document.querySelectorAll('video')
    vids.forEach((vid) => {
        if (vid.muted) {
            vid.muted = false
            vid.volume = 0.5
            vid.play().catch(() => { })
        }
        if (processedVideos.has(vid)) return
        processedVideos.add(vid)
        vid.removeAttribute('loop')
        let arr = []
        const setupTimeout = (extra = 0) => {
            let vidLen = vid.duration
            let vidCurr = vid.currentTime
            // ignore any buggy timeout triggered < 500ms
            if ((vidLen - vidCurr) * 1000 < 500) return
            // Ensure duration is available
            if (isNaN(vid.duration) || vid.duration === Infinity) return

            console.log(vidLen > vidCurr, 'setting a timeout', (vidLen - vidCurr - 0.05) * 1000)
            if (vidLen > vidCurr) {
                const timeout = setTimeout(() => {
                    // hack: sometimes video just stops randomly, so need to stop that behavior here
                    vidLen = vid.duration
                    vidCurr = vid.currentTime
                    const remaining = (vidLen - vidCurr) * 1000
                    console.log(remaining)
                    if (remaining < 500) vid.pause()
                }, (vidLen - vidCurr - 0.01) * 1000 + extra) // Adjusted to account for potential delays
                arr.push(timeout)
            }
        }

        // need this for the initial load, 1st time playing. Some extra buffer for 1st time too
        vid.addEventListener('loadedmetadata', () => setupTimeout(-200))

        vid.addEventListener('seeked', () => {
            clearAll(arr)
            setupTimeout()
        })

        vid.addEventListener('pause', () => {
            clearAll(arr)
        })

        vid.addEventListener('play', () => {
            setupTimeout()
        })

        vid.addEventListener('ended', () => {
            setTimeout(() => vid.pause(), 10)
        })
    })
}

const clearAll = (arr) => {
    arr.forEach((timeout) => {
        clearTimeout(timeout)
    })
    arr = []
}
// --- Observe dynamic loading ---
const observer = new MutationObserver(() => {
    stopVideoLoop()
    addBlockButtons()
    addCopyButtons()
})
observer.observe(document.body, { childList: true, subtree: true })

//SECTION - 注入外挂
stopVideoLoop()
addBlockButtons()
addCopyButtons()
