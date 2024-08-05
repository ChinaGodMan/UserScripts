// ==UserScript==
// @name         Remove Link Underlines
// @name:zh-CN   移除链接下划线
// @name:zh-TW   移除链接下划线
// @name:fr      Supprimer les soulignements de liens
// @name:ja      リンクの下线を削除
// @name:de      Links-Unterstreichungen entfernen
// @name:ko      링크 밑줄 제거
// @name:vi      Xóa gạch chân liên kết
// @name:ar      إزالة التسطير من الروابط
// @name:hi      लिंक रेखांकन हटाएं
// @name:es      Eliminar subrayados de enlaces
// @namespace    https://greasyfork.org/users/1169082/
// @version 1.2.0.19
// @description  Remove underlines from all links on any website and dynamically handle new links
// @description:zh-CN 移除所有网站上的链接下划线，并动态处理新链接
// @description:zh-TW 移除所有网站上的连结底线，并动态处理新连结
// @description:fr Supprimer les soulignements de tous les liens sur n'importe quel site Web et gérer dynamiquement les nouveaux liens
// @description:ja 任意のWebサイト上のすべてのリンクの下线を削除し、新しいリンクを动的に処理する
// @description:de Entfernen Sie die Unterstreichungen aller Links auf jeder Website und behandeln Sie neue Links dynamisch
// @description:ko 모든 웹사이트에서 모든 링크의 밑줄을 제거하고 새 링크를 동적으로 처리합니다
// @description:vi Xóa gạch chân khỏi tất cả các liên kết trên bất kỳ trang web nào và xử lý động các liên kết mới
// @description:ar إزالة التسطير من جميع الروابط على أي موقع ويب والتعامل ديناميكيًا مع الروابط الجديدة
// @description:hi किसी भी वेबसाइट पर सभी लिंक से रेखांकन हटाएं और नए लिंक को गतिशील रूप से संभालें
// @description:es Eliminar subrayados de todos los enlaces en cualquier sitio web y manejar dinámicamente nuevos enlaces
// @author       人民的勤务员<toniaiwanowskiskr47@gmail.com> & ChatGPT
// @match        *://*/*
// @run-at document-body
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/498625/Remove%20Link%20Underlines.user.js
// @updateURL https://update.greasyfork.org/scripts/498625/Remove%20Link%20Underlines.meta.js
// ==/UserScript==

//去你妈的下划线。
//2024-06-23 11:23 人民的勤务员 
//2024-07-08 08:33 人民的勤务员 改为CSS
(function () {
    'use strict'

    // 创建一个样式元素
    var style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `
        a {
            text-decoration: none !important;
        }
    `

    // 将样式元素添加到头部
    document.head.appendChild(style)
})()
