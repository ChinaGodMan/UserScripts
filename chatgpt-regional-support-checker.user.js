// ==UserScript==
// @name         Show Location on ChatGPT
// @name:zh-CN   ChatGPT顶部显示当前用户IP
// @description:zh-CN 在ChatGPT官方网站的顶部显示当前用户IP所在的地区，如果是非ChatGPT支持的地区会红色标识提示，以免被封号。
// @name:ar   ChatGPTإظهار المستخدم الحالي في الأعلىIP
// @description:ar يخرجChatGPTيظهر الجزء العلوي من الموقع الرسمي المستخدم الحاليIP所يخرج的地区，إذا كان على حق أو خطأChatGPTسيتم تمييز المناطق المدعومة باللون الأحمر.，لتجنب الحظر。
// @name:bg   ChatGPTПоказване на текущия потребител в горната частIP
// @description:bg съществуватChatGPTГорната част на официалния уебсайт показва текущия потребителIP所съществуват的地区，дали е правилно или грешноChatGPTПоддържаните области ще бъдат маркирани в червено.，За да избегнете забрана。
// @name:cs   ChatGPTZobrazit aktuálního uživatele nahořeIP
// @description:cs existovatChatGPTV horní části oficiálního webu je zobrazen aktuální uživatelIP所existovat的地区，jestli správně nebo špatněChatGPTPodporované oblasti budou označeny červeně.，Aby nedošlo k zákazu。
// @name:da   ChatGPTVis den aktuelle bruger øverstIP
// @description:da eksistereChatGPTToppen af ​​den officielle hjemmeside viser den aktuelle brugerIP所eksistere的地区，hvis rigtigt eller forkertChatGPTUnderstøttede områder vil være markeret med rødt.，For at undgå at blive forbudt。
// @name:de   ChatGPTAktuellen Benutzer oben anzeigenIP
// @description:de existierenChatGPTOben auf der offiziellen Website wird der aktuelle Benutzer angezeigtIP所existieren的地区，ob richtig oder falschChatGPTUnterstützte Bereiche werden rot markiert.，Um einem Verbot zu entgehen。
// @name:el   ChatGPTΕμφάνιση του τρέχοντος χρήστη στην κορυφήIP
// @description:el υπάρχωChatGPTΣτην κορυφή του επίσημου ιστότοπου εμφανίζεται ο τρέχων χρήστηςIP所υπάρχω的地区，αν είναι σωστό ή λάθοςChatGPTΟι υποστηριζόμενες περιοχές θα επισημαίνονται με κόκκινο χρώμα.，Για να αποφύγετε την απαγόρευση。
// @name:en   ChatGPTShow current user at topIP
// @description:en existChatGPTThe top of the official website shows the current userIP所exist的地区，if right or wrongChatGPTSupported areas will be marked in red.，To avoid being banned。
// @name:eo   ChatGPTMontru nunan uzanton supreIP
// @description:eo ekzistiChatGPTLa supro de la oficiala retejo montras la nunan uzantonIP所ekzisti的地区，se prave aŭ malĝustaChatGPTSubtenataj areoj estos markitaj ruĝe.，Por eviti esti malpermesita。
// @name:es   ChatGPTMostrar usuario actual en la parte superiorIP
// @description:es existirChatGPTLa parte superior del sitio web oficial muestra el usuario actual.IP所existir的地区，si es correcto o incorrectoChatGPTLas áreas admitidas estarán marcadas en rojo.，Para evitar ser prohibido。
// @name:fi   ChatGPTNäytä nykyinen käyttäjä yläreunassaIP
// @description:fi olemassaChatGPTVirallisen verkkosivuston yläosassa näkyy nykyinen käyttäjäIP所olemassa的地区，jos oikein tai väärinChatGPTTuetut alueet on merkitty punaisella.，Välttääkseen kiellon。
// @name:fr   ChatGPTAfficher l’utilisateur actuel en hautIP
// @description:fr existerChatGPTLe haut du site officiel montre l’utilisateur actuelIP所exister的地区，si c’est vrai ou fauxChatGPTLes zones prises en charge seront marquées en rouge.，Pour éviter d’être banni。
// @name:he   ChatGPTהצג את המשתמש הנוכחי למעלהIP
// @description:he לְהִתְקַיֵםChatGPTהחלק העליון של האתר הרשמי מציג את המשתמש הנוכחיIP所לְהִתְקַיֵם的地区，אם נכון או לא נכוןChatGPTהאזורים הנתמכים יסומנו באדום.，כדי לא להיות אסור。
// @name:hr   ChatGPTPrikaži trenutnog korisnika na vrhuIP
// @description:hr postojatiChatGPTVrh službene web stranice prikazuje trenutnog korisnikaIP所postojati的地区，ako je ispravno ili krivoChatGPTPodržana područja bit će označena crvenom bojom.，Da izbjegnemo zabranu。
// @name:hu   ChatGPTAz aktuális felhasználó megjelenítése felülIP
// @description:hu létezikChatGPTA hivatalos webhely tetején az aktuális felhasználó láthatóIP所létezik的地区，ha helyes vagy rosszChatGPTA támogatott területek piros színnel lesznek jelölve.，Hogy ne tiltsák el。
// @name:id   ChatGPTTampilkan pengguna saat ini di atasIP
// @description:id adaChatGPTBagian atas situs web resmi menunjukkan pengguna saat iniIP所ada的地区，jika benar atau salahChatGPTArea yang didukung akan ditandai dengan warna merah.，Agar tidak dilarang。
// @name:it   ChatGPTMostra l’utente corrente in altoIP
// @description:it esistereChatGPTLa parte superiore del sito Web ufficiale mostra l’utente correnteIP所esistere的地区，se giusto o sbagliatoChatGPTLe aree supportate saranno contrassegnate in rosso.，Per evitare di essere bannati。
// @name:ja   ChatGPT現在のユーザーを一番上に表示IP
// @description:ja 存在するChatGPT公式サイトのトップには現在のユーザーが表示されますIP所存在する的地区，正しいか間違っているかChatGPTサポートされている領域は赤色でマークされます。，出禁にならないようにするには。
// @name:ka   ChatGPTამჟამინდელი მომხმარებლის ჩვენება ზედაIP
// @description:ka არსებობსChatGPTოფიციალური ვებსაიტის ზედა ნაწილში ნაჩვენებია მიმდინარე მომხმარებელიIP所არსებობს的地区，სწორია თუ არასწორიChatGPTმხარდაჭერილი ადგილები წითლად იქნება მონიშნული.，აკრძალვის თავიდან ასაცილებლად。
// @name:ko   ChatGPT현재 사용자를 맨 위에 표시IP
// @description:ko 존재하다ChatGPT공식 홈페이지 상단에는 현재 사용자가 표시됩니다.IP所존재하다的地区，옳든 그르든ChatGPT지원되는 지역은 빨간색으로 표시됩니다.，금지당하지 않으려면。
// @name:nl   ChatGPTToon huidige gebruiker bovenaanIP
// @description:nl bestaanChatGPTBovenaan de officiële website wordt de huidige gebruiker weergegevenIP所bestaan的地区，als het goed of fout isChatGPTOndersteunde gebieden worden rood gemarkeerd.，Om te voorkomen dat het verboden wordt。
// @name:nb   ChatGPTVis gjeldende bruker øverstIP
// @description:nb eksistereChatGPTToppen av det offisielle nettstedet viser gjeldende brukerIP所eksistere的地区，om rett eller galtChatGPTStøttede områder vil være merket med rødt.，For å unngå å bli utestengt。
// @name:pl   ChatGPTPokaż bieżącego użytkownika na górzeIP
// @description:pl istniećChatGPTNa górze oficjalnej strony internetowej widoczny jest bieżący użytkownikIP所istnieć的地区，jeśli masz rację, czy nieChatGPTObsługiwane obszary zostaną zaznaczone na czerwono.，Aby uniknąć zakazu。
// @name:pt-BR   ChatGPTMostrar usuário atual no topoIP
// @description:pt-BR existirChatGPTA parte superior do site oficial mostra o usuário atualIP所existir的地区，se certo ou erradoChatGPTAs áreas suportadas serão marcadas em vermelho.，Para evitar ser banido。
// @name:ro   ChatGPTAfișați utilizatorul actual în partea de susIP
// @description:ro existaChatGPTPartea de sus a site-ului oficial arată utilizatorul actualIP所exista的地区，daca este corect sau gresitChatGPTZonele acceptate vor fi marcate cu roșu.，Pentru a evita interzicerea。
// @name:ru   ChatGPTПоказывать текущего пользователя вверхуIP
// @description:ru существоватьChatGPTВ верхней части официального сайта отображается текущий пользователь.IP所существовать的地区，если правильно или неправильноChatGPTПоддерживаемые области будут отмечены красным.，Чтобы не быть забаненным。
// @name:sk   ChatGPTZobraziť aktuálneho používateľa navrchuIP
// @description:sk existujúChatGPTV hornej časti oficiálnej webovej stránky sa zobrazuje aktuálny používateľIP所existujú的地区，či správne alebo nesprávneChatGPTPodporované oblasti budú označené červenou farbou.，Aby nebol zakázaný。
// @name:sr   ChatGPTПрикажи тренутног корисника на врхуIP
// @description:sr постојеChatGPTНа врху званичне веб странице приказан је тренутни корисникIP所постоје的地区，ако је исправно или погрешноChatGPTПодржане области ће бити означене црвеном бојом.，Да не буде забрањено。
// @name:sv   ChatGPTVisa aktuell användare överstIP
// @description:sv existeraChatGPTÖverst på den officiella webbplatsen visas den aktuella användarenIP所existera的地区，om rätt eller felChatGPTOmråden som stöds kommer att markeras med rött.，För att slippa bli förbjudna。
// @name:th   ChatGPTแสดงผู้ใช้ปัจจุบันที่ด้านบนIP
// @description:th มีอยู่ChatGPTด้านบนของเว็บไซต์อย่างเป็นทางการจะแสดงผู้ใช้ปัจจุบันIP所มีอยู่的地区，ถ้าถูกหรือผิดChatGPTพื้นที่ที่รองรับจะถูกทำเครื่องหมายด้วยสีแดง，เพื่อหลีกเลี่ยงการถูกห้าม。
// @name:tr   ChatGPTGeçerli kullanıcıyı en üstte gösterIP
// @description:tr var olmakChatGPTResmi web sitesinin üst kısmı mevcut kullanıcıyı gösterirIP所var olmak的地区，eğer doğruysa veya yanlışsaChatGPTDesteklenen alanlar kırmızı renkle işaretlenecektir.，Yasaklanmamak için。
// @name:ug   ChatGPTئۈستىدىكى ئىشلەتكۈچىنى كۆرسەتIP
// @description:ug مەۋجۇتChatGPTئورگان تور بېتىنىڭ ئۈستى تەرىپىدە نۆۋەتتىكى ئىشلەتكۈچى كۆرسىتىلدىIP所مەۋجۇت的地区，ئەگەر توغرا ياكى خاتا بولساChatGPTقوللايدىغان رايونلار قىزىل رەڭدە بولىدۇ.，چەكلىنىشتىن ساقلىنىش。
// @name:uk   ChatGPTПоказати поточного користувача вгоріIP
// @description:uk існуютьChatGPTУ верхній частині офіційного сайту показано поточний користувачIP所існують的地区，правильно чи ніChatGPTПідтримувані області будуть позначені червоним кольором.，Щоб уникнути бану。
// @name:vi   ChatGPTHiển thị người dùng hiện tại ở trên cùngIP
// @description:vi hiện hữuChatGPTPhần đầu của trang web chính thức hiển thị người dùng hiện tạiIP所hiện hữu的地区，nếu đúng hay saiChatGPTCác khu vực được hỗ trợ sẽ được đánh dấu màu đỏ.，Để tránh bị cấm。
// @name:zh-TW   ChatGPT頂部顯示目前用戶IP
// @description:zh-TW 在ChatGPT官方網站的頂部顯示當前用戶IP所在的地區，如果是非ChatGPT支援的地區會紅色標示提示，以免被封號。
// @name:zh-HK   ChatGPT頂部顯示目前用戶IP
// @description:zh-HK 在ChatGPT官方網站的頂部顯示當前用戶IP所在的地區，如果是非ChatGPT支援的地區會紅色標示提示，以免被封號。
// @name:fr-CA   ChatGPTAfficher l’utilisateur actuel en hautIP
// @description:fr-CA existerChatGPTLe haut du site officiel montre l’utilisateur actuelIP所exister的地区，si c’est vrai ou fauxChatGPTLes zones prises en charge seront marquées en rouge.，Pour éviter d’être banni。
// @description  Display the current user's IP location at the top of the ChatGPT official website. If it is a non-supported region by ChatGPT, it will be highlighted in red to prevent account suspension.
// @namespace    http://tampermonkey.net/
// @version      0.5
// @author       Daotin
// @match       https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chat.openai.com
// @grant        none
// @license      MIT
// @grant        GM_xmlhttpRequest
// @downloadURL https://update.greasyfork.org/scripts/464744/Show%20Location%20on%20ChatGPT.user.js
// @updateURL https://update.greasyfork.org/scripts/464744/Show%20Location%20on%20ChatGPT.meta.js
// ==/UserScript==

(function () {
    'use strict'

    // Define the list of regions to check against
    const regions = [
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bangladesh",
        "Barbados",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Cabo Verde",
        "Canada",
        "Chile",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Cyprus",
        "Czechia (Czech Republic)",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "El Salvador",
        "Estonia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See (Vatican City)",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "Tanzania",
        "Thailand",
        "Timor-Leste (East Timor)",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Tuvalu",
        "Uganda",
        "Ukraine (with certain exceptions)",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Vanuatu",
        "Zambia",
        "Socialist Republic of Vietnam"
    ]


    GM_xmlhttpRequest({
        method: "GET",
        url: "https://chatgpt.com//cdn-cgi/trace",
        onload: function (response) {
            const data = response.responseText
            const locationRegex = /loc=([a-zA-Z]+)/
            const countryCode = data.match(locationRegex)[1]
            const ipRegex = /ip=([0-9\.]+)/
            const ipAddress = data.match(ipRegex)[1]

            GM_xmlhttpRequest({
                method: "GET",
                url: `https://restcountries.com/v3.1/alpha/${countryCode}`,
                onload: function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        const data = JSON.parse(response.responseText)
                        const countryName = data[0]?.name?.official || data[0]?.name?.common

                        const isInRegion = regions.some(region => countryName.includes(region))

                        createMessage('location', `Your location: ${countryName} (${ipAddress}) ${isInRegion ? '✅' : '⛔'}`, isInRegion)
                    } else {
                        createMessage('error', `Error: Network response was not ok`, false)
                    }
                },
                onerror: function () {
                    createMessage('error', 'Error: Failed to fetch country data', false)
                }
            })
        },
        onerror: function () {
            createMessage('error', 'Error: Failed to fetch IP and location data', false)
        }
    })


    function createMessage(type, text, isInRegion) {
        const backgroundColor = type === 'error' ? '#ef4146b3' : (isInRegion ? '#10a37fb3' : '#ef4146b3')
        const messageHTML = `
        <div style="
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 20px;
            background-color: ${backgroundColor};
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            z-index: 9999;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        ">
            ${text}
            <div style="
                position: absolute;
                top: -3px;
                right: -6px;
                background-color: rgba(231, 195, 195, 0.5);
                border: none;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                border-radius: 50%;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
            ">×</div>
        </div>
    `

        const messageDiv = document.createElement('div')
        messageDiv.innerHTML = messageHTML
        document.body.appendChild(messageDiv)

        // Add event listener to the close button
        messageDiv.querySelector('div').addEventListener('click', () => {
            messageDiv.remove()
        })
        setTimeout(() => {
            messageDiv.remove()
        }, 5000)
    }
})()
