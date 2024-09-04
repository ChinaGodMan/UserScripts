// ==UserScript==
// @name         GitHub Sort by Date
// @name:zh-CN   GitHub 按日期排序
// @description:zh-CN  将文件排序方式改为日期降序，方便查看最新更新的文件。
// @name:ar   GitHub الترتيب حسب التاريخ
// @description:ar  تغيير فرز الملفات إلى تنازلي حسب التاريخ，عرض مريح لأحدث الملفات المحدثة。
// @name:bg   GitHub Сортиране по дата
// @description:bg  Променете сортирането на файлове на низходящо по дата，Удобен преглед на последните актуализирани файлове。
// @name:cs   GitHub Seřadit podle data
// @description:cs  Změnit řazení souborů na sestupné podle data，Pohodlně si prohlédněte nejnovější aktualizované soubory。
// @name:da   GitHub Sorter efter dato
// @description:da  Skift filsortering til faldende efter dato，Se bekvemt de seneste opdaterede filer。
// @name:de   GitHub Nach Datum sortieren
// @description:de  Ändern Sie die Sortierung der Dateien auf absteigend nach Datum，Sehen Sie sich bequem die neuesten aktualisierten Dateien an。
// @name:el   GitHub Ταξινόμηση κατά ημερομηνία
// @description:el  Αλλαγή της ταξινόμησης αρχείων σε φθίνουσα κατά ημερομηνία，Προβάλετε άνετα τα πιο πρόσφατα ενημερωμένα αρχεία。
// @name:en   GitHub Sort by date
// @description:en  Change file sorting to descending by date，Conveniently view the latest updated files。
// @name:eo   GitHub Ordigi laŭ dato
// @description:eo  Ŝanĝu dosierordigon al malkreskanta laŭ dato，Oportune vidi la lastajn ĝisdatigitajn dosierojn。
// @name:es   GitHub Ordenar por fecha
// @description:es  Cambiar la clasificación de archivos a descendente por fecha，Vea cómodamente los últimos archivos actualizados。
// @name:fi   GitHub Lajittele päivämäärän mukaan
// @description:fi  Muuta tiedostojen lajittelu päivämäärän mukaan laskevaksi，Tarkastele viimeisimmät päivitetyt tiedostot kätevästi。
// @name:fr   GitHub Trier par date
// @description:fr  Changer le tri des fichiers en décroissant par date，Visualisez facilement les derniers fichiers mis à jour。
// @name:he   GitHub מיין לפי תאריך
// @description:he  שנה את מיון הקבצים ליורד לפי תאריך，צפה בנוחות בקבצים המעודכנים האחרונים。
// @name:hr   GitHub Poredaj po datumu
// @description:hr  Promijeni sortiranje datoteka na padajuće po datumu，Pogodan pregled najnovijih ažuriranih datoteka。
// @name:hu   GitHub Rendezés dátum szerint
// @description:hu  Módosítsa a fájlrendezést dátum szerint csökkenőre，Kényelmesen megtekintheti a legfrissebb fájlokat。
// @name:id   GitHub Urutkan berdasarkan tanggal
// @description:id  Ubah pengurutan file menjadi menurun berdasarkan tanggal，Lihat file terbaru yang diperbarui dengan mudah。
// @name:it   GitHub Ordina per data
// @description:it  Cambia l’ordinamento dei file in discendente per data，Visualizza comodamente gli ultimi file aggiornati。
// @name:ja   GitHub 日付順に並べ替える
// @description:ja  ファイルの並べ替えを日付順に変更します，最新の更新されたファイルを簡単に表示できます。
// @name:ka   GitHub დალაგება თარიღის მიხედვით
// @description:ka  შეცვალეთ ფაილის დახარისხება თარიღის მიხედვით კლებადობით，მოხერხებულად ნახეთ უახლესი განახლებული ფაილები。
// @name:ko   GitHub 날짜순으로 정렬
// @description:ko  파일 정렬을 날짜별 내림차순으로 변경，최신 업데이트 파일을 편리하게 확인하세요。
// @name:nl   GitHub Sorteer op datum
// @description:nl  Wijzig de bestandssortering naar aflopend op datum，Bekijk handig de nieuwste bijgewerkte bestanden。
// @name:nb   GitHub Sorter etter dato
// @description:nb  Endre filsortering til synkende etter dato，Se praktisk på de siste oppdaterte filene。
// @name:pl   GitHub Sortuj według daty
// @description:pl  Zmień sortowanie plików na malejące według daty，Wygodnie przeglądaj najnowsze zaktualizowane pliki。
// @name:pt-BR   GitHub Classificar por data
// @description:pt-BR  Alterar a classificação dos arquivos para decrescente por data，Visualize convenientemente os arquivos atualizados mais recentes。
// @name:ro   GitHub Sortați după dată
// @description:ro  Schimbați sortarea fișierelor în descrescătoare după dată，Vizualizați în mod convenabil cele mai recente fișiere actualizate。
// @name:ru   GitHub Сортировать по дате
// @description:ru  Изменить сортировку файлов по убыванию по дате，Удобно просматривать последние обновленные файлы。
// @name:sk   GitHub Zoradiť podľa dátumu
// @description:sk  Zmeňte triedenie súborov na zostupné podľa dátumu，Pohodlne si prezerajte najnovšie aktualizované súbory。
// @name:sr   GitHub Сортирај по датуму
// @description:sr  Промените сортирање датотека на опадајуће по датуму，Погодно прегледајте најновије ажуриране датотеке。
// @name:sv   GitHub Sortera efter datum
// @description:sv  Ändra filsortering till fallande efter datum，Se bekvämt de senaste uppdaterade filerna。
// @name:th   GitHub เรียงตามวันที่
// @description:th  เปลี่ยนการเรียงลำดับไฟล์เป็นจากมากไปน้อยตามวันที่，ดูไฟล์ที่อัพเดตล่าสุดได้อย่างสะดวก。
// @name:tr   GitHub Tarihe göre sırala
// @description:tr  Dosya sıralamasını tarihe göre azalan olarak değiştirin，En son güncellenen dosyaları rahatça görüntüleyin。
// @name:ug   GitHub چېسلا بويىچە تەرتىپلەش
// @description:ug  ھۆججەت رەتلەشنى چېسلا بويىچە تۆۋەنگە ئۆزگەرتىڭ，ئەڭ يېڭى يېڭىلانغان ھۆججەتلەرنى قۇلايلىق كۆرۈڭ。
// @name:uk   GitHub Сортувати за датою
// @description:uk  Змінити сортування файлів на спадання за датою，Зручний перегляд останніх оновлених файлів。
// @name:vi   GitHub Sắp xếp theo ngày
// @description:vi  Thay đổi cách sắp xếp tệp thành giảm dần theo ngày，Thuận tiện xem các tập tin cập nhật mới nhất。
// @name:zh-TW   GitHub 按日期排序
// @description:zh-TW  將文件排序方式改為日期降序，方便查看最新更新的文件。
// @name:zh-HK   GitHub 按日期排序
// @description:zh-HK  將文件排序方式改為日期降序，方便查看最新更新的文件。
// @name:fr-CA   GitHub Trier par date
// @description:fr-CA  Changer le tri des fichiers en décroissant par date，Visualisez facilement les derniers fichiers mis à jour。
// @description  Change the file sorting order to descending by date for easier viewing of the most recently updated files.
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @version 1.1.0.13
// @author       @Androidcn ,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// ==/UserScript==
(function () {
    'use strict'
    function createButton() {
        // Create a button element
        const button = document.createElement('button')
        button.textContent = '排序'
        button.style.position = 'fixed'
        button.style.top = '60px'
        button.style.right = '20px'
        button.style.zIndex = '9999'

        // Append the button to the body
        document.body.appendChild(button)

        // Add click event listener to the button
        button.addEventListener('click', performSortedAction)
    }
    function waitForElement(selector) {
        return new Promise((resolve) => {
            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) {
                    resolve()
                    observer.disconnect()
                }
            })
            observer.observe(document.body, { childList: true, subtree: true })
        })
    }
    function performSortedAction() {

        var files = document.querySelector('[aria-labelledby="folders-and-files"] tbody')
        var children = [...files.children]
        files.replaceChildren(
            children[0], ...[...files.querySelectorAll('.react-directory-row')].sort((a, b) => new Date(a.querySelector('relative-time').datetime) < new Date(b.querySelector('relative-time').datetime) ? 1 : -1), children.at(-1),
        )
        console.log('已按文件更新日期排序')
    }
    function WaitForRelativeTime() {
        waitForElement('relative-time').then(() => {
            performSortedAction()
        })
    }
    // Wait for the page to load
    window.addEventListener('load', WaitForRelativeTime)


})()
