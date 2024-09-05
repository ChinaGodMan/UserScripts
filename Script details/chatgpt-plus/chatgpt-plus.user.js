// ==UserScript==
// @name         ChatGPT Chat Fold Script & MAXWidth
// @description Fold long "You" messages in ChatGPT
// @name:zh-CN   ChatGPT 折叠自己消息和最大宽度
// @description:zh-CN 折叠ChatGPT中较长的“你”消息，并设置最大宽度
// @name:ar   ChatGPT طي الرسالة الذاتية والحد الأقصى للعرض
// @description:ar طيةChatGPTمتوسطة وطويلة“أنت”معلومة，وتعيين الحد الأقصى للعرض
// @name:bg   ChatGPT Свиване на собственото съобщение и максимална ширина
// @description:bg гънкаChatGPTсредно и дълго“вие”информация，и задайте максималната ширина
// @name:cs   ChatGPT Sbalit vlastní zprávu a maximální šířku
// @description:cs složitChatGPTstřední a dlouhé“Vy”informace，a nastavte maximální šířku
// @name:da   ChatGPT Skjul selvbesked og maks. bredde
// @description:da foldeChatGPTmedium og lang“du”information，og indstil den maksimale bredde
// @name:de   ChatGPT Selbstnachricht minimieren und maximale Breite erreichen
// @description:de faltenChatGPTmittel und lang“Du”Information，und stellen Sie die maximale Breite ein
// @name:el   ChatGPT Σύμπτυξη αυτο μηνύματος και μέγιστο πλάτος
// @description:el πτυχήChatGPTμεσαίο και μακρύ“εσείς”πληροφορίες，και ορίστε το μέγιστο πλάτος
// @name:en   ChatGPT Collapse self message and max width
// @description:en foldChatGPTmedium and long“you”information，and set the maximum width
// @name:eo   ChatGPT Kolapu mem-mesaĝon kaj maksimuman larĝon
// @description:eo faldiChatGPTmeza kaj longa“vi”informoj，kaj starigu la maksimuman larĝon
// @name:es   ChatGPT Contraer automensaje y ancho máximo
// @description:es doblarChatGPTmedio y largo“tú”información，y establecer el ancho máximo
// @name:fi   ChatGPT Tiivistä itseviesti ja enimmäisleveys
// @description:fi taitaChatGPTkeskipitkä ja pitkä“sinä”tiedot，ja aseta suurin leveys
// @name:fr   ChatGPT Réduire le message personnel et la largeur maximale
// @description:fr pliChatGPTmoyen et long“toi”information，et définissez la largeur maximale
// @name:he   ChatGPT כווץ הודעה עצמית ורוחב מקסימלי
// @description:he לְקַפֵּלChatGPTבינוני וארוך“אַתָה”מֵידָע，והגדר את הרוחב המרבי
// @name:hr   ChatGPT Sažmi vlastitu poruku i maksimalnu širinu
// @description:hr presavijatiChatGPTsrednje i duge“vas”informacija，i postavite maksimalnu širinu
// @name:hu   ChatGPT Saját üzenet összecsukása és maximális szélessége
// @description:hu hajtogatniChatGPTközepes és hosszú“te”információ，és állítsa be a maximális szélességet
// @name:id   ChatGPT Ciutkan pesan mandiri dan lebar maksimal
// @description:id melipatChatGPTsedang dan panjang“Anda”informasi，dan atur lebar maksimum
// @name:it   ChatGPT Comprimi il messaggio personale e la larghezza massima
// @description:it piegaChatGPTmedio e lungo“Voi”informazioni，e impostare la larghezza massima
// @name:ja   ChatGPT セルフメッセージと最大幅を折りたたむ
// @description:ja 折り畳みChatGPTミディアムとロング“あなた”情報，最大幅を設定します
// @name:ka   ChatGPT საკუთარი შეტყობინების ჩაკეცვა და მაქსიმალური სიგანე
// @description:ka ჩამოყაროსChatGPTსაშუალო და გრძელი“შენ”ინფორმაცია，და დააყენეთ მაქსიმალური სიგანე
// @name:ko   ChatGPT 자체 메시지 및 최대 너비 축소
// @description:ko 겹ChatGPT중간 및 긴“너”정보，그리고 최대 너비를 설정하세요
// @name:nl   ChatGPT Zelfbericht en maximale breedte samenvouwen
// @description:nl vouwChatGPTmiddellang en lang“Jij”informatie，en stel de maximale breedte in
// @name:nb   ChatGPT Skjul selvmelding og maks bredde
// @description:nb bretteChatGPTmiddels og lang“du”informasjon，og still inn maksimal bredde
// @name:pl   ChatGPT Zwiń wiadomość własną i maksymalną szerokość
// @description:pl zginaćChatGPTśrednie i długie“Ty”informacja，i ustaw maksymalną szerokość
// @name:pt-BR   ChatGPT Recolher mensagem própria e largura máxima
// @description:pt-BR dobrarChatGPTmédio e longo“você”Informação，e defina a largura máxima
// @name:ro   ChatGPT Restrângeți mesajul propriu și lățimea maximă
// @description:ro pliazăChatGPTmediu și lung“tu”informaţii，și setați lățimea maximă
// @name:ru   ChatGPT Свернуть собственное сообщение и максимальную ширину
// @description:ru складыватьChatGPTсредний и длинный“ты”информация，и установите максимальную ширину
// @name:sk   ChatGPT Zbaliť vlastnú správu a maximálnu šírku
// @description:sk zložiťChatGPTstredné a dlhé“vy”informácie，a nastavte maximálnu šírku
// @name:sr   ChatGPT Скупи самопоруку и максималну ширину
// @description:sr фолдChatGPTсредње и дуго“ти”информације，и поставите максималну ширину
// @name:sv   ChatGPT Komprimera självmeddelande och maxbredd
// @description:sv vikaChatGPTmedium och lång“du”information，och ställ in maximal bredd
// @name:th   ChatGPT ยุบข้อความของตัวเองและความกว้างสูงสุด
// @description:th พับChatGPTปานกลางและยาว“คุณ”ข้อมูล，และกำหนดความกว้างสูงสุด
// @name:tr   ChatGPT Kendi kendine mesajı ve maksimum genişliği daralt
// @description:tr katlamakChatGPTorta ve uzun“Sen”bilgi，ve maksimum genişliği ayarlayın
// @name:ug   ChatGPT ئۆزلۈكىدىن ئۇچۇر ۋە ئەڭ چوڭ كەڭلىك
// @description:ug قاتلاشChatGPTئوتتۇرا ۋە ئۇزۇن“سىز”ئۇچۇر，ھەمدە ئەڭ چوڭ كەڭلىكىنى بەلگىلەڭ
// @name:uk   ChatGPT Згорнути власне повідомлення та максимальну ширину
// @description:uk складкаChatGPTсередні і довгі“ти”інформації，і встановити максимальну ширину
// @name:vi   ChatGPT Thu gọn tin nhắn tự và chiều rộng tối đa
// @description:vi nếp gấpChatGPTtrung bình và dài“Bạn”thông tin，và đặt chiều rộng tối đa
// @name:zh-TW   ChatGPT 折疊自己訊息和最大寬度
// @description:zh-TW 折疊ChatGPT中較長的“你”訊息，並設定最大寬度
// @name:zh-HK   ChatGPT 折疊自己訊息和最大寬度
// @description:zh-HK 折疊ChatGPT中較長的“你”訊息，並設定最大寬度
// @name:fr-CA   ChatGPT Réduire le message personnel et la largeur maximale
// @description:fr-CA pliChatGPTmoyen et long“toi”information，et définissez la largeur maximale
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @version 0.1.0.16
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://chatgpt.com/*
// @match      https://share.nezhagpt.cloud/*
// @match      https://new.oaifree.com/*
// @grant        none
// @license      MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// ==/UserScript==

(function () {
    'use strict'
    //MAX WIGHT
    let css = `
    .md\\:max-w-3xl {
        max-width: 100%;
    }
`
    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css)//// homepageURL https://gitlab.com/breatfr/chatgpt-responsive
        //  https://discord.gg/Q8KSHzdBxs
    } else {
        let styleNode = document.createElement("style")
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode)
    }
    // Your code here...
    window.addEventListener('load', function () {
        // Function to fold long messages
        function foldLongMessages() {
            const messages = document.querySelectorAll('div[data-message-author-role="user"]')

            messages.forEach(message => {
                if (message.innerText.split('\n').length > 3) {
                    message.style.overflow = 'hidden'
                    message.style.height = '100px' // Adjust as needed
                    message.style.cursor = 'pointer'

                    // Click to expand
                    message.addEventListener('click', function () {
                        if (message.style.overflow === 'hidden') {
                            message.style.overflow = 'visible'
                            message.style.height = 'auto'
                        } else {
                            message.style.overflow = 'hidden'
                            message.style.height = '100px'
                        }
                    })
                }
            })
        }

        // Run the function and also set an interval to handle dynamic content
        foldLongMessages()
        setInterval(foldLongMessages, 1000)
    })
})()
