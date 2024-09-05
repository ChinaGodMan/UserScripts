// ==UserScript==
// @name         ChatGPT Code Box Styling
// @description  Change the font size and enable word wrap in ChatGPT code boxes
// @name:zh-CN      ChatGPT代码字体缩小
// @description:zh-CN ChatGPT 让代码字体变小 并且自动折行
// @name:ar      ChatGPT代码字体缩小
// @description:ar ChatGPT جعل خط التعليمات البرمجية أصغر والتفاف تلقائيا
// @name:cs      ChatGPTVelikost písma kódu zmenšena
// @description:cs ChatGPT Zmenšit písmo kódu a automaticky zabalit
// @name:da      ChatGPTKodeskriftstørrelse reduceret
// @description:da ChatGPT Gør kodeskrifttypen mindre og automatisk indpakning
// @name:de      ChatGPTDie Schriftgröße des Codes wurde reduziert
// @description:de ChatGPT Verkleinern Sie die Codeschrift und automatisch umwickeln
// @name:el      ChatGPTΜειώθηκε το μέγεθος γραμματοσειράς κώδικα
// @description:el ChatGPT Κάντε τη γραμματοσειρά κώδικα μικρότερη και τυλίγεται αυτόματα
// @name:en      ChatGPTCode font size reduced
// @description:en ChatGPT Make code font smaller and automatically wrap
// @name:eo      ChatGPTKoda tiparo grandeco reduktita
// @description:eo ChatGPT Malgrandigu kodan tiparon kaj aŭtomate envolvi
// @name:es      ChatGPTTamaño de fuente del código reducido
// @description:es ChatGPT Reducir la fuente del código y envolver automáticamente
// @name:fi      ChatGPTKoodin fonttikokoa pienennetty
// @description:fi ChatGPT Pienennä koodin fonttia ja kääri automaattisesti
// @name:fr      ChatGPTTaille de la police du code réduite
// @description:fr ChatGPT Rendre la police du code plus petite et envelopper automatiquement
// @name:he      ChatGPTגודל גופן הקוד מופחת
// @description:he ChatGPT הקטן את גופן הקוד ועוטף אוטומטית
// @name:hr      ChatGPTSmanjena veličina fonta koda
// @description:hr ChatGPT Smanjite font koda i automatski omotati
// @name:hu      ChatGPTA kód betűmérete csökkentve
// @description:hu ChatGPT Csökkentse a kód betűtípusát és automatikusan becsomagolja
// @name:id      ChatGPTUkuran font kode dikurangi
// @description:id ChatGPT Buat font kode lebih kecil dan secara otomatis membungkus
// @name:it      ChatGPTDimensione del carattere del codice ridotta
// @description:it ChatGPT Rimpicciolisci il carattere del codice e avvolgi automaticamente
// @name:ja      ChatGPTコードのフォントサイズが小さくなりました
// @description:ja ChatGPT コードのフォントを小さくする そして自动的に折り返す
// @name:ka      ChatGPTკოდის შრიფტის ზომა შემცირდა
// @description:ka ChatGPT გაამცირეთ კოდის შრიფტი და ავტომატურად შეფუთვა
// @name:ko      ChatGPT코드 글꼴 크기 감소
// @description:ko ChatGPT 코드 글꼴을 더 작게 만들기 자동으로 포장
// @name:nl      ChatGPTLettergrootte van code verkleind
// @description:nl ChatGPT Maak het codelettertype kleiner en automatisch inpakken
// @name:nb      ChatGPTKodeskriftstørrelse redusert
// @description:nb ChatGPT Gjør kodeskrift mindre og pakkes inn automatisk
// @name:pl      ChatGPTZmniejszono rozmiar czcionki kodu
// @description:pl ChatGPT Zmniejsz czcionkę kodu i automatycznie zawijać
// @name:pt-BR      ChatGPTTamanho da fonte do código reduzido
// @description:pt-BR ChatGPT Diminuir a fonte do código e embrulhar automaticamente
// @name:ro      ChatGPTDimensiunea fontului codului a fost redusă
// @description:ro ChatGPT Faceți fontul codului mai mic și înfășurați automat
// @name:ru      ChatGPTРазмер шрифта кода уменьшен
// @description:ru ChatGPT Уменьшить шрифт кода и автоматически обернуть
// @name:sk      ChatGPTZmenšená veľkosť písma kódu
// @description:sk ChatGPT Zmenšiť písmo kódu a automaticky zabaliť
// @name:sr      ChatGPTСмањена величина фонта кода
// @description:sr ChatGPT Смањите фонт кода и аутоматски умотати
// @name:sv      ChatGPTKodens teckensnittsstorlek minskas
// @description:sv ChatGPT Gör kodteckensnittet mindre och linda automatiskt
// @name:th      ChatGPTขนาดตัวอักษรโค้ดลดลง
// @description:th ChatGPT ทำให้โค้ดฟอนต์เล็กลง และห่ออัตโนมัติ
// @name:tr      ChatGPTKod yazı tipi boyutu küçültüldü
// @description:tr ChatGPT Kod yazı tipini küçültün ve otomatik olarak sar
// @name:ug      ChatGPTكود خەت چوڭلۇقى كىچىكلىتىلدى
// @description:ug ChatGPT كود خەت نۇسخىسىنى كىچىكرەك قىلىڭ ھەمدە ئاپتوماتىك ئورايدۇ
// @name:uk      ChatGPTРозмір шрифту коду зменшено
// @description:uk ChatGPT Зменшіть шрифт коду і автоматично обернути
// @name:vi      ChatGPTKích thước phông chữ mã giảm
// @description:vi ChatGPT Làm cho phông chữ mã nhỏ hơn và tự động bọc
// @name:zh-TW      ChatGPT程序码字体缩小
// @description:zh-TW ChatGPT 让程序码字体变小 并且自动折行
// @name:zh-HK      ChatGPT程序码字体缩小
// @description:zh-HK ChatGPT 让程序码字体变小 并且自动折行
// @name:fr-CA      ChatGPTTaille de la police du code réduite
// @description:fr-CA ChatGPT Rendre la police du code plus petite et envelopper automatiquement
 
// @namespace   https://greasyfork.org/users/1169082/
// @version 0.1.0.14
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://chatgpt.com/*
// @grant        none
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// ==/UserScript==
 
 
(function () {
    'use strict'
 
    // 创建并插入自定义的CSS样式
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `
        pre code {
            font-size: 12px !important; /* 设置字体大小为12px */
            white-space: pre-wrap !important; /* 设置自动换行 */
            word-break: break-word !important; /* 设置单词断行 */
        }
 
        pre {
            overflow-x: auto !important; /* 允许水平滚动 */
        }
    `
    document.head.appendChild(style)
})()
