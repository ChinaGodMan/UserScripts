// ==UserScript==
// @name        GreasyFork: User Control Panel Button
// @name:en     GreasyFork: User Control Panel Button
// @name:zh-CN  GreasyFork: 导航栏增强
// @name:zh-TW  GreasyFork: 導航欄增強
// @name:ko     GreasyFork: 네비게이션 바 향상
// @name:ja     GreasyFork: ナビゲーションバー強化
// @namespace   https://github.com/10086100886
// @match       https://greasyfork.org/*
// @match       https://sleazyfork.org/*
// @grant       none
// @version 0.3.1.5
// @license     MIT
// @author      CY Fung  &  人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @description    To add User Control Panel Button into navigation bar
// @description:en To add User Control Panel Button into navigation bar
// @description:zh-CN 在导航栏上添加用户列表,控制台,收藏等..
// @description:ko 네비게이션 바에 사용자 목록, 콘솔, 즐겨찾기 등을 추가...
// @description:ja ナビゲーションバーにユーザーリスト、コンソール、お気に入りなどを追加...
// @description:zh-TW 在導航欄上添加使用者列表、控制台、收藏等...
// ==/UserScript==

(async () => {
    let sections = [
        { id: '#user-script-sets-section' },
        { id: '#control-panel' },
        // { id: '#user-library-list-section', name: '库' },
        //{ id: '#user-unlisted-script-list-section', name: '没上架' },
        //  { id: '#user-discussions', name: '讨论' },
        { id: '#user-script-list-section' }
    ]

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
