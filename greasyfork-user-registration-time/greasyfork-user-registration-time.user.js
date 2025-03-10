// ==UserScript==
// @name      Display GreasyFork user registration time
// @description  If your script interferes with the interests of certain individuals, receiving malicious negative reviews is not surprising. Malicious negative reviews have two characteristics: First, the account is usually newly registered, and second, the review is given shortly after registration with little to no subsequent activity. This script retrieves the registration time of a GreasyFork user and displays it next to their username. If the time displayed next to the username is in the future, this user is likely to be a maliciously registered account.
// @name:zh-CN   显示Greasyfork用户注册时间，识别恶意评论
// @description:zh-CN  如果你的脚本干涉了某些人的利益，收到恶意差评并不意外。恶意差评有两个特点，一是账号通常新注册，二是注册后不久就会给差评，且基本不会有后续活动。本脚本获取greasyfork用户注册时间，并显示在用户名旁边。如果用户名旁边显示的时间是未来的时间，那么这个用户很可能是恶意注册的账号。
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @match        *://greasyfork.org/*
// @match        *://sleazyfork.org/*
// @require           https://code.jquery.com/jquery-3.7.1.min.js
// @author             yysk.org,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL    https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @icon https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/greasyfork-webhook-sync-enhanced.svg
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @compatible     kiwi
// @version         2025.03.10.0959
// @created         2025-03-10 09:59:11
// @modified        2025-03-10 09:59:11
// ==/UserScript==
/**
 * File: greasyfork-user-registration-time.user.js
 * Project: UserScripts
 * File Created: 2025/03/10,Monday 09:59:36
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/10,Monday 12:12:45
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */


(function () {
    'use strict'
    const interval = 3000
    const absoluteTime = 'relative-time1'//随便修改个类名,显示精确时间.比如relative-time1
    var lang = document.querySelector('html').lang.toLowerCase() || navigator.language.toLowerCase()

    if (!['en', 'zh-cn', 'zh-tw', 'ja', 'ru', 'kr'].includes(lang)) lang = 'en'
    const i18n = {
        en: {
            title: 'Registration time',
            prefix: 'R'
        },
        'zh-cn': {
            title: '注册时间',
            prefix: '注'
        },
        'zh-tw': {
            title: '註冊時間',
            prefix: '注'
        },
        ja: {
            title: '登録時間',
            prefix: 'R'
        },
        ru: {
            title: 'время регистрации',
            prefix: 'R'
        },
        kr: {
            title: '등록 시간',
            prefix: 'R'
        }
    }
    const title = i18n[lang].title
    const prefix = i18n[lang].prefix

    function pad(s, d) {
        s = `000000${s}`
        return s.substring(s.length - d)
    }

    const formatUFn = (dt) => {
        return `${dt.getFullYear()}.${pad(dt.getMonth() + 1, 2)}.${pad(dt.getDate(), 2)} ${pad(dt.getHours(), 2)}:${pad(dt.getMinutes(), 2)}:${pad(dt.getSeconds(), 2)}`
    }

    const formatFrFn = (dt) => {
        return `${pad(dt.getDate(), 2)}.${pad(dt.getMonth() + 1, 2)}.${dt.getFullYear()} ${pad(dt.getHours(), 2)}:${pad(dt.getMinutes(), 2)}:${pad(dt.getSeconds(), 2)}`
    }

    function formatTime(utcTime, lang = 'en') {
        const dt = new Date(utcTime)

        let formatFn = (lang === 'fr' || lang.startsWith('fr-')) ? formatFrFn : formatUFn

        return formatFn(dt)
    }



    async function genregtime(uid) {
        if (GM_getValue(uid) !== undefined && GM_getValue(uid) !== null) {
            return GM_getValue(uid)
        }
        const user_api = `https://api.greasyfork.org/users/${uid}.json`
        var created_at
        try {
            const response = await fetch(user_api)
            const data = await response.json()
            created_at = data.created_at
            console.log('🔍 ~ created_at:', created_at)
        } catch (error) {
            console.error('请求失败:', error)
        }
        GM_setValue(uid, created_at)
        return created_at
    }
    function gensnippet(regtime, uid) {
        return `<span class="regtime" style="margin-left: 10px; font-weight: bold; color: red;" title="uid ${uid} ${title}">${prefix} <${absoluteTime} datetime="${regtime}+00:00" prefix="">${regtime}</${absoluteTime}></span>`
    }
    let isProcessing = false
    function run() {
        if (isProcessing) return
        isProcessing = true
        var maxuid = 0
        const uids = document.documentElement.innerHTML.matchAll(/\/users\/(\d+)/g)
        for (const uid of uids) {
            if (parseInt(uid[1]) > maxuid) maxuid = parseInt(uid[1])
        }
        if (window.location.href.match(/(greasyfork|sleazyfork).org\/\w+-\w+\/users\/\d+(-[^/]*)?$/) && jQuery('section#about-user > span.regtime').length === 0) {
            let uid = jQuery('section#about-user > a.report-link').attr('href').match(/item_id=(\d+)/)[1]
            genregtime(uid).then(regtime => {
                regtime = formatTime(regtime, lang)
                jQuery('section#about-user > h2').after(gensnippet(regtime, uid))
            })

        }
        jQuery('a.user-link, dd.script-list-author > span > a, dd.script-show-author > span > a, table.log-table > tbody > tr > td > a, i:contains(\'Deleted user \')').each(function (i, el) {
            var lastele = jQuery(el).parent().children().last()
            if (lastele.attr('class') === 'regtime' || lastele.attr('class') === 'small-btn') return
            var button = jQuery('<button>').text(i18n[lang].prefix).addClass('small-btn')
            var m = (el.tagName === 'A') ? jQuery(el).attr('href').match(/\/users\/(\d+)/) : jQuery(el).text().match(/Deleted user (\d+)/)
            if (!m) return

            button.on('click', function () {
                isProcessing = true
                genregtime(m[1]).then(regtime => {
                    regtime = formatTime(regtime, lang)
                    lastele.after(gensnippet(regtime, m[1]))
                })
                button.remove()
            })

            // 如果存在时间就直接插入,不存在显示按钮
            if (GM_getValue(m[1]) !== undefined && GM_getValue(m[1]) !== null) {
                lastele.after(gensnippet(formatTime(GM_getValue(m[1]), lang), m[1]))
            } else {
                lastele.after(button)
            }

        })
        isProcessing = false

        return run
    }
    setInterval(run(), interval)
})()
