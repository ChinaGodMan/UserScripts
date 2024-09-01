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
// @version 0.1.0.11
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://chatgpt.com/*
// @match      https://share.nezhagpt.cloud/*
// @match      https://new.oaifree.com/*
// @grant        none
// @license      MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
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
