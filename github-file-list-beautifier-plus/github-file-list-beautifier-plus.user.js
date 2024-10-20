// ==UserScript==
// @name              GitHub file list beautifier
// @description       Adds colors to files by type, displays small images in place of file-type icons in a repository source tree
// @name:zh-CN        GitHub 文件列表美化器
// @description:zh-CN GitHub 文件列表美化器是一个用户脚本，用于增强 GitHub 仓库中的文件显示效果。它可以为文件和文件夹添加颜色，并将文件类型图标替换为小图像，使得代码库更加易于浏览和管理。按类型为文件添加颜色和图标，在存储库源树中显示小图像以代替文件类型图标
// @name:ar           GitHub تجميل قائمة الملفات
// @description:ar    GitHub File List Beautifier هو برنامج نصي للمستخدم，تستخدم لتعزيز GitHub عرض تأثير الملفات في المستودع。يمكنه إضافة الألوان إلى الملفات والمجلدات，واستبدل أيقونات نوع الملف بصور صغيرة，يجعل قاعدة التعليمات البرمجية أسهل في التصفح والإدارة。إضافة الألوان والأيقونات إلى الملفات حسب النوع，عرض صور صغيرة بدلاً من أيقونات نوع الملف في شجرة مصدر المستودع
// @name:bg           GitHub Разкрасител на списък с файлове
// @description:bg    GitHub File List Beautifier е потребителски скрипт，използвани за подобряване GitHub Показване на ефекта на файловете в склада。Може да добавя цветове към файлове и папки，и заменете иконите за типове файлове с малки изображения，Прави кодовата база по-лесна за разглеждане и управление。Добавете цветове и икони към файлове по тип，Показване на малки изображения на мястото на иконите за типове файлове в дървото на източника на хранилището
// @name:cs           GitHub Zkrášlovač seznamu souborů
// @description:cs    GitHub File List Beautifier je uživatelský skript，slouží k vylepšení GitHub Zobrazení efektu souborů ve skladu。Může přidat barvy do souborů a složek，a nahraďte ikony typů souborů malými obrázky，Usnadňuje procházení a správu kódové základny。Přidejte barvy a ikony do souborů podle typu，Zobrazte malé obrázky místo ikon typů souborů ve zdrojovém stromu úložiště
// @name:da           GitHub Filliste forskønner
// @description:da    GitHub File List Beautifier er et brugerscript，bruges til at forbedre GitHub Vis effekt af filer på lager。Det kan tilføje farver til filer og mapper，og udskift filtypeikonerne med små billeder，Gør kodebasen nemmere at gennemse og administrere。Tilføj farver og ikoner til filer efter type，Vis små billeder i stedet for filtypeikoner i lagerkildetræet
// @name:de           GitHub Dateilisten-Verschönerer
// @description:de    GitHub File List Beautifier ist ein Benutzerskript，zur Verstärkung verwendet GitHub Anzeigeeffekt von Dateien im Lager。Es kann Dateien und Ordnern Farben hinzufügen，und ersetzen Sie die Dateitypsymbole durch kleine Bilder，Erleichtert das Durchsuchen und Verwalten der Codebasis。Fügen Sie Dateien nach Typ Farben und Symbole hinzu，Zeigen Sie kleine Bilder anstelle von Dateitypsymbolen im Repository-Quellbaum an
// @name:el           GitHub Διακοσμητικό λίστας αρχείων
// @description:el    GitHub Το File List Beautifier είναι ένα σενάριο χρήστη，χρησιμοποιείται για ενίσχυση GitHub Εμφάνιση εφέ αρχείων στην αποθήκη。Μπορεί να προσθέσει χρώματα σε αρχεία και φακέλους，και αντικαταστήστε τα εικονίδια τύπου αρχείου με μικρές εικόνες，Κάνει πιο εύκολη την περιήγηση και τη διαχείριση της βάσης κώδικα。Προσθέστε χρώματα και εικονίδια σε αρχεία ανά τύπο，Εμφάνιση μικρών εικόνων στη θέση των εικονιδίων τύπου αρχείου στο δέντρο προέλευσης του αποθετηρίου
// @name:en           GitHub File list beautifier
// @description:en    GitHub File List Beautifier is a user script，used to enhance GitHub Display effect of files in warehouse。It can add colors to files and folders，and replace the file type icons with small images，Makes the code base easier to browse and manage。Add colors and icons to files by type，Display small images in place of file type icons in repository source tree
// @name:eo           GitHub Plibeligilo de dosierlisto
// @description:eo    GitHub Dosiera Listo Beautifier estas uzanta skripto，uzata por plibonigi GitHub Montri efikon de dosieroj en magazeno。Ĝi povas aldoni kolorojn al dosieroj kaj dosierujoj，kaj anstataŭigu la dosiertipaj ikonojn per malgrandaj bildoj，Plifaciligas foliumi kaj administri la kodan bazon。Aldonu kolorojn kaj ikonojn al dosieroj laŭ tipo，Montru malgrandajn bildojn anstataŭ dosiertipaj ikonoj en deponeja fontarbo
// @name:es           GitHub Embellecedor de lista de archivos
// @description:es    GitHub File List Beautifier es un script de usuario，utilizado para mejorar GitHub Efecto de visualización de archivos en el almacén.。Puede agregar colores a archivos y carpetas.，y reemplace los íconos de tipo de archivo con imágenes pequeñas，Hace que la base del código sea más fácil de navegar y administrar.。Agregue colores e íconos a archivos por tipo，Mostrar imágenes pequeñas en lugar de íconos de tipo de archivo en el árbol de fuentes del repositorio
// @name:fi           GitHub Tiedostolistan kaunistaja
// @description:fi    GitHub File List Beautifier on käyttäjän komentosarja，käytetään parantamaan GitHub Näytä tehosteet tiedostot varastossa。Se voi lisätä värejä tiedostoihin ja kansioihin，ja korvaa tiedostotyyppikuvakkeet pienillä kuvilla，Helpottaa koodikannan selailua ja hallintaa。Lisää värejä ja kuvakkeita tiedostoihin tyypin mukaan，Näytä pienet kuvat tiedostotyyppikuvakkeiden tilalla arkiston lähdepuussa
// @name:fr           GitHub Embellisseur de liste de fichiers
// @description:fr    GitHub File List Beautifier est un script utilisateur，utilisé pour améliorer GitHub Effet d’affichage des fichiers dans l’entrepôt。Il peut ajouter des couleurs aux fichiers et dossiers，et remplacez les icônes de type de fichier par de petites images，Rend la base de code plus facile à parcourir et à gérer。Ajouter des couleurs et des icônes aux fichiers par type，Afficher de petites images à la place des icônes de type de fichier dans l’arborescence des sources du référentiel
// @name:he           GitHub מייפה רשימת קבצים
// @description:he    GitHub File List Beautifier הוא סקריפט משתמש，משמש לשיפור GitHub הצגת אפקט של קבצים במחסן。זה יכול להוסיף צבעים לקבצים ולתיקיות，והחלף את סמלי סוג הקובץ בתמונות קטנות，הופך את בסיס הקוד לקל יותר לעיון ולניהול。הוסף צבעים וסמלים לקבצים לפי סוג，הצג תמונות קטנות במקום סמלי סוג קובץ בעץ המקור של המאגר
// @name:hr           GitHub Uljepšavač popisa datoteka
// @description:hr    GitHub File List Beautifier je korisnička skripta，koristi se za poboljšanje GitHub Učinak prikaza datoteka u skladištu。Može dodati boje datotekama i mapama，i zamijenite ikone vrste datoteka malim slikama，Čini bazu koda lakšom za pregledavanje i upravljanje。Dodajte boje i ikone datotekama prema vrsti，Prikaži male slike umjesto ikona tipa datoteke u izvornom stablu spremišta
// @name:hu           GitHub Fájllista szépítő
// @description:hu    GitHub A File List Beautifier egy felhasználói szkript，fokozására használják GitHub A raktárban lévő fájlok megjelenítési hatása。Színeket adhat a fájlokhoz és mappákhoz，és cserélje ki a fájltípus ikonokat kis képekkel，Könnyebbé teszi a kódbázis böngészését és kezelését。Színek és ikonok hozzáadása a fájlokhoz típus szerint，Kis képek megjelenítése a fájltípus ikonok helyett a lerakat forrásfájában
// @name:id           GitHub Percantik daftar file
// @description:id    GitHub File List Beautifier adalah skrip pengguna，digunakan untuk meningkatkan GitHub Menampilkan efek file di gudang。Itu dapat menambahkan warna pada file dan folder，dan ganti ikon jenis file dengan gambar kecil，Membuat basis kode lebih mudah dijelajahi dan dikelola。Tambahkan warna dan ikon ke file berdasarkan jenisnya，Tampilkan gambar kecil sebagai pengganti ikon jenis file di pohon sumber repositori
// @name:it           GitHub Abbellitore dell’elenco dei file
// @description:it    GitHub File List Beautifier è uno script utente，utilizzato per migliorare GitHub Visualizza l’effetto dei file nel magazzino。Può aggiungere colori a file e cartelle，e sostituisci le icone del tipo di file con piccole immagini，Rende la base di codice più semplice da sfogliare e gestire。Aggiungi colori e icone ai file per tipo，Visualizza piccole immagini al posto delle icone del tipo di file nell’albero di origine del repository
// @name:ja           GitHub ファイルリスト整形ツール
// @description:ja    GitHub File List Beautifier はユーザースクリプトです，強化するために使用される GitHub 倉庫内のファイルの表示効果。ファイルやフォルダーに色を追加できます，ファイルタイプのアイコンを小さな画像に置き換えます，コードベースの参照と管理が容易になります。。種類ごとにファイルに色とアイコンを追加する，リポジトリソースツリーのファイルタイプアイコンの代わりに小さな画像を表示します
// @name:ka           GitHub ფაილების სიის გამალამაზებელი
// @description:ka    GitHub File List Beautifier არის მომხმარებლის სკრიპტი，გამოიყენება გასაძლიერებლად GitHub ფაილების ეფექტის ჩვენება საწყობში。მას შეუძლია ფერების დამატება ფაილებსა და საქაღალდეებში，და შეცვალეთ ფაილის ტიპის ხატები პატარა სურათებით，ამარტივებს კოდის ბაზის დათვალიერებას და მართვას。დაამატეთ ფერები და ხატები ფაილებს ტიპის მიხედვით，აჩვენეთ პატარა სურათები ფაილის ტიპის ხატულების ნაცვლად საცავის წყაროს ხეში
// @name:ko           GitHub 파일 목록 미화자
// @description:ko    GitHub File List Beautifier는 사용자 스크립트입니다.，향상시키는 데 사용됨 GitHub 창고 내 파일 표시 효과。파일과 폴더에 색상을 추가할 수 있습니다.，파일 형식 아이콘을 작은 이미지로 바꿉니다.，코드 베이스를 더 쉽게 찾아보고 관리할 수 있습니다.。유형별로 파일에 색상 및 아이콘 추가，저장소 소스 트리의 파일 유형 아이콘 대신 작은 이미지 표시
// @name:nl           GitHub Bestandslijstverfraaier
// @description:nl    GitHub File List Beautifier is een gebruikersscript，gebruikt om te verbeteren GitHub Weergave-effect van bestanden in magazijn。Het kan kleuren toevoegen aan bestanden en mappen，en vervang de bestandstypepictogrammen door kleine afbeeldingen，Maakt het gemakkelijker om door de codebasis te bladeren en deze te beheren。Voeg kleuren en pictogrammen toe aan bestanden op type，Geef kleine afbeeldingen weer in plaats van bestandstypepictogrammen in de bronstructuur van de repository
// @name:nb           GitHub Filliste forskjønner
// @description:nb    GitHub File List Beautifier er et brukerskript，brukes til å forbedre GitHub Vis effekt av filer på lager。Den kan legge til farger i filer og mapper，og erstatte filtypeikonene med små bilder，Gjør kodebasen enklere å bla gjennom og administrere。Legg til farger og ikoner til filer etter type，Vis små bilder i stedet for filtypeikoner i depotkildetreet
// @name:pl           GitHub Upiększanie listy plików
// @description:pl    GitHub File List Beautifier to skrypt użytkownika，używany do ulepszania GitHub Efekt wyświetlania plików w magazynie。Może dodawać kolory do plików i folderów，i zamień ikony typów plików na małe obrazy，Ułatwia przeglądanie i zarządzanie bazą kodu。Dodaj kolory i ikony do plików według typu，Wyświetlaj małe obrazy zamiast ikon typów plików w drzewie źródeł repozytorium
// @name:pt-BR        GitHub Embelezador de lista de arquivos
// @description:pt-BR GitHub File List Beautifier é um script de usuário，usado para melhorar GitHub Efeito de exibição de arquivos no warehouse。Pode adicionar cores a arquivos e pastas，e substitua os ícones de tipo de arquivo por imagens pequenas，Torna a base de código mais fácil de navegar e gerenciar。Adicione cores e ícones aos arquivos por tipo，Exibir pequenas imagens no lugar dos ícones de tipo de arquivo na árvore de origem do repositório
// @name:ro           GitHub Înfrumusețator de listă de fișiere
// @description:ro    GitHub File List Beautifier este un script de utilizator，folosit pentru a spori GitHub Efectul de afișare al fișierelor în depozit。Poate adăuga culori fișierelor și folderelor，și înlocuiți pictogramele tip fișier cu imagini mici，Face baza de cod mai ușor de răsfoit și gestionat。Adăugați culori și pictograme fișierelor după tip，Afișați imagini mici în locul pictogramelor de tip fișier în arborele sursă a depozitului
// @name:ru           GitHub Средство украшения списка файлов
// @description:ru    GitHub File List Beautifier — пользовательский скрипт.，используется для улучшения GitHub Эффект отображения файлов на складе。Он может добавлять цвета к файлам и папкам.，и замените значки типов файлов небольшими изображениями，Упрощает просмотр и управление базой кода.。Добавляйте цвета и значки к файлам по типу，Отображение небольших изображений вместо значков типов файлов в дереве исходного кода репозитория.
// @name:sk           GitHub Skrášľovač zoznamu súborov
// @description:sk    GitHub File List Beautifier je užívateľský skript，používa sa na vylepšenie GitHub Zobrazenie efektu súborov v sklade。Môže pridávať farby do súborov a priečinkov，a nahraďte ikony typov súborov malými obrázkami，Uľahčuje prehľadávanie a správu kódovej základne。Pridajte farby a ikony do súborov podľa typu，Zobrazte malé obrázky namiesto ikon typu súboru v strome zdroja úložiska
// @name:sr           GitHub Улепшавање листе датотека
// @description:sr    GitHub Филе Лист Беаутифиер је корисничка скрипта，користи за побољшање GitHub Приказ ефеката датотека у магацину。Може да додаје боје датотекама и фасциклама，и замените иконе типа датотеке малим сликама，Олакшава претраживање и управљање основом кода。Додајте боје и иконе датотекама по типу，Прикажите мале слике уместо икона типа датотеке у изворном стаблу спремишта
// @name:sv           GitHub Fillista förskönare
// @description:sv    GitHub File List Beautifier är ett användarskript，används för att förbättra GitHub Visningseffekt av filer i lagret。Det kan lägga till färger till filer och mappar，och ersätt filtypsikonerna med små bilder，Gör kodbasen lättare att bläddra i och hantera。Lägg till färger och ikoner till filer efter typ，Visa små bilder istället för filtypsikoner i arkivets källträd
// @name:th           GitHub โปรแกรมตกแต่งรายการไฟล์
// @description:th    GitHub File List Beautifier เป็นสคริปต์ผู้ใช้，ใช้เพื่อเพิ่มประสิทธิภาพ GitHub แสดงเอฟเฟกต์ของไฟล์ในคลังสินค้า。สามารถเพิ่มสีสันให้กับไฟล์และโฟลเดอร์ได้，และแทนที่ไอคอนประเภทไฟล์ด้วยรูปภาพขนาดเล็ก，ทำให้ฐานโค้ดง่ายต่อการเรียกดูและจัดการ。เพิ่มสีและไอคอนให้กับไฟล์ตามประเภท，แสดงรูปภาพขนาดเล็กแทนที่ไอคอนประเภทไฟล์ในแผนผังแหล่งเก็บข้อมูล
// @name:tr           GitHub Dosya listesi güzelleştirici
// @description:tr    GitHub Dosya Listesi Güzelleştirici bir kullanıcı komut dosyasıdır，geliştirmek için kullanılır GitHub Depodaki dosyaların efektini görüntüleme。Dosya ve klasörlere renk ekleyebilir，ve dosya türü simgelerini küçük resimlerle değiştirin，Kod tabanına göz atmayı ve yönetmeyi kolaylaştırır。Türe göre dosyalara renkler ve simgeler ekleyin，Depo kaynak ağacında dosya türü simgelerinin yerine küçük resimleri görüntüle
// @name:ug           GitHub ھۆججەت تىزىملىكى گۈزەللەشتۈرگۈچى
// @description:ug    GitHub ھۆججەت تىزىملىكى گۈزەللەشتۈرگۈچى ئىشلەتكۈچى قوليازمىسى，كۈچەيتىشكە ئىشلىتىلىدۇ GitHub ئامباردىكى ھۆججەتلەرنىڭ ئۈنۈمىنى كۆرسىتىش。ئۇ ھۆججەت ۋە ھۆججەت قىسقۇچلارغا رەڭ قوشالايدۇ，ھەمدە ھۆججەت تىپىدىكى سىنبەلگىلەرنى كىچىك رەسىملەر بىلەن ئالماشتۇرۇڭ，كود ئاساسىنى كۆرۈش ۋە باشقۇرۇشنى ئاسانلاشتۇرىدۇ。ھۆججەتلەرگە رەڭ ۋە سىنبەلگە قوشۇڭ，ئامبار مەنبە دەرىخىدە ھۆججەت تىپىدىكى سىنبەلگىلەرنىڭ ئورنىدا كىچىك رەسىملەرنى كۆرسىتىڭ
// @name:uk           GitHub Прикрашувач списку файлів
// @description:uk    GitHub File List Beautifier — це сценарій користувача，використовується для посилення GitHub Ефект відображення файлів у складі。Він може додавати кольори до файлів і папок，і замініть піктограми типів файлів маленькими зображеннями，Полегшує перегляд та керування кодовою базою。Додайте кольори та значки до файлів за типом，Відображати невеликі зображення замість значків типів файлів у дереві вихідних кодів сховища
// @name:vi           GitHub Trình làm đẹp danh sách tập tin
// @description:vi    GitHub File List Beautifier là một tập lệnh người dùng，được sử dụng để tăng cường GitHub Hiển thị tác dụng của file trong kho。Nó có thể thêm màu sắc vào tập tin và thư mục，và thay thế các biểu tượng loại tệp bằng hình ảnh nhỏ，Làm cho cơ sở mã dễ dàng duyệt và quản lý hơn。Thêm màu sắc và biểu tượng vào tệp theo loại，Hiển thị hình ảnh nhỏ thay cho biểu tượng loại tệp trong cây nguồn kho lưu trữ
// @name:zh-TW        GitHub 文件列表美化器
// @description:zh-TW GitHub 文件清單美化器是一個使用者腳本，用於增強 GitHub 倉庫中的文件顯示效果。它可以為文件和資料夾添加顏色，並將文件類型圖示替換為小圖像，使得程式碼庫更加易於瀏覽和管理。按類型為文件添加顏色和圖標，在儲存庫來源樹中顯示小圖像以取代文件類型圖標
// @name:zh-HK        GitHub 文件列表美化器
// @description:zh-HK GitHub 文件清單美化器是一個使用者腳本，用於增強 GitHub 倉庫中的文件顯示效果。它可以為文件和資料夾添加顏色，並將文件類型圖示替換為小圖像，使得程式碼庫更加易於瀏覽和管理。按類型為文件添加顏色和圖標，在儲存庫來源樹中顯示小圖像以取代文件類型圖標
// @name:fr-CA        GitHub Embellisseur de liste de fichiers
// @description:fr-CA GitHub File List Beautifier est un script utilisateur，utilisé pour améliorer GitHub Effet d’affichage des fichiers dans l’entrepôt。Il peut ajouter des couleurs aux fichiers et dossiers，et remplacez les icônes de type de fichier par de petites images，Rend la base de code plus facile à parcourir et à gérer。Ajouter des couleurs et des icônes aux fichiers par type，Afficher de petites images à la place des icônes de type de fichier dans l’arborescence des sources du référentiel 
// @license           MIT
// @version           4.1.0.4
// @match             https://github.com/*
// @grant             none
// @run-at            document-start
// @grant             GM_xmlhttpRequest
// @grant             GM_getValue
// @grant             GM_setValue
// @compatible        chrome
// @compatible        firefox
// @compatible        edge
// @compatible        opera
// @compatible        safari
// @author            wOxxOm,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @icon              data:image/png;base64,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
// @license           MIT
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts

// ==/UserScript==
'use strict'
let customColors = GM_getValue('fileTypesColors', {})
var DEBUG = false
var addIcon = true
if (DEBUG) {
    GM_setValue('fileTypesColors', {})
}
GM_setValue('fileTypesColors', {})
if (Object.keys(customColors).length === 0) {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-file-list-beautifier-plus/colors.json',
        //url: 'http://127.0.0.1:5500/UserScripts/Script%20details/github-file-list-beautifier-plus/colors.json',
        onload: function (response) {
            try {
                customColors = JSON.parse(response.responseText)
                GM_setValue('fileTypesColors', customColors) // 保存到本地存储
                requestAnimationFrame(start)
            } catch (e) {
                console.error('解析颜色配置失败:', e)
            }
        },
        onerror: function () {
            console.error('加载颜色配置失败')
        }
    })
} else {
    requestAnimationFrame(start)
}
let savedConfig = {}
try {
    savedConfig = JSON.parse(localStorage.FileListBeautifier) || {}
} catch (e) { }
const config = Object.assign({},
    ...Object.entries({
        iconSize: 24,
        colorSeed1: 13,
        colorSeed2: 1299721,
        colorSeed3: 179426453
    }).map(([k, v]) => ({ [k]: +savedConfig[k] || v })))
const IMG_CLS = 'wOxxOm-image-icon'
const rxImages = /^(png|jpe?g|bmp|gif|cur|ico|svg)$/i
const styleQueue = []
const { sheet } = document.documentElement.appendChild($create('style', {
    textContent: /*language=CSS*/ `
    .${IMG_CLS} {
      width: ${config.iconSize}px;
      height: ${config.iconSize}px;
      object-fit: scale-down;
      margin: 0 -4px;
    }
     .qinwuyuan-file-icon {
      width: 16px; 
      height: 16px; 
      object-fit: scale-down;
      margin: 0 -4px;
    }
    a[file-type=":folder"] {
      font-weight: bold;
    }
    `.replace(/;/g, '!important;')
}))
const filetypes = {}
const ME = Symbol(GM_info.script.name)
const ob = new MutationObserver(start)
let lumaBias, lumaFix, lumaAmp
function start() {
    beautify()
    ob.observe(document, { subtree: true, childList: true })
}
function beautify() {
    for (const el of document.querySelectorAll('.react-directory-truncate, .js-navigation-open')) {
        if (ME in el)
            continue
        el[ME] = true
        const isOld = el.tagName === 'A'
        const a = isOld ? el : el.getElementsByTagName('a')[0]
        const url = a && a.href
        if (!url)
            continue
        const icon = el.closest(isOld ? '.js-navigation-item' : 'td').querySelector('svg')
        if (icon.classList.contains(isOld ? 'octicon-file-directory-fill' : 'icon-directory')) {
            a.setAttribute('file-type', ':folder')
            continue
        }
        let filename = url.split('/').pop().toLowerCase()
        let ext = (url.match(/\.(\w+)$|$/)[1] || filename).toLowerCase()
        if (customColors[filename]) {
            ext = filename
        }
        a.setAttribute('file-type', ext)
        const customIcon = customColors[filename] && customColors[filename].icon
            ? customColors[filename].icon
            : (customColors[ext] && customColors[ext].icon) || null
        if (!filetypes[ext])
            addFileTypeStyle(ext)
        if (customIcon && addIcon) {
            let iconUrl = customIcon
            if (iconUrl && !iconUrl.startsWith('https://') && !iconUrl.startsWith('data:image')) {
                iconUrl = `https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/${iconUrl}.svg`
                console.log(iconUrl)
            }
            const img = $create('img', {
                className: 'qinwuyuan-file-icon',
                src: iconUrl,
                alt: ext
            })
            icon.replaceWith(img)
        } else if (rxImages.test(ext)) {
            const m = url.match(/github\.com\/(.+?\/)blob\/(.*)$/)
            const next = icon.nextElementSibling
            if (!m || next && next[ME])
                continue
            icon.replaceWith($create('img', {
                [ME]: true,
                className: IMG_CLS,
                src: `https://raw.githubusercontent.com/${m[1]}${m[2]}`
            }))
        }
    }
}

function addFileTypeStyle(type) {
    filetypes[type] = true
    if (!styleQueue.length)
        requestAnimationFrame(commitStyleQueue)
    styleQueue.push(type)
}
function commitStyleQueue() {
    if (!lumaAmp) initLumaScale()
    const seed2 = config.colorSeed2
    const seed3 = config.colorSeed3
    for (const type of styleQueue) {
        const colorConfig = customColors[type]
        if (colorConfig) {
            const color = colorConfig.color
            if (color) {
                sheet.insertRule(/*language=CSS*/ `
                a[file-type="${type}"]:not(#foo) {
                  color: ${color} !important;
                }
              `)
            }
        } else {
            const hash = calcSimpleHash(type)
            const H = hash % 360
            const Hq = H / 60
            const S = hash * seed2 % 50 + 50 | 0
            const redFix = (Hq < 1 ? 1 - Hq : Hq > 4 ? (Hq - 4) / 2 : 0)
            const blueFix = (Hq < 3 || Hq > 5 ? 0 : Hq < 4 ? Hq - 3 : 5 - Hq) * 3
            const L = hash * seed3 % lumaAmp + lumaBias + (redFix + blueFix) * lumaFix * S / 100 | 0
            sheet.insertRule(/*language=CSS*/ `
            a[file-type="${type}"]:not(#foo) {
              color: hsl(${H},${S}%,${L}%) !important;
            }
          `)
        }
    }
    styleQueue.length = 0
}
function calcSimpleHash(text) {
    let hash = 0
    for (let i = 0, len = text.length; i < len; i++)
        hash = ((hash << 5) - hash) + text.charCodeAt(i)
    return Math.abs(hash * config.colorSeed1 | 0)
}
function initLumaScale() {
    const [, r, g, b] = getComputedStyle(document.body).backgroundColor.split(/[^\d.]+/).map(parseFloat)
    const isDark = (r * .2126 + g * .7152 + b * .0722) < 128;
    [lumaBias, lumaAmp, lumaFix] = isDark ? [30, 50, 12] : [25, 15, 0]
}
function $create(tag, props) {
    return Object.assign(document.createElement(tag), props)
}
