// ==UserScript==
// @name               Weibo Mobile Redirect
// @name:zh-CN         新浪微博移动版跳转
// @description        Auto redirect Weibo to mobile version
// @description:zh-CN  新浪微博自动跳转移动版，支持微博、文章、视频
// @author             Vinfall
// @namespace          https://github.com/Vinfall/UserScripts
// @supportURL         https://github.com/Vinfall/UserScripts/issues
// @homepageURL        https://github.com/Vinfall/UserScripts
// @homepage           https://github.com/Vinfall/UserScripts
// @license            MIT
// @match              https://video.weibo.com/show?fid=*
// @match              https://weibo.com/*/*
// @match              https://weibo.com/ttarticle/p/show?id=*
// @match              https://weibo.com/u/*
// @match              https://www.weibo.com/detail/*
// @exclude-match      https://card.weibo.com/article/*
// @exclude-match      https://m.weibo.cn/detail/*
// @exclude-match      https://m.weibo.cn/status/*
// @exclude-match      https://m.weibo.cn/u/*
// @exclude-match      https://passport.weibo.com/*
// @exclude-match      https://weibo.com/signup/*
// @exclude-match      https://weibo.com/tv/show/*
// @grant              none
// @run-at             document-start
// @icon               https://m.weibo.cn/favicon.ico
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.2.1
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/weibo-mobile-redirect/weibo-mobile-redirect.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/weibo-mobile-redirect/weibo-mobile-redirect.user.js
// ==/UserScript==

(() => {
    const currentUrl = window.location.href

    // Defend in depth
    if (currentUrl.includes('card.weibo.com') || currentUrl.includes('m.weibo.cn')) {
        return
    }

    // TODO: fix redirect to passport.weibo.com when nojs is OFF
    // function delayedRedirect(url, delay = 500) {
    //     setTimeout(() => {
    //         window.location.replace(url);
    //     }, delay);
    // }

    const cases = [
        // weibo.com/u/*
        {
            pattern: /^https:\/\/weibo\.com\/u\/(\d+)/,
            handle: (match) => {
                const userId = match[1]
                const userMobileUrl = `https://m.weibo.cn/u/${userId}`
                window.location.replace(userMobileUrl)
            }
        },
        // weibo.com/ttarticle/p/show?id=*
        {
            pattern: /^https:\/\/weibo\.com\/ttarticle\/p\/show\?id=(\d+)/,
            handle: (match) => {
                const articleId = match[1]
                const articleMobileUrl = `https://card.weibo.com/article/h5/s#cid=${articleId}`
                window.location.replace(articleMobileUrl)
            }
        },
        // weibo.com/1234567890/1234567890123456
        // used to be weibo.com/detail/*
        {
            pattern: /^https:\/\/weibo\.com\/\d{10}\/(\d{16})/,
            handle: (match) => {
                const detailId = match[1]
                const detailMobileUrl = `https://m.weibo.cn/detail/${detailId}`
                window.location.replace(detailMobileUrl)
            }
        },
        // weibo.com/1234567890/abcdEFG89
        {
            pattern: /^https:\/\/weibo\.com\/\d{10}\/(\w{9})/,
            handle: (match) => {
                const statusId = match[1]
                const statusMobileUrl = `https://m.weibo.cn/status/${statusId}`
                window.location.replace(statusMobileUrl)
                // delayedRedirect(statusMobileUrl);
            }
        },
        // video.weibo.com/show?fid=1234:1234567890123456
        // always auto redirect, added just in case
        {
            pattern: /^https:\/\/video\.weibo\.com\/show\?fid=(\d{4}:\d+)/,
            handle: (match) => {
                const fid = match[1]
                const videoUrl = `https://weibo.com/tv/show/${fid}`
                window.location.replace(videoUrl)
            }
        }
    ]

    for (const caseItem of cases) {
        const match = currentUrl.match(caseItem.pattern)
        if (match) {
            caseItem.handle(match)
            return
        }
    }
})()
