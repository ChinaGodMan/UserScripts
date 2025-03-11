// ==UserScript==
// @name              Hide Reposts on Twitter/X
// @name:ar           تويتر/X إخفاء المشاركات التي أعيد تغريدها
// @name:bg           Twitter/X скрийте ретуирани публикации
// @name:cs           Twitter/X skrýt příspěvky retweeted
// @name:da           Twitter/X Hide Retweeted Posts
// @name:de           Twitter/X verstecken retweetete Beiträge
// @name:el           Twitter/x Απόκρυψη αναστολών
// @name:en           Twitter/X Hide retweeted posts
// @name:eo           Twitter/x Kaŝi retweetitajn afiŝojn
// @name:es           Twitter/x Ocultar publicaciones retuiteadas
// @name:fi           Twitter/x piilota uudelleentwiitatut viestit
// @name:fr           Twitter / x Hide Retweeted Posts
// @name:fr-CA        Twitter / x Hide Retweeted Posts
// @name:he           טוויטר/x הסתר פוסטים עם ציוץ מחדש
// @name:hr           Twitter/X sakrij retweet post
// @name:hu           A Twitter/X elrejti a retweetelt hozzászólásokat
// @name:id           Twitter/x Sembunyikan posting retweeted
// @name:it           Post di twitter/x nascondi retweet
// @name:ja           Twitter/Xリツイートされた投稿を非表示にします
// @name:ka           Twitter/x დამალვა ხელახლა გამოაქვეყნა შეტყობინებები
// @name:ko           Twitter/x는 리트 윗 된 게시물을 숨 깁니다
// @name:nb           Twitter/x Skjul retweetet innlegg
// @name:nl           Twitter/x verbergen geretweet berichten
// @name:pl           Twitter/X ukryj posty z retweetowanym
// @name:pt-BR        Twitter/x Hide Postagens Retweetadas
// @name:ro           Twitter/x ascunde postări retweeted
// @name:ru           Twitter/x скрыть ретвитические сообщения
// @name:sk           Twitter/x skryť retweetované príspevky
// @name:sr           Твиттер / к Хиде Ретвеетед Постс
// @name:sv           Twitter/X dölj retweetade inlägg
// @name:th           Twitter/X ซ่อนโพสต์รีทวีต
// @name:tr           Twitter/x Retweeted gönderileri gizle
// @name:ug           Twitter / X قايتا ئەۋەتىلگەن يازمىلارنى يوشۇرۇش
// @name:uk           Twitter/X Сховати ретвітні публікації
// @name:vi           Twitter/x ẩn các bài viết chuyển tiếp
// @name:zh           Twitter/X 隐藏转发的帖子
// @name:zh-CN        Twitter/X 隐藏转发的帖子
// @name:zh-HK        Twitter/X 隱藏轉發的帖子
// @name:zh-SG        Twitter/X 隐藏转发的帖子
// @name:zh-TW        Twitter/X 隱藏轉發的帖子
// @description       Automatically hide forwarded content and hide forwarded content when first loaded
// @description:ar    إخفاء المحتوى المعاد تلقائيًا وإخفاء المحتوى المعاد توجيهه عند التحميل الأول لإزالة الإعلانات المزعجة
// @description:bg    Автоматично скрийте препратено съдържание и скривано съдържание при първо зареждане, за да премахнете досадни реклами
// @description:cs    Automaticky skrýt předávaný obsah a skrýt přeposlání obsahu při prvním načítání, aby se odstranily nepříjemné reklamy
// @description:da    Skjul automatisk videresendt indhold og skjul videresendt indhold på første indlæsning for at fjerne irriterende annoncer
// @description:de    Automatisch ausblenden Sie weitergeleitete Inhalte aus und ausblenden Sie weitergeleitete Inhalte beim ersten Laden, um nervige Anzeigen zu entfernen
// @description:el    Αυτόματα απόκρυψη περιεχομένου προώθησης και απόκρυψη περιεχομένου προώθησης κατά την πρώτη φόρτωση για να καταργήσετε ενοχλητικές διαφημίσεις
// @description:en    Automatically hide forwarded content and hide forwarded content on first loading to remove annoying ads
// @description:eo    Aŭtomate kaŝi plusenditan enhavon kaj kaŝi plusenditan enhavon sur unua ŝarĝo por forigi ĝenajn reklamojn
// @description:es    Ocultar automáticamente el contenido reenviado y ocultar el contenido reenviado en la primera carga para eliminar anuncios molestos
// @description:fi    Piilota automaattisesti edelleenlähetetty sisältö ja piilota edelleenlähetetty sisältö ensimmäisessä lataamisessa ärsyttävien mainosten poistamiseksi
// @description:fr    Masquer automatiquement le contenu transféré et masquer le contenu transféré lors du premier chargement pour supprimer les annonces ennuyeuses
// @description:fr-CA Masquer automatiquement le contenu transféré et masquer le contenu transféré lors du premier chargement pour supprimer les annonces ennuyeuses
// @description:he    הסתיר אוטומטית תוכן מועבר והסתיר תוכן מועבר בטעינה ראשונה כדי להסיר מודעות מעצבנות
// @description:hr    Automatski sakriti prosljeđeni sadržaj i sakriti prosljeđeni sadržaj na prvo učitavanje kako biste uklonili dosadne oglase
// @description:hu    Automatikusan elrejtse a továbbított tartalmat, és elrejtse a továbbított tartalmat az első betöltéskor, hogy eltávolítsa a bosszantó hirdetéseket
// @description:id    Secara otomatis menyembunyikan konten yang diteruskan dan sembunyikan konten yang diteruskan pada pemuatan terlebih dahulu untuk menghapus iklan yang mengganggu
// @description:it    Nascondi automaticamente il contenuto inoltrato e nascondi il contenuto inoltrato al primo caricamento per rimuovere gli annunci fastidiosi
// @description:ja    転送されたコンテンツを自動的に非表示にし、最初のロードで転送されたコンテンツを非表示にして迷惑な広告を削除する
// @description:ka    ავტომატურად მალავს გადაგზავნილ შინაარსს და დამალვა გადაგზავნილი შინაარსი პირველ დატვირთვით, რომ ამოიღოთ შემაშფოთებელი რეკლამები
// @description:ko    성가신 광고를 제거하기 위해 첫 번째로드시 전달 된 컨텐츠를 자동으로 숨기고 전달 된 컨텐츠를 숨 깁니다.
// @description:nb    Skjul skjuler videresendt innhold og skjul videresendt innhold ved første lasting for å fjerne irriterende annonser
// @description:nl    Verberg automatisch doorgestuurde inhoud en verberg door doorgestuurde inhoud bij het eerste laden om vervelende advertenties te verwijderen
// @description:pl    Automatycznie ukryj przekazaną zawartość i ukryj przekazaną zawartość przy pierwszym ładowaniu, aby usunąć irytujące reklamy
// @description:pt-BR Ocultar automaticamente o conteúdo encaminhado e ocultar o conteúdo encaminhado no primeiro carregamento para remover anúncios irritantes
// @description:ro    Ascundeți automat conținutul redirecționat și ascundeți conținutul redirecționat la prima încărcare pentru a elimina reclame enervante
// @description:ru    Автоматически спрятать контент и спрятаться с перенаправленным контентом при первой загрузке, чтобы удалить раздражающие объявления
// @description:sk    Automaticky skryte preposlaný obsah a skryte preposlaný obsah pri prvom načítaní, aby ste odstránili nepríjemné reklamy
// @description:sr    Аутоматски сакријте садржај за прослеђивање и сакријте садржај у првом оптерећењу да бисте уклонили досадне огласе
// @description:sv    Göm automatiskt vidarebefordrat innehåll och dölj vidarebefordrat innehåll vid första lastning för att ta bort irriterande annonser
// @description:th    ซ่อนเนื้อหาที่ส่งต่อโดยอัตโนมัติและซ่อนเนื้อหาที่ส่งต่อไว้ในการโหลดครั้งแรกเพื่อลบโฆษณาที่น่ารำคาญ
// @description:tr    İşten iletilen içeriği otomatik olarak gizleyin ve can sıkıcı reklamları kaldırmak için ilk yüklemede yönlendirilmiş içeriği gizle
// @description:ug    ئاپتوماتىك ھالدا يوللانغان مەزمۇنلارنى ئاپتوماتىك يوشۇرۇپ, ئالدى بىلەن بىزار بولغان ئېلانلارنى بىزار قىلىدىغان ئېلانلارنى چىقىرىپ تاشلاڭ
// @description:uk    Автоматично приховати пересищений вміст і приховати вміст пересилання при першому завантаженні, щоб видалити дратівливі оголошення
// @description:vi    Tự động ẩn nội dung được chuyển tiếp và ẩn nội dung được chuyển tiếp khi tải đầu tiên để xóa quảng cáo gây phiền nhiễu
// @description:zh    自动隐藏转发转发内容,并且在首次加载时隐藏转发内容,移除烦人的广告
// @description:zh-CN 自动隐藏转发转发内容,并且在首次加载时隐藏转发内容,移除烦人的广告
// @description:zh-HK 自動隱藏轉發轉發內容,並且在首次加載時隱藏轉發內容,移除煩人的廣告
// @description:zh-SG 自动隐藏转发转发内容,并且在首次加载时隐藏转发内容,移除烦人的广告
// @description:zh-TW 自動隱藏轉發轉發內容,並且在首次加載時隱藏轉發內容,移除煩人的廣告
// @author            Owyn,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts
// @license           MIT
// @icon              https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/x.svg
// @compatible        chrome
// @compatible        firefox
// @compatible        edge
// @compatible        opera
// @compatible        safari
// @compatible        kiwi
// @compatible        qq
// @compatible        via
// @compatible        brave
// @grant             GM_registerMenuCommand
// @noframes          
// @run-at            document-end
// @sandbox           JavaScript
// @match             https://x.com/*
// @match             https://twitter.com/*
// @version           2025.03.11.0654
// @created           2025-03-11 06:54:32
// @modified          2025-03-11 06:54:32
// @downloadURL       https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-hide-reposts/twitter-hide-reposts.user.js
// @downloadURL       https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/twitter-hide-reposts/twitter-hide-reposts.user.js
// ==/UserScript==
/**
 * File: twitter-hide-reposts.user.js
 * Project: UserScripts
 * File Created: 2025/03/11,Tuesday 06:55:14
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/11,Tuesday 08:28:39
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */
'use strict'

const tweetCSS = '[data-testid="cellInnerDiv"]'
const repostCSS = '[data-testid="socialContext"]'
const alreadyHiddenCSS = '[style*="display: none;"]'

function hideReposts() {
    var n = document.querySelectorAll(tweetCSS + ':has(' + repostCSS + '):not(' + alreadyHiddenCSS + ')')
    for (let i = 0; i < n.length; i++) {
        n[i].style.display = 'none'
        console.debug('hid a repost')
    }
    setTimeout(hideReposts, 500)
}
hideReposts()
window.addEventListener('scroll', hideReposts)

if (typeof GM_registerMenuCommand !== 'undefined') {
    GM_registerMenuCommand('Disable (this once for this page)', () => window.removeEventListener('scroll', hideReposts), 'h')
}
