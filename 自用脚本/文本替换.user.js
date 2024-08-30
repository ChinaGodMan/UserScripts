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
    button.style.top = '100px'
    button.style.right = '10px'
    button.style.zIndex = '1000'
    button.style.padding = '10px'
    button.style.backgroundColor = '#4CAF50'
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.borderRadius = '5px'
    button.style.cursor = 'pointer'

    // 创建显示匹配关键字的文本框
    const keywordTextBox = document.createElement('textarea')
    keywordTextBox.style.position = 'fixed'
    keywordTextBox.style.top = '150px'
    keywordTextBox.style.left = '10px'
    keywordTextBox.style.zIndex = '1000'
    keywordTextBox.style.width = '300px'
    keywordTextBox.style.height = '150px'
    keywordTextBox.style.padding = '10px'
    keywordTextBox.style.backgroundColor = '#f0f0f0'
    keywordTextBox.style.border = '1px solid #ccc'
    keywordTextBox.style.borderRadius = '5px'
    keywordTextBox.readOnly = true

    // 创建显示替换文本的文本框
    const replacementTextBox = document.createElement('textarea')
    replacementTextBox.style.position = 'fixed'
    replacementTextBox.style.top = '310px'
    replacementTextBox.style.left = '10px'
    replacementTextBox.style.zIndex = '1000'
    replacementTextBox.style.width = '300px'
    replacementTextBox.style.height = '150px'
    replacementTextBox.style.padding = '10px'
    replacementTextBox.style.backgroundColor = '#f0f0f0'
    replacementTextBox.style.border = '1px solid #ccc'
    replacementTextBox.style.borderRadius = '5px'
    replacementTextBox.readOnly = true

    // 读取替换规则并创建一个 Map
    async function loadReplaceRules() {
        const response = await fetch('http://127.0.0.1:5500/%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC/1.txt')
        const text = await response.text()
        const rules = text.split('\n').map(line => {
            const [replacement, keyword] = line.split('@')
            return { keyword: keyword.trim(), replacement: replacement.trim() }
        })
        return rules
    }
    let key = ""
    let re = ""

    // 更新文本框内容
    async function updateTextBoxes() {
        const replaceRules = await loadReplaceRules()
        let matchedKeywords = []
        let replacementTexts = []

        document.querySelectorAll('input').forEach(input => {
            replaceRules.forEach(rule => {
                if (input.value.includes(rule.keyword)) {
                    if (!matchedKeywords.includes(rule.keyword)) {
                        matchedKeywords.push(rule.keyword)
                        key = rule.keyword
                        re = rule.replacement
                        replacementTexts.push(rule.replacement)
                    }
                }
            })
        })

        // 更新文本框内容
        keywordTextBox.value = matchedKeywords.length > 0 ? matchedKeywords.join('\n') : '没有匹配的关键字'
        replacementTextBox.value = replacementTexts.length > 0 ? replacementTexts.join('\n') : '没有替换文本'
    }

    // 执行替换操作
    async function replaceText() {


        document.querySelectorAll('input').forEach(input => {
            if (input.value.includes('https')) {
                const originalValue = input.value // 记录原始值
                console.log(originalValue)
                input.value = input.value.replace(key, re)
                if (input.value !== originalValue) { // 检查替换是否成功
                    input.style.backgroundColor = 'red' // 将背景颜色改为红色
                }
            }
            if (input.value.includes('https')) {
                const originalValue = input.value // 记录原始值
                console.log(originalValue)

                // 使用正则表达式替换 "Script%20details/" 和 "/READ" 之间的文本
                input.value = input.value.replace(/Script%20details\/.*?\/READ/, `Script%20details/${re}/READ`)

                if (input.value !== originalValue) { // 检查替换是否成功
                    input.style.backgroundColor = 'red' // 将背景颜色改为红色
                }
            }

        })

        // alert('Replacement done!');
    }


    // 按钮点击事件
    button.addEventListener('click', replaceText)

    // 页面加载时自动更新文本框
    window.addEventListener('load', updateTextBoxes)

    // 将按钮和文本框添加到页面上
    document.body.appendChild(button)
    document.body.appendChild(keywordTextBox)
    document.body.appendChild(replacementTextBox)



})()

