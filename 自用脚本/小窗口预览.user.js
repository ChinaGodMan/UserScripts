// ==UserScript==
// @name         小窗预览
// @version      2.4
// @description  拖拽链接时在弹出窗口中打开链接，并在打开前提供预览，使用 Edge 的预读技术。同时在小窗口打开时在背后添加亚克力效果。
// @author       hiisme
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @namespace https://greasyfork.org/users/217852
// @downloadURL https://update.greasyfork.org/scripts/504567/%E5%B0%8F%E7%AA%97%E9%A2%84%E8%A7%88.user.js
// @updateURL https://update.greasyfork.org/scripts/504567/%E5%B0%8F%E7%AA%97%E9%A2%84%E8%A7%88.meta.js
// ==/UserScript==
(function () {
    'use strict'
    const state = {
        isDragging: false,
        linkToPreload: null,
        popupWindow: null,
        acrylicOverlay: null,
    }
    const config = {
        windowWidth: GM_getValue('windowWidth', 870),
        windowHeight: GM_getValue('windowHeight', 530),
        screenLeft: (window.screen.width - GM_getValue('windowWidth', 870)) / 2,
        screenTop: (window.screen.height - GM_getValue('windowHeight', 530)) / 3,
        blurIntensity: GM_getValue('blurIntensity', 5),
        blurEnabled: GM_getValue('blurEnabled', true),
        closeOnMouseClick: GM_getValue('closeOnMouseClick', true),
        closeOnScroll: GM_getValue('closeOnScroll', true),
        longPressDuration: GM_getValue('longPressDuration', 500), // 长按持续时间（毫秒）
        actionMode: GM_getValue('actionMode', 0), // 0: 两者都用, 1: 长按, 2: 拖拽
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function preloadLink(link, attributes = {}) {
        const preloadElement = document.createElement('link')
        preloadElement.rel = 'preload'
        preloadElement.href = link
        preloadElement.as = '*/*'
        Object.assign(preloadElement, attributes)
        document.head.appendChild(preloadElement)
        await delay(1)
    }
    function createAcrylicOverlay() {
        const acrylicOverlay = document.createElement('div')
        acrylicOverlay.style.position = 'fixed'
        acrylicOverlay.style.top = '0'
        acrylicOverlay.style.left = '0'
        acrylicOverlay.style.width = '100%'
        acrylicOverlay.style.height = '100%'
        acrylicOverlay.style.zIndex = '9999'
        acrylicOverlay.style.backdropFilter = config.blurEnabled ? `blur(${config.blurIntensity}px)` : 'none'
        if (config.closeOnMouseClick) {
            acrylicOverlay.addEventListener('click', handleAcrylicOverlayClick)
        }
        document.body.appendChild(acrylicOverlay)
        return acrylicOverlay
    }
    function handleAcrylicOverlayClick(event) {
        if (event.target === state.acrylicOverlay) {
            closePopupWindow()
        }
    }
    function removeAcrylicOverlay() {
        if (state.acrylicOverlay) {
            document.body.removeChild(state.acrylicOverlay)
            state.acrylicOverlay = null
        }
    }
    function openPopupWindow(link) {
        if (!state.popupWindow || state.popupWindow.closed) {
            state.acrylicOverlay = createAcrylicOverlay()
            state.popupWindow = window.open(link, '_blank', `width=${config.windowWidth},height=${config.windowHeight},left=${config.screenLeft},top=${config.screenTop}`)
            //   console.log('Popup window:', state.popupWindow) 
            state.popupWindowChecker = setInterval(() => {
                if (state.popupWindow.closed) {
                    removeAcrylicOverlay()
                    clearInterval(state.popupWindowChecker)
                }
            }, 500)
        }
    }
    function closePopupWindow() {
        if (state.popupWindow && !state.popupWindow.closed) {
            state.popupWindow.close()
            state.popupWindow = null
            removeAcrylicOverlay()
            if (state.linkToPreload) {
                removePreloadedLink(state.linkToPreload)
            }
            window.removeEventListener('scroll', closePopupOnScroll)
        }
    }
    function removePreloadedLink(link) {
        const preloadElement = document.querySelector(`link[href="${link}"]`)
        if (preloadElement) {
            document.head.removeChild(preloadElement)
        }
    }
    function closePopupOnScroll() {
        if (state.popupWindow && !state.popupWindow.closed) {
            closePopupWindow()
        }
    }
    function registerMenuCommand(label, action) {
        return GM_registerMenuCommand(label, () => {
            action()
            updateMenuCommands()
        })
    }
    function toggleActionMode() {
        const mode = prompt('选择触发方式:\n1: 长按\n2: 拖拽\n0: 两者都用', config.actionMode)
        if (mode !== null) {
            config.actionMode = parseInt(mode, 10)
            GM_setValue('actionMode', config.actionMode)
            setupEventListeners()
        }
    }
    const menuCommands = [
        { label: `选择触发方式 (${config.actionMode === 1 ? '长按' : config.actionMode === 2 ? '拖拽' : '两者都用'})`, action: toggleActionMode },
        { label: `长按触发时间 (${config.longPressDuration}ms)`, action: setLongPressDuration },
        { label: `切换模糊效果 (${config.blurEnabled ? '✅' : '❌'})`, action: toggleBlurEffect },
        { label: `设置模糊强度 (${config.blurIntensity})`, action: setBlurIntensity },
        { label: `切换点击关闭小窗 (${config.closeOnMouseClick ? '✅' : '❌'})`, action: toggleCloseOnMouseClick },
        { label: `切换滚动关闭小窗 (${config.closeOnScroll ? '✅' : '❌'})`, action: toggleCloseOnScroll },
        { label: `设置小窗宽度 (${config.windowWidth})`, action: () => { setWindowSize('width') } },
        { label: `设置小窗高度 (${config.windowHeight})`, action: () => { setWindowSize('height') } }
    ]
    function setLongPressDuration() {
        const duration = prompt('输入长按触发时间（毫秒）:', config.longPressDuration)
        if (duration !== null) {
            GM_setValue('longPressDuration', duration)
        }
    }
    function toggleBlurEffect() {
        config.blurEnabled = !config.blurEnabled
        GM_setValue('blurEnabled', config.blurEnabled)
    }
    function setBlurIntensity() {
        const intensity = prompt('输入模糊强度（0-10）:', config.blurIntensity)
        if (intensity !== null) {
            config.blurIntensity = parseInt(intensity, 10)
            GM_setValue('blurIntensity', config.blurIntensity)
        }
    }
    function toggleCloseOnMouseClick() {
        config.closeOnMouseClick = !config.closeOnMouseClick
        GM_setValue('closeOnMouseClick', config.closeOnMouseClick)
    }
    function toggleCloseOnScroll() {
        config.closeOnScroll = !config.closeOnScroll
        handleScrollCommand()
        GM_setValue('closeOnScroll', config.closeOnScroll)
    }
    function handleScrollCommand() {
        if (config.closeOnScroll) {
            window.addEventListener('scroll', closePopupOnScroll, { once: true })
        } else {
            window.removeEventListener('scroll', closePopupOnScroll)
        }
    }
    function setWindowSize(dimension) {
        const size = prompt(`输入小窗口${dimension}（像素）:`, config[dimension === 'width' ? 'windowWidth' : 'windowHeight'])
        if (size !== null) {
            config[dimension === 'width' ? 'windowWidth' : 'windowHeight'] = parseInt(size, 10)
            GM_setValue(dimension === 'width' ? 'windowWidth' : 'windowHeight', config[dimension === 'width' ? 'windowWidth' : 'windowHeight'])
            if (state.popupWindow && !state.popupWindow.closed) {
                state.popupWindow.resizeTo(config.windowWidth, config.windowHeight)
            }
        }
    }
    function updateMenuCommands() {
        menuCommands.forEach((command) => {
            const menuCommand = registerMenuCommand(command.label, command.action)
            GM_info[`menuCommand${toTitleCase(command.label)}`] = menuCommand
        })
    }
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
    }
    updateMenuCommands()
    function setupEventListeners() {
        // 移除旧的事件监听器
        document.body.removeEventListener('dragstart', handleDragStart)
        document.body.removeEventListener('dragend', handleDragEnd)
        document.body.removeEventListener('mousedown', handleMouseDown)
        document.body.removeEventListener('mouseup', handleMouseUp)
        document.body.removeEventListener('mouseleave', handleMouseLeave)
        document.body.removeEventListener('wheel', handleWheel)
        document.body.removeEventListener('click', handleClick)
        // 根据 actionMode 配置添加事件监听器
        if (config.actionMode === 1 || config.actionMode === 0) {
            document.body.addEventListener('mousedown', handleMouseDown)
            document.body.addEventListener('mouseup', handleMouseUp)
            document.body.addEventListener('mouseleave', handleMouseLeave)
        }
        if (config.actionMode === 2 || config.actionMode === 0) {
            document.body.addEventListener('dragstart', handleDragStart)
            document.body.addEventListener('dragend', handleDragEnd)
        }
        document.body.addEventListener('wheel', handleWheel)
        document.body.addEventListener('click', handleClick)
    }
    // 事件处理函数
    function handleDragStart(event) {
        const linkElement = event.target.tagName === 'A' ? event.target : event.target.closest('a')
        if (linkElement) {
            const link = linkElement.href
            state.isDragging = true
            state.linkToPreload = link
            preloadLink(state.linkToPreload, { importance: 'high' }).then(() => {
                if (config.closeOnScroll) {
                    window.addEventListener('scroll', closePopupOnScroll, { once: true })
                }
            })
        }
    }
    function handleDragEnd() {
        if (state.isDragging && state.linkToPreload) {
            state.isDragging = false
            openPopupWindow(state.linkToPreload)
            state.linkToPreload = null
        }
    }
    function handleMouseDown(event) {
        const linkElement = event.target.tagName === 'A' ? event.target : event.target.closest('a')
        if (linkElement) {
            state.pressTimer = setTimeout(() => {
                const link = linkElement.href
                state.linkToPreload = link
                preloadLink(state.linkToPreload, { importance: 'high' }).then(() => {
                    openPopupWindow(state.linkToPreload)
                })
            }, config.longPressDuration)
        }
    }
    function handleMouseUp() {
        clearTimeout(state.pressTimer)
        state.pressTimer = null
    }
    function handleMouseLeave() {
        clearTimeout(state.pressTimer)
        state.pressTimer = null
    }
    function handleWheel() {
        if (config.closeOnScroll) {
            closePopupWindow()
        }
    }
    function handleClick(event) {
        if (event.target === state.acrylicOverlay) {
            removeAcrylicOverlay()
        }
    }
    setupEventListeners()
})()
