// ==UserScript==
// @name               ChatGPT Code Box Styling
// @name:zh-CN         ChatGPT代码字体缩小.
// @name:ar            ChatGPT代码字体缩小
// @name:cs            ChatGPTVelikost písma kódu zmenšena
// @name:da            ChatGPTKodeskriftstørrelse reduceret
// @name:de            ChatGPTDie Schriftgröße des Codes wurde reduziert
// @name:el            ChatGPTΜειώθηκε το μέγεθος γραμματοσειράς κώδικα
// @name:en            ChatGPTCode font size reduced
// @name:eo            ChatGPTKoda tiparo grandeco reduktita
// @name:es            ChatGPTTamaño de fuente del código reducido
// @name:fi            ChatGPTKoodin fonttikokoa pienennetty
// @name:fr            ChatGPTTaille de la police du code réduite
// @name:he            ChatGPTגודל גופן הקוד מופחת
// @name:hr            ChatGPTSmanjena veličina fonta koda
// @name:hu            ChatGPTA kód betűmérete csökkentve
// @name:id            ChatGPTUkuran font kode dikurangi
// @name:it            ChatGPTDimensione del carattere del codice ridotta
// @name:ja            ChatGPTコードのフォントサイズが小さくなりました
// @name:ka            ChatGPTკოდის შრიფტის ზომა შემცირდა
// @name:ko            ChatGPT코드 글꼴 크기 감소
// @name:nl            ChatGPTLettergrootte van code verkleind
// @name:nb            ChatGPTKodeskriftstørrelse redusert
// @name:pl            ChatGPTZmniejszono rozmiar czcionki kodu
// @name:pt-BR         ChatGPTTamanho da fonte do código reduzido
// @name:ro            ChatGPTDimensiunea fontului codului a fost redusă
// @name:ru            ChatGPTРазмер шрифта кода уменьшен
// @name:sk            ChatGPTZmenšená veľkosť písma kódu
// @name:sr            ChatGPTСмањена величина фонта кода
// @name:sv            ChatGPTKodens teckensnittsstorlek minskas
// @name:th            ChatGPTขนาดตัวอักษรโค้ดลดลง
// @name:tr            ChatGPTKod yazı tipi boyutu küçültüldü
// @name:ug            ChatGPTكود خەت چوڭلۇقى كىچىكلىتىلدى
// @name:uk            ChatGPTРозмір шрифту коду зменшено
// @name:vi            ChatGPTKích thước phông chữ mã giảm
// @name:zh-TW         ChatGPT程序码字体缩小
// @name:zh-HK         ChatGPT程序码字体缩小
// @name:fr-CA         ChatGPTTaille de la police du code réduite
// @description        Change the font size and enable word wrap in ChatGPT code boxes
// @description:zh-CN  ChatGPT 让代码字体变小 并且自动折行
// @description:ar     ChatGPT جعل خط التعليمات البرمجية أصغر والتفاف تلقائيا
// @description:cs     ChatGPT Zmenšit písmo kódu a automaticky zabalit
// @description:da     ChatGPT Gør kodeskrifttypen mindre og automatisk indpakning
// @description:de     ChatGPT Verkleinern Sie die Codeschrift und automatisch umwickeln
// @description:el     ChatGPT Κάντε τη γραμματοσειρά κώδικα μικρότερη και τυλίγεται αυτόματα
// @description:en     ChatGPT Make code font smaller and automatically wrap
// @description:eo     ChatGPT Malgrandigu kodan tiparon kaj aŭtomate envolvi
// @description:es     ChatGPT Reducir la fuente del código y envolver automáticamente
// @description:fi     ChatGPT Pienennä koodin fonttia ja kääri automaattisesti
// @description:fr     ChatGPT Rendre la police du code plus petite et envelopper automatiquement
// @description:he     ChatGPT הקטן את גופן הקוד ועוטף אוטומטית
// @description:hr     ChatGPT Smanjite font koda i automatski omotati
// @description:hu     ChatGPT Csökkentse a kód betűtípusát és automatikusan becsomagolja
// @description:id     ChatGPT Buat font kode lebih kecil dan secara otomatis membungkus
// @description:it     ChatGPT Rimpicciolisci il carattere del codice e avvolgi automaticamente
// @description:ja     ChatGPT コードのフォントを小さくする そして自动的に折り返す
// @description:ka     ChatGPT გაამცირეთ კოდის შრიფტი და ავტომატურად შეფუთვა
// @description:ko     ChatGPT 코드 글꼴을 더 작게 만들기 자동으로 포장
// @description:nl     ChatGPT Maak het codelettertype kleiner en automatisch inpakken
// @description:nb     ChatGPT Gjør kodeskrift mindre og pakkes inn automatisk
// @description:pl     ChatGPT Zmniejsz czcionkę kodu i automatycznie zawijać
// @description:pt-BR  ChatGPT Diminuir a fonte do código e embrulhar automaticamente
// @description:ro     ChatGPT Faceți fontul codului mai mic și înfășurați automat
// @description:ru     ChatGPT Уменьшить шрифт кода и автоматически обернуть
// @description:sk     ChatGPT Zmenšiť písmo kódu a automaticky zabaliť
// @description:sr     ChatGPT Смањите фонт кода и аутоматски умотати
// @description:sv     ChatGPT Gör kodteckensnittet mindre och linda automatiskt
// @description:th     ChatGPT ทำให้โค้ดฟอนต์เล็กลง และห่ออัตโนมัติ
// @description:tr     ChatGPT Kod yazı tipini küçültün ve otomatik olarak sar
// @description:ug     ChatGPT كود خەت نۇسخىسىنى كىچىكرەك قىلىڭ ھەمدە ئاپتوماتىك ئورايدۇ
// @description:uk     ChatGPT Зменшіть шрифт коду і автоматично обернути
// @description:vi     ChatGPT Làm cho phông chữ mã nhỏ hơn và tự động bọc
// @description:zh-TW  ChatGPT 让程序码字体变小 并且自动折行
// @description:zh-HK  ChatGPT 让程序码字体变小 并且自动折行
// @description:fr-CA  ChatGPT Rendre la police du code plus petite et envelopper automatiquement

// @namespace          https://github.com/ChinaGodMan/UserScripts
// @version            0.1.1.0
// @author             人民的勤务员 <china.qinwuyuan@gmail.com>
// @match              https://chatgpt.com/*
// @grant              none
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @icon               data:image/png;base64,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
// ==/UserScript==

function addCustomCSS() {
    const css = `
        pre code {
            font-size: 12px !important; /* 设置字体大小为12px */
            white-space: pre-wrap !important; /* 设置自动换行 */
            word-break: break-word !important; /* 设置单词断行 */
        }
        pre {
            overflow-x: auto !important; /* 允许水平滚动 */
        }
    `

    function applyStyles() {
        let styleNode = document.createElement('style')
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector('head') || document.documentElement).appendChild(styleNode)
    }

    // 初次应用样式
    applyStyles()

    setInterval(() => {
        // 检查样式是否仍在<head>中
        const styles = document.querySelectorAll('style')
        const styleExists = Array.from(styles).some(style => style.textContent.includes(css))

        if (!styleExists) {
            applyStyles() // 如果样式不存在，则重新应用
        }
    }, 300)
}

// 调用函数以添加自定义CSS
addCustomCSS()
