// ==UserScript==
// @name               YouTube Pro: Audio Enhancer
// @name:zh-CN         YouTube Pro: 音频增强器
// @description        Cinema-quality sound with a professional 5-band EQ and multiband compressor. Remembers your settings!
// @description:zh-CN  影院级音效,配备专业级5段均衡器和多段压缩器。还能记住您的设置.
// @author             Beyazprens
// @namespace          https://github.com/Beyazprens/youtube-pro-audio-ambient
// @supportURL         https://github.com/Beyazprens/youtube-pro-audio-ambient/issues
// @homepageURL        https://github.com/Beyazprens/youtube-pro-audio-ambient
// @homepage           https://github.com/Beyazprens/youtube-pro-audio-ambient
// @license            MIT
// @match              https://www.youtube.com/*
// @icon               https://www.youtube.com/s/desktop/ee47b5e0/img/logos/favicon_144x144.png
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.12.30.1
// @created            2025-12-30 20:23:49
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/youtube-pro-audio-ambient/youtube-pro-audio-ambient.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/youtube-pro-audio-ambient/youtube-pro-audio-ambient.user.js
// ==/UserScript==

/**
 * File: youtube-pro-audio-ambient.user.js
 * Project: UserScripts
 * File Created: 2025/12/30,Tuesday 20:23:49
 * Author: Beyazprens
 * -----
 * Last Modified: 2025/12/30,Tuesday 20:42:06
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

(function () {
    'use strict'

    let audioCtx = null
    let filters = {}
    let isEnhanced = false

    let isEnabledInStorage = localStorage.getItem('yt-pro-audio-enabled') === 'true'

    const css = `
        .audio-enhance-btn {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
            background: none !important;
            border: none !important;
            outline: none !important;
            vertical-align: top !important;
            width: 48px !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            opacity: 0.9;
            transition: opacity 0.2s;
            position: relative;
            z-index: 1000; /* Butonu öne çıkarır */
        }
        .audio-enhance-btn:hover {
            opacity: 1;
        }
        .audio-enhance-btn svg {
            width: 28px !important;
            height: 28px !important;
            fill: #fff !important;
            transition: transform 0.2s, fill 0.2s;
            pointer-events: none; /* ÖNEMLİ: Tıklamanın butona geçmesini sağlar */
        }
        .audio-enhance-btn:active svg {
            transform: scale(0.95);
        }
        .audio-enhance-btn.active svg {
            fill: #3ea6ff !important;
            filter: drop-shadow(0 0 8px rgba(62,166,255,0.8));
        }
    `

    if (!document.getElementById('yt-pro-audio-style')) {
        const style = document.createElement('style')
        style.id = 'yt-pro-audio-style'
        style.textContent = css
        document.head.appendChild(style)
    }

    function initAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume()
        }
        return audioCtx
    }

    function createAudioGraph(video) {
        initAudioContext()

        let source
        if (video._ytAudioSource) {
            source = video._ytAudioSource
        } else {
            try {
                source = audioCtx.createMediaElementSource(video)
                video._ytAudioSource = source
            } catch (e) {
                console.warn('[AudioEnhancer] Source creation skipped:', e)
                return null
            }
        }

        if (filters.subBass) return source

        filters.subBass = audioCtx.createBiquadFilter()
        filters.subBass.type = 'lowshelf'
        filters.subBass.frequency.value = 60
        filters.subBass.gain.value = 5.0

        filters.mudCut = audioCtx.createBiquadFilter()
        filters.mudCut.type = 'peaking'
        filters.mudCut.frequency.value = 250
        filters.mudCut.Q.value = 1.0
        filters.mudCut.gain.value = -3.0

        filters.presence = audioCtx.createBiquadFilter()
        filters.presence.type = 'peaking'
        filters.presence.frequency.value = 2500
        filters.presence.Q.value = 1.0
        filters.presence.gain.value = 2.5

        filters.brilliance = audioCtx.createBiquadFilter()
        filters.brilliance.type = 'highshelf'
        filters.brilliance.frequency.value = 8000
        filters.brilliance.gain.value = 5.0

        filters.comp = audioCtx.createDynamicsCompressor()
        filters.comp.threshold.value = -18
        filters.comp.knee.value = 20
        filters.comp.ratio.value = 3.5
        filters.comp.attack.value = 0.05
        filters.comp.release.value = 0.20

        filters.gain = audioCtx.createGain()
        filters.gain.gain.value = 1.15

        return source
    }

    function enableEnhancement(video) {
        const source = createAudioGraph(video)
        if (!source) return

        try {
            source.disconnect()

            source
                .connect(filters.subBass)
                .connect(filters.mudCut)
                .connect(filters.presence)
                .connect(filters.brilliance)
                .connect(filters.comp)
                .connect(filters.gain)
                .connect(audioCtx.destination)

            isEnhanced = true
        } catch (e) {
            console.warn('[AudioEnhancer] Enable failed:', e)
        }
    }

    function disableEnhancement(video) {
        if (!audioCtx || !video._ytAudioSource) return

        const source = video._ytAudioSource
        try {
            source.disconnect()
            source.connect(audioCtx.destination)
            isEnhanced = false
        } catch (e) {
            console.warn('[AudioEnhancer] Disable failed:', e)
        }
    }

    function toggleState(video, btn) {
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume()
        }

        if (isEnhanced) {
            disableEnhancement(video)
            btn.classList.remove('active')
            isEnabledInStorage = false
        } else {
            enableEnhancement(video)
            btn.classList.add('active')
            isEnabledInStorage = true
        }

        localStorage.setItem('yt-pro-audio-enabled', isEnabledInStorage)
    }

    function injectButton() {
        const leftControls = document.querySelector('.ytp-left-controls')
        if (!leftControls || document.querySelector('.audio-enhance-btn')) return

        const btn = document.createElement('button')
        btn.className = 'ytp-button audio-enhance-btn'
        btn.title = 'Enhance Audio'

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('viewBox', '0 0 24 24')

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z')

        svg.appendChild(path)
        btn.appendChild(svg)

        const timeDisplay = document.querySelector('.ytp-time-display')
        leftControls.insertBefore(btn, timeDisplay || leftControls.lastChild)

        const video = document.querySelector('video')

        if (isEnabledInStorage) {
            btn.classList.add('active')
            if (video) {
                if (!video.paused) {
                    enableEnhancement(video)
                } else {
                    video.addEventListener('play', () => {
                        if (isEnabledInStorage && !isEnhanced) enableEnhancement(video)
                    }, { once: true })
                }
            }
        }

        btn.addEventListener('click', (e) => {
            e.stopPropagation()
            e.preventDefault()

            const currentVideo = document.querySelector('video')
            if (currentVideo) toggleState(currentVideo, btn)
        })
    }

    const observer = new MutationObserver((mutations) => {
        if (!document.querySelector('.audio-enhance-btn')) {
            injectButton()
        }
    })

    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('yt-navigate-finish', () => {
        isEnhanced = false
        injectButton()

        if (isEnabledInStorage) {
            const video = document.querySelector('video')
            const btn = document.querySelector('.audio-enhance-btn')
            if (video && btn) {
                btn.classList.add('active')
                enableEnhancement(video)
            }
        }
    })

    injectButton()

})()
