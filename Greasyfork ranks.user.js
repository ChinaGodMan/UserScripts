// ==UserScript==

// @name         Greasyfork 脚本显示评分

// @namespace    https://github.com/10086100886/

// @version      1.3.2

// @description  在每个脚本名称后面添加脚本评分 

// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>

// @match        https://greasyfork.org/* 
// @match        https://sleazyfork.org/* 
// @license      MIT


// @grant        none

// @icon         https://www.google.com/s2/favicons?domain=greasyfork.org


// ==/UserScript==

(function() {

    'use strict';

    // 检测脚本列表的出现，并自动插入评分

    function observeScriptList() {

        const scriptList = document.querySelector('.script-list');

        if (scriptList) {

            // 插入评分

            insertRatings(scriptList);



            // 配置观察器

            const observer = new MutationObserver(function(mutationsList， observer) {

                for (let mutation of mutationsList) {

                    if (mutation.type === 'childList') {

                        for (let node of mutation.addedNodes) {

                            // 检查是否为脚本列表项

                            if (node.nodeType === Node.ELEMENT_NODE && node.matches('li[data-script-id]')) {

                                insertRating(node);

                            }

                        }

                    }

                }

            });

            // 开始观察脚本列表的变化

            observer.observe(scriptList, { childList: true, subtree: true });

        }

    }

    // 插入评分

    function insertRating(scriptBlock) {

        const ratingElement = scriptBlock.querySelector('dd.script-list-ratings');

        if (ratingElement) {

            const rating = ratingElement.getAttribute('data-rating-score');

            const ratingDisplay = document.createElement('span');

            ratingDisplay.textContent = rating.replace(/[^\d.]/g, '');

            ratingDisplay.style.marginLeft = '30px';

            ratingDisplay.style.fontSize = '1em';

            ratingDisplay.style.color = '#ff8c00';

            ratingDisplay.style.fontWeight = 'bold';

            const titleElement = scriptBlock.querySelector('.script-link');

            if (titleElement) {

                titleElement.insertAdjacentElement('afterend', ratingDisplay);

            }

        }

    }

    // 插入评分到当前页面的脚本列表中

    function insertRatings(scriptList) {

        const scriptBlocks = scriptList.querySelectorAll('li[data-script-id]');

        scriptBlocks.forEach(insertRating);

    }

    // 开始观察当前页面脚本列表的出现

    observeScriptList();

    // 观察 body 元素以检测页面加载了下一页

    const bodyObserver = new MutationObserver(function(mutationsList, observer) {

        mutationsList.forEach(mutation => {

            mutation.addedNodes.forEach(node => {

                if (node.nodeType === Node.ELEMENT_NODE && node.matches('.script-list')) {

                    // 页面加载了下一页，自动插入评分

                    insertRatings(node);

                }

            });

        });

    });

    // 开始观察 body 元素的子节点变化

    bodyObserver.observe(document.body, { childList: true, subtree: true });

})();

