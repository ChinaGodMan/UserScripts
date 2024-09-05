// ==UserScript==
// @name         Github Copy Raw File URL and Download File
// @name:zh-CN   Github 复制原始文件 URL 与下载文件
// @description:zh-CN 在每个文件行的末尾添加按钮，以复制原始文件 URL 和下载文件
// @name:ar   Github نسخ الملف الأصلي URL مع تنزيل الملفات
// @description:ar زر إضافة في نهاية كل سطر ملف，لنسخ الملف الأصلي URL وتحميل الملفات
// @name:bg   Github Копирайте оригиналния файл URL с файлове за изтегляне
// @description:bg Бутон за добавяне в края на всеки файлов ред，за да копирате оригиналния файл URL и изтегляне на файлове
// @name:cs   Github Zkopírujte původní soubor URL se staženými soubory
// @description:cs Tlačítko Přidat na konci každého řádku souboru，pro zkopírování původního souboru URL a stahovat soubory
// @name:da   Github Kopiér den originale fil URL med download filer
// @description:da Tilføj knap i slutningen af ​​hver fillinje，for at kopiere den originale fil URL og download filer
// @name:de   Github Originaldatei kopieren URL mit Download-Dateien
// @description:de Schaltfläche „Hinzufügen“ am Ende jeder Dateizeile，um die Originaldatei zu kopieren URL und Dateien herunterladen
// @name:el   Github Αντιγραφή αρχικού αρχείου URL με λήψη αρχείων
// @description:el Κουμπί προσθήκης στο τέλος κάθε γραμμής αρχείου，για να αντιγράψετε το αρχικό αρχείο URL και λήψη αρχείων
// @name:en   Github Copy original file URL with download files
// @description:en Add button at the end of each file line，to copy the original file URL and download files
// @name:eo   Github Kopiu originalan dosieron URL kun elŝutaj dosieroj
// @description:eo Aldoni butonon ĉe la fino de ĉiu dosierlinio，por kopii la originalan dosieron URL kaj elŝuti dosierojn
// @name:es   Github Copiar archivo original URL con archivos de descarga
// @description:es Botón Agregar al final de cada línea de archivo，para copiar el archivo original URL y descargar archivos
// @name:fi   Github Kopioi alkuperäinen tiedosto URL lataustiedostojen kanssa
// @description:fi Lisää-painike jokaisen tiedostorivin lopussa，kopioidaksesi alkuperäisen tiedoston URL ja ladata tiedostoja
// @name:fr   Github Copier le fichier original URL avec des fichiers à télécharger
// @description:fr Ajouter un bouton à la fin de chaque ligne de fichier，pour copier le fichier original URL et télécharger des fichiers
// @name:he   Github העתק את הקובץ המקורי URL עם קבצים להורדה
// @description:he כפתור הוסף בסוף כל שורת קובץ，כדי להעתיק את הקובץ המקורי URL ולהוריד קבצים
// @name:hr   Github Kopiraj izvornu datoteku URL s datotekama za preuzimanje
// @description:hr Dodaj gumb na kraju svakog retka datoteke，za kopiranje izvorne datoteke URL i preuzimanje datoteka
// @name:hu   Github Eredeti fájl másolása URL letölthető fájlokkal
// @description:hu Hozzáadás gomb minden fájlsor végén，az eredeti fájl másolásához URL és töltsön le fájlokat
// @name:id   Github Salin file asli URL dengan file unduhan
// @description:id Tombol Tambah di akhir setiap baris file，untuk menyalin file asli URL dan mengunduh file
// @name:it   Github Copia il file originale URL con file scaricabili
// @description:it Pulsante Aggiungi alla fine di ogni riga del file，per copiare il file originale URL e scaricare file
// @name:ja   Github 元のファイルをコピーする URL ダウンロードファイル付き
// @description:ja 各ファイル行の末尾にある「追加」ボタン，元のファイルをコピーするには URL そしてファイルをダウンロードする
// @name:ka   Github დააკოპირეთ ორიგინალი ფაილი URL ჩამოტვირთვის ფაილებით
// @description:ka დაამატეთ ღილაკი თითოეული ფაილის ხაზის ბოლოს，ორიგინალური ფაილის კოპირება URL და ჩამოტვირთეთ ფაილები
// @name:ko   Github 원본 파일 복사 URL 다운로드 파일 포함
// @description:ko 각 파일 줄 끝에 추가 버튼，원본 파일을 복사하려면 URL 그리고 파일 다운로드
// @name:nl   Github Kopieer origineel bestand URL met downloadbestanden
// @description:nl Knop Toevoegen aan het einde van elke bestandsregel，om het originele bestand te kopiëren URL en bestanden downloaden
// @name:nb   Github Kopier originalfilen URL med nedlastingsfiler
// @description:nb Legg til-knapp på slutten av hver fillinje，for å kopiere originalfilen URL og last ned filer
// @name:pl   Github Skopiuj oryginalny plik URL z plikami do pobrania
// @description:pl Dodaj przycisk na końcu każdej linii pliku，aby skopiować oryginalny plik URL i pobierz pliki
// @name:pt-BR   Github Copiar arquivo original URL com download de arquivos
// @description:pt-BR Botão Adicionar no final de cada linha do arquivo，para copiar o arquivo original URL e baixar arquivos
// @name:ro   Github Copiați fișierul original URL cu fișiere descărcate
// @description:ro butonul Adaugă la sfârșitul fiecărei linii de fișier，pentru a copia fișierul original URL și descărcați fișiere
// @name:ru   Github Скопировать исходный файл URL с загрузкой файлов
// @description:ru Добавить кнопку в конце каждой строки файла，скопировать исходный файл URL и скачать файлы
// @name:sk   Github Skopírujte pôvodný súbor URL so stiahnutými súbormi
// @description:sk Tlačidlo Pridať na konci každého riadku súboru，na skopírovanie pôvodného súboru URL a sťahovať súbory
// @name:sr   Github Копирајте оригиналну датотеку URL са датотекама за преузимање
// @description:sr Дугме Додај на крају сваке линије датотеке，да копирате оригиналну датотеку URL и преузимање датотека
// @name:sv   Github Kopiera originalfilen URL med nedladdningsfiler
// @description:sv Lägg till-knappen i slutet av varje filrad，för att kopiera originalfilen URL och ladda ner filer
// @name:th   Github คัดลอกไฟล์ต้นฉบับ URL พร้อมดาวน์โหลดไฟล์
// @description:th เพิ่มปุ่มที่ท้ายแต่ละบรรทัดไฟล์，เพื่อคัดลอกไฟล์ต้นฉบับ URL และดาวน์โหลดไฟล์
// @name:tr   Github Orijinal dosyayı kopyala URL indirme dosyalarıyla
// @description:tr Her dosya satırının sonuna ekle düğmesi，orijinal dosyayı kopyalamak için URL ve dosyaları indir
// @name:ug   Github ئەسلى ھۆججەتنى كۆچۈرۈڭ URL چۈشۈرۈش ھۆججىتى بىلەن
// @description:ug ھەر بىر ھۆججەت قۇرنىڭ ئاخىرىغا كۇنۇپكا قوشۇڭ，ئەسلى ھۆججەتنى كۆچۈرۈش URL ھۆججەتلەرنى چۈشۈرۈڭ
// @name:uk   Github Скопіюйте вихідний файл URL з файлами для завантаження
// @description:uk Кнопка «Додати» в кінці кожного рядка файлу，щоб скопіювати вихідний файл URL і завантажити файли
// @name:vi   Github Sao chép tập tin gốc URL với các tập tin tải về
// @description:vi Nút thêm vào cuối mỗi dòng tập tin，để sao chép tập tin gốc URL và tải về các tập tin
// @name:zh-TW   Github 複製原始文件 URL 與下載文件
// @description:zh-TW 在每個文件行的末尾新增按鈕，以複製原始文件 URL 和下載文件
// @name:zh-HK   Github 複製原始文件 URL 與下載文件
// @description:zh-HK 在每個文件行的末尾新增按鈕，以複製原始文件 URL 和下載文件
// @name:fr-CA   Github Copier le fichier original URL avec des fichiers à télécharger
// @description:fr-CA Ajouter un bouton à la fin de chaque ligne de fichier，pour copier le fichier original URL et télécharger des fichiers
// @description  Add buttons at the end of each file line to copy the raw file URL and download the file
// @namespace               https://github.com/ChinaGodMan/UserScripts
// @version 2.2.0.13
// @author       	Kamikaze (https://github.com/Kamiikaze) ,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        	https://github.com/*
// @icon         	https://www.google.com/s2/favicons?sz=64&domain=github.com
// @run-at       	document-ready
// @license      	MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==


// Need an Interval to detect path changes on github tree one-pager
// Define the number of seconds
const scanInterval = 2


const waitForFilelist = setInterval(() => {
    let fileListContainer = document.querySelector("div.Box > div.js-details-container.Details div") || document.querySelector("table")
    let fileList = []
    let isTable = false

    if (fileListContainer.tBodies) {
        fileList = fileListContainer.tBodies[0].children
        isTable = true
    } else {
        fileList = fileListContainer.children
    }

    if (fileList < 1) return

    appendButtons(fileList, isTable)

}, scanInterval * 1000)

function appendButtons(fileList, isTable = false) {
    let fileUrl = ""
    let rawFileUrl = ""
    for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i]

        if (file.classList.contains("cp-btn-rdy")) continue

        file.classList.add("cp-btn-rdy")

        if (!isTable) {
            if (
                file.classList.contains("sr-only") ||
                file.childElementCount !== 4
            ) continue

            fileUrl = file.querySelector('div:nth-child(2) .js-navigation-open')
                .href
        } else {
            if (i === 0) continue

            if (
                file.classList.contains("sr-only")
            ) continue


            fileUrl = file.querySelector("a")
                .href
            file = file.querySelector("td:nth-child(4) > div")
        }
        //alert(fileUrl)
        // Dont add button if its a folder
        if (!fileUrl.includes("/blob/")) continue

        rawFileUrl = fileUrl.replace('/blob/', '/raw/')
        file.style = "display: flex; justify-content: flex-end;"
        file.append(creatyCopyButton(rawFileUrl))
        file.append(creatyDownButton(rawFileUrl))
    }
};

function creatyCopyButton(copyText) {
    const copy2clipboard = `
		<clipboard-copy aria-label="Copy" value="test value" data-view-component="true" class="" tabindex="0" role="button" title="Copy raw file url">
			<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy">
			<path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
			</svg>
		</clipboard-copy>`

    const copyButton = document.createElement('div')
    copyButton.setAttribute('role', 'gridcell')
    copyButton.style = "margin-left: 10px; display: inline;"
    copyButton.innerHTML = copy2clipboard
    copyButton.children[0].value = copyText
    copyButton.children[0].style = "cursor: pointer;"

    return copyButton
}
function creatyDownButton(copyText) {
    const copy2clipboard = `
<clipboard-copy aria-label="Download" value="test value" data-view-component="true" class="" tabindex="0" role="button" title="Download raw file url">
	<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-download">
		<path fill-rule="evenodd" d="M1.75 14.25A1.75 1.75 0 013.5 12.5h9a1.75 1.75 0 011.75 1.75v1.5a.75.75 0 01-.75.75H2.5a.75.75 0 01-.75-.75v-1.5zM10.75 9.25a.25.25 0 01.25.25v2.5a.25.25 0 01-.25.25H5.25a.25.25 0 01-.25-.25v-2.5a.25.25 0 01.25-.25h5.5zM8 1.75a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H6.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1.5zM10.25 5.25l1.5 1.5a.25.25 0 01.35 0l3-3a.25.25 0 00-.35-.35L11 5.25 9.25 3.5a.25.25 0 00-.35.35z"></path>
	</svg>
</clipboard-copy>
`

    const copyButton = document.createElement('div')
    copyButton.setAttribute('role', 'gridcell')
    copyButton.style = "margin-left: 10px; display: inline;"
    copyButton.innerHTML = copy2clipboard
    copyButton.children[0].value = copyText
    copyButton.children[0].style = "cursor: pointer;"
    copyButton.addEventListener('click', () => {
        //    window.location.href = copyText;
        downloadFile(copyText, getFilenameFromUrl(copyText))
    })
    return copyButton
}
function downloadFile(url, filename) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
        if (xhr.status === 200) {
            var blob = xhr.response
            var objectUrl = window.URL.createObjectURL(blob)
            var a = document.createElement('a')
            a.href = objectUrl
            a.download = filename // 设置下载文件名
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(objectUrl) // 清理 object URL
            document.body.removeChild(a) // 清理 DOM
        }
    }
    xhr.send()
}
function getFilenameFromUrl(url) {
    if (typeof url !== 'string' || url.trim() === '') {
        logMessage('getFilenameFromUrl', 'URL无效，默认文件名download', false)
        return 'download' // 返回一个默认的文件名
    }
    var lastSlashIndex = url.lastIndexOf('/')
    if (lastSlashIndex === -1 || lastSlashIndex === url.length - 1) {
        logMessage('getFilenameFromUrl', 'URL格式无效缺少文件名，默认文件名download', false)
        return 'download' // 返回一个默认的文件名
    }
    var filenameWithExtension = url.substring(lastSlashIndex + 1)
    var decodedFilename = decodeURIComponent(filenameWithExtension)
    decodedFilename = decodedFilename.replace(/%20/g, '_') // 替换所有的 %20 为下划线
    return decodedFilename
}