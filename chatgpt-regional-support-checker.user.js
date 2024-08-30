// ==UserScript==
// @name         Show Location on ChatGPT
// @description  Display the current user's IP location at the top of the ChatGPT official website. If it is a non-supported region by ChatGPT, it will be highlighted in red to prevent account suspension.
// @name:zh-CN   ChatGPT顶部显示当前用户IP
// @description:zh-CN 在ChatGPT官方网站的顶部显示当前用户IP所在的地区，如果是非ChatGPT支持的地区会红色标识提示，以免被封号。
// @name:zh-TW   在ChatGPT網站頂部顯示當前用戶IP
// @description:zh-TW 在ChatGPT官方網站的頂部顯示當前用戶IP所在的地區，如果是非ChatGPT支持的地區會紅色標識提示，以免被封號。
// @name:vi      Hiển thị Vị trí trên ChatGPT
// @description:vi Hiển thị vị trí IP của người dùng hiện tại ở trên cùng của trang web chính thức ChatGPT. Nếu đó là một khu vực không được ChatGPT hỗ trợ, nó sẽ được đánh dấu bằng màu đỏ để tránh bị khóa tài khoản.
// @name:ja      ChatGPTでの位置情報表示
// @description:ja ChatGPT公式ウェブサイトの上部に現在のユーザーのIP位置を表示します。もしその位置がChatGPTのサポート対象外の地域であれば、アカウント停止を避けるために赤色で警告します。
// @name:fr      Afficher la localisation sur ChatGPT
// @description:fr Affiche la localisation IP actuelle de l'utilisateur en haut du site officiel de ChatGPT. Si elle se trouve dans une région non prise en charge par ChatGPT, elle sera indiquée en rouge pour éviter la suspension du compte.
// @name:de      Standort auf ChatGPT anzeigen
// @description:de Zeigt den aktuellen IP-Standort des Benutzers oben auf der offiziellen ChatGPT-Website an. Wenn es sich um eine nicht unterstützte Region von ChatGPT handelt, wird dies rot hervorgehoben, um eine Kontosperrung zu vermeiden.
// @name:ru      Показать местоположение на ChatGPT
// @description:ru Отображает текущее местоположение IP пользователя в верхней части официального сайта ChatGPT. Если это регион, не поддерживаемый ChatGPT, он будет выделен красным, чтобы избежать блокировки аккаунта.
// @name:mo      Show Location on ChatGPT
// @description:mo Display the current user's IP location at the top of the ChatGPT official website. If it is a non-supported region by ChatGPT, it will be highlighted in red to prevent account suspension. (Note: Macau uses Chinese or Portuguese for its primary languages. If you need the translation in Portuguese, please let me know.)
// @name:hk      在ChatGPT網站顯示位置
// @description:hk 在ChatGPT官方網站的頂部顯示當前用戶IP所在的地區，如果是非ChatGPT支持的地區會紅色標識提示，以免被封號。
// @name:sg      Show Location on ChatGPT
// @description:sg Display the current user's IP location at the top of the ChatGPT official website. If it is a non-supported region by ChatGPT, it will be highlighted in red to prevent account suspension.
// @name:da      Vis placering på ChatGPT
// @description:da Vis den aktuelle brugers IP-placering øverst på ChatGPT's officielle hjemmeside. Hvis det er en ikke-understøttet region af ChatGPT, vil det blive markeret med rødt for at undgå kontoafbrydelse.
// @name:ko      ChatGPT에서 위치 표시
// @description:ko ChatGPT 공식 웹사이트 상단에 현재 사용자의 IP 위치를 표시합니다. ChatGPT에서 지원하지 않는 지역인 경우, 계정 정지를 방지하기 위해 빨간색으로 강조 표시됩니다.
// @name:pt      Mostrar localização no ChatGPT
// @description:pt Exibe a localização IP atual do usuário no topo do site oficial do ChatGPT. Se estiver em uma região não suportada pelo ChatGPT, será destacada em vermelho para evitar a suspensão da conta.
// @name:es      Mostrar ubicación en ChatGPT
// @description:es Muestra la ubicación IP actual del usuario en la parte superior del sitio web oficial de ChatGPT. Si está en una región no compatible con ChatGPT, se destacará en rojo para evitar la suspensión de la cuenta.
// @name:fi      Näytä sijainti ChatGPT:ssä
// @description:fi Näyttää nykyisen käyttäjän IP-sijainnin ChatGPT:n virallisella verkkosivustolla. Jos se on alueella, jota ChatGPT ei tue, se korostetaan punaisella estämään tilin sulkemista.
// @name:it      Mostra posizione su ChatGPT
// @description:it Mostra la posizione IP attuale dell'utente in cima al sito ufficiale di ChatGPT. Se si trova in una regione non supportata da ChatGPT, verrà evidenziata in rosso per evitare la sospensione dell'account.
// @name:ro      Afișați locația pe ChatGPT
// @description:ro Afișează locația IP curentă a utilizatorului în partea de sus a site-ului oficial ChatGPT. Dacă se află într-o regiune neacceptată de ChatGPT, va fi evidențiată cu roșu pentru a preveni suspendarea contului.
// @name:nz      Show Location on ChatGPT 
// @description:nz Display the current user's IP location at the top of the ChatGPT official website. If it is a non-supported region by ChatGPT, it will be highlighted in red to prevent account suspension.
// @name:pt-BR   Mostrar localização no ChatGPT 
// @description:pt-BR Exibe a localização IP atual do usuário no topo do site oficial do ChatGPT. Se estiver em uma região não suportada pelo ChatGPT, será destacada em vermelho para evitar a suspensão da conta.
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
