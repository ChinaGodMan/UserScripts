// ==UserScript==
// @name         显示Greasyfork用户注册时间，识别恶意评论
// @name:zh-CN   显示Greasyfork用户注册时间，识别恶意评论
// @name:zh-TW   顯示Greasyfork用戶註冊時間，識別惡意評論
// @name:en      Display GreasyFork user registration time (presumed)
// @name:ja      GreasyForkのユーザー登録時刻を表示（推定）
// @name:ru      Отображение времени регистрации пользователя GreasyFork (предположительно)
// @name:kr      GreasyFork 사용자 등록 시간 표시(추정)
// @namespace    yysk.org
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @version      1.0.8
// @author       yysk.org
// @match        *://greasyfork.org/*
// @match        *://sleazyfork.org/*
// @match        http://127.0.0.1:5500/*
// @require      https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @description        如果你的脚本干涉了某些人的利益，收到恶意差评并不意外。恶意差评有两个特点，一是账号通常新注册，二是注册后不久就会给差评，且基本不会有后续活动。本脚本根据greasyfork用户ID为连续自然数的特点，推测评论者的注册时间，帮你识别恶意评论，举报不要手软。
// @description:zh-CN  如果你的脚本干涉了某些人的利益，收到恶意差评并不意外。恶意差评有两个特点，一是账号通常新注册，二是注册后不久就会给差评，且基本不会有后续活动。本脚本根据greasyfork用户ID为连续自然数的特点，推测评论者的注册时间，帮你识别恶意评论，举报不要手软。
// @description:zh-TW  如果你的腳本干涉了某些人的利益，收到惡意差評並不意外。惡意差評有兩個特點，一是賬號通常新註冊，二是註冊後不久就會給差評，且基本不會有後續活動。本腳本根據greasyfork用戶ID爲連續自然數的特點，推測評論者的註冊時間，幫你識別惡意評論，舉報不要手軟。
// @description:en     Display GreasyFork user registration time (presumed). This script predicts the registration time of the commenter according to the greasyfork user ID is a continuous natural number.
// @description:ja     GreasyForkのユーザー登録時刻を表示（推定）. このスクリプトは greasyfork のユーザー ID が連続する自然数であることから、コメント投稿者の登録時間を予測します。
// @description:ru     Отображение времени регистрации пользователя GreasyFork (предположительно). Этот скрипт предсказывает время регистрации комментатора по идентификатору пользователя greasyfork — непрерывное натуральное число.
// @description:kr     GreasyFork 사용자 등록 시간 표시(추정). 이 스크립트는 greasyfork 사용자 ID가 연속적인 자연수에 따라 댓글 작성자의 등록 시간을 예측합니다.
// @license      Copyright yysk.org
// @downloadURL https://update.greasyfork.org/scripts/450603/%E6%98%BE%E7%A4%BAGreasyfork%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C%E6%97%B6%E9%97%B4%EF%BC%8C%E8%AF%86%E5%88%AB%E6%81%B6%E6%84%8F%E8%AF%84%E8%AE%BA.user.js
// @updateURL https://update.greasyfork.org/scripts/450603/%E6%98%BE%E7%A4%BAGreasyfork%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C%E6%97%B6%E9%97%B4%EF%BC%8C%E8%AF%86%E5%88%AB%E6%81%B6%E6%84%8F%E8%AF%84%E8%AE%BA.meta.js
// ==/UserScript==
/* jslint esversion: 6 */
/*globals jQuery,db2 */
(function () {
    'use strict'
    const now = new Date().getTime()
    const interval = 3000
    const billion = 1000000000
    var avggap = 3600 * 24 / 400
    var db
    var url = "http://127.0.0.1:5500/%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC/1.json"
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, false)
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            db = JSON.parse(xhr.responseText)

        } else {
        }
    }
    xhr.onerror = function () {
    }
    xhr.send()
    //var db = [950796,661467770,950383,661365665];
    var lang = document.querySelector('html').lang.toLowerCase() || navigator.language.toLowerCase()
    if (!["en", "zh-cn", "zh-tw", "ja", "ru", "kr"].includes(lang)) lang = "en"
    const i18n = {
        en: {
            title: "presumed registration time",
            prefix: "R",
        },
        "zh-cn": {
            title: "推测的注册时间",
            prefix: "注",
        },
        "zh-tw": {
            title: "推測的註冊時間",
            prefix: "注",
        },
        ja: {
            title: "推定登録時間",
            prefix: "R",
        },
        ru: {
            title: "Предполагаемое время регистрации",
            prefix: "R",
        },
        kr: {
            title: "예상 등록 시간",
            prefix: "R",
        },
    }
    const title = i18n[lang].title
    const prefix = i18n[lang].prefix
    function ts2dt(ts) {

        return new Date(ts * 1000).toISOString()
    }

    function genregtime(uid) {
        var uid1
        var uid2
        var ts1
        var ts2
        var ts
        // console.log(db) // 输出 db 的内容
        if (uid >= db[0]) {
            ts = db[1] + (uid - db[0]) * avggap + billion
            //console.log(avggap, uid - db[0], (ts - db[1] - billion) / 3600);
            if (ts * 1000 > maxts) ts = maxts / 1000
            console.log("ts * 1000 > maxts", ts)
            return ts2dt(ts)
        }
        for (var i = 0; i < db.length; i += 2) {
            uid1 = db[i]
            ts1 = db[i + 1]
            if (uid >= uid1) {
                ts = ts1 + (ts2 - ts1) / (uid2 - uid1) * (uid - uid1) + billion
                console.log("uid >= uid1", ts)
                return ts2dt(ts)
            }
            uid2 = uid1
            ts2 = ts1
        }
    }

    function gensnippet(regtime, uid) {
        return `<span class="regtime" style="margin-left: 10px; font-weight: bold; color: red;" title="uid ${uid} ${title}">${prefix} <relative-time datetime="${regtime.split(".")[0]}+00:00" prefix="">${regtime.split("T")[0]}</relative-time></span>`
    }
    function run() {
        //console.log(`${db.length / 2} uid records in db, max uid is ${db[0]} @ ${db[1]}`);
        //  return
        var regtime
        var maxuid = 0
        const uids = document.documentElement.innerHTML.matchAll(/\/users\/(\d+)/g)
        for (const uid of uids) {

            if (parseInt(uid[1]) > maxuid) maxuid = parseInt(uid[1])
        }
        // 如果最大uid超出了db中所记录，假设页面上最大的uid为刚注册，并依此设定超出数据库范围的uid的注册间隔；如果算得的gap显然不合理，则沿用初始值
        if (maxuid >= db[0]) {
            avggap = (maxts / 1000 - billion - db[1]) / (maxuid - db[0])
        }
        console.log(avggap)
        if (!window.location.href.match(/(greasyfork|sleazyfork).org\/\w+-\w+\/users(\?page=1)?$/) && avggap > 216) avggap = 216
        if (window.location.href.match(/(greasyfork|sleazyfork).org\/\w+-\w+\/users\/\d+(-[^/]*)?$/) && jQuery("section#about-user > span.regtime").length === 0) {
            let uid = jQuery("section#about-user > a.report-link").attr("href").match(/item_id=(\d+)/)[1]

            regtime = genregtime(uid)
            jQuery("section#about-user > h2").after(gensnippet(regtime, uid))
        }
        jQuery("a.user-link, dd.script-list-author > span > a, dd.script-show-author > span > a, table.log-table > tbody > tr > td > a, i:contains('Deleted user ')").each(function (i, el) {
            var lastele = jQuery(el).parent().children().last()
            if (lastele.attr("class") === "regtime") return
            var m = (el.tagName === "A") ? jQuery(el).attr("href").match(/\/users\/(\d+)/) : jQuery(el).text().match(/Deleted user (\d+)/)
            if (!m) return
            regtime = genregtime(m[1])
            lastele.after(gensnippet(regtime, m[1]))
        })
        return run
    }
    var maxts = 0
    for (const datetime of document.documentElement.innerHTML.matchAll(/<relative-time datetime="(.*?)"/g)) {
        let ts = new Date(datetime[1]).getTime()
        if (ts > maxts) maxts = ts
    }
    console.log("maxts: " + maxts)
    if (maxts === 0) maxts = now
    if (new Date().getTime() - GM_getValue("utime", 0) <= 86400000) {
        console.log("skip db2 update")
        db = GM_getValue("db2", []).concat(db)
        setInterval(run(), interval)
    } else {
        GM_xmlhttpRequest({
            method: "GET",
            url: `https://greasyfork.org/scripts/450618-db2-for-script-450603/code/db2%20for%20script%20450603.js?v=${now}`,
            onload(res) {
                console.log("db2 updated")
                GM_setValue("utime", now)
                var db2 = JSON.parse(res.responseText.match(/var db2 = (\[.*?\]);/)[1])
                GM_setValue("db2", db2)
                db = db2.concat(db)
                setInterval(run(), interval)
            },
            onerror(res) {
                console.error("db2 update failed")
                db = GM_getValue("db2", []).concat(db)
                setInterval(run(), interval)
            },
            onabort(res) {
                console.warn("db2 update abort")
                db = GM_getValue("db2", []).concat(db)
                setInterval(run(), interval)
            },
            ontimeout(res) {
                console.error("db2 update timeout")
                db = GM_getValue("db2", []).concat(db)
                setInterval(run(), interval)
            },
        })
    }
    //1359490
    var first_value = db[0]

    // 循环十次
    for (var i = 0; i < 10; i++) {
        // 调用 test 函数，传递 first_value + 100
        test(first_value + 100)
        // 增加 first_value 以便下次迭代的计算
        first_value += 100
    }
    // 将 db 转换为 JSON 格式
    var json = JSON.stringify(db)

    // 创建一个下载链接并触发下载
    var blob = new Blob([json], { type: 'application/json' })
    var url = URL.createObjectURL(blob)
    var a = document.createElement('a')
    a.href = url
    a.download = 'db.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    function test(uid) {
        var maxuid = 0
        // 如果最大uid超出了db中所记录，假设页面上最大的uid为刚注册，并依此设定超出数据库范围的uid的注册间隔；如果算得的gap显然不合理，则沿用初始值
        if (maxuid >= db[0]) {
            avggap = (maxts / 1000 - billion - db[1]) / (maxuid - db[0])
        }
        if (avggap > 216) avggap = 216

        //console.log(genregtime(uid))
        //    console.log(db)
        var regtime = genregtime(uid) // 获取注册时间的 ISO 8601 格式字符串
        var unixTimestamp = isoToUnix(regtime) - billion // 转换为 Unix 时间戳

        console.log("减去:", unixTimestamp, regtime)
        db = 加入(uid, unixTimestamp)
        console.log(db)

        function isoToUnix(isoString) {
            return Math.floor(new Date(isoString).getTime() / 1000)
        }
    }
    function 加入(uid, unixTimestamp) {
        // 假设 db 是一个数组，我们将 uid 和 unixTimestamp 作为一个新元素加入到 db 中
        db.unshift(uid, unixTimestamp)
        return db // 返回更新后的 db
    }
})()
