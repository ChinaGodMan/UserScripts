// ==UserScript==
// @name         屏蔽谷歌搜索站点
// @namespace    https://greasyfork.org/zh-CN/users/1169082
// @version 0.0.1.1
// @description  在google搜索屏蔽指定站点
// @license      MIT
// @author       人民的勤务员
// @include      /^https?://(www|cse)\.google(\.\w+)+/search\?.*$/
// @run-at       document-start
// @grant        GM_registerMenuCommand
// @compatible   chrome >= 49
// @compatible   firefox >= 29
// @compatible   opera >= 46
// @compatible   safari >= 10.1

// ==/UserScript==

(function () {
    'use strict'

    // 初始化默认屏蔽站点
    const DEFAULT_BLOCKED_SITES = "csdn"

    // 获取存储的屏蔽站点列表
    function getBlockedSites() {
        return localStorage.getItem("blockedSites") || DEFAULT_BLOCKED_SITES
    }

    // 设置屏蔽站点列表
    function setBlockedSites(sites) {
        localStorage.setItem("blockedSites", sites)
    }

    // 注册油猴菜单命令
    GM_registerMenuCommand("❌编辑屏蔽站点", function () {
        showEditDialog(getBlockedSites())
    })

    // 显示编辑对话框
    function showEditDialog(currentSites) {
        const overlay = document.createElement('div')
        overlay.id = 'overlay'
        overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9998;'

        const dialog = document.createElement('div')
        dialog.id = 'editDialog'
        dialog.style = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 3px 3px 5px rgba(0,0,0,0.3); z-index: 9999; width: 60%; max-width: 600px; resize: both; overflow: auto;'
        dialog.innerHTML = `
            <h3 style="cursor: move;">编辑屏蔽站点</h3>
            <p>请输入用英文逗号分隔的站点：</p>
            <textarea id="sitesInput" style="width: 100%; height: 100px; resize: vertical;">${currentSites}</textarea>
            <div style="text-align: right; margin-top: 10px;">
                <button id="saveBtn">保存</button>
                <button id="cancelBtn">取消</button>
            </div>
        `

        document.body.appendChild(overlay)
        document.body.appendChild(dialog)

        document.getElementById('saveBtn').addEventListener('click', function () {
            const newSites = document.getElementById('sitesInput').value
            setBlockedSites(newSites)
            alert("屏蔽站点已更新，刷新页面以生效。")
            closeEditDialog()
        })

        document.getElementById('cancelBtn').addEventListener('click', function () {
            closeEditDialog()
        })

        overlay.addEventListener('click', function () {
            closeEditDialog()
        })

        function closeEditDialog() {
            document.body.removeChild(dialog)
            document.body.removeChild(overlay)
        }
    }

    // 获取搜索参数
    var params = new URLSearchParams(location.search),
        q = params.get("q")

    // 获取当前屏蔽站点列表并格式化
    const blockedSites = getBlockedSites().split(",").map(site => `-${site.trim()}`).join(" ")

    // 如果查询参数中没有屏蔽站点，则添加
    if (q && !blockedSites.split(" ").some(site => q.includes(site))) {
        params.set("q", q + " " + blockedSites)
        location.search = "?" + params.toString()
    }

})()
