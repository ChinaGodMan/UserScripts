// ==UserScript==
// @name              GitHub Gist Copier & Downloader
// @name:ar           Github Gist Code Snippet Copy and Downloader
// @name:bg           Github Gist код Shippet Copy and Downloader
// @name:cs           Github Gist Code Snippet Copy and Downloader
// @name:da           GitHub Gist Code Strappet Copy and Downloader
// @name:de           Github Gist Code Snippet Copy und Downloader
// @name:el           GitHub Gist Κωδικός απόσπασμα και λήψη
// @name:en           GitHub Gist code snippet copy and downloader
// @name:eo           Github Gist Code Snippet Copy and Downloader
// @name:es           Copia y descargador de fragmentos de código Github Gist
// @name:fi           Github GIST -koodin katkelma kopio ja lataaja
// @name:fr           GitHub Gist Code Snippet Copy and Downloader
// @name:fr-CA        GitHub Gist Code Snippet Copy and Downloader
// @name:he           Github GiSt Code Snippet Copy and Downloader
// @name:hr           GitHub Gist Code Snippet Kopiranje i preuzimanje
// @name:hu           GitHub GIST kódrészlet másolat és letöltő
// @name:id           Salinan dan download cuplikan kode GIST GITHUB
// @name:it           Copia di snippet di codice GIST GIST e downloader
// @name:ja           GitHub Gistコードスニペットコピーとダウンローダー
// @name:ka           Github gist კოდის snippet ასლი და ჩამოტვირთვა
// @name:ko           github gist 코드 스 니펫 복사 및 다운로더
// @name:nb           GitHub Gist Code Snippet Copy and Downloader
// @name:nl           GitHub Gist Code Snippet Copy and Downloader
// @name:pl           Github gist kod kodu fragmentu i downloader
// @name:pt-BR        Cópia do snippet e downloader de código de código do Github
// @name:ro           Github Gist Code Snipt Copy and Downloader
// @name:ru           Github Gist Code Specy Copy and Downloader
// @name:sk           Kópia a sťahovanie kódu github gist
// @name:sr           ГитХуб Гист Цоде Сниппет Копирање и преузимање
// @name:sv           Github gist code kodavsnitt kopia och nedladdare
// @name:th           GitHub Gist Code Snippet Copy and Downloader
// @name:tr           Github Gist Kodu Snippet Copy ve Downloader
// @name:ug           GitHub GIST CLIPTE CLIPPET ۋە چۈشۈرگۈچى
// @name:uk           Копія та завантажувач Github Github Gist Code
// @name:vi           Github Gist Code Snippet Sao chép và tải xuống
// @name:zh           GitHub Gist 代码片段复制与下载器
// @name:zh-CN        GitHub Gist 代码片段复制与下载器
// @name:zh-HK        GitHub Gist 代碼片段複製與下載器
// @name:zh-SG        GitHub Gist 代码片段复制与下载器
// @name:zh-TW        GitHub Gist 代碼片段複製與下載器
// @description       Adds copy button to Gist files for easy code copying.| Adds download button to Gist files for easy code downloading.
// @description:ar    أضف زر نسخ إلى ملف GIST لجعل الكود يتم نسخه بسهولة. |
// @description:bg    Добавете бутон за копиране към файла на GIST, за да направите лесно копирания код. |.
// @description:cs    Přidejte tlačítko Kopírovat do souboru GIST, aby se kód snadno zkopíroval. |.
// @description:da    Tilføj en kopi -knap til GIST -filen for at gøre koden let kopieret. |.
// @description:de    Fügen Sie der GIST -Datei eine Kopierschaltfläche hinzu, um den Code leicht zu kopieren. |.
// @description:el    Προσθέστε ένα κουμπί αντιγραφής στο αρχείο GIST για να αντιγράψετε εύκολα τον κώδικα. | Προσθέστε ένα κουμπί λήψης στο αρχείο GIST για εύκολη λήψη του κώδικα.
// @description:en    Add a copy button to the Gist file to make the code easily copied. | Add a download button to the Gist file to easily download the code.
// @description:eo    Aldonu kopian butonon al la GIST -dosiero por fari la kodon facile kopiita. | Aldoni elŝutan butonon al la GIST -dosiero por facile elŝuti la kodon.
// @description:es    Agregue un botón de copia al archivo GIST para que el código se copie fácilmente. | Agregar un botón de descarga al archivo GIST para descargar fácilmente el código.
// @description:fi    Lisää kopio -painike GIST -tiedostoon, jotta koodi kopioidaan helposti. | Lisää latauspainike GIST -tiedostoon koodin helposti.
// @description:fr    Ajoutez un bouton de copie au fichier GIST pour que le code soit facilement copié. | Ajouter un bouton de téléchargement au fichier GIST pour télécharger facilement le code.
// @description:fr-CA Ajoutez un bouton de copie au fichier GIST pour que le code soit facilement copié. | Ajouter un bouton de téléchargement au fichier GIST pour télécharger facilement le code.
// @description:he    הוסף כפתור העתק לקובץ ה- GIST כדי להפוך את הקוד להעתיק בקלות. |.
// @description:hr    Dodajte gumb za kopiranje u datoteku Gist da biste se kôd lako kopirali. | Dodajte gumb za preuzimanje u datoteku Gist da biste lako preuzeli kôd.
// @description:hu    Adjon hozzá egy másolat gombot a GIST fájlhoz, hogy a kód könnyen másoljon. | Adjon hozzá egy letöltési gombot a GIST fájlhoz, hogy könnyen letöltse a kódot.
// @description:id    Tambahkan tombol Salin ke file GIST untuk membuat kode dengan mudah disalin. Tambahkan tombol unduh ke file GIST untuk dengan mudah mengunduh kode.
// @description:it    Aggiungi un pulsante Copia al file GIST per rendere il codice facilmente copiato. | Aggiungi un pulsante di download al file GIST per scaricare facilmente il codice.
// @description:ja    GISTファイルにコピーボタンを追加して、コードを簡単にコピーすることができます。 |ダウンロードボタンをGISTファイルに追加して、コードを簡単にダウンロードします。
// @description:ka    დაამატეთ კოპირების ღილაკი GIST ფაილში, რომ კოდი ადვილად გადაწეროთ. |
// @description:ko    코드를 쉽게 복사하기 위해 GIST 파일에 복사 버튼을 추가하십시오. |. 코드를 쉽게 다운로드하려면 GIST 파일에 다운로드 버튼을 추가하십시오.
// @description:nb    Legg til en kopiknapp i GIST -filen for å gjøre koden enkelt kopiert. |.
// @description:nl    Voeg een kopie -knop toe aan het GIST -bestand om de code gemakkelijk te laten kopiëren. | Voeg een downloadknop toe aan het GIST -bestand om de code eenvoudig te downloaden.
// @description:pl    Dodaj przycisk kopii do pliku GIST, aby kod był łatwy do kopiowania. |
// @description:pt-BR Adicione um botão de cópia ao arquivo GIST para tornar o código facilmente copiado. |.
// @description:ro    Adăugați un buton de copiere în fișierul GIST pentru a face codul ușor copiat. |
// @description:ru    Добавьте кнопку копирования в файл GIST, чтобы сделать код легко скопированный. |.
// @description:sk    Pridajte tlačidlo kopírovania do súboru GIST, aby sa kód ľahko skopíroval. | Dodajte tlačidlo sťahovania do súboru GIST, aby ste si ľahko stiahnuť kód.
// @description:sr    Додајте дугме за копирање у датотеку Гист да бисте кодекс лако копирали. | Додајте дугме за преузимање у датотеку ГИСТ да бисте лако преузели код.
// @description:sv    Lägg till en kopieringsknapp i GIST -filen så att koden enkelt kopieras. | Lägg till en nedladdningsknapp i GIST -filen för att enkelt ladda ner koden.
// @description:th    เพิ่มปุ่มคัดลอกไปยังไฟล์ GIST เพื่อให้รหัสคัดลอกได้อย่างง่ายดาย | เพิ่มปุ่มดาวน์โหลดไปยังไฟล์ GIST เพื่อดาวน์โหลดรหัสได้อย่างง่ายดาย
// @description:tr    Kodu kolayca kopyalamak için GIST dosyasına bir kopya düğmesi ekleyin. Kodu kolayca indirmek için bir indir düğmesi ekleyin.
// @description:ug    كود ھۆججىتىگە بىر نۇسخا قوشۇش كۇنۇپكىسىنى قوشۇڭ. | بىز GIST ھۆججىتىگە چۈشۈرۈش كۇنۇپكىسىنى قوشۇڭ, كودنى ئاسانلا چۈشۈرۈش.
// @description:uk    Додайте кнопку копіювання до файлу GIST, щоб зробити код легко скопіювати. | Додайте кнопку завантаження до файлу GIST, щоб легко завантажити код.
// @description:vi    Thêm một nút sao chép vào tệp GIST để dễ dàng sao chép mã. |
// @description:zh    向 Gist 文件添加复制按钮，以便轻松复制代码。| 向 Gist 文件添加下载按钮，以便轻松下载代码。
// @description:zh-CN 向 Gist 文件添加复制按钮，以便轻松复制代码。| 向 Gist 文件添加下载按钮，以便轻松下载代码。
// @description:zh-HK 向 Gist 文件添加複制按鈕，以便輕鬆複製代碼。 | 向 Gist 文件添加下載按鈕，以便輕鬆下載代碼。
// @description:zh-SG 向 Gist 文件添加复制按钮，以便轻松复制代码。| 向 Gist 文件添加下载按钮，以便轻松下载代码。
// @description:zh-TW 向 Gist 文件添加複制按鈕，以便輕鬆複製代碼。 | 向 Gist 文件添加下載按鈕，以便輕鬆下載代碼。
// @author            afkarxyz,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts
// @license           MIT
// @icon              data:image/png;base64,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
// @run-at            document-end
// @match             https://gist.github.com/*
// @grant             GM_xmlhttpRequest
// @grant             GM_addStyle
// @connect           githubusercontent.com
// @compatible        chrome
// @compatible        firefox
// @compatible        edge
// @compatible        opera
// @compatible        safari
// @compatible        kiwi
// @compatible        qq
// @compatible        via
// @compatible        brave
// @version           2025.03.12.0022
// @created           2025-03-12 00:22:40
// @modified          2025-03-12 00:22:40
// @downloadURL       https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-gist-copier/github-gist-copier.user.js
// @updateURL         https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-gist-copier/github-gist-copier.user.js
// ==/UserScript==
/**
 * File: github-gist-copier.user.js
 * Project: UserScripts
 * File Created: 2025/03/12,Wednesday 00:22:50
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/12,Wednesday 02:32:41
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */
(function () {
    'use strict'
    function noop() { }
    function debounce(f, delay) {
        let timeoutId = null
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                f.apply(this, args)
            }, delay)
        }
    }

    function createCopyButton(fileElement) {
        const fileActionElement = fileElement.querySelector('.file-actions')
        if (!fileActionElement) {
            return noop
        }

        const rawButton = fileActionElement.querySelector('a[href*="/raw/"]')
        if (!rawButton) {
            return noop
        }

        const buttonToDown = document.createElement('button')
        buttonToDown.className = 'btn-octicon gist-down-button'
        buttonToDown.style.marginRight = '5px'
        const button = document.createElement('button')
        button.className = 'btn-octicon gist-copy-button'
        button.style.marginRight = '5px'
        buttonToDown.innerHTML = `
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-down">
            <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path>
            <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>
        </svg>

        <svg style="display: none;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
        </svg>
        `

        button.innerHTML = `
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-down">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        </svg>

        <svg style="display: none;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
        </svg>
        `

        const copyIcon = button.querySelector('.octicon-copy')
        const checkIcon = button.querySelector('.octicon-check')
        const downIcon = buttonToDown.querySelector('.octicon-down')
        const downcheckIcon = buttonToDown.querySelector('.octicon-check')
        let timeoutId = null
        const copyHandler = (e) => {
            if (timeoutId) {
                return
            }
            e.preventDefault()
            const rawUrl = rawButton.href
            GM_xmlhttpRequest({
                method: 'GET',
                url: rawUrl,
                onload: function (response) {
                    if (response.status === 200) {
                        navigator.clipboard.writeText(response.responseText).then(() => {
                            copyIcon.style.display = 'none'
                            checkIcon.style.display = 'inline-block'
                            timeoutId = setTimeout(() => {
                                copyIcon.style.display = 'inline-block'
                                checkIcon.style.display = 'none'
                                timeoutId = null
                            }, 500)
                        }).catch(err => {
                            console.error('Failed to copy text: ', err)
                        })
                    }
                },
                onerror: function (error) {
                    timeoutId = null
                }
            })
        }
        const downHandler = (e, element) => {
            if (timeoutId) {
                return
            }
            e.preventDefault()
            const gistName = element.parentElement.querySelector('.gist-blob-name').innerText
            const rawUrl = rawButton.href
            GM_xmlhttpRequest({
                method: 'GET',
                url: rawUrl,
                onload: function (response) {
                    if (response.status === 200) {
                        const blob = new Blob([response.responseText], {
                            type: 'text/plain'
                        })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = gistName
                        a.click()
                        downIcon.style.display = 'none'
                        downcheckIcon.style.display = 'inline-block'
                        timeoutId = setTimeout(() => {
                            downIcon.style.display = 'inline-block'
                            downcheckIcon.style.display = 'none'
                            timeoutId = null
                        }, 500)
                    } else {
                        console.error('Download Failed')
                    }
                },
                onerror: function (error) {
                    timeoutId = null
                }
            })
        }

        buttonToDown.addEventListener('click', (e) => downHandler(e, fileActionElement))
        button.addEventListener('click', copyHandler)
        fileActionElement.insertBefore(button, fileActionElement.firstChild)
        fileActionElement.insertBefore(buttonToDown, fileActionElement.firstChild)
        return () => {
            button.removeEventListener('click', copyHandler)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            button.remove()
        }
    }

    function runGist() {
        let removeAllListeners = noop

        function tryCreateCopyButtons() {
            removeAllListeners()
            const fileElements = [...document.querySelectorAll('.file')]
            const removeListeners = fileElements.map(createCopyButton)
            removeAllListeners = () => {
                removeListeners.map((f) => f());
                [...document.querySelectorAll('.gist-down-button')].forEach((el) => {
                    el.remove()
                });
                [...document.querySelectorAll('.gist-copy-button')].forEach((el) => {
                    el.remove()
                })
            }
        }

        setTimeout(tryCreateCopyButtons, 300)

        const observer = new MutationObserver(debounce(() => {
            if (document.querySelectorAll('.file').length > 0 &&
                document.querySelectorAll('.gist-copy-button').length === 0) {
                tryCreateCopyButtons()
            }
        }, 100))

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        if (window.onurlchange === null) {
            window.addEventListener('urlchange', debounce(tryCreateCopyButtons, 16))
        }
    }

    runGist()


})()
