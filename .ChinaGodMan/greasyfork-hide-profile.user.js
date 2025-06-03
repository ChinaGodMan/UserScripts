// ==UserScript==
// @name         隐藏1169082简介
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @match        https://greasyfork.org/*/users/1169082*
// @version      2025.5.27
// @author       人民的勤务员 <china.qinwuyuan@gmail.com>
// @run-at       document-start
// @description  隐藏"人民勤务员"主页个人简介,脚本集，控制台，移动脚本列表到顶部
// ==/UserScript==

/**
 * File: greasyfrok-hide.user.js
 * Project: UserScripts
 * File Created: 2025/05/27,Tuesday 18:05:04
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/05/27,Tuesday 18:09:04
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */
const style = document.createElement("style")
style.textContent = `
    #user-profile,#control-panel,#user-script-sets-section {
    display: none !important;
    }
`
document.head.appendChild(style)

document.addEventListener("DOMContentLoaded", function () {
    const scriptListSection = document.querySelector("#user-script-list-section")
    const targetContainer = document.querySelector("body > div.width-constraint")
    if (scriptListSection && targetContainer) {
        targetContainer.insertBefore(scriptListSection, targetContainer.firstChild)
    }
})
