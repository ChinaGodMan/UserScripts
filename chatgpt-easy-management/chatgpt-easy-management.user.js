// ==UserScript==
// @name               ChatGPT Easy Chat Management
// @name:zh-CN         ChatGPT 轻松管理聊天
// @description        Search for chats, filter them, quickly/bulk delete them.
// @description:zh-CN  搜索聊天、过滤聊天、快速/批量删除聊天。
// @author             mysy00
// @namespace          https://github.com/mysy00/userscripts
// @supportURL         https://github.com/mysy00/userscripts/issues
// @homepageURL        https://github.com/mysy00/userscripts
// @homepage           https://github.com/mysy00/userscripts
// @license            MIT
// @match              https://chatgpt.com/*
// @icon               https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/chatgpt-plus.png
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.3.1
// @created            2025-06-03 11:26:11
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-easy-management/chatgpt-easy-management.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-easy-management/chatgpt-easy-management.user.js
// ==/UserScript==

/**
 * File: chatgpt-easy-management.user.js
 * Project: UserScripts
 * File Created: 2025/06/03,Tuesday 11:26:11
 * Author: mysy00
 * -----
 * Last Modified: 2025/06/03,Tuesday 11:34:19
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

(function () {
    'use strict'

    const API = 'https://chatgpt.com/backend-api'
    const MAX_MSG_LEN = 100
    const RETRIES = 3
    const RETRY_DELAY = 300
    const PAGE_SIZE = 50

    const wait = ms => new Promise(r => setTimeout(r, ms))
    const fmt = ts => {
        const d = new Date(ts * 1000)
        const date = d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        const time = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
        return `${date} ${time}`
    }
    const trimStr = s =>
        typeof s === 'string' && s.length > MAX_MSG_LEN ? s.slice(0, MAX_MSG_LEN) + '…' : s
    const extractText = part => {
        // If it’s a plain string, return it
        if (typeof part === 'string') {
            return part
        }
        // If it’s an object with an explicit type
        if (part && typeof part === 'object') {
            // ChatGPT image attachments often come as { type: 'image_url', url: '…' }
            if (part.content_type === 'image_asset_pointer') {
                return '🖼️'
            }
            // Some variants may include a url/src field even without type
            if (part.url || part.src) {
                return '[image]'
            }
        }
        // Otherwise we don’t know how to render it
        return '[unknown]'
    }

    async function getToken() {
        const res = await fetch('https://chatgpt.com/api/auth/session', { credentials: 'include' })
        const j = await res.json()
        if (!j.accessToken) throw new Error('No auth token')
        return j.accessToken
    }

    async function fetchPage(offset = 0, limit = PAGE_SIZE) {
        const t = await getToken()
        const res = await fetch(`${API}/conversations?offset=${offset}&limit=${limit}`, {
            headers: { Authorization: `Bearer ${t}` }
        })
        if (!res.ok) throw new Error(`Summaries fetch failed ${res.status}`)
        return res.json()
    }

    async function fetchDetailsWithRetry(id) {
        for (let i = 0; i < RETRIES; i++) {
            try {
                const t = await getToken()
                const res = await fetch(`${API}/conversation/${id}`, {
                    headers: { Authorization: `Bearer ${t}` }
                })
                if (!res.ok) throw new Error()
                return await res.json()
            } catch {
                await wait(RETRY_DELAY)
            }
        }
        throw new Error(`Failed to load details for ${id}`)
    }

    async function deleteChat(id) {
        const t = await getToken()
        const res = await fetch(`${API}/conversation/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${t}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ is_visible: false })
        })
        if (!res.ok) throw new Error(`Delete failed ${res.status}`)
        await wait(200)
    }

    function injectStyles() {
        if (document.getElementById('bd-styles')) return
        const st = document.createElement('style')
        st.id = 'bd-styles'
        st.textContent = `
        /* Overlay & modal shell */
        #bd-overlay { background: rgba(0,0,0,0.5) !important; }
        #bd-overlay.hidden { display: none !important; }
        #bd-modal {
          background: var(--sidebar-surface-primary);
          color: var(--token-text-primary);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          display: flex; flex-direction: column;
          max-width: 800px; width: 90%; max-height: 85vh; overflow: hidden;
          transform: translateY(20px); opacity: 0;
          animation: fadeInUp 0.3s ease-out forwards;
          font-family: inherit;
        }
        @keyframes fadeInUp { to { transform: translateY(0); opacity: 1; } }
        /* Header */
        #bd-modal > .header {
          background: var(--sidebar-surface-tertiary);
          padding: 16px 24px;
          display: flex; align-items: center;
          border-bottom: 1px solid var(--border-light);
          gap: 12px;
        }
        #bd-modal .header h2 { margin: 0; flex: 1; font-size: 18px; }
        #bd-modal .header button {
          background: var(--sidebar-surface-secondary);
          color: var(--token-text-primary);
          border: none; border-radius: 6px;
          font-size: 14px; font-weight: 500;
          padding: 6px 14px; cursor: pointer;
        }
        #bd-modal .header button:hover { background: var(--sidebar-surface-hover); }
        #bd-modal .header input[type="number"] {
          width: 60px; padding: 6px 8px; margin-left: 8px;
          border: 1px solid var(--border-light);
          border-radius: 6px;
          background: var(--sidebar-surface-secondary);
          color: var(--token-text-primary);
        }
        /* Status */
        #bd-status {
          padding: 8px 24px; font-size: 14px; color: var(--token-text-secondary);
        }
        /* Chat rows */
        #bd-modal .chat-row {
          padding: 16px 20px; border-bottom: 1px solid var(--border-light);
          display: flex; flex-direction: column; gap: 6px;
        }
        #bd-modal .chat-row:hover { background: var(--menu-item-active); }
        #bd-modal .chat-row.selected { background: var(--interactive-bg-secondary-press) !important; }
        .chat-row .top { display: flex; align-items: center; }
        .chat-row .title { margin-left: 8px; font-weight: 600; font-size: 15px; }
        .chat-row .meta  { font-size: 13px; }
        .chat-row .msg   { font-size: 14px; line-height: 1.4; word-break: break-word; }
        /* Footer */
        #bd-modal > .footer {
          background: var(--sidebar-surface-tertiary);
          padding: 16px 24px;
          display: flex; align-items: center;
          border-top: 1px solid var(--border-light);
          justify-content: flex-end; gap: 12px;
        }
        #bd-modal .footer button {
          background: var(--sidebar-surface-secondary);
          color: var(--token-text-primary);
          border: none; border-radius: 6px;
          font-size: 14px; font-weight: 500;
          padding: 6px 14px; cursor: pointer;
        }
        #bd-modal .footer button:first-child {
          background: var(--sidebar-surface-tertiary);
          border: 1px solid var(--border-light);
        }
        #bd-modal .footer button:last-child {
          background: var(--danger-action);
          color: var(--button-text);
        }
        #bd-modal .footer button:hover { background: var(--sidebar-surface-hover); }
      `
        document.head.appendChild(st)
    }

    function renderChatCard(convo, updateCount) {
        const row = document.createElement('div')
        row.className = 'chat-row'
        row.dataset.id = convo.id

        const top = document.createElement('div'); top.className = 'top'
        const cb = document.createElement('input'); cb.type = 'checkbox'; cb.dataset.id = convo.id
        const tit = document.createElement('div'); tit.className = 'title'; tit.textContent = convo.title || '(no title)'
        top.append(cb, tit)
        row.append(top)

        const meta = document.createElement('div'); meta.className = 'meta'; row.append(meta)
        const m1 = document.createElement('div'); m1.className = 'msg'; row.append(m1)
        const m2 = document.createElement('div'); m2.className = 'msg'; row.append(m2)

        function updateSelection() {
            row.classList.toggle('selected', cb.checked)
            updateCount()
        }

        row.addEventListener('click', e => {
            if (e.target.tagName !== 'INPUT') cb.checked = !cb.checked
            updateSelection()
        })
        cb.addEventListener('change', e => { updateSelection(); e.stopPropagation() })

        row.update = ({ create_time, update_time, first, last }) => {
            row.dataset.updateTs = update_time
            meta.innerHTML = `<strong>Created:</strong> ${fmt(create_time)} — <strong>Updated:</strong> ${fmt(update_time)}`
            m1.innerHTML = `<strong>First:</strong> ${first}`
            m2.innerHTML = `<strong>Last:</strong> ${last}`
        }

        return row
    }

    function openModal() {
        // If there's already an overlay, remove it entirely so state resets
        const existing = document.getElementById('bd-overlay')
        if (existing) existing.remove()

        injectStyles()

        const overlay = document.createElement('div')
        overlay.id = 'bd-overlay'
        Object.assign(overlay.style, { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 })

        function hideAndRemove() { overlay.remove() }

        overlay.addEventListener('click', e => { if (e.target === overlay) hideAndRemove() })
        window.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { hideAndRemove(); window.removeEventListener('keydown', esc) } })

        const modal = document.createElement('div'); modal.id = 'bd-modal'
        const statusEl = document.createElement('div'); statusEl.id = 'bd-status'
        const list = document.createElement('div'); Object.assign(list.style, { flex: '1 1 auto', overflowY: 'auto' })

        // Header
        const header = document.createElement('div'); header.className = 'header'
        const h2 = document.createElement('h2'); h2.textContent = 'Bulk Delete Chats'
        const sortBtn = document.createElement('button'); sortBtn.textContent = 'Sort by Updated'
        const ageInput = document.createElement('input'); ageInput.type = 'number'; ageInput.min = '0'; ageInput.placeholder = 'Days'
        const listOldBtn = document.createElement('button'); listOldBtn.textContent = 'List older'
        const refreshBtn = document.createElement('button'); refreshBtn.textContent = 'Reload'
        const closeBtn = document.createElement('button'); closeBtn.textContent = '✕'
        header.append(h2, sortBtn, ageInput, listOldBtn, refreshBtn, closeBtn)

        // Footer
        const footer = document.createElement('div'); footer.className = 'footer'
        const cancelBtn = document.createElement('button'); cancelBtn.textContent = 'Cancel'
        const delBtn = document.createElement('button'); delBtn.textContent = 'Delete Selected'
        footer.append(cancelBtn, delBtn)

        modal.append(header, statusEl, list, footer)
        overlay.append(modal)
        document.body.append(overlay)

        let totalChats = 0, offset = 0, loadingMore = false
        const rows = []

        function updateCount() {
            const shown = rows.length
            const sel = list.querySelectorAll('input:checked').length
            statusEl.textContent = `Showing ${shown} of ${totalChats} chats — ${sel} selected`
        }

        const obs = new IntersectionObserver((ents) => {
            ents.forEach(ent => {
                if (!ent.isIntersecting) return
                obs.unobserve(ent.target)
                fetchDetailsWithRetry(ent.target.dataset.id)
                    .then(dt => {
                        const userMsgs = Object.values(dt.mapping || {})
                            .filter(n => n.message?.author?.role === 'user')
                            .map(n => extractText(n.message?.content?.parts?.[0]))
                        let first = trimStr(userMsgs[0] || '—')
                        let last = trimStr(userMsgs.at(-1) || '—')
                        if (first === last) {
                            const asst = Object.values(dt.mapping || {})
                                .filter(n => n.message?.author?.role === 'assistant')
                            if (asst.length) {
                                last = 'Chat: ' + trimStr(extractText(asst.at(-1).message.content.parts?.[0] || ''))
                            }
                        }
                        ent.target.update({ create_time: dt.create_time, update_time: dt.update_time, first, last })
                    })
                    .catch(() => ent.target.update({ create_time: 0, update_time: 0, first: '✖️', last: '✖️' }))
            })
        }, { root: list, threshold: 0.1 })

        async function loadChats() {
            list.innerHTML = ''
            rows.length = 0
            offset = 0
            const page = await fetchPage(0, PAGE_SIZE)
            totalChats = page.total ?? page.total_count ?? page.pagination?.total_count ?? page.pagination?.total ?? page.items.length
            page.items.forEach(c => {
                const row = renderChatCard(c, updateCount)
                list.append(row)
                rows.push(row)
            })
            offset = page.items.length
            updateCount()
            rows.forEach(r => obs.observe(r))
        }

        // initial load
        loadChats().catch(() => statusEl.textContent = 'Failed to load chats.')

        // Refresh handler
        refreshBtn.addEventListener('click', async () => {
            statusEl.textContent = 'Reloading…'
            obs.disconnect()
            try {
                await loadChats()
                statusEl.textContent = 'Reloaded.'
            } catch (err) {
                statusEl.textContent = 'Reload failed.'
                console.error(err)
            }
        })

        // Infinite scroll
        list.addEventListener('scroll', async () => {
            if (loadingMore) return
            if (offset < totalChats && list.scrollTop + list.clientHeight >= list.scrollHeight - 50) {
                loadingMore = true
                const page = await fetchPage(offset, PAGE_SIZE)
                page.items.forEach(c => {
                    const row = renderChatCard(c, updateCount)
                    list.append(row)
                    rows.push(row)
                    obs.observe(row)
                })
                offset += page.items.length
                updateCount()
                loadingMore = false
            }
        })

        // Sort
        sortBtn.addEventListener('click', () => {
            rows
                .sort((a, b) => Number(b.dataset.updateTs) - Number(a.dataset.updateTs))
                .forEach(r => list.append(r))
            updateCount()
        })

        // Filter older
        listOldBtn.addEventListener('click', () => {
            const days = parseInt(ageInput.value, 10)
            if (isNaN(days) || days < 0) {
                statusEl.textContent = 'Enter a valid number of days'
                return
            }
            const threshold = Math.floor(Date.now() / 1000) - days * 86400
            statusEl.textContent = `Filtering chats older than ${days} days…`
            obs.disconnect()
            const filtered = rows.filter(r => Number(r.dataset.updateTs) < threshold)
            list.innerHTML = ''
            filtered.forEach(r => { r.querySelector('input').checked = true; r.classList.add('selected'); list.append(r); obs.observe(r) })
            updateCount()
        })

        // Cancel & close
        cancelBtn.addEventListener('click', hideAndRemove)
        closeBtn.addEventListener('click', hideAndRemove)

        // Delete flow
        delBtn.addEventListener('click', () => {
            const selected = [...list.querySelectorAll('.chat-row.selected')]
            if (!selected.length) {
                statusEl.textContent = 'No chats selected.'
                return
            }

            const confirmPane = document.createElement('div')
            confirmPane.id = 'bd-confirm-pane'
            confirmPane.style = 'flex:1 1 auto;overflow-y:auto;padding:16px'

            const info = document.createElement('div')
            info.textContent = `Confirm deletion of ${selected.length} chat(s). Uncheck any you’d like to keep:`
            info.style = 'margin-bottom:12px;font-weight:500'
            confirmPane.appendChild(info)

            selected.forEach((row, idx) => {
                const id = row.dataset.id
                const title = row.querySelector('.title').textContent
                const label = document.createElement('label')
                label.style = 'display:flex;align-items:center;margin-bottom:8px'
                const cb = document.createElement('input')
                cb.type = 'checkbox'; cb.checked = true; cb.dataset.id = id; cb.style = 'margin-right:8px'
                label.append(cb, document.createTextNode(`${idx + 1}. ${title}`))
                confirmPane.appendChild(label)
            })

            footer.innerHTML = ''
            const backBtn = document.createElement('button'); backBtn.textContent = 'Back'
            const confirmBtn = document.createElement('button')
            confirmBtn.textContent = 'Confirm Delete'
            confirmBtn.style = 'background:var(--danger-action);color:var(--button-text)'
            footer.append(backBtn, confirmBtn)

            list.replaceWith(confirmPane)

            backBtn.addEventListener('click', () => {
                confirmPane.replaceWith(list)
                footer.innerHTML = ''
                footer.append(cancelBtn, delBtn)
                updateCount()
            })

            confirmBtn.addEventListener('click', async () => {
                const toDelete = [...confirmPane.querySelectorAll('input:checked')]
                if (!toDelete.length) {
                    statusEl.textContent = 'Nothing to delete.'
                    return
                }
                let done = 0, failed = 0
                for (const cb of toDelete) {
                    done++
                    statusEl.textContent = `Deleting (${done}/${toDelete.length})…`
                    try { await deleteChat(cb.dataset.id) } catch { failed++ }
                }
                statusEl.textContent = `Deleted ${toDelete.length - failed}, ${failed} failed.`
                // close & remove after a short pause
                setTimeout(hideAndRemove, 1000)
            })
        })
    }

    // Inject main icon & quick-delete buttons
    function injectIcon() {
        const target = document.querySelector('#sidebar-header')
        if (!target || target.querySelector('[data-bulk-delete]')) return

        const link = document.createElement('a')
        link.className = document.querySelectorAll('#sidebar-header > a')[0].className
        link.dataset.bulkDelete = 'true'; link.href = '#'
        link.setAttribute('aria-label', 'Bulk Delete Chats')
        link.setAttribute('role', 'button')
        link.innerHTML = `
        <svg width="24" height="24" fill="currentColor">
          <path d="M9 3v1H4v2h16V4h-5V3H9zm-1 5v12h2V8H8zm4 0v12h2V8h-2z"/>
        </svg>`
        link.addEventListener('click', e => { e.preventDefault(); openModal() })
        target.append(link)
    }

    function injectQuickDeleteButtons() {
        document.querySelectorAll('a[data-discover][href^="/c/"]').forEach(link => {
            if (link.querySelector('.quick-delete-btn')) return
            const convoId = link.getAttribute('href').split('/').pop()
            if (!convoId) return
            const btn = document.createElement('button')
            btn.className = 'quick-delete-btn'
            btn.setAttribute('aria-label', 'Delete conversation')
            btn.style.cssText = 'margin-left:8px;background:transparent;border:none;cursor:pointer;color:var(--token-text-secondary);'
            btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 3v1H4v2h16V4h-5V3H9zm-1 5v12h2V8H8zm4 0v12h2V8h-2z" fill="currentColor"/></svg>`
            btn.addEventListener('click', async e => {
                e.preventDefault(); e.stopPropagation()
                try { await deleteChat(convoId); link.remove() } catch (err) { console.error('Quick delete failed', err) }
            })
            const trailing = link.querySelector('.text-token-text-tertiary');
            (trailing || link).appendChild(btn)
        })
    }

    const observer = new MutationObserver(() => {
        injectIcon()
        injectQuickDeleteButtons()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('load', () => {
        injectIcon()
        injectQuickDeleteButtons()
    })
})()
