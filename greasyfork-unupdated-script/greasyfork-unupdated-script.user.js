// ==UserScript==
// @name               Greasyfork Highlight Unupdated Scripts
// @name:zh-CN         Greasyfork 未更新脚本高亮
// @description        Greasyfork shows the background of outdated scripts in light red to make it easier to identify these outdated scripts.
// @description:zh-CN  Greasyfork 未更新的脚本背景显示为浅红色,方便识别这些未更新脚本
// @author             AN drew,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @match              https://greasyfork.org/*/users/*
// @match              https://greasyfork.org/*/scripts*
// @icon               https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/greasyfork-utility-toolkit.svg
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.4.1
// @grant              GM_setValue
// @grant              GM_getValue
// @grant              GM_registerMenuCommand
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-unupdated-script/greasyfork-unupdated-script.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-unupdated-script/greasyfork-unupdated-script.user.js
// ==/UserScript==

const Days = GM_getValue('days', 30) // 默认30天
const threshold = Days * 24 * 60 * 60 * 1000
GM_registerMenuCommand('Settings', () => {
    const userInput = prompt('Enter the number of days:', Days)
    if (userInput !== null) {
        const parsedInput = parseInt(userInput, 10)
        if (!isNaN(parsedInput) && parsedInput > 0) {
            GM_setValue('days', parsedInput)
        } else {
            alert('Invalid input. Please enter a positive number.')
        }
    }
})
document.querySelectorAll('dd.script-list-updated-date').forEach(function (dd) {
    const relativeTime = dd.querySelector('relative-time')
    if (relativeTime) {
        const time1 = new Date(relativeTime.getAttribute('datetime'))
        const time2 = new Date()
        if (time2.getTime() - time1.getTime() > threshold) {
            relativeTime.style.color = 'red'
            dd.closest('li').style.background = '#ff000008'
        }
    }
})
