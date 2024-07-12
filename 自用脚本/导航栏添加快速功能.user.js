// ==UserScript==
// @name        GreasyFork: 导航栏添加用户脚本列表
// @namespace   UserScripts
// @match       https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @grant       none
// @version     0.3.0
// @license     MIT
// @author      CY Fung
// @grant        GM_addStyle
// @description To add User Control Panel Button into navigation bar

// ==/UserScript==
//增加收藏夹等
(async () => {

    function preSetup() {
        // 查找导航栏中所有带有子菜单的li元素
        let pos = document.querySelectorAll('#site-nav>nav>li.with-submenu')
        // 获取最后一个带有子菜单的li元素
        pos = pos.length >= 1 ? pos[pos.length - 1] : null

        if (!pos) return

        // 设置父元素的最小高度为2.8rem
        pos.parentNode.style.minHeight = '2.8rem'

        return { pos }
    }

    function setup(m, namespace) {
        // 从传入的参数中解构出cpmRoot
        const { cpmRoot } = m

        // 查找控制面板中的h3或header元素
        let h = cpmRoot.querySelector('h3') || cpmRoot.querySelector('header')
        if (!h) return

        // 创建一个新的nav元素
        let nav = document.createElement('nav')

        // 使用 Set 来跟踪已经添加的文本内容
        let addedText = new Set()
        let lastText = null

        // 将控制面板中的每个链接添加到新的nav元素中
        for (const anchor of cpmRoot.querySelectorAll('li a[href]')) {
            let textContent = anchor.textContent.trim()

            // 检查当前文本内容是否已经添加过
            if (addedText.has(textContent)) {
                lastText = textContent // 记录最后一个重复的文本内容
                continue // 如果已经添加过，则跳过当前循环
            }

            let li = nav.appendChild(document.createElement('li'))
            li.appendChild(anchor)

            // 将当前文本内容添加到 Set 中
            addedText.add(textContent)
        }

        // 如果有最后一个重复的文本内容，则从生成的模板中移除它
        if (lastText !== null) {
            nav.querySelectorAll('li').forEach(li => {
                if (li.querySelector('a').textContent.trim() === lastText) {
                    li.remove()
                }
            })
        }

        // 创建一个模板元素，并设置其内容为新的子菜单项
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
        // 将缓冲区转换为十六进制字符串
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
        // 将消息转换为SHA-1散列值
        const encoder = new TextEncoder("utf-8")
        const msgUint8 = encoder.encode(message)
        const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8)
        return bufferToHex(hashBuffer)
    }

    async function fetchHTMLSection(o, sectionId) {
        // 从参数中解构出stKey和href
        const { stKey, href } = o

        for (let trialN = 4; trialN--;) {
            let r = await new Promise(resolve => {
                // 从sessionStorage中获取缓存的内容
                let t = sessionStorage.getItem(stKey)

                if (`${t}`.length > 32) resolve(t)

                // 如果缓存内容无效，则设置当前时间戳
                sessionStorage.setItem(stKey, `${Date.now()}`)

                // 发起GET请求获取指定section的HTML内容
                fetch(href, {
                    method: "GET",
                    mode: "same-origin",
                    cache: "force-cache",
                    credentials: "same-origin",
                    redirect: "follow",
                    referrerPolicy: "no-referrer",
                }).then(res => res.text()).then(async res => {
                    sessionStorage.removeItem(stKey)

                    let template = document.createElement('template')
                    template.innerHTML = res
                    let w = template.content

                    let section = w.querySelector(sectionId)

                    if (section) {
                        // 如果找到指定section，缓存其内容并解析
                        const html = section.innerHTML.trim()
                        sessionStorage.setItem(stKey, html)
                        resolve(html)
                    } else {
                        // 如果未找到指定section，再次发起请求尝试获取
                        await fetch(href, {
                            method: "GET",
                            mode: "same-origin",
                            cache: "reload",
                            credentials: "same-origin",
                            redirect: "follow",
                            referrerPolicy: "no-referrer",
                        }).catch((e) => {
                            console.debug(e)
                        })

                        resolve()
                    }
                }).catch(e => {
                    sessionStorage.removeItem(stKey)
                })
            })

            if (r && typeof r === 'string' && r.length > 32) return r
        }
    }

    async function addSectionToNav(sectionId, sectionName) {
        let presetup = preSetup()
        if (!presetup) return
        const { pos } = presetup

        let plink = document.querySelector('.user-profile-link')
        if (!plink) return
        let href = plink.querySelector('a[href*="/users/"]').href
        if (href.includes('/users/sign')) return

        let dm = await digestMessage(href)
        const stKey = `gf_${sectionId}_${dm}`

        for (let trialN = 8; trialN--;) {
            let s = sessionStorage.getItem(stKey)
            let d = typeof s === 'string' ? parseInt(s) : 0
            if (d > 9 && Date.now() - d < 8000) await new Promise(r => setTimeout(r, 320))
            else break
        }

        const sectionHTML = await fetchHTMLSection({ stKey, href }, sectionId)
        if (!sectionHTML || typeof sectionHTML !== 'string') return

        let template = document.createElement('template')
        template.innerHTML = sectionHTML
        const kc = setup({ cpmRoot: template.content, pos }, sectionName)
        if (kc) {
            pos.parentNode.insertBefore(kc, pos.nextSibling)
        }
    }

    // 确保用户已登录
    if (!document.querySelector('.sign-out-link') || document.querySelector('.sign-in-link')) return

    // 添加用户控制面板
    await addSectionToNav('#user-script-sets-section', '我的收藏')

    await addSectionToNav('#control-panel')//控制台
    //await addSectionToNav('#user-library-list-section');//库
    //await addSectionToNav('#user-unlisted-script-list-section');//没上架
    //await addSectionToNav('#user-discussions');//讨论
    await addSectionToNav('#user-script-list-section')//脚本
})()
