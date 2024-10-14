// ==UserScript==
// @name              ChatGPT Chat Fold Script & MAXWidth
// @description       Fold long "You" messages in ChatGPT
// @name:zh-CN        ChatGPT 折叠自己消息和最大宽度
// @description:zh-CN 折叠ChatGPT中较长的“你”消息，并设置最大宽度
// @name:ar           ChatGPT طي الرسالة الذاتية والحد الأقصى للعرض
// @description:ar    طيةChatGPTمتوسطة وطويلة“أنت”معلومة，وتعيين الحد الأقصى للعرض
// @name:bg           ChatGPT Свиване на собственото съобщение и максимална ширина
// @description:bg    гънкаChatGPTсредно и дълго“вие”информация，и задайте максималната ширина
// @name:cs           ChatGPT Sbalit vlastní zprávu a maximální šířku
// @description:cs    složitChatGPTstřední a dlouhé“Vy”informace，a nastavte maximální šířku
// @name:da           ChatGPT Skjul selvbesked og maks. bredde
// @description:da    foldeChatGPTmedium og lang“du”information，og indstil den maksimale bredde
// @name:de           ChatGPT Selbstnachricht minimieren und maximale Breite erreichen
// @description:de    faltenChatGPTmittel und lang“Du”Information，und stellen Sie die maximale Breite ein
// @name:el           ChatGPT Σύμπτυξη αυτο μηνύματος και μέγιστο πλάτος
// @description:el    πτυχήChatGPTμεσαίο και μακρύ“εσείς”πληροφορίες，και ορίστε το μέγιστο πλάτος
// @name:en           ChatGPT Collapse self message and max width
// @description:en    foldChatGPTmedium and long“you”information，and set the maximum width
// @name:eo           ChatGPT Kolapu mem-mesaĝon kaj maksimuman larĝon
// @description:eo    faldiChatGPTmeza kaj longa“vi”informoj，kaj starigu la maksimuman larĝon
// @name:es           ChatGPT Contraer automensaje y ancho máximo
// @description:es    doblarChatGPTmedio y largo“tú”información，y establecer el ancho máximo
// @name:fi           ChatGPT Tiivistä itseviesti ja enimmäisleveys
// @description:fi    taitaChatGPTkeskipitkä ja pitkä“sinä”tiedot，ja aseta suurin leveys
// @name:fr           ChatGPT Réduire le message personnel et la largeur maximale
// @description:fr    pliChatGPTmoyen et long“toi”information，et définissez la largeur maximale
// @name:he           ChatGPT כווץ הודעה עצמית ורוחב מקסימלי
// @description:he    לְקַפֵּלChatGPTבינוני וארוך“אַתָה”מֵידָע，והגדר את הרוחב המרבי
// @name:hr           ChatGPT Sažmi vlastitu poruku i maksimalnu širinu
// @description:hr    presavijatiChatGPTsrednje i duge“vas”informacija，i postavite maksimalnu širinu
// @name:hu           ChatGPT Saját üzenet összecsukása és maximális szélessége
// @description:hu    hajtogatniChatGPTközepes és hosszú“te”információ，és állítsa be a maximális szélességet
// @name:id           ChatGPT Ciutkan pesan mandiri dan lebar maksimal
// @description:id    melipatChatGPTsedang dan panjang“Anda”informasi，dan atur lebar maksimum
// @name:it           ChatGPT Comprimi il messaggio personale e la larghezza massima
// @description:it    piegaChatGPTmedio e lungo“Voi”informazioni，e impostare la larghezza massima
// @name:ja           ChatGPT セルフメッセージと最大幅を折りたたむ
// @description:ja    折り畳みChatGPTミディアムとロング“あなた”情報，最大幅を設定します
// @name:ka           ChatGPT საკუთარი შეტყობინების ჩაკეცვა და მაქსიმალური სიგანე
// @description:ka    ჩამოყაროსChatGPTსაშუალო და გრძელი“შენ”ინფორმაცია，და დააყენეთ მაქსიმალური სიგანე
// @name:ko           ChatGPT 자체 메시지 및 최대 너비 축소
// @description:ko    겹ChatGPT중간 및 긴“너”정보，그리고 최대 너비를 설정하세요
// @name:nl           ChatGPT Zelfbericht en maximale breedte samenvouwen
// @description:nl    vouwChatGPTmiddellang en lang“Jij”informatie，en stel de maximale breedte in
// @name:nb           ChatGPT Skjul selvmelding og maks bredde
// @description:nb    bretteChatGPTmiddels og lang“du”informasjon，og still inn maksimal bredde
// @name:pl           ChatGPT Zwiń wiadomość własną i maksymalną szerokość
// @description:pl    zginaćChatGPTśrednie i długie“Ty”informacja，i ustaw maksymalną szerokość
// @name:pt-BR        ChatGPT Recolher mensagem própria e largura máxima
// @description:pt-BR dobrarChatGPTmédio e longo“você”Informação，e defina a largura máxima
// @name:ro           ChatGPT Restrângeți mesajul propriu și lățimea maximă
// @description:ro    pliazăChatGPTmediu și lung“tu”informaţii，și setați lățimea maximă
// @name:ru           ChatGPT Свернуть собственное сообщение и максимальную ширину
// @description:ru    складыватьChatGPTсредний и длинный“ты”информация，и установите максимальную ширину
// @name:sk           ChatGPT Zbaliť vlastnú správu a maximálnu šírku
// @description:sk    zložiťChatGPTstredné a dlhé“vy”informácie，a nastavte maximálnu šírku
// @name:sr           ChatGPT Скупи самопоруку и максималну ширину
// @description:sr    фолдChatGPTсредње и дуго“ти”информације，и поставите максималну ширину
// @name:sv           ChatGPT Komprimera självmeddelande och maxbredd
// @description:sv    vikaChatGPTmedium och lång“du”information，och ställ in maximal bredd
// @name:th           ChatGPT ยุบข้อความของตัวเองและความกว้างสูงสุด
// @description:th    พับChatGPTปานกลางและยาว“คุณ”ข้อมูล，และกำหนดความกว้างสูงสุด
// @name:tr           ChatGPT Kendi kendine mesajı ve maksimum genişliği daralt
// @description:tr    katlamakChatGPTorta ve uzun“Sen”bilgi，ve maksimum genişliği ayarlayın
// @name:ug           ChatGPT ئۆزلۈكىدىن ئۇچۇر ۋە ئەڭ چوڭ كەڭلىك
// @description:ug    قاتلاشChatGPTئوتتۇرا ۋە ئۇزۇن“سىز”ئۇچۇر，ھەمدە ئەڭ چوڭ كەڭلىكىنى بەلگىلەڭ
// @name:uk           ChatGPT Згорнути власне повідомлення та максимальну ширину
// @description:uk    складкаChatGPTсередні і довгі“ти”інформації，і встановити максимальну ширину
// @name:vi           ChatGPT Thu gọn tin nhắn tự và chiều rộng tối đa
// @description:vi    nếp gấpChatGPTtrung bình và dài“Bạn”thông tin，và đặt chiều rộng tối đa
// @name:zh-TW        ChatGPT 折疊自己訊息和最大寬度
// @description:zh-TW 折疊ChatGPT中較長的“你”訊息，並設定最大寬度
// @name:zh-HK        ChatGPT 折疊自己訊息和最大寬度
// @description:zh-HK 折疊ChatGPT中較長的“你”訊息，並設定最大寬度
// @name:fr-CA        ChatGPT Réduire le message personnel et la largeur maximale
// @description:fr-CA pliChatGPTmoyen et long“toi”information，et définissez la largeur maximale
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @version           0.3.0.0
// @author            人民的勤务员 <china.qinwuyuan@gmail.com>
// @match             https://chatgpt.com/*
// @match             https://share.nezhagpt.cloud/*
// @match             https://new.oaifree.com/*
// @grant             none
// @license           MIT
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts
// @icon              data:image/png;base64,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
// @downloadURL       https://update.greasyfork.org/scripts/504901/ChatGPT%20Chat%20Fold%20Script%20%20MAXWidth.user.js
// @updateURL         https://update.greasyfork.org/scripts/504901/ChatGPT%20Chat%20Fold%20Script%20%20MAXWidth.meta.js
// ==/UserScript==
(function () {
    'use strict'
    //移动设备使用回车键发送
    let isEnter = true
    //MAX WIGHT
    function addMaxWidthCSS() {
        const css = `
        .md\\:max-w-3xl {
            max-width: 100%;
        }`
        function applyStyles() {
            if (typeof GM_addStyle !== "undefined") {
                GM_addStyle(css)
            } else {
                let styleNode = document.createElement("style")
                styleNode.appendChild(document.createTextNode(css));
                (document.querySelector("head") || document.documentElement).appendChild(styleNode)
            }
        }
        applyStyles()
        setInterval(() => {
            const styles = document.querySelectorAll('style')
            const styleExists = Array.from(styles).some(style => style.textContent.includes(css))
            if (!styleExists) {
                applyStyles()
            }
        }, 300)
    }
    addMaxWidthCSS()
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
        function handleKeyPress(event) {
            const textarea = document.getElementById('prompt-textarea')
            if (textarea && event.target === textarea && event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                const sendbutton = document.querySelector('button[data-testid="send-button"]')
                if (sendbutton) {
                    sendbutton.click()
                }
            }
        }
        if (isEnter) {
            document.addEventListener('keydown', handleKeyPress)
        }
        // Run the function and also set an interval to handle dynamic content
        foldLongMessages()
        setInterval(foldLongMessages, 1000)
    })
})()
