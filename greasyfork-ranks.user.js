// ==UserScript==
// @name         Greasyfork Script Display Rating
// @name:zh-CN         Greasyfork 脚本显示评分
// @name:zh-TW         Greasyfork 脚本顯示評分
// @name:en      Display the script rating after the script list name
// @name:fr      Afficher la note du sc\ript après le nom de la liste de scripts
// @name:ja      スクリプトリスト名の後にスクリプト評価を表示する
// @name:ko      스크립트 목록 이름 뒤에 스크립트 평가 표시
// @namespace    https://github.com/10086100886/
// @version 1.3.3.47
// @description     Add the script rating after the script name when browsing the script list
// @description:en  Add the script rating after the script name when browsing the script list
// @description:fr  Ajouter la note du script après le nom du script lors de la navigation dans la liste des scripts
// @description:ja  スクリプトリストを閲覧する際にスクリプト名の後にスクリプト評価を追加する
// @description:ko  스크립트 목록을 탐색할 때 스크립트 이름 뒤에 스크립트 평가 추가
// @description:zh-CN 在浏览脚本列表时在脚本名称后面添加脚本评分
// @description:zh-TW  在瀏覽腳本列表時在腳本名稱後面添加腳本評分
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @license      MIT
// @grant        none
// @icon           https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
(function () {
    'use strict'
    // 检测脚本列表的出现，并自动插入评分
    function observeScriptList() {
        const scriptList = document.querySelector('.script-list')
        if (scriptList) {
            // 插入评分
            insertRatings(scriptList)
            // 配置观察器
            const observer = new MutationObserver(function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        for (let node of mutation.addedNodes) {
                            // 检查是否为脚本列表项
                            if (node.nodeType === Node.ELEMENT_NODE && node.matches('li[data-script-id]')) {
                                insertRating(node)
                            }
                        }
                    }
                }
            })
            // 开始观察脚本列表的变化
            observer.observe(scriptList, { childList: true, subtree: true })
        }
    }
    // 插入评分
    function insertRating(scriptBlock) {
        const ratingElement = scriptBlock.querySelector('dd.script-list-ratings')
        if (ratingElement) {
            const rating = ratingElement.getAttribute('data-rating-score')
            const ratingDisplay = document.createElement('span')
            ratingDisplay.textContent = rating.replace(/[^\d.]/g, '')
            ratingDisplay.style.marginLeft = '30px'
            ratingDisplay.style.fontSize = '1em'
            ratingDisplay.style.color = '#ff8c00'
            ratingDisplay.style.fontWeight = 'bold'
            const titleElement = scriptBlock.querySelector('.script-link')
            if (titleElement) {
                titleElement.insertAdjacentElement('afterend', ratingDisplay)
            }
        }
    }
    // 插入评分到当前页面的脚本列表中
    function insertRatings(scriptList) {
        const scriptBlocks = scriptList.querySelectorAll('li[data-script-id]')
        scriptBlocks.forEach(insertRating)
    }
    // 开始观察当前页面脚本列表的出现
    observeScriptList()
    // 观察 body 元素以检测页面加载了下一页
    const bodyObserver = new MutationObserver(function (mutationsList, observer) {
        mutationsList.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('.script-list')) {
                    // 页面加载了下一页，自动插入评分
                    insertRatings(node)
                }
            })
        })
    })
    // 开始观察 body 元素的子节点变化
    bodyObserver.observe(document.body, { childList: true, subtree: true })
})()
