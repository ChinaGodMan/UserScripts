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
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @version 2.2.0.21
// @author       	Kamikaze (https://github.com/Kamiikaze) ,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        	https://github.com/*
// @icon  data:image/png;base64,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
// @iconbak https://github.githubassets.com/pinned-octocat.svg
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