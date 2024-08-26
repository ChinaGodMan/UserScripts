// ==UserScript==
// @name         ChatGPT Chat Fold Script & MAXWidth
// @name:en         ChatGPT Chat Fold Script & MAXWidth
// @name:zh-CN   ChatGPT 折叠自己消息和最大宽度
// @name:zh-TW   ChatGPT 摺疊自己消息和最大寬度
// @name:ja      ChatGPT チャット折りたたみスクリプトと最大幅
// @name:vi      ChatGPT Gấp Lại Tin Nhắn và Đặt Chiều Rộng Tối Đa
// @description Fold long "You" messages in ChatGPT
// @description:en Fold long "You" messages in ChatGPT
// @description:zh-CN 折叠ChatGPT中较长的“你”消息，并设置最大宽度
// @description:zh-TW 摺疊ChatGPT中較長的“你”訊息，並設置最大寬度
// @description:ja ChatGPTで長い「あなた」のメッセージを折りたたみ、最大幅を設定します
// @description:vi Gấp lại các tin nhắn "Bạn" dài trong ChatGPT và thiết lập chiều rộng tối đa
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @version 0.1.0.2
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://chatgpt.com/*
// @match      https://share.nezhagpt.cloud/*
// @match      https://new.oaifree.com/*
// @grant        none
// @license      MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

(function () {
    'use strict'
    //MAX WIGHT
    let css = `
    .md\\:max-w-3xl {
        max-width: 100%;
    }
`
    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css)//// homepageURL https://gitlab.com/breatfr/chatgpt-responsive
        //  https://discord.gg/Q8KSHzdBxs
    } else {
        let styleNode = document.createElement("style")
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode)
    }
    // Your code here...
    window.addEventListener('load', function () {
        // Function to fold long messages
        function foldLongMessages() {
            const messages = document.querySelectorAll('div[data-message-author-role="user"]')

            messages.forEach(message => {
                if (message.innerText.split('\n').length > 3) {
                    message.style.overflow = 'hidden'
                    message.style.height = '100px' // Adjust as needed
                    message.style.cursor = 'pointer'

                    // Click to expand
                    message.addEventListener('click', function () {
                        if (message.style.overflow === 'hidden') {
                            message.style.overflow = 'visible'
                            message.style.height = 'auto'
                        } else {
                            message.style.overflow = 'hidden'
                            message.style.height = '100px'
                        }
                    })
                }
            })
        }

        // Run the function and also set an interval to handle dynamic content
        foldLongMessages()
        setInterval(foldLongMessages, 1000)
    })
})()
