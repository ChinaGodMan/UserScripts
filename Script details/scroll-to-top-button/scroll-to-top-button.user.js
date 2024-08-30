// ==UserScript==
// @name        Scroll to Top and Bottom Buttons
// @description Generate two buttons on all pages, one for smoothly scrolling back to the top and one for continuous scrolling to the bottom. Click again to stop scrolling to the bottom.
// @name:zh-CN        置顶和置底按钮
// @description:zh-CN 在所有页面生成两个按钮，一个用于顺滑回到顶部，一个用于持续滚动到底部，再次点击取消滚动到底部
// @name:zh-TW        置頂和置底按鈕
// @description:zh-TW 在所有頁面生成兩個按鈕，一個用於順滑回到頂部，一個用於持續滾動到底部，再次點擊取消滾動到底部
// @name:en        Scroll to Top and Bottom Buttons
// @description:en Generate two buttons on all pages, one for smoothly scrolling back to the top and one for continuous scrolling to the bottom. Click again to stop scrolling to the bottom.
// @name:vi        Nút cuộn lên và xuống
// @description:vi Tạo hai nút trên tất cả các trang, một nút để cuộn mượt mà trở về đầu trang và một nút để cuộn liên tục đến cuối trang. Nhấp lại để hủy cuộn xuống cuối trang.
// @name:ja        トップとボトムにスクロールボタン
// @description:ja すべてのページに2つのボタンを生成します。1つはトップにスムーズにスクロールするためのボタン、もう1つはボトムまで継続的にスクロールするためのボタンです。再度クリックすると、ボトムへのスクロールがキャンセルされます。
// @name:ko        상단 및 하단 스크롤 버튼
// @description:ko 모든 페이지에 두 개의 버튼을 생성합니다. 하나는 상단으로 부드럽게 스크롤하기 위한 버튼이고, 다른 하나는 하단으로 지속적으로 스크롤하기 위한 버튼입니다. 다시 클릭하면 하단으로 스크롤이 중단됩니다.
// @name:de        Nach oben und unten Scrollen Buttons
// @description:de Erstellen Sie zwei Schaltflächen auf allen Seiten, eine für das sanfte Scrollen nach oben und eine für das kontinuierliche Scrollen nach unten. Klicken Sie erneut, um das Scrollen nach unten zu stoppen.
// @name:fr        Boutons de défilement en haut et en bas
// @description:fr Générer deux boutons sur toutes les pages, un pour faire défiler vers le haut en douceur et un autre pour défiler continuellement vers le bas. Cliquez à nouveau pour arrêter le défilement vers le bas.
// @name:es        Botones para desplazar hacia arriba y hacia abajo
// @description:es Genera dos botones en todas las páginas, uno para desplazarse suavemente hacia arriba y otro para desplazarse continuamente hacia abajo. Haz clic de nuevo para detener el desplazamiento hacia abajo.
// @name:pt        Botões de rolar para cima e para baixo
// @description:pt Gere dois botões em todas as páginas, um para rolar suavemente para cima e outro para rolar continuamente para baixo. Clique novamente para parar de rolar para baixo.
// @version 1.2.0.55
// @run-at      document-end
// @match       *://*/*
// @license     MIT
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @namespace   https://greasyfork.org/zh-CN/users/1169082
// @icon          https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-up-96.png
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
(function () {
    'use strict'
    let isScrollingToBottom = false
    let buttonTopKey = GM_getValue("buttonTopKey", "")
    let buttonBottomKey = GM_getValue("buttonBottomKey", "")
    var style = document.createElement('style')
    GM_registerMenuCommand("SetHotkey", showHotkeyModal)
    function showHotkeyModal() {
        let modalHtml = `
        <div id="hotkeyModal" style="position: fixed; z-index: 10000; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); top: 20%; left: 50%; transform: translate(-50%, -20%); max-width: 300px;">
            <h2 style="margin-top: 0;">ButtonKey</h2>
            <div style="margin-bottom: 10px;">
                <label for="hotkeyInput1" style="display: block; margin-bottom: 5px;">buttonTopKey:</label>
                <input id="hotkeyInput1" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="${buttonTopKey}" />
            </div>
            <div style="margin-bottom: 20px;">
                <label for="hotkeyInput2" style="display: block; margin-bottom: 5px;">buttonBottomKey:</label>
                <input id="hotkeyInput2" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="${buttonBottomKey}" />
            </div>
            <div style="text-align: right;">
                <button id="saveHotkeys" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Save</button>
                <button id="closeModal" style="background-color: #f44336; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">Close</button>
            </div>
        </div>`
        let modalDiv = document.createElement('div')
        modalDiv.innerHTML = modalHtml
        document.body.appendChild(modalDiv)
        document.getElementById("hotkeyInput1").addEventListener("keydown", function (event) {
            event.preventDefault()
            buttonTopKey = event.key
            this.value = buttonTopKey
        })
        document.getElementById("hotkeyInput2").addEventListener("keydown", function (event) {
            event.preventDefault()
            buttonBottomKey = event.key
            this.value = buttonBottomKey
        })
        document.getElementById("saveHotkeys").addEventListener("click", function () {
            GM_setValue("buttonTopKey", buttonTopKey)
            GM_setValue("buttonBottomKey", buttonBottomKey)
            closeModal()
        })
        document.getElementById("closeModal").addEventListener("click", closeModal)
    }
    function closeModal() {
        let modal = document.getElementById("hotkeyModal")
        if (modal) {
            modal.remove()
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.target.matches('input, textarea, [contenteditable="true"]')) {
            return
        }
        if (event.key === GM_getValue("buttonTopKey")) {
            goToTop()
        } else if (event.key === GM_getValue("buttonBottomKey")) {
            isScrollingToBottom = toggleScrolling(buttonBottom, isScrollingToBottom)
        }
    })
    style.innerHTML = `
:root {
    --button-size: 29.4px; /* 按钮的大小 */
    --button-margin: 1px; /* 按钮之间的间距 */
}
.GO_TO_TOP_button, .GO_TO_BOTTOM_button {
    width: var(--button-size);  /* 按钮大小 */
    height: var(--button-size);  /* 按钮大小 */
    border-radius: 5.6px;  /* 縮小30% */
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%);
    position: fixed;
    right: 14px;  /* 缩小30% */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999999;
    background-color: white;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
}
    .GO_TO_TOP_button svg, .GO_TO_BOTTOM_button svg {
        left: 16.8px;  /* 縮小30% */
        height: 16.8px;  /* 縮小30% */
        margin: 0;
    }
    .GO_TO_TOP_button {
        bottom: 49px;  /* 縮小30% */
    }
    .GO_TO_BOTTOM_button {
        bottom: 14px;  /* 縮小30% */
    }
    `
    document.head.appendChild(style)
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    let bottomInterval
    const startScrollingToBottom = () => {
        bottomInterval = setInterval(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            })
        }, 1000)
        let checkTimeout = setTimeout(() => {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                if (buttonBottom.style.backgroundColor === 'green') {
                    buttonBottom.click()
                    //  alert("已处于最底端");
                }
            }
        }, 3000)
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY < document.body.scrollHeight) {
                clearTimeout(checkTimeout)
                checkTimeout = setTimeout(() => {
                    if (buttonBottom.style.backgroundColor === 'green') {
                        buttonBottom.click()
                        //      alert("自动滚动到底部已停止。");
                    }
                }, 3000)
            }
        })
        buttonBottom.style.opacity = '0.8'
        buttonBottom.style.display = 'flex'
    }
    const stopScrollingToBottom = () => {
        clearInterval(bottomInterval)
    }
    const buttonTop = document.createElement('div')
    buttonTop.className = 'GO_TO_TOP_button'
    buttonTop.innerHTML = `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M825.568 555.328l-287.392-289.28C531.808 259.648 523.488 256.576 515.2 256.64 514.08 256.544 513.12 256 512 256c-4.672 0-9.024 1.088-13.024 2.88-4.032 1.536-7.872 3.872-11.136 7.136l-259.328 258.88c-12.512 12.48-12.544 32.736-0.032 45.248 6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.624-9.344L480 364.288V928c0 17.696 14.336 32 32 32s32-14.304 32-32V362.72l236.192 237.728c6.24 6.272 14.496 9.44 22.688 9.44s16.32-3.104 22.56-9.312C838.016 588.128 838.048 567.84 825.568 555.328z"/>
        <path d="M864 192H160C142.336 192 128 177.664 128 160s14.336-32 32-32h704c17.696 0 32 14.336 32 32S881.696 192 864 192z"/>
    </svg>`
    const buttonBottom = document.createElement('div')
    buttonBottom.className = 'GO_TO_BOTTOM_button'
    buttonBottom.innerHTML = `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M198.4 468.352l287.392 289.28c6.368 6.4 14.688 9.472 22.976 9.408 1.12 0.096 2.08 0.64 3.2 0.64 4.672 0 9.024-1.088 13.024-2.88 4.032-1.536 7.872-3.872 11.136-7.136l259.328-258.88c12.512-12.48 12.544-32.736 0.032-45.248-6.24-6.272-14.432-9.408-22.656-9.408-8.192 0-16.352 3.136-22.624 9.344L544 659.712V96c0-17.696-14.336-32-32-32s-32 14.304-32 32v565.28L243.808 423.552c-6.24-6.272-14.496-9.44-22.688-9.44s-16.32 3.104-22.56 9.312c-12.48 12.512-12.512 32.8-0.032 45.312z"/>
        <path d="M160 832h704c17.664 0 32 14.336 32 32s-14.336 32-32 32H160c-17.664 0-32-14.336-32-32s14.336-32 32-32z"/>
    </svg>`
    buttonTop.addEventListener('click', goToTop)
    buttonBottom.addEventListener('click', () => {
        isScrollingToBottom = toggleScrolling(buttonBottom, isScrollingToBottom)
    })
    function toggleScrolling(buttonBottom, isScrollingToBottom) {
        if (isScrollingToBottom) {
            stopScrollingToBottom()
            buttonBottom.style.transform = 'scale(1)'
            buttonBottom.style.backgroundColor = 'white' // 改回原来的背景色
        } else {
            startScrollingToBottom()
            buttonBottom.style.transform = 'scale(1.1)'
            buttonBottom.style.backgroundColor = 'green' // 改为绿色
        }
        return !isScrollingToBottom
    }
    buttonTop.style.display = 'none'
    buttonBottom.style.display = 'none'
    document.body.appendChild(buttonTop)
    document.body.appendChild(buttonBottom)
    let timer
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            buttonTop.style.opacity = '0.8'
            buttonTop.style.display = 'flex'
            buttonBottom.style.opacity = '0.8'
            buttonBottom.style.display = 'flex'
        } else if (window.pageYOffset === 0) {
            buttonTop.style.opacity = '0'
            buttonBottom.style.opacity = '0'
            setTimeout(() => {
                buttonTop.style.display = 'none'
                buttonBottom.style.display = 'none'
            }, 200)
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            buttonTop.style.opacity = '0'
            buttonBottom.style.opacity = '0'
            setTimeout(() => {
                buttonTop.style.display = 'none'
                buttonBottom.style.display = 'none'
            }, 200)
        }, 1800)
    })
})()
