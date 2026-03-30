// ==UserScript==
// @name               MissAV Enhanced Assistant
// @name:ar            مساعد Missav المحسّن
// @name:bg            Missav подобрен асистент
// @name:cs            Asistentka Missav Enhanced
// @name:da            Missav forbedret assistent
// @name:de            Missav Enhanced Assistant
// @name:el            Missav ενισχυμένο βοηθό
// @name:en            MissAV Enhanced Assistant
// @name:eo            Missav Enhanced Assistant
// @name:es            Asistente mejorado de Missav
// @name:fi            Missav -parantunut avustaja
// @name:fr            Assistant amélioré de Missav
// @name:fr-CA         Assistant amélioré de Missav
// @name:he            Missav Enhanced Assistant
// @name:hr            Missav poboljšani pomoćnik
// @name:hu            Missav továbbfejlesztett asszisztens
// @name:id            MISSAV Enhanced Assistant
// @name:it            MISSAV Assistente miglioramento
// @name:ja            Missav Enhanced Assistant
// @name:ka            მისავის გაძლიერებული ასისტენტი
// @name:ko            Missav 강조 보조원
// @name:nb            Missav forbedret assistent
// @name:nl            Missav verbeterde assistent
// @name:pl            Asystent wzmacniający Missav
// @name:pt-BR         Assistente Missav Enhanced
// @name:ro            Asistent îmbunătățit Missv
// @name:ru            Missav Enhanced Assistant
// @name:sk            Missav vylepšená asistentka
// @name:sr            Појачани помоћник Мисав
// @name:sv            Missav Enhanced Assistant
// @name:th            Missav Enhanced Assistant
// @name:tr            Missav geliştirilmiş asistan
// @name:ug            Missav Evenced ياردەمچىسى
// @name:uk            Missav посилений помічник
// @name:vi            Trợ lý nâng cao Missav
// @name:zh            MissAV 增强小助手
// @name:zh-CN         MissAV 增强小助手
// @name:zh-HK         MissAV 增強小助手
// @name:zh-SG         MissAV 增强小助手
// @name:zh-TW         MissAV 增強小助手
// @description:ar     إزالة الإعلانات |
// @description:bg     Премахване на реклами |
// @description:cs     Odebrat reklamy |.
// @description:da     Fjern annoncer |.
// @description:de     Ads | Backstage spielen |
// @description:el     Κατάργηση διαφημίσεων |
// @description:en     Remove ads | Backstage play | Autoplay | Custom fast forward time | Full title | More features...
// @description:eo     Forigu reklamojn |
// @description:es     Eliminar los anuncios |
// @description:fi     Poista mainokset |
// @description        Remove ads | Background play | Auto play | Custom fast-forward time | Full title | More
// @description:fr     Supprimez les publicités |
// @description:fr-CA  Supprimez les publicités |
// @description:he     הסר את המודעות |
// @description:hr     Uklonite se |
// @description:hu     A hirdetések eltávolítása |
// @description:id     Hapus Iklan |
// @description:it     Rimuovi ADS |.
// @description:ja     広告|
// @description:ka     რეკლამები |
// @description:ko     광고를 제거합니다.
// @description:nb     Fjern annonser |.
// @description:nl     Advertenties verwijderen | Backstage Play |
// @description:pl     Usuń zagranie za kulisami |
// @description:pt-BR  Remover anúncios |
// @description:ro     Îndepărtați reclame |
// @description:ru     Удалить объявление |.
// @description:sk     Odstráňte
// @description:sr     Уклоните огласе | БацкСтаге Плаи | Аутоматска репродукција | Цустом Брзо прослеђивање времена | пуни наслов | Још функција ...
// @description:sv     Ta bort annonser |
// @description:th     ลบโฆษณา
// @description:tr     Reklamlar |
// @description:ug     ئېلانلارنى ئۆچۈرۈڭ | ئارقا ئويۇن | AutoPlay | ئىختىيارىي بۇرۇن | تولۇق ماۋزۇ | تولۇق ماۋزۇ | تېخىمۇ كۆپ ئىقتىدارلار ...
// @description:uk     Видаліть рекламу |
// @description:vi     Xóa quảng cáo |.
// @description:zh     去除广告|后台播放|自动播放|自定义快进时间|完整标题|更多功能...
// @description:zh-CN  去除广告|后台播放|自动播放|自定义快进时间|完整标题|更多功能...
// @description:zh-HK  去除廣告|後台播放|自動播放|自定義快進時間|完整標題|更多功能...
// @description:zh-SG  去除广告|后台播放|自动播放|自定义快进时间|完整标题|更多功能...
// @description:zh-TW  去除廣告|後台播放|自動播放|自定義快進時間|完整標題|更多功能...
// @run-at             document-start
// @grant              unsafeWindow
// @grant              GM_addStyle
// @match              https://missav123.com/*
// @match              https://missav.ws/*
// @match              https://missav.live/*
// @match              https://missav.ai/*
// @match              https://missav.com/*
// @match              https://thisav.com/*
// @match              *://missav.fans/*
// @match              *://missav.media/*
// @author             DonkeyBear,track no,mrhydra,iSwfe,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @icon               https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/missav-auto-login-helper.png
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @version            2026.3.31.1
// @created            2025-03-07 21:14:34
// @modified           2025-03-07 21:14:34
// ==/UserScript==

/**
 * File: missav-enhancer.user.js
 * Project: UserScripts
 * File Created: 2025/03/07 21:14:34
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2026/03/31,Tuesday 05:58:59
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 * -----
 * 脚本来自：
 * https://greasyfork.org/scripts/493932 MISSAV视频控制条增强 @iSwfe
 * https://greasyfork.org/scripts/488770/  missav修改页面 @mrhydra
 * https://greasyfork.org/scripts/499213 missav永远播放+不弹广告 @track no
 * https://greasyfork.org/scripts/470539 MissAV 迷你加強包 @DonkeyBear
*/
const url = window.location.href
if (/^https:\/\/(missav|thisav)\.com/.test(url)) {
    window.location.href = url.replace('missav.com', 'missav.live').replace('thisav.com', 'missav.live')
}
(() => {
    'use strict'
    const minute = 5 // 最大快进分钟数
    const videoSettings = {
        // 【开关】背景色覆盖iPhone非安全区
        viewportFitCover: false,
        //播放页面显示一键回到播放器
        playCtrlEnable: true,
        // 视频控制条按钮间距
        buttonMargin: '.1rem',
        // 播放/暂停按钮的HTML样式
        htmlPlay: '▶️',
        htmlPause: '⏸️',
        // 【开关】修改时间跨度值按钮
        durationBtnEnable: true,
        // 最长快进/快退时间跨度值
        maxDuration: 60 * minute,
        // 后台禁止自动暂停模式
        autoPauseDisable: 1, // 0:默认模式(浏览器同一组标签,播放页面切换到另外标签暂停播放), 1:禁止所有暂停播放,切换到同一组标签不暂停播放
        // 自动静音播放
        autoMutePlay: true
    };

    (() => {
        // 【沉浸式状态栏/网页主题色】设置主题色
        var meta = document.createElement('meta')
        meta.name = 'theme-color'
        meta.content = '#090811'
        document.querySelector('head').appendChild(meta)
        // 【横屏左右沉浸式背景色/视口覆盖非安全区】解决iPhone横屏时背景色未覆盖非安全区（即iPhone刘海区域）的部分
        if (videoSettings.viewportFitCover) {
            var viewport = document.querySelector('head > meta[name=viewport]')
            viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
        }
    })()

    var handle = () => {
        console.log('【视频控制条增强】开始...')
        // 【页面内容区域】获取元素
        var content = document.querySelector('body > div:nth-child(3) > div.sm\\:container > div > div.flex-1.order-first > div:first-child')
        // 【视频区域】样式调整
        var video = content.querySelector('div:first-child')
        video.id = 'video'
        video.classList.value = 'relative -mx-4 sm:m-0 mt-1'
        // 【视频区域】设备横屏时自动锚点到视频
        window.addEventListener('orientationchange', () => { setTimeout(() => document.querySelector('#video').scrollIntoView(), 400) })
        // 【视频控制条】获取元素
        var bar = video.nextElementSibling
        // 一键回到播放器
        if (videoSettings.playCtrlEnable) {
            var div = document.createElement('div')
            div.innerHTML = '<button id="btnControl" onclick="video.scrollIntoView();" type="button" class="relative inline-flex items-center rounded-md bg-transparent pl-2 pr-2 py-2 font-medium text-white hover:bg-primary focus:z-10" style="position: fixed; top: 50%; right: 10px; transform: translateY(-50%); z-index: 1000; opacity: 1; background-color: transparent; border: 1px solid white; border-radius: 8px;border: none;width: 40px; height: 40px;">🔁</button>'
            document.body.appendChild(div)
        }
        // 【视频控制条】显示
        bar.classList.remove('sm:hidden')
        // 【视频控制条】样式调整
        bar.classList.value = 'flex -mx-4 sm:m-0 mt-1 bg-black justify-center'
        // 【视频控制条】加入播放/暂停按钮
        var span = document.createElement('span')
        var player = document.querySelector('video.player')
        span.classList.value = 'isolate inline-flex rounded-md shadow-sm'
        span.style = `margin: 0 ${videoSettings.buttonMargin}`
        span.innerHTML = '<button id="btnPlay" onclick="player.togglePlay();" type="button" class="relative -ml-px inline-flex items-center rounded-md bg-transparent pl-2 pr-2 py-2 font-medium text-white ring-1 ring-inset ring-white hover:bg-primary focus:z-10">' + videoSettings.htmlPlay + '</button>'
        bar.insertBefore(span, bar.lastElementChild)

        // 自动禁音播放
        if (videoSettings.autoMutePlay) {
            player.muted = true
            player.play()

        }
        // 【视频控制条】播放/暂停时，变化播放按钮形态
        player.onplay = () => { document.querySelector('#btnPlay').innerHTML = videoSettings.htmlPause }

        //FIXME -  禁止播放规则1,就这样写了,有空改改.
        let windowIsBlurred
        window.onblur = () => { windowIsBlurred = true }
        window.onfocus = () => { windowIsBlurred = false }
        player.onpause = () => {
            if (windowIsBlurred && videoSettings.autoPauseDisable === 1) {
                player.play()
            } else { document.querySelector('#btnPlay').innerHTML = videoSettings.htmlPlay }
        }

        // 【视频控制条】修改时间跨度按钮
        if (videoSettings.durationBtnEnable) {
            var leftBtn = bar.querySelector('span:first-child > button:first-child')
            var rightBtn = bar.querySelector('span:last-child > button:last-child')
            leftBtn.removeAttribute('@click.prevent')
            leftBtn.onclick = () => { player.currentTime -= videoSettings.maxDuration }
            leftBtn.innerHTML = leftBtn.innerHTML.replace('10m', `${minute}m`)
            rightBtn.removeAttribute('@click.prevent')
            rightBtn.onclick = () => { player.currentTime += videoSettings.maxDuration }
            rightBtn.innerHTML = rightBtn.innerHTML.replace('10m', `${minute}m`)
        }
        const links = document.querySelectorAll('.space-y-2 > div:nth-child(4) a')

        links.forEach(link => {
            // 获取当前 link 的地址
            const actressesLink = link.href

            fetch(actressesLink)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser()
                    const doc = parser.parseFromString(html, 'text/html')
                    const imgElement = doc.querySelector('.bg-norddark img')
                    const profile = doc.querySelector('.font-medium.text-lg.leading-6')
                    // 收藏按钮
                    const saveBtn = profile.querySelector('div.hero-pattern button')
                    //直接删除按钮,不然会直接保存当前页面的影片
                    saveBtn.remove()
                    //名字转链接.
                    profile.querySelector('h4').innerHTML = `<a href="${actressesLink}">${profile.querySelector('h4').textContent}</a>`
                    const profileDiv = document.createElement('div')
                    profileDiv.classList.add('font-medium', 'text-lg', 'leading-6', 'ChinaGodMan')
                    profileDiv.style.display = 'none'
                    profileDiv.style.position = 'absolute'
                    profileDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                    profileDiv.style.color = '#fff'
                    profileDiv.style.padding = '10px'
                    profileDiv.style.borderRadius = '5px'
                    profileDiv.style.zIndex = '1000'
                    profileDiv.style.whiteSpace = 'nowrap'
                    // 如果女优的图片存在
                    if (imgElement) {
                        //显示大图片
                        profileDiv.innerHTML = `<img src="${imgElement.src.replace('-t', '')}" alt="I AM YOUR FATHER" class="object-cover object-top w-full h-full">`
                        //显示小图片
                        link.innerHTML = `<img src="${imgElement.src}" width="20" height="20" style="display: inline-block; vertical-align: middle;">` + link.innerHTML
                    } else {
                        console.log('🔍 ~ 未找到图片,不添加这个女优.')
                    }
                    saveBtn.remove()
                    profileDiv.appendChild(profile)
                    link.parentElement.appendChild(profileDiv)
                    link.addEventListener('mouseenter', () => {
                        document.querySelectorAll('.ChinaGodMan').forEach(element => {
                            element.style.display = 'none'
                        })
                        profileDiv.style.display = 'block'
                        const rect = link.getBoundingClientRect()
                        profileDiv.style.top = `${rect.top + window.scrollY + rect.height - 20}px`
                        profileDiv.style.left = `${rect.left + window.scrollX}px`

                    })
                    saveBtn.addEventListener('click', () => {
                        alert('尚未完成添加操作,敬请期待')
                    })

                    profileDiv.addEventListener('mouseleave', () => {
                        profileDiv.style.display = 'none'
                    })

                })
                .catch(error => {
                    console.error('🔍 ~ 获取页面失败:', error)
                })
        })

        console.log('【视频控制条增强】完成。')
    }
    var trigger = () => {
        return !!document.querySelector('body > div:nth-child(3) > div.sm\\:container > div > div.flex-1.order-first > div:first-child > div.relative')
    }
    var interval
    var timeout
    interval = setInterval(() => {
        if (trigger()) {
            clearInterval(interval)
            clearTimeout(timeout)
            handle()
            return
        }
    }, 200)
    timeout = setTimeout(() => {
        clearInterval(interval)
        console.log('【视频控制条增强】触发条件匹配超时，已取消。')
    }, 10 * 1000)

    //LINK - 删除广告
    function removeElements() {
        document.querySelectorAll('div[class*="lg:hidden"]')
        const allElements = document.querySelectorAll(
            'div[class^="root"], ' +//右下角弹出窗
            'div[class*="fixed"][class*="right-"][class*="bottom-"], ' +
            'div[class*="pt-"][class*="pb-"][class*="px-"]:not([class*="sm:"]), ' +
            'div[class*="lg:hidden"], ' +//视频下方广告
            'div[class*="lg:block"], ' +
            'div.ts-outstream-video, ' +//页面底部广告
            'iframe,' +
            'ul.mb-4.list-none.text-nord14,' +//视频下面跳官方广告telegram,和一些其他的广告
            '.prose,' +//石床澪
            'img[alt="MissAV takeover Fanza"]'//石床澪图片
        )
        //  console.log(`[missav页面修改] 找到 ${allElements.length} 个需要处理的元素`)
        allElements.forEach(el => {
            if (el.tagName.toLowerCase() === 'iframe') {
                console.log(`[missav页面修改] 正在移除的 iframe 元素`)
                el.remove()
            } else {
                //  console.log(`[missav页面修改] 正在隐藏的 div 元素，class 属性: ${el.className}`)
                el.style.display = 'none'
            }
        })
    }
    //LINK - 节流函数
    function throttle(fn, delay) {
        let lastCall = 0
        return function (...args) {
            const now = new Date().getTime()
            if (now - lastCall < delay) {
                return
            }
            lastCall = now
            return fn(...args)
        }
    }

    function toLink() {
        const origin = window.location.origin
        const allDivs = document.querySelectorAll('div.my-2.text-sm.text-nord4.truncate, div.flex-1.min-w-0')
        // console.log(`[missav页面修改] 找到 ${allDivs.length} 个需要处理的元素`)
        allDivs.forEach(div => {
            if (div.matches('div.flex-1.min-w-0')) {
                const h2 = div.querySelector('h2')
                if (h2) {
                    const text = h2.innerText
                    const link = document.createElement('a')
                    link.href = `${origin}/genres/${text}`
                    link.innerText = text
                    h2.innerHTML = ''
                    h2.appendChild(link)
                    console.log(`[missav页面修改] 已经将文本 "${text}" 转换为链接`)
                }
            }
        })
    }

    // 取消打开新窗口行为
    unsafeWindow.open = () => { }

    //LINK - 页面加载之后执行操作
    document.addEventListener('DOMContentLoaded', () => {

        GM_addStyle(`div.my-2.text-sm.text-nord4.truncate { white-space: normal;}`)
        const observer = new MutationObserver(throttle(() => {
            removeElements()
            toLink()

        }, 500))
        observer.observe(document, { childList: true, subtree: true })
    })

    document.addEventListener('ready', () => {
        //自动点击视频`显示更多`
        const showMore = document.querySelector('a.text-nord13.font-medium.flex.items-center')
        if (showMore) { showMore.click() }

        // 取消页面没焦点自动暂停
        const pause = unsafeWindow.player.pause
        if (videoSettings.autoPauseDisable == 0) {
            unsafeWindow.player.pause = () => {
                if (document.hasFocus()) {
                    pause()
                }
            }
        }
    })

})()
