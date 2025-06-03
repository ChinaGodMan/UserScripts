// ==UserScript==
// @name               Github List of code languages show all
// @name:zh-CN         Github 代码语言列表显示全部
// @name:ar            Github قائمة لغات الكود إظهار الكل
// @name:bg            Github Списък с кодови езици, покажи всички
// @name:cs            Github Seznam kódových jazyků zobrazuje vše
// @name:da            Github Liste over kodesprog viser alle
// @name:de            Github Liste der Codesprachen alle anzeigen
// @name:el            Github Η λίστα των γλωσσών κώδικα εμφανίζει όλα
// @name:en            Github List of code languages show all
// @name:eo            Github Listo de kodlingvoj montras ĉion
// @name:es            Github Lista de lenguajes de código mostrar todo
// @name:fi            Github Luettelo koodikielistä näyttää kaikki
// @name:fr            Github Liste des langages de code afficher tout
// @name:he            Github רשימת שפות הקוד מציגה הכל
// @name:hr            Github Popis kodnih jezika prikaži sve
// @name:hu            Github A kódnyelvek listája az összeset mutatja
// @name:id            Github Daftar bahasa kode menunjukkan semuanya
// @name:it            Github L’elenco delle lingue del codice mostra tutto
// @name:ja            Github コード言語のリストをすべて表示
// @name:ka            Github კოდის ენების სია აჩვენებს ყველაფერს
// @name:ko            Github 코드 언어 목록 모두 표시
// @name:nl            Github Lijst met codetalen laat alles zien
// @name:nb            Github Liste over kodespråk viser alle
// @name:pl            Github Lista języków kodowych pokaż wszystko
// @name:pt-BR         Github Lista de linguagens de código mostra todas
// @name:ro            Github Lista de limbaje de cod arată toate
// @name:ru            Github Список языков программирования показать все
// @name:sk            Github Zoznam kódovacích jazykov zobrazuje všetko
// @name:sr            Github Листа кодних језика приказује све
// @name:sv            Github Lista över kodspråk visar alla
// @name:th            Github รายการรหัสภาษาแสดงทั้งหมด
// @name:tr            Github Kod dilleri listesi tümünü göster
// @name:ug            Github كود تىللىرىنىڭ تىزىملىكى ھەممىنى كۆرسىتىدۇ
// @name:uk            Github Список мов коду показати всі
// @name:vi            Github Danh sách ngôn ngữ mã hiển thị tất cả
// @name:zh-TW         Github 代碼語言列表顯示全部
// @name:zh-HK         Github 代碼語言列表顯示全部
// @name:fr-CA         Github Liste des langages de code afficher tout
// @description        Expand Github List of languages on the repository，Show each language，Instead of hiding small parts in“other”Down
// @description:zh-CN  扩展 Github 存储库上的语言列表，显示每种语言，而不是将小部分隐藏在“其他”下
// @description:ar     يوسع Github قائمة اللغات في المستودع，إظهار كل لغة，بدلاً من إخفاء الأجزاء الصغيرة فيها“آخر”تحت
// @description:bg     Разширяване Github Списък на езиците в хранилището，Покажете всеки език，Вместо да криете малки части в“друго”Надолу
// @description:cs     Rozšířit Github Seznam jazyků v úložišti，Zobrazit každý jazyk，Místo schovávání malých částí“ostatní”Dolů
// @description:da     Udvide Github Liste over sprog på lageret，Vis hvert sprog，I stedet for at gemme små dele ind“andre”Ned
// @description:de     Expandieren Github Liste der Sprachen im Repository，Jede Sprache anzeigen，Anstatt kleine Teile darin zu verstecken“andere”Runter
// @description:el     Διαστέλλω Github Λίστα γλωσσών στο αποθετήριο，Εμφάνιση κάθε γλώσσας，Αντί να κρύβεις μικρά κομμάτια“άλλος”Κάτω
// @description:en     Expand Github List of languages on the repository，Show each language，Instead of hiding small parts in“other”Down
// @description:eo     Vastigi Github Listo de lingvoj sur la deponejo，Montru ĉiun lingvon，Anstataŭ kaŝi malgrandajn partojn en“aliaj”Malsupren
// @description:es     Expandir Github Lista de idiomas en el repositorio，Mostrar cada idioma，En lugar de esconder piezas pequeñas en“otro”Abajo
// @description:fi     Laajentaa Github Luettelo arkiston kielistä，Näytä jokainen kieli，Sen sijaan, että piilottaisit pieniä osia“muu”Alas
// @description:fr     Développer Github Liste des langues sur le référentiel，Afficher chaque langue，Au lieu de cacher de petites pièces“autre”Vers le bas
// @description:he     לְהַרְחִיב Github רשימת השפות במאגר，הצג כל שפה，במקום להחביא חלקים קטנים“אַחֵר”לְמַטָה
// @description:hr     Proširiti Github Popis jezika u repozitoriju，Prikaži svaki jezik，Umjesto skrivanja malih dijelova“drugo”dolje
// @description:hu     Bontsa ki Github Az adattárban található nyelvek listája，Minden nyelv megjelenítése，Ahelyett, hogy apró alkatrészeket rejtene el“más”Le
// @description:id     Memperluas Github Daftar bahasa di repositori，Tunjukkan setiap bahasa，Daripada menyembunyikan bagian-bagian kecil di dalamnya“lainnya”Turun
// @description:it     Espandere Github Elenco delle lingue nel repository，Mostra ogni lingua，Invece di nascondere piccole parti“altro”Giù
// @description:ja     拡大する Github リポジトリ上の言語のリスト，各言語を表示，小さな部品を隠すのではなく、“他の”下
// @description:ka     გაფართოება Github ენების სია საცავში，აჩვენე თითოეული ენა，მცირე ნაწილების დამალვის ნაცვლად“სხვა”ქვემოთ
// @description:ko     확장하다 Github 저장소의 언어 목록，각 언어 표시，작은 부품을 숨기는 것보다“다른”아래에
// @description:nl     Uitbreiden Github Lijst met talen in de repository，Toon elke taal，In plaats van kleine onderdelen erin te verstoppen“ander”Omlaag
// @description:nb     Utvide Github Liste over språk på depotet，Vis hvert språk，I stedet for å gjemme små deler i“annen”Ned
// @description:pl     Zwiększać Github Lista języków w repozytorium，Pokaż każdy język，Zamiast ukrywać małe części w“Inny”W dół
// @description:pt-BR  Expandir Github Lista de idiomas no repositório，Mostrar cada idioma，Em vez de esconder pequenas peças“outro”Abaixo
// @description:ro     Extinde Github Lista limbilor din depozit，Arată fiecare limbă，În loc să ascundă piese mici“alte”Jos
// @description:ru     Расширять Github Список языков в репозитории，Показать каждый язык，Вместо того, чтобы прятать мелкие детали в“другой”Вниз
// @description:sk     Rozbaliť Github Zoznam jazykov v úložisku，Zobraziť každý jazyk，Namiesto skrývania malých častí“iné”Dole
// @description:sr     Прошири Github Листа језика у спремишту，Прикажи сваки језик，Уместо да кријете мале делове унутра“друго”Доле
// @description:sv     Expandera Github Lista över språk på förvaret，Visa varje språk，Istället för att gömma smådelar i“andra”Ner
// @description:th     ขยาย Github รายชื่อภาษาในพื้นที่เก็บข้อมูล，แสดงแต่ละภาษา，แทนที่จะซ่อนส่วนเล็กๆ ไว้ข้างใน“อื่น”ลง
// @description:tr     Genişletmek Github Depodaki dillerin listesi，Her dili göster，Küçük parçaları saklamak yerine“diğer”Aşağı
// @description:ug     كېڭەيتىش Github ئامباردىكى تىللارنىڭ تىزىملىكى，ھەر بىر تىلنى كۆرسەت，كىچىك قىسىملارنى يوشۇرۇشنىڭ ئورنىغا“other”تۆۋەنگە
// @description:uk     Розгорнути Github Список мов у репозиторії，Показати кожну мову，Замість того, щоб ховати дрібні деталі“інші”вниз
// @description:vi     Mở rộng Github Danh sách ngôn ngữ trên kho lưu trữ，Hiển thị từng ngôn ngữ，Thay vì giấu những phần nhỏ trong“khác”Xuống
// @description:zh-TW  擴充 Github 儲存庫上的語言列表，顯示每種語言，而不是將小部分隱藏在“其他”下
// @description:zh-HK  擴充 Github 儲存庫上的語言列表，顯示每種語言，而不是將小部分隱藏在“其他”下
// @description:fr-CA  Développer Github Liste des langues sur le référentiel，Afficher chaque langue，Au lieu de cacher de petites pièces“autre”Vers le bas
// @match              https://github.com/*
// @author             Davoleo,人民的勤务员 <china.qinwuyuan@gmail.com>
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
// @version            1.1.0.0
// @require            https://unpkg.com/js-yaml@4.1.0/dist/js-yaml.min.js
// @resource           languageColors https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml
// @grant              GM_getResourceText
// @grant              GM_log
// @grant              GM_xmlhttpRequest
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              GM_addStyle
// @grant              GM_registerMenuCommand
// @run-at             document-idle
// @connect            api.github.com
// @noframes          
// @Created            2024-09-24 04:33:03
// @modified           2024-09-24 04:33:03
// ==/UserScript==

let TOKEN = GM_getValue('githubToken', '')
GM_addStyle(`
    .expand-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:1000;}
    .expand-content{background:white;padding:20px;border-radius:8px;width:400px;box-shadow:0 4px 15px rgba(0,0,0,0.2);position:relative;}
    .expand-title{margin:0 0 10px 0;font-size:20px;}
    .expand-description{margin-bottom:20px;font-size:14px;color:#666;}
    .expand-description a{color:#007bff;text-decoration:underline;}
    #github-token-input{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-bottom:20px;font-size:14px;}
    #ex-save-token{background-color:#28a745;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:4px;margin-right:10px;}
    #ex-cancel-token{background-color:#dc3545;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:4px;}
`)
function createexpand() {
    const expandHTML = `
        <div class="expand-overlay">
            <div class="expand-content">
                <h2 class="expand-title">Set GitHub Token</h2>
                <p class="expand-description">
                    Enter your GitHub personal access token with "repo" scope.
                    <a href="https://github.com/settings/tokens/new?description=GitHub-Linguist-Expand-UserScript&scopes=repo" target="_blank" rel="noopener noreferrer">
                        Click here to create a new token
                    </a>
                </p>
                <input type="text" id="github-token-input" placeholder="Enter your GitHub personal access token">
                <button id="ex-save-token">Save</button>
                <button id="ex-cancel-token" class="cancel">Cancel</button>
            </div>
        </div>
    `
    const expandContainer = document.createElement('div')
    expandContainer.innerHTML = expandHTML
    document.body.appendChild(expandContainer)
    const input = document.getElementById('github-token-input')
    input.value = GM_getValue('githubToken', '')
    document.getElementById('ex-save-token').addEventListener('click', () => {
        const token = input.value.trim()

        GM_setValue('githubToken', token)
        expandContainer.remove()
        TOKEN = token

    })
    document.getElementById('ex-cancel-token').addEventListener('click', () => expandContainer.remove())
}
GM_registerMenuCommand('Set GitHub Token', function () {
    createexpand()
})
//Loads languages.yml (from Github's linguist repo) the most updated, official and complete collection of github languages and their colors
//loaded into a JS object via jsyaml (a library to parse yaml inside of javascript)
const languages = jsyaml.load(GM_getResourceText('languageColors'))
//Contains information about languages and their percentages in the repository
let langPercentagesMap = {}
//Contains information about languages and their colors
let langColorsMap = {}
/**
 * Function to standardize and modernize GM_xmlhttpRequest to work with promises
 * @param {String} url of the endpoint
 * @param {Object} options Contains extra information about the request
 * @returns a promise with the requested content
 */
function request(url, options = {}) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url,
            method: options.method || 'GET',
            headers: options.headers || {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            responseType: options.responseType || 'json',
            data: options.body || options.data,
            onload: res => resolve(res.response),
            onerror: reject
        })
    })
}
/**
 * Retrieve information about the languages of a repository via the Github API
 * @param {String} user owner of the repository
 * @param {String} repo name
 * @returns the languages of the repository as a JS Object | null if the promise is rejected for any reason.
 */
async function retrieveLanguages(user, repo) {
    try {
        return await request(`https://api.github.com/repos/${user}/${repo}/languages`, {
            headers: {
                Accept: 'application/vnd.github.v3+json',
                ...(TOKEN ? { authorization: `token ${TOKEN}` } : {})
            }
        })
    }
    catch (e) {
        return null
    }
}
/**
 * Builds language bar segments assigning the correct colors and width depending on the language and it's frequency in the repository
 * @param {string} name of the language
 * @param {string} color of the language
 * @param {number} percentage of the language in the repository code
 * @returns a segment span of the language bar with the correct width and color
 */
function buildBarSegmentSpan(name, color, percentage) {
    const segment = document.createElement('span')
    segment.style.setProperty('background-color', color, 'important')
    segment.style.width = percentage + '%'
    //Removes any margin which would make the language bar otherwise inaccurate
    segment.style.setProperty('margin', '0', 'important')
    //Make sure there's at least 1px of width in the bar segment (fixes width of 0.0% segments)
    //TODO: investigate a better way to do this
    segment.style.paddingLeft = '1px'
    segment.setAttribute('itemprop', 'keywords')
    segment.setAttribute('aria-label', name + ' ' + percentage)
    segment.setAttribute('data-view-component', 'true')
    segment.setAttribute('class', 'Progress-item color-bg-success-inverse lingustexpand')
    return segment
}
/**
 * Builds a chip for each language containing
 * - The Color of the language in the bar
 * - The Name of the language
 * - The Percentage of the language in repository files
 * @param {String} owner of the repository
 * @param {String} repo name
 * @param {String} name of the language
 * @param {String} color of the language
 * @param {number} percentage percentage of the language in the repository code
 * @returns A chip components featured as legend for the language bar
 */
function buildLanguageChip(owner, repo, name, color, percentage) {
    const chip = document.createElement('li')
    chip.classList.add('d-inline')
    const chipLink = document.createElement('a')
    chipLink.classList.add('d-inline-flex', 'flex-items-center', 'flex-nowrap', 'Link--secondary', 'no-underline', 'text-small', 'mr-3')
    chipLink.href = `/${owner}/${repo}/search?l=${name}` //Chip link should bring you to the search query with the correct language in place
    //Parse SVG BALL directly injecting the correct color as in-line style
    const svgText = `
    <svg style="color:${color};" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
            width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
    </svg>
    `
    const svgTMP = document.createElement('template')
    svgTMP.innerHTML = svgText
    chipLink.append(svgTMP.content)
    //^ uses a template HTMLElement to parse HTML into its respective DOM elements
    //Adds language name to the chip
    const chipName = document.createElement('span')
    chipName.classList.add('color-fg-default', 'text-bold', 'mr-1')
    chipName.textContent = name
    chipLink.append(chipName)
    //Adds Language percentage to the chip
    const chipValue = document.createElement('span')
    chipValue.textContent = percentage + '%'
    chipLink.append(chipValue)
    chip.append(chipLink)
    return chip
}
/**
 * Builds the custom language stats section and returns it
 * @returns The full section with complete repository language stats
 */
function buildLanguagesSection(owner, repo) {
    const languageSection = document.createElement('div')
    languageSection.classList.add('mb-3', 'mt-1')
    const bar = document.createElement('span')
    bar.classList.add('Progress', 'mb-2')
    bar.setAttribute('data-view-component', 'true')
    Object.keys(langColorsMap).forEach((lang, i) => {
        const segment = buildBarSegmentSpan(lang, langColorsMap[lang], langPercentagesMap[lang])
        //if (i !== 0) {
        //    segment.style.setProperty('margin-left', '1px');
        //}
        console.log(`当前语言为第${i}个`)
        bar.appendChild(segment)
    })
    languageSection.append(bar)
    const languageUL = document.createElement('ul')
    Object.keys(langColorsMap).forEach((lang) => {
        const languageChip = buildLanguageChip(owner, repo, lang, langColorsMap[lang], langPercentagesMap[lang])
        languageUL.append(languageChip)
    })
    languageSection.append(languageUL)
    return languageSection
}
//MAIN ENTRY POINT
function insertCustomLangStats() {
    if (document.querySelector('.Progress.mb-2')) return
    langPercentagesMap = {}
    langColorsMap = {}
    //Selects the box element that contains files and folders on the repo page
    const mainContent = document.querySelector('.Box-sc-g0xbh4-0.iNSVHo')
    if (!mainContent)
        throw Error('mainContent Hook Selector is dead!')
    //The original language bar in the sidebar
    const originalLangBar = document.querySelector('div.Layout-sidebar span.Progress')
    //array that is generated from the tab URL, it's structured this way: ["", "<repo_owner>", "<repo_name>"]
    const ownerRepo = window.location.pathname.split('/')

    //only works against github.com/ABC/DEF links
    if (ownerRepo.length === 3) {
        //retrieves necessary information about the repository's languages
        retrieveLanguages(ownerRepo[1], ownerRepo[2]).then((lang_vals) => {
            //assume request is successful if object is not null and it doesn't contain 'message' in its keys
            if (lang_vals !== null && !lang_vals.message) {
                //Sum of all language values
                const total = Object.values(lang_vals).reduce((prev, curr) => prev + curr)
                //for each language in the object
                Object.keys(lang_vals).forEach((lang) => {
                    langColorsMap[lang] = languages[lang].color
                    langPercentagesMap[lang] = ((lang_vals[lang] / total) * 100).toFixed(1)
                })
            } else return //Short Circuit
            //Build the new custom lang stats
            const languageSection = buildLanguagesSection(ownerRepo[1], ownerRepo[2])
            mainContent.insertAdjacentElement('beforebegin', languageSection)
            //^ inserts our custom language stats before the box containing directories and files
            //Remove original Language Section (sidebar)
            originalLangBar.parentElement.parentElement.remove()
        })
    }
}
insertCustomLangStats()
function observeUrlChanges(callback, delay = 2000) {
    let lastUrl = location.href
    const observer = new MutationObserver(() => {
        const url = location.href
        if (url !== lastUrl) {
            lastUrl = url
            setTimeout(() => {
                //  console.log("页面发生变动,允许执行")
                callback()
            }, delay)
        }
    })
    observer.observe(document, { subtree: true, childList: true })
    return observer
}
observeUrlChanges(insertCustomLangStats)