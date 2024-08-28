// ==UserScript==
// @version      6.6.2
// @name         Magic Userscript+ : Show Site All UserJS
// @name:ar      Magic Userscript+: عرض جميع ملفات UserJS
// @name:es      Magic Userscript+: Mostrar sitio todos los UserJS
// @name:fr      Magic Userscript+ : Afficher le site Tous les UserJS
// @name:ja      Magic Userscript+ : サイトをすべて表示 UserJS
// @name:nl      Magic Userscript+: Site alle UserJS tonen
// @name:ru      Magic Userscript+: показать сайт всем UserJS
// @name:zh      Magic Userscript+ ：显示站点所有 UserJS
// @name:zh-CN      Magic Userscript+ ：显示站点所有 UserJS
// @name:zh-TW      Magic Userscript+ ：显示站点所有 UserJS
// @description  Finds available userscripts for the current webpage.
// @description:ar      يبحث عن نصوص المستخدمين المتاحة لصفحة الويب الحالية.
// @description:es      Busca los usercripts disponibles para la página web actual.
// @description:fr      Recherche les userscripts disponibles pour la page web en cours.
// @description:ja      現在のウェブページで利用可能なユーザスクリプトを検索します。
// @description:nl      Zoekt beschikbare gebruikerscripts voor de huidige webpagina.
// @description:ru      Находит доступные юзерскрипты для текущей веб-страницы.
// @description:zh      为当前网页查找可用的用户脚本。
// @description:zh-CN      为当前网页查找可用的用户脚本。
// @description:zh-TW      为当前网页查找可用的用户脚本。
// @supportURL   https://github.com/magicoflolis/Userscript-Plus/issues
// @namespace    https://github.com/magicoflolis/Userscript-Plus
// @homepageURL  https://github.com/magicoflolis/Userscript-Plus
// @icon         data:image/png;base64,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
// @license      MIT
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @connect     greasyfork.org
// @connect     sleazyfork.org
// @connect     github.com
// @connect     openuserjs.org
// @grant     GM_addElement
// @grant     GM_info
// @grant     GM_getValue
// @grant     GM_openInTab
// @grant     GM_setValue
// @grant     GM_xmlhttpRequest
// @grant     GM.addElement
// @grant     GM.info
// @grant     GM.getValue
// @grant     GM.openInTab
// @grant     GM.setValue
// @grant     GM.xmlHttpRequest
// @match     https://*/*
// @noframes
// @run-at     document-start
// @downloadURL https://update.greasyfork.org/scripts/421603/Magic%20Userscript%2B%20%3A%20Show%20Site%20All%20UserJS.user.js
// @updateURL https://update.greasyfork.org/scripts/421603/Magic%20Userscript%2B%20%3A%20Show%20Site%20All%20UserJS.meta.js
// ==/UserScript==
(() => {
'use strict';
/******************************************************************************/
/**
 * Uncompressed locales + compiler
 *
 * [_locales](https://github.com/magicoflolis/Userscript-Plus/tree/master/src/_locales)
 *
 * [languageLoader.js](https://github.com/magicoflolis/Userscript-Plus/blob/master/tools/languageLoader.js)
 */
const translations = {"ar":{"legacy":"يرجى إعادة ضبط التكوين الخاص بك!","createdby":"انشأ من قبل","name":"اسم","daily_installs":"التثبيت اليومي","close":"يغلق","filterA":"منقي","max":"تحقيق أقصى قدر","min":"تصغير","search":"يبحث","search_placeholder":"بحث في البرامج النصية","install":"تثبيت","issue":"إصدار جديد","version_number":"الإصدار","updated":"آخر تحديث","total_installs":"إجمالي التثبيت","ratings":"التقييمات","good":"جيد","ok":"جيد","bad":"سيء","created_date":"تم إنشاؤه","redirect":"شوكة دهنية للكبار","filter":"تصفية اللغات الأخرى","dtime":"عرض المهلة","save":"حفظ","reset":"إعادة تعيين","preview_code":"كود المعاينة","saveFile":"احفظ الملف","newTab":"علامة تبويب جديدة","applies_to":"ينطبق على","license":"الترخيص","no_license":"لا يوجد","antifeatures":"إعلانات","userjs_fullscreen":"ملء الشاشة الكاملة التلقائي","listing_none":"(لا يوجد)","export_config":"تهيئة التصدير","export_theme":"تصدير السمة","import_config":"استيراد تهيئة الاستيراد","import_theme":"استيراد النسق"},"en":{"legacy":"PLEASE RESET YOUR CONFIG!","createdby":"Created by","name":"Name","daily_installs":"Daily Installs","close":"Close","filterA":"Filter","max":"Maximize","min":"Minimize","search":"Search","search_placeholder":"Search for userscripts","install":"Install","issue":"New Issue","version_number":"Version","updated":"Last Updated","total_installs":"Total Installs","ratings":"Ratings","good":"Good","ok":"Ok","bad":"Bad","created_date":"Created","redirect":"Greasy Fork for adults","filter":"Filter out other languages","dtime":"Display Timeout","save":"Save","reset":"Reset","preview_code":"Preview Code","saveFile":"Save File","newTab":"New Tab","applies_to":"Applies to","license":"License","no_license":"N/A","antifeatures":"Antifeatures","userjs_fullscreen":"Automatic Fullscreen","listing_none":"(None)","export_config":"Export Config","export_theme":"Export Theme","import_config":"Import Config","import_theme":"Import Theme"},"en_GB":{"legacy":"PLEASE RESET YOUR CONFIG!","createdby":"Created by","name":"Name","daily_installs":"Daily Installs","close":"Close","filterA":"Filter","max":"Maximize","min":"Minimize","search":"Search","search_placeholder":"Search scripts","install":"Install","issue":"New Issue","version_number":"Version","updated":"Last Updated","total_installs":"Total Installs","ratings":"Ratings","good":"Good","ok":"Ok","bad":"Bad","created_date":"Created","redirect":"Greasy Fork for adults","filter":"Filter out other languages","dtime":"Display Timeout","save":"Save","reset":"Reset","preview_code":"Preview Code","saveFile":"Save File","newTab":"New Tab","applies_to":"Applies to","license":"License","no_license":"N/A","antifeatures":"Antifeatures","userjs_fullscreen":"Automatic Fullscreen","listing_none":"(None)","export_config":"Export Config","export_theme":"Export Theme","import_config":"Import Config","import_theme":"Import Theme"},"es":{"legacy":"¡POR FAVOR RESTABLECE TU CONFIGURACIÓN!","createdby":"Creado por","name":"Nombre","daily_installs":"Instalaciones diarias","close":"Ya no se muestra","filterA":"Filtro","max":"Maximizar","min":"Minimizar","search":"Busque en","search_placeholder":"Buscar userscripts","install":"Instalar","issue":"Nueva edición","version_number":"Versión","updated":"Última actualización","total_installs":"Total de instalaciones","ratings":"Clasificaciones","good":"Bueno","ok":"Ok","bad":"Malo","created_date":"Creado","redirect":"Greasy Fork para adultos","filter":"Filtrar otros idiomas","dtime":"Mostrar el tiempo de espera","save":"Guardar","reset":"Reiniciar","preview_code":"Vista previa del código","saveFile":"Guardar archivo","newTab":"Guardar archivo","applies_to":"Se aplica a","license":"Licencia","no_license":"Desconocida","antifeatures":"Características indeseables","userjs_fullscreen":"Pantalla completa automática","listing_none":"(Ninguno)","export_config":"Exportar configuración","export_theme":"Exportar tema","import_config":"Importar configuración","import_theme":"Importar tema"},"fr":{"legacy":"VEUILLEZ RÉINITIALISER VOTRE CONFIG !","createdby":"Créé par","name":"Nom","daily_installs":"Installations quotidiennes","close":"Ne plus montrer","filterA":"Filtre","max":"Maximiser","min":"Minimiser","search":"Recherche","search_placeholder":"Rechercher des userscripts","install":"Installer","issue":"Nouveau numéro","version_number":"Version","updated":"Dernière mise à jour","total_installs":"Total des installations","ratings":"Notations","good":"Bon","ok":"Ok","bad":"Mauvais","created_date":"Créé","redirect":"Greasy Fork pour les adultes","filter":"Filtrer les autres langues","dtime":"Délai d'affichage","save":"Sauvez","reset":"Réinitialiser","preview_code":"Prévisualiser le code","saveFile":"Enregistrer le fichier","newTab":"Nouvel onglet","applies_to":"S'applique à","license":"Licence","no_license":"N/A","antifeatures":"Antifeatures","userjs_fullscreen":"Plein écran automatique","listing_none":"(Aucun)","export_config":"Export Config","export_theme":"Exporter le thème","import_config":"Importer la configuration","import_theme":"Importer le thème"},"ja":{"legacy":"設定をリセットしてください。","createdby":"によって作成された","name":"名前","daily_installs":"デイリーインストール","close":"表示されなくなりました","filterA":"フィルター","max":"最大化","min":"ミニマム","search":"検索","search_placeholder":"ユーザースクリプトの検索","install":"インストール","issue":"新刊のご案内","version_number":"バージョン","updated":"最終更新日","total_installs":"総インストール数","ratings":"レーティング","good":"グッド","ok":"良い","bad":"悪い","created_date":"作成","redirect":"大人のGreasyfork","filter":"他の言語をフィルタリングする","dtime":"表示タイムアウト","save":"拯救","reset":"リセット","preview_code":"コードのプレビュー","saveFile":"ファイルを保存","newTab":"新しいタブ","applies_to":"適用対象","license":"ライセンス","no_license":"不明","antifeatures":"アンチ機能","userjs_fullscreen":"自動フルスクリーン","listing_none":"(なし)","export_config":"エクスポート設定","export_theme":"テーマのエクスポート","import_config":"設定のインポート","import_theme":"テーマのインポート"},"nl":{"legacy":"RESET UW CONFIG!","createdby":"Gemaakt door","name":"Naam","daily_installs":"Dagelijkse Installaties","close":"Sluit","filterA":"Filter","max":"Maximaliseer","min":"Minimaliseer","search":"Zoek","search_placeholder":"Zoeken naar gebruikersscripts","install":"Installeer","issue":"Nieuw Issue","version_number":"Versie","updated":"Laatste Update","total_installs":"Totale Installaties","ratings":"Beoordeling","good":"Goed","ok":"Ok","bad":"Slecht","created_date":"Aangemaakt","redirect":"Greasy Fork voor volwassenen","filter":"Filter andere talen","dtime":"Weergave timeout","save":"Opslaan","reset":"Opnieuw instellen","preview_code":"Voorbeeldcode","saveFile":"Bestand opslaan","newTab":"Nieuw tabblad","applies_to":"Geldt voor","license":"Licentie","no_license":"N.v.t.","antifeatures":"Functies voor eigen gewin","userjs_fullscreen":"Automatisch volledig scherm","listing_none":"(Geen)","export_config":"Configuratie exporteren","export_theme":"Thema exporteren","import_config":"Configuratie importeren","import_theme":"Thema importeren"},"ru":{"legacy":"ПОЖАЛУЙСТА, СБРОСЬТЕ КОНФИГ!","createdby":"Сделано","name":"Имя","daily_installs":"Ежедневные установки","close":"Больше не показывать","filterA":"Фильтр","max":"Максимизировать","min":"Минимизировать","search":"Поиск","search_placeholder":"Поиск юзерскриптов","install":"Установите","issue":"Новый выпуск","version_number":"Версия","updated":"Последнее обновление","total_installs":"Всего установок","ratings":"Рейтинги","good":"Хорошо","ok":"Хорошо","bad":"Плохо","created_date":"Создано","redirect":"Greasy Fork для взрослых","filter":"Отфильтровать другие языки","dtime":"Тайм-аут отображения","save":"Сохранить","reset":"Перезагрузить","preview_code":"Предварительный просмотр кода","saveFile":"Сохранить файл","newTab":"Новая вкладка","applies_to":"Применяется к","license":"Лицензия","no_license":"Недоступно","antifeatures":"Нежелательная функциональность","userjs_fullscreen":"Автоматический полноэкранный режим","listing_none":"(нет)","export_config":"Экспорт конфигурации","export_theme":"Экспорт темы","import_config":"Импорт конфигурации","import_theme":"Импортировать тему"},"zh":{"legacy":"请重置您的配置！","createdby":"由...制作","name":"姓名","daily_installs":"日常安装","close":"不再显示","filterA":"过滤器","max":"最大化","min":"最小化","search":"搜索","search_placeholder":"搜索用户脚本","install":"安装","issue":"新问题","version_number":"版本","updated":"最后更新","total_installs":"总安装量","ratings":"评级","good":"好的","ok":"好的","bad":"不好","created_date":"创建","redirect":"大人的Greasyfork","filter":"过滤掉其他语言","dtime":"显示超时","save":"拯救","reset":"重置","preview_code":"预览代码","saveFile":"保存存档","newTab":"新标签","applies_to":"适用于","license":"许可证","no_license":"暂无","antifeatures":"可能不受欢迎的功能","userjs_fullscreen":"自动全屏","listing_none":"(无)","export_config":"导出配置","export_theme":"导出主题","import_config":"导入配置","import_theme":"导入主题"},"zh_CN":{"legacy":"请重置您的配置！","createdby":"由...制作","name":"姓名","daily_installs":"日常安装","close":"不再显示","filterA":"过滤器","max":"最大化","min":"最小化","search":"搜索","search_placeholder":"搜索用户脚本","install":"安装","issue":"新问题","version_number":"版本","updated":"最后更新","total_installs":"总安装量","ratings":"评级","good":"好的","ok":"好的","bad":"不好","created_date":"创建","redirect":"大人的Greasyfork","filter":"过滤掉其他语言","dtime":"显示超时","save":"拯救","reset":"重置","preview_code":"预览代码","saveFile":"保存存档","newTab":"新标签","applies_to":"适用于","license":"许可证","no_license":"暂无","antifeatures":"可能不受欢迎的功能","userjs_fullscreen":"自动全屏","listing_none":"(无)","export_config":"导出配置","export_theme":"导出主题","import_config":"导入配置","import_theme":"导入主题"},"zh_TW":{"legacy":"请重置您的配置！","createdby":"由...制作","name":"姓名","daily_installs":"日常安装","close":"不再显示","filterA":"过滤器","max":"最大化","min":"最小化","search":"搜索","search_placeholder":"搜索用户脚本","install":"安装","issue":"新问题","version_number":"版本","updated":"最后更新","total_installs":"总安装量","ratings":"评级","good":"好的","ok":"好的","bad":"不好","created_date":"创建","redirect":"大人的Greasyfork","filter":"过滤掉其他语言","dtime":"显示超时","save":"拯救","reset":"重置","preview_code":"预览代码","saveFile":"保存存档","newTab":"新标签","applies_to":"适用于","license":"许可证","no_license":"暂无","antifeatures":"可能不受欢迎的功能","userjs_fullscreen":"自动全屏","listing_none":"(无)","export_config":"导出配置","export_theme":"导出主题","import_config":"导入配置","import_theme":"导入主题"}};
/**
 * To compile this CSS `pnpm run build:Sass`
 *
 * [Uncompiled Cascading Style Sheet](https://github.com/magicoflolis/Userscript-Plus/tree/master/src/sass)
 */
const main_css = `mujs-root{--mujs-even-row: hsl(222, 14%, 22%);--mujs-odd-row: hsl(222, 14%, 11%);--mujs-even-err: hsl(0, 100%, 22%);--mujs-odd-err: hsl(0, 100%, 11%);--mujs-background-color: hsl(222, 14%, 33%);--mujs-gf-color: hsl(204, 100%, 40%);--mujs-sf-color: hsl(12, 86%, 50%);--mujs-border-b-color: hsla(0, 0%, 0%, 0);--mujs-gf-btn-color: hsl(211, 87%, 56%);--mujs-sf-btn-color: hsl(12, 86%, 50%);--mujs-sf-txt-color: hsl(12, 79%, 55%);--mujs-txt-color: hsl(0, 0%, 100%);--mujs-chck-color: hsla(0, 0%, 100%, 0.568);--mujs-chck-gf: hsla(197, 100%, 50%, 0.568);--mujs-chck-git: hsla(213, 13%, 16%, 0.568);--mujs-chck-open: hsla(12, 86%, 50%, 0.568);--mujs-placeholder: hsl(81, 56%, 54%);--mujs-position-top: unset;--mujs-position-bottom: 1em;--mujs-position-left: unset;--mujs-position-right: 1em;--mujs-font-family: Arial, Helvetica, sans-serif;font-family:var(--mujs-font-family, Arial, Helvetica, sans-serif);text-rendering:optimizeLegibility;word-break:normal;font-size:14px;color:var(--mujs-txt-color, hsl(0, 0%, 100%))}mujs-root *{scrollbar-color:var(--mujs-txt-color, hsl(0, 0%, 100%)) #2e323d;scrollbar-width:thin}@supports not (scrollbar-width: thin){mujs-root * ::-webkit-scrollbar{width:1.4vw;height:3.3vh}mujs-root * ::-webkit-scrollbar-track{background-color:#2e323d;border-radius:16px;margin-top:3px;margin-bottom:3px;box-shadow:inset 0 0 6px rgba(0,0,0,.3)}mujs-root * ::-webkit-scrollbar-thumb{border-radius:16px;background-color:var(--mujs-txt-color, hsl(0, 0%, 100%));background-image:-webkit-linear-gradient(45deg, hsla(0, 0%, 100%, 0.2) 25%, transparent 25%, transparent 50%, hsla(0, 0%, 100%, 0.2) 50%, hsla(0, 0%, 100%, 0.2) 75%, transparent 75%, transparent)}mujs-root * ::-webkit-scrollbar-thumb:hover{background:var(--mujs-txt-color, hsl(0, 0%, 100%))}}mu-js{line-height:normal}mujs-section>label,.mujs-homepag e,td.mujs-list,.install{font-size:16px}.install,.mujs-homepage{font-weight:700}mujs-section>label,td.mujs-list{font-weight:500}.mujs-sty-flex>mujs-btn{margin:auto}.mujs-invalid{border-radius:8px !important;border-width:2px !important;border-style:solid !important;border-color:red !important}mujs-tabs,mujs-column,mujs-row,.mujs-sty-flex{display:flex}mujs-column,mujs-row{gap:.5em}@media screen and (max-width: 800px){mujs-column{flex-flow:row wrap}}mujs-column count-frame[data-counter=greasyfork]{background:var(--mujs-gf-color, hsl(204, 100%, 40%))}mujs-column count-frame[data-counter=sleazyfork]{background:var(--mujs-sf-color, hsl(12, 86%, 50%))}mujs-column count-frame[data-counter=github]{background:#23282e}mujs-column count-frame[data-counter=openuserjs]{background:rgba(237,62,18,.568)}mujs-row{flex-flow:column wrap}mu-js{cursor:default}.hidden{display:none !important;z-index:-1 !important}mujs-main{width:100%;width:-moz-available;width:-webkit-fill-available;background:var(--mujs-background-color, hsl(222, 14%, 33%)) !important;border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));border-radius:16px}@media screen and (max-height: 720px){mujs-main:not(.webext-page){height:100% !important;bottom:0rem !important;right:0rem !important;margin:0rem !important}}mujs-main.expanded{height:100% !important;bottom:0rem !important}mujs-main:not(.webext-page){position:fixed;height:492px}mujs-main:not(.webext-page):not(.expanded){margin-left:1rem;margin-right:1rem;right:1rem;bottom:1rem}mujs-main:not(.hidden){z-index:100000000000000000 !important;display:flex !important;flex-direction:column !important}mujs-main>*{width:100%;width:-moz-available;width:-webkit-fill-available}mujs-main mujs-toolbar{order:0;padding:.5em;display:flex;place-content:space-between}mujs-main mujs-toolbar mujs-tabs{overflow:hidden;order:0}mujs-main mujs-toolbar mujs-column{flex-flow:row nowrap;order:999999999999}mujs-main mujs-toolbar>*{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}mujs-main mujs-tabs{gap:.5em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-flow:row wrap}mujs-main mujs-tabs mujs-tab{padding:.25em;min-width:150px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:flex;place-content:space-between;border:1px solid rgba(0,0,0,0);border-radius:4px;background:rgba(0,0,0,0)}mujs-main mujs-tabs mujs-tab.active{background:var(--mujs-even-row, hsl(222, 14%, 18%))}mujs-main mujs-tabs mujs-tab:not(.active):hover{background:var(--mujs-even-row, hsl(222, 14%, 18%))}mujs-main mujs-tabs mujs-tab mujs-host{float:left;overflow:auto;overflow-wrap:break-word;text-overflow:ellipsis;white-space:nowrap}mujs-main mujs-tabs mujs-tab mu-js{float:right}mujs-main mujs-tabs mujs-addtab{order:999999999999;font-size:20px;padding:0px .25em}mujs-main mujs-tabs mujs-addtab:hover{background:var(--mujs-even-row, hsl(222, 14%, 18%))}mujs-main mujs-tab,mujs-main mujs-btn,mujs-main input{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}mujs-main input{background:rgba(0,0,0,0);color:var(--mujs-txt-color, hsl(0, 0%, 100%))}mujs-main input:not([type=checkbox]){border:rgba(0,0,0,0);outline:none !important}mujs-main textarea{background:inherit;overflow-y:auto;color:var(--mujs-placeholder, hsl(81, 56%, 54%));border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));border-radius:10px;resize:vertical;outline:none;font-family:monospace;font-size:14px}mujs-main textarea:focus{outline:none}mujs-main th,mujs-main .mujs-cfg *:not(input[type=password],input[type=text],input[type=number]){-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important}mujs-main .mujs-footer{order:3;overflow-x:hidden;text-align:center;border-radius:16px}mujs-main .mujs-footer>*{min-height:50px}mujs-main .mujs-footer .error:nth-child(even){background:var(--mujs-even-err, hsl(0, 100%, 22%)) !important}mujs-main .mujs-footer .error:nth-child(odd){background:var(--mujs-odd-err, hsl(0, 100%, 11%)) !important}.mainframe{background:rgba(0,0,0,0);position:fixed;bottom:var(--mujs-position-bottom, 1rem);right:var(--mujs-position-right, 1rem);top:var(--mujs-position-top, unset);left:var(--mujs-position-left, unset)}.mainframe count-frame{width:fit-content;width:-moz-fit-content;width:-webkit-fit-content;height:auto;padding:14px 16px}.mainframe.error{opacity:1 !important}.mainframe.error count-frame{background:var(--mujs-even-err, hsl(0, 100%, 22%)) !important}.mainframe:not(.hidden){z-index:100000000000000000 !important;display:block}count-frame{border-radius:1000px;margin:0px 3px;padding:4px 6px;border:2px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));font-size:16px;font-weight:400;display:inline-block;text-align:center;min-width:1em;background:var(--mujs-background-color, hsl(222, 14%, 33%));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mujs-header{order:1;display:flex;border-bottom:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));padding-left:.5em;padding-right:.5em;padding-bottom:.5em;font-size:1em;place-content:space-between;height:fit-content;height:-moz-fit-content;height:-webkit-fit-content;gap:1em}mujs-header>*:not(mujs-url){height:fit-content;height:-moz-fit-content;height:-webkit-fit-content}mujs-header mujs-url{order:0;flex-grow:1}mujs-header mujs-url>input{width:100%;height:100%;background:var(--mujs-even-row, hsl(222, 14%, 18%));border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));border-radius:4px}mujs-header .rate-container{order:1}mujs-header .mujs-sty-flex{order:2}mujs-header .btn-frame{order:999999999999}mujs-body{order:2;overflow-x:hidden;padding:0px;height:100%;border:1px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));border-bottom-left-radius:16px;border-bottom-right-radius:16px}mujs-body .mujs-ratings{padding:0 .25em;border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));border-radius:1000px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}mujs-body mu-jsbtn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mujs-body table,mujs-body th,mujs-body td{border-collapse:collapse}mujs-body table{width:100%;width:-moz-available;width:-webkit-fill-available}@media screen and (max-width: 1180px){mujs-body table thead>tr{display:table-column}mujs-body table .frame:not(.webext-page){width:100%;display:flex;flex-flow:row wrap;align-items:center;border-bottom:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));padding-top:.5em;padding-bottom:.5em}mujs-body table .frame:not(.webext-page) td{margin:auto;border-bottom:1px solid rgba(0,0,0,0)}mujs-body table .frame:not(.webext-page) td>mujs-a,mujs-body table .frame:not(.webext-page) td>mu-js,mujs-body table .frame:not(.webext-page) td>mujs-column{text-align:center;justify-content:center}mujs-body table .frame:not(.webext-page) td:not(.mujs-name,.install-btn){width:25%}mujs-body table .frame:not(.webext-page) .mujs-name{width:100%}}mujs-body table th,mujs-body table td{border-bottom:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%))}mujs-body table th{position:-webkit-sticky;position:sticky;top:0;background:rgba(72,79,96,.75)}mujs-body table th.mujs-header-name{width:50%}@media screen and (max-width: 800px){mujs-body table th.mujs-header-name{width:auto !important}}mujs-body table .frame:nth-child(even){background:var(--mujs-even-row, hsl(222, 14%, 18%)) !important}mujs-body table .frame:nth-child(odd){background:var(--mujs-odd-row, hsl(222, 14%, 33%)) !important}mujs-body table .frame:not([data-engine=sleazyfork],[data-engine=greasyfork]) mujs-a{color:var(--mujs-sf-txt-color, hsl(12, 79%, 55%))}mujs-body table .frame:not([data-engine=sleazyfork],[data-engine=greasyfork]) mu-jsbtn{background:var(--mujs-sf-btn-color, hsl(12, 86%, 50%));border-color:var(--mujs-sf-btn-color, hsl(12, 86%, 50%))}mujs-body table .frame:not([data-engine=sleazyfork],[data-engine=greasyfork]) mu-jsbtn:hover{background:var(--mujs-sf-txt-color, hsl(12, 79%, 55%));border-color:var(--mujs-sf-txt-color, hsl(12, 79%, 55%))}mujs-body table .frame[data-engine=sleazyfork] mujs-a,mujs-body table .frame[data-engine=greasyfork] mujs-a{color:var(--mujs-gf-color, hsl(197, 100%, 50%))}mujs-body table .frame[data-engine=sleazyfork] mujs-a:hover,mujs-body table .frame[data-engine=greasyfork] mujs-a:hover{color:var(--mujs-gf-btn-color, hsl(211, 87%, 56%))}mujs-body table .frame[data-engine=sleazyfork] mu-jsbtn,mujs-body table .frame[data-engine=greasyfork] mu-jsbtn{background:var(--mujs-gf-color, hsl(204, 100%, 40%));border-color:var(--mujs-gf-color, hsl(204, 100%, 40%))}mujs-body table .frame[data-engine=sleazyfork] mu-jsbtn:hover,mujs-body table .frame[data-engine=greasyfork] mu-jsbtn:hover{background:var(--mujs-gf-btn-color, hsl(211, 87%, 56%));border-color:var(--mujs-gf-btn-color, hsl(211, 87%, 56%))}mujs-body table .frame[data-good] mujs-a,mujs-body table .frame[data-author] mujs-a{color:var(--mujs-placeholder, hsl(81, 56%, 54%))}mujs-body table .frame[data-good] mujs-a:hover,mujs-body table .frame[data-author] mujs-a:hover{color:#80ab30}mujs-body table .frame[data-good] .mujs-list,mujs-body table .frame[data-author] .mujs-list{color:#fff}mujs-body table .frame[data-good] mu-jsbtn,mujs-body table .frame[data-author] mu-jsbtn{color:#20385a;background:var(--mujs-placeholder, hsl(81, 56%, 54%));border-color:var(--mujs-placeholder, hsl(81, 56%, 54%))}mujs-body table .frame[data-good] mu-jsbtn:hover,mujs-body table .frame[data-author] mu-jsbtn:hover{background:#b5d874;border-color:#b5d874}mujs-body table .frame .mujs-ratings[data-el=good]{border-color:#393;background-color:rgba(51,153,51,.102);color:#3f3}mujs-body table .frame .mujs-ratings[data-el=ok]{border-color:#990;background-color:rgba(153,153,0,.102);color:#ff0}mujs-body table .frame .mujs-ratings[data-el=bad]{border-color:#900;background-color:rgba(153,51,51,.102);color:red}mujs-body table .frame svg{fill:currentColor;width:14px;height:14px;background:rgba(0,0,0,0)}mujs-body table .frame>td:not(.mujs-name){text-align:center}mujs-body table .frame>.mujs-name>mujs-a{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}mujs-body table .frame>.mujs-name mu-jsbtn,mujs-body table .frame>.mujs-name mu-js{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}mujs-body table .frame>.mujs-name>mu-jsbtn{margin:auto}mujs-body table .frame>.mujs-name>mujs-column>mu-jsbtn{padding:0px 7px}mujs-body table .frame>.mujs-uframe>mujs-a{font-size:16px;font-weight:500;padding-left:.5rem;padding-right:.5rem}mujs-body table .frame [data-el=more-info]>mujs-row{gap:.25em}mujs-body table .frame [data-el=matches]{gap:.25em;max-width:40em}mujs-body table .frame [data-el=matches] .mujs-grants{display:inline-flex;flex-flow:row wrap;overflow:auto;overflow-wrap:break-word;text-overflow:ellipsis;white-space:nowrap;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-height:5em;gap:.2em}mujs-body table .frame [data-el=matches] .mujs-grants>mujs-a{display:inline}mujs-body table .frame [data-el=matches] .mujs-grants>mujs-a:not([data-command]){cursor:default !important;color:var(--mujs-txt-color, hsl(0, 0%, 100%))}mujs-body table .frame [data-el=matches] .mujs-grants>mujs-a::after{content:", ";color:var(--mujs-txt-color, hsl(0, 0%, 100%))}mujs-body table .frame [data-el=matches] .mujs-grants>mujs-a:last-child::after{content:""}@media screen and (max-width: 1150px){.mujs-cfg{margin:0px auto 1rem auto !important}}.mujs-cfg{height:fit-content;height:-moz-fit-content;height:-webkit-fit-content}@media screen and (max-height: 720px){.mujs-cfg:not(.webext-page){height:100%;height:-moz-available;height:-webkit-fill-available;width:100%;width:-moz-available;width:-webkit-fill-available;overflow-x:auto;padding:.5em}}.mujs-cfg mujs-section{border-radius:16px;padding:.5em}.mujs-cfg mujs-section:nth-child(even){background:var(--mujs-even-row, hsl(222, 14%, 18%)) !important}.mujs-cfg mujs-section:nth-child(odd){background:var(--mujs-odd-row, hsl(222, 14%, 33%)) !important}.mujs-cfg mujs-section>label{display:flex;justify-content:space-between}.mujs-cfg mujs-section>label input:not([type=checkbox]){font-size:14px;position:relative;border-radius:4px;border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%))}.mujs-cfg mujs-section>label input[type=text]::-webkit-input-placeholder{color:var(--mujs-placeholder, hsl(81, 56%, 54%))}.mujs-cfg mujs-section>label input[type=text]::-moz-placeholder{color:var(--mujs-placeholder, hsl(81, 56%, 54%))}.mujs-cfg mujs-section>label input[type=text]:-ms-input-placeholder{color:var(--mujs-placeholder, hsl(81, 56%, 54%))}.mujs-cfg mujs-section>label input[type=text]::-ms-input-placeholder{color:var(--mujs-placeholder, hsl(81, 56%, 54%))}.mujs-cfg mujs-section>label input[type=text]::placeholder{color:var(--mujs-placeholder, hsl(81, 56%, 54%))}.mujs-cfg .mujs-inlab{position:relative;width:38px}.mujs-cfg .mujs-inlab input[type=checkbox]{display:none}.mujs-cfg .mujs-inlab input[type=checkbox]:checked+label{margin-left:0;background:var(--mujs-chck-color, hsla(0, 0%, 100%, 0.568))}.mujs-cfg .mujs-inlab input[type=checkbox]:checked+label:before{right:0px}.mujs-cfg .mujs-inlab input[type=checkbox][data-name=greasyfork]:checked+label,.mujs-cfg .mujs-inlab input[type=checkbox][data-name=sleazyfork]:checked+label{background:var(--mujs-chck-gf, hsla(197, 100%, 50%, 0.568))}.mujs-cfg .mujs-inlab input[type=checkbox][data-name=openuserjs]:checked+label{background:var(--mujs-chck-open, hsla(12, 86%, 50%, 0.568))}.mujs-cfg .mujs-inlab input[type=checkbox][data-name=github]:checked+label{background:var(--mujs-chck-git, hsla(213, 13%, 16%, 0.568))}.mujs-cfg .mujs-inlab label{padding:0;display:block;overflow:hidden;height:16px;border-radius:20px;border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%))}.mujs-cfg .mujs-inlab label:before{content:"";display:block;width:20px;height:20px;margin:-2px;background:var(--mujs-txt-color, hsl(0, 0%, 100%));position:absolute;top:0;right:20px;border-radius:20px}.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset]{background:var(--mujs-sf-btn-color, hsl(12, 86%, 50%));border-color:var(--mujs-sf-btn-color, hsl(12, 86%, 50%))}.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset]:hover{background:var(--mujs-sf-txt-color, hsl(12, 79%, 55%));border-color:var(--mujs-sf-txt-color, hsl(12, 79%, 55%))}.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save]{background:var(--mujs-gf-color, hsl(204, 100%, 40%));border-color:var(--mujs-gf-color, hsl(204, 100%, 40%))}.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save]:hover{background:var(--mujs-gf-btn-color, hsl(211, 87%, 56%));border-color:var(--mujs-gf-btn-color, hsl(211, 87%, 56%))}.mujs-cfg:not(.webext-page){margin:1rem 25rem}mujs-a{display:inline-block}.mujs-name{display:flex;flex-flow:column wrap;gap:.5em}.mujs-name span{font-size:.8em !important}mujs-btn{font-style:normal;font-weight:500;font-variant:normal;text-transform:none;text-rendering:auto;text-align:center;border:1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));font-size:16px;border-radius:4px;line-height:1;padding:6px 15px}mujs-btn svg{fill:var(--mujs-txt-color, hsl(0, 0%, 100%));width:14px;height:14px}mu-jsbtn{font-size:14px;border-radius:4px;font-style:normal;padding:7px 15%;font-weight:400;font-variant:normal;line-height:normal;display:block;text-align:center}mujs-a,mu-jsbtn,.mujs-pointer,.mujs-cfg mujs-section *:not(input[type=password],input[type=text],input[type=number]),.mainbtn,.mainframe,mujs-btn{cursor:pointer !important}
`;
const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
if (inIframe()) {
  return;
}
let userjs = self.userjs;
/**
 * Skip text/plain documents, based on uBlock Origin `vapi.js` file
 *
 * [Source Code](https://github.com/gorhill/uBlock/blob/master/platform/common/vapi.js)
 */
if (
  (document instanceof Document ||
    (document instanceof XMLDocument && document.createElement('div') instanceof HTMLDivElement)) &&
  /^image\/|^text\/plain/.test(document.contentType || '') === false &&
  (self.userjs instanceof Object === false || userjs.UserJS !== true)
) {
  userjs = self.userjs = { UserJS: true };
}
if (!(typeof userjs === 'object' && userjs.UserJS)) {
  return;
}
/******************************************************************************/
// #region Console
const dbg = (...msg) => {
  const dt = new Date();
  console.debug(
    '[%cMagic Userscript+%c] %cDBG',
    'color: rgb(29, 155, 240);',
    '',
    'color: rgb(255, 212, 0);',
    `[${dt.getHours()}:${('0' + dt.getMinutes()).slice(-2)}:${('0' + dt.getSeconds()).slice(-2)}]`,
    ...msg
  );
};
const err = (...msg) => {
  console.error(
    '[%cMagic Userscript+%c] %cERROR',
    'color: rgb(29, 155, 240);',
    '',
    'color: rgb(249, 24, 128);',
    ...msg
  );
  for (const ex of msg) {
    if (typeof ex === 'object' && 'cause' in ex && typeof alert !== 'undefined') {
      alert(`[Magic Userscript+] (${ex.cause}) ${ex.message}`);
    }
  }
};
const info = (...msg) => {
  console.info(
    '[%cMagic Userscript+%c] %cINF',
    'color: rgb(29, 155, 240);',
    '',
    'color: rgb(0, 186, 124);',
    ...msg
  );
};
const log = (...msg) => {
  console.log(
    '[%cMagic Userscript+%c] %cLOG',
    'color: rgb(29, 155, 240);',
    '',
    'color: rgb(219, 160, 73);',
    ...msg
  );
};
// #endregion

let cfg = {};
let ghMsg = null;

/** @type { import("../typings/UserJS.d.ts").safeSelf } */
function safeSelf() {
  if (userjs.safeSelf) {
    return userjs.safeSelf;
  }
  const g = globalThis;
  const safe = {
    XMLHttpRequest: g.XMLHttpRequest,
    createElement: g.document.createElement.bind(g.document),
    createElementNS: g.document.createElementNS.bind(g.document),
    createTextNode: g.document.createTextNode.bind(g.document),
    setTimeout: g.setTimeout,
    clearTimeout: g.clearTimeout
  };
  userjs.safeSelf = safe;
  return safe;
}

// Lets highlight me :)
const authorID = 166061;
// Some UserJS I personally enjoy
const goodUserJS = [
  423001,
  376510,
  23840,
  40525,
  6456,
  'https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js',
  'https://github.com/jesus2099/konami-command/raw/master/INSTALL-USER-SCRIPT.user.js',
  'https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js'
];
// Unsupport webpages for each engine
const engineUnsupported = {
  greasyfork: ['pornhub.com'],
  sleazyfork: ['pornhub.com'],
  openuserjs: [],
  github: []
};
const getUAData = () => {
  if (typeof userjs.isMobile !== 'undefined') {
    return userjs.isMobile;
  }
  try {
    const { platform, mobile } = navigator.userAgentData ?? {};
    userjs.isMobile =
      /Mobile|Tablet/.test(navigator.userAgent ?? '') ||
      mobile ||
      /Android|Apple/.test(platform ?? '');
  } catch (ex) {
    err({ cause: 'getUAData', message: ex.message });
    userjs.isMobile = false;
  }
  return userjs.isMobile;
};
const isMobile = getUAData();
const isGM = typeof GM !== 'undefined';
const winLocation = window.top.location;
const META_START_COMMENT = '// ==UserScript==';
const META_END_COMMENT = '// ==/UserScript==';
const TLD_EXPANSION = ['com', 'net', 'org', 'de', 'co.uk'];
const APPLIES_TO_ALL_PATTERNS = [
  'http://*',
  'https://*',
  'http://*/*',
  'https://*/*',
  'http*://*',
  'http*://*/*',
  '*',
  '*://*',
  '*://*/*',
  'http*'
];
const builtinList = {
  local: /localhost|router|gov|(\d+\.){3}\d+/,
  finance:
    /school|pay|bank|money|cart|checkout|authorize|bill|wallet|venmo|zalo|skrill|bluesnap|coin|crypto|currancy|insurance|finance/,
  social: /login|join|signin|signup|sign-up|password|reset|password_reset/,
  unsupported: {
    host: 'fakku.net',
    pathname: '/hentai/.+/read/page/.+'
  }
};
const defcfg = {
  cache: true,
  codePreview: false,
  autoexpand: false,
  filterlang: false,
  sleazyredirect: false,
  time: 10000,
  blacklist: ['userjs-local', 'userjs-finance', 'userjs-social', 'userjs-unsupported'],
  engines: [
    {
      enabled: true,
      name: 'greasyfork',
      url: 'https://greasyfork.org'
    },
    {
      enabled: false,
      name: 'sleazyfork',
      url: 'https://sleazyfork.org'
    },
    {
      enabled: false,
      name: 'openuserjs',
      url: 'https://openuserjs.org/?q='
    },
    {
      enabled: false,
      name: 'github',
      url: 'https://api.github.com/search/code?q=',
      token: ''
    }
  ],
  theme: {
    'even-row': '',
    'odd-row': '',
    'even-err': '',
    'odd-err': '',
    'background-color': '',
    'gf-color': '',
    'sf-color': '',
    'border-b-color': '',
    'gf-btn-color': '',
    'sf-btn-color': '',
    'sf-txt-color': '',
    'txt-color': '',
    'chck-color': '',
    'chck-gf': '',
    'chck-git': '',
    'chck-open': '',
    placeholder: '',
    'position-top': '',
    'position-bottom': '',
    'position-left': '',
    'position-right': '',
    'font-family': ''
  },
  recommend: {
    author: true,
    others: true
  }
};
class LanguageHandler {
  constructor() {
    this.current = (navigator.language ?? 'en').split('-')[0] ?? 'en';
    this.cache = [];

    const languages = navigator.languages ?? [];
    for (const nlang of languages) {
      const lg = nlang.split('-')[0];
      if (this.cache.indexOf(lg) === -1) {
        this.cache.push(lg);
      }
    }

    if (!this.cache.includes(this.current)) {
      this.cache.push(this.current);
    }
  }
}
const language = new LanguageHandler();
const i18n$ = (...args) => {
  const list = translations[cfg.language] ?? translations[language.current] ?? translations['en'];
  const arr = [];
  for (const arg of args) {
    arr.push(list[arg]);
  }
  return arr.length !== 1 ? arr : arr[0];
};
// #region Utilities
/**
 * @type { import("../typings/UserJS.d.ts").hasOwn }
 */
const hasOwn = (obj, prop) => {
  if (typeof Object.hasOwn !== 'undefined') {
    return Object.hasOwn(obj, prop);
  }
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
/**
 * @type { import("../typings/UserJS.d.ts").objToStr }
 */
const objToStr = (obj) => {
  return Object.prototype.toString.call(obj);
};
/**
 * @type { import("../typings/UserJS.d.ts").strToURL }
 */
const strToURL = (str) => {
  try {
    str = str ?? window.location ?? 'about:blank';
    return objToStr(str).includes('URL') ? str : new URL(str);
  } catch (ex) {
    err({ cause: 'strToURL', message: ex.message });
    return window.location;
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").isRegExp }
 */
const isRegExp = (obj) => {
  const s = objToStr(obj);
  return s.includes('RegExp');
};
/**
 * @type { import("../typings/UserJS.d.ts").isElem }
 */
const isElem = (obj) => {
  const s = objToStr(obj);
  return s.includes('Element');
};
/**
 * @type { import("../typings/UserJS.d.ts").isObj }
 */
const isObj = (obj) => {
  const s = objToStr(obj);
  return s.includes('Object');
};
/**
 * @type { import("../typings/UserJS.d.ts").isFN }
 */
const isFN = (obj) => {
  const s = objToStr(obj);
  return s.includes('Function');
};
/**
 * @type { import("../typings/UserJS.d.ts").isNull }
 */
const isNull = (obj) => {
  return Object.is(obj, null) || Object.is(obj, undefined);
};
/**
 * @type { import("../typings/UserJS.d.ts").isBlank }
 */
const isBlank = (obj) => {
  return (
    (typeof obj === 'string' && Object.is(obj.trim(), '')) ||
    ((obj instanceof Set || obj instanceof Map) && Object.is(obj.size, 0)) ||
    (Array.isArray(obj) && Object.is(obj.length, 0)) ||
    (isObj(obj) && Object.is(Object.keys(obj).length, 0))
  );
};
/**
 * @type { import("../typings/UserJS.d.ts").isEmpty }
 */
const isEmpty = (obj) => {
  return isNull(obj) || isBlank(obj);
};
/**
 * @type { import("../typings/UserJS.d.ts").normalizeTarget }
 */
const normalizeTarget = (target, toQuery = true, root) => {
  if (Object.is(target, null) || Object.is(target, undefined)) {
    return [];
  }
  if (Array.isArray(target)) {
    return target;
  }
  if (typeof target === 'string') {
    return toQuery ? Array.from((root || document).querySelectorAll(target)) : [target];
  }
  if (isElem(target)) {
    return [target];
  }
  return Array.from(target);
};
/**
 * @type { import("../typings/UserJS.d.ts").ael }
 */
const ael = (el, type, listener, options = {}) => {
  try {
    for (const elem of normalizeTarget(el)) {
      if (!elem) {
        continue;
      }
      if (isMobile && type === 'click') {
        elem.addEventListener('touchstart', listener, options);
        continue;
      }
      elem.addEventListener(type, listener, options);
    }
  } catch (ex) {
    err(ex);
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").formAttrs }
 */
const formAttrs = (elem, attr = {}) => {
  if (!elem) {
    return elem;
  }
  for (const key in attr) {
    if (typeof attr[key] === 'object') {
      formAttrs(elem[key], attr[key]);
    } else if (isFN(attr[key])) {
      if (/^on/.test(key)) {
        elem[key] = attr[key];
        continue;
      }
      ael(elem, key, attr[key]);
    } else if (key === 'class') {
      elem.className = attr[key];
    } else {
      elem[key] = attr[key];
    }
  }
  return elem;
};
/**
 * @type { import("../typings/UserJS.d.ts").make }
 */
const make = (tagName, cname, attrs) => {
  let el;
  try {
    const safe = safeSelf();
    el = safe.createElement(tagName);
    if (!isEmpty(cname)) {
      if (typeof cname === 'string') {
        el.className = cname;
      } else if (isObj(cname)) {
        formAttrs(el, cname);
      }
    }
    if (!isEmpty(attrs)) {
      if (typeof attrs === 'string') {
        el.textContent = attrs;
      } else if (isObj(attrs)) {
        formAttrs(el, attrs);
      }
    }
  } catch (ex) {
    err(ex);
  }
  return el;
};

/**
 * @type { import("../typings/UserJS.d.ts").getGMInfo }
 */
const getGMInfo = () => {
  if (isGM) {
    if (isObj(GM.info)) {
      return GM.info;
    } else if (isObj(GM_info)) {
      return GM_info;
    }
  }
  return {
    script: {
      icon: '',
      name: 'Magic Userscript+',
      namespace: 'https://github.com/magicoflolis/Userscript-Plus',
      updateURL: 'https://github.com/magicoflolis/Userscript-Plus/releases',
      version: 'Bookmarklet',
      bugs: 'https://github.com/magicoflolis/Userscript-Plus/issues'
    }
  };
};
const $info = getGMInfo();
// #endregion
/**
 * @type { import("../typings/UserJS.d.ts").dom }
 */
const dom = {
  attr(target, attr, value = undefined) {
    for (const elem of normalizeTarget(target)) {
      if (value === undefined) {
        return elem.getAttribute(attr);
      }
      if (value === null) {
        elem.removeAttribute(attr);
      } else {
        elem.setAttribute(attr, value);
      }
    }
  },
  prop(target, prop, value = undefined) {
    for (const elem of normalizeTarget(target)) {
      if (value === undefined) {
        return elem[prop];
      }
      elem[prop] = value;
    }
  },
  text(target, text) {
    const targets = normalizeTarget(target);
    if (text === undefined) {
      return targets.length !== 0 ? targets[0].textContent : undefined;
    }
    for (const elem of targets) {
      elem.textContent = text;
    }
  },
  cl: {
    add(target, token) {
      if (Array.isArray(token)) {
        for (const elem of normalizeTarget(target)) {
          elem.classList.add(...token);
        }
      } else {
        for (const elem of normalizeTarget(target)) {
          elem.classList.add(token);
        }
      }
    },
    remove(target, token) {
      if (Array.isArray(token)) {
        for (const elem of normalizeTarget(target)) {
          elem.classList.remove(...token);
        }
      } else {
        for (const elem of normalizeTarget(target)) {
          elem.classList.remove(token);
        }
      }
    },
    toggle(target, token, force) {
      let r;
      for (const elem of normalizeTarget(target)) {
        r = elem.classList.toggle(token, force);
      }
      return r;
    },
    has(target, token) {
      for (const elem of normalizeTarget(target)) {
        if (elem.classList.contains(token)) {
          return true;
        }
      }
      return false;
    }
  }
};
class Memorize {
  constructor() {
    /**
     * @type {Map<string, Map<string, any>>}
     */
    this.store = new Map();
    this.create('cfg', 'container', 'userjs');
  }
  /**
   * @template { string } S
   * @param { ...S } maps
   * @returns { S | S[] }
   */
  create(...maps) {
    const resp = [];
    for (const key of maps) {
      if (this.store.has(key)) {
        return this.store.get(key);
      }
      this.store.set(key, new Map());
      resp.push(this.store.get(key));
    }
    return resp.length >= 2 ? resp : resp[0];
  }
}
const memory = new Memorize();
const iconSVG = {
  cfg: {
    viewBox: '0 0 24 24',
    html: '<g><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z" fill="currentColor"></path></g>'
  },
  close: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M4.70718 2.58574C4.31666 2.19522 3.68349 2.19522 3.29297 2.58574L2.58586 3.29285C2.19534 3.68337 2.19534 4.31654 2.58586 4.70706L9.87877 12L2.5859 19.2928C2.19537 19.6834 2.19537 20.3165 2.5859 20.7071L3.293 21.4142C3.68353 21.8047 4.31669 21.8047 4.70722 21.4142L12.0001 14.1213L19.293 21.4142C19.6835 21.8047 20.3167 21.8047 20.7072 21.4142L21.4143 20.7071C21.8048 20.3165 21.8048 19.6834 21.4143 19.2928L14.1214 12L21.4143 4.70706C21.8048 4.31654 21.8048 3.68337 21.4143 3.29285L20.7072 2.58574C20.3167 2.19522 19.6835 2.19522 19.293 2.58574L12.0001 9.87865L4.70718 2.58574Z" fill="currentColor"></path></g>'
  },
  filter: {
    viewBox: '0 0 24 24',
    html: '<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z" fill="currentColor"/></g>'
  },
  fsClose: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H7.5C6.94772 1.5 6.5 1.94772 6.5 2.5V6.5H2.5C1.94772 6.5 1.5 6.94772 1.5 7.5V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H7Z" fill="currentColor"></path> <path d="M17 9.5C15.6193 9.5 14.5 8.38071 14.5 7V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H16.5C17.0523 1.5 17.5 1.94772 17.5 2.5V6.5H21.5C22.0523 6.5 22.5 6.94772 22.5 7.5V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H17Z" fill="currentColor"></path> <path d="M17 14.5C15.6193 14.5 14.5 15.6193 14.5 17V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H16.5C17.0523 22.5 17.5 22.0523 17.5 21.5V17.5H21.5C22.0523 17.5 22.5 17.0523 22.5 16.5V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H17Z" fill="currentColor"></path> <path d="M9.5 17C9.5 15.6193 8.38071 14.5 7 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V16.5C1.5 17.0523 1.94772 17.5 2.5 17.5H6.5V21.5C6.5 22.0523 6.94772 22.5 7.5 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V17Z" fill="currentColor"></path></g>'
  },
  fsOpen: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H3.5C4.05228 9.5 4.5 9.05228 4.5 8.5V4.5H8.5C9.05228 4.5 9.5 4.05228 9.5 3.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H4Z" fill="currentColor"></path> <path d="M20 1.5C21.3807 1.5 22.5 2.61929 22.5 4V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H20.5C19.9477 9.5 19.5 9.05228 19.5 8.5V4.5H15.5C14.9477 4.5 14.5 4.05228 14.5 3.5V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H20Z" fill="currentColor"></path> <path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H20.5C19.9477 14.5 19.5 14.9477 19.5 15.5V19.5H15.5C14.9477 19.5 14.5 19.9477 14.5 20.5V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H20Z" fill="currentColor"></path> <path d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V20.5C9.5 19.9477 9.05228 19.5 8.5 19.5H4.5V15.5C4.5 14.9477 4.05228 14.5 3.5 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V20Z" fill="currentColor"></path></g>'
  },
  fullscreen: {
    viewBox: '0 0 96 96',
    html: '<g><path d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g>'
  },
  gf: {
    viewBox: '0 0 510.4 510.4',
    html: '<g><path d="M505.2,80c-6.4-6.4-16-6.4-22.4,0l-89.6,89.6c-1.6,1.6-6.4,3.2-12.8,1.6c-4.8-1.6-9.6-3.2-14.4-6.4L468.4,62.4 c6.4-6.4,6.4-16,0-22.4c-6.4-6.4-16-6.4-22.4,0L343.6,142.4c-3.2-4.8-4.8-9.6-4.8-12.8c-1.6-6.4-1.6-11.2,1.6-12.8L430,27.2 c6.4-6.4,6.4-16,0-22.4c-6.4-6.4-16-6.4-22.4,0L290.8,121.6c-16,16-20.8,40-14.4,62.4l-264,256c-16,16-16,43.2,0,59.2 c6.4,6.4,16,11.2,27.2,11.2c11.2,0,22.4-4.8,30.4-12.8L319.6,232c8,3.2,16,4.8,24,4.8c16,0,32-6.4,44.8-17.6l116.8-116.8 C511.6,96,511.6,86.4,505.2,80z M46,475.2c-3.2,3.2-9.6,3.2-14.4,0c-3.2-3.2-3.2-9.6,1.6-12.8l257.6-249.6c0,0,1.6,1.6,1.6,3.2 L46,475.2z M316.4,192c-14.4-14.4-16-35.2-4.8-48c4.8,11.2,11.2,22.4,20.8,32c9.6,9.6,20.8,16,32,20.8 C351.6,208,329.2,206.4,316.4,192z"/></g>'
  },
  gh: {
    viewBox: '0 0 16 16',
    html: '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'
  },
  hide: {
    viewBox: '0 0 24 24',
    html: '<g> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="currentColor"></path></g>'
  },
  install: {
    viewBox: '0 0 16 16',
    html: '<g><path d="M8.75 1.75a.75.75 0 00-1.5 0v6.59L5.3 6.24a.75.75 0 10-1.1 1.02L7.45 10.76a.78.78 0 00.038.038.748.748 0 001.063-.037l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V1.75z"/><path d="M1.75 9a.75.75 0 01.75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-3A.75.75 0 011.75 9z"/></g>'
  },
  issue: {
    viewBox: '0 0 24 24',
    html: '<path fill="none" stroke="#ffff" stroke-width="2" d="M23,20 C21.62,17.91 20,17 19,17 M5,17 C4,17 2.38,17.91 1,20 M19,9 C22,9 23,6 23,6 M1,6 C1,6 2,9 5,9 M19,13 L24,13 L19,13 Z M5,13 L0,13 L5,13 Z M12,23 L12,12 L12,23 L12,23 Z M12,23 C8,22.9999998 5,20.0000002 5,16 L5,9 C5,9 8,6.988 12,7 C16,7.012 19,9 19,9 C19,9 19,11.9999998 19,16 C19,20.0000002 16,23.0000002 12,23 L12,23 Z M7,8 L7,6 C7,3.24 9.24,1 12,1 C14.76,1 17,3.24 17,6 L17,8"/>'
  },
  nav: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.5V5.5Z" fill="currentColor"></path> <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="currentColor"></path><path d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z" fill="currentColor"></path></g>'
  },
  plus: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M13.5 3C13.5 2.44772 13.0523 2 12.5 2H11.5C10.9477 2 10.5 2.44772 10.5 3V10.5H3C2.44772 10.5 2 10.9477 2 11.5V12.5C2 13.0523 2.44772 13.5 3 13.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13.5H21C21.5523 13.5 22 13.0523 22 12.5V11.5C22 10.9477 21.5523 10.5 21 10.5H13.5V3Z" fill="currentColor"/></g>'
  },
  search: {
    viewBox: '0 0 24 24',
    html: '<g><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z" fill="currentColor"/></g>'
  },
  verified: {
    viewBox: '0 0 56 56',
    fill: 'currentColor',
    stroke: 'currentColor',
    html: '<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'
  },
  load(type, container) {
    const safe = safeSelf();
    const svgElem = safe.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (const [k, v] of Object.entries(iconSVG[type])) {
      if (k === 'html') {
        continue;
      }
      svgElem.setAttributeNS(null, k, v);
    }
    if (typeof iconSVG[type].html === 'string') {
      svgElem.innerHTML = iconSVG[type].html;
    }
    if (container) {
      container.appendChild(svgElem);
      return svgElem;
    }
    return svgElem.outerHTML;
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").StorageSystem }
 */
const StorageSystem = {
  getItem(key) {
    return window.localStorage.getItem(key);
  },
  has(key) {
    return !isNull(this.getItem(key));
  },
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
  async setValue(key, v) {
    v = typeof v === 'string' ? v : JSON.stringify(v ?? {});
    if (isGM) {
      if (isFN(GM.setValue)) {
        await GM.setValue(key, v);
      } else if (isFN(GM_setValue)) {
        GM_setValue(key, v);
      }
    } else {
      this.setItem(`MUJS-${key}`, v);
    }
  },
  async getValue(key, def = {}) {
    try {
      if (isGM) {
        let GMType;
        if (isFN(GM.getValue)) {
          GMType = await GM.getValue(key, JSON.stringify(def));
        } else if (isFN(GM_getValue)) {
          GMType = GM_getValue(key, JSON.stringify(def));
        }
        if (!isNull(GMType)) {
          return JSON.parse(GMType);
        }
      }
      return this.has(`MUJS-${key}`) ? JSON.parse(this.getItem(`MUJS-${key}`)) : def;
    } catch (ex) {
      err(ex);
    }
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").Network }
 */
const Network = {
  async req(url, method = 'GET', responseType = 'json', data = {}, useFetch = false) {
    if (isEmpty(url)) {
      throw new Error('"url" parameter is empty');
    }
    method = Network.bscStr(method, false);
    responseType = Network.bscStr(responseType);
    const params = {
      method,
      ...data
    };
    if (params.hermes) {
      delete params.hermes;
    }
    if (isGM && !useFetch) {
      if (params.credentials) {
        Object.assign(params, {
          anonymous: false
        });
        if (Object.is(params.credentials, 'omit')) {
          Object.assign(params, {
            anonymous: true
          });
        }
        delete params.credentials;
      }
    } else if (params.onprogress) {
      delete params.onprogress;
    }
    return await new Promise((resolve, reject) => {
      if (isGM && !useFetch) {
        Network.xmlRequest({
          url,
          responseType,
          ...params,
          onerror: reject,
          onload: (r_1) => {
            if (r_1.status !== 200) reject(new Error(`${r_1.status} ${url}`));
            if (responseType.match(/basic/)) resolve(r_1);
            resolve(r_1.response);
          }
        });
      } else {
        fetch(url, params)
          .then((response_1) => {
            if (!response_1.ok) reject(response_1);
            const check = (str_2 = 'text') => {
              return isFN(response_1[str_2]) ? response_1[str_2]() : response_1;
            };
            if (responseType.match(/buffer/)) {
              resolve(check('arrayBuffer'));
            } else if (responseType.match(/json/)) {
              resolve(check('json'));
            } else if (responseType.match(/text/)) {
              resolve(check('text'));
            } else if (responseType.match(/blob/)) {
              resolve(check('blob'));
            } else if (responseType.match(/formdata/)) {
              resolve(check('formData'));
            } else if (responseType.match(/clone/)) {
              resolve(check('clone'));
            } else if (responseType.match(/document/)) {
              const domParser = new DOMParser();
              const respTxt = check('text');
              if (respTxt instanceof Promise) {
                respTxt.then((txt) => {
                  const doc = domParser.parseFromString(txt, 'text/html');
                  resolve(doc);
                });
              } else {
                const doc = domParser.parseFromString(respTxt, 'text/html');
                resolve(doc);
              }
            } else {
              resolve(response_1);
            }
          })
          .catch(reject);
      }
    });
  },
  format(bytes, decimals = 2) {
    if (Number.isNaN(bytes)) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.pow(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${Network.sizes[i]}`;
  },
  sizes: ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  async xmlRequest(details) {
    if (isGM) {
      if (isFN(GM.xmlHttpRequest)) {
        return GM.xmlHttpRequest(details);
      } else if (isFN(GM_xmlhttpRequest)) {
        return GM_xmlhttpRequest(details);
      }
    }
    const safe = safeSelf();
    return await new Promise((resolve, reject) => {
      const req = new safe.XMLHttpRequest();
      let method = 'GET';
      let url = 'about:blank';
      let body;
      for (const [key, value] of Object.entries(details)) {
        if (key === 'onload') {
          req.addEventListener('load', () => {
            if (isFN(value)) {
              value(req);
            }
            resolve(req);
          });
        } else if (key === 'onerror') {
          req.addEventListener('error', (evt) => {
            if (isFN(value)) {
              value(evt);
            }
            reject(evt);
          });
        } else if (key === 'onabort') {
          req.addEventListener('abort', (evt) => {
            if (isFN(value)) {
              value(evt);
            }
            reject(evt);
          });
        } else if (key === 'onprogress') {
          req.addEventListener('progress', value);
        } else if (key === 'responseType') {
          if (value === 'buffer') {
            req.responseType = 'arraybuffer';
          } else {
            req.responseType = value;
          }
        } else if (key === 'method') {
          method = value;
        } else if (key === 'url') {
          url = value;
        } else if (key === 'body') {
          body = value;
        }
      }
      req.open(method, url);

      if (isEmpty(req.responseType)) {
        req.responseType = 'text';
      }

      if (body) {
        req.send(body);
      } else {
        req.send();
      }
    });
  },
  bscStr(str = '', lowerCase = true) {
    const txt = str[lowerCase ? 'toLowerCase' : 'toUpperCase']();
    return txt.replaceAll(/\W/g, '');
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").qs }
 */
const qs = (selector, root) => {
  try {
    return (root || document).querySelector(selector);
  } catch (ex) {
    err(ex);
  }
  return null;
};
/**
 * @type { import("../typings/UserJS.d.ts").qsA }
 */
const qsA = (selectors, root) => {
  try {
    return (root || document).querySelectorAll(selectors);
  } catch (ex) {
    err(ex);
  }
  return [];
};
const sleazyRedirect = () => {
  const { hostname } = winLocation;
  const gfSite = /greasyfork\.org/.test(hostname);
  if (!gfSite && cfg.sleazyredirect) {
    return;
  }
  const otherSite = gfSite ? 'sleazyfork' : 'greasyfork';
  if (!qs('span.sign-in-link')) {
    return;
  }
  if (!/scripts\/\d+/.test(winLocation.href)) {
    return;
  }
  if (
    !qs('#script-info') &&
    (otherSite == 'greasyfork' || qs('div.width-constraint>section>p>a'))
  ) {
    const str = winLocation.href.replace(
      /\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,
      '//$1' + otherSite + '.org'
    );
    if (isFN(winLocation.assign)) {
      winLocation.assign(str);
    } else {
      winLocation.href = str;
    }
  }
};
const intersect = (a = [], b = []) => {
  for (const v of a) {
    if (b.includes(v)) {
      return true;
    }
  }
  for (const v of b) {
    if (a.includes(v)) {
      return true;
    }
  }
  return false;
};
// #region Container
class initContainer {
  constructor(url) {
    this.remove = this.remove.bind(this);
    this.webpage = strToURL(url);
    this.host = this.getHost(this.webpage.host);
    this.domain = this.getDomain(this.webpage.host);
    this.ready = false;
    this.injected = false;
    this.shadowRoot = undefined;
    this.supported = isFN(make('main-userjs').attachShadow);
    this.frame = this.supported
      ? make('main-userjs', '', {
          dataset: {
            insertedBy: $info.script.name,
            role: 'primary-container'
          }
        })
      : make('iframe', 'mujs-iframe', {
          dataset: {
            insertedBy: $info.script.name,
            role: 'primary-iframe'
          },
          loading: 'lazy',
          src: 'about:blank',
          style:
            'position: fixed;bottom: 1rem;right: 1rem;height: 525px;width: 90%;margin: 0px 1rem;z-index: 100000000000000020 !important;',
          onload: (iFrame) => {
            /**
             * @type { HTMLIFrameElement }
             */
            const target = iFrame.target;
            if (!target.contentDocument) {
              return;
            }
            this.shadowRoot = target.contentDocument.documentElement;
            this.ready = true;
            dom.cl.add([this.shadowRoot, target.contentDocument.body], 'mujs-iframe');
          }
        });
    if (this.supported) {
      /**
       * @type { ShadowRoot }
       */
      this.shadowRoot = this.frame.attachShadow({
        mode: 'open',
        clonable: false,
        delegatesfocus: false
      });
      this.ready = true;
    }
    this.cache = memory.store.get('container');
    this.userjsCache = memory.store.get('userjs');
    this.root = make('mujs-root');
    this.unsaved = false;
    this.isBlacklisted = false;
    this.rebuild = false;
    this.counters = {
      total: 0
    };
    this.opacityMin = '0.15';
    this.opacityMax = '1';
    this.Timeout = class {
      constructor() {
        this.ids = [];
      }

      set(delay, reason) {
        return new Promise((resolve, reject) => {
          const id = setTimeout(() => {
            Object.is(reason, null) || Object.is(reason, undefined) ? resolve() : reject(reason);
            this.clear(id);
          }, delay);
          this.ids.push(id);
        });
      }

      clear(...ids) {
        this.ids = this.ids.filter((id) => {
          if (ids.includes(id)) {
            clearTimeout(id);
            return false;
          }
          return true;
        });
      }
    };
    window.addEventListener('beforeunload', this.remove);
  }
  /**
   * @param { Function } callback
   * @param { Document } doc
   */
  async inject(callback, doc) {
    if (this.checkBlacklist(this.host)) {
      err('Blacklisted website');
      this.remove();
      return;
    }
    if (!this.shadowRoot) {
      return;
    }
    if (!doc) {
      return;
    }
    while (this.ready === false) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    try {
      doc.documentElement.appendChild(this.frame);
      if (this.injected) {
        return;
      }
      this.shadowRoot.append(this.root);
      if (isNull(this.loadCSS(main_css, 'primary-stylesheet'))) {
        throw new Error('Failed to initialize script!', { cause: 'loadCSS' });
      }
      this.injected = true;
      if (isFN(callback)) {
        callback.call(this, this.shadowRoot);
      }
    } catch (ex) {
      err(ex);
      this.remove();
    }
  }
  remove() {
    memory.store.clear();
    if (this.frame) {
      this.frame.remove();
    }
  }
  async save() {
    this.unsaved = false;
    await StorageSystem.setValue('Config', cfg);
    info('Saved:', cfg);
    return cfg;
  }
  /**
   * @param { string } css - CSS to inject
   * @param { string } name - Name of stylesheet
   * @return { HTMLStyleElement } Style element
   */
  loadCSS(css, name = 'CSS') {
    try {
      if (typeof name !== 'string') {
        throw new Error('"name" must be a typeof "string"', { cause: 'loadCSS' });
      }
      if (qs(`style[data-role="${name}"]`, this.root)) {
        return qs(`style[data-role="${name}"]`, this.root);
      }
      if (typeof css !== 'string') {
        throw new Error('"css" must be a typeof "string"', { cause: 'loadCSS' });
      }
      if (isBlank(css)) {
        throw new Error(`"${name}" contains empty CSS string`, { cause: 'loadCSS' });
      }
      const parent = isEmpty(this.root.shadowRoot) ? this.root : this.root.shadowRoot;
      if (isGM) {
        let sty;
        if (isFN(GM.addElement)) {
          sty = GM.addElement(parent, 'style', {
            textContent: css
          });
        } else if (isFN(GM_addElement)) {
          sty = GM_addElement(parent, 'style', {
            textContent: css
          });
        }
        if (isElem(sty)) {
          sty.dataset.insertedBy = $info.script.name;
          sty.dataset.role = name;
          return sty;
        }
      }
      const sty = make('style', '', {
        textContent: css,
        dataset: {
          insertedBy: $info.script.name,
          role: name
        }
      });
      parent.appendChild(sty);
      return sty;
    } catch (ex) {
      err(ex);
    }
    return null;
  }
  checkBlacklist(str) {
    str = str || this.host;
    let blacklisted = false;
    for (const b of normalizeTarget(cfg.blacklist)) {
      if (typeof b === 'string') {
        if (b.startsWith('userjs-')) {
          const r = /userjs-(\w+)/.exec(b)[1];
          const biList = builtinList[r];
          if (isRegExp(biList)) {
            if (!biList.test(str)) continue;
            blacklisted = true;
          } else if (isObj(biList) && biList.host === this.host) {
            blacklisted = true;
          }
        }
      } else if (isObj(b)) {
        if (!b.enabled) {
          continue;
        }
        if (b.regex === true) {
          const reg = new RegExp(b.url, b.flags);
          if (!reg.test(str)) continue;
          blacklisted = true;
        }
        if (Array.isArray(b.url)) {
          for (const c of b.url) {
            if (!str.includes(c)) continue;
            blacklisted = true;
          }
        }
        if (!str.includes(b.url)) continue;
        blacklisted = true;
      }
    }
    this.isBlacklisted = blacklisted;
    return blacklisted;
  }
  getInfo(url) {
    const webpage = strToURL(url || this.webpage);
    const host = this.getHost(webpage.host);
    const domain = this.getDomain(webpage.host);
    return {
      domain,
      host,
      webpage
    };
  }
  /**
   * @template { string } S
   * @param { S } str
   * @returns { S }
   */
  getHost(str = '') {
    return str.split('.').splice(-2).join('.');
  }
  /**
   * @template { string } S
   * @param { S } str
   * @returns { S }
   */
  getDomain(str = '') {
    return str.split('.').at(-2) ?? 'about:blank';
  }
  renderTheme(theme) {
    theme = theme || cfg.theme;
    if (theme === defcfg.theme) {
      return;
    }
    const sty = this.root.style;
    for (const [k, v] of Object.entries(theme)) {
      const str = `--mujs-${k}`;
      const prop = sty.getPropertyValue(str);
      if (isEmpty(v)) {
        theme[k] = prop;
      }
      if (prop === v) {
        continue;
      }
      sty.removeProperty(str);
      sty.setProperty(str, v);
    }
  }
}
const container = new initContainer();
// #endregion
// #region Primary Function
function primaryFN() {
  try {
    const mouseTimeout = new container.Timeout();
    const frameTimeout = new container.Timeout();

    const urlBar = make('input', 'mujs-url-bar', {
      autocomplete: 'off',
      spellcheck: false,
      type: 'text',
      placeholder: i18n$('search_placeholder')
    });
    const mainbtn = make('count-frame', 'mainbtn', {
      textContent: '0'
    });
    const rateContainer = make('mujs-column', 'rate-container');
    const footer = make('mujs-row', 'mujs-footer');
    const tabbody = make('tbody');
    const toolbar = make('mujs-toolbar');
    const table = make('table');
    const tabhead = make('thead');
    const header = make('mujs-header');
    const tbody = make('mujs-body');
    const cfgpage = make('mujs-row', 'mujs-cfg hidden');
    const countframe = make('mujs-column');
    const btnframe = make('mujs-column', 'btn-frame');
    const exBtn = make('mujs-column', 'mujs-sty-flex hidden');
    const fsearch = make('mujs-btn', 'hidden');
    const exportCFG = make('mujs-btn', 'mujs-export', {
      textContent: i18n$('export_config'),
      dataset: {
        command: 'export-cfg'
      }
    });
    const importCFG = make('mujs-btn', 'mujs-import', {
      textContent: i18n$('import_config'),
      dataset: {
        command: 'import-cfg'
      }
    });
    const exportTheme = make('mujs-btn', 'mujs-export', {
      textContent: i18n$('export_theme'),
      dataset: {
        command: 'export-theme'
      }
    });
    const importTheme = make('mujs-btn', 'mujs-import', {
      textContent: i18n$('import_theme'),
      dataset: {
        command: 'import-theme'
      }
    });
    const btnHandles = make('mujs-column', 'btn-handles');
    const btnHide = make('mujs-btn', 'hide-list', {
      title: i18n$('min'),
      innerHTML: iconSVG.load('hide'),
      dataset: {
        command: 'hide-list'
      }
    });
    const btnfullscreen = make('mujs-btn', 'fullscreen', {
      title: i18n$('max'),
      innerHTML: iconSVG.load('fullscreen'),
      dataset: {
        command: 'fullscreen'
      }
    });
    const main = make('mujs-main', 'hidden');
    const urlContainer = make('mujs-url');
    const closebtn = make('mujs-btn', 'close', {
      title: i18n$('close'),
      innerHTML: iconSVG.load('close'),
      dataset: {
        command: 'close'
      }
    });
    const btncfg = make('mujs-btn', 'settings hidden', {
      title: 'Settings',
      innerHTML: iconSVG.load('cfg'),
      dataset: {
        command: 'settings'
      }
    });
    const btnhome = make('mujs-btn', 'github hidden', {
      title: `GitHub (v${
        $info.script.version.includes('.') || $info.script.version.includes('Book')
          ? $info.script.version
          : $info.script.version.slice(0, 5)
      })`,
      innerHTML: iconSVG.load('gh'),
      dataset: {
        command: 'open-tab',
        webpage: $info.script.namespace
      }
    });
    const btnissue = make('mujs-btn', 'issue hidden', {
      innerHTML: iconSVG.load('issue'),
      title: i18n$('issue'),
      dataset: {
        command: 'open-tab',
        webpage: $info.script.bugs
      }
    });
    const btngreasy = make('mujs-btn', 'greasy hidden', {
      title: 'Greasy Fork',
      innerHTML: iconSVG.load('gf'),
      dataset: {
        command: 'open-tab',
        webpage: 'https://greasyfork.org/scripts/421603'
      }
    });
    const btnnav = make('mujs-btn', 'nav', {
      title: 'Navigation',
      innerHTML: iconSVG.load('nav'),
      dataset: {
        command: 'navigation'
      }
    });
    const mainframe = make('mu-js', 'mainframe', {
      style: `opacity: ${container.opacityMin};`
    });
    btnHandles.append(btnHide, btnfullscreen, closebtn);
    btnframe.append(btnhome, btngreasy, btnissue, btncfg, btnnav);
    toolbar.append(btnHandles);
    urlContainer.append(urlBar);
    header.append(urlContainer, rateContainer, countframe, btnframe);
    tbody.append(table, cfgpage);
    main.append(toolbar, header, tbody, footer);
    mainframe.append(mainbtn);
    exBtn.append(importCFG, importTheme, exportCFG, exportTheme);
    header.append(exBtn);
    container.root.append(mainframe, main);
    for (const engine of cfg.engines) {
      container.counters[engine.name] = 0;
      if (!engine.enabled) {
        continue;
      }
      const counter = make('count-frame', '', {
        dataset: {
          counter: engine.name
        },
        title: engine.url,
        textContent: '0'
      });
      countframe.append(counter);
    }
    class Tabs {
      constructor() {
        this.Tab = new Map();
        this.blank = 'about:blank';
        this.protocal = 'mujs:';
        this.protoReg = new RegExp(`${this.protocal}(.+)`);
        this.el = {
          add: make('mujs-addtab', '', {
            textContent: '+',
            dataset: {
              command: 'new-tab'
            }
          }),
          head: make('mujs-tabs')
        };
        this.el.head.append(this.el.add);
        toolbar.append(this.el.head);
      }
      hasTab(...params) {
        for (const p of params) {
          if (!this.Tab.has(p)) {
            return false;
          }
          const content = normalizeTarget(this.Tab.get(p)).filter((t) => p === t.dataset.host);
          if (isBlank(content)) {
            return false;
          }
        }
        return true;
      }
      storeTab(host) {
        const h = host ?? this.blank;
        if (!this.Tab.has(h)) {
          this.Tab.set(h, new Set());
        }
        return this.Tab.get(h);
      }
      cache(host, ...tabs) {
        const h = host ?? this.blank;
        const tabCache = this.storeTab(h);
        for (const t of normalizeTarget(tabs)) {
          if (tabCache.has(t)) {
            continue;
          }
          tabCache.add(t);
        }
        this.Tab.set(h, tabCache);
        return tabCache;
      }
      mujs(host) {
        if (!host.startsWith(this.protocal)) {
          return;
        }
        const type = host.match(this.protoReg)[1];
        if (type === 'settings') {
          dom.cl.remove([cfgpage, exBtn], 'hidden');
          dom.cl.add(table, 'hidden');
          if (!container.supported) {
            dom.attr(container.frame, 'style', 'height: 100%;');
          }
        }
      }
      active(tab, build = true) {
        for (const t of normalizeTarget(tab, false)) {
          dom.cl.add([cfgpage, exBtn], 'hidden');
          dom.cl.remove(table, 'hidden');
          dom.cl.remove(qsA('mujs-tab', this.el.head), 'active');
          dom.cl.add(t, 'active');
          if (!build) {
            continue;
          }
          const host = t.dataset.host ?? this.blank;
          if (host === this.blank) {
            MUJS.refresh();
          } else if (host.startsWith(this.protocal)) {
            this.mujs(host);
          } else {
            buildlist(host);
          }
        }
      }
      /** @param { HTMLElement } tab */
      close(tab) {
        for (const t of normalizeTarget(tab, false)) {
          const host = t.dataset.host;
          if (container.cache.has(host)) {
            container.cache.delete(host);
          }
          if (dom.cl.has(t, 'active')) {
            MUJS.refresh();
          }
          const sibling = t.previousElementSibling ?? t.nextElementSibling;
          if (sibling) {
            if (sibling.dataset.command !== 'new-tab') {
              this.active(sibling);
            }
          }
          if (this.Tab.has(host)) {
            this.Tab.delete(host);
          }
          t.remove();
        }
      }
      create(host = undefined) {
        if (typeof host === 'string') {
          if (host.startsWith(this.protocal) && this.hasTab(host)) {
            this.active(this.Tab.get(host));
            return;
          }
          const content = normalizeTarget(this.storeTab(host)).filter(
            (t) => host === t.dataset.host
          );
          if (!isEmpty(content)) {
            return;
          }
        }
        const tab = make('mujs-tab', '', {
          dataset: {
            command: 'switch-tab'
          },
          style: `order: ${this.el.head.childElementCount};`
        });
        const tabClose = make('mu-js', '', {
          dataset: {
            command: 'close-tab'
          },
          title: i18n$('close'),
          textContent: 'X'
        });
        const tabHost = make('mujs-host');
        tab.append(tabHost, tabClose);
        this.el.head.append(tab);
        this.active(tab, false);
        this.cache(host, tab);
        if (isNull(host)) {
          MUJS.refresh();
          urlBar.placeholder = i18n$('newTab');
          tab.dataset.host = this.blank;
          tabHost.title = i18n$('newTab');
          tabHost.textContent = i18n$('newTab');
        } else if (host.startsWith(this.protocal)) {
          const type = host.match(this.protoReg)[1];
          tab.dataset.host = host || container.host;
          tabHost.title = type || tab.dataset.host;
          tabHost.textContent = tabHost.title;
          this.mujs(host);
        } else {
          tab.dataset.host = host || container.host;
          tabHost.title = host || container.host;
          tabHost.textContent = tabHost.title;
        }
        return tab;
      }
    }
    const tab = new Tabs();
    const cfgMap = memory.store.get('cfg');
    const rebuildCfg = () => {
      for (const engine of cfg.engines) {
        if (cfgMap.has(engine.name)) {
          const inp = cfgMap.get(engine.name);
          inp.checked = engine.enabled;
          if (engine.name === 'github') {
            const txt = cfgMap.get('github-token');
            dom.prop(txt, 'value', engine.token);
          }
        }
      }
      for (const [k, v] of Object.entries(cfg)) {
        if (typeof v === 'boolean') {
          if (cfgMap.has(k)) {
            const inp = cfgMap.get(k);
            if (inp.type === 'checkbox') {
              inp.checked = v;
            } else {
              dom.prop(inp, 'value', v);
            }
          }
        }
      }
      dom.prop(cfgMap.get('blacklist'), 'value', JSON.stringify(cfg.blacklist, null, ' '));
      dom.prop(cfgMap.get('theme'), 'value', JSON.stringify(cfg.theme, null, ' '));
      container.renderTheme(cfg.theme);
    };
    const doInstallProcess = async (installLink) => {
      if (isFN(winLocation.assign)) {
        winLocation.assign(installLink.href);
      } else {
        winLocation.href = installLink.href;
      }
      installLink.remove();
      await init();
    };
    // #region Main event handlers
    ael(main, 'click', async (evt) => {
      try {
        /** @type { HTMLElement } */
        const target = evt.target.closest('[data-command]');
        if (!target) {
          return;
        }
        const dataset = target.dataset;
        const cmd = dataset.command;
        if (cmd === 'install-script' && dataset.userjs) {
          const dlBtn = make('a', '', {
            onclick(evt) {
              evt.preventDefault();
              doInstallProcess(evt.target);
            }
          });
          dlBtn.href = dataset.userjs;
          dlBtn.click();
        } else if (cmd === 'open-tab' && dataset.webpage) {
          if (isGM) {
            if (isFN(GM.openInTab)) {
              return GM.openInTab(dataset.webpage);
            } else if (isFN(GM_openInTab)) {
              return GM_openInTab(dataset.webpage, {
                active: true,
                insert: true
              });
            }
          }
          return window.open(dataset.webpage, '_blank');
        } else if (cmd === 'navigation') {
          if (dom.cl.has(btngreasy, 'hidden')) {
            dom.cl.remove([btncfg, btngreasy, btnhome, btnissue], 'hidden');
          } else {
            dom.cl.add([btncfg, btngreasy, btnhome, btnissue], 'hidden');
          }
        } else if (cmd === 'list-description') {
          const arr = [];
          const ignoreTags = new Set(['TD', 'MUJS-A', 'MU-JS']);
          for (const node of target.parentElement.childNodes) {
            if (ignoreTags.has(node.tagName)) {
              continue;
            }
            if (node.tagName === 'TEXTAREA' && isEmpty(node.value)) {
              continue;
            }
            arr.push(node);
          }
          if (target.nextElementSibling) {
            arr.push(target.nextElementSibling);
            if (target.nextElementSibling.nextElementSibling) {
              arr.push(target.nextElementSibling.nextElementSibling);
            }
          }
          if (dom.cl.has(arr[0], 'hidden')) {
            dom.cl.remove(arr, 'hidden');
          } else {
            dom.cl.add(arr, 'hidden');
          }
        } else if (cmd === 'close') {
          container.remove();
        } else if (cmd === 'show-filter') {
          dom.cl.toggle(fsearch, 'hidden');
        } else if (cmd === 'fullscreen') {
          if (dom.cl.has(btnfullscreen, 'expanded')) {
            dom.cl.remove([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsOpen'));
          } else {
            dom.cl.add([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsClose'));
          }
        } else if (cmd === 'hide-list') {
          dom.cl.add(main, 'hidden');
          dom.cl.remove(mainframe, 'hidden');
          timeoutFrame();
        } else if (cmd === 'save') {
          if (!isNull(ghMsg)) {
            ghMsg = null;
            container.rebuild = true;
            dom.prop(rateContainer, 'innerHTML', '');
          }
          if (!dom.prop(target, 'disabled')) {
            container.save();
            sleazyRedirect();
            if (container.rebuild) {
              container.cache.clear();
              buildlist();
            }
            container.unsaved = false;
            container.rebuild = false;
          }
        } else if (cmd === 'reset') {
          cfg = defcfg;
          dom.cl.remove(mainframe, 'error');
          if (qs('.error', footer)) {
            for (const elem of qsA('.error', footer)) {
              elem.remove();
            }
          }
          if (container.oldBlacklist) {
            delete container.oldBlacklist;
          }
          container.unsaved = true;
          container.rebuild = true;
          rebuildCfg();
        } else if (cmd === 'settings') {
          if (container.unsaved) {
            MUJS.showError('Unsaved changes');
          }
          tab.create('mujs:settings');
          container.rebuild = false;
        } else if (cmd === 'new-tab') {
          tab.create();
        } else if (cmd === 'switch-tab') {
          tab.active(target);
        } else if (cmd === 'close-tab' && target.parentElement) {
          tab.close(target.parentElement);
        } else if (cmd === 'download-userjs') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          const dataUserJS = container.userjsCache.get(+dataset.userjs);
          const txt = await reqCode(dataUserJS);
          if (typeof txt !== 'string') {
            return;
          }
          const makeUserJS = new Blob([txt], { type: 'text/plain' });
          const dlBtn = make('a', 'mujs_Downloader');
          dlBtn.href = URL.createObjectURL(makeUserJS);
          dlBtn.download = `${dataset.userjsName ?? dataset.userjs}.user.js`;
          dlBtn.click();
          URL.revokeObjectURL(dlBtn.href);
          dlBtn.remove();
        } else if (cmd === 'load-userjs') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          const codeArea = qs('textarea', target.parentElement.parentElement);
          if (!isEmpty(codeArea.value)) {
            dom.cl.toggle(codeArea, 'hidden');
            return;
          }
          const dataUserJS = container.userjsCache.get(+dataset.userjs);
          const txt = await reqCode(dataUserJS);
          if (typeof txt !== 'string') {
            return;
          }
          codeArea.value = txt;
          dom.cl.remove(codeArea, 'hidden');

          const apTo = (name, elem) => {
            if (isEmpty(dataUserJS[name])) {
              const el = make('mujs-a', '', {
                textContent: i18n$('listing_none')
              });
              elem.append(el);
              if (name === 'antifeatures') {
                dom.cl.add(elem, 'hidden');
              }
            } else {
              for (const c of dataUserJS[name]) {
                if (isObj(c)) {
                  const el = make('mujs-a', '', {
                    textContent: c.text
                  });
                  if (c.domain) {
                    el.dataset.command = 'open-tab';
                    el.dataset.webpage = `https://${c.text}`;
                  }
                  elem.append(el);
                } else {
                  const el = make('mujs-a', '', {
                    textContent: c
                  });
                  elem.append(el);
                }
              }
              if (name === 'antifeatures') {
                dom.cl.remove(elem, 'hidden');
              }
            }
          };
          const matchElem = qs(
            '[data-type="match-urls"] > .mujs-grants',
            target.parentElement.parentElement
          );
          const grantElem = qs(
            '[data-type="grants"] > .mujs-grants',
            target.parentElement.parentElement
          );
          const afElem = qs(
            '[data-type="antifeatures"] > .mujs-grants',
            target.parentElement.parentElement
          );
          const sizeElem = qs(
            '[data-type="size"] > .mujs-grants',
            target.parentElement.parentElement
          );
          dom.prop([matchElem, grantElem, afElem, sizeElem], 'innerHTML', '');
          apTo('code_match', matchElem);
          apTo('code_grant', grantElem);
          apTo('antifeatures', afElem);
          apTo('code_size', sizeElem);
        } else if (/export-/.test(cmd)) {
          const str = JSON.stringify(cmd === 'export-cfg' ? cfg : cfg.theme, null, ' ');
          const bytes = new TextEncoder().encode(str);
          const blob = new Blob([bytes], { type: 'application/json;charset=utf-8' });
          const dlBtn = make('a', 'mujs-exporter', {
            href: URL.createObjectURL(blob),
            download: `Magic_Userscript_${cmd === 'export-cfg' ? 'config' : 'theme'}.json`
          });
          dlBtn.click();
          URL.revokeObjectURL(dlBtn.href);
        } else if (/import-/.test(cmd)) {
          if (qs('input', target.parentElement)) {
            qs('input', target.parentElement).click();
            return;
          }
          const inpJSON = make('input', 'hidden', {
            type: 'file',
            accept: '.json',
            onchange(evt) {
              try {
                [...evt.target.files].forEach((file) => {
                  const reader = new FileReader();
                  reader.readAsText(file);
                  reader.onload = () => {
                    const result = JSON.parse(reader.result);
                    if (result.blacklist) {
                      log(`Imported config: { ${file.name} }`, result);
                      cfg = result;
                      container.unsaved = true;
                      container.rebuild = true;
                      rebuildCfg();
                      container.save();
                      sleazyRedirect();
                      container.cache.clear();
                      buildlist();
                      container.unsaved = false;
                      container.rebuild = false;
                    } else {
                      log(`Imported theme: { ${file.name} }`, result);
                      cfg.theme = result;
                      container.renderTheme(cfg.theme);
                    }
                    inpJSON.remove();
                  };
                  reader.onerror = () => {
                    MUJS.showError(reader.error);
                    inpJSON.remove();
                  };
                });
              } catch (ex) {
                MUJS.showError(ex);
                inpJSON.remove();
              }
            }
          });
          target.parentElement.append(inpJSON);
          inpJSON.click();
        }
      } catch (ex) {
        MUJS.showError(ex);
      }
    });
    ael(main, 'auxclick', (evt) => {
      if (evt.button !== 1) {
        return;
      }
      /** @type { HTMLElement } */
      const target = evt.target.closest('[data-command]');
      if (!target) {
        return;
      }
      const dataset = target.dataset;
      const cmd = dataset.command;
      if (cmd === 'switch-tab' || cmd === 'close-tab') {
        tab.close(target);
      } else if (cmd === 'new-tab') {
        tab.create();
      }
    });
    if (!isMobile) {
      const fade = async (target, type) => {
        if (type === 'mouseenter') {
          frameTimeout.clear(...frameTimeout.ids);
          mouseTimeout.clear(...mouseTimeout.ids);
          target.style.opacity = container.opacityMax;
        } else if (type === 'mouseleave') {
          await mouseTimeout.set(cfg.time);
          target.style.opacity = container.opacityMin;
        }
      };
      for (const e of ['mouseenter', 'mouseleave']) {
        ael(main, e, (evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          fade(evt.target, evt.type);
        });
      }
    }
    // #endregion
    const ContainerHandler = class {
      constructor() {
        this.showError = this.showError.bind(this);
      }

      checkBlacklist(str) {
        if (container.checkBlacklist(str)) {
          this.showError('Blacklisted');
          timeoutFrame();
          return true;
        }
        return false;
      }

      updateCounter(count, engine) {
        container.counters[engine.name] += count;
        container.counters.total += count;
        this.updateCounters();
      }

      updateCounters() {
        for (const [k, v] of Object.entries(container.counters)) {
          if (k === 'total') {
            continue;
          }
          if (qs(`count-frame[data-counter="${k}"]`, countframe)) {
            dom.text(qs(`count-frame[data-counter="${k}"]`, countframe), v);
          }
        }
        dom.text(mainbtn, container.counters.total);
      }

      makeError(...ex) {
        const safe = safeSelf();
        const error = make('mu-js', 'error');
        let str = '';
        for (const e of ex) {
          str += `${typeof e === 'string' ? e : `${e.cause ? `[${e.cause}] ` : ''}${e.message} ${e.stack ?? ''}`}\n`;
          if (isObj(e)) {
            if (e.notify) {
              dom.cl.add(mainframe, 'error');
            }
          }
        }
        error.appendChild(safe.createTextNode(str));
        footer.append(error);
      }

      showError(...ex) {
        err(...ex);
        this.makeError(...ex);
      }

      refresh() {
        urlBar.placeholder = i18n$('newTab');
        container.counters.total = 0;
        for (const engine of cfg.engines) {
          container.counters[engine.name] = 0;
        }
        this.updateCounters();
        dom.prop([tabbody, rateContainer, footer], 'innerHTML', '');
      }
    };
    const MUJS = new ContainerHandler();
    const timeoutFrame = async (time) => {
      time = time ?? cfg.time;
      frameTimeout.clear(...frameTimeout.ids);
      if (dom.cl.has(mainframe, 'hidden')) {
        return;
      }
      if (typeof time === 'number' && !Number.isNaN(time)) {
        await frameTimeout.set(container.isBlacklisted ? time / 2 : time);
      } else {
        await frameTimeout.set(10000);
      }
      container.remove();
      return frameTimeout.clear(...frameTimeout.ids);
    };
    /**
     * @param { string } code
     */
    const get_meta_block = (code) => {
      if (isEmpty(code)) {
        return null;
      }
      const start_block = code.indexOf(META_START_COMMENT);
      if (isNull(start_block)) {
        return null;
      }
      const end_block = code.indexOf(META_END_COMMENT, start_block);
      if (isNull(end_block)) {
        return null;
      }
      return code.substring(start_block + META_START_COMMENT.length, end_block);
    };
    /**
     * @param { string } code
     */
    const parse_meta = (code) => {
      if (isEmpty(code)) {
        return null;
      }
      const meta = {};
      const meta_block = get_meta_block(code);
      const meta_block_map = new Map();
      for (const meta_line of meta_block.split('\n')) {
        const meta_match = meta_line.match(/\/\/\s+@([a-zA-Z:-]+)\s+(.*)/);
        if (isNull(meta_match)) {
          continue;
        }
        const key = meta_match[1].trim();
        const value = meta_match[2].trim();
        if (!meta_block_map.has(key)) {
          meta_block_map.set(key, []);
        }
        const meta_map = meta_block_map.get(key);
        meta_map.push(value);
        meta_block_map.set(key, meta_map);
      }
      for (const [key, value] of meta_block_map) {
        if (value.length > 1) {
          meta[key] = value;
        } else {
          meta[key] = value[0];
        }
      }
      return meta;
    };
    /**
     * @template { string } S
     * @param { S } code
     * @returns { S[] }
     */
    const calculate_applies_to_names = (code) => {
      if (isEmpty(code)) {
        return null;
      }
      const meta = parse_meta(code);
      let patterns = [];
      for (const [k, v] of Object.entries(meta)) {
        if (/include|match/.test(k)) {
          if (Array.isArray(v)) {
            patterns = patterns.concat(v);
          } else {
            patterns = patterns.concat([v]);
          }
        }
      }
      if (isEmpty(patterns)) {
        return [];
      }
      if (intersect(patterns, APPLIES_TO_ALL_PATTERNS)) {
        return [];
      }
      const name_set = new Set();
      const addObj = (obj) => {
        if (name_set.has(obj)) {
          return;
        }
        name_set.add(obj);
      };
      for (let p of patterns) {
        try {
          const original_pattern = p;
          let pre_wildcards = [];
          if (p.match(/^\/(.*)\/$/)) {
            pre_wildcards = [p];
          } else {
            let m = p.match(/^\*(https?:.*)/i);
            if (!isNull(m)) {
              p = m[1];
            }
            p = p
              .replace(/^\*:/i, 'http:')
              .replace(/^\*\/\//i, 'http://')
              .replace(/^http\*:/i, 'http:')
              .replace(/^(https?):([^/])/i, '$1://$2');
            m = p.match(/^([a-z]+:\/\/)\*\.?([a-z0-9-]+(?:.[a-z0-9-]+)+.*)/i);
            if (!isNull(m)) {
              p = m[1] + m[2];
            }
            m = p.match(/^\*\.?([a-z0-9-]+\.[a-z0-9-]+.*)/i);
            if (!isNull(m)) {
              p = `http://${m[1]}`;
            }
            m = p.match(/^http\*(?:\/\/)?\.?((?:[a-z0-9-]+)(?:\.[a-z0-9-]+)+.*)/i);
            if (!isNull(m)) {
              p = `http://${m[1]}`;
            }
            m = p.match(/^([a-z]+:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)*\.))\*(.*)/);
            if (!isNull(m)) {
              if (m[2].match(/A([0-9]+\.){2,}z/)) {
                p = `${m[1]}tld${m[3]}`;
                pre_wildcards = [p.split('*')[0]];
              } else {
                pre_wildcards = [p];
              }
            } else {
              pre_wildcards = [p];
            }
          }
          for (const pre_wildcard of pre_wildcards) {
            try {
              const urlObj = new URL(pre_wildcard);
              const { host } = urlObj;
              if (isNull(host)) {
                addObj({ text: original_pattern, domain: false, tld_extra: false });
              } else if (!host.includes('.') && host.includes('*')) {
                addObj({ text: original_pattern, domain: false, tld_extra: false });
              } else if (host.endsWith('.tld')) {
                for (let i = 0; i < TLD_EXPANSION.length; i++) {
                  const tld = TLD_EXPANSION[i];
                  addObj({
                    text: host.replace(/tld$/i, tld),
                    domain: true,
                    tld_extra: i != 0
                  });
                }
              } else if (host.endsWith('.')) {
                addObj({
                  text: host.slice(0, -1),
                  domain: true,
                  tld_extra: false
                });
              } else {
                addObj({
                  text: host,
                  domain: true,
                  tld_extra: false
                });
              }
              // eslint-disable-next-line no-unused-vars
            } catch (ex) {
              addObj({ text: original_pattern, domain: false, tld_extra: false });
            }
          }
        } catch (ex) {
          err(ex);
        }
      }
      return [...name_set];
    };
    const reqCode = async (obj = {}, translate = false) => {
      if (obj.code_data) {
        return obj.code_data;
      }
      /** @type { string } */
      const code = await Network.req(obj.code_url, 'GET', 'text').catch(MUJS.showError);
      if (typeof code !== 'string') {
        return;
      }
      Object.assign(obj, {
        code_data: code,
        code_size: [Network.format(code.length)],
        code_match: [],
        code_grant: [],
        antifeatures: []
      });
      const grantSet = new Set();
      const afSet = new Set();
      const meta = parse_meta(code);
      const applies_to_names = calculate_applies_to_names(code);
      for (const [key, value] of Object.entries(meta)) {
        if (/grant/.test(key)) {
          for (const v of normalizeTarget(value, false)) {
            if (grantSet.has(v)) {
              continue;
            }
            grantSet.add(v);
          }
        } else if (/antifeature/.test(key)) {
          for (const v of normalizeTarget(value, false)) {
            if (afSet.has(v)) {
              continue;
            }
            afSet.add(v);
          }
        }
      }
      Object.assign(obj, {
        code_match: applies_to_names,
        code_grant: [...grantSet],
        antifeatures: [...afSet]
      });
      if (translate) {
        const headers = code.match(/\/\/\s*@[\w][\s\S]+/g);
        if (isNull(headers)) {
          return code;
        }
        for (const lng of language.cache) {
          const findName = new RegExp(`//\\s*@name:${lng}\\s*(.*)`, 'gi').exec(headers[0]);
          const findDesc = new RegExp(`//\\s*@description:${lng}\\s*(.*)`, 'gi').exec(headers[0]);
          if (!isNull(findName)) {
            Object.assign(obj, {
              name: findName[1],
              translated: true
            });
          }
          if (!isNull(findDesc)) {
            Object.assign(obj, {
              description: findDesc[1],
              translated: true
            });
          }
        }
      }
      return code;
    };
    const template = {
      id: 0,
      bad_ratings: 0,
      good_ratings: 0,
      ok_ratings: 0,
      daily_installs: 0,
      total_installs: 0,
      name: 'NOT FOUND',
      description: 'NOT FOUND',
      version: '0.0.0',
      url: 'about:blank',
      code_url: 'about:blank',
      created_at: Date.now(),
      code_updated_at: Date.now(),
      users: [
        {
          name: '',
          url: ''
        }
      ]
    };
    const mergeTemplate = (obj = {}) => {
      for (const key in template) {
        if (hasOwn(obj, key)) continue;
        obj[key] = template[key];
      }
      return obj;
    };
    const mkList = (txt = '', obj = {}) => {
      if (!obj.root || !obj.type) {
        return;
      }
      const { root, type } = obj;
      const list = obj.list ?? [];
      const appliesTo = make('mu-js', 'mujs-list', {
        textContent: `${txt}: `
      });
      const applyList = make('mu-js', 'mujs-grants');
      const ujsURLs = make('mujs-column', 'mujs-list', {
        dataset: {
          el: 'matches',
          type
        }
      });
      ujsURLs.append(appliesTo, applyList);
      root.append(ujsURLs);
      if (isEmpty(list)) {
        const elem = make('mujs-a', '', {
          textContent: i18n$('listing_none')
        });
        applyList.append(elem);
        if (type === 'antifeatures') {
          dom.cl.add(ujsURLs, 'hidden');
        }
        return;
      }
      for (const c of list) {
        if (isObj(c)) {
          const elem = make('mujs-a', '', {
            textContent: c.text
          });
          if (c.domain) {
            elem.dataset.command = 'open-tab';
            elem.dataset.webpage = `https://${c.text}`;
          }
          applyList.append(elem);
        } else {
          const elem = make('mujs-a', '', {
            textContent: c
          });
          applyList.append(elem);
        }
      }
      if (type === 'antifeatures') {
        dom.cl.remove(ujsURLs, 'hidden');
      }
    };
    const toLocaleDate = (str = '') => {
      return new Intl.DateTimeFormat(navigator.language).format(new Date(str));
    };
    // #region Create UserJS
    const createjs = (ujs, engine) => {
      for (const key in template) {
        if (hasOwn(ujs, key)) continue;
        ujs[key] = template[key];
      }
      // Lets not add this UserJS to the list
      if (ujs.id === 421603) {
        return;
      }
      if (!container.userjsCache.has(ujs.id)) {
        container.userjsCache.set(ujs.id, ujs);
      }
      const eframe = make('td', 'install-btn');
      const uframe = make('td', 'mujs-uframe');
      const fdaily = make('td', 'mujs-list', {
        textContent: ujs.daily_installs
      });
      const fupdated = make('td', 'mujs-list', {
        textContent: toLocaleDate(ujs.code_updated_at)
      });
      const fname = make('td', 'mujs-name');
      const fmore = make('mujs-column', 'mujs-list hidden', {
        dataset: {
          el: 'more-info'
        }
      });
      const fBtns = make('mujs-column', 'mujs-list hidden');
      const jsInfo = make('mujs-row', 'mujs-list');
      const jsInfoB = make('mujs-row', 'mujs-list');
      const ratings = make('mujs-column', 'mujs-list');
      const ftitle = make('mujs-a', 'mujs-homepage', {
        textContent: ujs.name,
        title: ujs.url,
        dataset: {
          command: 'open-tab',
          webpage: ujs.url
        }
      });
      const fver = make('mu-js', 'mujs-list', {
        textContent: `${i18n$('version_number')}: ${ujs.version}`
      });
      const fcreated = make('mu-js', 'mujs-list', {
        textContent: `${i18n$('created_date')}: ${toLocaleDate(ujs.created_at)}`
      });
      const flicense = make('mu-js', 'mujs-list', {
        title: ujs.license ?? i18n$('no_license'),
        textContent: `${i18n$('license')}: ${ujs.license ?? i18n$('no_license')}`,
        style:
          'text-overflow: ellipsis; overflow: hidden; white-space: nowrap; width: fit-content; max-width: 20em;'
      });
      const ftotal = make('mu-js', 'mujs-list', {
        textContent: `${i18n$('total_installs')}: ${ujs.total_installs}`
      });
      const fratings = make('mu-js', 'mujs-list', {
        title: i18n$('ratings'),
        textContent: `${i18n$('ratings')}:`
      });
      const fgood = make('mu-js', 'mujs-list mujs-ratings', {
        title: i18n$('good'),
        textContent: ujs.good_ratings,
        dataset: {
          el: 'good'
        }
      });
      const fok = make('mu-js', 'mujs-list mujs-ratings', {
        title: i18n$('ok'),
        textContent: ujs.ok_ratings,
        dataset: {
          el: 'ok'
        }
      });
      const fbad = make('mu-js', 'mujs-list mujs-ratings', {
        title: i18n$('bad'),
        textContent: ujs.bad_ratings,
        dataset: {
          el: 'bad'
        }
      });
      const fdesc = make('mu-js', 'mujs-list mujs-pointer', {
        title: ujs.description,
        textContent: ujs.description,
        dataset: {
          command: 'list-description'
        }
      });
      const scriptInstall = make('mu-jsbtn', 'install', {
        innerHTML: `${iconSVG.load('install')} ${i18n$('install')}`,
        title: `${i18n$('install')} "${ujs.name}"`,
        dataset: {
          command: 'install-script',
          userjs: ujs.code_url
        }
      });
      const scriptDownload = make('mu-jsbtn', '', {
        innerHTML: `${iconSVG.load('install')} ${i18n$('saveFile')}`,
        dataset: {
          command: 'download-userjs',
          userjs: ujs.id,
          userjsName: ujs.name
        }
      });
      const tr = make('tr', 'frame', {
        dataset: {
          scriptId: ujs.id
        }
      });
      const codeArea = make('textarea', 'code-area hidden', {
        dataset: {
          name: 'code'
        },
        rows: '10',
        autocomplete: false,
        spellcheck: false,
        wrap: 'soft'
      });
      const loadCode = make('mu-jsbtn', '', {
        innerHTML: `${iconSVG.load('search')} ${i18n$('preview_code')}`,
        dataset: {
          command: 'load-userjs',
          userjs: ujs.id
        }
      });
      if (engine) {
        tr.dataset.engine = engine;
        if (!engine.includes('fork') && cfg.recommend.others && goodUserJS.includes(ujs.url)) {
          tr.dataset.good = 'upsell';
        }
      }
      for (const u of ujs.users) {
        const user = make('mujs-a', '', {
          innerHTML: u.name,
          title: u.url,
          dataset: {
            command: 'open-tab',
            webpage: u.url
          }
        });
        if (cfg.recommend.author && u.id === authorID) {
          tr.dataset.author = 'upsell';
          dom.prop(user, 'innerHTML', `${u.name} ${iconSVG.load('verified')}`);
        }
        uframe.append(user);
      }
      if (engine.includes('fork') && cfg.recommend.others && goodUserJS.includes(ujs.id)) {
        tr.dataset.good = 'upsell';
      }
      eframe.append(scriptInstall);
      ratings.append(fratings, fgood, fok, fbad);
      jsInfo.append(ftotal, ratings, fver, fcreated);
      mkList('Size', {
        list: ujs.code_size,
        type: 'size',
        root: jsInfo
      });

      jsInfoB.append(flicense);
      mkList(i18n$('antifeatures'), {
        list: ujs.antifeatures,
        type: 'antifeatures',
        root: jsInfoB
      });
      mkList(i18n$('applies_to'), {
        list: ujs.code_match,
        type: 'match-urls',
        root: jsInfoB
      });
      mkList('@grant', {
        list: ujs.code_grant,
        type: 'grants',
        root: jsInfoB
      });
      fmore.append(jsInfo, jsInfoB);
      fBtns.append(scriptDownload, loadCode);
      fname.append(ftitle, fdesc, fmore, fBtns, codeArea);

      if (ujs.code_data) {
        codeArea.value = ujs.code_data;
      }

      for (const e of [fname, uframe, fdaily, fupdated, eframe]) {
        tr.append(e);
      }
      tabbody.append(tr);
    };
    // #endregion
    //#region Build List
    const buildlist = async (host = undefined) => {
      try {
        if (isEmpty(host)) {
          host = container.host;
        }
        if (container.oldBlacklist) {
          MUJS.makeError({ message: i18n$('legacy'), cause: 'Blacklist outdated', notify: true });
          return;
        }
        if (MUJS.checkBlacklist(host)) {
          return;
        }
        if (!isNull(ghMsg)) {
          const txt = make('mujs-row', 'legacy-config', {
            textContent: ghMsg
          });
          rateContainer.append(txt);
          return;
        }
        MUJS.refresh();
        if (!container.cache.has(host)) {
          const engineTemplate = {};
          for (const engine of cfg.engines) {
            engineTemplate[engine.name] = [];
          }
          container.cache.set(host, engineTemplate);
        }
        const isSupported = (name) => {
          for (const [k, v] of Object.entries(engineUnsupported)) {
            if (k !== name) {
              continue;
            }
            if (v.includes(host)) {
              return false;
            }
          }
          return true;
        };
        const engines = cfg.engines.filter((e) => e.enabled && isSupported(e.name));
        // Fully hide when on a unsupported site.
        if (isEmpty(engines)) {
          container.opacityMin = '0';
          mainframe.style.opacity = container.opacityMin;
          return;
        }
        const cache = container.cache.get(host);
        const customRecords = [];

        info('Building list', { cache, MUJS, engines });

        const initUserJS = async (ujs, engine) => {
          if (cfg.codePreview && !ujs.code_data) {
            await reqCode(ujs);
          }
          createjs(ujs, engine);
        };
        for (const engine of engines) {
          const cEngine = cache[`${engine.name}`];
          if (!isEmpty(cEngine)) {
            for (const ujs of cEngine) {
              createjs(ujs, engine.name);
            }
            MUJS.updateCounter(cEngine.length, engine);
            continue;
          }
          const forkFN = async (dataQ) => {
            if (!dataQ) {
              MUJS.showError('Invalid data received from the server, TODO fix this');
              return;
            }
            const data = dataQ.query;
            if (!Array.isArray(data)) {
              return;
            }
            const hideData = [];
            const inUserLanguage = (d) => {
              const dlocal = d.locale.split('-')[0] ?? d.locale;
              if (language.cache.includes(dlocal)) {
                return true;
              }
              hideData.push(d);
              return false;
            };
            const filterLang = data.filter((d) => {
              if (d.deleted) {
                return false;
              }
              if (cfg.filterlang && !inUserLanguage(d)) {
                return false;
              }
              return true;
            });
            let finalList = filterLang;
            const hds = [];
            for (const ujs of hideData) {
              await reqCode(ujs);
              if (ujs.translated) {
                hds.push(ujs);
              }
            }
            finalList = [...new Set([...hds, ...filterLang])];

            for (const ujs of finalList) {
              initUserJS(ujs, engine.name);
            }
            cache[engine.name].push(...finalList);
            MUJS.updateCounter(finalList.length, engine);
          };
          /**
           * @param {Document} htmlDocument
           */
          const customFN = async (htmlDocument) => {
            try {
              if (!htmlDocument) {
                MUJS.showError('Invalid data received from the server, TODO fix this');
                return;
              }
              const selected = htmlDocument.documentElement;
              if (/openuserjs/gi.test(engine.name)) {
                for (const i of qsA('.col-sm-8 .tr-link', selected)) {
                  while (isNull(qs('.script-version', i))) {
                    await new Promise((resolve) => requestAnimationFrame(resolve));
                  }
                  const fixurl = dom
                    .prop(qs('.tr-link-a', i), 'href')
                    .replace(new RegExp(document.location.origin, 'gi'), 'https://openuserjs.org');
                  const ujs = mergeTemplate({
                    name: dom.text(qs('.tr-link-a', i)),
                    description: dom.text(qs('p', i)),
                    version: dom.text(qs('.script-version', i)),
                    url: fixurl,
                    code_url: `${fixurl.replace(/\/scripts/gi, '/install')}.user.js`,
                    total_installs: dom.text(qs('td:nth-child(2) p', i)),
                    created_at: dom.attr(qs('td:nth-child(4) time', i), 'datetime'),
                    code_updated_at: dom.attr(qs('td:nth-child(4) time', i), 'datetime'),
                    users: [
                      {
                        name: dom.text(qs('.inline-block a', i)),
                        url: dom.prop(qs('.inline-block a', i), 'href')
                      }
                    ]
                  });
                  if (cfg.codePreview && !ujs.code_data) {
                    await reqCode(ujs);
                  }
                  createjs(ujs, engine.name);
                  customRecords.push(ujs);
                }
              }
              cache[engine.name].push(...customRecords);
              MUJS.updateCounter(customRecords.length, engine);
            } catch (ex) {
              MUJS.showError(ex);
            }
          };
          const gitFN = async (data) => {
            try {
              if (isBlank(data.items)) {
                MUJS.showError('Invalid data received from the server, TODO fix this');
                return;
              }
              for (const r of data.items) {
                const ujs = mergeTemplate({
                  name: r.name,
                  description: isEmpty(r.repository.description)
                    ? i18n$('no_license')
                    : r.repository.description,
                  url: r.html_url,
                  code_url: r.html_url.replace(/\/blob\//g, '/raw/'),
                  code_updated_at: r.commit || Date.now(),
                  total_installs: r.score,
                  users: [
                    {
                      name: r.repository.owner.login,
                      url: r.repository.owner.html_url
                    }
                  ]
                });
                if (cfg.codePreview && !ujs.code_data) {
                  await reqCode(ujs);
                }
                createjs(ujs, engine.name);
                customRecords.push(ujs);
              }
              cache[engine.name].push(...customRecords);
              MUJS.updateCounter(data.items.length, engine);
            } catch (ex) {
              MUJS.showError(ex);
            }
          };
          if (engine.name.includes('fork')) {
            Network.req(`${engine.url}/scripts/by-site/${host}.json`)
              .then(forkFN)
              .catch(MUJS.showError);
          } else if (/github/gi.test(engine.name)) {
            if (isEmpty(engine.token)) {
              MUJS.showError(`"${engine.name}" requires a token to use`);
              continue;
            }
            Network.req(
              `${engine.url}"// ==UserScript=="+${host}+ "// ==/UserScript=="+in:file+language:js&per_page=30`,
              'GET',
              'json',
              {
                headers: {
                  Accept: 'application/vnd.github+json',
                  Authorization: `Bearer ${engine.token}`,
                  'X-GitHub-Api-Version': '2022-11-28'
                }
              }
            )
              .then(gitFN)
              .then(() => {
                Network.req('https://api.github.com/rate_limit', 'GET', 'json', {
                  headers: {
                    Accept: 'application/vnd.github+json',
                    Authorization: `Bearer ${engine.token}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                  }
                })
                  .then((data) => {
                    for (const [key, value] of Object.entries(data.resources.code_search)) {
                      const txt = make('mujs-row', 'rate-info', {
                        textContent: `${key.toUpperCase()}: ${value}`
                      });
                      rateContainer.append(txt);
                    }
                  })
                  .catch(MUJS.showError);
              })
              .catch(MUJS.showError);
          } else {
            Network.req(`${engine.url}${host}`, 'GET', 'document')
              .then(customFN)
              .catch((error) => {
                MUJS.showError(`Engine: "${engine.name}"`, error);
              });
          }
        }
        urlBar.placeholder = i18n$('search_placeholder');
        urlBar.value = '';
      } catch (ex) {
        MUJS.showError(ex);
      }
    };
    //#endregion
    //#region Make Config
    const makecfg = () => {
      const makerow = (desc, type = null, nm, attrs = {}) => {
        desc = desc ?? i18n$('no_license');
        nm = nm ?? i18n$('no_license');
        const sec = make('mujs-section', 'mujs-cfg-section');
        const lb = make('label');
        const divDesc = make('mu-js', 'mujs-cfg-desc', {
          textContent: desc
        });
        lb.append(divDesc);
        sec.append(lb);
        cfgpage.append(sec);
        if (isNull(type)) {
          return lb;
        }
        const inp = make('input', 'mujs-cfg-input', {
          type,
          dataset: {
            name: nm
          },
          ...attrs
        });
        if (!cfgMap.has(nm)) {
          cfgMap.set(nm, inp);
        }
        if (type === 'checkbox') {
          const inlab = make('mu-js', 'mujs-inlab');
          const la = make('label', '', {
            onclick() {
              inp.dispatchEvent(new MouseEvent('click'));
            }
          });
          inlab.append(inp, la);
          lb.append(inlab);
          if (nm.includes('-')) {
            return inp;
          }
          if (/(greasy|sleazy)fork|openuserjs|gi(thub|st)/gi.test(nm)) {
            for (const i of cfg.engines) {
              if (i.name !== nm) continue;
              inp.checked = i.enabled;
              inp.dataset.engine = i.name;
              ael(inp, 'change', (evt) => {
                container.unsaved = true;
                container.rebuild = true;
                i.enabled = evt.target.checked;
              });
            }
          } else {
            inp.checked = cfg[nm];
            ael(inp, 'change', (evt) => {
              container.unsaved = true;
              if (/filterlang/i.test(nm)) {
                container.rebuild = true;
              }
              cfg[nm] = evt.target.checked;
            });
          }
        } else {
          lb.append(inp);
        }
        return inp;
      };
      if (isGM) {
        makerow('Sync with GM', 'checkbox', 'cache');
      }
      makerow(i18n$('userjs_fullscreen'), 'checkbox', 'autoexpand', {
        onchange(e) {
          if (e.target.checked) {
            dom.cl.add([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsClose'));
          } else {
            dom.cl.remove([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsOpen'));
          }
        }
      });
      makerow(i18n$('redirect'), 'checkbox', 'sleazyredirect');
      makerow(i18n$('filter'), 'checkbox', 'filterlang');
      makerow(i18n$('preview_code'), 'checkbox', 'codePreview');
      for (const inp of [
        makerow('Recommend author', 'checkbox', 'recommend-author'),
        makerow('Recommend scripts', 'checkbox', 'recommend-others')
      ]) {
        const nm = inp.dataset.name === 'recommend-author' ? 'author' : 'others';
        inp.checked = cfg.recommend[nm];
        ael(inp, 'change', (evt) => {
          container.unsaved = true;
          cfg.recommend[nm] = evt.target.checked;
        });
      }
      makerow('Greasy Fork', 'checkbox', 'greasyfork');
      makerow('Sleazy Fork', 'checkbox', 'sleazyfork');
      makerow('Open UserJS', 'checkbox', 'openuserjs');
      makerow('GitHub API', 'checkbox', 'github');
      const ghAPI = cfg.engines.find((c) => c.name === 'github');
      const ghToken = makerow('GitHub API (Token)', 'text', 'github', {
        defaultValue: '',
        value: ghAPI.token ?? '',
        placeholder: 'Paste Access Token',
        onchange(evt) {
          container.unsaved = true;
          container.rebuild = true;
          if (isNull(ghMsg)) {
            ghAPI.token = evt.target.value;
          }
        }
      });
      ghToken.dataset.engine = 'github-token';
      cfgMap.set('github-token', ghToken);
      makerow(`${i18n$('dtime')} (ms)`, 'number', 'time', {
        defaultValue: 10000,
        value: cfg.time,
        min: 0,
        step: 500,
        onbeforeinput(evt) {
          if (evt.target.validity.badInput) {
            dom.cl.add(evt.target, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', true);
          } else {
            dom.cl.remove(evt.target, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', false);
          }
        },
        oninput(evt) {
          container.unsaved = true;
          const t = evt.target;
          if (t.validity.badInput || (t.validity.rangeUnderflow && t.value !== '-1')) {
            dom.cl.add(t, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', true);
          } else {
            dom.cl.remove(t, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', false);
            cfg.time = isEmpty(t.value) ? cfg.time : parseFloat(t.value);
          }
        }
      });
      const cbtn = make('mu-js', 'mujs-sty-flex');
      const savebtn = make('mujs-btn', 'save', {
        textContent: i18n$('save'),
        dataset: {
          command: 'save'
        },
        disabled: false
      });
      const resetbtn = make('mujs-btn', 'reset', {
        textContent: i18n$('reset'),
        dataset: {
          command: 'reset'
        }
      });
      const blacklist = make('textarea', '', {
        dataset: {
          name: 'blacklist'
        },
        rows: '10',
        autocomplete: false,
        spellcheck: false,
        wrap: 'soft',
        value: JSON.stringify(cfg.blacklist, null, ' '),
        oninput(evt) {
          let isvalid = true;
          try {
            cfg.blacklist = JSON.parse(evt.target.value);
            isvalid = true;
          } catch (ex) {
            err(ex);
            isvalid = false;
          } finally {
            if (isvalid) {
              dom.cl.remove(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', false);
            } else {
              dom.cl.add(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', true);
            }
          }
        }
      });
      const theme = make('textarea', '', {
        dataset: {
          name: 'theme'
        },
        rows: '10',
        autocomplete: false,
        spellcheck: false,
        wrap: 'soft',
        value: JSON.stringify(cfg.theme, null, ' '),
        oninput(evt) {
          let isvalid = true;
          try {
            cfg.theme = JSON.parse(evt.target.value);
            container.renderTheme(JSON.parse(evt.target.value));
            isvalid = true;
          } catch (ex) {
            err(ex);
            isvalid = false;
          } finally {
            if (isvalid) {
              dom.cl.remove(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', false);
            } else {
              dom.cl.add(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', true);
            }
          }
        }
      });
      cfgMap.set('blacklist', blacklist);
      cfgMap.set('theme', theme);
      cbtn.append(resetbtn, savebtn);
      cfgpage.append(blacklist, theme, cbtn);
    };
    //#endregion
    ael(mainframe, 'mouseenter', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.style.opacity = container.opacityMax;
      frameTimeout.clear(...frameTimeout.ids);
    });
    ael(mainframe, 'mouseleave', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.style.opacity = container.opacityMin;
      timeoutFrame();
    });
    ael(mainframe, 'click', (evt) => {
      evt.preventDefault();
      frameTimeout.clear(...frameTimeout.ids);
      dom.cl.remove(main, 'hidden');
      dom.cl.add(mainframe, 'hidden');
      if (cfg.autoexpand) {
        dom.cl.add([btnfullscreen, main], 'expanded');
        dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsClose'));
      }
      if (dom.cl.has(mainframe, 'error')) {
        tab.create('mujs:settings');
      }
    });
    ael(urlBar, 'input', (evt) => {
      evt.preventDefault();
      if (urlBar.placeholder === i18n$('newTab')) {
        return;
      }
      const val = evt.target.value;
      if (isEmpty(val)) {
        dom.cl.remove(qsA('tr[data-engine]', tabbody), 'hidden');
        return;
      }
      const reg = new RegExp(val, 'gi');
      const finds = new Set();
      const userjsCache = container.userjsCache;
      for (const [k, v] of userjsCache) {
        const elem = qs(`tr[data-script-id="${k}"]`, tabbody);
        if (!elem) {
          continue;
        }
        if (finds.has(elem)) {
          continue;
        }
        if (v.name && v.name.match(reg)) {
          finds.add(elem);
        }
        if (v.description && v.description.match(reg)) {
          finds.add(elem);
        }
        if (v.code_data) {
          const meta = parse_meta(v.code_data);
          for (const key of Object.keys(meta)) {
            if (/name|desc/i.test(key) && key.match(reg)) {
              finds.add(elem);
            }
          }
        }
      }
      dom.cl.add(qsA('tr[data-engine]', tabbody), 'hidden');
      dom.cl.remove([...finds], 'hidden');
    });
    ael(urlBar, 'change', (evt) => {
      evt.preventDefault();
      const val = evt.target.value;
      if (urlBar.placeholder === i18n$('newTab') && qs('mujs-tab.active', toolbar)) {
        const tabElem = qs('mujs-tab.active', toolbar);
        const tabHost = qs('mujs-host', tabElem);
        if (val.startsWith('mujs:')) {
          tab.close(tabElem);
          if (tab.hasTab(val)) {
            tab.active(tab.Tab.get(val));
          } else {
            tab.create(val);
          }
          return;
        } else if (val === '*') {
          tabElem.dataset.host = val;
          tabHost.title = '<All Sites>';
          tabHost.textContent = '<All Sites>';
          buildlist(val);
          return;
        }
        const value = container.getHost(val);
        if (MUJS.checkBlacklist(value)) {
          MUJS.showError(`Host blacklisted "${value}"`);
          return;
        }
        tabElem.dataset.host = value;
        tabHost.title = value;
        tabHost.textContent = value;
        buildlist(value);
        return;
      }
    });
    container.renderTheme(cfg.theme);

    const makeTHead = (rows) => {
      const tr = make('tr');
      for (const r of normalizeTarget(rows)) {
        const tparent = make('th', r.class ?? '', r);
        tr.append(tparent);
      }
      tabhead.append(tr);
      table.append(tabhead, tabbody);
    };
    makeTHead([
      {
        class: 'mujs-header-name',
        textContent: i18n$('name')
      },
      {
        textContent: i18n$('createdby')
      },
      {
        textContent: i18n$('daily_installs')
      },
      {
        textContent: i18n$('updated')
      },
      {
        textContent: i18n$('install')
      }
    ]);

    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    const comparer = (idx, asc) => (a, b) =>
      ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        getCellValue(asc ? a : b, idx),
        getCellValue(asc ? b : a, idx)
      );
    for (const th of tabhead.rows[0].cells) {
      if (dom.text(th) === i18n$('install')) continue;
      dom.cl.add(th, 'mujs-pointer');
      ael(th, 'click', () => {
        /** [Stack Overflow Reference](https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript/53880407#53880407) */
        const table = th.closest('table');
        const tbody = table.querySelector('tbody');
        Array.from(tbody.querySelectorAll('tr'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), (this.asc = !this.asc)))
          .forEach((tr) => tbody.appendChild(tr));
      });
    }
    makecfg();
    tab.create(container.host);
    buildlist().then(timeoutFrame);
    dbg('Container', container);
  } catch (ex) {
    err(ex);
    container.remove();
  }
}
// #endregion
/**
 * @template { Function } F
 * @param { (this: F, doc: Document) => any } onDomReady
 */
const loadDOM = (onDomReady) => {
  if (!isFN(onDomReady)) {
    return;
  }
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    onDomReady.call({}, document);
  }
  document.addEventListener('DOMContentLoaded', (evt) => onDomReady.call({}, evt.target), {
    once: true
  });
};
// /**
//  * @type { import("../typings/UserJS.d.ts").setObj }
//  */
// const setObj = (objA = {}, objB = {}) => {
//   objA = objA || {};
//   objB = objB || {};
//   for (const [key, value] of Object.entries(objA)) {
//     if (!hasOwn(objB, key)) {
//       objB[key] = value;
//     } else if (typeof value === 'object') {
//       setObj(value, objB[key]);
//     }
//   }
//   return objB;
// };
const init = async () => {
  const stored = await StorageSystem.getValue('Config', defcfg);
  // cfg = setObj(defcfg, stored);
  cfg = {
    ...defcfg,
    ...stored
  };
  info('Config:', cfg);
  loadDOM((doc) => {
    try {
      if (window.location === null) {
        err('"window.location" is null, reload the webpage or use a different one');
        return;
      }
      if (doc === null) {
        err('"doc" is null, reload the webpage or use a different one');
        return;
      }
      sleazyRedirect();
      container.inject(primaryFN, doc);
    } catch (ex) {
      err(ex);
    }
  });
};
init();

})();