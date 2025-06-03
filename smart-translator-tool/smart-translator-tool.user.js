// ==UserScript==
// @name               Smart Translator Tool
// @name:ar            أداة الترجمة |
// @name:bg            Превод на джаджа |
// @name:cs            Překlad Widget |
// @name:da            Oversættelseswidget |
// @name:de            Übersetzungs -Widget |
// @name:el            Μεταφραστικό widget | Μεταφράστε οποιαδήποτε γλώσσα
// @name:en            Translation widget | Translate any language
// @name:eo            Traduko -fenestraĵo |
// @name:es            Widget de traducción |
// @name:fi            Käännöswidget | Käännä kaikki kielet
// @name:fr            Widget de traduction | Traduire n’importe quelle langue
// @name:fr-CA         Widget de traduction | Traduire n’importe quelle langue
// @name:he            יישומון תרגום |
// @name:hr            Prijevod Widget |
// @name:hu            A Widget fordítása |
// @name:id            Widget Terjemahan | Menerjemahkan bahasa apa pun
// @name:it            Widget di traduzione |
// @name:ja            翻訳ウィジェット|
// @name:ka            თარგმანის ვიჯეტი | თარგმნეთ ნებისმიერი ენა
// @name:ko            번역 위젯 |. 모든 언어 번역
// @name:nb            Oversettelseswidget |
// @name:nl            Vertaalwidget |
// @name:pl            Widżet tłumaczenia |
// @name:pt-BR         Widget de tradução |
// @name:ro            Widget de traducere |
// @name:ru            Перевод виджет |
// @name:sk            Preklad miniaplikácie
// @name:sr            Превод Видгет | Преведи било који језик
// @name:sv            Översätt widget | Översätt något språk
// @name:th            วิดเจ็ตแปล
// @name:tr            Çeviri widget’ı |
// @name:ug            تەرجىمە كىچىك قورالى | ھەر قانداق تىلنى تەرجىمە قىلىڭ
// @name:uk            Віджет перекладу | Перекладіть будь -яку мову
// @name:vi            Tiện ích dịch |
// @name:zh            翻译小工具 | 翻译任何语言
// @name:zh-CN         翻译小工具 | 翻译任何语言
// @name:zh-HK         翻譯小工具 | 翻譯任何語言
// @name:zh-SG         翻译小工具 | 翻译任何语言
// @name:zh-TW         翻譯小工具 | 翻譯任何語言
// @description        Translate any language and quickly translate the desired language with one key | Page translation | Select text (Press Ctrl) | Provides shortcuts, allowing quick translation of the desired language with just one key | English learning | Translation settings available, supporting most common languages worldwide | Feel free to provide feedback for any issues
// @description:ar     ترجمة أي لغة واختصار للترجمة |
// @description:bg     Превод на всеки език и пряк път с едно щракване превод на езика, който искате | Превод на страница | Изберете текст (натиснете Ctrl) | Осигурете преки пътища, просто натиснете един клавиш, за да преведете бързо желания език | Английско обучение | Преводът може да бъде зададен и поддържа най -често срещаните езици по света | Обратна връзка, ако имате въпроси
// @description:cs     Překlad jazyka a překladu jazyka, který chcete, překlad |
// @description:da     Oversættelse af ethvert sprog og genvej med et-klik på det sprog, du ønsker |
// @description:de     Übersetzung von Sprach- und Verknüpfungsverknüpfungen Ein-Klick-Übersetzung der gewünschten Sprache | Seitenübersetzung | Text auswählen (drücken Sie Strg) | Stellen Sie Verknüpfungen an, drücken Sie einfach eine Taste, um schnell die gewünschte Sprache zu übersetzen | Englisches Lernen | Die Übersetzung kann festgelegt werden und unterstützt die häufigsten Sprachen auf der ganzen Welt | Feedback, wenn Sie Fragen haben
// @description:el     Μετάφραση οποιασδήποτε γλώσσας και συντόμευσης με ένα κλικ της γλώσσας που θέλετε |
// @description:en     Translation of any language and shortcut one-click translation of the language you want | Page Translation | Select text (press Ctrl) | Provide shortcuts, just press one key to quickly translate the language you want | English learning | Translation can be set and supports most common languages around the world | Feedback if you have any questions
// @description:eo     Traduko de iu ajn lingvo kaj ŝparvojo unu-klaka traduko de la lingvo, kiun vi volas
// @description:es     Traducción de cualquier idioma y atajo Traducción del idioma que desee |
// @description:fi     Minkä tahansa kielen käännös ja pikakuvake yhden napsautuksen käännös haluamastasi kielestä | Sivun käännös | Valitse teksti (paina Ctrl) | Tarjoa pikakuvakkeita, painamalla vain yhtä näppäintä kääntääksesi haluamasi kielen nopeasti | Englannin oppiminen | Käännös voidaan asettaa ja tukee yleisimpiä kieliä ympäri maailmaa | Palautetta, jos sinulla on kysyttävää
// @description:fr     Traduction de toute langue et de la traduction en un seul clic de la langue que vous voulez |
// @description:fr-CA  Traduction de toute langue et de la traduction en un seul clic de la langue que vous voulez |
// @description:he     תרגום של כל שפה וקיצור של לחיצה אחת על השפה שאתה רוצה |
// @description:hr     Prijevod i prečac prijevoda jezika koji želite prijevod |
// @description:hu     Bármely nyelv és a parancsikon a kívánt nyelv fordítása |
// @description:id     Terjemahan dari bahasa apa pun yang Anda inginkan |
// @description:it     Traduzione di qualsiasi linguaggio e premi per la traduzione della lingua |
// @description:ja     任意のショートカットのページ翻訳|
// @description:ka     ნებისმიერი ენის თარგმანი და მალსახმობი ერთ-
// @description:ko     모든 언어의 번역은 원하는 텍스트를 선택하십시오
// @description:nb     Oversettelse av noe språk og snarvei enklikk på oversettelsen av språket du vil ha | Sideoversettelse |.
// @description:nl     Vertaling van elke taal- en snelkoppelingsklikvertaling van de taal die u wilt | Pagina-vertaling | Selecteer tekst (druk op CTRL) |
// @description:pl     Tłumaczenie dowolnego języka i skrót tłumaczenie jednego kliknięcia języka, który chcesz | Tłumaczenie strony | Wybierz tekst (naciśnij Ctrl) | Podaj skróty, wystarczy nacisnąć jeden klawisz, aby szybko przetłumaczyć żądany język | Uczenie się angielskiego | Tłumaczenie może być ustawione i obsługuje najczęstsze języki na całym świecie | Informacje zwrotne, jeśli masz jakieś pytania
// @description:pt-BR  Tradução de qualquer idioma e atalho com um clique de tradução do idioma que você deseja | Tradução da página | Selecione Texto (pressione Ctrl) | Forneça atalhos, basta pressionar uma tecla para traduzir rapidamente o idioma que deseja | Aprendizagem de inglês | A tradução pode ser definida e suporta idiomas mais comuns em todo o mundo | Feedback se você tiver alguma dúvida
// @description:ro     Traducere a oricărei limbi și scurte de traducere cu un singur clic pe un singur clip
// @description:ru     Перевод любого языка и ярлык.
// @description:sk     Preklad akéhokoľvek jazyka a skratkou prekladu, ktorý chcete, preklad s jedným kliknutím |
// @description:sr     Превод било којег језика и пречице Превод једног клика Један превод језика | Изаберите текст (Притисните ЦТРЛ) | Обезбедите пречице, само притисните један тастер да бисте брзо превели језик у којем се можете подесити и подржати најчешћи језици широм света | ако имате било каква питања.
// @description:sv     Översättning av alla språk och genvägar en klick översättning av det språk du vill ha |
// @description:th     การแปลภาษาใด ๆ และการแปลภาษาหนึ่งคลิกของภาษาที่คุณต้องการ
// @description:tr     Herhangi bir dil ve kısayol, metin seçin |
// @description:ug     سىز تاللىغان تىل ۋە «قىسقا ئۇچۇرنى تاللاش تەرجىمىسى | قىسقا ئۇچۇر بىلەن تەمىنلەڭ | پەقەت بىر ئاچقۇچنى باسسىڭىز بىر ئاچقۇچنى باسسىڭىز بولىدۇ | ئىنگلىزچە ئۆگىنىشنى | سوئاللىرىڭىز بولسا تەكلىپ-پىكىرلەرنى تىزىڭ ۋە قوللايدۇ
// @description:uk     Переклад будь-якої мови та ярлика клацання перекладу мови, яку ви хочете | Переклад сторінки | Виберіть текст (натисніть Ctrl) | Надайте ярлики, просто натисніть одну клавішу, щоб швидко перекласти потрібну мову | Англійське навчання | Переклад може бути встановлений та підтримує найпоширеніші мови у всьому світі | Відгук Якщо у вас є якісь питання
// @description:vi     Bản dịch của bất kỳ ngôn ngữ nào của Ngôn ngữ bạn muốn |
// @description:zh     任何语言翻译及快捷一键翻译想要语言 | 页面翻译 | 选中文字（ 按Ctrl ）| 提供快捷方式，只需按一个键即可快速翻译想要语言 |英文学习 | 翻译文可设置，支持全球多数通用语言 | 有什么问题都可以反馈
// @description:zh-CN  任何语言翻译及快捷一键翻译想要语言 | 页面翻译 | 选中文字（ 按Ctrl ）| 提供快捷方式，只需按一个键即可快速翻译想要语言 |英文学习 | 翻译文可设置，支持全球多数通用语言 | 有什么问题都可以反馈
// @description:zh-HK  任何語言翻譯及快捷一鍵翻譯想要語言 | 頁面翻譯 | 選中文字（ 按Ctrl ）| 提供快捷方式，只需按一個鍵即可快速翻譯想要語言 |英文學習 | 翻譯文可設置，支持全球多數通用語言 | 有什麼問題都可以反饋
// @description:zh-SG  任何语言翻译及快捷一键翻译想要语言 | 页面翻译 | 选中文字（ 按Ctrl ）| 提供快捷方式，只需按一个键即可快速翻译想要语言 |英文学习 | 翻译文可设置，支持全球多数通用语言 | 有什么问题都可以反馈
// @description:zh-TW  任何語言翻譯及快捷一鍵翻譯想要語言 | 頁面翻譯 | 選中文字（ 按Ctrl ）| 提供快捷方式，只需按一個鍵即可快速翻譯想要語言 |英文學習 | 翻譯文可設置，支持全球多數通用語言 | 有什麼問題都可以反饋
// @author             shing0727@foxmail.com,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// @license            MIT
// @match              *://*/*
// @icon               https://s21.ax1x.com/2024/05/17/pkuVzUH.png
// @require            https://code.jquery.com/jquery-3.6.0.min.js
// @require            https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.03.21.1227
// @grant              GM_xmlhttpRequest
// @created            2025-03-21 12:27:54
// @modified           2025-03-21 12:27:54
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/smart-translator-tool/smart-translator-tool.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/smart-translator-tool/smart-translator-tool.user.js
// ==/UserScript==

// 百度logo
var baiduImgData = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACQJJREFUeF7lm3t0FdUVxn+DFnkVUKCi0AoqIBUhQVmJUBEFfERRoBGDAaGmUlhJUAGNJEAID4MQlFcWCLIggMibKPJQRMVSgVRCmoILCpbCQgEVDAgIaRfTtZl7ua+ZO+fOvTcC2f9krcw+e+/z3TPn7P3tMxpBJC5dr33uAkkadEUjBrg9mP5l9Gw/OiU6bKxWhSXbp2unrGLTzB/oWkwaYzUYqkO1y2hiIYeiwTkdJpfMYCRour+BAADapuvxF2AOOq1C9nY5D9DYVQWeL56ubfMO0weAmFQ9AY0PAIuVcTnPUCk2HZ3HS/K1dW7tSxO9+MvrfHEVT949Z/2Czr2l+dp2+YcLAF2LSaf0qlv2VotCp7QkX2tzCYCYNH0ckKW0iK4SJU0ne2e+NkaTo65c59iVvts7+F3K6tangdYmVR+gabzlwIDykJtvgK6xsPsQfLlPeVj0FTX6aDGp+nI0EqPlbXQyPBnvsV56AF6cDT+etvfY8rdQvSoUf22v61CjQItJ0+U3iUqGN3swtGsWGNp/jkHfyXD6Z/OwY26FoT2h1S3G8+9PwogFUPQvh9O0GKbBPwWAgOwoEm6SOkLGU9aW5n8MU98LfN66KcxJh6q/CnyWOhO++CoS0V2yUR41ADaMhRvrWgd75jx0yYRz5R6derVhZSbUqWk+7odT8PhoOP/fyIEQFQDk3V38in2Qg/Jh2x6PXt6fofPF09lapr0P8zba21bViAoAf+wAI5LsQ5ixBuZ+ZOi1aAxLMuzH7DkMvV+311PViAoAAx6FQQn2Iby7GSauMPRUx4hu/JDIvQZRASDlIUjrZg/Awk/gjdWGXm5/eORu+zGiEZuupqeiFRUAusdDdrK9+7xV8M6nht60gXDfnfZjjv4Ij46y11PViAoATW6E1SPsQ+j3BkhiJDKhPzyssAIKt0LOYnvbqhqOAWjfEnq2h5NnYe3foXi/r8sVmXDbTdZhSCb44HDPc3ll5NWxkz55sPugnZb685ABqFUdxvWF++/ydSJZWmYBHHexb4+1g3HPWgcyeRUsci1/0brzFlg0LHjgm/4Bw95Wn5yKZsgAzEqDuBbmpg8chZ7jPc9G9YYe7QN11xbBiIWB/5/4nFE0mcnhH0BemRM/qUxLXSckACRNLRgS3Pjiz2DSSo+ObIg9O8BdTeDfR41ffbXwTiZS4zoY0wc6C//sJVI7DJwBx8p8/x97G3x9BE6dVZ+wv2ZIAExKgS5+wZm57pYD8os5lbq14IHWRiothdCaIih3pb/NbjZyhnbNoU4Nw8OugzBznbM6ISQAtkyCmgokefYieP8i4xZZubUhLBwGslLMxH9fUfGuDIA4X6lImk0phIJNKu5D05n7ArS1KdzlVdm+V92uMgBS10t9ryKz1sFb61U01XWEVVqbY68vr0PfPHs9t4YyALKJLRiqZjh3GSz7q7WuVIti7/pa8O0J2LHP+BtMEv8AWU+r+e+UYeQnKqIMgLx3f1NENmWKOY3V8HoY2RskifKXrXtgwjI49L152IOfgD91VZkSPDcFdirSaMoAiOuZqRB/R/AghODonAlnz/vqyZE19S/w6+rBx4951/yYtMopzKw9P02dfA0JAJm8gBBMln4OE5b7avyuASzOgJoWu7e/PbONLLMXPHWf2gpImRqYmluNDAkAMTKkB/R90Nzcwe8geSII3eUtq7KgaUO14EXr5Bl4ZqLvvqBaK8j47mNBYlGRkAEQo0J29O/iS1y+t80gOf3pbtGVxCVU2X/E2M3dnGHCPTC+n5qVuCGexMluhCMA3EabN4LaNYwU1yxH79jKeO+dykfFkDHPGC0b6Pox9pa27Ib0WfZ6bo2wAAjm5o7GMO8lqFZVPRgzTW8SNCsJEjsEt5c8Cb46pO4zKgA0rg+LXvbk6u5wvDe3vJTAoscq7PFLYcUW42n2M9D93kDNstOQuxxk1YQiEQegUT2YMxhuuiEwDKcAiKWcd6DQdbejyW8g9nZP32HfNyBcgROJKAByTOb2A6nmzCQcAMSecAjCJURSIgaAnAovPBk8tHABEOvD58OGHZGDICIA+HeAJTzJBNdsh7IznmA/KPLwBO49YIeLS7z2GmjT1HdiQoQcdzFAsuyldSby2jJYHqTWCAWesAEwo8jmbDDaVz979f38gxIA7mkGnV41nkhh9Emur5Z0hIVwFRGaXdgltwidLrR6uBIWAJIRSmboLd5cf7DgwgVAbG/eBS+GebXDMQBy1Ekn17uNLRy/EJduGZgAd3sRGMIRuG+IRAIA8fP2h5AvF/scimMAcvrAE3G+Xr2pMGF3heX1Fu8qLVIAiP1eE0COQifiCACp6uR99b/E4J2FzRgEHX5fMQCYVaCqYDgCwIoeS3zNoKlFdk4PDCFaK0BOix5y0c+BOAJAmh1CUPiLFCFSjIhkJELS/RWzAsSL046xIwC6xRkNDH9Zshled/X7ZflL+erm7kU3YAU0B+HvRKRo2jrZ16LPMWhRA7hHVCgAcotLKj1/kbs7j2V7kpdmjSC+haeXICeA9ykgHaCOr8BPrtti0kyVxovmusAr+b17c/PPA7x9HzkBCdkO1r/cFXZ6S8yqSSKcvKS8duLOBN8shAUKPYRgAHxcAi/PtfNo/twxAMN7QS8Ljk4IEnkVioI0KNwACOMjba2NO0F+SSsJBkBWAaz7soIBEIamcCRcZ3Kfz1kozkYJBffIKHUKzN+L4xUghoSlFbb2l5RX58OHzqvDixclw7oq+2xneKn7LwPB7PXG6+NUjKuyEbgsLXeCkh8wdnypEUTkRJDWtvT0vysDudwkXR9JlPZ962F769c2CE9hkOSvlMTxLYP3EL45DrJ5bipxOvVL4woq5Lq8kzClkyT3AxrUMY5RudF84BjsPazO+dv6levylf6DCUGpUn8yYyyTSv7RlEBQyT+bM9ZBpf5w0r1jtk7V46rAbDRa2+6iV5KCTukFGOD+YNIduuUnsrGp+ihdQ2q+IN99XBEIlGk6b8o3gmbRBv1GuNNo/dqy4zyNTlcN2uogd0TDbHdGHbRyDfbqUIzGxrr1WPrZaO1/Vl7/D+NRV2zYnfBuAAAAAElFTkSuQmCC`

// 谷歌logo
var googleImgData = `data:image/png;base64,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`
var cssContent = `
.fy_btn_box{
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: #333;
}
#fy_transContainer{
    display: none;
    position: fixed;
    top: 50px;
    left: 50px;
    max-width: 500px;
    min-width: 300px;
    padding: 10px;
    padding-top: 24px;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.1);
    background-color: rgba(255,255,255,0.7);
    backdrop-filter: saturate(420%) blur(50px);
    -webkit-backdrop-filter: saturate(420%) blur(50px);
    z-index: 9999;
    font-size: 14px;
    border-bottom-right-radius: 0;
    overflow: hidden;
}
#fy_dragBar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    cursor: grab;
    // background-color: #F9E79F;
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: saturate(420%) blur(50px);
    -webkit-backdrop-filter: saturate(420%) blur(50px);
}
#fy_Scale_rb, #fy_Scale_lb{
    position:absolute;
    bottom:0;
    width:9px;
    height:9px;
    // background: #ddd;
    // clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
}
#fy_Scale_rb{
    right:0;
    cursor: nw-resize;
}
#fy_Scale_lb{
    left:0;
    cursor: ne-resize;
}

#fy_contentBox{
    width: 100%;
    overflow: auto;
    line-height: 1.3em;
    letter-spacing: 0.5px;
}
#fy_contentBox .textRight{
    text-align: right;
}
.transText_node{
    width: 100%;
    padding: 7px;
    box-sizing: border-box;
}
.transText_node:hover{
    background-color: rgba(0,0,0,0.04);
    border-radius: 6px;
}
.transText_node_to{
    position: relative;
    transition: all 0.2s;
}
.transText_node_from{
    position: relative;
    height: 0;
    overflow: hidden;
    transition: all 0.2s;
}

#fy_contentBox .fy_node_expand{
    background-color: rgba(0,0,0,0.04);
    border-radius: 6px;
    margin: 5px 0;
}

.fy_node_expand .transText_node_from, .fy_node_expand .transText_node_to{
    padding: 6px 8px;
}
.fy_node_expand .transText_node_to{
    background-color: rgb(209, 255, 240);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.fy_node_expand .transText_node_from{
    background-color: rgb(254, 234, 242);
    height: auto;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.icon_style{
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    width: 20px;
    z-index: 9999;
    opacity: 0.5;
}
.transText_node_from:hover .copy_icon{
    opacity: 1;
}
.transText_node_to:hover .copy_icon{
    opacity: 1;
}
.fy_node_expand .copy_icon{
    right: 5px;
    bottom: 5px;
}

#fy_ctrl_ber{
    position: absolute;
    top: 2px;
    right: 0;
}
#fy_select, #fy_api_select{
    position: relative;
    background-color: transparent;
    border: none; /* 去除默认边框 */
    box-shadow: none; /* 去除默认的阴影 */
    outline: none; /* 去除可能的轮廓线 */
    font: inherit;
    line-height: 1.2em;
    height: auto;
    text-align: center;
    width: auto;
    min-width: auto;
    min-height: auto;
}
#fy_api_select{
}

#fy_loading{
    display: none;
    width: 100%;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#fy_loading svg {
    width: 2.25em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
    }

#fy_loading circle {
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
    }

@keyframes rotate4 {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash4 {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dashoffset: -125px;
    }
}

#fy_entry_container {
    position: fixed;
    background-color: aqua;
    top: 500px;
    right: 0;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    width: 35px;
    height: 34px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    box-sizing: border-box;
    transition: width 0.2s;
    background-color: #1890ff;
    opacity: 0.5;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display:none;
}

#fy_entry_container:hover {
    width: 55px;
    opacity: 1;
}

#fy_entry_container img {
    width: 20px;
    height: 20px;
    pointer-events: none;
}

#fy_translate_tools_container {
    position: fixed;
    top: 45vh;
    left: 100%;
    display: flex;
    flex-wrap: wrap;
    z-index: 9980;
    width: 300px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    background-color: #f2f4fb;
    padding: 6px 8px 10px;
    border-radius: 4px;
    color: #333;
    cursor: grab;
    transition: left 0.5s;
}

.fy_tools_top,
.fy_tools_main,
.fy_tools_footer {
    position: relative;
    width: 100%;
}

.fy_tools_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6px;
}

.fy_tools_top .fy_title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
}

.fy_tools_ctrl_box {
    display: flex;
    align-items: center;
}

#fy_tools_close {
    font-size: 10px;
    padding: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    filter: grayscale(100%);
}

#fy_tools_close:hover {
    filter: grayscale(0%);
    cursor: pointer;
}

.fy_tools_select_container {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-right: 5px;
    border-radius: 4px;
}

.fy_tools_select_container img {
    display: inline-block;
    margin: auto 2px;
    width: 16px;

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
}

.fy_tools_select_from {
    position: relative;
    letter-spacing: 0;
    background-color: rgba(169, 173, 204, .1);
    height: 20px;
    line-height: 20px;
    padding: 0 6px;
    border-radius: 4px;
}

.fy_tools_select_to {
    position: relative;
}

#fy_tools_selected_active {
    background-color: #ffffff;
    font-size: 12px;
    width: 30px;
    height: 20px;
    line-height: 20px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
}

.fy_tools_ul {
    list-style-type: none;
    margin: 0;
    padding: 4px 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -110%);
    color: #333333;
    z-index: 9990;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    border-radius: 4px;
    width: 300px;
    justify-content: center;
    flex-wrap: wrap;
    display: none;
    overflow: hidden;
}

.fy_tools_ul li {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 20px;
    cursor: pointer;
    width: 40px;
}
.fy_tools_ul li:hover {
    background-color: rgba(169, 173, 204, .3);
}

.fy_translate_to{
    position: relative;
    overflow: auto;
}

.fy_tools_text_content {
    box-sizing: border-box;
    max-width: 100%;
    width: 100%;
    min-height: 100px;
    padding: 6px 8px;
    font-size: 14px;
    border: none;
    outline: none;
    overflow: auto;
    border-radius: 8px;
    margin: 0;
}

#fy_translate_result {
    margin-top: 5px;
    width: 100%;
    background-color: rgba(169, 173, 204, .1);
    display: none;
    cursor: auto;
}
.tools_ctrl_box{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px;
    display: flex;
    z-index: 9999;
}
.tools_ctrl_box img{
    width: 20px;
    transition: all 0.3s ease;
    margin-left: 5px;
    cursor: pointer;
    opacity: 0.7;
}
.tools_ctrl_box img:hover{
    opacity: 1;
}

#fy_tools_api_selected{
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    items-align: center;
    margin-right: 5px;
}
#fy_tools_api_selected img{
    display: block;
}
#fy_tools_api_ul img{
    width: 17px;
    margin: 0;
}
#fy_tools_api_active img{
    width: 17px;
}
#fy_tools_api_selected .fy_tools_ul{
    width: auto;
    padding: 0;
}
#fy_tools_api_ul{
    left: auto;
    transform: translate(0%, -100%);
}
#fy_tools_api_ul li{
    width: auto;
    padding: 5px 7px;
}

/* 滚动条整体样式 */
::-webkit-scrollbar {
    width: 6px;  /* 宽度 */
    height: 6px; /* 高度（对于垂直滚动条） */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 6px;
}

/* 滚动条滑块:hover状态样式 */
::-webkit-scrollbar-thumb:hover {
    background: #888;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
}

/* 滚动条轨道:hover状态样式 */
::-webkit-scrollbar-track:hover {
    background: #ddd;
}

/* 滚动条轨道:active状态样式 */
::-webkit-scrollbar-track-piece:active {
    background: #eee;
}

/* 滚动条:角落样式（即两个滚动条交汇处） */
::-webkit-scrollbar-corner {
    background: #535353;
}

`

// ------------全局----------------
// 显示总容器
var transContainerDOM = null
// 翻译内容容器
var fyContentDOM = null
// 拖动条
var fyDragBarDOM = null
// 待翻译文本
var fromTransTextArray = []
// 翻译结果对象
var transRes = {}
// 时间戳
var salt = Date.now()
// 当前翻译对象数组
var currTransToObjs = []
// --------------------------
// 语言选择类型
var selectTypes = [
    { type: 'zh', valueName: '中', name: '中文' },
    { type: 'en', valueName: '英', name: '英文' },
    { type: 'jp', valueName: '日', name: '日文' },
    { type: 'kor', valueName: '韩', name: '韩文' },
    { type: 'fra', valueName: '法', name: '法文' },
    { type: 'spa', valueName: '西', name: '西班牙文' },
    { type: 'ru', valueName: '俄', name: '俄文' },
    { type: 'de', valueName: '德', name: '德文' },
    { type: 'it', valueName: '意', name: '意大利文' },
    { type: 'th', valueName: '泰', name: '泰文' },
    { type: 'vie', valueName: '越', name: '越南文' },
    { type: 'pt', valueName: '葡', name: '葡萄牙文' },
    { type: 'ara', valueName: '阿', name: '阿拉伯文' },
    { type: 'cht', valueName: '中(繁)', name: '中文繁体' },
    { type: 'yue', valueName: '中(粤)', name: '粤语' }
]
// 翻译api列表
var apiMap = [
    { name: 'Baidu', logo: baiduImgData, descript: '百度翻译' },
    { name: 'Google', logo: googleImgData, descript: '谷歌翻译(需要外网)' }
]
// 默认百度翻译
var currFromApi = 'Baidu'
// 默认翻译语言
var fyToType = '中'

// 初始加载样式
const loadStyle = () => {
    var style = document.createElement('style')
    if (style.styleSheet) {
        // 对于老版本的IE浏览器
        style.styleSheet.cssText = cssContent
    } else {
        style.appendChild(document.createTextNode(cssContent))
    }
    var head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(style)
}
/**
 * 传入配置信息创建元素并返回DOM对象
*/
const myCreateEle = (option, mountE) => {
    let e = document.createElement(option.el || 'div')
    option.className && e.classList.add(option.className)
    for (let p in (option.props || {})) {
        e.setAttribute(p, option.props[p])
    }
    e.textContent = option.text || ''
    e.style.cssText = option.style || ''
    mountE && mountE.appendChild(e)
    return e
}

// 初始生成元素
const initLoadElement = () => {
    transContainerDOM = myCreateEle({
        props: { id: 'fy_transContainer' }
    }, document.body)
    // 内容容器
    fyContentDOM = myCreateEle({ props: { id: 'fy_contentBox' } }, transContainerDOM)

    // loading
    $(transContainerDOM).append(`
    <div id="fy_loading">
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
    `)

    // 拖动条
    fyDragBarDOM = myCreateEle({
        props: { id: 'fy_dragBar' }
    }, transContainerDOM)

    // 缩放点
    myCreateEle({
        props: { id: 'fy_Scale_rb' }
    }, transContainerDOM)
    myCreateEle({
        props: { id: 'fy_Scale_lb' }
    }, transContainerDOM)

    // 控制条
    let fyCtrlBarDom = myCreateEle({
        props: { id: 'fy_ctrl_ber' }
    }, transContainerDOM)
    // 选择翻译api源
    let fyApiSelectDom = myCreateEle({
        el: 'select',
        props: { id: 'fy_api_select' }
    }, fyCtrlBarDom)
    apiMap.forEach(item => {
        $(fyApiSelectDom).append(`
            <option value="${item.name}" title="${item.descript}">
                <span>${item.name}</span>
            </option>
        `)
    })
    // 语言选择
    let fyLangSelectDom = myCreateEle({
        el: 'select',
        props: { id: 'fy_select' }
    }, fyCtrlBarDom)
    selectTypes.forEach(item => {
        $(fyLangSelectDom).append(`
        <option value="${item.valueName}" title="${item.name}">
            <span>${item.valueName}</span>
        </option>
        `)
    })

    $(document.body).append(`
    <div id="fy_entry_container">
        <img src="${transImgData}" alt="翻译" />

    </div>
    `)

    let currlogo = (apiMap.find(item => item.name == currFromApi) || {})?.logo
    $(document.body).append(`
    <div id="fy_translate_tools_container">
    <div class="fy_tools_top">
        <div class="fy_title">翻译工具</div>
        <div class="fy_tools_ctrl_box">
            <div class="fy_tools_select_container">
                <div id="fy_tools_api_selected">
                    <div id="fy_tools_api_active">
                        <img src="${currlogo}" alt="">
                    </div>
                    <ul class="fy_tools_ul" id="fy_tools_api_ul">
                    </ul>
                </div>
                <div class="fy_tools_select_from">auto</div>
                <img src="${zhuanhuangImgData}" alt="">
                <div class="fy_tools_select_to">
                    <div id="fy_tools_selected_active">中</div>
                    <ul class="fy_tools_ul" id="fy_tools_transTo_ul">
                    </ul>
                </div>
            </div>
            <div id="fy_tools_close">❌</div>
        </div>
    </div>
    <div class="fy_tools_main">
        <div class="fy_translate_from">
            <textarea id="fy_translate_input" class="fy_tools_text_content" placeholder="输入翻译文字"></textarea>
        </div>
        <div class="fy_translate_to">
            <div id='fy_translate_result' class="fy_tools_text_content"></div>
            <div class="tools_ctrl_box">
                <img title="复制" class="tools_result_copy" alt="复制" src="${copyImgData}">
                <img title="发音" class="tools_result_audio" alt="发音" src="${audioImgData}">
            </div>
        </div>
    </div>
    <div class="fy_tools_footer">
    </div>
</div>
    `)

    selectTypes.forEach(item => {
        $('#fy_tools_transTo_ul').append(`
            <li value="${item.valueName}">${item.valueName}</li>
        `)
    })

    apiMap.forEach(item => {
        $('#fy_tools_api_ul').append(`
            <li value="${item.name}"><img value="${item.name}" src="${item.logo}" alt="" /></li>
        `)
    })

    // ❌➖📌💡🎯📝✔️❓❗️📅🚫🔄✅📖📘
    // filter: grayscale(100%); 置灰
}

// 生成MD5值
const calculateMD5 = (input) => {
    return CryptoJS.MD5(input).toString()
}

// 百度翻译
const baiduTranslate = async (fromTransText, isTools = false) => {
    let targetLang = (baiduOptions.find(item => item.valueName == fyToType) || {})?.type
    let appid = '20240513002050392'
    let sign = calculateMD5(appid + fromTransText + salt + 'evAKKTnaxMEpHrnCxwDC')
    let param = `?q=${fromTransText}&from=auto&to=${targetLang}&appid=${appid}&salt=${salt}&sign=${sign}`
    console.log('baiduRequesy ', param)
    await GM_xmlhttpRequest({
        url: 'https://fanyi-api.baidu.com/api/trans/vip/translate' + param,
        method: 'GET',
        onload: function (response) {
            if (response.status === 200) {
                let res = JSON.parse((response.responseText || ''))
                if (!(res.trans_result && res.trans_result.length > 0)) return
                transRes = {
                    apiType: 'baidu',
                    formText: res.trans_result[0].src,
                    toText: res.trans_result[0].dst
                }
                currTransToObjs.push({ ...transRes })
                renderRes(res.trans_result[0].src, res.trans_result[0].dst)
                $('#fy_loading').hide()
                // !reUpdate && computedContainer()
                // 复制翻译后文字

                copyText(res.trans_result[0].dst)

                isTools && toolsResult(res.trans_result[0].dst)

            } else {
                console.error('百度翻译请求失败，状态码： ' + response.status)
            }
        },
        onerror: function (e) {
            handleError(e)
        }
    })
}

/* -------------- 修复google翻译 @ChinaGodMan 2025-03-21 @ 12:25:06 Friday +0800 -------------- */
const googleTranslate = async (texts, isTools = false) => {
    const buildQueryString = (params) => {
        return '?' + Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
    }
    isTools && (texts = [texts])
    let targetLang = (googleOptions.find(item => item.valueName == fyToType)).type
    const translateText = async (text) => {
        return new Promise((resolve, reject) => {
            const api = 'https://translate.googleapis.com/translate_a/single'
            const params = { client: 'gtx', dt: 't', sl: 'auto', tl: targetLang, q: text }
            GM_xmlhttpRequest({
                method: 'GET',
                url: api + buildQueryString(params),
                onload: function (response) {
                    try {
                        const data = JSON.parse(response.responseText.replace('\'', '\u2019'))
                        const translatedText = data[0].reduce((acc, item) => acc + item[0], '')
                        resolve(translatedText)
                    } catch (error) {
                        console.error('翻译失败：', error)
                        reject('翻译失败')
                    }
                },
                onerror: function (response) {
                    console.error('请求翻译失败：', response.statusText)
                    reject('请求翻译失败')
                }
            })
        })
    }

    try {
        const translatedResults = await Promise.all(texts.map(text => translateText(text)))
        transRes = {
            apiType: 'google',
            formTextArray: texts,
            toTextsArray: translatedResults
        }
        translatedResults.forEach((translatedText, i) => {
            renderRes(texts[i], translatedText)
        })
        $('#fy_loading').hide()
        //! 禁止复制翻译后的文本到剪辑版.2025-03-21 @ 12:33:38 Friday +0800
        //copyText(transRes.toTextsArray[0])
        isTools && toolsResult(transRes.toTextsArray[0])
    } catch (error) {
        console.error('翻译失败：', error)
    }
}

/* ------------------------------ 谷歌翻译构建URL请求参数 ----------------------------- */
function buildQueryString(params) {
    return '?' + Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&')
}
const renderRes = (formText, toText) => {
    $(fyContentDOM).append(`
        <div class="transText_node">
            <div class="transText_node_to" title="${formText}">${toText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img title="复制" class="icon_style copy_icon" value="${toText}" alt="复制" src="${copyImgData}"></div>
            <div class="transText_node_from">${formText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img class="icon_style copy_icon" title="复制" value="${formText}" alt="复制" src="${copyImgData}" ></div>
        </div>
    `)
}
const handleError = (e) => {
    // <div>或是否在用VPN代理❗️(百度的api😅)</div>
    $(fyContentDOM).append(`
        <div class="transText_node" style="text-align: center;">
            <div>请求失败❗️☹️</div>
            <div>请检查网络连接❗️</div>
        </div>
    `)
    $('#fy_loading').hide()
}

var currX = 0 // 当前鼠标位置
var currY = 0 // 当前鼠标位置
var isContainer = false // 容器是否出现
var isCtrl = false // 是否处于可翻译状态
// 绑定事件
const bingEvents = () => {
    // // transContainerDOM 翻译容器

    // 绑定Ctrl+右键点击翻译
    // bindCtrlRightClick()
    // 绑定翻译键
    bingTransKeys()

    // 点击页面
    document.body.onclick = function (event) {
        if (isContainer) {
            clearTransContainer()
        }
    }
    // 清除翻译容器
    const clearTransContainer = () => {
        isContainer = false
        transContainerDOM.style.display = 'none'
        transContainerDOM.style.maxWidth = '500px'
        transContainerDOM.style.minWidth = '300px'
        transContainerDOM.style.width = 'auto'
        transContainerDOM.style.height = 'auto'
        fyContentDOM.textContent = ''
        fromTransTextArray = []
    }

    transContainerDOM.onclick = function (e) {
        e.stopPropagation() // 阻止事件冒泡
    }
    // 上下文菜单
    document.addEventListener('contextmenu', function (event) {
        if (isCtrl) {
            // 取消默认行为（阻止上下文菜单出现）
            event.preventDefault()
        }
    })
    bindHandleDrag() // 绑定拖动模块事件
    bindHandleScale() // 绑定缩放模块事件
    bindHandleSelectLang() // 绑定切换翻译事件
    bindHandleSelectApi() // 绑定切换翻译请求的api事件
    bindTextClick() // 点击翻译文本事件

    // 鼠标按键抬起事件
    document.addEventListener('mouseup', function (event) {
        if (isContainer) {
            const rect = transContainerDOM.getBoundingClientRect()
            currX = rect.left
            currY = rect.top
        } else {
            currX = event.clientX
            currY = event.clientY
        }
    })

}

// Ctrl + 鼠标右键点击事件
// const bindCtrlRightClick = () => {
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Control') {
//             isCtrl = true;
//         }
//     });
//     document.addEventListener('keyup', (e) => {
//         if (e.key === 'Control') {
//             isCtrl = false;
//         }
//     });
//     // 鼠标按下事件
//     document.addEventListener("mousedown", function (event) {
//         currX = event.clientX;
//         currY = event.clientY;
//         if (isCtrl && event.button === 2) {
//             // 获取Selection对象,选中的文本
//             let textAll = window.getSelection().toString();
//             if (!textAll) return
//             startTrans()
//         }
//     })
// }

// 绑定翻译事件按键
const bingTransKeys = () => {
    var inOnlyKeyVal = ''
    document.addEventListener('keydown', function (event) {
        inOnlyKeyVal = event.key
    })
    document.addEventListener('keyup', function (event) {
        let textAll = window.getSelection().toString()
        if (!inOnlyKeyVal) return
        if (textAll) {
            // if ([event.key, inOnlyKeyVal].every(key => key === 'Control')) {
            //     startTrans()
            // }
            if ([event.key, inOnlyKeyVal].every(key => key === '`')) {
                startTrans()
            }
        }
        if (textAll || fromTransTextArray.length) {
            // 按键必须为数字键，且都为正整数
            if ([event.key, inOnlyKeyVal].every(key => !isNaN(parseInt(key)))) {
                let selectedValue = selectTypes[parseInt(event.key) - 1].valueName || ''
                if (!selectedValue) return
                $('#fy_select').val(selectedValue)
                setFyToType(selectedValue)
                startTrans()
            }
        }
        inOnlyKeyVal = ''
    })
}

// 防止重复请求锁
var isLockTrans = false
// 开始执行翻译请求
const startTrans = () => {
    if (isLockTrans) {
        showMessage({ message: '操作频繁，请稍后~', type: 'warning', time: 1000 })
        return
    }
    isLockTrans = true
    let textAll = window.getSelection().toString()
    let arrFroms = formatTrans(textAll)
    if (arrFroms && arrFroms.length) {
        fromTransTextArray = arrFroms
    }
    // 判断是否有选中翻译的文本
    isContainer = true // 更改容器状态
    transContainerDOM.style.display = 'flex'
    $('#fy_loading').show()
    fyContentDOM.textContent = ''
    computedContainer() // 计算容器位置

    const methodMap = {
        Baidu: (texts) => {
            texts.filter(text => text).forEach(text => {
                baiduTranslate(text)
            })
        },
        Google: googleTranslate
    }
    methodMap[currFromApi](fromTransTextArray)
    setTimeout(() => {
        isLockTrans = false
    }, 500)
}

// 切换翻译语言
const bindHandleSelectLang = () => {
    document.getElementById('fy_select').onchange = function (e) {
        setFyToType(this.value)
        fyContentDOM.textContent = ''
        $('#fy_loading').show()
        startTrans()
        // googleTranslate(fromTransTextArray, true)
    }

    document.addEventListener('keyup', (e) => {
        if (isContainer && e.code === 'KeyB') {
            setCurrFromApi('Baidu')
            setTimeout(() => {
                startTrans()
            }, 10)
        }
        if (isContainer && e.code === 'KeyG') {
            setCurrFromApi('Google')
            setTimeout(() => {
                startTrans()
            }, 10)
        }
    })

}
// 切换api
const bindHandleSelectApi = () => {
    document.getElementById('fy_api_select').onchange = function (e) {
        setCurrFromApi(this.value)
        fyContentDOM.textContent = ''
        $('#fy_loading').show()
        startTrans()
        // googleTranslate(fromTransTextArray, true)
    }
}

// 窗口拖动事件
const bindHandleDrag = () => {
    let isMove = false
    let mouseToEleX
    let mouseToEleY
    // 拖动处理
    fyDragBarDOM.addEventListener('mousedown', function (e) {
        if (!isCtrl) {
            isMove = true
            fyDragBarDOM.style.cursor = 'grabbing'
            // 获取鼠标相对于元素的位置
            mouseToEleX = e.clientX - transContainerDOM.getBoundingClientRect().left
            mouseToEleY = e.clientY - transContainerDOM.getBoundingClientRect().top
        }
    })
    // 当鼠标移动时
    window.addEventListener('mousemove', (e) => {
        if (!isMove) return
        // 防止默认的拖动选择文本行为
        e.preventDefault()
        let t = (e.clientY - mouseToEleY) < 0 ? 0 : e.clientY - mouseToEleY
        // 更新元素的位置
        transContainerDOM.style.left = (e.clientX - mouseToEleX) + 'px'
        transContainerDOM.style.top = t + 'px'
    })
    // 当鼠标松开时
    window.addEventListener('mouseup', () => {
        isMove = false
        fyDragBarDOM.style.cursor = 'grab'
    })
}
// 改变窗口大小事件
const bindHandleScale = () => {
    let mainCurrWidth
    let mainCurrHeight
    let cX, cY
    let isScale = false
    let scaleType = ''

    const scaleFun = (e, type) => {
        isScale = true
        mainCurrWidth = transContainerDOM.offsetWidth
        mainCurrHeight = transContainerDOM.offsetHeight
        cX = e.clientX
        cY = e.clientY
        scaleType = type
        let rect = transContainerDOM.getBoundingClientRect()
        if (scaleType == 'rb') {
            transContainerDOM.style.left = rect.left + 'px'
            transContainerDOM.style.right = 'auto'
        }
        if (scaleType == 'lb') {
            let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
            transContainerDOM.style.right = (window.innerWidth - rect.right - scrollBarWidth) + 'px'
            transContainerDOM.style.left = 'auto'
        }
    }
    fy_Scale_rb.addEventListener('mousedown', (e) => {
        scaleFun(e, 'rb')
    })
    fy_Scale_lb.addEventListener('mousedown', (e) => {
        scaleFun(e, 'lb')
    })
    // 当鼠标移动时
    window.addEventListener('mousemove', (e) => {
        if (!isScale) return
        // 防止默认的拖动选择文本行为
        e.preventDefault()
        transContainerDOM.style.maxWidth = 'none'
        let newHeight = mainCurrHeight + (e.clientY - cY)
        let newWidth = mainCurrWidth

        if (scaleType == 'rb') {
            newWidth = mainCurrWidth + (e.clientX - cX)
        }
        if (scaleType == 'lb') {
            newWidth = mainCurrWidth + (cX - e.clientX)
        }
        // 更新元素的位置
        transContainerDOM.style.width = Math.max(10, newWidth) + 'px'
        transContainerDOM.style.height = Math.max(10, newHeight) + 'px'
    })
    // 当鼠标松开时
    window.addEventListener('mouseup', () => {
        isScale = false
    })
}

// 点击译文事件
var isClickLock = true
const bindTextClick = () => {
    // fyContentDOM.addEventListener('click', function (event) {
    //     if (!isClickLock) return;
    //     isClickLock = false
    //     setTimeout(() => {
    //         isClickLock = true;
    //     }, 300); // 双击事件的间隔时间通常是300毫秒左右
    //     let textAll = window.getSelection().toString();
    //     if (textAll) return;
    //     let targetEle = event.target
    //     if (!targetEle.classList.contains('transText_node')) {
    //         targetEle = targetEle.parentNode
    //     }
    //     if (!targetEle.classList.contains('transText_node')) return;

    //     if (targetEle.classList.contains('fy_node_expand')) {
    //         targetEle.classList.remove('fy_node_expand');
    //     } else {
    //         targetEle.classList.add('fy_node_expand')
    //     }

    //     var rect = transContainerDOM.getBoundingClientRect();
    //     // 获取视口的高度
    //     var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    //     // 计算元素底部到视口底部的距离
    //     if ((viewportHeight - rect.bottom) < 30) {
    //         transContainerDOM.style.height = (viewportHeight - rect.top - 50) + 'px'
    //     }
    // });

    $(fyContentDOM).on('click', '.transText_node_to', function (e) {
        if (!isClickLock) return
        isClickLock = false
        setTimeout(() => {
            isClickLock = true
        }, 300) // 双击事件的间隔时间通常是300毫秒左右
        let textAll = window.getSelection().toString()
        if (textAll) return
        var parent = $(e.target).parent()[0]
        if ($(parent).hasClass('fy_node_expand')) {
            $(parent).removeClass('fy_node_expand')
        } else {
            $(parent).addClass('fy_node_expand')
        }
        var rect = transContainerDOM.getBoundingClientRect()
        // 获取视口的高度
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight
        // 计算元素底部到视口底部的距离
        if ((viewportHeight - rect.bottom) < 30) {
            transContainerDOM.style.height = (viewportHeight - rect.top - 50) + 'px'
        }

    })

    $(fyContentDOM).on('click', '.copy_icon', function (e) {
        e.stopPropagation() // 阻止事件冒泡
        copyText(this.getAttribute('value'))
        showMessage({
            message: '复制成功',
            time: 800
        })
    })

    // 翻译工具-结果复制
    $('body').on('click', '.tools_result_copy', function (e) {
        e.stopPropagation() // 阻止事件冒泡
        copyText($('#fy_translate_result').text())
        showMessage({
            message: '复制成功',
            time: 800,
            mainDOM: document.getElementById('fy_translate_tools_container')
        })
    })
    // 翻译工具-结果发音
    $('body').on('click', '.tools_result_audio', function (e) {
        e.stopPropagation() // 阻止事件冒泡
        playAudioText($('#fy_translate_result').text())
    })

}

// 计算渲染容器高度位置
const computedContainer = () => {
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    let distance_right = (window.innerWidth - transContainerDOM.getBoundingClientRect().right - scrollBarWidth)
    if (distance_right < 5) {
        transContainerDOM.style.left = 'auto'
        transContainerDOM.style.right = '5px'
    } else {
        transContainerDOM.style.right = 'auto'
        transContainerDOM.style.left = currX + 'px'
    }
    transContainerDOM.style.top = currY + 'px'

    let topToBotton = window.innerHeight - currY
    if (transContainerDOM.offsetHeight > topToBotton) {
        transContainerDOM.style.height = topToBotton + 'px'
    }
}

// 语音播放文本
const playAudioText = (text) => {
    // 创建一个新的 SpeechSynthesisUtterance 对象
    console.log('阅读~')
    const utterance = new SpeechSynthesisUtterance(text)
    // 设置一些可选的属性（例如音量、语速和音调）
    utterance.volume = 1 // 0到1之间的值
    utterance.rate = 1 // 0.1到10之间的值
    utterance.pitch = 1 // 0到2之间的值
    // 朗读文本
    window.speechSynthesis.speak(utterance)

    // // 检查浏览器是否支持语音合成
    // if ('speechSynthesis' in window) {
    //     // 创建语音合成实例
    //     var synthesis = window.speechSynthesis;
    //     var textToSpeak = text;
    //     // 创建语音合成的配置
    //     var utterance = new SpeechSynthesisUtterance(textToSpeak);
    //     // 使用默认语音
    //     utterance.voice = speechSynthesis.getVoices()[0];
    //     // 播放文本
    //     synthesis.speak(utterance);
    // } else {
    //     console.log("抱歉，您的浏览器不支持语音合成功能。");
    // }
}

const init = (e) => {
    initLoadElement()
    bingEvents()
    bindToolsEvent()
}

// 入口程序------------------------------------------------
(function () {
    if (window.self !== window.top) return
    console.log('S translate ~')
    loadStyle()
    this.setTimeout(() => {
        init()
        if (localStorage.getItem('FY_TRANSLATE_TO')) {
            fyToType = localStorage.getItem('FY_TRANSLATE_TO')
            $('#fy_select').val(fyToType)
            fy_tools_selected_active.setAttribute('value', fyToType)
            fy_tools_selected_active.textContent = fyToType
        }
        if (localStorage.getItem('FY_TRANSLATE_API_TYPE')) {
            currFromApi = localStorage.getItem('FY_TRANSLATE_API_TYPE')
            $('#fy_api_select').val(currFromApi)
        }
    }, 200)
})()

const setFyToType = (type) => {
    localStorage.setItem('FY_TRANSLATE_TO', type)
    fyToType = type
    fy_tools_selected_active.setAttribute('value', type)
    fy_tools_selected_active.textContent = type
}
const setCurrFromApi = (type) => {
    localStorage.setItem('FY_TRANSLATE_API_TYPE', type)
    currFromApi = type
    $('#fy_api_select').val(type)
}

// 百度语言标识符列表
var baiduOptions = [
    { type: 'zh', valueName: '中' },
    { type: 'en', valueName: '英' },
    { type: 'jp', valueName: '日' },
    { type: 'kor', valueName: '韩' },
    { type: 'fra', valueName: '法' },
    { type: 'spa', valueName: '西' },
    { type: 'ru', valueName: '俄' },
    { type: 'de', valueName: '德' },
    { type: 'it', valueName: '意' },
    { type: 'th', valueName: '泰' },
    { type: 'vie', valueName: '越' },
    { type: 'pt', valueName: '葡' },
    { type: 'ara', valueName: '阿' },
    { type: 'cht', valueName: '中(繁)' },
    { type: 'yue', valueName: '中(粤)' }
]
// google语言标识符列表
var googleOptions = [
    { type: 'zh-CN', valueName: '中' },
    { type: 'en', valueName: '英' },
    { type: 'ja', valueName: '日' },
    { type: 'ko', valueName: '韩' },
    { type: 'fr', valueName: '法' },
    { type: 'es', valueName: '西' },
    { type: 'ru', valueName: '俄' },
    { type: 'de', valueName: '德' },
    { type: 'it', valueName: '意' },
    { type: 'th', valueName: '泰' },
    { type: 'vi', valueName: '越' },
    { type: 'pt', valueName: '葡' },
    { type: 'ar', valueName: '阿' },
    { type: 'zh-TW', valueName: '中(繁)' },
    { type: 'zh-TW', valueName: '中(粤)' }
]

// 唤起提示
const showMessage = (options) => {
    let { type = 'success', message, time, mainDOM = transContainerDOM } = options
    let tipsDOM = myCreateEle({ text: message, type: type ?? 'success', style: 'position: absolute; top: 30px; left: 50%; transform: translate(-50%, 0%); padding: 2px 6px; border-radius: 2px; color:#fff; background-color: #67c23a; font-size: 10px;' }, mainDOM)
    const colorMap = {
        success: '#67c23a',
        warning: '#e6a23c',
        error: '#f56c6c',
        info: '#909399'
    }
    tipsDOM.style.backgroundColor = colorMap[type]
    setTimeout(() => {
        tipsDOM.remove()
    }, time ?? 2000)
}

// 格式化页面划选的文本，拆分成数组
const formatTrans = (texts = '') => {
    return (texts.split(/[\n\t]+/) || []).filter(text => text)
}

// copy 文本
const copyText = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
        })
        .catch(err => {
            // 某些浏览器可能不支持或需要用户交互
            // console.error('无法复制文本: ', err);
        })
}

// -------------------------------------

var isTools = false
// 翻译小球-拖动事件
function bindEntryMove() {
    let isMoveEntry = false
    let topMoveY
    fy_entry_container.addEventListener('mousedown', (e) => {
        isMoveEntry = true
        topMoveY = e.clientY - fy_entry_container.getBoundingClientRect().top
    })
    window.addEventListener('mousemove', (e) => {
        if (isMoveEntry) {
            e.preventDefault()
            fy_entry_container.style.top = (e.clientY - topMoveY) + 'px'
        }
    })
    // 当鼠标松开时
    window.addEventListener('mouseup', () => {
        isMoveEntry = false
    })

    // 翻译tools出现及隐藏
    fy_entry_container.addEventListener('mouseup', (e) => {
        if (!isTools) {
            showTools()
        }
    })
    fy_tools_close.onclick = function (e) {
        closeTools()
    }

    let rect = fy_translate_tools_container.getBoundingClientRect()
    var cacheLetf = rect.left - rect.width
    const showTools = () => {
        fy_translate_tools_container.style.left = (cacheLetf) + 'px'
        isTools = true
        setTimeout(() => {
            fy_translate_tools_container.style.transition = 'none'
        }, 600)
    }
    const closeTools = () => {
        isTools = false
        fy_translate_tools_container.style.transition = 'left 0.5s'
        cacheLetf = fy_translate_tools_container.getBoundingClientRect().left
        fy_translate_tools_container.style.left = '100%'
    }

    // 连续点击 两下``
    let isBackquote = false
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Backquote' && isBackquote) {
            isTools ? closeTools() : showTools()
            isBackquote = false
            return
        }
        e.code === 'Backquote' && (isBackquote = true)
        setTimeout(() => {
            isBackquote = false
        }, 250)
    })

}

// 输入翻译小工具框-拖动事件
function bingTranslateTools() {
    let isMoveTools = false
    let mouseToEleX
    let mouseToEleY
    fy_translate_tools_container.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('fy_tools_text_content') || e.target.id === 'fy_tools_close') return
        isMoveTools = true
        let rect = fy_translate_tools_container.getBoundingClientRect()
        mouseToEleX = e.clientX - rect.left
        mouseToEleY = e.clientY - rect.top
        fy_translate_tools_container.style.cursor = 'grabbing'
    })
    window.addEventListener('mousemove', (e) => {
        if (isMoveTools) {
            e.preventDefault()
            let t = (e.clientY - mouseToEleY) < 0 ? 0 : e.clientY - mouseToEleY
            fy_translate_tools_container.style.top = t + 'px'
            fy_translate_tools_container.style.left = (e.clientX - mouseToEleX) + 'px'
        }
    })
    // 当鼠标松开时
    window.addEventListener('mouseup', () => {
        isMoveTools = false
        fy_translate_tools_container.style.cursor = 'grab'
    })
}

// 翻译输入触发事件
function bindInputChange() {
    let timer = null
    fy_translate_input.addEventListener('input', function (e) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            toolsTranslateRequest(this.value)
        }, 500)
    })
}

// tools切换翻译语言
function bindChangeTranslateTo() {
    fy_tools_transTo_ul.onclick = function (e) {
        e.stopPropagation() // 阻止事件冒泡
        let value = e.target.getAttribute('value')
        if (!value) return
        setFyToType(value)
        fy_tools_selected_active.setAttribute('value', value)
        fy_tools_selected_active.textContent = e.target.textContent
        fy_tools_transTo_ul.style.display = 'none'
        toolsTranslateRequest($('#fy_translate_input').val())
    }
    fy_tools_selected_active.onclick = function (e) {
        e.stopPropagation() // 阻止事件冒泡
        if (window.getComputedStyle(fy_tools_transTo_ul).display === 'none') {
            fy_tools_transTo_ul.style.display = 'flex'
        } else {
            fy_tools_transTo_ul.style.display = 'none'
        }
    }

    fy_tools_api_active.onclick = function (e) {
        e.stopPropagation() // 阻止事件冒泡
        if (window.getComputedStyle(fy_tools_api_ul).display === 'none') {
            fy_tools_api_ul.style.display = 'flex'
        } else {
            fy_tools_api_ul.style.display = 'none'
        }
    }
    fy_tools_api_ul.onclick = function (e) {
        e.stopPropagation() // 阻止事件冒泡
        let value = e.target.getAttribute('value')
        if (!value) return
        setCurrFromApi(value)
        fy_tools_api_active.setAttribute('value', value)
        let currlogo = (apiMap.find(item => item.name == value) || {})?.logo
        $('#fy_tools_api_active img').attr('src', currlogo)
        fy_tools_api_ul.style.display = 'none'
        toolsTranslateRequest($('#fy_translate_input').val())
    }

    $('body').click(function (e) {
        fy_tools_transTo_ul.style.display = 'none'
        fy_tools_api_ul.style.display = 'none'
    })
}

const toolsTranslateRequest = (fromText) => {
    const methodMap = {
        Baidu: baiduTranslate,
        Google: googleTranslate
    }
    $('#fy_translate_result').text('')
    methodMap[currFromApi](fromText, true)
}
var toolsTranslateResultText = ''
const toolsResult = (text) => {
    $('#fy_translate_result').text(text)
    toolsTranslateResultText = text
    if (text) {
        $('#fy_translate_result').show()
    } else {
        // $('#fy_translate_result').hide()
    }
}

const bindToolsEvent = () => {
    // 入口小球事件
    bindEntryMove()
    // 翻译工具事件
    bingTranslateTools()
    // 输入改变事件
    bindInputChange()
    // 切换翻译语言事件
    bindChangeTranslateTo()
}

// 转换
var zhuanhuangImgData = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxNJREFUeF7tmjFoFEEUht/bVNpYaGOvFsZGbEyl9mcZEMFAdPftCYIGsTCkSBMFSaM2mTdnOEUMiq0gNkaEVIKVxkoEMWCjQlC8Q+6ZlYuomOzb7F12NjvT7j9v3vvmnzlm5hAq3rDi9YMH4B1QcQJ+CVTcAH4T9EvAL4GKE+jbEqjX67VOpzOCiM9brZZtNpvfXWTdFwBERABgVgsWkXlEPMvMb1yD0HMAURRdRsQr/yn0AyKGxpjHLkHoKQAimgaAi+sU+IqZD2xFAEhEtwBgNKW4T8y8c0sBIKJdADALAMcVhU0w85RCt2mSXEsgiqJ9QRDcFpHDiozrzPx7Y1ToN0WyYQBxHA+JyB0A2JOWKSIOG2MepumK+L4hAN3f+LsAsCMl6W8AUGPmp0UUpxkzM4A4jkdFJFnzaW0pCILazMzMyzRhkd8zASCiSwBwTZHwooh8VOh6KkFEy8z3sgRVAyCi3QCwlCV4EVpEnDbGJBOlamoAYRgeDYLA2bX8Z7WdTudYo9GY1xDwADSUEo13QNWXABFtB4CvWscUqHvXbrcPNpvNL5oc1HtAEoyIhgFgUBO4QM0CMz/Rjp8JgDZomXQeQJlmqx+5egf0g2qZYnoHZJmtldvuSRE5kqXPZmsR8RkzT2rHVTsgDMNDK+f7F9rARer8YcifBv1xuNr3AYg4aIx5rdmH1Jtg9zC0AABDmsBFaURkzlp7Ujt+JgDaoL3URVF0AhHnlDEbzBwptb9kTgOIoug0IiZvjqlNRK5bay+kCv8ROAuAiM4BwE1lQVPMPKHU/iVzEgARJU/syVN7ahORcWvt1VThGgLnABDROABoX5DPM/ONjRbv3B7QvXJ7oClIRM5YazVPdOuGc8oByk2vjYgjxpj7GlBpGqcAxHG8X0QSB6x18foZAE4x86O0wrTfnQKQJL0OhPfJ3+60T16lBbAGhMWu7Xt+HHfOAaszNzY2tm15eXnvwMDAj1ar9bZff7R0FoDWwnl1HkBegmXv7x1Q9hnMm793QF6CZe/vHVD2Gcybv3dAXoJl7/8T5pwVUK1j/PAAAAAASUVORK5CYII=`

// 复制
var copyImgData = `data:image/png;base64,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`

var audioImgData = `data:image/png;base64,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`

// 翻译-icon
var transImgData = `data:image/png;base64,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`
