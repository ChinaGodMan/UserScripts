// ==UserScript==
// @name         Remove Link Underlines
// @name:zh-CN   移除链接下划线
// @description:zh-CN 移除所有网站上的链接下划线，并动态处理新链接
// @name:ar   إزالة الرابط الذي تحته خط
// @description:ar إزالة تسطير الرابط على كافة المواقع，والتعامل مع الروابط الجديدة ديناميكيًا
// @name:bg   Премахване на връзката подчертаване
// @description:bg Премахнете подчертаването на връзката на всички сайтове，и динамично обработва нови връзки
// @name:cs   Odebrat podtržení odkazu
// @description:cs Odstraňte podtržení odkazů na všech webech，a dynamicky zpracovávat nové odkazy
// @name:da   Fjern understregning af link
// @description:da Fjern linkunderstregninger på alle websteder，og håndtere nye links dynamisk
// @name:de   Link-Unterstreichung entfernen
// @description:de Entfernen Sie die Link-Unterstreichungen auf allen Websites，und neue Links dynamisch verarbeiten
// @name:el   Αφαίρεση υπογράμμισης συνδέσμου
// @description:el Αφαιρέστε τις υπογραμμίσεις συνδέσμων σε όλους τους ιστότοπους，και να χειρίζεται δυναμικά νέους συνδέσμους
// @name:en   Remove link underline
// @description:en Remove link underlines on all sites，and handle new links dynamically
// @name:eo   Forigu ligilon substreki
// @description:eo Forigu ligsubstrekojn en ĉiuj retejoj，kaj pritrakti novajn ligilojn dinamike
// @name:es   Quitar enlace subrayado
// @description:es Eliminar enlaces subrayados en todos los sitios，y manejar nuevos enlaces dinámicamente
// @name:fi   Poista linkin alleviivaus
// @description:fi Poista linkin alleviivaukset kaikilta sivustoilta，ja käsitellä uusia linkkejä dynaamisesti
// @name:fr   Supprimer le soulignement du lien
// @description:fr Supprimer les liens soulignés sur tous les sites，et gérer les nouveaux liens de manière dynamique
// @name:he   הסר קו תחתון של הקישור
// @description:he הסר קווי תחתון של קישורים בכל האתרים，ולטפל בקישורים חדשים באופן דינמי
// @name:hr   Ukloni vezu podvučeno
// @description:hr Uklonite podcrtane veze na svim stranicama，i dinamički obrađivati ​​nove veze
// @name:hu   Távolítsa el a hivatkozás aláhúzását
// @description:hu Távolítsa el a hivatkozás aláhúzásokat az összes webhelyről，és dinamikusan kezeli az új hivatkozásokat
// @name:id   Hapus tautan yang digarisbawahi
// @description:id Hapus garis bawah tautan di semua situs，dan menangani tautan baru secara dinamis
// @name:it   Rimuovi la sottolineatura del collegamento
// @description:it Rimuovi le sottolineature dei collegamenti su tutti i siti，e gestire i nuovi collegamenti in modo dinamico
// @name:ja   リンクの下線を削除する
// @description:ja すべてのサイトのリンクの下線を削除する，新しいリンクを動的に処理します
// @name:ka   ბმულის ხაზგასმის წაშლა
// @description:ka წაშალეთ ბმულის ხაზგასმა ყველა საიტზე，და ახალი ბმულების დინამიურად დამუშავება
// @name:ko   링크 밑줄 제거
// @description:ko 모든 사이트의 링크 밑줄 제거，새 링크를 동적으로 처리합니다.
// @name:nl   Verwijder de onderstreping van de link
// @description:nl Verwijder linkonderstrepingen op alle sites，en dynamisch omgaan met nieuwe links
// @name:nb   Fjern understreking av koblingen
// @description:nb Fjern understreking av koblinger på alle nettsteder，og håndtere nye lenker dynamisk
// @name:pl   Usuń podkreślenie linku
// @description:pl Usuń podkreślenia linków ze wszystkich witryn，i dynamicznie obsługuj nowe linki
// @name:pt-BR   Remover sublinhado do link
// @description:pt-BR Remova os sublinhados dos links em todos os sites，e lidar com novos links dinamicamente
// @name:ro   Eliminați sublinierea linkului
// @description:ro Eliminați sublinierea linkurilor de pe toate site-urile，și gestionează dinamic noile legături
// @name:ru   Удалить подчеркивание ссылки
// @description:ru Удалить подчеркивание ссылок на всех сайтах，и динамически обрабатывать новые ссылки
// @name:sk   Odstrániť podčiarknutie odkazu
// @description:sk Odstráňte podčiarknutia odkazov na všetkých stránkach，a dynamicky spracovávať nové odkazy
// @name:sr   Уклони подвучену везу
// @description:sr Уклоните подвучене везе са свих сајтова，и динамички рукују новим везама
// @name:sv   Ta bort länk understruken
// @description:sv Ta bort länkunderstrykningar på alla webbplatser，och hantera nya länkar dynamiskt
// @name:th   ลบลิงก์ที่ขีดเส้นใต้
// @description:th ลบลิงก์ที่ขีดเส้นใต้ในทุกไซต์，และจัดการลิงก์ใหม่แบบไดนามิก
// @name:tr   Bağlantının altını kaldır
// @description:tr Tüm sitelerdeki bağlantı alt çizgilerini kaldırın，ve yeni bağlantıları dinamik olarak yönetin
// @name:ug   ئاستى سىزىقنى ئۆچۈرۈڭ
// @description:ug بارلىق تور بېكەتلەردىكى ئۇلىنىش ئاستىنى ئۆچۈرۈڭ，ھەمدە يېڭى ئۇلىنىشلارنى ھەرىكەتچان بىر تەرەپ قىلىڭ
// @name:uk   Вилучити підкреслення посилання
// @description:uk Видалити підкреслення посилань на всіх сайтах，і динамічно обробляти нові посилання
// @name:vi   Xóa gạch chân liên kết
// @description:vi Xóa gạch chân liên kết trên tất cả các trang web，và xử lý các liên kết mới một cách linh hoạt
// @name:zh-TW   移除連結下劃線
// @description:zh-TW 移除所有網站上的連結底線，並動態處理新鏈接
// @name:zh-HK   移除連結下劃線
// @description:zh-HK 移除所有網站上的連結底線，並動態處理新鏈接
// @name:fr-CA   Supprimer le soulignement du lien
// @description:fr-CA Supprimer les liens soulignés sur tous les sites，et gérer les nouveaux liens de manière dynamique
// @namespace    https://greasyfork.org/users/1169082/
// @version 1.2.0.53
// @description  Remove underlines from all links on any website and dynamically handle new links
// @author       人民的勤务员<toniaiwanowskiskr47@gmail.com>
// @match        *://*/*
// @run-at document-body
// @license MIT
// @icon          https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-Underlines-96.png
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
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
