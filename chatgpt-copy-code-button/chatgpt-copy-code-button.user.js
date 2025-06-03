// ==UserScript==
// @name               ChatGPT Chat copy code and export code buttons
// @name:zh            ChatGPT 聊天复制代码和导出代码按钮
// @name:zh-CN         ChatGPT 聊天复制代码和导出代码按钮
// @name:ar            ChatGPT نسخ رمز الدردشة وأزرار رمز التصدير
// @name:bg            ChatGPT Бутони за копиране на код за чат и експортиране на код
// @name:cs            ChatGPT Chat kopírovat kód a exportovat tlačítka kódu
// @name:da            ChatGPT Chat kopi kode og eksport kode knapper
// @name:de            ChatGPT Chat-Schaltflächen zum Kopieren und Exportieren von Code
// @name:el            ChatGPT Κουμπιά κωδικού αντιγραφής συνομιλίας και κωδικού εξαγωγής
// @name:en            ChatGPT Chat copy code and export code buttons
// @name:eo            ChatGPT Babilejo kopikodo kaj eksportkodo butonoj
// @name:es            ChatGPT Botones de copiar código y exportar código de chat
// @name:fi            ChatGPT Chat kopioi koodi ja vientikoodin painikkeet
// @name:fr            ChatGPT Boutons de copie du code de chat et d’exportation du code
// @name:he            ChatGPT לחצני צ’אט העתקת קוד וייצוא קוד
// @name:hr            ChatGPT Gumbi za kopiranje koda i izvoz koda
// @name:hu            ChatGPT Chat kódmásolás és kódexportálás gombok
// @name:id            ChatGPT Tombol salin kode obrolan dan ekspor kode
// @name:it            ChatGPT Chatta copia il codice ed esporta i pulsanti del codice
// @name:ja            ChatGPT チャットのコードのコピー ボタンとコードのエクスポート ボタン
// @name:ka            ChatGPT ჩეთის კოპირების კოდის და ექსპორტის კოდის ღილაკები
// @name:ko            ChatGPT 채팅 코드 복사 및 코드 내보내기 버튼
// @name:nl            ChatGPT Chat kopieer code en exportcodeknoppen
// @name:nb            ChatGPT Chat kopier kode og eksport kode knapper
// @name:pl            ChatGPT Przyciski kopiowania kodu i eksportowania kodu na czacie
// @name:pt-BR         ChatGPT Botões de copiar código de bate-papo e exportar código
// @name:ro            ChatGPT Butoanele de copiere a codului de chat și a codului de export
// @name:ru            ChatGPT Кнопки копирования кода чата и экспорта кода
// @name:sk            ChatGPT Kopírovanie kódu chatu a tlačidlá exportu kódu
// @name:sr            ChatGPT Дугмад за копирање кода за ћаскање и дугмад за извоз кода
// @name:sv            ChatGPT Chat kopiera kod och export kod knappar
// @name:th            ChatGPT ปุ่มคัดลอกรหัสแชทและปุ่มส่งออกรหัส
// @name:tr            ChatGPT Sohbet kodunu kopyala ve kodu dışa aktar düğmeleri
// @name:ug            ChatGPT پاراڭلىشىش كودى ۋە ئېكسپورت كود كۇنۇپكىسى
// @name:uk            ChatGPT Кнопки копіювання та експорту коду чату
// @name:vi            ChatGPT Nút trò chuyện sao chép mã và xuất mã
// @name:zh-TW         ChatGPT 聊天複製程式碼和匯出程式碼按鈕
// @name:zh-HK         ChatGPT 聊天複製程式碼和匯出程式碼按鈕
// @name:fr-CA         ChatGPT Boutons de copie du code de chat et d’exportation du code
// @description        exist chatgpt.com Add an animation in the lower right corner of the upper code block“Copy code”button and a for ChatGPT Code block in response adds export button，Prompts the user to save code to a file based on the programming language detected by the code block’s class name。
// @description:zh     在 chatgpt.com 上代码块的右下角添加一个带有动画的“复制代码”按钮和一个为 ChatGPT 响应中的代码块添加导出按钮，提示用户根据代码块的类名检测到的编程语言将代码保存为文件。
// @description:zh-CN  在 chatgpt.com 上代码块的右下角添加一个带有动画的“复制代码”按钮和一个为 ChatGPT 响应中的代码块添加导出按钮，提示用户根据代码块的类名检测到的编程语言将代码保存为文件。
// @description:ar     يخرج chatgpt.com أضف رسمًا متحركًا في الركن الأيمن السفلي من كتلة التعليمات البرمجية العلوية“نسخ الرمز”زر و ل ChatGPT تضيف كتلة التعليمات البرمجية في الاستجابة زر التصدير，يطالب المستخدم بحفظ التعليمات البرمجية في ملف بناءً على لغة البرمجة التي اكتشفها اسم فئة كتلة التعليمات البرمجية。
// @description:bg     съществуват chatgpt.com Добавете анимация в долния десен ъгъл на горния кодов блок“Копирайте кода”бутон и за ChatGPT Кодовият блок в отговор добавя бутон за експортиране，Подканва потребителя да запише код във файл въз основа на езика за програмиране, открит от името на класа на кодовия блок。
// @description:cs     existovat chatgpt.com Přidejte animaci do pravého dolního rohu horního bloku kódu“Kopírovat kód”tlačítko a pro ChatGPT Blok kódu jako odpověď přidá tlačítko exportu，Vyzve uživatele k uložení kódu do souboru na základě programovacího jazyka zjištěného názvem třídy bloku kódu。
// @description:da     eksistere chatgpt.com Tilføj en animation i nederste højre hjørne af den øverste kodeblok“Kopiér kode”knap og en for ChatGPT Kodeblok som svar tilføjer eksportknap，Beder brugeren om at gemme kode i en fil baseret på det programmeringssprog, der registreres af kodeblokkens klassenavn。
// @description:de     existieren chatgpt.com Fügen Sie in der unteren rechten Ecke des oberen Codeblocks eine Animation hinzu“Code kopieren”Knopf und ein für ChatGPT Als Antwort fügt der Codeblock eine Schaltfläche zum Exportieren hinzu，Fordert den Benutzer auf, Code in einer Datei zu speichern, basierend auf der Programmiersprache, die durch den Klassennamen des Codeblocks erkannt wird。
// @description:el     υπάρχω chatgpt.com Προσθέστε μια κινούμενη εικόνα στην κάτω δεξιά γωνία του επάνω μπλοκ κώδικα“Αντιγραφή κωδικού”κουμπί και ένα για ChatGPT Το μπλοκ κώδικα σε απόκριση προσθέτει το κουμπί εξαγωγής，Προτρέπει τον χρήστη να αποθηκεύσει κώδικα σε ένα αρχείο με βάση τη γλώσσα προγραμματισμού που ανιχνεύεται από το όνομα κλάσης του μπλοκ κώδικα。
// @description:en     exist chatgpt.com Add an animation in the lower right corner of the upper code block“Copy code”button and a for ChatGPT Code block in response adds export button，Prompts the user to save code to a file based on the programming language detected by the code block’s class name。
// @description:eo     ekzisti chatgpt.com Aldonu animacion en la malsupra dekstra angulo de la supra kodbloko“Kopiu kodon”butono kaj a por ChatGPT Kodbloko en respondo aldonas eksportbutonon，Instigas la uzanton konservi kodon al dosiero bazita sur la programlingvo detektita de la klasnomo de la kodbloko。
// @description:es     existir chatgpt.com Agregue una animación en la esquina inferior derecha del bloque de código superior“Copiar código”botón y un para ChatGPT El bloque de código en respuesta agrega el botón de exportación，Solicita al usuario que guarde el código en un archivo según el lenguaje de programación detectado por el nombre de clase del bloque de código.。
// @description:fi     olemassa chatgpt.com Lisää animaatio ylemmän koodilohkon oikeaan alakulmaan“Kopioi koodi”-painiketta ja for ChatGPT Koodilohko vastauksena lisää vientipainikkeen，Kehottaa käyttäjää tallentamaan koodin tiedostoon koodilohkon luokan nimen havaitseman ohjelmointikielen perusteella。
// @description:fr     exister chatgpt.com Ajoutez une animation dans le coin inférieur droit du bloc de code supérieur“Copier le code”bouton et un pour ChatGPT Le bloc de code en réponse ajoute un bouton d’exportation，Invite l’utilisateur à enregistrer le code dans un fichier basé sur le langage de programmation détecté par le nom de classe du bloc de code。
// @description:he     לְהִתְקַיֵם chatgpt.com הוסף אנימציה בפינה הימנית התחתונה של גוש הקוד העליון“העתק קוד”כפתור ו- for ChatGPT בלוק קוד בתגובה מוסיף לחצן ייצוא，מבקש מהמשתמש לשמור קוד בקובץ המבוסס על שפת התכנות שזוהתה על ידי שם המחלקה של בלוק הקוד。
// @description:hr     postojati chatgpt.com Dodajte animaciju u donji desni kut gornjeg bloka koda“Kopiraj kod”gumb i for ChatGPT Blok koda kao odgovor dodaje gumb za izvoz，Traži od korisnika da spremi kod u datoteku na temelju programskog jezika otkrivenog nazivom klase kodnog bloka。
// @description:hu     létezik chatgpt.com Adjon hozzá animációt a felső kódblokk jobb alsó sarkába“Kód másolása”gombot és egy for ChatGPT A kódblokk válaszként hozzáadja az export gombot，Arra kéri a felhasználót, hogy a kódblokk osztályneve által észlelt programozási nyelv alapján mentse el a kódot egy fájlba。
// @description:id     ada chatgpt.com Tambahkan animasi di sudut kanan bawah blok kode atas“Salin kode”tombol dan untuk ChatGPT Blok kode sebagai respons menambahkan tombol ekspor，Meminta pengguna untuk menyimpan kode ke file berdasarkan bahasa pemrograman yang terdeteksi oleh nama kelas blok kode。
// @description:it     esistere chatgpt.com Aggiungi un’animazione nell’angolo in basso a destra del blocco di codice superiore“Copia il codice”pulsante e un for ChatGPT Il blocco di codice in risposta aggiunge il pulsante di esportazione，Richiede all’utente di salvare il codice in un file in base al linguaggio di programmazione rilevato dal nome della classe del blocco di codice。
// @description:ja     存在する chatgpt.com 上部のコード ブロックの右下隅にアニメーションを追加します。“コードをコピーする”ボタンと for ChatGPT 応答のコード ブロックはエクスポート ボタンを追加します，コード ブロックのクラス名によって検出されたプログラミング言語に基づいて、コードをファイルに保存するようにユーザーにプロンプトを表示します。。
// @description:ka     არსებობს chatgpt.com დაამატეთ ანიმაცია ზედა კოდის ბლოკის ქვედა მარჯვენა კუთხეში“დააკოპირეთ კოდი”ღილაკი და ამისთვის ChatGPT კოდის ბლოკი პასუხად ამატებს ექსპორტის ღილაკს，სთხოვს მომხმარებელს შეინახოს კოდი ფაილში კოდის ბლოკის კლასის სახელით აღმოჩენილი პროგრამირების ენის საფუძველზე。
// @description:ko     존재하다 chatgpt.com 상단 코드 블록의 오른쪽 하단에 애니메이션을 추가합니다.“코드 복사”버튼과 ChatGPT 응답으로 코드 블록에 내보내기 버튼이 추가됩니다.，코드 블록의 클래스 이름으로 감지된 프로그래밍 언어를 기반으로 파일에 코드를 저장하라는 메시지를 사용자에게 표시합니다.。
// @description:nl     bestaan chatgpt.com Voeg een animatie toe in de rechter benedenhoek van het bovenste codeblok“Kopieer code”knop en een voor ChatGPT Codeblok als reactie voegt een exportknop toe，Vraagt de gebruiker om code op te slaan in een bestand op basis van de programmeertaal die wordt gedetecteerd door de klassenaam van het codeblok。
// @description:nb     eksistere chatgpt.com Legg til en animasjon i nedre høyre hjørne av den øvre kodeblokken“Kopier koden”knapp og en for ChatGPT Kodeblokk som svar legger til eksportknapp，Ber brukeren om å lagre kode i en fil basert på programmeringsspråket oppdaget av kodeblokkens klassenavn。
// @description:pl     istnieć chatgpt.com Dodaj animację w prawym dolnym rogu górnego bloku kodu“Skopiuj kod”przycisk i for ChatGPT Blok kodu w odpowiedzi dodaje przycisk eksportu，Monituje użytkownika o zapisanie kodu w pliku w oparciu o język programowania wykryty przez nazwę klasy bloku kodu。
// @description:pt-BR  existir chatgpt.com Adicione uma animação no canto inferior direito do bloco de código superior“Copiar código”botão e um para ChatGPT Bloco de código em resposta adiciona botão de exportação，Solicita ao usuário que salve o código em um arquivo com base na linguagem de programação detectada pelo nome da classe do bloco de código。
// @description:ro     exista chatgpt.com Adăugați o animație în colțul din dreapta jos al blocului de cod de sus“Copiați codul”buton și un pentru ChatGPT Blocarea codului ca răspuns adaugă butonul de export，Solicită utilizatorului să salveze codul într-un fișier pe baza limbajului de programare detectat de numele clasei blocului de cod。
// @description:ru     существовать chatgpt.com Добавьте анимацию в правом нижнем углу верхнего блока кода.“Скопировать код”кнопка и для ChatGPT Блок кода в ответ добавляет кнопку экспорта，Предлагает пользователю сохранить код в файл на основе языка программирования, определенного по имени класса блока кода.。
// @description:sk     existujú chatgpt.com Pridajte animáciu do pravého dolného rohu horného bloku kódu“Kopírovať kód”tlačidlo a pre ChatGPT Blok kódu v odpovedi pridá tlačidlo exportu，Vyzve používateľa, aby uložil kód do súboru na základe programovacieho jazyka, ktorý sa zistil podľa názvu triedy bloku kódu。
// @description:sr     постоје chatgpt.com Додајте анимацију у доњи десни угао горњег кодног блока“Копирај код”дугме и за ChatGPT Блок кода као одговор додаје дугме за извоз，Тражи од корисника да сачува код у датотеци на основу програмског језика који је откривен именом класе блока кода。
// @description:sv     existera chatgpt.com Lägg till en animation i det nedre högra hörnet av det övre kodblocket“Kopiera kod”knapp och en för ChatGPT Kodblock som svar lägger till exportknapp，Ber användaren att spara kod till en fil baserat på programmeringsspråket som identifieras av kodblockets klassnamn。
// @description:th     มีอยู่ chatgpt.com เพิ่มภาพเคลื่อนไหวที่มุมขวาล่างของบล็อกโค้ดด้านบน“คัดลอกรหัส”ปุ่ม และสำหรับ ChatGPT บล็อกโค้ดในการตอบสนองเพิ่มปุ่มส่งออก，พร้อมต์ให้ผู้ใช้บันทึกโค้ดลงในไฟล์ตามภาษาการเขียนโปรแกรมที่ตรวจพบโดยชื่อคลาสของบล็อคโค้ด。
// @description:tr     var olmak chatgpt.com Üst kod bloğunun sağ alt köşesine bir animasyon ekleyin“Kodu kopyala”düğme ve bir için ChatGPT Yanıt olarak kod bloğu dışa aktarma düğmesi ekler，Kullanıcıdan, kod bloğunun sınıf adı tarafından algılanan programlama diline dayalı olarak kodu bir dosyaya kaydetmesini ister。
// @description:ug     مەۋجۇت chatgpt.com ئۈستۈنكى كود توپىنىڭ ئوڭ ئوڭ بۇلۇڭىغا كارتون قوشۇڭ“كودنى كۆچۈرۈڭ”كۇنۇپكا ۋە ئۈچۈن ChatGPT بۇنىڭغا جاۋابەن كود توسۇش ئېكسپورت كۇنۇپكىسىنى قوشىدۇ，ئىشلەتكۈچىنىڭ كود بۆلەكنىڭ سىنىپ ئىسمى تەرىپىدىن بايقالغان پروگرامما تىلىغا ئاساسەن كودنى ھۆججەتكە ساقلىشىنى تەلەپ قىلىدۇ。
// @description:uk     існують chatgpt.com Додайте анімацію в нижній правий кут верхнього блоку коду“Скопіюйте код”кнопка і for ChatGPT Блок коду у відповідь додає кнопку експорту，Пропонує користувачеві зберегти код у файл на основі мови програмування, визначеної назвою класу блоку коду。
// @description:vi     hiện hữu chatgpt.com Thêm hình động ở góc dưới bên phải của khối mã phía trên“Sao chép mã”nút và một cho ChatGPT Khối mã phản hồi thêm nút xuất，Nhắc người dùng lưu mã vào tệp dựa trên ngôn ngữ lập trình được phát hiện bởi tên lớp của khối mã。
// @description:zh-TW  在 chatgpt.com 上代碼區塊的右下角添加一個帶有動畫的“複製程式碼”按鈕和一個為 ChatGPT 響應中的程式碼區塊新增匯出按鈕，提示使用者根據程式碼區塊的類別名稱偵測到的程式語言將程式碼儲存為文件。
// @description:zh-HK  在 chatgpt.com 上代碼區塊的右下角添加一個帶有動畫的“複製程式碼”按鈕和一個為 ChatGPT 響應中的程式碼區塊新增匯出按鈕，提示使用者根據程式碼區塊的類別名稱偵測到的程式語言將程式碼儲存為文件。
// @description:fr-CA  exister chatgpt.com Ajoutez une animation dans le coin inférieur droit du bloc de code supérieur“Copier le code”bouton et un pour ChatGPT Le bloc de code en réponse ajoute un bouton d’exportation，Invite l’utilisateur à enregistrer le code dans un fichier basé sur le langage de programmation détecté par le nom de classe du bloc de code。
// @match              https://chatgpt.com/*
// @match              https://share.nezhagpt.cloud/*
// @author             YodaBets,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @icon               data:image/png;base64,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
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @version            1.2.0.0
// ==/UserScript==

(function () {
    'use strict'
    var EXPORT = true
    const copyToClipboard = (text, button) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied code to clipboard')
            button.innerHTML = 'Copied!'
            setTimeout(() => {
                button.innerHTML = '' // Clear the text
                const svgIcon = getSVGIcon() // Re-add the SVG icon
                button.appendChild(svgIcon)
            }, 2000)
        }, (err) => {
            console.error('Failed to copy code: ', err)
        })
    }
    function getSVGIcon(isEx = false) {
        const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svgIcon.setAttribute('width', '24')
        svgIcon.setAttribute('height', '24')
        svgIcon.setAttribute('fill', 'none')
        svgIcon.setAttribute('viewBox', '0 0 24 24')
        svgIcon.classList.add('icon-sm')
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('fill', 'currentColor')
        path.setAttribute('fill-rule', 'evenodd')
        if (isEx) {
            path.setAttribute('transform', 'rotate(180 12 12)')
            path.setAttribute('d', 'M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm7-2a1 1 0 0 1-1-1V8.414L9.707 10.707a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 8.414V17a1 1 0 0 1-1 1z')
        } else {
            path.setAttribute('d', 'M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z')
        }
        path.setAttribute('clip-rule', 'evenodd')
        svgIcon.appendChild(path)
        return svgIcon
    }
    const addButton = (elem) => {
        const button = document.createElement('button')
        const svgIcon = getSVGIcon()
        button.appendChild(svgIcon)
        button.style.position = 'absolute'
        button.style.bottom = '8px'
        button.style.right = '8px'
        button.style.fontSize = '12px'
        button.style.padding = '4px 8px'
        button.style.border = '1px solid #ccc'
        button.style.borderRadius = '3px'
        button.style.background = 'rgba(0,0,0,0.1)'
        button.style.color = 'white'
        button.style.cursor = 'pointer'
        button.style.zIndex = '10'
        button.style.transition = 'background-color 0.3s ease'
        button.addEventListener('click', (e) => {
            e.stopPropagation()
            copyToClipboard(elem.querySelector('code').textContent, button)
        })
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgba(0,0,0,0.2)'
        })
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
        elem.style.position = 'relative'
        elem.appendChild(button)
    }
    const addexButton = (elem) => {
        const button = document.createElement('button')
        const svgIcon = getSVGIcon(true)
        button.appendChild(svgIcon)
        button.style.position = 'absolute'
        button.style.bottom = '8px'
        button.style.right = '48px'
        button.style.fontSize = '12px'
        button.style.padding = '4px 8px'
        button.style.border = '1px solid #ccc'
        button.style.borderRadius = '3px'
        button.style.background = 'rgba(0,0,0,0.1)'
        button.style.color = 'white'
        button.style.cursor = 'pointer'
        button.style.zIndex = '10'
        button.style.transition = 'background-color 0.3s ease'
        button.addEventListener('click', (e) => {
            var languageDiv = elem.querySelector('div.flex.items-center.text-token-text-secondary')
            e.stopPropagation()
            exportCode(elem, languageDiv.textContent)
        })
        elem.style.position = 'relative'
        elem.appendChild(button)
    }
    const observeCodeBlocks = () => {
        const codeBlocks = document.querySelectorAll('pre:not(.copy-code-processed)')
        if (codeBlocks.length) {
            codeBlocks.forEach(block => {
                if (block.querySelector('div.flex.items-center.text-token-text-secondary')) {
                    // console.log(block)
                    addButton(block)
                    if (EXPORT) {
                        addexButton(block)
                    }
                    block.classList.add('copy-code-processed')
                }

            })
        }
    }
    async function exportCode(codeBlock, language) {
        let fileName
        let fileExtension
        let mimeType
        // Determine filename, extension, and MIME type based on language
        switch (language) {
            case 'javascript':
            case 'js':
                fileName = 'script'
                fileExtension = '.js'
                mimeType = 'application/javascript'
                break
            case 'html':
                fileName = 'index'
                fileExtension = '.html'
                mimeType = 'text/html'
                break
            case 'css':
                fileName = 'styles'
                fileExtension = '.css'
                mimeType = 'text/css'
                break
            case 'python':
            case 'py':
                fileName = 'main'
                fileExtension = '.py'
                mimeType = 'text/x-python'
                break
            default:
                // If language cannot be determined from <span>, fallback to provided language
                switch (language.toLowerCase()) {
                    case 'javascript':
                    case 'js':
                        fileName = 'script'
                        fileExtension = '.js'
                        mimeType = 'application/javascript'
                        break
                    case 'html':
                        fileName = 'index'
                        fileExtension = '.html'
                        mimeType = 'text/html'
                        break
                    case 'css':
                        fileName = 'styles'
                        fileExtension = '.css'
                        mimeType = 'text/css'
                        break
                    case 'python':
                    case 'py':
                        fileName = 'main'
                        fileExtension = '.py'
                        mimeType = 'text/x-python'
                        break
                    case 'java':
                        fileName = 'Main'
                        fileExtension = '.java'
                        mimeType = 'text/x-java-source'
                        break
                    case 'kotlin':
                        fileName = 'Main'
                        fileExtension = '.kt'
                        mimeType = 'text/x-kotlin'
                        break
                    case 'c++':
                    case 'cpp':
                        fileName = 'main'
                        fileExtension = '.cpp'
                        mimeType = 'text/x-c++src'
                        break
                    case 'c#':
                    case 'csharp':
                        fileName = 'Program'
                        fileExtension = '.cs'
                        mimeType = 'text/x-csharp'
                        break
                    case 'c':
                        fileName = 'main'
                        fileExtension = '.c'
                        mimeType = 'text/x-csrc'
                        break
                    case 'ruby':
                        fileName = 'script'
                        fileExtension = '.rb'
                        mimeType = 'text/x-ruby'
                        break
                    case 'rust':
                        fileName = 'main'
                        fileExtension = '.rs'
                        mimeType = 'text/x-rustsrc'
                        break
                    case 'php':
                        fileName = 'script'
                        fileExtension = '.php'
                        mimeType = 'text/x-php'
                        break
                    case 'swift':
                        fileName = 'main'
                        fileExtension = '.swift'
                        mimeType = 'text/x-swift'
                        break
                    case 'typescript':
                    case 'ts':
                        fileName = 'script'
                        fileExtension = '.ts'
                        mimeType = 'application/typescript'
                        break
                    case 'go':
                        fileName = 'main'
                        fileExtension = '.go'
                        mimeType = 'text/x-go'
                        break
                    case 'perl':
                        fileName = 'script'
                        fileExtension = '.pl'
                        mimeType = 'text/x-perl'
                        break
                    case 'lua':
                        fileName = 'script'
                        fileExtension = '.lua'
                        mimeType = 'text/x-lua'
                        break
                    case 'powershell':
                    case 'ps':
                        fileName = 'script'
                        fileExtension = '.ps1'
                        mimeType = 'application/x-powershell'
                        break
                    case 'json':
                        fileName = 'data'
                        fileExtension = '.json'
                        mimeType = 'application/json'
                        break
                    case 'bat':
                        fileName = 'script'
                        fileExtension = '.bat'
                        mimeType = 'application/bat'
                        break
                    case 'md':
                    case 'markdown':
                        fileName = 'document'
                        fileExtension = '.md'
                        mimeType = 'text/markdown'
                        break
                    default:
                        fileName = 'code'
                        fileExtension = '.txt'
                        mimeType = 'text/plain'
                        break
                }
                break
        }
        // Create a Blob object with the code content
        const blob = new Blob([codeBlock.querySelector('code').textContent], { type: mimeType })
        try {
            if (window.showSaveFilePicker) {
                // Use File System Access API if available
                const fileHandle = await window.showSaveFilePicker({
                    suggestedName: fileName + fileExtension,
                    types: [
                        {
                            description: language,
                            accept: {
                                [mimeType]: [fileExtension]
                            }
                        }
                    ]
                })
                const writable = await fileHandle.createWritable()
                await writable.write(blob)
                await writable.close()
            } else {
                // Fallback for browsers that do not support showSaveFilePicker
                const downloadLink = document.createElement('a')
                downloadLink.href = URL.createObjectURL(blob)
                downloadLink.download = fileName + fileExtension
                downloadLink.style.display = 'none'
                document.body.appendChild(downloadLink)
                downloadLink.click()
                URL.revokeObjectURL(downloadLink.href)
                document.body.removeChild(downloadLink)
            }
        } catch (error) {
            console.error('Save file dialog was canceled or failed', error)
        }
    }
    setTimeout(() => {
        const observer = new MutationObserver(observeCodeBlocks)
        observer.observe(document.body, { childList: true, subtree: true })
        observeCodeBlocks()
    }, 5000)
})()