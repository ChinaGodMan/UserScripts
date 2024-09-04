// ==UserScript==
// @name       ChatGPT Character Counter Limit (CCCL)
// @description  Adds a character counter to the input field with a limit of 32732 characters. (ChatGPT has a limit of 32732 characters.)
// @name:en         ChatGPT Character Counter Limit (CCCL)
// @description:en  Adds a character counter to the input field with a limit of 32732 characters. (ChatGPT has a limit of 32732 characters.)
// @name:zh-CN      ChatGPT 字符计数器限制 (CCCL)
// @description:zh-CN 添加一个字符计数器到输入框，限制为 32732 个字符。（ChatGPT 的限制是 32732 个字符。）
// @name:zh-HK      ChatGPT 字符計數器限制 (CCCL)
// @description:zh-HK 添加一個字符計數器到輸入框，限制為 32732 個字符。（ChatGPT 的限制是 32732 個字符。）
// @description:zh-MO 添加一個字符計數器到輸入框，限制為 32732 個字符。（ChatGPT 的限制是 32732 個字符。）
// @name:zh-TW      ChatGPT 字符計數器限制 (CCCL)
// @description:zh-TW 添加一個字符計數器到輸入框，限制為 32732 個字符。（ChatGPT 的限制是 32732 個字符。）
// @name:ja         ChatGPT 文字カウンター制限 (CCCL)
// @description:ja  文字数カウンターを入力フィールドに追加し、32732文字の制限があります。（ChatGPTの制限は32732文字です。）
// @name:ko         ChatGPT 문자 카운터 제한 (CCCL)
// @description:ko  입력 필드에 문자 카운터를 추가하며, 32732자의 제한이 있습니다. (ChatGPT의 제한은 32732자입니다.)
// @name:fr         Limiteur de caractères ChatGPT (CCCL)
// @description:fr  Ajoute un compteur de caractères au champ de saisie avec une limite de 32732 caractères. (La limite de ChatGPT est de 32732 caractères.)
// @name:de         ChatGPT Zeichenbegrenzung (CCCL)
// @description:de  Fügt ein Zeichenfeld mit einer Begrenzung von 32732 Zeichen hinzu. (ChatGPT hat eine Begrenzung von 32732 Zeichen.)
// @name:pt         Contador de Caracteres ChatGPT (CCCL)
// @description:pt  Adiciona um contador de caracteres ao campo de entrada com um limite de 32732 caracteres. (O limite do ChatGPT é de 32732 caracteres.)
// @name:es         Contador de Caracteres de ChatGPT (CCCL)
// @description:es  Añade un contador de caracteres al campo de entrada con un límite de 32732 caracteres. (El límite de ChatGPT es de 32732 caracteres.)
// @name:ru         Счётчик символов ChatGPT (CCCL)
// @description:ru  Добавляет счётчик символов в поле ввода с лимитом в 32732 символов. (Ограничение ChatGPT составляет 32732 символов.)
// @name:fi         ChatGPT Merkkilaskurin Rajoitus (CCCL)
// @description:fi  Lisää merkkilaskurin syöttökenttään rajoituksella 32732 merkkiä. (ChatGPT:n raja on 32732 merkkiä.)
// @name:vi         Giới hạn đếm ký tự ChatGPT (CCCL)
// @description:vi  Thêm bộ đếm ký tự vào trường nhập với giới hạn 32732 ký tự. (Giới hạn của ChatGPT là 32732 ký tự.)
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @version 1.3.1.4
// @author       Emree.el on instagram ,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://chatgpt.com/*
// @grant        none
// @license      MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAZlBMVEUAAAD///+hoaFoaGhsbGy7u7vd3d2+vr76+vra2tr29va2trYrKyvg4ODs7OxXV1dgYGCtra0xMTGXl5fExMQ6OjqOjo7R0dEVFRWnp6dSUlIiIiIcHBwLCwt4eHhycnKEhIRHR0f14+hfAAADN0lEQVRYhe1WyZajMAyEsMQshgABEwIJ+f+fbC02W0yHnjnNvNYFDFbZKpUlO86v/e/Wpve/8M4TFckwSvI/cx8z11g2/tw9vZKrEIKe159GUkvwipPxVb4eQQzvYV12XX3Y/x6BT5LqUZkgWixEHF/9/hAAeozz0I8nOtzoccDfg8CbaZQrYkOGYUaEFO2RDUTT4MZefjkMpVcQo5/Wr2DSi9/bhlYPhukvZqf41l3hiiFv8xJR2CslIT+XXfc+YapojY60kG1ZA0rknj+lL4YtnGCQ4lbESSczf5R6Ugc5ee4AoL9KAwbwYXDWXJTXhaDhf2L3R44rxzkbgFgHn55Y0JJjzyeONpYLDn4CCPn7A46VaggjwIB6eEltAOConCUAcZVDXBKIHHgbp9IZ4KW0AZj8LAHaQEzaY0lmHk60AXiQ8XYFEDoVrRpXOmSfdQFfbMe7MuTOJMLU6IJqkh7PuTMVrhosAJCp2xrApA6Lk+p4VllMQjsAcNNkpzeQlKkPHhQb0VkAEgO8TSMaVqhMH/EyW57W2R7moNoBCjwDPg1QzM07QAk7o+wUrIcNwAVZ1ktAROE7gBMaEq4kaW8NgHlQOsrULiUoHjGT40PIqngHOIGYzRK22ggJz3TpbrCt7AMU9gPZwc4y5slJC7FO4woAxmcLgMMi0dF1ymSOtnMEYFDczxqtdJRM6HlAbhSvARIqHG+G5BJGqONoK2opooIMLQFaYMvWs0EJruNRV1b8vy+wqDtbEj2caAcQg5NWdIQL6IJPjIGg1gDKhLINARyxed4DpgLFq+vvKoRiEszGWmlCy0OmcyrqSxKr/eaUzFvDGnDWCX2d5zQmNdJsO4xoz8XeyqcpIdRexZ0BBOYl2r2wyHfwB2WFO0zBjS/Zv2Vc8Pey3l3kor0iR65Q+61Vr6GmttNSOtxRf+jgvfnW3eFa4CZ+3fb1k1q1uC0D3GmKC2s5zkxKvieqWbKQPvFpfbRnNF+pYn/+3ny6m0zW+9eYDIMxlQsbvKuO3zfrV5fWKMc4GLu6G+m2KY/fNNnu6/vu2drTv7fFjVuOP3dHy5MolJEqrKfvoPXp57vpr/3r9gUxwiW4OiuC3wAAAABJRU5ErkJggg==
// ==/UserScript==
(function () {
    'use strict'
    // Function to add character counter and handle its behavior
    function addCharacterCounter() {
        if (document.querySelector('.gpt-charCounter')) {//存在返回
            return
        }
        let textarea = document.querySelector('#prompt-textarea')
        if (textarea) {
            let charCounter = document.createElement('div')
            charCounter.className = 'gpt-charCounter'
            charCounter.style.fontSize = '14px'
            charCounter.style.fontWeight = 'bold'
            charCounter.style.marginTop = '5px'
            charCounter.style.color = 'white'
            charCounter.style.textShadow = '0px 0px 5px white' // Default text shadow
            charCounter.textContent = '0/32732'
            textarea.parentElement.appendChild(charCounter)
            function updateCounter() {
                let charCount = textarea.value.length
                charCounter.textContent = `${charCount}/32732`
                if (charCount > 32732) {
                    charCounter.style.color = 'white'
                    charCounter.style.textShadow = '0px 0px 8px red'
                } else if (charCount > 0) {
                    charCounter.style.color = 'white'
                    charCounter.style.textShadow = '0px 0px 8px green'
                } else {
                    charCounter.style.color = 'white'
                    charCounter.style.textShadow = '0px 0px 5px white'
                }
            }
            textarea.addEventListener('input', function () {
                updateCounter()
            })
            document.querySelector('body').addEventListener('click', function (event) {
                const button = event.target.closest('button[data-testid="send-button"]')
                if (button) updateCounter()
            })
        }
    }
    let lastUrl = location.href
    new MutationObserver(() => {
        const url = location.href
        if (url !== lastUrl) {
            lastUrl = url
            addCharacterCounter()
            console.log("change", url)
        }
    }).observe(document, { subtree: true, childList: true })
    // Run the function after the page loads
    window.addEventListener('load', addCharacterCounter)
})()
