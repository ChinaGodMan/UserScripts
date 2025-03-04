// ==UserScript==
// @name:zh-CN         xvideos推送下载
// @description:zh-CN  1.自动播放 2.自动宽屏 3.高画质播放 4.点击推送下片 5.下载缩略图
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @match        *://*.xvideos.com/video*
// @require           https://update.greasyfork.org/scripts/498897/1404834/Toastnew.js
// @author            cocang,iuroc,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL    https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @icon         https://www.xvideos.com/favicon-32x32.png
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @compatible     kiwi
// @version         2025.03.05.0127
// @created         2025-03-05 01:27:35
// @modified        2025-03-05 01:27:35
// ==/UserScript==
//!人民的勤务员修改自以下脚本  感谢 @cocang @iuroc
/* [xvideos 推送下载](https://greasyfork.org/zh-CN/scripts/438212)
  [XVIDEOS M3U8 视频地址获取](https://greasyfork.org/zh-CN/scripts/454287) */
(function () {
    'use strict'
    const userLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
    const translations = {
        'en': {
            downloading: 'Thumbnail is downloading (❛◡❛✿)',
            downloadfailed: 'Thumbnail not found (๑•́ ₃ •̀๑)',
            linkTip: 'M3U8 video link (click to download):',
            previewTip: 'Preview'
        },
        'zh-CN,zh,zh-SG': {
            downloading: '缩略图正在下载  (❛◡❛✿)',
            downloadfailed: '未发现缩略图  (๑•́ ₃ •̀๑)',
            linkTip: 'M3U8视频地址 (点击下载)：',
            previewTip: '预览图'
        },
        'zh-TW,zh-HK,zh-MO': {
            downloading: '縮略圖正在下載  (❛◡❛✿)',
            downloadfailed: '未發現縮略圖  (๑•́ ₃ •̀๑)',
            linkTip: 'M3U8視頻地址 (點擊下載)：',
            previewTip: '預覽圖'
        },
        'ja': {
            downloading: 'サムネイルをダウンロード中 (❛◡❛✿)',
            downloadfailed: 'サムネイルが見つかりませんでした (๑•́ ₃ •̀๑)',
            linkTip: 'M3U8ビデオリンク (クリックしてダウンロード):',
            previewTip: 'プレビュー'
        },
        'vi': {
            downloading: 'Đang tải xuống hình thu nhỏ (❛◡❛✿)',
            downloadfailed: 'Không tìm thấy hình thu nhỏ (๑•́ ₃ •̀๑)',
            linkTip: 'Liên kết video M3U8 (nhấp để tải xuống):',
            previewTip: 'Hình xem trước'
        },
        'fr': {
            downloading: 'Téléchargement de la miniature en cours (❛◡❛✿)',
            downloadfailed: 'Miniature introuvable (๑•́ ₃ •̀๑)',
            linkTip: 'Lien vidéo M3U8 (cliquez pour télécharger):',
            previewTip: 'Aperçu'
        },
        'es': {
            downloading: 'Descargando miniatura (❛◡❛✿)',
            downloadfailed: 'Miniatura no encontrada (๑•́ ₃ •̀๑)',
            linkTip: 'Enlace de video M3U8 (clic para descargar):',
            previewTip: 'Vista previa'
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
    //greasyfork.org/scripts/438212
    html5player.player_init && (html5player.toggleExpand())
    const download_btn = document.querySelector('button.dl.tab-button')
    download_btn.insertAdjacentHTML('afterend', '<button class="dl" id="thumbbig"><span class="icon-f icf-image"></span><span>' + translate('previewTip') + '</span></button>')
    document.getElementById('thumbbig').onclick = () => {
        if (html5player.thumb_slide_big) {
            let thumb_url = html5player.thumb_slide_big
            let video_tittle = document.querySelector('p.video-title').innerText
            GM_download(thumb_url, video_tittle + '.jpg')
            Toast(translate('downloading'), 3000, 'rgb(22, 199, 99)', '#ffffff', 'top')
        } else {
            Toast(translate('downloadfailed'), 3000, 'rgb(22, 199, 99)', '#ffffff', 'top')
        }
    }


    Object.defineProperties(html5player.hlsobj, {
        autoLevelEnabled: { value: false, writable: false },
        firstLevel: { value: 4, writable: false }
    })

    let play_val = false
    Object.defineProperty(html5player, 'canPlay', {
        get: () => play_val,
        set: (val) => {
            val && (html5player.playClicked = true)
            val && (html5player.play())
            play_val = val
        }
    })
    var url_hls = html5player.url_hls
    $.get(url_hls, function (data) {
        data = data.split('#EXT-X-STREAM-INF')
        data.splice(0, 1)
        var html = ''
        //排序,从高到低
        data.sort((a, b) => {
            let resolutionA = parseInt(/RESOLUTION=(\d+)x/.exec(a)?.[1] || 0)
            let resolutionB = parseInt(/RESOLUTION=(\d+)x/.exec(b)?.[1] || 0)
            return resolutionB - resolutionA
        })
        data.forEach(item => {
            var name = /NAME="(.*?)"/.exec(item)[1]
            var url = (html5player.url_hls + '#').replace(/hls.m3u8.*#/, /\n(hls-.*)\n?/.exec(item)[1])
            html += `<a style="margin-right: 20px; padding: 5px 10px; border: 1px solid;" href="${url}" class="video-tab" data-url="${url}">${name}</a>`
        })
        $('#video-tabs').append(`<div style="margin-bottom: 10px; margin-top: 10px; font-size: 20px;">${translate('linkTip')}<br>${html}</div>`)
        $('.video-tab').on('click', function (e) {
            // 复制
            e.preventDefault()
            var urlToCopy = $(this).data('url')
            var tempInput = document.createElement('textarea')
            document.body.appendChild(tempInput)
            tempInput.value = urlToCopy
            tempInput.select()
            document.execCommand('copy')
            document.body.removeChild(tempInput)
            // 跳转下载
            let a = document.createElement('a')
            a.href = 'https://tools.thatwind.com/tool/m3u8downloader#m3u8=' + urlToCopy
            a.target = '_blank'
            a.click()
            document.body.removeChild(a)

        })
    })

})()
