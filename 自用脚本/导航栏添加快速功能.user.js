// ==UserScript==
// @name        GreasyFork: 导航栏添加用户脚本列表
// @namespace   UserScripts
// @match       https://greasyfork.org/*
// @match       https://sleazyfork.org/*
// @grant       none
// @version     0.3.1
// @license     MIT
// @author      CY Fung
// @description To add User Control Panel Button into navigation bar

// ==/UserScript==

(async () => {

    function preSetup() {
        let pos = document.querySelectorAll('#site-nav>nav>li.with-submenu')
        pos = pos.length >= 1 ? pos[pos.length - 1] : null

        if (!pos) return

        pos.parentNode.style.minHeight = '2.8rem'

        return { pos }
    }

    function setup(m, namespace) {
        const { cpmRoot } = m

        let h = cpmRoot.querySelector('h3') || cpmRoot.querySelector('header')
        if (!h) return

        let nav = document.createElement('nav')

        let addedText = new Set()
        let lastText = null

        for (const anchor of cpmRoot.querySelectorAll('li a[href]')) {
            let textContent = anchor.textContent.trim()

            if (addedText.has(textContent)) {
                lastText = textContent
                continue
            }

            let li = nav.appendChild(document.createElement('li'))
            li.appendChild(anchor)

            addedText.add(textContent)
        }

        if (lastText !== null) {
            nav.querySelectorAll('li').forEach(li => {
                if (li.querySelector('a').textContent.trim() === lastText) {
                    li.remove()
                }
            })
        }

        let tm = document.createElement('template')
        tm.innerHTML = `
        <li class="with-submenu" style="display: block;">
            <a href="#" onclick="return false">${namespace ? namespace : h.textContent}</a>
            <nav style="min-width: initial;">
                ${nav.innerHTML}
            </nav>
        </li>
    `.trim()

        return tm.content
    }

    function bufferToHex(buffer) {
        const byteArray = new Uint8Array(buffer)
        const len = byteArray.length
        const hexCodes = new Array(len * 2)
        const chars = '0123456789abcdef'
        for (let i = 0, j = 0; i < len; i++) {
            const byte = byteArray[i]
            hexCodes[j++] = chars[byte >> 4]
            hexCodes[j++] = chars[byte & 0x0F]
        }
        return hexCodes.join('')
    }

    async function digestMessage(message) {
        const encoder = new TextEncoder("utf-8")
        const msgUint8 = encoder.encode(message)
        const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8)
        return bufferToHex(hashBuffer)
    }

    async function fetchHTML(href) {
        let response = await fetch(href, {
            method: "GET",
            mode: "same-origin",
            cache: "force-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer",
        })

        return response.text()
    }

    async function addSectionsToNav() {
        let presetup = preSetup()
        if (!presetup) return
        const { pos } = presetup

        let plink = document.querySelector('.user-profile-link')
        if (!plink) return
        let href = plink.querySelector('a[href*="/users/"]').href
        if (href.includes('/users/sign')) return

        let dm = await digestMessage(href)
        const stKey = `gf_user_page_${dm}`

        for (let trialN = 8; trialN--;) {
            let s = sessionStorage.getItem(stKey)
            let d = typeof s === 'string' ? parseInt(s) : 0
            if (d > 9 && Date.now() - d < 8000) await new Promise(r => setTimeout(r, 320))
            else break
        }

        const userPageHTML = await fetchHTML(href)
        if (!userPageHTML || typeof userPageHTML !== 'string') return

        sessionStorage.setItem(stKey, userPageHTML)

        let template = document.createElement('template')
        template.innerHTML = userPageHTML
        const content = template.content

        const sections = [
            { id: '#user-script-sets-section', name: '我的收藏' },
            { id: '#control-panel', name: '控制台' },
            // { id: '#user-library-list-section', name: '库' },
            //{ id: '#user-unlisted-script-list-section', name: '没上架' },
            //  { id: '#user-discussions', name: '讨论' },
            { id: '#user-script-list-section', name: '脚本' }
        ]

        sections.forEach(({ id, name }) => {
            let section = content.querySelector(id)
            if (section) {
                const kc = setup({ cpmRoot: section, pos }, name)
                if (kc) {
                    pos.parentNode.insertBefore(kc, pos.nextSibling)
                }
            }
        })
    }

    if (!document.querySelector('.sign-out-link') || document.querySelector('.sign-in-link')) return

    await addSectionsToNav()
})()
