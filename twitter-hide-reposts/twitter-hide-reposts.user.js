// ==UserScript==
// @name Hide Reposts on Twitter/X
// @description	Automatically hide forwarded content and hide forwarded content when first loaded
// @name:zh-CN Twitter/X 隐藏转发的帖子
// @description:zh-CN 自动隐藏转发转发内容,并且在首次加载时隐藏转发内容,移除烦人的广告
// @author             Owyn,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL    https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @icon https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/x.svg
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @compatible     kiwi
// @compatible     qq
// @compatible     via
// @compatible      brave
// @grant		GM_registerMenuCommand
// @noframes
// @run-at		document-end
// @sandbox		JavaScript
// @match		https://x.com/*
// @match		https://twitter.com/*
// @version         2025.03.11.0654
// @created         2025-03-11 06:54:32
// @modified        2025-03-11 06:54:32
// @downloadURL https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-hide-reposts/twitter-hide-reposts.user.js
// @downloadURL https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-hide-reposts/twitter-hide-reposts.user.js
// ==/UserScript==
/**
 * File: twitter-hide-reposts.user.js
 * Project: UserScripts
 * File Created: 2025/03/11,Tuesday 06:55:14
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/11,Tuesday 08:28:39
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */
'use strict'

const tweetCSS = '[data-testid="cellInnerDiv"]'
const repostCSS = '[data-testid="socialContext"]'
const alreadyHiddenCSS = '[style*="display: none;"]'

function hideReposts() {
    var n = document.querySelectorAll(tweetCSS + ':has(' + repostCSS + '):not(' + alreadyHiddenCSS + ')')
    for (let i = 0; i < n.length; i++) {
        n[i].style.display = 'none'
        console.debug('hid a repost')
    }
    setTimeout(hideReposts, 500)
}
hideReposts()
window.addEventListener('scroll', hideReposts)

if (typeof GM_registerMenuCommand !== 'undefined') {
    GM_registerMenuCommand('Disable (this once for this page)', () => window.removeEventListener('scroll', hideReposts), 'h')
}
