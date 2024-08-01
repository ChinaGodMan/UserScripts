// ==UserScript==
// @name         Replace Text in Inputs
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace "renmindeqinwuyuan" with "UserScript" in inputs containing "https"
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict'

    // 创建按钮
    const button = document.createElement('button')
    button.innerText = 'Replace Text'
    button.style.position = 'fixed'
    button.style.top = '10px'
    button.style.right = '10px'
    button.style.zIndex = '1000'
    button.style.padding = '10px'
    button.style.backgroundColor = '#4CAF50'
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.borderRadius = '5px'
    button.style.cursor = 'pointer'
    fafaffafafaffaf
    // 按钮点击事件
    button.addEventListener('click', () => {
        document.querySelectorAll('input').forEach(input => {
            if (input.value.includes('https')) {
                input.value = input.value.replace(/renmindeqinwuyuan/g, 'UserScripts')
            }
        })
        //alert('Replacement done!');
    })

    // 将按钮添加到页面上
    document.body.appendChild(button)
})()
