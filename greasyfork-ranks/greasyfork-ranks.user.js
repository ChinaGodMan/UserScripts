// ==UserScript==
// @name               Greasyfork Script Display Rating
// @name:zh-CN         Greasyfork 脚本显示评分
// @name:ar            Greasyfork سكريبت لعرض التقييمات
// @name:bg            Greasyfork Скрипт за показване на оценки
// @name:cs            Greasyfork Skript pro zobrazení hodnocení
// @name:da            Greasyfork Script til at vise vurderinger
// @name:de            Greasyfork Skript zur Anzeige von Bewertungen
// @name:el            Greasyfork Σενάριο για εμφάνιση βαθμολογιών
// @name:en            Greasyfork Script to display ratings
// @name:eo            Greasyfork Skripto por montri taksojn
// @name:es            Greasyfork Script para mostrar calificaciones
// @name:fi            Greasyfork Komentosarja arvioiden näyttämiseksi
// @name:fr            Greasyfork Script pour afficher les notes
// @name:he            Greasyfork סקריפט להצגת דירוגים
// @name:hr            Greasyfork Skripta za prikaz ocjena
// @name:hu            Greasyfork Szkript az értékelések megjelenítéséhez
// @name:id            Greasyfork Script untuk menampilkan peringkat
// @name:it            Greasyfork Script per visualizzare le valutazioni
// @name:ja            Greasyfork 評価を表示するスクリプト
// @name:ka            Greasyfork სკრიპტი რეიტინგების საჩვენებლად
// @name:ko            Greasyfork 평점을 표시하는 스크립트
// @name:nl            Greasyfork Script om beoordelingen weer te geven
// @name:nb            Greasyfork Skript for å vise rangeringer
// @name:pl            Greasyfork Skrypt wyświetlający oceny
// @name:pt-BR         Greasyfork Script para exibir avaliações
// @name:ro            Greasyfork Script pentru afișarea evaluărilor
// @name:ru            Greasyfork Скрипт для отображения рейтингов
// @name:sk            Greasyfork Skript na zobrazenie hodnotení
// @name:sr            Greasyfork Скрипта за приказ оцена
// @name:sv            Greasyfork Skript för att visa betyg
// @name:th            Greasyfork สคริปต์เพื่อแสดงเรตติ้ง
// @name:tr            Greasyfork Derecelendirmeleri görüntülemek için komut dosyası
// @name:ug            Greasyfork باھانى كۆرسىتىش ئۈچۈن قوليازما
// @name:uk            Greasyfork Скрипт для відображення оцінок
// @name:vi            Greasyfork Script hiển thị xếp hạng
// @name:zh-TW         Greasyfork 腳本顯示評分
// @name:zh-HK         Greasyfork 腳本顯示評分
// @name:fr-CA         Greasyfork Script pour afficher les notes
// @description:zh-CN  在浏览脚本列表时在脚本名称后面添加脚本评分
// @description:ar     أضف تصنيف البرنامج النصي بعد اسم البرنامج النصي عند تصفح قائمة البرامج النصية
// @description:bg     Добавете оценка на скрипта след името на скрипта, когато преглеждате списъка със скриптове
// @description:cs     Při procházení seznamu skriptů přidejte hodnocení skriptu za název skriptu
// @description:da     Tilføj scriptvurdering efter scriptnavn, når du gennemser scriptlisten
// @description:de     Fügen Sie beim Durchsuchen der Skriptliste nach dem Skriptnamen eine Skriptbewertung hinzu
// @description:el     Προσθέστε βαθμολογία σεναρίου μετά το όνομα σεναρίου κατά την περιήγηση στη λίστα σεναρίων
// @description:en     Add script rating after script name when browsing script list
// @description:eo     Aldonu skriptrangigon post skriptonomo kiam foliumas skriptliston
// @description:es     Agregue calificación de secuencia de comandos después del nombre de la secuencia de comandos al explorar la lista de secuencias de comandos
// @description:fi     Lisää komentosarjan luokitus ohjelman nimen perään, kun selaat komentosarjaluetteloa
// @description:fr     Ajouter une note de script après le nom du script lors de la navigation dans la liste des scripts
// @description:he     הוסף דירוג סקריפט אחרי שם התסריט בעת גלישה ברשימת הסקריפטים
// @description:hr     Dodajte ocjenu skripte nakon naziva skripte kada pregledavate popis skripti
// @description:hu     A szkriptlista böngészésekor adja hozzá a szkript minősítését a szkript neve után
// @description:id     Tambahkan peringkat skrip setelah nama skrip saat menjelajahi daftar skrip
// @description:it     Aggiungi la valutazione dello script dopo il nome dello script quando sfogli l’elenco degli script
// @description:ja     スクリプトリストを参照するときに、スクリプト名の後にスクリプト評価を追加します
// @description:ka     სკრიპტის სიის დათვალიერებისას დაამატეთ სკრიპტის რეიტინგი სკრიპტის სახელის შემდეგ
// @description:ko     스크립트 목록 탐색 시 스크립트 이름 뒤에 스크립트 등급 추가
// @description:nl     Voeg een scriptbeoordeling toe na de scriptnaam wanneer u door de scriptlijst bladert
// @description:nb     Legg til skriptvurdering etter skriptnavn når du blar gjennom skriptlisten
// @description:pl     Dodaj ocenę skryptu po nazwie skryptu podczas przeglądania listy skryptów
// @description:pt-BR  Adicione a classificação do script após o nome do script ao navegar na lista de scripts
// @description:ro     Adăugați evaluarea scriptului după numele scriptului când răsfoiți lista de scripturi
// @description:ru     Добавить рейтинг сценария после имени сценария при просмотре списка сценариев.
// @description:sk     Pri prehliadaní zoznamu skriptov pridajte hodnotenie skriptu za názov skriptu
// @description:sr     Додајте оцену скрипте после назива скрипте када прегледате листу скрипта
// @description:sv     Lägg till skriptbetyg efter skriptnamn när du bläddrar i skriptlistan
// @description:th     เพิ่มการให้คะแนนสคริปต์หลังชื่อสคริปต์เมื่อเรียกดูรายการสคริปต์
// @description:tr     Komut dosyası listesine göz atarken komut dosyası adından sonra komut dosyası derecelendirmesi ekleyin
// @description:ug     قوليازما تىزىملىكىنى كۆرگەندە قوليازما نامىدىن كېيىن قوليازما دەرىجىسىنى قوشۇڭ
// @description:uk     Додайте оцінку сценарію після назви сценарію під час перегляду списку сценаріїв
// @description:vi     Thêm xếp hạng tập lệnh sau tên tập lệnh khi duyệt danh sách tập lệnh
// @description:zh-TW  在瀏覽腳本清單時在腳本名稱後面新增腳本評分
// @description:zh-HK  在瀏覽腳本清單時在腳本名稱後面新增腳本評分
// @description:fr-CA  Ajouter une note de script après le nom du script lors de la navigation dans la liste des scripts
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @version            1.3.3.63
// @description        Add the script rating after the script name when browsing the script list
// @author             人民的勤务员 <china.qinwuyuan@gmail.com>
// @match              https://greasyfork.org/*
// @match              https://sleazyfork.org/*
// @license            MIT
// @grant              none
// @icon               data:image/png;base64,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
// @iconbak            https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

(function () {
    'use strict'
    // 检测脚本列表的出现，并自动插入评分
    function observeScriptList() {
        const scriptList = document.querySelector('.script-list')
        if (scriptList) {
            // 插入评分
            insertRatings(scriptList)
            // 配置观察器
            const observer = new MutationObserver(function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        for (let node of mutation.addedNodes) {
                            // 检查是否为脚本列表项
                            if (node.nodeType === Node.ELEMENT_NODE && node.matches('li[data-script-id]')) {
                                insertRating(node)
                            }
                        }
                    }
                }
            })
            // 开始观察脚本列表的变化
            observer.observe(scriptList, { childList: true, subtree: true })
        }
    }
    // 插入评分
    function insertRating(scriptBlock) {
        const ratingElement = scriptBlock.querySelector('dd.script-list-ratings')
        if (ratingElement) {
            const rating = ratingElement.getAttribute('data-rating-score')
            const ratingDisplay = document.createElement('span')
            ratingDisplay.textContent = rating.replace(/[^\d.]/g, '')
            ratingDisplay.style.marginLeft = '30px'
            ratingDisplay.style.fontSize = '1em'
            ratingDisplay.style.color = '#ff8c00'
            ratingDisplay.style.fontWeight = 'bold'
            const titleElement = scriptBlock.querySelector('.script-link')
            if (titleElement) {
                titleElement.insertAdjacentElement('afterend', ratingDisplay)
            }
        }
    }
    // 插入评分到当前页面的脚本列表中
    function insertRatings(scriptList) {
        const scriptBlocks = scriptList.querySelectorAll('li[data-script-id]')
        scriptBlocks.forEach(insertRating)
    }
    // 开始观察当前页面脚本列表的出现
    observeScriptList()
    // 观察 body 元素以检测页面加载了下一页
    const bodyObserver = new MutationObserver(function (mutationsList, observer) {
        mutationsList.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('.script-list')) {
                    // 页面加载了下一页，自动插入评分
                    insertRatings(node)
                }
            })
        })
    })
    // 开始观察 body 元素的子节点变化
    bodyObserver.observe(document.body, { childList: true, subtree: true })
})()
