// ==UserScript==
// @name         Greasyfork Script Display Rating
// @name:zh-CN         Greasyfork 脚本显示评分
// @description:zh-CN 在浏览脚本列表时在脚本名称后面添加脚本评分
// @name:ar         Greasyfork سكريبت لعرض التقييمات
// @description:ar أضف تصنيف البرنامج النصي بعد اسم البرنامج النصي عند تصفح قائمة البرامج النصية
// @name:bg         Greasyfork Скрипт за показване на оценки
// @description:bg Добавете оценка на скрипта след името на скрипта, когато преглеждате списъка със скриптове
// @name:cs         Greasyfork Skript pro zobrazení hodnocení
// @description:cs Při procházení seznamu skriptů přidejte hodnocení skriptu za název skriptu
// @name:da         Greasyfork Script til at vise vurderinger
// @description:da Tilføj scriptvurdering efter scriptnavn, når du gennemser scriptlisten
// @name:de         Greasyfork Skript zur Anzeige von Bewertungen
// @description:de Fügen Sie beim Durchsuchen der Skriptliste nach dem Skriptnamen eine Skriptbewertung hinzu
// @name:el         Greasyfork Σενάριο για εμφάνιση βαθμολογιών
// @description:el Προσθέστε βαθμολογία σεναρίου μετά το όνομα σεναρίου κατά την περιήγηση στη λίστα σεναρίων
// @name:en         Greasyfork Script to display ratings
// @description:en Add script rating after script name when browsing script list
// @name:eo         Greasyfork Skripto por montri taksojn
// @description:eo Aldonu skriptrangigon post skriptonomo kiam foliumas skriptliston
// @name:es         Greasyfork Script para mostrar calificaciones
// @description:es Agregue calificación de secuencia de comandos después del nombre de la secuencia de comandos al explorar la lista de secuencias de comandos
// @name:fi         Greasyfork Komentosarja arvioiden näyttämiseksi
// @description:fi Lisää komentosarjan luokitus ohjelman nimen perään, kun selaat komentosarjaluetteloa
// @name:fr         Greasyfork Script pour afficher les notes
// @description:fr Ajouter une note de script après le nom du script lors de la navigation dans la liste des scripts
// @name:he         Greasyfork סקריפט להצגת דירוגים
// @description:he הוסף דירוג סקריפט אחרי שם התסריט בעת גלישה ברשימת הסקריפטים
// @name:hr         Greasyfork Skripta za prikaz ocjena
// @description:hr Dodajte ocjenu skripte nakon naziva skripte kada pregledavate popis skripti
// @name:hu         Greasyfork Szkript az értékelések megjelenítéséhez
// @description:hu A szkriptlista böngészésekor adja hozzá a szkript minősítését a szkript neve után
// @name:id         Greasyfork Script untuk menampilkan peringkat
// @description:id Tambahkan peringkat skrip setelah nama skrip saat menjelajahi daftar skrip
// @name:it         Greasyfork Script per visualizzare le valutazioni
// @description:it Aggiungi la valutazione dello script dopo il nome dello script quando sfogli l’elenco degli script
// @name:ja         Greasyfork 評価を表示するスクリプト
// @description:ja スクリプトリストを参照するときに、スクリプト名の後にスクリプト評価を追加します
// @name:ka         Greasyfork სკრიპტი რეიტინგების საჩვენებლად
// @description:ka სკრიპტის სიის დათვალიერებისას დაამატეთ სკრიპტის რეიტინგი სკრიპტის სახელის შემდეგ
// @name:ko         Greasyfork 평점을 표시하는 스크립트
// @description:ko 스크립트 목록 탐색 시 스크립트 이름 뒤에 스크립트 등급 추가
// @name:nl         Greasyfork Script om beoordelingen weer te geven
// @description:nl Voeg een scriptbeoordeling toe na de scriptnaam wanneer u door de scriptlijst bladert
// @name:nb         Greasyfork Skript for å vise rangeringer
// @description:nb Legg til skriptvurdering etter skriptnavn når du blar gjennom skriptlisten
// @name:pl         Greasyfork Skrypt wyświetlający oceny
// @description:pl Dodaj ocenę skryptu po nazwie skryptu podczas przeglądania listy skryptów
// @name:pt-BR         Greasyfork Script para exibir avaliações
// @description:pt-BR Adicione a classificação do script após o nome do script ao navegar na lista de scripts
// @name:ro         Greasyfork Script pentru afișarea evaluărilor
// @description:ro Adăugați evaluarea scriptului după numele scriptului când răsfoiți lista de scripturi
// @name:ru         Greasyfork Скрипт для отображения рейтингов
// @description:ru Добавить рейтинг сценария после имени сценария при просмотре списка сценариев.
// @name:sk         Greasyfork Skript na zobrazenie hodnotení
// @description:sk Pri prehliadaní zoznamu skriptov pridajte hodnotenie skriptu za názov skriptu
// @name:sr         Greasyfork Скрипта за приказ оцена
// @description:sr Додајте оцену скрипте после назива скрипте када прегледате листу скрипта
// @name:sv         Greasyfork Skript för att visa betyg
// @description:sv Lägg till skriptbetyg efter skriptnamn när du bläddrar i skriptlistan
// @name:th         Greasyfork สคริปต์เพื่อแสดงเรตติ้ง
// @description:th เพิ่มการให้คะแนนสคริปต์หลังชื่อสคริปต์เมื่อเรียกดูรายการสคริปต์
// @name:tr         Greasyfork Derecelendirmeleri görüntülemek için komut dosyası
// @description:tr Komut dosyası listesine göz atarken komut dosyası adından sonra komut dosyası derecelendirmesi ekleyin
// @name:ug         Greasyfork باھانى كۆرسىتىش ئۈچۈن قوليازما
// @description:ug قوليازما تىزىملىكىنى كۆرگەندە قوليازما نامىدىن كېيىن قوليازما دەرىجىسىنى قوشۇڭ
// @name:uk         Greasyfork Скрипт для відображення оцінок
// @description:uk Додайте оцінку сценарію після назви сценарію під час перегляду списку сценаріїв
// @name:vi         Greasyfork Script hiển thị xếp hạng
// @description:vi Thêm xếp hạng tập lệnh sau tên tập lệnh khi duyệt danh sách tập lệnh
// @name:zh-TW         Greasyfork 腳本顯示評分
// @description:zh-TW 在瀏覽腳本清單時在腳本名稱後面新增腳本評分
// @name:zh-HK         Greasyfork 腳本顯示評分
// @description:zh-HK 在瀏覽腳本清單時在腳本名稱後面新增腳本評分
// @name:fr-CA         Greasyfork Script pour afficher les notes
// @description:fr-CA Ajouter une note de script après le nom du script lors de la navigation dans la liste des scripts
// @namespace    https://github.com/10086100886/
// @version 1.3.3.54
// @description     Add the script rating after the script name when browsing the script list
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @license      MIT
// @grant        none
// @icon           https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
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
