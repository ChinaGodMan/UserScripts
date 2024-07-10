// ==UserScript==
// @name         Greasy Fork Bookmark
// @name:zh-CN      Greasy Fork 书签
// @name:ja      Greasy Fork ブックマーク
// @namespace    http://tampermonkey.net/
// @version      2024-07-10 11：22
// @description       Bookmark the script easily
// @description:zh-CN    Bookmark the script easily
// @description:ja    Greasy Forkのブックマーク機能
// @author       ぐらんぴ
// @match        https://greasyfork.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @license      MIT
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @downloadURL https://update.greasyfork.org/scripts/493406/Greasy%20Fork%20Bookmark.user.js
// @updateURL https://update.greasyfork.org/scripts/493406/Greasy%20Fork%20Bookmark.meta.js
// ==/UserScript==

(() => {
    var favs = JSON.parse(GM_getValue('favs', '[]'))
    function favLink() {
        let nav = document.querySelector("#site-nav > nav"),
            li = document.createElement('li')
        li.innerHTML = `<a href="https://greasyfork.org/Bookmarks">Favs</a>`
        nav.appendChild(li)
    } favLink()
    function favPage() {
        if (window.location.href == "https://greasyfork.org/Bookmarks") {
            document.title = 'bookmarks'
            //  document.querySelector("body > div > section").remove()

            let scripts = JSON.parse(GM_getValue('favs', '[]'))
            document.querySelector("body > div > section").innerHTML = `<ol id="browse-script-list" class="script-list ">`
            const reverseOrder = true
            for (let script of (reverseOrder ? scripts.reverse() : scripts)) {
                let elm = document.querySelector("#browse-script-list"),
                    li = document.createElement("li")
                li.innerHTML = `
                 <div class="parent-container">
                <a class="script-link" href="${script.href}">${script.title}</a>
                <span class="badge badge-author" title="收藏时间">${script.timestamp}</span>
                <span class="script-description description">${script.description}
                </div>

             `
                let scriptLinkElement = li.querySelector('.script-link')
                handleScriptPage(script.description, script.title, scriptLinkElement, script.href, 'a', 'custom-class', (favs, value, scriptLinks) => {
                    // 这里是回调函数的实现
                    if (value) {
                        elm.style.textDecoration = 'none'
                        elm.style.color = '#a42121'       // 文字颜色改为红色
                        elm.style.fontStyle = 'normal'    // 取消斜体
                    } else {
                        elm.style.textDecoration = 'line-through'
                        elm.style.color = 'gray'           // 文字颜色改为灰色
                        elm.style.fontStyle = 'italic'    // 文字变成斜体

                    }

                })
                elm.appendChild(li)
            }
        }
    }
    favPage()
    function handleScriptPage(scriptDescription, scriptTitle, scriptLinks, href, type = 'li', customClassName = '', callback = null) {
        let li = document.createElement(type)
        if (customClassName) {
            li.classList.add(customClassName)

        }
        setStar(li, false)
        scriptLinks.appendChild(li)

        let index = -1,
            val = scriptTitle,
            filteredObj = favs.find((item, i) => {
                if (item.title === val) {
                    index = i
                    return i
                }
            })

        if (index !== -1) {
            setStar(li, true)
        }

        li.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            const now = new Date()
            const localTime = now.toLocaleString()
            var value = {
                title: scriptTitle,
                description: scriptDescription,
                href: href,
                timestamp: localTime,
            }
            var index = -1,
                val = scriptTitle,
                filteredObj = favs.find(function (item, i) {
                    if (item.title === val) {
                        index = i
                        return i
                    }
                })

            if (index == -1) {
                favs.push(value)
                setStar(li, true)
                if (callback) {
                    callback(favs, true, scriptLinks)
                }
            } else {
                favs.splice(index, 1)
                setStar(li, false)
                if (callback) {
                    callback(favs, false, scriptLinks)
                }
            }
            GM_setValue('favs', JSON.stringify(favs))

        })
    }
    function scriptPage() {
        if (location.href.match('/scripts')) {
            let scriptLinks = document.querySelector("#script-links")
            let scriptTitle = document.querySelector("#script-info > header > h2").innerText
            let scriptDescription = document.querySelector(".script-description").innerText
            let href = window.location.href

            handleScriptPage(scriptDescription, scriptTitle, scriptLinks, href)
        }
    }

    scriptPage()
    function addStyle() {
        var css = `
.badge.badge-author {
    font-size: 0.7em; 
    float: right;
}
.custom-class {
  position: absolute;
  bottom: 0; 
  right: 0;
  margin-right: 0px; 
  margin-bottom: 0;
  
}
      .parent-container {
      position: relative; 
     
    }
        #script-links > li:nth-child(6) {
        text-decoration: none;
        cursor: pointer;
        color: #a42121;
        }`,
            style = document.createElement('style')
        style.innerHTML = css
        document.head.append(style)
    } addStyle()
    function setStar(li, condition) {
        if (condition) {
            li.innerHTML = '<a href="#" style="color: green;">★</a>'
        } else {
            li.innerHTML = '<a>☆</a>'
        }
    }
})()