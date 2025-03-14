// ==UserScript==
// @name              Small Window Preview
// @name:zh-CN        小窗预览
// @description:zh-CN 拖拽链接时在弹出窗口中打开链接，并在打开前提供预览，使用 Edge 的预读技术。同时在小窗口打开时在背后添加亚克力效果,可设置为长按触发.自动记录每个站点的小窗口大小.
// @name:zh           小窗预览
// @description:zh    拖拽链接时在弹出窗口中打开链接，并在打开前提供预览，使用 Edge 的预读技术。同时在小窗口打开时在背后添加亚克力效果,可设置为长按触发.自动记录每个站点的小窗口大小.
// @name:ar           معاينة نافذة صغيرة
// @description:ar    افتح الرابط في النافذة المنبثقة عند سحب الرابط，وتقديم معاينة قبل الافتتاح，يستخدم Edge تكنولوجيا ما قبل القراءة。وفي نفس الوقت، أضف تأثير الأكريليك خلف النافذة الصغيرة عند فتحها.。
// @name:bg           Визуализация на малък прозорец
// @description:bg    Отваряне на връзката в изскачащ прозорец при плъзгане на връзката，и предоставете визуализация преди отваряне，използване Edge технология за предварително четене。В същото време добавете акрилен ефект зад малкото прозорче, когато се отвори.。
// @name:cs           Náhled malého okna
// @description:cs    Otevřít odkaz ve vyskakovacím okně při přetahování odkazu，a před otevřením poskytněte náhled，použití Edge technologie předběžného čtení。Zároveň přidejte akrylový efekt za malé okno při jeho otevření.。
// @name:da           Forhåndsvisning af lille vindue
// @description:da    Åbn link i pop op-vindue, når du trækker link，og giv en forhåndsvisning inden åbning，bruge Edge pre-reading teknologi。Tilføj samtidig en akryleffekt bag det lille vindue, når det åbnes.。
// @name:de           Kleine Fenstervorschau
// @description:de    Öffnen Sie den Link im Popup-Fenster, wenn Sie den Link ziehen，und stellen Sie vor dem Öffnen eine Vorschau bereit，verwenden Edge Vorlesetechnologie。Gleichzeitig entsteht hinter dem kleinen Fenster beim Öffnen ein Acryleffekt.。
// @name:el           Προεπισκόπηση μικρού παραθύρου
// @description:el    Άνοιγμα συνδέσμου στο αναδυόμενο παράθυρο κατά τη μεταφορά του συνδέσμου，και παρέχετε μια προεπισκόπηση πριν από το άνοιγμα，χρήση Edge τεχνολογία προ-ανάγνωσης。Ταυτόχρονα, προσθέστε ένα ακρυλικό εφέ πίσω από το μικρό παράθυρο όταν ανοίγει.。
// @name:en           Small window preview
// @description:en    Open link in popup window when dragging link，and provide a preview before opening，use Edge pre-reading technology。At the same time, add an acrylic effect behind the small window when it is opened.。
// @name:eo           Malgranda fenestro antaŭrigardo
// @description:eo    Malfermu ligilon en ŝprucfenestro dum trenado de ligilo，kaj provizi antaŭrigardon antaŭ malfermo，uzi Edge antaŭlega teknologio。Samtempe, aldonu akrilan efikon malantaŭ la malgranda fenestro kiam ĝi estas malfermita.。
// @name:es           Vista previa de ventana pequeña
// @description:es    Abrir enlace en ventana emergente al arrastrar enlace，y proporcionar una vista previa antes de abrir，usar Edge tecnología de prelectura。Al mismo tiempo, agregue un efecto acrílico detrás de la pequeña ventana cuando esté abierta.。
// @name:fi           Pienen ikkunan esikatselu
// @description:fi    Avaa linkki ponnahdusikkunassa, kun vedät linkkiä，ja anna esikatselu ennen avaamista，käyttää Edge esilukutekniikka。Lisää samalla akryyliefekti pienen ikkunan taakse, kun se avataan.。
// @name:fr           Aperçu dans une petite fenêtre
// @description:fr    Ouvrir le lien dans la fenêtre contextuelle lorsque vous faites glisser le lien，et fournir un aperçu avant l’ouverture，utiliser Edge technologie de pré-lecture。Ajoutez par la même occasion un effet acrylique derrière la petite fenêtre lorsqu’elle est ouverte.。
// @name:he           תצוגה מקדימה של חלון קטן
// @description:he    פתח קישור בחלון קופץ בעת גרירת קישור，ולספק תצוגה מקדימה לפני הפתיחה，לְהִשְׁתַמֵשׁ Edge טכנולוגיית טרום קריאה。במקביל, הוסף אפקט אקרילי מאחורי החלון הקטן כאשר הוא נפתח.。
// @name:hr           Pregled malog prozora
// @description:hr    Otvori vezu u skočnom prozoru prilikom povlačenja veze，i pružiti pregled prije otvaranja，koristiti Edge tehnologija predčitanja。U isto vrijeme dodajte akrilni efekt iza prozora kada se otvori.。
// @name:hu           Kis ablak előnézet
// @description:hu    Link megnyitása a felugró ablakban a hivatkozás húzásakor，és adjon előnézetet megnyitás előtt，használat Edge előolvasási technológia。Ugyanakkor a kis ablak mögé, amikor kinyitják, adjunk hozzá akril hatást.。
// @name:id           Pratinjau jendela kecil
// @description:id    Buka tautan di jendela popup saat menyeret tautan，dan memberikan pratinjau sebelum dibuka，menggunakan Edge teknologi pra-membaca。Sekaligus menambahkan efek akrilik di belakang jendela kecil saat dibuka.。
// @name:it           Anteprima in una piccola finestra
// @description:it    Apri il collegamento nella finestra popup durante il trascinamento del collegamento，e fornire un’anteprima prima dell’apertura，utilizzo Edge tecnologia di prelettura。Allo stesso tempo, aggiungi un effetto acrilico dietro la finestrella quando è aperta.。
// @name:ja           小さなウィンドウでプレビュー
// @description:ja    リンクをドラッグするとポップアップ ウィンドウでリンクが開きます，開く前にプレビューを提供します，使用 Edge 先読み技術。同時に、開いたときの小窓の後ろにアクリル効果を追加します。。
// @name:ka           მცირე ფანჯრის გადახედვა
// @description:ka    გახსენით ბმული ამომხტარ ფანჯარაში ბმულის გადატანისას，და მიაწოდეთ გადახედვა გახსნამდე，გამოყენება Edge წინასწარი კითხვის ტექნოლოგია。ამავდროულად დაამატეთ აკრილის ეფექტი პატარა ფანჯრის უკან, როდესაც ის გაიხსნება.。
// @name:ko           작은 창 미리보기
// @description:ko    링크 드래그 시 팝업창에서 링크 열기，열기 전에 미리보기를 제공하세요.，사용 Edge 미리 읽는 기술。동시에 작은 창을 열 때 뒤에 아크릴 효과를 추가합니다.。
// @name:nl           Voorbeeld in klein venster
// @description:nl    Open de link in het pop-upvenster tijdens het slepen van de link，en geef een voorbeeld voordat u het opent，gebruik Edge technologie voor voorlezen。Voeg tegelijkertijd een acryleffect toe achter het kleine raam wanneer dit geopend is.。
// @name:nb           Forhåndsvisning av lite vindu
// @description:nb    Åpne lenken i popup-vinduet når du drar lenken，og gi en forhåndsvisning før åpning，bruk Edge førleseteknologi。Legg samtidig til en akryleffekt bak det lille vinduet når det åpnes.。
// @name:pl           Mały podgląd okna
// @description:pl    Otwórz łącze w wyskakującym oknie podczas przeciągania łącza，i udostępnij podgląd przed otwarciem，używać Edge technologia wstępnego odczytu。Jednocześnie dodaj efekt akrylu za małym oknem, gdy jest ono otwarte.。
// @name:pt-BR        Pré-visualização em janela pequena
// @description:pt-BR Abra o link na janela pop-up ao arrastar o link，e forneça uma prévia antes de abrir，usar Edge tecnologia de pré-leitura。Ao mesmo tempo, adicione um efeito acrílico atrás da pequena janela quando ela for aberta.。
// @name:ro           Previzualizare fereastră mică
// @description:ro    Deschideți linkul în fereastra pop-up când trageți linkul，și oferă o previzualizare înainte de deschidere，utilizare Edge tehnologie de pre-lectura。În același timp, adăugați un efect acrilic în spatele ferestrei mici atunci când este deschisă.。
// @name:ru           Предварительный просмотр в небольшом окне
// @description:ru    Открыть ссылку во всплывающем окне при перетаскивании ссылки，и предоставьте предварительный просмотр перед открытием，использовать Edge технология предварительного чтения。В то же время добавьте акриловый эффект за маленьким окном, когда оно открыто.。
// @name:sk           Ukážka malého okna
// @description:sk    Otvoriť odkaz vo vyskakovacom okne pri presúvaní odkazu，a pred otvorením poskytnite náhľad，použitie Edge technológia predbežného čítania。Zároveň pridajte akrylový efekt za malé okno, keď je otvorené.。
// @name:sr           Преглед малог прозора
// @description:sr    Отворите везу у искачућем прозору када превлачите везу，и обезбедите преглед пре отварања，користити Edge технологија предчитања。Истовремено, додајте акрилни ефекат иза малог прозора када се отвори.。
// @name:sv           Litet fönster förhandsvisning
// @description:sv    Öppna länken i popup-fönstret när du drar länken，och ge en förhandstitt innan du öppnar，använda Edge förläsningsteknik。Lägg samtidigt till en akryleffekt bakom det lilla fönstret när det öppnas.。
// @name:th           การแสดงตัวอย่างหน้าต่างขนาดเล็ก
// @description:th    เปิดลิงก์ในหน้าต่างป๊อปอัปเมื่อลากลิงก์，และแสดงตัวอย่างก่อนเปิด，ใช้ Edge เทคโนโลยีก่อนการอ่าน。ในเวลาเดียวกัน ให้เพิ่มเอฟเฟ็กต์อะคริลิกด้านหลังหน้าต่างเล็กๆ เมื่อเปิดออก。
// @name:tr           Küçük pencere önizlemesi
// @description:tr    Bağlantıyı sürüklerken bağlantıyı açılır pencerede aç，ve açmadan önce bir önizleme sağlayın，kullanmak Edge ön okuma teknolojisi。Aynı zamanda küçük pencere açıldığında arkasına akrilik efekti ekleyin.。
// @name:ug           كىچىك كۆزنەك ئالدىن كۆرۈش
// @description:ug    ئۇلىنىشنى سۆرىگەندە سەكرىمە كۆزنەكتە ئۇلىنىشنى ئېچىڭ，ۋە ئېچىشتىن بۇرۇن ئالدىن كۆرۈش بىلەن تەمىنلەڭ，use Edge ئالدىن ئوقۇش تېخنىكىسى。شۇنىڭ بىلەن بىر ۋاقىتتا ، ئېچىلغاندا كىچىك كۆزنەكنىڭ كەينىگە ئاكرىللىق ئۈنۈم قوشۇڭ.。
// @name:uk           Попередній перегляд маленького вікна
// @description:uk    Відкрити посилання у спливаючому вікні під час перетягування посилання，і надайте попередній перегляд перед відкриттям，використовувати Edge технологія попереднього читання。У той же час додайте акриловий ефект за маленьким вікном, коли воно відкривається.。
// @name:vi           Xem trước cửa sổ nhỏ
// @description:vi    Mở liên kết trong cửa sổ bật lên khi kéo liên kết，và cung cấp bản xem trước trước khi mở，sử dụng Edge công nghệ đọc trước。Đồng thời, thêm hiệu ứng acrylic phía sau cửa sổ nhỏ khi nó được mở.。
// @name:zh-TW        小窗預覽
// @description:zh-TW 拖曳連結時在彈出視窗中開啟鏈接，並在打開前提供預覽，使用 Edge 的預讀技術。同時在小窗口打開時在背後添加壓克力效果。
// @name:zh-HK        小窗預覽
// @description:zh-HK 拖曳連結時在彈出視窗中開啟鏈接，並在打開前提供預覽，使用 Edge 的預讀技術。同時在小窗口打開時在背後添加壓克力效果。
// @name:fr-CA        Aperçu dans une petite fenêtre
// @description:fr-CA Ouvrir le lien dans la fenêtre contextuelle lorsque vous faites glisser le lien，et fournir un aperçu avant l’ouverture，utiliser Edge technologie de pré-lecture。Ajoutez par la même occasion un effet acrylique derrière la petite fenêtre lorsqu’elle est ouverte.。
// @description       Drag a link to open it in a popup window with a preview before opening, using Edge's prerendering technology. Also, add an acrylic effect behind the window when it's open.
// @version           2025.3.14.1108
// @author            hiisme,人民的勤务员 <china.qinwuyuan@gmail.com>
// @match             *://*/*
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_info
// @grant             GM_getResourceText
// @require           https://unpkg.com/sweetalert2@10.16.6/dist/sweetalert2.min.js
// @resource          swalStyle https://unpkg.com/sweetalert2@10.16.6/dist/sweetalert2.min.css
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYklEQVR4nO3VW0yTZxzH8QI9ACbb4g3J3OR2Zm64uaVXu/BChkMUhAotUlrKUQUqqLhDRnDJLnZQoLvYxRLneQSB0tLSw1ugnE9KC7y05QwFVDxBdt/fUhhb2dS97+sLvEv4J89NE5rP98mfpzze9mzP9rxwxNe84shLrjnRhQFfUHE/gov6EFzUg+Az3QhRdyGksAMhBe3g57eBn28H/3QL+KeaIThpgyCPgCDXCmGuGcIcE4TZjRBlGSDKbIBIpYdIVY/QDC1ClXUIVdQgLP0OwuTVCJNXITztN7ymrPJFFusXPv6uNYbHZMS3vOLQr5y+oHMDCDp7F5sdEH7iNsJTb+INxW3f/m9bxbQDdl92z/HOO7DVATtkNxBZpPPSDhB+OejjSsDr8ls+2gG8Eie4ErBDeh20/V+MLONzchkXyCWUDC+hZOgZzg89xbnBpzg7+ATFzicocjxeOWcGHkE98AiF9xZRcG8R+XcfIr//IU73P8Cpvgc42Xcfeb33kduzsHJyuueR3T2PrK45ZHbOQdXpharDi4yOWSjbZ6Fom0F62zTSW6chb51Cmn2KfgCX8CdaJukHrMc/21J8KpMArtx8asskZM0TDAI4hJcxCeASXto0Tj+AS/gUG4MALuGTbWP0A7iEP04wCOASXkKMMgvgCl5iZRDAJXySxUM/gEv4RCYBXMIfM7vpB3AJn8Ak4J/4vJ555HTOIrt9ZuVktU0js20aqtYpZNinoLRPQtkyCUXLBNLtk6zi400uBgGBN9+7ALlpCOKfDfjoJx32a1bPh5p6fFD599n35zlwlUCqhWQNH88kIHBtcrq8OHTTDoFaQ/kc+JVAWvM4K/ijjSP0A9btfPc8MppGEVVeSzlgX6UWqbYxVvBHjAwC/vUP2zUHhc2DqApqEVEVWsiIUVbwcUaSfsBzX5tOL+RWN/ZeqqEQUAcpMcoK/rCBQcDznkpV+yxkRgd2f3ODUkCK1cMKPtYwzCyAKd5/3i9fDWADH9swRD/gVfBrAckWNyv4z/QMAl4FvxpQi+NmNyv4Q/pB+gFreKnBgbcvXn8pdlfZNez5vnrdZ+9droXE7GIFH6NjEKBqn6F087vKriJB2w+JwYl3f7yzLiDJ5GIF/6nOST9AanD8TuXmj2n7ILWNQtY0DkmDA3t+qP7rdyDRNMIKPrreuURPn18hivj6yiJl/NpTSYwhUT+AT36xIK62F0kWNxt4HNQ6qqjjS0uF/EKNjsrarMMHvDZJFhckFg8r+Git43FMjfOtTcOztfMHtc5l/82ziheoK0280iuhgX+WQkxEJNvGSNr4hmHPEa3rTeqrsQH4wAiJ1UP+L/GBEYlmN7m5eB6Px1dr6v7jV9Xof5WofFccMRGRYHaRm4b3D1+tmWEDvzZxxGBEvMlFbgreP8KiyncEhZoFJmvzsoijjSPkhuNfHMEcvzYS0/DOw0byYqyBLIs2De/kbfQICsr3+teJX1hZS3dttnL+AHpvNumR+ceNAAAAAElFTkSuQmCC
// @iconbak           https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-POPUPWINDOW-48.png
// @license           MIT
// ==/UserScript==
/**
 * File: popup-window.user.js
 * Project: UserScripts
 * File Created: 2024/11/24,Sunday 12:38:59
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/14,Friday 11:09:20
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */



(function () {
    const userLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
    const translations = {
        'en': {
            actionMode: 'Select Trigger Mode',
            actionMode1: 'Long Press',
            actionMode2: 'Drag',
            actionMode0: 'Both',
            longPressEffective: 'Long press effective time',
            setLongPressEffective: 'Enter the long press effective time (milliseconds):',
            longPressDuration: 'Long Press Duration',
            blurEnabled: 'Toggle Blur Effect',
            blurIntensity: 'Set Blur Intensity',
            closeOnMouseClick: 'Toggle Close on Mouse Click',
            closeOnScroll: 'Toggle Close on Scroll',
            windowWidth: 'Set Window Width',
            windowHeight: 'Set Window Height',
            setLongPressDuration: 'Enter Long Press Duration (milliseconds):',
            setBlurIntensityprompt: 'Enter Blur Intensity (0-10):',
            toggleActionMode: 'Select Trigger Mode:\n1: Long Press\n2: Drag\n0: Both',
            setWindowSizeprompt: 'Enter Window Size (pixels):',
            showCountdown: 'Show countdown progress bar',
            saveWindowConfig: 'Record window position',
            showCountdowndrag: 'Show drag timeout progress bar',
            dragTimeOut: 'Drag timeout duration',
            settings: '⚙️ Settings',
            saveBtn: 'Save',
            cancelBtn: 'Cancel',
            onemenu: 'Show GUI menu only'
        },
        'zh-CN,zh,zh-SG': {
            actionMode: '选择触发方式',
            actionMode1: '长按',
            actionMode2: '拖拽',
            actionMode0: '两者都用',
            longPressEffective: '长按生效时间',
            setLongPressEffective: '输入长按生效时间（毫秒）:',
            longPressDuration: '长按触发时间',
            blurEnabled: '模糊效果',
            blurIntensity: '设置模糊强度',
            closeOnMouseClick: '点击关闭小窗',
            closeOnScroll: '滚动关闭小窗',
            windowWidth: '设置小窗宽度',
            windowHeight: '设置小窗高度',
            setLongPressDuration: '输入长按触发时间（毫秒）:',
            setBlurIntensityprompt: '输入模糊强度（0-10）:',
            toggleActionMode: '选择触发方式:\n1: 长按\n2: 拖拽\n0: 两者都用',
            setWindowSizeprompt: '輸入默认小窗口配置（像素）:',
            showCountdown: '显示长按倒计时进度条',
            saveWindowConfig: '记录窗口位置',
            showCountdowndrag: '显示拖拽超时进度条',
            dragTimeOut: '拖拽超时时间',
            settings: '⚙️ 配置界面',
            saveBtn: '保存',
            cancelBtn: '取消',
            onemenu: '只显示GUI菜单'
        },
        'zh-TW,zh-HK,zh-MO': {
            actionMode: '選擇觸發方式',
            actionMode1: '長按',
            actionMode2: '拖曳',
            actionMode0: '兩者都用',
            longPressEffective: '长按生效时间',
            setLongPressEffective: '输入长按生效时间（毫秒）:',
            longPressDuration: '長按觸發時間',
            blurEnabled: '切換模糊效果',
            blurIntensity: '設定模糊強度',
            closeOnMouseClick: '切換點擊關閉小窗',
            closeOnScroll: '切換滾動關閉小窗',
            windowWidth: '設定小窗寬度',
            windowHeight: '設定小窗高度',
            setLongPressDuration: '輸入長按觸發時間（毫秒）:',
            setBlurIntensityprompt: '輸入模糊強度（0-10）:',
            toggleActionMode: '選擇觸發方式:\n1: 長按\n2: 拖曳\n0: 兩者都用',
            setWindowSizeprompt: '輸入默认小窗口配置（像素）:',
            showCountdown: '顯示倒數計時進度條',
            saveWindowConfig: '記錄窗口位置',
            showCountdowndrag: '顯示拖曳逾時進度條',
            dragTimeOut: '拖曳逾時時間',
            settings: '⚙️ 配置界面',
            saveBtn: '保存',
            cancelBtn: '取消',
            onemenu: '僅顯示 GUI 選單'
        },
        'ja': {
            actionMode: 'トリガーモードの選択',
            actionMode1: '長押し',
            actionMode2: 'ドラッグ',
            actionMode0: '両方',
            longPressDuration: '長押しの時間',
            blurEnabled: 'ぼかし効果の切り替え',
            blurIntensity: 'ぼかしの強度を設定',
            closeOnMouseClick: 'マウスクリックで閉じる切り替え',
            closeOnScroll: 'スクロールで閉じる切り替え',
            windowWidth: 'ウィンドウ幅の設定',
            windowHeight: 'ウィンドウ高さの設定',
            setLongPressDuration: '長押しの時間（ミリ秒）を入力:',
            setBlurIntensityprompt: 'ぼかしの強度（0-10）を入力:',
            toggleActionMode: 'トリガーモードの選択:\n1: 長押し\n2: ドラッグ\n0: 両方',
            setWindowSizeprompt: 'ウィンドウサイズ（ピクセル）を入力:',
            showCountdown: 'カウントダウン進行状況を表示',
            saveWindowConfig: 'ウィンドウの位置を記録',
            showCountdowndrag: 'ドラッグタイムアウトの進行状況バーを表示',
            dragTimeOut: 'ドラッグタイムアウト時間'
        },
        'vi': {
            actionMode: 'Chọn chế độ kích hoạt',
            actionMode1: 'Nhấn lâu',
            actionMode2: 'Kéo thả',
            actionMode0: 'Cả hai',
            longPressDuration: 'Thời gian nhấn lâu',
            blurEnabled: 'Bật hiệu ứng mờ',
            blurIntensity: 'Cài đặt độ mờ',
            closeOnMouseClick: 'Bật/tắt đóng cửa sổ bằng nhấp chuột',
            closeOnScroll: 'Bật/tắt đóng cửa sổ khi cuộn',
            windowWidth: 'Cài đặt chiều rộng cửa sổ',
            windowHeight: 'Cài đặt chiều cao cửa sổ',
            setLongPressDuration: 'Nhập thời gian nhấn lâu (mili giây):',
            setBlurIntensityprompt: 'Nhập độ mờ (0-10):',
            toggleActionMode: 'Chọn chế độ kích hoạt:\n1: Nhấn lâu\n2: Kéo thả\n0: Cả hai',
            setWindowSizeprompt: 'Nhập kích thước cửa sổ (pixel):',
            showCountdown: 'Hiển thị thanh tiến trình đếm ngược',
            saveWindowConfig: 'Ghi lại vị trí cửa sổ',
            showCountdowndrag: 'Hiển thị thanh tiến trình quá hạn khi kéo thả',
            dragTimeOut: 'Thời gian quá hạn khi kéo thả'
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
    'use strict'
    const state = {
        isDragging: false,
        linkToPreload: null,
        popupWindow: null,
        acrylicOverlay: null,
        progressBar: null,
        dragprogressBar: null,
        dragintervalId: null,
        startTime: null
    }
    function getWindowConfig() {
        const windowConfigs = GM_getValue('SitewindowConfigs', [
        ])
        GM_setValue('SitewindowConfigs', windowConfigs
        )
        const currentHostName = window.location.hostname
        // 顶级规则,查找当前域名是否在设置内.....
        for (const config of windowConfigs) {
            if (typeof config.hostName === 'string') {
                if (config.hostName === currentHostName) {
                    return {
                        width: config.width || 870,
                        height: config.height || 530,
                        top: config.top || (window.screen.height - (config.height || 530)) / 3,
                        left: config.left || (window.screen.width - (config.width || 870)) / 2
                    }
                }
            } else if (Array.isArray(config.hostName)) {
                if (config.hostName.includes(currentHostName)) {
                    return {
                        width: config.width || 870,
                        height: config.height || 530,
                        top: config.top || (window.screen.height - (config.height || 530)) / 3,
                        left: config.left || (window.screen.width - (config.width || 870)) / 2
                    }
                }
            }
        }
        // 二级规则,如果开启了自定义设置,使用自定义.
        const customWindowWidth = GM_getValue('custom_windowWidth', 0)
        const customWindowHeight = GM_getValue('custom_windowHeight', 0)
        const customScreenLeft = GM_getValue('custom_screenLeft', 0)
        const customScreenTop = GM_getValue('custom_screenTop', 0)
        if (GM_getValue('saveWindowConfig', false)) {
            if (customWindowWidth !== 0 && customWindowHeight !== 0 && customScreenLeft !== 0 && customScreenTop !== 0) {
                return {
                    width: customWindowWidth,
                    height: customWindowHeight,
                    top: customScreenTop,
                    left: customScreenLeft
                }
            }
        }
        //三级级规则 以上规则全部找不到,窗口使用默认设置.
        return {
            width: 870,
            height: 530,
            top: (window.screen.height - 530) / 3,
            left: (window.screen.width - 870) / 2
        }
    }
    function reWindowConfig() {
        const windowConfig = getWindowConfig()
        config.windowWidth = windowConfig.width,
            config.windowHeight = windowConfig.height,
            config.screenLeft = windowConfig.left,
            config.screenTop = windowConfig.top
    }
    let config = {
    }
    function updateConfig() {
        config = {
            windowWidth: 0,
            windowHeight: 0,
            screenLeft: 0,
            screenTop: 0,
            blurIntensity: GM_getValue('blurIntensity', 5),
            blurEnabled: GM_getValue('blurEnabled', true),
            closeOnMouseClick: GM_getValue('closeOnMouseClick', true),
            closeOnScroll: GM_getValue('closeOnScroll', true),
            longPressEffective: GM_getValue('longPressEffective', 200), // 长按生效时长 （毫秒）//STUB - 也就是长按打开小窗口时间=longPressEffective+longPressDuration
            longPressDuration: GM_getValue('longPressDuration', 500), // 长按持续时间（毫秒）
            dragTimeOut: GM_getValue('dragTimeOut', 2000), // 拖拽超时时间（毫秒）
            actionMode: GM_getValue('actionMode', 0), // 0: 两者都用, 1: 长按, 2: 拖拽
            showCountdown: GM_getValue('showCountdown', true), // 是否显示倒计时进度条
            showCountdowndrag: GM_getValue('showCountdowndrag', true), // 是否显示拖拽倒计时进度条
            saveWindowConfig: GM_getValue('saveWindowConfig', true),//记住窗口位置,没啥用
            streamlinedmenu: GM_getValue('streamlinedmenu', false) // 简洁菜单
        }
    }

    updateConfig()
    reWindowConfig()
    function openSettings() {
        if (!document.getElementById('swalStyle')) {
            const swalStyle = GM_getResourceText('swalStyle')
            const styleElement = document.createElement('style')
            styleElement.id = 'swalStyle'
            styleElement.textContent = swalStyle
            document.head.appendChild(styleElement)
        }
        Swal.fire({
            imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYklEQVR4nO3VW0yTZxzH8QI9ACbb4g3J3OR2Zm64uaVXu/BChkMUhAotUlrKUQUqqLhDRnDJLnZQoLvYxRLneQSB0tLSw1ugnE9KC7y05QwFVDxBdt/fUhhb2dS97+sLvEv4J89NE5rP98mfpzze9mzP9rxwxNe84shLrjnRhQFfUHE/gov6EFzUg+Az3QhRdyGksAMhBe3g57eBn28H/3QL+KeaIThpgyCPgCDXCmGuGcIcE4TZjRBlGSDKbIBIpYdIVY/QDC1ClXUIVdQgLP0OwuTVCJNXITztN7ymrPJFFusXPv6uNYbHZMS3vOLQr5y+oHMDCDp7F5sdEH7iNsJTb+INxW3f/m9bxbQDdl92z/HOO7DVATtkNxBZpPPSDhB+OejjSsDr8ls+2gG8Eie4ErBDeh20/V+MLONzchkXyCWUDC+hZOgZzg89xbnBpzg7+ATFzicocjxeOWcGHkE98AiF9xZRcG8R+XcfIr//IU73P8Cpvgc42Xcfeb33kduzsHJyuueR3T2PrK45ZHbOQdXpharDi4yOWSjbZ6Fom0F62zTSW6chb51Cmn2KfgCX8CdaJukHrMc/21J8KpMArtx8asskZM0TDAI4hJcxCeASXto0Tj+AS/gUG4MALuGTbWP0A7iEP04wCOASXkKMMgvgCl5iZRDAJXySxUM/gEv4RCYBXMIfM7vpB3AJn8Ak4J/4vJ555HTOIrt9ZuVktU0js20aqtYpZNinoLRPQtkyCUXLBNLtk6zi400uBgGBN9+7ALlpCOKfDfjoJx32a1bPh5p6fFD599n35zlwlUCqhWQNH88kIHBtcrq8OHTTDoFaQ/kc+JVAWvM4K/ijjSP0A9btfPc8MppGEVVeSzlgX6UWqbYxVvBHjAwC/vUP2zUHhc2DqApqEVEVWsiIUVbwcUaSfsBzX5tOL+RWN/ZeqqEQUAcpMcoK/rCBQcDznkpV+yxkRgd2f3ODUkCK1cMKPtYwzCyAKd5/3i9fDWADH9swRD/gVfBrAckWNyv4z/QMAl4FvxpQi+NmNyv4Q/pB+gFreKnBgbcvXn8pdlfZNez5vnrdZ+9droXE7GIFH6NjEKBqn6F087vKriJB2w+JwYl3f7yzLiDJ5GIF/6nOST9AanD8TuXmj2n7ILWNQtY0DkmDA3t+qP7rdyDRNMIKPrreuURPn18hivj6yiJl/NpTSYwhUT+AT36xIK62F0kWNxt4HNQ6qqjjS0uF/EKNjsrarMMHvDZJFhckFg8r+Git43FMjfOtTcOztfMHtc5l/82ziheoK0280iuhgX+WQkxEJNvGSNr4hmHPEa3rTeqrsQH4wAiJ1UP+L/GBEYlmN7m5eB6Px1dr6v7jV9Xof5WofFccMRGRYHaRm4b3D1+tmWEDvzZxxGBEvMlFbgreP8KiyncEhZoFJmvzsoijjSPkhuNfHMEcvzYS0/DOw0byYqyBLIs2De/kbfQICsr3+teJX1hZS3dttnL+AHpvNumR+ceNAAAAAElFTkSuQmCC',
            imageWidth: 48,
            imageHeight: 48,
            title: translate.settings,
            showCancelButton: true,
            confirmButtonText: translate('saveBtn'),
            cancelButtonText: translate('cancelBtn'),
            footer: '<div style="text-align: center;font-size: 1em;">Powered by <a href="https://www.github.com/ChinaGodMan">人民的勤务员</a></div>',
            html:
                `<style>
    .swal2-html-container {
        text-align: left;
    }
    .settings-row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .settings-label {
        flex: 1;
        text-align: right;
        margin-right: 10px;
    }
    .settings-input {
        flex: 2;
    }
    .icon-toggle {
        font-size: 20px;
        cursor: pointer;
        user-select: none;
    }
    .icon-checked {
        color: green;
    }
    .icon-unchecked {
        color: red;
    }
    input[type="number"],
    select {
        width: 100%;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
<div class="settings-row">
    <label class="settings-label">${translate.actionMode}:</label>
    <select class="settings-input" id="actionMode">
        <option value="0" ${GM_getValue('actionMode', 0) == 0 ? 'selected' : ''}>${translate.actionMode0}</option>
        <option value="1" ${GM_getValue('actionMode', 0) == 1 ? 'selected' : ''}>${translate.actionMode1}</option>
        <option value="2" ${GM_getValue('actionMode', 0) == 2 ? 'selected' : ''}>${translate.actionMode2}</option>
    </select>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.blurIntensity}</label>
    <input type="number" class="settings-input" id="blurIntensity" value="${GM_getValue('blurIntensity', 5)}">
</div>
<div class="settings-row">
    <label class="settings-label">${translate.setLongPressEffective}</label>
    <input type="number" class="settings-input" id="longPressEffective"
        value="${GM_getValue('longPressEffective', 200)}">
</div>
<div class="settings-row">
    <label class="settings-label">${translate.setLongPressDuration}</label>
    <input type="number" class="settings-input" id="longPressDuration" value="${GM_getValue('longPressDuration', 500)}">
</div>
<div class="settings-row">
    <label class="settings-label">${translate.dragTimeOut}:</label>
    <input type="number" class="settings-input" id="dragTimeOut" value="${GM_getValue('dragTimeOut', 2000)}">
</div>
<div class="settings-row">
    <label class="settings-label">${translate.blurEnabled}</label>
    <span class="icon-toggle" id="blurEnabled">${GM_getValue('blurEnabled', true) ? '✅' : '❌'}</span>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.closeOnMouseClick}</label>
    <span class="icon-toggle" id="closeOnMouseClick">${GM_getValue('closeOnMouseClick', true) ? '✅' : '❌'}</span>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.closeOnScroll}</label>
    <span class="icon-toggle" id="closeOnScroll">${GM_getValue('closeOnScroll', true) ? '✅' : '❌'}</span>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.showCountdown}</label>
    <span class="icon-toggle" id="showCountdown">${GM_getValue('showCountdown', true) ? '✅' : '❌'}</span>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.showCountdowndrag}</label>
    <span class="icon-toggle" id="showCountdowndrag">${GM_getValue('showCountdowndrag', true) ? '✅' : '❌'}</span>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.saveWindowConfig}:</label>
    <span class="icon-toggle" id="saveWindowConfig">${GM_getValue('saveWindowConfig', true) ? '✅' : '❌'}</span>
</div>
<div class="settings-row">
    <label class="settings-label">${translate.onemenu}:</label>
    <span class="icon-toggle" id="streamlinedmenu">${GM_getValue('streamlinedmenu', false) ? '✅' : '❌'}</span>
</div>
`,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    blurIntensity: document.getElementById('blurIntensity').value,
                    longPressEffective: document.getElementById('longPressEffective').value,
                    longPressDuration: document.getElementById('longPressDuration').value,
                    dragTimeOut: document.getElementById('dragTimeOut').value,
                    blurEnabled: document.getElementById('blurEnabled').textContent === '✅',
                    closeOnMouseClick: document.getElementById('closeOnMouseClick').textContent === '✅',
                    closeOnScroll: document.getElementById('closeOnScroll').textContent === '✅',
                    showCountdown: document.getElementById('showCountdown').textContent === '✅',
                    showCountdowndrag: document.getElementById('showCountdowndrag').textContent === '✅',
                    saveWindowConfig: document.getElementById('saveWindowConfig').textContent === '✅',
                    streamlinedmenu: document.getElementById('streamlinedmenu').textContent === '✅',
                    actionMode: document.getElementById('actionMode').value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                GM_setValue('blurIntensity', parseInt(result.value.blurIntensity))
                GM_setValue('longPressEffective', parseInt(result.value.longPressEffective))
                GM_setValue('longPressDuration', parseInt(result.value.longPressDuration))
                GM_setValue('dragTimeOut', parseInt(result.value.dragTimeOut))
                GM_setValue('blurEnabled', result.value.blurEnabled)
                GM_setValue('closeOnMouseClick', result.value.closeOnMouseClick)
                GM_setValue('closeOnScroll', result.value.closeOnScroll)
                GM_setValue('showCountdown', result.value.showCountdown)
                GM_setValue('showCountdowndrag', result.value.showCountdowndrag)
                GM_setValue('saveWindowConfig', result.value.saveWindowConfig)
                GM_setValue('streamlinedmenu', result.value.streamlinedmenu)
                GM_setValue('actionMode', parseInt(result.value.actionMode))
                updateConfig()
                updateMenuCommands()
                Swal.fire('设置已保存!', '', 'success')
            }
        })
        document.querySelectorAll('.icon-toggle').forEach(item => {
            item.addEventListener('click', function () {
                this.textContent = this.textContent === '✅' ? '❌' : '✅'
                this.classList.toggle('icon-checked')
                this.classList.toggle('icon-unchecked')
            })
        })
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function preloadLink(link, attributes = {}) {
        const preloadElement = document.createElement('link')
        preloadElement.rel = 'preload'
        preloadElement.href = link
        preloadElement.as = '*/*'
        Object.assign(preloadElement, attributes)
        document.head.appendChild(preloadElement)
        await delay(1)
    }
    function createAcrylicOverlay() {
        const acrylicOverlay = document.createElement('div')
        acrylicOverlay.style.position = 'fixed'
        acrylicOverlay.style.top = '0'
        acrylicOverlay.style.left = '0'
        acrylicOverlay.style.width = '100%'
        acrylicOverlay.style.height = '100%'
        acrylicOverlay.style.zIndex = '9999'
        acrylicOverlay.style.backdropFilter = config.blurEnabled ? `blur(${config.blurIntensity}px)` : 'none'
        if (config.closeOnMouseClick) {
            acrylicOverlay.addEventListener('click', handleAcrylicOverlayClick)
        }
        document.body.appendChild(acrylicOverlay)
        return acrylicOverlay
    }
    function handleAcrylicOverlayClick(event) {
        if (event.target === state.acrylicOverlay) {
            closePopupWindow()
        }
    }
    function removeAcrylicOverlay() {
        if (state.acrylicOverlay) {
            document.body.removeChild(state.acrylicOverlay)
            state.acrylicOverlay = null
        }
    }
    window.addEventListener('message', (event) => {
        const message = event.data
        if (message.type === 'qinwuyuan') {
            const width = window.innerWidth
            const height = window.innerHeight
            const left = window.screenX
            const top = window.screenY
            if (config.saveWindowConfig) {
                saveWindowConfig(width, height, left, top, message.hostname)
                //  console.log(width, height, left, top, message.hostname)
            }
        }
    })
    function openPopupWindow(link) {
        reWindowConfig()//FIXME - 跨域窗口如果自己刷新了配置,重新刷新下
        if (!state.popupWindow || state.popupWindow.closed) {
            state.acrylicOverlay = createAcrylicOverlay()
            state.popupWindow = window.open(link, '_blank', `width=${config.windowWidth},height=${config.windowHeight},left=${config.screenLeft},top=${config.screenTop}`)
            state.popupWindowChecker = setInterval(() => {
                if (state.popupWindow) {//保证窗口存在时才检测,兼容下原来脚本点击原窗口焦点关闭覆盖层
                    if (state.popupWindow.closed) {
                        removeAcrylicOverlay()
                        clearInterval(state.popupWindowChecker)
                    } else {
                        try {
                            const width = state.popupWindow.innerWidth
                            const height = state.popupWindow.innerHeight
                            const left = state.popupWindow.screenX
                            const top = state.popupWindow.screenY
                            if (config.saveWindowConfig) {
                                saveWindowConfig(width, height, left, top)
                            }
                        } catch (error) {
                            console.warn('访问跨源窗口属性失败,让弹出窗口自己设置窗口大小...:')
                            const message = {
                                type: 'qinwuyuan',
                                hostname: window.location.hostname
                            }
                            state.popupWindow.postMessage(message, '*')
                        }
                    }
                }
            }, 200)
        }
    }
    function closePopupWindow() {
        if (state.popupWindow && !state.popupWindow.closed) {
            state.popupWindow.close()
            state.popupWindow = null
            removeAcrylicOverlay()
            if (state.linkToPreload) {
                removePreloadedLink(state.linkToPreload)
            }
            window.removeEventListener('scroll', closePopupOnScroll)
        }
    }
    function removePreloadedLink(link) {
        const preloadElement = document.querySelector(`link[href="${link}"]`)
        if (preloadElement) {
            document.head.removeChild(preloadElement)
        }
    }
    function closePopupOnScroll() {
        if (state.popupWindow && !state.popupWindow.closed) {
            closePopupWindow()
        }
    }
    function toggleActionMode() {
        const mode = prompt(translate('toggleActionMode'), config.actionMode)
        if (mode !== null) {
            config.actionMode = parseInt(mode, 10)
            GM_setValue('actionMode', config.actionMode)
            setupEventListeners()
            updateMenuCommands()
        }
    }
    function setLongPressDuration() {
        const duration = prompt(translate('setLongPressDuration'), config.longPressDuration)
        if (duration !== null) {
            config.longPressDuration = duration
            GM_setValue('longPressDuration', duration)
            updateMenuCommands()
        }
    }
    function setLongPressEffective() {
        const duration = prompt(translate('setLongPressEffective'), config.longPressEffective)
        if (duration !== null) {
            config.longPressEffective = duration
            GM_setValue('longPressEffective', duration)
            updateMenuCommands()
        }
    }
    function setdragTimeOut() {
        const duration = prompt(translate('dragTimeOut'), config.dragTimeOut)
        if (duration !== null) {
            config.dragTimeOut = duration
            GM_setValue('dragTimeOut', duration)
            updateMenuCommands()
        }
    }
    function toggleBlurEffect() {
        config.blurEnabled = !config.blurEnabled
        GM_setValue('blurEnabled', config.blurEnabled)
        updateMenuCommands()
    }
    function setBlurIntensity() {
        const intensity = prompt(translate('setBlurIntensityprompt'), config.blurIntensity)
        if (intensity !== null) {
            config.blurIntensity = parseInt(intensity, 10)
            GM_setValue('blurIntensity', config.blurIntensity)
            updateMenuCommands()
        }
    }
    function toggleCloseOnMouseClick() {
        config.closeOnMouseClick = !config.closeOnMouseClick
        GM_setValue('closeOnMouseClick', config.closeOnMouseClick)
        updateMenuCommands()
    }
    function toggleCloseOnScroll() {
        config.closeOnScroll = !config.closeOnScroll
        handleScrollCommand()
        GM_setValue('closeOnScroll', config.closeOnScroll)
        updateMenuCommands()
    }
    function handleScrollCommand() {
        if (config.closeOnScroll) {
            window.addEventListener('scroll', closePopupOnScroll, { once: true })
        } else {
            window.removeEventListener('scroll', closePopupOnScroll)
        }
    }
    function setWindowSize(dimension) {//!SECTION-已无实际意义,开启记录窗口位置后,哪里还需要手动配置.
        const size = prompt(`${translate('setWindowSizeprompt')} (${dimension})`, config[dimension === 'width' ? 'windowWidth' : 'windowHeight'])
        if (size !== null) {
            config[dimension === 'width' ? 'windowWidth' : 'windowHeight'] = parseInt(size, 10)
            GM_setValue(dimension === 'width' ? 'windowWidth' : 'windowHeight', config[dimension === 'width' ? 'windowWidth' : 'windowHeight'])
            updateMenuCommands()
            if (state.popupWindow && !state.popupWindow.closed) {
                state.popupWindow.resizeTo(config.windowWidth, config.windowHeight)
            }
        }
    }
    let registeredMenuCommands = {}
    function registerMenuCommand(label, action) {
        const menuCommandId = GM_registerMenuCommand(label, action)
        registeredMenuCommands[label] = menuCommandId
        return menuCommandId
    }
    function saveWindowConfig(width, height, left, top, HostName = window.location.hostname) {
        config.windowWidth = width
        config.windowHeight = height
        config.screenLeft = left
        config.screenTop = top
        const currentHostName = HostName
        let windowConfigs = GM_getValue('SitewindowConfigs', []
        )
        let configUpdated = false
        for (let config of windowConfigs) {
            if (typeof config.hostName === 'string') {
                if (config.hostName === currentHostName) {
                    config.width = width
                    config.height = height
                    config.top = top
                    config.left = left
                    configUpdated = true
                    break
                }
            } else if (Array.isArray(config.hostName)) {
                if (config.hostName.includes(currentHostName)) {
                    config.width = width
                    config.height = height
                    config.top = top
                    config.left = left
                    configUpdated = true
                    break
                }
            }
        }
        if (!configUpdated) {
            windowConfigs.push({
                name: `${currentHostName}`,
                hostName: currentHostName,
                width: width,
                height: height,
                top: top,
                left: left
            })
        }
        //ANCHOR -  开启记录窗口位置时.无法找到配置时,会推送一个新配置,当其他的网站没有自定义配置的也同样使用这一次的窗口.大小.
        GM_setValue('SitewindowConfigs', windowConfigs)
        GM_setValue('custom_windowWidth', width)
        GM_setValue('custom_windowHeight', height)
        GM_setValue('custom_screenLeft', left)
        GM_setValue('custom_screenTop', top)
        updateMenuCommands()
    }
    function toggleSwitch(property) {
        if (property in config) {
            config[property] = !config[property]
            GM_setValue(property, config[property])
            updateMenuCommands()
        }
    }
    function updateMenuCommands() {//LINK -
        let menuCommands = [
            { label: translate('settings'), action: openSettings },
            { label: translate('actionMode') + ` (${config.actionMode === 1 ? translate('actionMode1') : config.actionMode === 2 ? translate('actionMode2') : translate('actionMode0')})`, action: toggleActionMode },
            { label: translate('longPressEffective') + ` (${config.longPressEffective}ms)`, action: setLongPressEffective },
            { label: translate('longPressDuration') + ` (${config.longPressDuration}ms)`, action: setLongPressDuration },
            { label: translate('dragTimeOut') + ` (${config.dragTimeOut}ms)`, action: setdragTimeOut },
            { label: translate('blurEnabled') + ` (${config.blurEnabled ? '✅' : '❌'})`, action: toggleBlurEffect },
            { label: translate('blurIntensity') + ` (${config.blurIntensity})`, action: setBlurIntensity },
            { label: translate('closeOnMouseClick') + ` (${config.closeOnMouseClick ? '✅' : '❌'})`, action: toggleCloseOnMouseClick },
            { label: translate('closeOnScroll') + ` (${config.closeOnScroll ? '✅' : '❌'})`, action: toggleCloseOnScroll },
            /*     { label: translate('windowWidth') + ` (${config.windowWidth})`, action: () => { setWindowSize('width') } },//!SECTION -已无实际意义,脚本不会使用
                { label: translate('windowHeight') + ` (${config.windowHeight})`, action: () => { setWindowSize('height') } },//!SECTION -已无实际意义,脚本不会使用 */
            { label: translate('showCountdown') + ` (${config.showCountdown ? '✅' : '❌'})`, action: () => { toggleSwitch('showCountdown') } },
            { label: translate('showCountdowndrag') + ` (${config.showCountdowndrag ? '✅' : '❌'})`, action: () => { toggleSwitch('showCountdowndrag') } },
            { label: translate('saveWindowConfig') + ` (${config.saveWindowConfig ? '✅' : '❌'})`, action: () => { toggleSwitch('saveWindowConfig') } }
        ]
        if (config.streamlinedmenu) {
            menuCommands = [
                { label: translate('settings'), action: openSettings }]
        }
        for (const label in registeredMenuCommands) {
            GM_unregisterMenuCommand(registeredMenuCommands[label])
        }
        registeredMenuCommands = {}
        menuCommands.forEach((command) => {
            registerMenuCommand(command.label, command.action)
        })
    }
    updateMenuCommands()
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
    }
    function setupEventListeners() {
        // 移除旧的事件监听器
        document.body.removeEventListener('dragstart', handleDragStart)
        document.body.removeEventListener('dragend', handleDragEnd)
        document.body.removeEventListener('mousedown', handleMouseDown)
        document.body.removeEventListener('mouseup', handleMouseUp)
        document.body.removeEventListener('mouseleave', handleMouseLeave)
        document.body.removeEventListener('wheel', handleWheel)
        document.body.removeEventListener('click', handleClick)
        // 根据 actionMode 配置添加事件监听器
        if (config.actionMode === 1 || config.actionMode === 0) {
            document.body.addEventListener('mousedown', handleMouseDown)
            document.body.addEventListener('mouseup', handleMouseUp)
            document.body.addEventListener('mouseleave', handleMouseLeave)
        }
        if (config.actionMode === 2 || config.actionMode === 0) {
            document.body.addEventListener('dragstart', handleDragStart)
            document.body.addEventListener('dragend', handleDragEnd)
        }
        document.body.addEventListener('wheel', handleWheel)
        document.body.addEventListener('click', handleClick)
    }
    // 事件处理函数
    function handleDragStart(event) {
        const linkElement = event.target.tagName === 'A' ? event.target : event.target.closest('a')
        if (linkElement) {
            if (config.showCountdowndrag && config.dragTimeOut != 0) {//超时选项,只要
                state.dragprogressBar = createProgressBar('#ff9800', '#f44336')
                state.dragprogressBar.style.display = 'block'
                state.dragprogressBar.style.width = '5%'
                state.startTime = Date.now()
                clearInterval(state.dragintervalId)
                state.dragintervalId = setInterval(function () {
                    const elapsed = Date.now() - state.startTime
                    const progress = Math.max(5 - (elapsed / config.dragTimeOut) * 5, 0) // 减小你妈
                    state.dragprogressBar.style.width = `${progress}%`
                    if (progress <= 0) {// 超时结束
                        state.isDragging = false
                        clearInterval(state.dragintervalId)
                        state.dragprogressBar.style.display = 'none'
                    }
                }, 100) //
                window.addEventListener('drag', function (event) {
                    // 保证进度条位置处于貂毛鼠标的下面
                    const x = event.clientX
                    const y = event.clientY + 30 // 偏移
                    state.dragprogressBar.style.left = `${x}px`
                    state.dragprogressBar.style.top = `${y}px`
                })
            }
            const link = linkElement.href
            state.isDragging = true
            state.linkToPreload = link
            preloadLink(state.linkToPreload, { importance: 'high' }).then(() => {
                if (config.closeOnScroll) {
                    window.addEventListener('scroll', closePopupOnScroll, { once: true })
                }
            })
        }
    }
    function handleDragEnd(event) {
        const x = event.clientX
        const y = event.clientY
        console.log(x, y)
        const elementAtPoint = document.elementFromPoint(x, y)
        if (state.dragprogressBar) {//显示超时进度条时
            clearInterval(state.dragintervalId)
            state.dragprogressBar.style.display = 'none'
        }
        if (y < 1) {//接近顶部
            state.isDragging = false
        }
        //if (!document.body.contains(elementAtPoint)) state.isDragging = false//移出到系统
        if (state.isDragging && state.linkToPreload) {
            state.isDragging = false
            openPopupWindow(state.linkToPreload)
            state.linkToPreload = null
        }
    }
    function createProgressBar(colorStart = '#4caf50', colorEnd = '#81c784') {
        if (!config.showCountdown && !config.showCountdowndrag) return null
        const progressBar = document.createElement('div')
        Object.assign(progressBar.style, {
            position: 'fixed',
            height: '6px',
            width: '5%',
            background: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
            borderRadius: '3px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: '9999'
        })
        document.body.appendChild(progressBar)
        return progressBar
    }
    let mouseDownTime = 0
    function handleMouseDown(event) {
        const linkElement = event.target.tagName === 'A' ? event.target : event.target.closest('a')
        if (linkElement) {
            let isDragging = false
            let isMouseDown = true
            const onMouseMove = () => {
                isDragging = true
                clearTimeout(state.pressTimer)
                progressBarremove()
            }
            const onMouseUp = () => {
                isMouseDown = false
                clearTimeout(state.pressTimer)
                progressBarremove()
            }
            document.addEventListener('dragstart', onMouseMove, { once: true })
            document.addEventListener('mouseup', onMouseUp, { once: true })
            document.addEventListener('keydown', onMouseUp, { once: true })
            setTimeout(() => {
                if (!isDragging && isMouseDown) { // 确保没有拖拽并且鼠标仍按下
                    state.progressBar = createProgressBar()
                    if (state.progressBar) {
                        const transitionDuration = Math.max(config.longPressDuration, 0) + 'ms'
                        state.progressBar.style.left = `${event.clientX}px`  // 设置进度条位置为鼠标下方
                        state.progressBar.style.top = `${event.clientY + 20}px`  // 偏移一点，避免挡住鼠标
                        state.progressBar.style.transition = `width ${transitionDuration} linear`
                        requestAnimationFrame(() => {
                            state.progressBar.style.width = '0'
                        })
                    }
                }
                /* //NOTE - 鼠标按下的时间才会触发子函数计时,
                长按触发打开预览窗口时长＝鼠标按下的时间+长按触发时间=打开小窗时间.
                */
                onProgres()
            }, config.longPressEffective)
            function onProgres(params) {
                state.pressTimer = setTimeout(() => {
                    if (!isDragging && isMouseDown) { // 确保没有拖拽并且鼠标仍按下
                        const link = linkElement.href
                        state.linkToPreload = link
                        preloadLink(state.linkToPreload, { importance: 'high' }).then(() => {
                            openPopupWindow(state.linkToPreload)
                        })
                    }
                    progressBarremove()
                }, config.longPressDuration)
            }
        }
    }
    function handleMouseUp() {
        clearTimeout(state.pressTimer)
        state.pressTimer = null
        progressBarremove()
    }
    function progressBarremove() {
        if (state.progressBar) {
            state.progressBar.remove()
        }
    }
    function handleMouseLeave() {
        clearTimeout(state.pressTimer)
        state.pressTimer = null
    }
    function handleWheel() {
        if (config.closeOnScroll) {
            closePopupWindow()
        }
    }
    function handleClick(event) {
        if (event.target === state.acrylicOverlay) {
            removeAcrylicOverlay()
        }
    }
    setupEventListeners()
})()
