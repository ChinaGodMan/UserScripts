// ==UserScript==
// @name               MarkDown Cloud Cut Notes
// @name:ar            ملاحظات قطع السحابة المتولد
// @name:bg            Бележки за изрязване на облак от Маркдаун
// @name:cs            Poznámky k cloudovému řezu Markdown
// @name:da            Markdown Cloud Cut Notes
// @name:de            Markdown Cloud Cut -Notizen
// @name:el            Σημειώσεις κοπής σύννεφων Markdown
// @name:en            MarkDown Cloud Cut Notes
// @name:eo            Markdown Cloud Cut Notes
// @name:es            Notas de corte de nube de markdown
// @name:fi            Markdown Cloud Cut Notes
// @name:fr            Notes de coupe de cloud de Markdown
// @name:fr-CA         Notes de coupe de cloud de Markdown
// @name:he            הערות Culd Cloud Markdown
// @name:hr            Markdown Cloud Cut Notes
// @name:hu            Markdown Cloud Cut jegyzetek
// @name:id            Markdown Cloud Cut Notes
// @name:it            Markdown Cloud Cut Notes
// @name:ja            マークダウンクラウドカットノート
// @name:ka            Markdown Cloud Cut Notes
// @name:ko            마크 다운 클라우드 컷 메모
// @name:nb            Markdown Cloud Cut Notes
// @name:nl            Markdown Cloud Cut Notes
// @name:pl            Notatki z Cloud Cloud Cloud
// @name:pt-BR         Notas de corte na nuvem de marcação
// @name:ro            Note de tăiere a norului markdown
// @name:ru            Примечания к облаку отметки
// @name:sk            Poznámky k mraku cloudu
// @name:sr            Напомена Цлоуд Цлоуд Сцрет Нотес
// @name:sv            Markdown Cloud Cut -anteckningar
// @name:th            MARKDOWN Cloud Cut Notes
// @name:tr            Markdown bulut kesim notları
// @name:ug            ماركېل بۇلۇت ئۈزۈلۈپ قالدى
// @name:uk            Нотатки з вирізанням Cloud Cloud
// @name:vi            Markdown Cloud Cut Ghi chú
// @name:zh            MarkDown 云剪笔记
// @name:zh-CN         MarkDown 云剪笔记
// @name:zh-HK         MarkDown 雲剪筆記
// @name:zh-SG         MarkDown 云剪笔记
// @name:zh-TW         MarkDown 雲剪筆記
// @description        A tool that converts web content to Markdown format, supports features such as copying, downloading, and sending to GitHub and Obsidian.
// @description:ar     تقوم أداة بتحويل محتوى الويب إلى تنسيق Markdown ، ويدعم ميزات مثل نسخ وتنزيل وإرسال Github و Obsidian.
// @description:bg     Инструмент, който преобразува уеб съдържание във формат за маркиране, поддържа функции като копиране, изтегляне и изпращане на GitHub и Obsidian.
// @description:cs     Nástroj, který převádí webový obsah do formátu označení, podporuje funkce, jako je kopírování, stahování a odesílání do GitHubu a obsidiánu.
// @description:da     Et værktøj, der konverterer webindhold til Markdown -format, understøtter funktioner såsom kopiering, download og sender til GitHub og Obsidian.
// @description:de     Ein Tool, das Webinhalte in Markdown -Format umwandelt, unterstützt Funktionen wie das Kopieren, Herunterladen und Senden an GitHub und Obsidian.
// @description:el     Ένα εργαλείο που μετατρέπει το περιεχόμενο ιστού σε μορφή Markdown, υποστηρίζει χαρακτηριστικά όπως η αντιγραφή, η λήψη και η αποστολή στο GitHub και ο Obsidian.
// @description:en     A tool that converts web content to Markdown format, supports features such as copying, downloading, and sending to GitHub and Obsidian.
// @description:eo     Ilo, kiu konvertas retan enhavon al Markdown -formato, subtenas funkciojn kiel kopii, elŝuti kaj sendi al Github kaj Obsidian.
// @description:es     Una herramienta que convierte el contenido web en formato de Markdown, admite características como copiar, descargar y enviar a Github y Obsidian.
// @description:fi     Työkalu, joka muuntaa verkkosisällön merkinnän muotoon, tukee ominaisuuksia, kuten kopiointia, lataamista ja lähettämistä GitHubille ja Obsidianille.
// @description:fr     Un outil qui convertit le contenu Web au format Markdown, prend en charge des fonctionnalités telles que la copie, le téléchargement et l’envoi à GitHub et Obsidian.
// @description:fr-CA  Un outil qui convertit le contenu Web au format Markdown, prend en charge des fonctionnalités telles que la copie, le téléchargement et l’envoi à GitHub et Obsidian.
// @description:he     כלי שממיר תוכן אינטרנט לפורמט Markdown, תומך בתכונות כמו העתקה, הורדה ושליחה ל- Github ו- Obsidian.
// @description:hr     Alat koji pretvara web sadržaj u Markdown format, podržava značajke poput kopiranja, preuzimanja i slanja GitHub i Obsidian.
// @description:hu     Egy olyan eszköz, amely a webtartalmat Markdown formátumra konvertálja, támogatja azokat a funkciókat, mint például a másolást, a letöltést és a Github -nak és az Obsidian -nak küldését.
// @description:id     Alat yang mengonversi konten web ke format penurunan harga, mendukung fitur seperti menyalin, mengunduh, dan mengirim ke GitHub dan Obsidian.
// @description:it     Uno strumento che converte i contenuti Web in formato markdown, supporta funzionalità come la copia, il download e l’invio a Github e Obsidian.
// @description:ja     WebコンテンツをMarkdown形式に変換するツールは、GithubやObsidianへのコピー、ダウンロード、送信などの機能をサポートします。
// @description:ka     ინსტრუმენტი, რომელიც გარდაქმნის ვებ შინაარსს MarkDown ფორმატში, მხარს უჭერს ისეთ ფუნქციებს, როგორიცაა კოპირება, ჩამოტვირთვა და გაგზავნა Github და Obsidian.
// @description:ko     웹 컨텐츠를 Markdown 형식으로 변환하는 도구는 복사, 다운로드 및 Github 및 Obsidian으로 전송과 같은 기능을 지원합니다.
// @description:nb     Et verktøy som konverterer nettinnhold til Markdown -format, støtter funksjoner som kopiering, nedlasting og sending til Github og Obsidian.
// @description:nl     Een tool die webinhoud converteert naar Markdown -indeling, ondersteunt functies zoals kopiëren, downloaden en verzenden naar GitHub en Obsidian.
// @description:pl     Narzędzie, które konwertuje treść sieci w formacie Markdown, obsługuje takie funkcje, jak kopiowanie, pobieranie i wysyłanie do Github i Obsidian.
// @description:pt-BR  Uma ferramenta que converte o conteúdo da Web em formato de marcação, suporta recursos como cópia, download e envio para o Github e Obsidian.
// @description:ro     Un instrument care convertește conținutul web în format markdown, acceptă funcții precum copierea, descărcarea și trimiterea către Github și Obsidian.
// @description:ru     Инструмент, который преобразует веб -контент в формат разметки, поддерживает такие функции, как копирование, загрузка и отправка в Github и Obsidian.
// @description:sk     Nástroj, ktorý prevádza webový obsah na formát Markdown, podporuje funkcie, ako je kopírovanie, sťahovanie a odosielanie spoločnosti GitHub a Obsidian.
// @description:sr     Алат који претвара Веб садржај у ознаку формата, подржава функције као што су копирање, преузимање и слање Гитхуб-а и Обсидијан.
// @description:sv     Ett verktyg som konverterar webbinnehåll till Markdown -format, stöder funktioner som kopiering, nedladdning och skickning till GitHub och Obsidian.
// @description:th     เครื่องมือที่แปลงเนื้อหาเว็บเป็นรูปแบบ Markdown รองรับคุณสมบัติต่าง ๆ เช่นการคัดลอกการดาวน์โหลดและการส่งไปยัง GitHub และ Obsidian
// @description:tr     Web içeriğini işaretleme biçimine dönüştüren bir araç, GitHub ve Obsidian’a kopyalama, indirme ve gönderme gibi özellikleri destekler.
// @description:ug     تور مەزمۇنىنى بەلگە قىلىپ بەلگە قىلالايدىغان بىر قورال گاتسىيە ۋە Obstidiation غا توپلاش ۋە ئەۋەتىش قاتارلىق ئىقتىدارلارنى قوللايدىغان ئىقتىدارلارنى قوللايدۇ.
// @description:uk     Інструмент, який перетворює веб -вміст у формат Markdown, підтримує такі функції, як копіювання, завантаження та надсилання в Github та Обсидіан.
// @description:vi     Một công cụ chuyển đổi nội dung web thành định dạng đánh dấu, hỗ trợ các tính năng như sao chép, tải xuống và gửi đến GitHub và Obsidian.
// @description:zh     将网页内容转换为 Markdown 格式的工具，支持复制、下载、发送到 GitHub 和 Obsidian 等功能。
// @description:zh-CN  将网页内容转换为 Markdown 格式的工具，支持复制、下载、发送到 GitHub 和 Obsidian 等功能。
// @description:zh-HK  將網頁內容轉換為 Markdown 格式的工具，支持複製、下載、發送到 GitHub 和 Obsidian 等功能。
// @description:zh-SG  将网页内容转换为 Markdown 格式的工具，支持复制、下载、发送到 GitHub 和 Obsidian 等功能。
// @description:zh-TW  將網頁內容轉換為 Markdown 格式的工具，支持複製、下載、發送到 GitHub 和 Obsidian 等功能。
// @author             shiquda,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @grant              GM_addStyle
// @grant              GM_registerMenuCommand
// @grant              GM_setClipboard
// @grant              GM_setValue
// @grant              GM_getValue
// @require            https://code.jquery.com/jquery-3.6.0.min.js
// @require            https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @require            https://unpkg.com/turndown/dist/turndown.js
// @require            https://unpkg.com/@guyplusplus/turndown-plugin-gfm/dist/turndown-plugin-gfm.js
// @require            https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.0/marked.min.js
// @match              *://*/*
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAABBdJREFUaIHtmluIVlUUx39pMup4Q1FrRi1CrMAaREUS75KlBhKKSGAKzkPRQ0lBPngjkIZeBMWHAccH8VIKJQTSIAgWVBQKglco7YYiitrYjONtjg/7G2bPPmt/nvOdtc8ndn5wQM/+77X+i73PnrPP/qCgoKCg4P/Bi8CGAHFfAj4JEDcTc4GodM1Ujt1aintcOW4mTtFT8GnFuAusuBGwSjF2xdQCdwlj7LwTt1kpbiYGAh30NtauEHe1EzMCtivEVeEEcXObM8bsFGIuyxhTjY3EzUXA4ArjNQmxHmSIp86zwH3iJvdWEGuoECcC9qs4VWQ3stGXU8b52hNnoppTJcYjG/05RYxJnhiHVZ0qcgjZ8OKE/X/x9J+t7lQJ3wj9lqDvUk/fNDOkKhxDNv5+mT5PAb97+r0d0qwG9nu1fV3DvKRIrPX0+SOwVzVOIxfQJGgHA20e/eocvKrwFnIBETDa0W716P7Ny6wWl5AL+cLS1Hs0EfBpnmY1eId4EfeBkZbmsKCJgHu5OlXkBr0Lsb+ITME/uo352tTjA3qKuATUWG1nkYv9M2ePqvSjZwV+17q/HP/ozsvZozpbgAvOvevIxR7N11oYRgLTrP+vxz+6r+TuLjBDkffNEdBSRV/B2IVcbCe9/1w9ETTgn8obq+grGEeQi70MPF1FX0FYiH90V5Y09Zht4hPBGeRi7VOKc8CM/K3pswb/6L7maB6r86NK6APcIl7oAWB6SdMPuGK1rcjfpg79MdNUGlmbz4X2N0OZ0lgkhmCOSF8FxgF1mDPdCR79JuCz0r/7Yz791Aq6m5gp/jdm43EO+J4qbi4WAD/ifz6lqwMY4MRpThnjH2Ad5lHIhT7Alx4zt/FvDHwvGGMw50aSvgv5UK278IYA9cU4KCQ/CyzBTOfhwPOY00Nb04aZ/hLuKF8HFgEvAGMxq/leIe8N4t/IVJkjJD3k0W5zdJvLxB2H+axj6/sKusVC/j3pSkjHN06yyx5dnaO7hdkplWMnyQr50NHdIdAo12CeGzvZex7tt44uyRfIsZhn1u5X79G6W8zXE1WQkjriC4hkaKqjuYZZ6JLgjnKrR/edo/soYfxUPEd8BKRpetzRrE2R4xmnb0TP66fNV47m4xQ5EjMC8zJgJ5ruaJY47TcryNPixDgmaH51NOUO6ipmIPHThIOOxv2ZUZrR7WY48VF+w2qvFdqDvYoeFZLNKrU1Ovc7MuRxPwWdsNpanbYuzIIXhFXEC76D2d795dzPspAME/I0In8T+yFDnkdS7uDavm4r5NqRII873YMwHv/7bfc1VynX1UfkCfHrXZFBwD7BQAfmtxpajAJOCnkuAPMrCZh1P1wDTMZsCv4DfsLsfLSZiNlItGOKvRggR0FBQcHjx0Ng/VhKUt8K3AAAAABJRU5ErkJggg==
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.03.19.0450
// @created            2025-03-18 07:13:13
// @modified           2025-03-18 07:13:13
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/web-clipper/web-clipper.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/web-clipper/web-clipper.user.js
// ==/UserScript==

/**
 * File: web-clipper.user.js
 * Project: UserScripts
 * File Created: 2025/03/18,Tuesday 07:13:13
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/19,Wednesday 04:50:15
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */
//! https://greasyfork.org/zh-CN/scripts/486888
(function () {
    'use strict'

    // User Config
    // Short cut

    const shortCutUserConfig = {
        /* Example:
        "Shift": false,
        "Ctrl": true,
        "Alt": false,
        "Key": "m"
        */
    }

    // Obsidian
    const obsidianUserConfig = {
        /* Example:
            "my note": [
                "Inbox/Web/",
                "Collection/Web/Reading/"
            ]
        */
    }
    const userLang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        'en'
    const translations = {
        en: {
            copy: 'Copy to clipboard',
            copied: 'Copied successfully!',
            download_md: 'Download as MD',
            send_to_github: 'Send to Github',
            send_to_obsidian: 'Send to Obsidian',
            github_failed: 'Creation failed:',
            github_success: 'Creation succeeded:',
            configure: 'Please configure your GitHub information first',
            menu: 'Convert to Markdown',
            gui_title: 'Set Up GitHub',
            gui_tokeninput: 'Please enter your GitHub Personal Access Token',
            gui_github_repo: 'Please enter your GitHub repository name',
            gui_github_generate: 'Generate',
            gui_github_owner: 'Please enter your GitHub username',
            gui_save: 'Save',
            gui_cancel: 'Cancel',
            guide: `
- Use **arrow keys** to select elements:
    - Up: Select parent element
    - Down: Select the first child element
    - Left: Select the previous sibling element
    - Right: Select the next sibling element
- Use **scroll wheel** to zoom in and out:
    * Up: Select parent element
    - Down: Select the first child element
    - Click to select an element
    - Press \`Esc\` key to cancel selection
    `
        },
        'zh-CN,zh,zh-SG': {
            copy: '复制到剪辑版',
            copied: '复制成功!',
            download_md: '下载为MD',
            send_to_github: '保存到GitHub',
            send_to_obsidian: '发送到Obsidian',
            github_failed: '创建失败:',
            github_success: '创建成功:',
            configure: '请先配置你的GitHub信息',
            menu: '转换为Markdown',
            gui_title: '设置 GitHub',
            gui_tokeninput: '请输入您的GitHub个人访问令牌',
            gui_github_repo: '请输入您的GitHub仓库名称',
            gui_github_generate: '生成',
            gui_github_owner: '请输入您的GitHub用户名',
            gui_save: '保存',
            gui_cancel: '取消',
            guide: `
- 使用**方向键**选择元素
    - 上:选择父元素
    - 下:选择第一个子元素
    - 左:选择上一个兄弟元素
    - 右:选择下一个兄弟元素
- 使用**滚轮**放大缩小
    - 上:选择父元素
    - 下：选择第一个子元素
- 点击元素选择
- 按下 \`Esc\` 键取消选择
    `
        },
        'zh-TW,zh-HK,zh-MO': {
            copy: '複製到剪貼簿',
            copied: '複製成功!',
            download_md: '下載為MD',
            send_to_github: '保存到GitHub',
            send_to_obsidian: '發送到Obsidian',
            github_failed: '創建失敗:',
            github_success: '創建成功:',
            configure: '請先配置你的GitHub 信息',
            menu: '轉換為Markdown',
            guide: `
- 使用**方向鍵**選擇元素
    - 上:選擇父元素
    - 下:選擇第一個子元素
    - 左：選擇上一個兄弟元素
    - 右:選擇下一個兄弟元素
- 使用**滾輪**放大縮小
    - 上:選擇父元素
    - 下：選擇第一個子元素
- 點擊元素選擇
- 按下 \`Esc\` 鍵取消選擇
    `
        },
        vi: {
            copy: 'Sao chép vào clipboard',
            copied: 'Sao chép thành công!',
            download_md: 'Tải xuống dưới dạng MD',
            send_to_github: 'Gửi đến Github',
            send_to_obsidian: 'Gửi đến Obsidian',
            github_failed: 'Tạo thất bại:',
            github_success: 'Tạo thành công:',
            configure: 'Vui lòng cấu hình thông tin GitHub của bạn trước',
            menu: 'Chuyển đổi sang Markdown',
            guide: `
- Sử dụng **phím mũi tên** để chọn các phần tử:
    - Lên: Chọn phần tử cha
    - Xuống: Chọn phần tử con đầu tiên
    - Trái: Chọn phần tử anh em trước
    - Phải: Chọn phần tử anh em sau
- Sử dụng **bánh xe cuộn** để phóng to và thu nhỏ:
    - Lên: Chọn phần tử cha
    - Xuống: Chọn phần tử con đầu tiên
    - Nhấp để chọn một phần tử
    - Nhấn phím \`Esc\` để hủy chọn
    `
        },
        ja: {
            copy: 'クリップボードにコピー',
            copied: 'コピー成功!',
            download_md: 'MDとしてダウンロード',
            send_to_github: 'Githubに送信',
            send_to_obsidian: 'Obsidianに送信',
            github_failed: '作成失敗:',
            github_success: '作成成功:',
            configure: 'まずGitHub情報を設定してください',
            menu: 'Markdownに変換',
            guide: `
- **矢印キー**を使用して要素を選択します:
    - 上: 親要素を選択
    - 下: 最初の子要素を選択
    - 左: 前の兄弟要素を選択
    - 右: 次の兄弟要素を選択
- **スクロールホイール**を使用してズームインおよびズームアウトします:
    - 上: 親要素を選択
    - 下: 最初の子要素を選択
    - 要素をクリックして選択
    - \`Esc\`キーを押して選択をキャンセル
    `
        },
        ko: {
            copy: '클립보드에 복사',
            copied: '복사 성공!',
            download_md: 'MD로 다운로드',
            send_to_github: 'Github에 보내기',
            send_to_obsidian: 'Obsidian에 보내기',
            github_failed: '생성 실패:',
            github_success: '생성 성공:',
            configure: '먼저 GitHub 정보를 구성하십시오',
            menu: 'Markdown으로 변환',
            guide: `
- **화살표 키**를 사용하여 요소를 선택합니다:
    - 위: 부모 요소 선택
    - 아래: 첫 번째 자식 요소 선택
    - 왼쪽: 이전 형제 요소 선택
    - 오른쪽: 다음 형제 요소 선택
- **스크롤 휠**을 사용하여 확대 및 축소합니다:
    - 위: 부모 요소 선택
    - 아래: 첫 번째 자식 요소 선택
    - 요소를 선택하려면 클릭
    - 선택을 취소하려면 \`Esc\` 키를 누르십시오
    `
        },
        fr: {
            copy: 'Copier dans le presse-papiers',
            copied: 'Copié avec succès!',
            download_md: 'Télécharger en tant que MD',
            send_to_github: 'Envoyer à Github',
            send_to_obsidian: 'Envoyer à Obsidian',
            github_failed: 'Échec de la création:',
            github_success: 'Création réussie:',
            configure: 'Veuillez d\'abord configurer vos informations GitHub',
            menu: 'Convertir en Markdown',
            guide: `
- Utilisez les **touches fléchées** pour sélectionner les éléments:
    - Haut: Sélectionner l'élément parent
    - Bas: Sélectionner le premier élément enfant
    - Gauche: Sélectionner l'élément frère précédent
    - Droite: Sélectionner l'élément frère suivant
- Utilisez la **molette de défilement** pour zoomer et dézoomer:
    - Haut: Sélectionner l'élément parent
    - Bas: Sélectionner le premier élément enfant
    - Cliquez pour sélectionner un élément
    - Appuyez sur la touche \`Esc\` pour annuler la sélection
    `
        },
        it: {
            copy: 'Copia negli appunti',
            copied: 'Copiato con successo!',
            download_md: 'Scarica come MD',
            send_to_github: 'Invia a Github',
            send_to_obsidian: 'Invia a Obsidian',
            github_failed: 'Creazione fallita:',
            github_success: 'Creazione riuscita:',
            configure: 'Si prega di configurare prima le informazioni di GitHub',
            menu: 'Converti in Markdown',
            guide: `
- Usa i **tasti freccia** per selezionare gli elementi:
    - Su: Seleziona l'elemento padre
    - Giù: Seleziona il primo elemento figlio
    - Sinistra: Seleziona l'elemento fratello precedente
    - Destra: Seleziona l'elemento fratello successivo
- Usa la **rotella di scorrimento** per ingrandire e ridurre:
    - Su: Seleziona l'elemento padre
    - Giù: Seleziona il primo elemento figlio
    - Clicca per selezionare un elemento
    - Premi il tasto \`Esc\` per annullare la selezione
    `
        },
        de: {
            copy: 'In die Zwischenablage kopieren',
            copied: 'Erfolgreich kopiert!',
            download_md: 'Als MD herunterladen',
            send_to_github: 'An Github senden',
            send_to_obsidian: 'An Obsidian senden',
            github_failed: 'Erstellung fehlgeschlagen:',
            github_success: 'Erstellung erfolgreich:',
            configure: 'Bitte konfigurieren Sie zuerst Ihre GitHub-Informationen',
            menu: 'In Markdown konvertieren',
            guide: `
- Verwenden Sie die **Pfeiltasten**, um Elemente auszuwählen:
    - Oben: Elternelement auswählen
    - Unten: Erstes Kindelement auswählen
    - Links: Vorheriges Geschwisterelement auswählen
    - Rechts: Nächstes Geschwisterelement auswählen
- Verwenden Sie das **Scrollrad**, um hinein- und herauszuzoomen:
    - Oben: Elternelement auswählen
    - Unten: Erstes Kindelement auswählen
    - Klicken Sie, um ein Element auszuwählen
    - Drücken Sie die \`Esc\`-Taste, um die Auswahl abzubrechen
    `
        }
    }
    const getTranslations = (lang) => {
        for (const key in translations) {
            if (key === lang || key.split(',').includes(lang)) {
                return translations[key]
            }
        }
        return translations['en']
    }
    const translate = new Proxy(
        function (key) {
            const lang = userLang
            const strings = getTranslations(lang)
            return strings[key] || translations['en'][key]
        },
        {
            get(target, prop) {
                const lang = userLang
                const strings = getTranslations(lang)
                return strings[prop] || translations['en'][prop]
            }
        }
    )

    // 全局变量
    var isSelecting = false
    var selectedElement = null
    let shortCutConfig, obsidianConfig
    // 读取配置
    // 初始化快捷键配置
    let storedShortCutConfig = GM_getValue('shortCutConfig')
    if (Object.keys(shortCutUserConfig).length !== 0) {
        GM_setValue('shortCutConfig', JSON.stringify(shortCutUserConfig))
        shortCutConfig = shortCutUserConfig
    } else if (storedShortCutConfig) {
        shortCutConfig = JSON.parse(storedShortCutConfig)
    }

    // 初始化Obsidian配置
    let storedObsidianConfig = GM_getValue('obsidianConfig')
    if (Object.keys(obsidianUserConfig).length !== 0) {
        GM_setValue('obsidianConfig', JSON.stringify(obsidianUserConfig))
        obsidianConfig = obsidianUserConfig
    } else if (storedObsidianConfig) {
        obsidianConfig = JSON.parse(storedObsidianConfig)
    }
    GM_addStyle(`
        .modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:10000;}
        .modal-content{background:white;padding:20px;border-radius:8px;width:400px;box-shadow:0 4px 15px rgba(0,0,0,0.2);position:relative;}
        .modal-title{margin:0 0 10px 0;font-size:20px;}
        .modal-description{margin-bottom:20px;font-size:14px;color:#666;}
        .modal-description a{color:#007bff;text-decoration:underline;}
        .modal-close-btn {position: absolute;top: 10px;right: 10px;background-color: red;color: white;border: none;border-radius: 50%;width: 24px;height: 24px;font-size: 16px;cursor: pointer;display: flex;justify-content: center;align-items: center;line-height: 1;}
        .modal-close-btn:hover {background-color: darkred;}
        .gui-input{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-bottom:20px;font-size:14px;}
        #save-token{background-color:#28a745;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:4px;margin-right:10px;}
        #cancel-token{background-color:#dc3545;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:4px;}
    `)
    function showConfig() {
        const modalHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <h3 class="modal-title">${translate.gui_title}</h3>
                    <p class="modal-description">${translate.gui_tokeninput}
                        <a href="https://github.com/settings/tokens/new?description=Web%20Clipper%20Token%20UserScript&scopes=repo" target="_blank" rel="noopener noreferrer">${translate.gui_github_generate}</a>
                    </p>
                    <input type="text" id="github-token-input" class="gui-input" placeholder="${translate.gui_tokeninput}">
                    <p class="modal-description">${translate.gui_github_owner}</p>
                    <input type="text" id="github-owner-input" class="gui-input" placeholder="${translate.gui_github_owner}">
                    <p class="modal-description">${translate.gui_github_repo}</p>
                    <input type="text" id="github-repo-input" class="gui-input" placeholder="${translate.gui_github_repo}">
                    <button id="save-token">${translate.gui_save}</button>
                    <button id="cancel-token" class="cancel">${translate.gui_cancel}</button>
                </div>
            </div>
        `
        const modalContainer = document.createElement('div')
        modalContainer.innerHTML = modalHTML
        document.body.appendChild(modalContainer)
        const elements = {
            token: modalContainer.querySelector('#github-token-input'),
            owner: modalContainer.querySelector('#github-owner-input'),
            repo: modalContainer.querySelector('#github-repo-input'),
            saveButton: modalContainer.querySelector('#save-token'),
            cancelButton: modalContainer.querySelector('#cancel-token')
        }
        elements.token.value = GM_getValue('github_token', '')
        elements.owner.value = GM_getValue('OWNER', '')
        elements.repo.value = GM_getValue('REPO', '')
        elements.saveButton.addEventListener('click', () => {
            if (elements.token.value && elements.owner.value && elements.repo.value) {
                GM_setValue('github_token', elements.token.value)
                GM_setValue('OWNER', elements.owner.value)
                GM_setValue('REPO', elements.repo.value)
                modalContainer.remove()
            } else {
                alert(`${translate.configure}`)
            }
        })
        elements.cancelButton.addEventListener('click', () => modalContainer.remove())
    }
    function showDialog(info, link) {
        const modalHTML = `
            <div class="modal-overlay">
    <div class="modal-content">
        <button class="modal-close-btn" id="cancel-token" >×</button>
        <h3 class="modal-title">${info}</h3>
        <p class="modal-description">
            ${info}
            <a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a>
        </p>
            </div>
        </div>
        `
        const modalContainer = document.createElement('div')
        modalContainer.innerHTML = modalHTML
        document.body.appendChild(modalContainer)
        modalContainer.querySelector('#cancel-token').addEventListener('click', () => modalContainer.remove())
    }
    // HTML2Markdown
    function convertToMarkdown(element) {
        var html = element.outerHTML
        let turndownMd = turndownService.turndown(html)
        turndownMd = turndownMd.replaceAll('[\n\n]', '[]') // 防止 <a> 元素嵌套的暂时方法，并不完善
        return turndownMd
    }

    // 预览
    function showMarkdownModal(markdown) {
        var $modal = $(`
                    <div class="h2m-modal-overlay">
                        <div class="h2m-modal">
                            <textarea>${markdown}</textarea>
                            <div class="h2m-preview">${marked.parse(markdown)}</div>
                            <div class="h2m-buttons">
                                <button class="h2m-copy">${translate.copy}</button>
                                <button class="h2m-download">${translate.download_md}</button>
                                <button class="h2m-github">${translate.send_to_github}</button>
                                <select class="h2m-obsidian-select">${translate.send_to_obsidian}</select>
                            </div>
                            <button class="h2m-close">X</button>
                        </div>
                    </div>
                `)

        $modal.find('.h2m-obsidian-select').append($('<option>').val('').text(`${translate.send_to_obsidian}`))
        for (const vault in obsidianConfig) {
            for (const path of obsidianConfig[vault]) {
                // 插入元素
                const $option = $('<option>')
                    .val(`obsidian://advanced-uri?vault=${vault}&filepath=${path}`)
                    .text(`${vault}: ${path}`)
                $modal.find('.h2m-obsidian-select').append($option)
            }
        }

        $modal.find('textarea').on('input', function () {
            // console.log("Input event triggered");
            var markdown = $(this).val()
            var html = marked.parse(markdown)
            // console.log("Markdown:", markdown);
            // console.log("HTML:", html);
            $modal.find('.h2m-preview').html(html)
        })

        $modal.on('keydown', function (e) {
            if (e.key === 'Escape') {
                $modal.remove()
            }
        })

        $modal.find('.h2m-copy').on('click', function () { // 复制到剪贴板
            GM_setClipboard($modal.find('textarea').val())
            $modal.find('.h2m-copy').text(`${translate.copied}`)
            setTimeout(() => {
                $modal.find('.h2m-copy').text(`${translate.copy}`)
            }, 1000)
        })
        $modal.find('.h2m-github').on('click', function () {
            const github_token = GM_getValue('github_token', '')
            const github_owner = GM_getValue('OWNER', '')
            const github_repo = GM_getValue('REPO', '')

            if (!github_token || !github_owner || !github_repo) {
                showConfig()
                return
            }
            const labels = ['web-clipper']//标签,可多项
            const markdown = $modal.find('textarea').val()
            const title = markdown.split('\n')[0]
            const body = markdown
            createIssue(github_token, github_owner, github_repo, title, body, labels)
        })
        $modal.find('.h2m-download').on('click', function () { // 下载
            var markdown = $modal.find('textarea').val()
            var blob = new Blob([markdown], { type: 'text/markdown' })
            var url = URL.createObjectURL(blob)
            var a = document.createElement('a')
            a.href = url
            // 当前页面标题 + 时间
            a.download = `${document.title}-${new Date().toISOString().replace(/:/g, '-')}.md`
            a.click()
        })

        $modal.find('.h2m-obsidian-select').on('change', function () { // 发送到 Obsidian
            const val = $(this).val()
            if (!val) return
            const markdown = $modal.find('textarea').val()
            GM_setClipboard(markdown)
            const title = document.title.replaceAll(/[\\/:*?"<>|]/g, '_') // File name cannot contain any of the following characters: * " \ / < > : | ?
            const url = `${val}${title}.md&clipboard=true`
            window.open(url)
        })

        $modal.find('.h2m-close').on('click', function () { // 关闭按钮 X
            $modal.remove()
        })

        // 同步滚动
        // 获取两个元素
        var $textarea = $modal.find('textarea')
        var $preview = $modal.find('.h2m-preview')
        var isScrolling = false

        // 当 textarea 滚动时，设置 preview 的滚动位置
        $textarea.on('scroll', function () {
            if (isScrolling) {
                isScrolling = false
                return
            }
            var scrollPercentage = this.scrollTop / (this.scrollHeight - this.offsetHeight)
            $preview[0].scrollTop = scrollPercentage * ($preview[0].scrollHeight - $preview[0].offsetHeight)
            isScrolling = true
        })

        // 当 preview 滚动时，设置 textarea 的滚动位置
        $preview.on('scroll', function () {
            if (isScrolling) {
                isScrolling = false
                return
            }
            var scrollPercentage = this.scrollTop / (this.scrollHeight - this.offsetHeight)
            $textarea[0].scrollTop = scrollPercentage * ($textarea[0].scrollHeight - $textarea[0].offsetHeight)
            isScrolling = true
        })

        $(document).on('keydown', function (e) {
            if (e.key === 'Escape' && $('.h2m-modal-overlay').length > 0) {
                $('.h2m-modal-overlay').remove()
            }
        })

        $('body').append($modal)
    }

    // 开始选择
    function startSelecting() {
        $('body').addClass('h2m-no-scroll') // 防止页面滚动
        isSelecting = true
        // 操作指南
        tip(marked.parse(translate.guide))
    }

    // 结束选择
    function endSelecting() {
        isSelecting = false
        $('.h2m-selection-box').removeClass('h2m-selection-box')
        $('body').removeClass('h2m-no-scroll')
        $('.h2m-tip').remove()
    }

    function tip(message, timeout = null) {
        var $tipElement = $('<div>')
            .addClass('h2m-tip')
            .html(message)
            .appendTo('body')
            .hide()
            .fadeIn(200)
        if (timeout === null) {
            return
        }
        setTimeout(function () {
            $tipElement.fadeOut(200, function () {
                $tipElement.remove()
            })
        }, timeout)
    }

    // Turndown 配置
    var turndownPluginGfm = TurndownPluginGfmService
    var turndownService = new TurndownService({ codeBlockStyle: 'fenced' })

    turndownPluginGfm.gfm(turndownService) // 引入全部插件
    // turndownService.addRule('strikethrough', {
    //     filter: ['del', 's', 'strike'],
    //     replacement: function (content) {
    //         return '~' + content + '~'
    //     }
    // });

    // turndownService.addRule('latex', {
    //     filter: ['mjx-container'],
    //     replacement: function (content, node) {
    //         const text = node.querySelector('img')?.title;
    //         const isInline = !node.getAttribute('display');
    //         if (text) {
    //             if (isInline) {
    //                 return '$' + text + '$'
    //             }
    //             else {
    //                 return '$$' + text + '$$'
    //             }
    //         }
    //         return '';
    //     }
    // });

    // 添加CSS样式
    GM_addStyle(`
        .h2m-selection-box {
            border: 2px dashed #f00;
            background-color: rgba(255, 0, 0, 0.2);
        }
        .h2m-no-scroll {
            overflow: hidden;
            z-index: 9997;
        }
        .h2m-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: white;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            z-index: 9999;
        }
        .h2m-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9998;
        }
        .h2m-modal textarea,
        .h2m-modal .h2m-preview {
            width: 50%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            overflow-y: auto;
        }
        .h2m-modal .h2m-buttons {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
        .h2m-modal .h2m-buttons button,
        .h2m-modal .h2m-obsidian-select {
            margin-left: 10px;
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 13px 16px;
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            transition-duration: 0.4s;
            cursor: pointer;
        }
        .h2m-modal .h2m-buttons button:hover,
        .h2m-modal .h2m-obsidian-select:hover {
            background-color: #45a049;
        }
        .h2m-modal .h2m-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            width: 25px;
            height: 25px;
            background-color: #f44336;
            color: white;
            font-size: 16px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .h2m-tip {
            position: fixed;
            top: 22%;
            left: 82%;
            transform: translate(-50%, -50%);
            background-color: white;
            border: 1px solid black;
            padding: 8px;
            z-index: 9999;
            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
            background-color: rgba(255, 255, 255, 0.7);
        }
    `)

    // 注册触发器
    shortCutConfig = shortCutConfig ? shortCutConfig : {
        'Shift': false,
        'Ctrl': true,
        'Alt': false,
        'Key': 'm'
    }
    $(document).on('keydown', function (e) {
        if (e.ctrlKey === shortCutConfig['Ctrl'] &&
            e.altKey === shortCutConfig['Alt'] &&
            e.shiftKey === shortCutConfig['Shift'] &&
            e.key.toUpperCase() === shortCutConfig['Key'].toUpperCase()) {
            e.preventDefault()
            startSelecting()
        }
        // else {
        //     console.log(e.ctrlKey, e.altKey, e.shiftKey, e.key.toUpperCase());
        // }
    })
    // $(document).on('keydown', function (e) {
    //     if (e.ctrlKey && e.key === 'm') {
    //         e.preventDefault();
    //         startSelecting()
    //     }
    // });

    GM_registerMenuCommand(`${translate.menu}`, function () {
        startSelecting()
    })
    GM_registerMenuCommand(`${translate.gui_title}`, function () {
        showConfig()
    })

    $(document).on('mouseover', function (e) { // 开始选择
        if (isSelecting) {
            $(selectedElement).removeClass('h2m-selection-box')
            selectedElement = e.target
            $(selectedElement).addClass('h2m-selection-box')
        }
    }).on('wheel', function (e) { // 滚轮事件
        if (isSelecting) {
            e.preventDefault()
            if (e.originalEvent.deltaY < 0) {
                selectedElement = selectedElement.parentElement ? selectedElement.parentElement : selectedElement // 扩大
                if (selectedElement.tagName === 'HTML' || selectedElement.tagName === 'BODY') {
                    selectedElement = selectedElement.firstElementChild
                }
            } else {
                selectedElement = selectedElement.firstElementChild ? selectedElement.firstElementChild : selectedElement // 缩小
            }
            $('.h2m-selection-box').removeClass('h2m-selection-box')
            $(selectedElement).addClass('h2m-selection-box')
        }
    }).on('keydown', function (e) { // 键盘事件
        if (isSelecting) {
            e.preventDefault()
            if (e.key === 'Escape') {
                endSelecting()
                return
            }
            switch (e.key) { // 方向键：上下左右
                case 'ArrowUp':
                    selectedElement = selectedElement.parentElement ? selectedElement.parentElement : selectedElement // 扩大
                    if (selectedElement.tagName === 'HTML' || selectedElement.tagName === 'BODY') { // 排除HTML 和 BODY
                        selectedElement = selectedElement.firstElementChild
                    }
                    break
                case 'ArrowDown':
                    selectedElement = selectedElement.firstElementChild ? selectedElement.firstElementChild : selectedElement // 缩小
                    break
                case 'ArrowLeft': // 寻找上一个元素，若是最后一个子元素则选择父元素的下一个兄弟元素，直到找到一个元素
                    var prev = selectedElement.previousElementSibling
                    while (prev === null && selectedElement.parentElement !== null) {
                        selectedElement = selectedElement.parentElement
                        prev = selectedElement.previousElementSibling ? selectedElement.previousElementSibling.lastChild : null
                    }
                    if (prev !== null) {
                        if (selectedElement.tagName === 'HTML' || selectedElement.tagName === 'BODY') {
                            selectedElement = selectedElement.firstElementChild
                        }
                        selectedElement = prev
                    }
                    break
                case 'ArrowRight':
                    var next = selectedElement.nextElementSibling
                    while (next === null && selectedElement.parentElement !== null) {
                        selectedElement = selectedElement.parentElement
                        next = selectedElement.nextElementSibling ? selectedElement.nextElementSibling.firstElementChild : null
                    }
                    if (next !== null) {
                        if (selectedElement.tagName === 'HTML' || selectedElement.tagName === 'BODY') {
                            selectedElement = selectedElement.firstElementChild
                        }
                        selectedElement = next
                    }
                    break
            }

            $('.h2m-selection-box').removeClass('h2m-selection-box')
            $(selectedElement).addClass('h2m-selection-box') // 更新选中元素的样式
        }
    }
    ).on('mousedown', function (e) { // 鼠标事件，选择 mousedown 是因为防止点击元素后触发其他事件
        if (isSelecting) {
            e.preventDefault()
            var markdown = convertToMarkdown(selectedElement)
            showMarkdownModal(markdown)
            endSelecting()
        }
    })
    function createIssue(token, owner, repo, title, body, labels = []) {
        const url = `https://api.github.com/repos/${owner}/${repo}/issues`
        const issueData = {
            title: title,
            body: body,
            labels: labels
        }
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Authorization', `token ${token}`)
        xhr.setRequestHeader('Accept', 'application/vnd.github+json')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const response = JSON.parse(xhr.responseText)
                    showDialog(translate.github_success, response.html_url)

                } else {
                    alert(`${translate.github_failed}\n ${xhr.status}\n ${xhr.statusText}\n ${xhr.responseText}`)
                    console.error(`${translate.github_failed}`, xhr.status, xhr.statusText, xhr.responseText)
                }
            }
        }
        xhr.send(JSON.stringify(issueData))
    }
})()
