// ==UserScript==
// @name        Scroll to Top and Bottom Buttons
// @name:zh-CN        置顶和置底按钮
// @description:zh-CN 在所有页面生成两个按钮，一个用于顺滑回到顶部，一个用于持续滚动到底部，再次点击取消滚动到底部
// @name:ar        دبوس على الأزرار العلوية والسفلية
// @description:ar إنشاء زرين في كافة الصفحات，واحد لتنعيم العودة إلى الأعلى，واحد للتمرير المستمر إلى الأسفل，انقر مرة أخرى لإلغاء التمرير إلى الأسفل
// @name:bg        Закачете горния и долния бутон
// @description:bg Генерирайте два бутона на всички страници，Един за изглаждане обратно към върха，Един за непрекъснато превъртане до дъното，Щракнете отново, за да отмените, превъртете надолу
// @name:cs        Připnout na horní a spodní tlačítka
// @description:cs Vygenerujte dvě tlačítka na všech stránkách，Jeden pro vyhlazení zpět nahoru，Jeden pro nepřetržité posouvání dolů，Dalším kliknutím zrušíte posun dolů
// @name:da        Fastgør til top og bund knapper
// @description:da Generer to knapper på alle sider，En til at glatte tilbage til toppen，En til kontinuerlig rulning til bunden，Klik igen for at annullere scroll til bunden
// @name:de        An die oberen und unteren Knöpfe stecken
// @description:de Generieren Sie zwei Schaltflächen auf allen Seiten，Eine zum Glätten nach oben，Eine für kontinuierliches Scrollen nach unten，Klicken Sie erneut, um den Bildlauf nach unten abzubrechen
// @name:el        Καρφιτσώστε τα κουμπιά πάνω και κάτω
// @description:el Δημιουργήστε δύο κουμπιά σε όλες τις σελίδες，Ένα για λείανση πίσω στην κορυφή，Ένα για συνεχή κύλιση προς τα κάτω，Κάντε ξανά κλικ για να ακυρώσετε την κύλιση προς τα κάτω
// @name:en        Pin to top and bottom buttons
// @description:en Generate two buttons on all pages，One for smoothing back to the top，One for continuous scrolling to the bottom，Click again to cancel scroll to bottom
// @name:eo        Alpinglu al supraj kaj malsupraj butonoj
// @description:eo Generu du butonojn sur ĉiuj paĝoj，Unu por glatigi reen al la supro，Unu por kontinua movo al la fundo，Alklaku denove por nuligi rulumadon malsupre
// @name:es        Fijar a los botones superior e inferior
// @description:es Generar dos botones en todas las páginas.，Uno para alisar hasta arriba.，Uno para desplazamiento continuo hasta el final.，Haga clic nuevamente para cancelar, desplácese hacia abajo
// @name:fi        Kiinnitä painikkeet ylä- ja alaosaan
// @description:fi Luo kaksi painiketta kaikille sivuille，Yksi tasoittamiseen takaisin yläosaan，Yksi jatkuvaan vierittämiseen pohjaan，Napsauta uudelleen peruuttaaksesi vierityksen alas
// @name:fr        Épingler sur les boutons du haut et du bas
// @description:fr Générez deux boutons sur toutes les pages，Un pour lisser vers le haut，Un pour un défilement continu vers le bas，Cliquez à nouveau pour annuler le défilement vers le bas
// @name:he        הצמד לחצנים למעלה ולמטה
// @description:he צור שני כפתורים בכל הדפים，אחד להחלקת חזרה למעלה，אחד לגלילה רציפה לתחתית，לחץ שוב כדי לבטל את הגלילה למטה
// @name:hr        Pričvrstite na gornji i donji gumb
// @description:hr Generirajte dva gumba na svim stranicama，Jedan za glačanje natrag na vrh，Jedan za kontinuirano pomicanje do dna，Kliknite ponovno za odustajanje pomaknite se do dna
// @name:hu        Rögzítse a felső és alsó gombokat
// @description:hu Minden oldalon hozzon létre két gombot，Az egyik a tetejére való visszasimításhoz，Egy a folyamatos görgetéshez az aljára，Kattintson újra a lefelé görgetés megszakításához
// @name:id        Sematkan ke tombol atas dan bawah
// @description:id Hasilkan dua tombol di semua halaman，Satu untuk menghaluskan kembali ke atas，Satu untuk menggulir terus menerus ke bawah，Klik lagi untuk membatalkan gulir ke bawah
// @name:it        Aggiungi ai pulsanti superiore e inferiore
// @description:it Genera due pulsanti su tutte le pagine，Uno per tornare in cima，Uno per lo scorrimento continuo verso il basso，Fare di nuovo clic per annullare lo scorrimento fino in fondo
// @name:ja        上下のボタンにピン留めする
// @description:ja すべてのページに 2 つのボタンを生成する，1 つはトップに戻るためのスムージング用，1 つは下まで継続的にスクロールするためのもの，もう一度クリックすると下までスクロールがキャンセルされます
// @name:ka        ჩაამაგრეთ ზედა და ქვედა ღილაკები
// @description:ka შექმენით ორი ღილაკი ყველა გვერდზე，ერთი ზევით დასაბრუნებლად，ერთი ბოლოში უწყვეტი გადახვევისთვის，დააწკაპუნეთ ხელახლა გადახვევის გასაუქმებლად ბოლოში
// @name:ko        상단 및 하단 버튼에 고정
// @description:ko 모든 페이지에 두 개의 버튼 생성，하나는 위쪽으로 부드럽게 하기 위한 것입니다.，하나는 아래쪽으로 계속 스크롤하기 위한 것입니다.，취소하려면 다시 클릭하세요. 맨 아래로 스크롤
// @name:nl        Speld vast aan de bovenste en onderste knoppen
// @description:nl Genereer twee knoppen op alle pagina’s，Eén om terug naar boven glad te strijken，Eén voor continu naar beneden scrollen，Klik nogmaals om te annuleren. Scroll naar beneden
// @name:nb        Fest til topp- og bunnknapper
// @description:nb Generer to knapper på alle sider，En for å glatte tilbake til toppen，En for kontinuerlig rulling til bunnen，Klikk på nytt for å avbryte bla til bunnen
// @name:pl        Przypnij do górnego i dolnego przycisku
// @description:pl Wygeneruj dwa przyciski na wszystkich stronach，Jeden do wygładzania z powrotem do góry，Jeden do ciągłego przewijania w dół，Kliknij ponownie, aby anulować przewijanie w dół
// @name:pt-BR        Fixar nos botões superior e inferior
// @description:pt-BR Gere dois botões em todas as páginas，Um para suavizar de volta ao topo，Um para rolagem contínua até o final，Clique novamente para cancelar a rolagem para baixo
// @name:ro        Fixați butoanele de sus și de jos
// @description:ro Generați două butoane pe toate paginile，Unul pentru netezirea înapoi în vârf，Unul pentru defilarea continuă până în jos，Faceți clic din nou pentru a anula derularea în jos
// @name:ru        Закрепить на верхней и нижней кнопках
// @description:ru Создать две кнопки на всех страницах，Один для сглаживания обратно наверх，Один для непрерывной прокрутки вниз，Нажмите еще раз, чтобы отменить прокрутку вниз
// @name:sk        Pripnúť na horné a spodné tlačidlo
// @description:sk Vygenerujte dve tlačidlá na všetkých stránkach，Jeden na vyhladenie späť nahor，Jeden pre plynulé posúvanie nadol，Opätovným kliknutím zrušíte posúvanie nadol
// @name:sr        Закачите горње и доње дугме
// @description:sr Генеришите два дугмета на свим страницама，Један за заглађивање назад на врх，Један за непрекидно скроловање до дна，Кликните поново да бисте отказали померање до дна
// @name:sv        Fäst knappar upptill och nedtill
// @description:sv Skapa två knappar på alla sidor，En för att jämna tillbaka till toppen，En för kontinuerlig rullning till botten，Klicka igen för att avbryta scroll till botten
// @name:th        ปักหมุดที่ปุ่มบนและล่าง
// @description:th สร้างสองปุ่มในทุกหน้า，หนึ่งอันสำหรับปรับให้เรียบกลับไปด้านบน，หนึ่งรายการสำหรับการเลื่อนไปที่ด้านล่างอย่างต่อเนื่อง，คลิกอีกครั้งเพื่อยกเลิกการเลื่อนไปด้านล่าง
// @name:tr        Üst ve alt düğmelere sabitle
// @description:tr Tüm sayfalarda iki düğme oluşturun，En üste doğru yumuşatmak için bir tane，Aşağıya doğru sürekli kaydırma için bir tane，Aşağıya kaydırmayı iptal etmek için tekrar tıklayın
// @name:ug        ئۈستى ۋە ئاستى كۇنۇپكىلارغا بېسىڭ
// @description:ug بارلىق بەتلەردە ئىككى كۇنۇپكا ھاسىل قىلىڭ，يۇقىرىغا قايتىش ئۈچۈن بىرى，ئاستىغا توختىماي دومىلاش ئۈچۈن بىرى，ئاستىنى سىيرىشنى قايتا چېكىڭ
// @name:uk        Прикріпіть до верхньої та нижньої кнопок
// @description:uk Згенеруйте дві кнопки на всіх сторінках，Один для згладжування назад до верху，Один для безперервного прокручування вниз，Клацніть ще раз, щоб скасувати прокрутку вниз
// @name:vi        Ghim vào nút trên và dưới
// @description:vi Tạo hai nút trên tất cả các trang，Một để làm mịn trở lại đầu trang，Một để cuộn liên tục xuống phía dưới，Bấm lần nữa để hủy cuộn xuống dưới cùng
// @name:zh-TW        置頂和置底按鈕
// @description:zh-TW 在所有頁面產生兩個按鈕，一個用於順滑回到頂部，一個用於持續滾動到底部，再次點擊取消捲動到底部
// @name:zh-HK        置頂和置底按鈕
// @description:zh-HK 在所有頁面產生兩個按鈕，一個用於順滑回到頂部，一個用於持續滾動到底部，再次點擊取消捲動到底部
// @name:fr-CA        Épingler sur les boutons du haut et du bas
// @description:fr-CA Générez deux boutons sur toutes les pages，Un pour lisser vers le haut，Un pour un défilement continu vers le bas，Cliquez à nouveau pour annuler le défilement vers le bas
// @description Generate two buttons on all pages, one for smoothly scrolling back to the top and one for continuous scrolling to the bottom. Click again to stop scrolling to the bottom.
// @version 1.2.0.62
// @run-at      document-end
// @match       *://*/*
// @license     MIT
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @namespace   https://greasyfork.org/zh-CN/users/1169082
// @icon          https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-up-96.png
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
(function () {
    'use strict'
    let isScrollingToBottom = false
    let buttonTopKey = GM_getValue("buttonTopKey", "")
    let buttonBottomKey = GM_getValue("buttonBottomKey", "")
    var style = document.createElement('style')
    GM_registerMenuCommand("SetHotkey", showHotkeyModal)
    function showHotkeyModal() {
        let modalHtml = `
        <div id="hotkeyModal" style="position: fixed; z-index: 10000; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); top: 20%; left: 50%; transform: translate(-50%, -20%); max-width: 300px;">
            <h2 style="margin-top: 0;">ButtonKey</h2>
            <div style="margin-bottom: 10px;">
                <label for="hotkeyInput1" style="display: block; margin-bottom: 5px;">buttonTopKey:</label>
                <input id="hotkeyInput1" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="${buttonTopKey}" />
            </div>
            <div style="margin-bottom: 20px;">
                <label for="hotkeyInput2" style="display: block; margin-bottom: 5px;">buttonBottomKey:</label>
                <input id="hotkeyInput2" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="${buttonBottomKey}" />
            </div>
            <div style="text-align: right;">
                <button id="saveHotkeys" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Save</button>
                <button id="closeModal" style="background-color: #f44336; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">Close</button>
            </div>
        </div>`
        let modalDiv = document.createElement('div')
        modalDiv.innerHTML = modalHtml
        document.body.appendChild(modalDiv)
        document.getElementById("hotkeyInput1").addEventListener("keydown", function (event) {
            event.preventDefault()
            buttonTopKey = event.key
            this.value = buttonTopKey
        })
        document.getElementById("hotkeyInput2").addEventListener("keydown", function (event) {
            event.preventDefault()
            buttonBottomKey = event.key
            this.value = buttonBottomKey
        })
        document.getElementById("saveHotkeys").addEventListener("click", function () {
            GM_setValue("buttonTopKey", buttonTopKey)
            GM_setValue("buttonBottomKey", buttonBottomKey)
            closeModal()
        })
        document.getElementById("closeModal").addEventListener("click", closeModal)
    }
    function closeModal() {
        let modal = document.getElementById("hotkeyModal")
        if (modal) {
            modal.remove()
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.target.matches('input, textarea, [contenteditable="true"]')) {
            return
        }
        if (event.key === GM_getValue("buttonTopKey")) {
            goToTop()
        } else if (event.key === GM_getValue("buttonBottomKey")) {
            isScrollingToBottom = toggleScrolling(buttonBottom, isScrollingToBottom)
        }
    })
    style.innerHTML = `
:root {
    --button-size: 29.4px; /* 按钮的大小 */
    --button-margin: 1px; /* 按钮之间的间距 */
}
.GO_TO_TOP_button, .GO_TO_BOTTOM_button {
    width: var(--button-size);  /* 按钮大小 */
    height: var(--button-size);  /* 按钮大小 */
    border-radius: 5.6px;  /* 縮小30% */
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%);
    position: fixed;
    right: 14px;  /* 缩小30% */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999999;
    background-color: white;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
}
    .GO_TO_TOP_button svg, .GO_TO_BOTTOM_button svg {
        left: 16.8px;  /* 縮小30% */
        height: 16.8px;  /* 縮小30% */
        margin: 0;
    }
    .GO_TO_TOP_button {
        bottom: 49px;  /* 縮小30% */
    }
    .GO_TO_BOTTOM_button {
        bottom: 14px;  /* 縮小30% */
    }
    `
    document.head.appendChild(style)
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    let bottomInterval
    const startScrollingToBottom = () => {
        bottomInterval = setInterval(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            })
        }, 1000)
        let checkTimeout = setTimeout(() => {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                if (buttonBottom.style.backgroundColor === 'green') {
                    buttonBottom.click()
                    //  alert("已处于最底端");
                }
            }
        }, 3000)
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY < document.body.scrollHeight) {
                clearTimeout(checkTimeout)
                checkTimeout = setTimeout(() => {
                    if (buttonBottom.style.backgroundColor === 'green') {
                        buttonBottom.click()
                        //      alert("自动滚动到底部已停止。");
                    }
                }, 3000)
            }
        })
        buttonBottom.style.opacity = '0.8'
        buttonBottom.style.display = 'flex'
    }
    const stopScrollingToBottom = () => {
        clearInterval(bottomInterval)
    }
    const buttonTop = document.createElement('div')
    buttonTop.className = 'GO_TO_TOP_button'
    buttonTop.innerHTML = `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M825.568 555.328l-287.392-289.28C531.808 259.648 523.488 256.576 515.2 256.64 514.08 256.544 513.12 256 512 256c-4.672 0-9.024 1.088-13.024 2.88-4.032 1.536-7.872 3.872-11.136 7.136l-259.328 258.88c-12.512 12.48-12.544 32.736-0.032 45.248 6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.624-9.344L480 364.288V928c0 17.696 14.336 32 32 32s32-14.304 32-32V362.72l236.192 237.728c6.24 6.272 14.496 9.44 22.688 9.44s16.32-3.104 22.56-9.312C838.016 588.128 838.048 567.84 825.568 555.328z"/>
        <path d="M864 192H160C142.336 192 128 177.664 128 160s14.336-32 32-32h704c17.696 0 32 14.336 32 32S881.696 192 864 192z"/>
    </svg>`
    const buttonBottom = document.createElement('div')
    buttonBottom.className = 'GO_TO_BOTTOM_button'
    buttonBottom.innerHTML = `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M198.4 468.352l287.392 289.28c6.368 6.4 14.688 9.472 22.976 9.408 1.12 0.096 2.08 0.64 3.2 0.64 4.672 0 9.024-1.088 13.024-2.88 4.032-1.536 7.872-3.872 11.136-7.136l259.328-258.88c12.512-12.48 12.544-32.736 0.032-45.248-6.24-6.272-14.432-9.408-22.656-9.408-8.192 0-16.352 3.136-22.624 9.344L544 659.712V96c0-17.696-14.336-32-32-32s-32 14.304-32 32v565.28L243.808 423.552c-6.24-6.272-14.496-9.44-22.688-9.44s-16.32 3.104-22.56 9.312c-12.48 12.512-12.512 32.8-0.032 45.312z"/>
        <path d="M160 832h704c17.664 0 32 14.336 32 32s-14.336 32-32 32H160c-17.664 0-32-14.336-32-32s14.336-32 32-32z"/>
    </svg>`
    buttonTop.addEventListener('click', goToTop)
    buttonBottom.addEventListener('click', () => {
        isScrollingToBottom = toggleScrolling(buttonBottom, isScrollingToBottom)
    })
    function toggleScrolling(buttonBottom, isScrollingToBottom) {
        if (isScrollingToBottom) {
            stopScrollingToBottom()
            buttonBottom.style.transform = 'scale(1)'
            buttonBottom.style.backgroundColor = 'white' // 改回原来的背景色
        } else {
            startScrollingToBottom()
            buttonBottom.style.transform = 'scale(1.1)'
            buttonBottom.style.backgroundColor = 'green' // 改为绿色
        }
        return !isScrollingToBottom
    }
    buttonTop.style.display = 'none'
    buttonBottom.style.display = 'none'
    document.body.appendChild(buttonTop)
    document.body.appendChild(buttonBottom)
    let timer
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            buttonTop.style.opacity = '0.8'
            buttonTop.style.display = 'flex'
            buttonBottom.style.opacity = '0.8'
            buttonBottom.style.display = 'flex'
        } else if (window.pageYOffset === 0) {
            buttonTop.style.opacity = '0'
            buttonBottom.style.opacity = '0'
            setTimeout(() => {
                buttonTop.style.display = 'none'
                buttonBottom.style.display = 'none'
            }, 200)
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            buttonTop.style.opacity = '0'
            buttonBottom.style.opacity = '0'
            setTimeout(() => {
                buttonTop.style.display = 'none'
                buttonBottom.style.display = 'none'
            }, 200)
        }, 1800)
    })
})()
