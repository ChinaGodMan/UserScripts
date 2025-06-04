// ==UserScript==
// @name               Show date normally on Twitter
// @name:zh-CN         Twitter 显示正常的日期和时间
// @description        Like this, 70/12/31(Th) 23:59:59.
// @description:zh-CN  看起来是这样的。70/12/31(Th) 23:59:59.
// @author             AeamaN
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @match              https://twitter.com/*
// @match              https://mobile.twitter.com/*
// @match              https://mobile.twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion/*
// @match              https://x.com/*
// @match              https://mobile.x.com/*
// @require            https://update.greasyfork.org/scripts/538254/1601105/PNG.js
// @grant              GM_getValue
// @grant              GM_registerMenuCommand
// @grant              GM_setValue
// @run-at             document-body
// @icon               https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/x.svg
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.4.1
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-show-date-normally/twitter-show-date-normally.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-show-date-normally/twitter-show-date-normally.user.js
// ==/UserScript==

// And more. See Default valuse below.
// It's based on "https://qiita.com/libraplanet/items/0bdd7ef1a13e7af8f48f".
//
// 他にも機能があります。以下の Default valuse を確認して下さい。
// "https://qiita.com/libraplanet/items/0bdd7ef1a13e7af8f48f" を参考にしています。
(function () { /* START */

    'use strict'

    // //////////// Settings //////////// //
    // No GUI Settings
    // Default values are used
    const NOGUI = false
    // ////////////////////////////////// //

    // ///////// Default valuse ///////// //
    // Blue bird returns
    const BBR = false

    // Replace with orig images(wasted traffic occurs)
    const ORIGI = false

    // Slightly wider TL
    const WTL = false

    // Eye Care Mode at default background
    const ECMODE = true

    // Hide promotions
    const HPP = true

    // Hide Who to follow
    const HWTF = true

    // Hide DM drawer
    const HDMD = true

    // Hide Get Verified
    const HGV = true

    // Fine engagement
    // 1. Live
    // 2. Normal
    // 0. Do nothing
    const FEGM = 0

    // Fix videos quality
    // 1. Maximum
    // 2. Minimum
    // 0. Do nothing
    const FVQ = 1

    // Date formats
    //  1. 31.12.70 23:59
    //  2. 31.12.70 23:59:59
    //  3. 31.12.70(Th) 23:59
    //  4. 31.12.70(Th) 23:59:59
    //
    //  5. 70/12/31 23:59
    //  6. 70/12/31 23:59:59
    //  7. 70/12/31(Th) 23:59
    //  8. 70/12/31(Th) 23:59:59 [ye/mo/da(we) ho:mi:se]
    //
    //  9. 70-12/31 23:59
    // 10. 70-12/31 23:59'59
    // 11. 70-12/31(Th) 23:59
    // 12. 70-12/31(Th) 23:59'59
    //
    // 13. M59-12-31 23:59
    // 14. M59-12-31 23:59:59
    // 15. M59-12-31(Th) 23:59
    // 16. M59-12-31(Th) 23:59:59
    //
    //  0. Do nothing
    const FMT = 7

    // Loop interval(ms)
    const INTL = 800
    // ////////////////////////////////// //

    const MYNAME = 'sdnt1200'
    const LANG = document.documentElement.getAttribute('lang')

    let time_r = Date.now()
    let s_mutations = true
    let observer = new MutationObserver(function (mutations) {
        s_mutations = mutations
    })
    let originalXHROPEN
    let bbr, origi, wtl, ecmode, hpp, hwtf, hdmd, hgv, fegm, fvq, fmt, intl

    function makeDialog() {
        let dalg = document.createElement('div')

        dalg.className = 'us-' + MYNAME

        dalg.style.all = 'initial'
        dalg.style.backgroundColor = 'rgb(235, 235, 235)'
        dalg.style.border = '3px outset'
        dalg.style.borderRadius = '1%'
        dalg.style.display = 'none'
        dalg.style.fontFamily = 'monospace'
        dalg.style.fontSize = '12px'
        dalg.style.height = '440px'
        dalg.style.width = '480px'
        dalg.style.paddingLeft = '2px'
        dalg.style.paddingRight = '2px'
        dalg.style.position = 'fixed'
        dalg.style.right = '8px'
        dalg.style.top = '8px'
        dalg.style.zIndex = '2147483647'
        dalg.style.overflow = 'auto'

        let html =
            '<span style="all: initial; font-size: 120%; line-height: 210%">' +
            GM_info.script.name + ' ' + GM_info.script.version + ' ' + 'Settings' +
            '</span><br />\n' +

            '<input type="radio" name="fmt" value="1" class="top_r" />31.12.70 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '&nbsp;' +
            '<input type="radio" name="fmt" value="2" class="top_r" />31.12.70 23:59:59<br />\n' +
            '<input type="radio" name="fmt" value="3" class="mid_r" />31.12.70(Th) 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="4" class="mid_r" />31.12.70(Th) 23:59:59<br />\n' +
            '<input type="radio" name="fmt" value="5" class="mid_r" />70/12/31 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="6" class="mid_r" />70/12/31 23:59:59<br />\n' +
            '<input type="radio" name="fmt" value="7" class="mid_r" />70/12/31(Th) 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="8" class="mid_r" />70/12/31(Th) 23:59:59<br />\n' +
            '<input type="radio" name="fmt" value="9" class="mid_r" />70-12/31 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="10" class="mid_r" />70-12/31 23:59\'59<br />\n' +
            '<input type="radio" name="fmt" value="11" class="mid_r" />70-12/31(Th) 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="12" class="mid_r" />70-12/31(Th) 23:59\'59<br />\n' +
            '<input type="radio" name="fmt" value="13" class="mid_r" />M59-12-31 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="14" class="mid_r" />M59-12-31 23:59:59<br />\n' +
            '<input type="radio" name="fmt" value="15" class="mid_r" />M59-12-31(Th) 23:59' +
            '&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fmt" value="16" class="mid_r" />M59-12-31(Th) 23:59:59<br />\n' +
            '<input type="radio" name="fmt" value="0" class="btm_r" />Do nothing<br />\n' +

            '<input type="checkbox" name="bbr" class="top_c" />BB returns' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="checkbox" name="origi" class="mid_c" />Replace with orig images*<br />\n' +
            '<input type="checkbox" name="wtl" class="mid_c" />Widen slightly TL' +
            '&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="checkbox" name="ecmode" class="btm_c" />Eye Care Mode at default BG<br />\n' +
            '<input type="checkbox" name="hpp" class="top_c" />Hide promotions' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="checkbox" name="hwtf" class="mid_c" />Hide Who to follow<br />\n' +
            '<input type="checkbox" name="hdmd" class="mid_c" />Hide DM drawer' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="checkbox" name="hgv" class="btm_c" />Hide Get Verified<br />\n' +

            '<input type="radio" name="fegm" value="1" class="top_r" />Fine engagement(live)' +
            '&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fegm" value="2" class="top_r" />Fine engagement(normal)<br />\n' +
            '<input type="radio" name="fegm" value="0" class="btm_r" />Do nothing<br />\n' +

            '<input type="radio" name="fvq" value="1" class="top_r" />at maximum video quality**' +
            '&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input type="radio" name="fvq" value="2" class="top_r" />at minimum video quality<br />\n' +
            '<input type="radio" name="fvq" value="0" class="btm_r" />Do nothing<br />\n' +

            '<span style="all: initial; font-size: 100%">' +
            'Loop interval(ms)**&nbsp;' +
            '</span><input type="text" name="intl" size="10" class="top_t" /><br />\n' +

            '<span style="all: initial; font-size: 100%; line-height: 200%">' +
            '*wasted traffic occurs&nbsp;&nbsp;&nbsp;&nbsp;**Restart required' +
            '</span><br />\n' +

            '<input type="button" class="top_b" value="Cancel" />\n' +
            '<input type="button" class="top_b" value="Set default" />\n' +
            '<input type="button" class="top_b" value="Save & Close" /><br /><br />\n'

        dalg.innerHTML = html

        for (let e of dalg.querySelectorAll('input.top_r, input.mid_r, input.btm_r')) {
            e.style.all = 'initial'
            e.style.appearance = 'auto'
            e.style.marginRight = '1px'
            e.style.marginTop = '1px'
        }
        for (let e of dalg.querySelectorAll('input.top_c, input.mid_c, input.btm_c')) {
            e.style.all = 'initial'
            e.style.appearance = 'auto'
            e.style.marginRight = '1px'
            e.style.marginTop = '1px'
        }
        for (let e of dalg.querySelectorAll('input.top_t')) {
            e.style.all = 'initial'
            e.style.backgroundColor = 'rgb(255, 255, 255)'
            e.style.fontFamily = 'monospace'
            e.style.fontSize = '100%'
            e.style.marginLeft = '1px'
            e.style.marginRight = '1px'
            e.style.marginTop = '8px'
            e.style.marginBottom = '0px'
            e.style.paddingLeft = '1px'
            e.style.paddingRight = '1px'
            e.style.paddingTop = '1px'
            e.style.paddingBottom = '1px'
        }
        for (let e of dalg.querySelectorAll('input.top_b')) {
            e.style.all = 'initial'
            e.style.backgroundColor = 'rgb(190, 190, 190)'
            e.style.borderRadius = '10%'
            e.style.cursor = 'default'
            e.style.fontSize = '110%'
            e.style.marginTop = '10px'
            e.style.marginBottom = '0px'
            e.style.paddingTop = '6px'
            e.style.paddingBottom = '6px'
            e.style.textAlign = 'center'
            e.style.width = '90px'
        }

        return dalg
    }

    function makeFunc(dalg) {
        dalg.addEventListener(
            'click',
            function (event) { event.stopPropagation() },
            false
        )

        dalg.querySelector('input[value="Cancel"]').addEventListener(
            'click',
            function () { dalg.style.display = 'none' },
            false
        )
        dalg.querySelector('input[value="Cancel"]').addEventListener(
            'mouseenter',
            function (event) { event.target.style.backgroundColor = 'rgb(170, 170, 170)' },
            false
        )
        dalg.querySelector('input[value="Cancel"]').addEventListener(
            'mouseleave',
            function (event) { event.target.style.backgroundColor = 'rgb(190, 190, 190)' },
            false
        )

        dalg.querySelector('input[value="Set default"]').addEventListener(
            'click',
            function () {
                dalg.querySelector('input[name="bbr"]').checked = BBR
                dalg.querySelector('input[name="origi"]').checked = ORIGI
                dalg.querySelector('input[name="fmt"][value="' + FMT + '"]').checked = true
                dalg.querySelector('input[name="wtl"]').checked = WTL
                dalg.querySelector('input[name="ecmode"]').checked = ECMODE
                dalg.querySelector('input[name="hpp"]').checked = HPP
                dalg.querySelector('input[name="hwtf"]').checked = HWTF
                dalg.querySelector('input[name="hdmd"]').checked = HDMD
                dalg.querySelector('input[name="hgv"]').checked = HGV
                dalg.querySelector('input[name="fegm"][value="' + FEGM + '"]').checked = true
                dalg.querySelector('input[name="fvq"][value="' + FVQ + '"]').checked = true
                dalg.querySelector('input[name="intl"]').value = INTL
            },
            false
        )
        dalg.querySelector('input[value="Set default"]').addEventListener(
            'mouseenter',
            function (event) { event.target.style.backgroundColor = 'rgb(170, 170, 170)' },
            false
        )
        dalg.querySelector('input[value="Set default"]').addEventListener(
            'mouseleave',
            function (event) { event.target.style.backgroundColor = 'rgb(190, 190, 190)' },
            false
        )

        dalg.querySelector('input[value="Save & Close"]').addEventListener(
            'click',
            function () {
                bbr = dalg.querySelector('input[name="bbr"]').checked
                origi = dalg.querySelector('input[name="origi"]').checked
                for (let e of dalg.querySelectorAll('input[name="fmt"]')) {
                    if (e.checked) {
                        fmt = +e.value
                        break
                    }
                }
                wtl = dalg.querySelector('input[name="wtl"]').checked
                ecmode = dalg.querySelector('input[name="ecmode"]').checked
                hpp = dalg.querySelector('input[name="hpp"]').checked
                hwtf = dalg.querySelector('input[name="hwtf"]').checked
                hdmd = dalg.querySelector('input[name="hdmd"]').checked
                hgv = dalg.querySelector('input[name="hgv"]').checked
                for (let e of dalg.querySelectorAll('input[name="fegm"]')) {
                    if (e.checked) {
                        fegm = +e.value
                        break
                    }
                }
                for (let e of dalg.querySelectorAll('input[name="fvq"]')) {
                    if (e.checked) {
                        fvq = +e.value
                        break
                    }
                }
                intl = +dalg.querySelector('input[name="intl"]').value

                GM_setValue('bbr', bbr)
                GM_setValue('origi', origi)
                GM_setValue('fmt', fmt)
                GM_setValue('wtl', wtl)
                GM_setValue('ecmode', ecmode)
                GM_setValue('hpp', hpp)
                GM_setValue('hwtf', hwtf)
                GM_setValue('hdmd', hdmd)
                GM_setValue('hgv', hgv)
                GM_setValue('fegm', fegm)
                GM_setValue('fvq', fvq)
                GM_setValue('intl', intl)

                dalg.style.display = 'none'
            },
            false
        )
        dalg.querySelector('input[value="Save & Close"]').addEventListener(
            'mouseenter',
            function (event) { event.target.style.backgroundColor = 'rgb(170, 170, 170)' },
            false
        )
        dalg.querySelector('input[value="Save & Close"]').addEventListener(
            'mouseleave',
            function (event) { event.target.style.backgroundColor = 'rgb(190, 190, 190)' },
            false
        )
    }

    function initgui() {
        if (GM_getValue('bbr') === undefined) {
            GM_setValue('bbr', BBR)
        } else {
            bbr = GM_getValue('bbr')
        }
        if (GM_getValue('origi') === undefined) {
            GM_setValue('origi', ORIGI)
        } else {
            origi = GM_getValue('origi')
        }
        if (GM_getValue('fmt') === undefined) {
            GM_setValue('fmt', FMT)
        } else {
            fmt = GM_getValue('fmt')
        }
        if (GM_getValue('wtl') === undefined) {
            GM_setValue('wtl', WTL)
        } else {
            wtl = GM_getValue('wtl')
        }
        if (GM_getValue('ecmode') === undefined) {
            GM_setValue('ecmode', ECMODE)
        } else {
            ecmode = GM_getValue('ecmode')
        }
        if (GM_getValue('hpp') === undefined) {
            GM_setValue('hpp', HPP)
        } else {
            hpp = GM_getValue('hpp')
        }
        if (GM_getValue('hwtf') === undefined) {
            GM_setValue('hwtf', HWTF)
        } else {
            hwtf = GM_getValue('hwtf')
        }
        if (GM_getValue('hdmd') === undefined) {
            GM_setValue('hdmd', HDMD)
        } else {
            hdmd = GM_getValue('hdmd')
        }
        if (GM_getValue('hgv') === undefined) {
            GM_setValue('hgv', HGV)
        } else {
            hgv = GM_getValue('hgv')
        }
        if (GM_getValue('fegm') === undefined) {
            GM_setValue('fegm', FEGM)
        } else {
            fegm = GM_getValue('fegm')
        }
        if (GM_getValue('fvq') === undefined) {
            GM_setValue('fvq', FVQ)
        } else {
            fvq = GM_getValue('fvq')
        }
        if (GM_getValue('intl') === undefined) {
            GM_setValue('intl', INTL)
        } else {
            intl = GM_getValue('intl')
        }

        let dalg = makeDialog()
        makeFunc(dalg)
        document.body.appendChild(dalg)

        GM_registerMenuCommand('Settings', function () {
            if (dalg.style.display == 'none') {
                dalg.querySelector('input[name="bbr"]').checked = bbr
                dalg.querySelector('input[name="origi"]').checked = origi
                dalg.querySelector('input[name="fmt"][value="' + fmt + '"]').checked = true
                dalg.querySelector('input[name="wtl"]').checked = wtl
                dalg.querySelector('input[name="ecmode"]').checked = ecmode
                dalg.querySelector('input[name="hpp"]').checked = hpp
                dalg.querySelector('input[name="hwtf"]').checked = hwtf
                dalg.querySelector('input[name="hdmd"]').checked = hdmd
                dalg.querySelector('input[name="hgv"]').checked = hgv
                dalg.querySelector('input[name="fegm"][value="' + fegm + '"]').checked = true
                dalg.querySelector('input[name="fvq"][value="' + fvq + '"]').checked = true
                dalg.querySelector('input[name="intl"]').value = intl

                dalg.style.display = 'block'
            }
        })
    }

    function datef(date, f) {
        const WEEK = {
            'ja': ['日', '月', '火', '水', '木', '金', '土'],
            'ko': ['일', '월', '화', '수', '목', '금', '토'],
            'zh-Hant': ['日', '一', '二', '三', '四', '五', '六'],
            'zh': ['日', '一', '二', '三', '四', '五', '六'],
            'ru': ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
            'de': ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
            'it': ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
            'fr': ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            'pt': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            'en': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] // Add your language
        }
        const WEEK_L = WEEK[LANG] ?? WEEK['en']

        const YE = date.getFullYear().toString().slice(-2)
        const YM = date.getFullYear() - 1911
        const MO = ('0' + (date.getMonth() + 1)).slice(-2)
        const DA = ('0' + date.getDate()).slice(-2)
        const WE = WEEK_L[date.getDay()]
        const HO = ('0' + date.getHours()).slice(-2)
        const MI = ('0' + date.getMinutes()).slice(-2)
        const SE = ('0' + date.getSeconds()).slice(-2)

        const F = [
            DA + '.' + MO + '.' + YE + ' ' + HO + ':' + MI, // 0=1
            DA + '.' + MO + '.' + YE + ' ' + HO + ':' + MI + ':' + SE,
            DA + '.' + MO + '.' + YE + '(' + WE + ') ' + HO + ':' + MI,
            DA + '.' + MO + '.' + YE + '(' + WE + ') ' + HO + ':' + MI + ':' + SE,
            YE + '/' + MO + '/' + DA + ' ' + HO + ':' + MI,
            YE + '/' + MO + '/' + DA + ' ' + HO + ':' + MI + ':' + SE,
            YE + '/' + MO + '/' + DA + '(' + WE + ') ' + HO + ':' + MI,
            YE + '/' + MO + '/' + DA + '(' + WE + ') ' + HO + ':' + MI + ':' + SE,
            YE + '-' + MO + '/' + DA + ' ' + HO + ':' + MI,
            YE + '-' + MO + '/' + DA + ' ' + HO + ':' + MI + '\'' + SE,
            YE + '-' + MO + '/' + DA + '(' + WE + ') ' + HO + ':' + MI,
            YE + '-' + MO + '/' + DA + '(' + WE + ') ' + HO + ':' + MI + '\'' + SE,
            'M' + YM + '-' + MO + '-' + DA + ' ' + HO + ':' + MI,
            'M' + YM + '-' + MO + '-' + DA + ' ' + HO + ':' + MI + ':' + SE,
            'M' + YM + '-' + MO + '-' + DA + '(' + WE + ') ' + HO + ':' + MI,
            'M' + YM + '-' + MO + '-' + DA + '(' + WE + ') ' + HO + ':' + MI + ':' + SE,
            YE + '/' + MO + '/' + DA + '(' + WE + ') ' + HO + ':' + MI + ':' + SE
        ]

        return F[f - 1] ?? F[16]
    }

    function bbreturn() {
        const SEL_ID =
            'div#placeholder[aria-label="Loading…"] g path, ' +
            'svg#loading-x-anim-0 g path, svg#loading-x-anim-1 g path, ' +
            'svg#loading-x-anim-2 g path, svg#loading-x-anim-3 g path'
        const SEL_H = 'header[role="banner"] h1[role="heading"] g path' // ホーム
        const SEL_M = 'div[data-testid="Dropdown"] a[href="/i/premium_sign_up"] g path' // もっと見る
        const SEL_V = 'header[role="banner"] nav g path' // 認証済み
        const SEL_L = 'div[role="dialog"] div[aria-labelledby="modal-header"] svg.r-lrvibr path' // ログイン
        const SEL_T = 'div#react-root main svg.r-lrvibr path' // トップ

        let elms = document.querySelectorAll(
            SEL_ID + ', ' + SEL_H + ', ' + SEL_M + ', ' + SEL_V + ', ' + SEL_L + ', ' + SEL_T
        )
        let ss // Temp.

        for (let e of elms) {
            const D_X = 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99'
            const D_BB =
                'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1' +
                '.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0' +
                ' .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342' +
                ' 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 ' +
                '4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2' +
                '.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112' +
                '-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.' +
                '005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'
            const D_FILL_N = 'none'
            const D_FILL_LB = '#1da1f2ff'
            const D_FILL_DB = '#1d9bf0ff'
            const D_S = 'currentColor'
            const D_SW = '2'

            if (e.getAttribute('d').startsWith(D_X)) {
                if (e.closest('header[role="banner"] nav, div[data-testid="Dropdown"] a[href="/i/premium_sign_up"]')) {
                    ss = s_mutations

                    e.setAttribute('d', D_BB)
                    e.setAttribute('fill', D_FILL_N)
                    e.setAttribute('stroke', D_S)
                    e.setAttribute('stroke-width', D_SW)

                    s_mutations = ss
                } else if (e.closest('div#placeholder[aria-label="Loading…"]') ||
                    e.closest('svg[id^="loading-x-anim-"]')) {
                    ss = s_mutations

                    e.setAttribute('d', D_BB)
                    e.setAttribute('fill', D_FILL_LB)

                    s_mutations = ss
                } else {
                    ss = s_mutations

                    e.setAttribute('d', D_BB)
                    e.setAttribute('fill', D_FILL_DB)

                    s_mutations = ss
                }
            }
        }

        const TITLE = document.title
        let elm = document.querySelector('head link[rel="shortcut icon"]')
        let elm_2 = document.querySelector('head link[rel="apple-touch-icon"]')

        ss = s_mutations

        if (
            elm &&
            !/favicons\/twitter\.2\.ico$/.test(elm.getAttribute('href')) &&
            !/^\(\d+\) /.test(document.title)
        ) {
            elm.setAttribute('href', '//abs.twimg.com/favicons/twitter.2.ico')
        } else if (
            elm &&
            !/favicons\/twitter-pip\.2\.ico$/.test(elm.getAttribute('href')) &&
            /^\(\d+\) /.test(document.title)
        ) {
            elm.setAttribute('href', '//abs.twimg.com/favicons/twitter-pip.2.ico')
        }
        if (
            elm_2 &&
            /responsive-web\/client-web[-a-z]*\/icon-ios\.77d25eba\.png$/.test(elm_2.getAttribute('href'))
        ) {
            elm_2.setAttribute('href', 'data:image/png;base64,' + PNG_BB)
            alert('afaf')
        }
        let rt = TITLE.replace(/ \/ X$/, ' / Twitter')
        if (TITLE != rt) document.title = rt

        s_mutations = ss
    }

    function origimg() {
        const SEL_D = 'div[style*="background-image:"]'
        const SEL_I = 'img'

        let elms = document.querySelectorAll(SEL_D + ', ' + SEL_I)

        for (let e of elms) {
            let regex = /^(.+pbs\.twimg\.com\/[^?]+\?format=\w+)(&|&amp;)(name=)(\w+)([")]*)$/
            let ss // Temp.

            if (/div/i.test(e.tagName)) {
                let r = regex.exec(e.style.backgroundImage)
                if (r && r[4] != 'orig') {
                    ss = s_mutations
                    e.style.backgroundImage = r[1] + r[2] + r[3] + 'orig' + r[5]
                    s_mutations = ss
                    continue
                }

                continue
            }

            let r = regex.exec(e.getAttribute('src'))
            if (r && r[4] != 'orig') {
                ss = s_mutations
                e.setAttribute('src', r[1] + r[2] + r[3] + 'orig' + r[5])
                s_mutations = ss
                continue
            }
        }
    }

    function widetl() {
        let elms = document.querySelectorAll('div.css-175oi2r.r-aqfbo4[data-testid="sidebarColumn"]')
        let ss // Temp.

        if (!document.querySelector('head style.' + 'us-' + MYNAME + '-' + 'c')) {
            let style_a = document.createElement('style')
            style_a.className = 'us-' + MYNAME + '-' + 'a'
            style_a.textContent =
                'div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj' +
                '{max-width: 660px;}'

            let style_b = document.createElement('style')
            style_b.className = 'us-' + MYNAME + '-' + 'b'
            style_b.textContent =
                'div[role="dialog"] div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj' +
                '{max-width: 600px;}'

            let style_c = document.createElement('style')
            style_c.className = 'us-' + MYNAME + '-' + 'c'
            style_c.textContent =
                'section div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj' +
                '{max-width: 600px;}'

            ss = s_mutations

            document.head.appendChild(style_a)
            document.head.appendChild(style_b)
            document.head.appendChild(style_c)

            s_mutations = ss
        }

        for (let e of elms) {
            let d, dd, dg, dgi, spdgi, da, ds

            d = e.querySelector(':scope>div>div.r-1hycxz', ':scope>div>div.r-1jocfgc')
            if (d != null) {
                dd = d.querySelector('div.r-aqfbo4.r-6gpygo.r-15ysp7h') // null対策
                dg = d.querySelector('div[data-testid="google_sign_in_container"]')
                dgi = d.querySelector('div[data-testid="google_sign_in_container"] iframe[id^="gsi"]')
                da = d.querySelector('button[data-testid="apple_sign_in_button"]')
                ds = d.querySelector('a[href="/i/flow/signup"]')
            }
            if (dgi) spdgi = dgi.parentNode.parentNode

            ss = s_mutations

            if (dd) dd.style.width = '290px'
            if (dg) dg.style.width = '260px'
            if (dgi) dgi.style.left = '-20px'
            if (spdgi) spdgi.style.setProperty('clip-path', 'inset(0 round 20px)')
            if (da) da.style.width = '260px'
            if (ds) ds.style.width = '260px'
            if (d != null) d.style.width = '290px'
            e.style.width = '290px' // 350px

            s_mutations = ss
        }
    }

    function chgbgc() {
        let body = document.getElementsByTagName('body')[0]

        if (/\(2\d{2},\s*2\d{2},\s*2\d{2}/i.test(body.style.backgroundColor)) {
            let tl, fb, sb
            tl = document.querySelector('main div.r-f8sm7e.r-1ye8kvj')
            fb = document.querySelector('main div.r-1e5uvyk.r-6026j')
            sb = document.querySelector('main div.r-aqfbo4.r-15ysp7h.r-1xcajam')

            let ss = s_mutations

            body.style.backgroundColor = 'rgb(253, 253, 245)'
            if (tl != null) tl.style.backgroundColor = 'rgb(253, 253, 245)'
            if (fb != null) fb.style.backgroundColor = 'rgba(253, 253, 245, 0.85)'
            if (sb != null) sb.style.backgroundColor = 'rgb(253, 253, 245)'

            s_mutations = ss
        }
    }

    function hidepromo() {
        const SEL = 'path[d^="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5"]'
        const SEL_2 = 'main div[data-testid="sidebarColumn"] section div[data-testid="trend"] div.r-14gqq1x ' +
            'span.css-1qaijid.r-bcqeeo.r-qvutc0' // def-ja, def-en, ble-ja, ble-en
        const SEL_3 = 'main div[data-testid="primaryColumn"] section article ' +
            'span.css-1jxf684.r-bcqeeo.r-qvutc0.r-poiln3'
        const SEL_4 =
            'main div[data-testid="primaryColumn"] section ' +
            'span.css-901oao.css-16my406.r-bcqeeo.r-qvutc0'
        // Lone label def-ja, def-en, ble-ja, ble-en
        let elms = document.querySelectorAll(SEL)
        let elms_2 = document.querySelectorAll(SEL_2)
        let elms_3 = document.querySelectorAll(SEL_3)
        let elms_4 = document.querySelectorAll(SEL_4)

        const PROMO = {
            'ja': 'によるプロモーション$',
            'ko': ' 님이 프로모션함$',
            'zh-Hant': '^由 .+ 推廣$',
            'zh': '^由 .+ 推广$',
            'ru': '^Реклама от ',
            'de': '^Gesponsert von ',
            'it': '^Sponsorizzato da ',
            'fr': '^Sponsorisé par ',
            'pt': '^Promovido por ',
            'en': '^Promoted by ' // Add your language
        }
        const PROMO_L = PROMO[LANG] ?? PROMO['en']

        const PROMO_2 = {
            'ja': 'プロモポスト',
            'ko': 'Promoted Post',
            'zh-Hant': '推廣貼文',
            'zh': 'Promoted Post',
            'ru': 'Promoted Post',
            'de': 'Gesponserter Post',
            'it': 'Promoted Post',
            'fr': 'Promoted Post',
            'pt': 'Post promovido',
            'en': 'Promoted Post' // Add your language
        }
        const PROMO_L_2 = PROMO_2[LANG] ?? PROMO_2['en']

        let ss // Temp.

        for (let e of elms) {
            let xpe = e.closest('div[data-testid="cellInnerDiv"]')
            if (!xpe) xpe = e.closest('div.css-175oi2r.r-1adg3ll.r-1ny4l3l') // def-ja, def-en, ble-ja, ble-en
            if (!xpe) xpe = e.closest('div.css-175oi2r.r-1ny4l3l[data-testid="UserCell"]') // def-ja, def-en, ?, ble-en

            ss = s_mutations

            if (xpe) xpe.style.setProperty('display', 'none') // Right column のおすすめユーザー'

            s_mutations = ss
        }

        for (let e of elms_2) {
            const REGEX = new RegExp(PROMO_L, 'i')

            if (!REGEX.test(e.textContent)) continue

            let xpe = e.closest('div.css-175oi2r.r-1adg3ll.r-1ny4l3l')

            ss = s_mutations

            xpe.style.setProperty('display', 'none')

            s_mutations = ss
        }

        for (let e of elms_3) {
            if (e.textContent != 'Ad') continue

            let xpe = e.closest('div[data-testid="cellInnerDiv"]')

            ss = s_mutations

            xpe.style.setProperty('display', 'none')

            s_mutations = ss
        }

        for (let e of elms_4) {
            if (e.textContent != PROMO_2['en'] && e.textContent != PROMO_L_2) continue

            let xpe = e.closest('div[data-testid="cellInnerDiv"]')

            ss = s_mutations

            xpe.style.setProperty('display', 'none')

            s_mutations = ss
        }
    }

    function hidewtf() {
        let ss // Temp.

        let r =
            '^[^:]+://[^/]+/$|' +

            '^[^:]+://[^/]+/(' +
            'compose|' + // pop up
            'search-advanced|' + // pop up
            'home|' + // 除外？
            'search|' +

            'i/display|' + // pop up
            'i/flow|' + // pop up
            'i/keyboard_shortcuts|' + // pop up
            'i/verified-orgs-signup|' + // pop up、追加
            'i/verified-choose|' + // pop up、追加
            'i/premium_sign_up|' + // pop up、追加
            'i/connect_people|' +
            'i/topics|' +
            'i/spaces/start|' + // pop up、追加
            'i/verified-application|' + // pop up、追加
            'i/verified-get-verified|' + // pop up、追加

            '[^/]+/followers|' +
            '[^/]+/following|' +
            '[^/]+/lists|' +
            '[^/]+/status/|' + // 両方、WTFのみ除外
            '[^/]+/topics|' +
            '[^/]+/creator-subscriptions|' + // 追加
            '[^/]+/superfollows|' + // 追加
            '[^/]+/verified_followers' + // 追加
            ')'

        if (new RegExp(r, 'i').test(document.URL)) {
            for (let i = 1; i < 4; i++) {
                let e = document.querySelector('head style.' + 'us-' + MYNAME + '-' + i)
                if (e) document.head.removeChild(e)
            }

            return
        }

        if (!document.querySelector('head style.' + 'us-' + MYNAME + '-' + 1)) {
            ss = s_mutations

            let style = document.createElement('style')
            style.className = 'us-' + MYNAME + '-' + 1
            style.textContent =
                'main div[data-testid="primaryColumn"] section div[data-testid="cellInnerDiv"]' +
                ':has(button.css-175oi2r.r-1mmae3n.r-3pj75a.r-1ny4l3l.r-o7ynqc.r-6416eg[data-testid="UserCell"]) ' +
                '{display: none;}'
            // フォロー, def-ja, def-en, ble-ja, ble-en
            document.head.appendChild(style)

            s_mutations = ss
        }

        if (!document.querySelector('head style.' + 'us-' + MYNAME + '-' + 2)) {
            ss = s_mutations

            let style = document.createElement('style')
            style.className = 'us-' + MYNAME + '-' + 2
            style.textContent =
                'main div[data-testid="primaryColumn"] section div[data-testid="cellInnerDiv"]' +
                ':has(h2[aria-level="2"][role="heading"]>div>span.css-1jxf684.r-bcqeeo.r-qvutc0) {display: none;}'
            // Who to follow, def-ja, def-en, ble-ja, ble-en
            document.head.appendChild(style)

            s_mutations = ss
        }

        if (!document.querySelector('head style.' + 'us-' + MYNAME + '-' + 3)) {
            ss = s_mutations

            let style = document.createElement('style')
            style.className = 'us-' + MYNAME + '-' + 3
            style.textContent =
                'main div[data-testid="primaryColumn"] section div[data-testid="cellInnerDiv"]' +
                ':has(a[href*="/connect_people?user_id="]) {display: none;}' // さらに表示
            document.head.appendChild(style)

            s_mutations = ss
        }
    }

    function hidedmd() {
        const SEL = 'div[data-testid="DMDrawer"]'
        let elm = document.querySelector(SEL)
        let ss = s_mutations

        if (elm != null) elm.style.setProperty('display', 'none')

        s_mutations = ss
    }

    function hidegv() {
        const SEL = 'aside.css-175oi2r.r-1habvwh.r-eqz5dr.r-uaa2di.r-1mmae3n.r-3pj75a'
        const SEL_2 = 'main section div[data-testid="cellInnerDiv"] h1[role="heading"] span.css-1jxf684.r-bcqeeo.r-qvutc0'
        // def-ja, def-en, ble-ja, ble-en
        let elms = document.querySelectorAll(SEL)
        let elms_2 = document.querySelectorAll(SEL_2)

        const TC = {
            'gv': {
                'ja': '認証を受ける',
                'ko': '인증 받기',
                'zh-Hant': '獲得認證',
                'zh': '获得认证',
                'ru': 'Подтвердить подлинность',
                'de': 'Lass dich verifizieren',
                'it': 'Ottieni la verifica',
                'fr': 'Obtenez la certification',
                'pt': 'Obter verificação',
                'en': 'Get Verified' // Add your language
            },
            'sp': {
                'ja': 'プレミアムにサブスクライブ',
                'ko': 'Subscribe to Premium',
                'zh-Hant': '訂閱 Premium',
                'zh': 'Subscribe to Premium',
                'ru': 'Subscribe to Premium',
                'de': 'Premium abonnieren',
                'it': 'Subscribe to Premium',
                'fr': 'Subscribe to Premium',
                'pt': 'Assine o Premium',
                'en': 'Subscribe to Premium' // Add your language
            },
            'spylp': {
                'ja': '長いポストを作成するには、プレミアムにサブスクライブしてください',
                'ko': 'Premium을 구독하고 나만의 긴 게시물을 작성해 보세요',
                'zh-Hant': '訂閱 Premium 以撰寫你自己的更長貼文',
                'zh': '订阅 Premium，撰写自己的长帖',
                'ru': 'Подпишитесь на Premium, чтобы писать собственные длинные посты',
                'de': 'Abonniere Premium, wenn du deine eigenen längeren Posts schreiben möchtest',
                'it': 'Per scrivere post più lunghi, abbonati a Premium',
                'fr': 'Abonnez-vous à Premium pour écrire vos propres posts plus longs.',
                'pt': 'Assine o Premium para escrever posts mais longos',
                'en': 'Subscribe to Premium to write your own longer posts' // Add your language
            },
            'gafp': {
                'ja': 'プレミアムプラスで広告をなくす',
                'ko': 'Go ad-free with Premium+',
                'zh-Hant': 'Go ad-free with Premium+',
                'zh': 'Go ad-free with Premium+',
                'ru': 'Go ad-free with Premium+',
                'de': 'Go ad-free with Premium+',
                'it': 'Go ad-free with Premium+',
                'fr': 'Go ad-free with Premium+',
                'pt': 'Go ad-free with Premium+',
                'en': 'Go ad-free with Premium+' // Add your language
            },
            'gaf': {
                'ja': '広告をなくす',
                'ko': 'Go ad free',
                'zh-Hant': 'Go ad free',
                'zh': 'Go ad free',
                'ru': 'Go ad free',
                'de': 'Go ad free',
                'it': 'Go ad free',
                'fr': 'Go ad free',
                'pt': 'Go ad free',
                'en': 'Go ad free' // Add your language
            },
            'txp': {
                'ja': 'TweetDeckはX Proになりました',
                'ko': 'TweetDeck is now X Pro',
                'zh-Hant': 'TweetDeck is now X Pro',
                'zh': 'TweetDeck is now X Pro',
                'ru': 'TweetDeck is now X Pro',
                'de': 'TweetDeck is now X Pro',
                'it': 'TweetDeck is now X Pro',
                'fr': 'TweetDeck is now X Pro',
                'pt': 'TweetDeck is now X Pro',
                'en': 'TweetDeck is now X Pro' // Add your language
            }
        }
        const GV_L = TC.gv[LANG] ?? TC.gv['en']
        const SP_L = TC.sp[LANG] ?? TC.sp['en']
        const SPYLP_L = TC.spylp[LANG] ?? TC.spylp['en']
        const GAFP_L = TC.gafp[LANG] ?? TC.gafp['en']
        const GAF_L = TC.gaf[LANG] ?? TC.gaf['en']
        const TXP_L = TC.txp[LANG] ?? TC.txp['en']

        for (let e of elms) {
            if (
                e.getAttribute('aria-label') == GV_L ||
                e.getAttribute('aria-label') == SP_L ||
                e.getAttribute('aria-label') == SPYLP_L ||
                e.getAttribute('aria-label') == GAFP_L
            ) {
                let ss = s_mutations

                e.parentNode.parentNode.style.setProperty('display', 'none')

                s_mutations = ss
            }
        }

        for (let e of elms_2) {
            if (e.textContent == GAF_L || e.textContent == TXP_L) {
                let xpe = e.closest('div[data-testid="cellInnerDiv"]')

                let ss = s_mutations

                xpe.style.setProperty('display', 'none')

                s_mutations = ss
            }
        }
    }

    function fineegm() {
        const SEL_R =
            'main div[data-testid="primaryColumn"] section article ' +
            'button.css-175oi2r.r-1777fci.r-bt1l66.r-bztko3.r-lrvibr.r-1loqt21.r-1ny4l3l[data-testid*="reply"] ' +
            'div>span[data-testid="app-text-transition-container"]>span' // 一つ上
        const SEL_T =
            'main div[data-testid="primaryColumn"] section article ' +
            'button.css-175oi2r.r-1777fci.r-bt1l66.r-bztko3.r-lrvibr.r-1loqt21.r-1ny4l3l[data-testid*="retweet"] ' +
            'div>span[data-testid="app-text-transition-container"]>span'
        const SEL_L =
            'main div[data-testid="primaryColumn"] section article ' +
            'button.css-175oi2r.r-1777fci.r-bt1l66.r-bztko3.r-lrvibr.r-1loqt21.r-1ny4l3l[data-testid*="like"] ' +
            'div>span[data-testid="app-text-transition-container"]>span'
        const SEL_B =
            'main div[data-testid="primaryColumn"] section article ' +
            'button.css-175oi2r.r-1777fci.r-bt1l66.r-bztko3.r-lrvibr.r-1loqt21.r-1ny4l3l[data-testid*="bookmark"] ' +
            'div>span[data-testid="app-text-transition-container"]>span'

        document.
            querySelectorAll(SEL_R + ', ' + SEL_T + ', ' + SEL_L + ', ' + SEL_B).
            forEach(function (e) {
                const SEL_ADD = 'span.us-' + MYNAME

                let ce = e.querySelector('span:not(.us-' + MYNAME + ')')
                let xpe = e.closest('button')
                let n = +xpe.getAttribute('aria-label').split(' ')[0]
                let ls = ''
                if (n) ls = n.toLocaleString('en-US')

                let old = e.querySelector(SEL_ADD)

                let ss // Temp.

                ss = s_mutations

                if (ce && ce.style.display != 'none') { // 0の時も無い
                    ce.style.setProperty('display', 'none')
                }
                if (!old) {
                    let span = document.createElement('span')
                    span.className = 'us-' + MYNAME
                    span.textContent = ls
                    if (ce) span.style = ce.style

                    e.appendChild(span)
                } else if (old.textContent != ls) {
                    old.textContent = ls
                    if (ce) old.style = ce.style
                }

                s_mutations = ss
            })
    }

    function fineegm_v_d() {
        const SEL =
            'main div[data-testid="primaryColumn"] section article ' +
            'div.css-175oi2r.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2>' +
            'div>span>div>span[data-testid="app-text-transition-container"]>span>span:not(.us-' + MYNAME + ')'
        // 表示回数は減らない、0の時は無い
        const SEL_2 =
            'button.css-175oi2r.r-1777fci.r-bt1l66.r-bztko3.r-lrvibr.r-1loqt21.r-1ny4l3l[data-testid*="retweet"] ' +
            'div>span[data-testid="app-text-transition-container"]>span' // 一つ上
        const SEL_ADD = 'span.us-' + MYNAME

        let elm = document.querySelector(SEL)
        if (!elm) return

        let elm_2 = document.querySelector(SEL_2)
        if (!elm_2) return

        let pelm = elm.parentNode
        let xpelm_2 = elm_2.closest('div.r-1kbdv8c[aria-label][role="group"]') // fineegm()のさらに上
        let n = +/(\d+)\D+$/.exec(xpelm_2.getAttribute('aria-label'))[1]
        let ls = n.toLocaleString('en-US')

        let old = pelm.querySelector(SEL_ADD)

        let ss // Temp.

        ss = s_mutations

        if (!old) {
            let span = document.createElement('span')
            span.className = 'us-' + MYNAME
            span.textContent = ls
            span.style = elm.style

            elm.style.setProperty('display', 'none')
            pelm.appendChild(span)
        } else if (old.textContent != ls) {
            old.textContent = ls
            old.style = elm.style
        }

        s_mutations = ss
    }

    function fineegm_v_t() {
        const SEL =
            'main div[data-testid="primaryColumn"] section article ' +
            'a[href$="/analytics"][aria-label][role="link"]>div>div>span[data-testid="app-text-transition-container"]>' +
            'span>span:not(.us-' + MYNAME + ')' // 二つ下から消える

        document.querySelectorAll(SEL).forEach(function (e) {
            const SEL_ADD = 'span.us-' + MYNAME

            let pe = e.parentNode
            let xpe = e.closest('a')
            let n = +xpe.getAttribute('aria-label').split(' ')[0]
            let ls = n.toLocaleString('en-US')

            let old = pe.querySelector(SEL_ADD)

            let ss // Temp.

            ss = s_mutations

            if (!old) {
                let span = document.createElement('span')
                span.className = 'us-' + MYNAME
                span.textContent = ls
                span.style = e.style

                e.style.setProperty('display', 'none')
                pe.appendChild(span)
            } else if (old.textContent != ls) {
                old.textContent = ls
                old.style = e.style
            }

            s_mutations = ss
        })
    }

    function fineegm_t() {
        const SEL =
            'main div[data-testid="primaryColumn"] div[aria-label] ' +
            'h2[role="heading"]~div.css-146c3p1.r-n6v787.r-1cwl3u0'
        const SEL_2 =
            'script[data-testid="UserProfileSchema-test"]'
        const SEL_ADD = 'div.us-' + MYNAME

        let elm = document.querySelector(SEL)
        if (!elm) return

        let elm_2 = document.querySelector(SEL_2)
        if (!elm_2) return

        let pelm = elm.parentNode
        let n = JSON.parse(elm_2.textContent).author.interactionStatistic[2].userInteractionCount
        let ls = n.toLocaleString('en-US')

        let old = pelm.querySelector(SEL_ADD)

        let ss = s_mutations // Temp.

        if (!old) {
            let div = document.createElement('div')
            div.className = 'us-' + MYNAME
            div.textContent = ls + ' ' + elm.textContent.split(' ')[1]
            div.style = elm.style

            elm.style.setProperty('display', 'none')
            pelm.appendChild(div)
        } else if (old.textContent.split(' ')[0] != ls) {
            old.textContent = ls + ' ' + elm.textContent.split(' ')[1]
            old.style = elm.style
        }

        s_mutations = ss
    }

    function isHLSURL(url) {
        return (
            /^https?:\/\/video\.twimg\.com\/[^?]+\.m3u8?/i.test(url) ||
            /^https?:\/\/[^.]+\.video\.pscp\.tv\/[^?]+\.m3u8?/i.test(url)
        )
    }

    function isHLSMaster(text) {
        return (
            text &&
            text.includes('#EXT-X-STREAM-INF') &&
            !text.includes('#EXT-X-TARGETDURATION')
        )
    }

    function pickone(reg, text) {
        let matches = []
        const HEAD = text.replace(reg, function (m, p1) {
            matches.push([m, p1])
            return ''
        })
        const L = matches.length
        if (L < 2) return text

        let select = matches[0]
        for (let i = 1; i < L; i++) { // 2番目から
            select =
                (fvq != 2 && +select[1] < +matches[i][1]) ||
                    (fvq == 2 && +select[1] > +matches[i][1]) ? matches[i] :
                    select
        }

        return (HEAD + '\n' + select[0]).trim().replace(/(\r?\n)+/g, '\n') + '\n'
    }

    function twXHRStateHandler({ target: xhr }) {
        if (xhr.readyState === 4) {
            const rawTEXT = xhr.responseText
            if (isHLSMaster(rawTEXT)) {
                // eslint-disable-next-line regexp/optimal-quantifier-concatenation
                const REG = /#EXT-X-STREAM-INF.*[^-]BANDWIDTH=(\d+).*\r?\n\/.+$/gm
                const modTEXT = pickone(REG, rawTEXT)
                Object.defineProperties(xhr, {
                    response: { writable: true },
                    responseText: { writable: true }
                })
                xhr.response = xhr.responseText = modTEXT
            }
        }
    }

    function overrideXHROpen() {
        originalXHROPEN = XMLHttpRequest.prototype.open
        XMLHttpRequest.prototype.open = function () {
            if (isHLSURL(arguments[1])) {
                this.addEventListener('readystatechange', twXHRStateHandler)
            }
            return originalXHROPEN.apply(this, arguments)
        }

        console.log(MYNAME + ': XMLHttpRequest.open overriden.')
    }

    function repldatetime() {
        const SEL =
            'main div[data-testid="primaryColumn"] section article time[datetime*=":"]'
        const SEL_2 =
            'div[aria-labelledby="modal-header"] div[data-testid^="User-Name"] time[datetime]'
        const SEL_3 =
            'div[aria-labelledby="modal-header"] div[aria-label] time[datetime]'
        const SEL_4 =
            'main section[aria-labelledby="detail-header"] article div[data-testid^="User-Name"] time[datetime]'
        const SEL_5 =
            'main section div[data-testid="conversation"] div[aria-label] time[datetime]' // DM list

        document.
            querySelectorAll(SEL + ', ' + SEL_2 + ', ' + SEL_3 + ', ' + SEL_4 + ', ' + SEL_5).
            forEach(function (e) {
                const SEL_ADD = 'span.us-' + MYNAME

                let d = e.getAttribute('datetime')
                let df = datef(new Date(d), fmt)

                let pe = e.parentNode

                let old = pe.querySelectorAll(SEL_ADD)

                let ss // Temp.

                ss = s_mutations

                if (!old.length) {
                    let span = document.createElement('span')
                    span.className = 'us-' + MYNAME
                    span.setAttribute('datetime', d)
                    span.setAttribute('local-datetime', df)
                    span.textContent = df
                    span.style = e.style

                    e.style.setProperty('display', 'none')
                    pe.appendChild(span)
                } else if (old[0].getAttribute('local-datetime') != df) { // TZ change
                    old[0].setAttribute('local-datetime', df)
                    old[0].textContent = df
                    old[0].style = e.style
                }

                s_mutations = ss
            })
    }

    function loop() {
        setTimeout(() => {
            if (s_mutations) {
                s_mutations = null // 初期値がtrue、変更もしない

                if (bbr) bbreturn()
                if (origi) origimg()
                if (wtl) widetl()
                if (ecmode) chgbgc()
                if (hpp) hidepromo()
                if (hwtf) hidewtf()
                if (hdmd) hidedmd()
                if (hgv) hidegv()
                if (fmt) repldatetime()
                if (fegm) {
                    fineegm()
                    fineegm_v_d()
                    fineegm_v_t()
                    fineegm_t()
                    time_r = Date.now()
                }
            } else if (fegm == 1 && Date.now() - time_r > 4000) {
                fineegm()
                fineegm_v_d()
                fineegm_v_t()
                fineegm_t()
                time_r = Date.now()
            }
            loop()
        }, intl)
    }

    bbr = BBR
    origi = ORIGI
    wtl = WTL
    ecmode = ECMODE
    hpp = HPP
    hwtf = HWTF
    hdmd = HDMD
    hgv = HGV
    fegm = FEGM
    fvq = FVQ
    fmt = FMT
    intl = INTL

    if (!NOGUI) initgui()
    if (fvq) overrideXHROpen()
    observer.observe(document, { childList: true, subtree: true })
    loop()

})() /*  END  */
