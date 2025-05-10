// ==UserScript==
// @name              Markdown toolbar for GreasyFork
// @name:zh-CN        GreasyFork markdown
// @description:zh-CN 在论坛默认使用格式为Markdown，添加格式帮助链接及在发布新脚本,回复时间启用快速编辑的工具栏
// @name:ar           GreasyFork markdown
// @description:ar    التنسيق الافتراضي المستخدم في المنتدى هوMarkdown，إضافة رابط تعليمات التنسيق ونشر برنامج نصي جديد,شريط أدوات وقت الرد مع تمكين التحرير السريع
// @name:bg           GreasyFork markdown
// @description:bg    Форматът по подразбиране, използван във форума, еMarkdown，Добавете връзка за помощ при форматиране и публикувайте нов скрипт,Лента с инструменти за време за отговор с активирано бързо редактиране
// @name:cs           GreasyFork markdown
// @description:cs    Výchozí formát používaný ve fóru jeMarkdown，Přidejte odkaz na nápovědu formátu a publikujte nový skript,Panel nástrojů doby odpovědi s povolenou rychlou úpravou
// @name:da           GreasyFork markdown
// @description:da    Standardformatet brugt i forummet erMarkdown，Tilføj format hjælpelink og udgiv nyt script,Værktøjslinjen Svartid med hurtig redigering aktiveret
// @name:de           GreasyFork markdown
// @description:de    Das im Forum verwendete Standardformat istMarkdown，Fügen Sie einen Link zur Formathilfe hinzu und veröffentlichen Sie ein neues Skript,Symbolleiste „Antwortzeit“ mit aktivierter Schnellbearbeitung
// @name:el           GreasyFork markdown
// @description:el    Η προεπιλεγμένη μορφή που χρησιμοποιείται στο φόρουμ είναιMarkdown，Προσθήκη συνδέσμου βοήθειας μορφής και δημοσίευση νέου σεναρίου,Γραμμή εργαλείων χρόνου απάντησης με ενεργοποιημένη τη γρήγορη επεξεργασία
// @name:en           GreasyFork markdown
// @description:en    The default format used in the forum isMarkdown，Add format help link and publish new script,Reply time toolbar with quick editing enabled
// @name:eo           GreasyFork markdown
// @description:eo    La defaŭlta formato uzata en la forumo estasMarkdown，Aldonu formatan helpligon kaj publikigu novan skripton,Ilobreto de responda tempo kun rapida redaktado ebligita
// @name:es           GreasyFork markdown
// @description:es    El formato predeterminado utilizado en el foro esMarkdown，Agregue un enlace de ayuda de formato y publique un nuevo script,Barra de herramientas de tiempo de respuesta con edición rápida habilitada
// @name:fi           GreasyFork markdown
// @description:fi    Foorumilla käytetty oletusmuoto onMarkdown，Lisää muodon ohjelinkki ja julkaise uusi skripti,Vastausajan työkalupalkki, jossa pikamuokkaus käytössä
// @name:fr           GreasyFork markdown
// @description:fr    Le format par défaut utilisé dans le forum estMarkdown，Ajouter un lien d’aide au format et publier un nouveau script,Barre d’outils de temps de réponse avec édition rapide activée
// @name:he           GreasyFork markdown
// @description:he    פורמט ברירת המחדל בשימוש בפורום הואMarkdown，הוסף קישור עזרה בפורמט ופרסם סקריפט חדש,סרגל הכלים של זמן תשובה עם עריכה מהירה מופעלת
// @name:hr           GreasyFork markdown
// @description:hr    Zadani format koji se koristi na forumu jeMarkdown，Dodajte vezu za pomoć u formatu i objavite novu skriptu,Alatna traka vremena odgovora s omogućenim brzim uređivanjem
// @name:hu           GreasyFork markdown
// @description:hu    A fórumban használt alapértelmezett formátum aMarkdown，Formátum súgóhivatkozás hozzáadása és új szkript közzététele,Válaszidő eszköztár a gyors szerkesztés engedélyezésével
// @name:id           GreasyFork markdown
// @description:id    Format default yang digunakan dalam forum adalahMarkdown，Tambahkan tautan bantuan format dan publikasikan skrip baru,Bilah alat waktu balasan dengan pengeditan cepat diaktifkan
// @name:it           GreasyFork markdown
// @description:it    Il formato predefinito utilizzato nel forum èMarkdown，Aggiungi il collegamento alla guida sul formato e pubblica un nuovo script,Barra degli strumenti del tempo di risposta con modifica rapida abilitata
// @name:ja           GreasyFork markdown
// @description:ja    フォーラムで使用されるデフォルトの形式は次のとおりです。Markdown，フォーマットヘルプリンクを追加し、新しいスクリプトを公開します,クイック編集が有効になった返信時間ツールバー
// @name:ka           GreasyFork markdown
// @description:ka    ფორუმში გამოყენებული ნაგულისხმევი ფორმატი არისMarkdown，დაამატეთ ფორმატის დახმარების ბმული და გამოაქვეყნეთ ახალი სკრიპტი,პასუხის დროის ინსტრუმენტთა პანელი ჩართულია სწრაფი რედაქტირებით
// @name:ko           GreasyFork markdown
// @description:ko    포럼에서 사용되는 기본 형식은 다음과 같습니다.Markdown，형식 도움말 링크 추가 및 새 스크립트 게시,빠른 편집이 활성화된 응답 시간 도구 모음
// @name:nl           GreasyFork markdown
// @description:nl    Het standaardformaat dat op het forum wordt gebruikt isMarkdown，Voeg de Help-link voor het formaat toe en publiceer een nieuw script,Werkbalk Antwoordtijd met snelle bewerking ingeschakeld
// @name:nb           GreasyFork markdown
// @description:nb    Standardformatet som brukes i forumet erMarkdown，Legg til format hjelpekobling og publiser nytt skript,Verktøylinje for svartid med hurtigredigering aktivert
// @name:pl           GreasyFork markdown
// @description:pl    Domyślnym formatem używanym na forum jestMarkdown，Dodaj link pomocy formatu i opublikuj nowy skrypt,Pasek narzędzi czasu odpowiedzi z włączoną szybką edycją
// @name:pt-BR        GreasyFork markdown
// @description:pt-BR O formato padrão usado no fórum éMarkdown，Adicionar link de ajuda de formato e publicar novo script,Barra de ferramentas de tempo de resposta com edição rápida habilitada
// @name:ro           GreasyFork markdown
// @description:ro    Formatul implicit folosit în forum esteMarkdown，Adăugați linkul de ajutor pentru format și publicați un nou script,Bara de instrumente pentru timpul de răspuns cu editarea rapidă activată
// @name:ru           GreasyFork markdown
// @description:ru    Формат по умолчанию, используемый на форуме:Markdown，Добавьте ссылку на справку по формату и опубликуйте новый скрипт.,Панель инструментов времени ответа с включенным быстрым редактированием
// @name:sk           GreasyFork markdown
// @description:sk    Predvolený formát používaný vo fóre jeMarkdown，Pridajte odkaz na pomoc s formátom a publikujte nový skript,Panel s nástrojmi času odpovede s povolenou rýchlou úpravou
// @name:sr           GreasyFork markdown
// @description:sr    Подразумевани формат који се користи на форуму јеMarkdown，Додајте везу за помоћ за формат и објавите нову скрипту,Трака са алаткама за време одговора са омогућеним брзим уређивањем
// @name:sv           GreasyFork markdown
// @description:sv    Standardformatet som används i forumet ärMarkdown，Lägg till hjälplänk för format och publicera nytt skript,Verktygsfältet Svarstid med snabb redigering aktiverad
// @name:th           GreasyFork markdown
// @description:th    รูปแบบเริ่มต้นที่ใช้ในฟอรั่มคือMarkdown，เพิ่มลิงก์วิธีใช้รูปแบบและเผยแพร่สคริปต์ใหม่,แถบเครื่องมือเวลาตอบกลับพร้อมเปิดใช้งานการแก้ไขด่วน
// @name:tr           GreasyFork markdown
// @description:tr    Forumda kullanılan varsayılan format:Markdown，Biçim yardım bağlantısı ekleyin ve yeni komut dosyası yayınlayın,Hızlı düzenlemenin etkin olduğu yanıt süresi araç çubuğu
// @name:ug           GreasyFork markdown
// @description:ug    مۇنبەردە ئىشلىتىلگەن سۈكۈتتىكى فورماتىMarkdown，فورمات ياردەم ئۇلانمىسىنى قوشۇڭ ۋە يېڭى قوليازما ئېلان قىلىڭ,تېز تەھرىرلەش ئىقتىدارى بىلەن ۋاقىت قورال ستونىغا جاۋاب قايتۇرۇڭ
// @name:uk           GreasyFork markdown
// @description:uk    Стандартний формат, який використовується на форуміMarkdown，Додайте посилання на довідку щодо формату та опублікуйте новий сценарій,Панель інструментів часу відповіді з увімкненим швидким редагуванням
// @name:vi           GreasyFork markdown
// @description:vi    Định dạng mặc định được sử dụng trong diễn đàn làMarkdown，Thêm liên kết trợ giúp định dạng và xuất bản tập lệnh mới,Thanh công cụ thời gian trả lời có bật tính năng chỉnh sửa nhanh
// @name:zh-TW        GreasyFork markdown
// @description:zh-TW 在論壇預設使用格式為Markdown，新增格式幫助連結及在發布新腳本,回覆時間啟用快速編輯的工具列
// @name:zh-HK        GreasyFork markdown
// @description:zh-HK 在論壇預設使用格式為Markdown，新增格式幫助連結及在發布新腳本,回覆時間啟用快速編輯的工具列
// @name:fr-CA        GreasyFork markdown
// @description:fr-CA Le format par défaut utilisé dans le forum estMarkdown，Ajouter un lien d’aide au format et publier un nouveau script,Barre d’outils de temps de réponse avec édition rapide activée
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @description       Select Markdown format by default, add help links, add toolbar formatting buttons for markdown
// @author            wOxxOm, darkred, 人民的勤务员 <china.qinwuyuan@gmail.com>
// @contributor       JixunMoe
// @contributor       人民的勤务员 <china.qinwuyuan@gmail.com>
// @license           MIT
// @grant             GM_xmlhttpRequest
// @include           https://greasyfork.org/*discussions/*
// @include           https://greasyfork.org/*scripts/*/versions/new*
// @include           https://greasyfork.org/*scripts/*/feedback*
// @include           https://greasyfork.org/*script_versions/new*
// @include           https://greasyfork.org/*/conversations/*
// @include           https://greasyfork.org/*/users/edit
// @include           https://greasyfork.org/*/reports/new*
// @grant             GM_addStyle
// @run-at            document-start
// @version           2025.5.11.1
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAoCAQAAADgMuRfAAABWklEQVR4Ae3YJQIUYRxA8R8OESs4BXcOsHXqngDnFtglKFjEqVOwjtNxd3f547Duux/2Xhx7Y98ITLbHdZHA6/aYDLM9EAl9YB77RWIP8Vgk9hkhvaKp/yP+R5SyXdRxl1KipqV0ETHGGVHDM8YMLoKZHogKH5jJICPIRIUZg45giyhxCykihsnFd3PD0kQwzkUhXDGOVBEs9+azy0kZwZrPShFRf7MrBxfx0hK1WOLl4CLCReNqX6Z1NrFeM9a3HxFyleSibsQbBY0oeNNJRNiolI1NDvZd09Rjmruis4j3Mj/IvG8SEc4boxZjnBedRZQ+sqZ50NJld0gt9otuIsJJIz97suVrf6NKNopuI8L2z7ZzAxaVUhRdR3Qw3zML/WChZ2kiwkUTwUQXRaqIcNzIzx4RKSPC1s/+ia/8/yP+R/wmP0kOicQeYl76H2cw2X63RAJv2W8ynwCwbA7V/z22eQAAAABJRU5ErkJggg==
// @iconbak           https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/66x40-solid.png
// @supportURL        https://github.com/darkred/Userscripts/issues
// @downloadURL       https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-markdown-toolbar/greasyfork-markdown-toolbar.user.js
// @updateURL         https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-markdown-toolbar/greasyfork-markdown-toolbar.user.js
// ==/UserScript==
/**
 * File: greasyfork-markdown-toolbar.user.js
 * Project: UserScripts
 * File Created: 2024/11/24,Sunday 12:38:51
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/26,Wednesday 10:04:12
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 @ChinaGodMan,Inc
 */

// Example URLS to test:
// https://greasyfork.org/en/discussions/new
// https://greasyfork.org/en/scripts/422887-markdown-toolbar-for-greasyfork/discussions/78139
// https://greasyfork.org/en/scripts/23493/versions/new
// https://greasyfork.org/en/scripts/422445-github-watcher/feedback
// https://greasyfork.org/en/users/2160-darkred/conversations/new
// https://greasyfork.org/en/users/edit
var translate = 'en'
var inForum = location.href.indexOf('/discussions') > 0
var inPostNewScriptVer = location.href.indexOf('/versions/new') > 0
var autoJumpEdit = true
function contains(selector, text) {
    var elements = document.querySelectorAll(selector)
    return Array.from(elements).filter(function (element) {
        return RegExp(text).test(element.textContent)
    })
}
//DOMContentLoaded有时会和其他脚本冲突导致监听失败
window.addEventListener('load', function (e) {
    var refElements = document.querySelectorAll(`
        input[name="authenticity_token"]              + .label-note,
        label[for="script-version-additional-info-0"] + .label-note,
        label[for="changelog"]                        + .label-note,
        label[for="conversation_messages_attributes_0_content"] +  .label-note,
        label[for="user_profile"] + .label-note,
        form > .label-note
    `)

    if (inForum) {
        refElements.forEach(element => {
            element.insertAdjacentHTML('beforeend', '<br>')
            addFeatures(element)
        })
    } else { // not in Forum
        // This page has 2 non-code textareas: 'Additional info' and 'Changelog'
        if (inPostNewScriptVer) {
            refElements.forEach(element => {
                addFeatures(element.appendChild(document.createElement('br')))
            })
        } else { // every other page
            var nn = document.querySelectorAll('input[value="markdown"]')
            if (nn.length > 0) {
                for (var n, i = 0; (i < nn.length) && (n = nn[i]); i++) {
                    if (location.href.indexOf('/script_versions/') !== -1) {
                        n.click()
                    }
                    n.click() // 继续点击
                    addFeatures(n.parentNode.appendChild(document.createElement('br')))
                }
            }
        }
    }
})

function addFeatures(n) {
    if (!n) {
        return
    }

    var form = n.closest('form')

    if (form.action.indexOf('/edit') < 0 && autoJumpEdit) {
        n.click()
    }

    if (inPostNewScriptVer) {
        n.parentNode.textAreaNode = n.parentNode.querySelector('textarea.TextBox, textarea.previewable, div.previewable textarea')
    } else {
        n.parentNode.textAreaNode = form.querySelector('textarea.TextBox, textarea.previewable, div.previewable textarea')
    }

    GM_addStyle(`
        .mdButton {
            display: inline-block;
            cursor: pointer;
            margin: 0px;
            font-size: 12px;
            line-height: 1;
            font-weight: bold;
            padding: 4px 6px;
            background: -moz-linear-gradient(center bottom , #CCC 0%, #FAFAFA 100%) repeat scroll 0% 0% #F8F8F8;
            border: 1px solid #999;
            border-radius: 2px;
            white-space: nowrap;
            text-shadow: 0px 1px 0px #FFF;
            box-shadow: 0px 1px 0px #FFF inset, 0px -1px 2px #BBB inset;
            color: #333;
        }
    `)

    // Add buttons
    btnMake(n, '<b>' + __('B') + '</b>', __('Bold'), '**')
    btnMake(n, __('#'), __('Title'), '#', '  ')
    btnMake(n, '<li>' + __('-') + '</li>', __('List'), '-  ', ' ')
    btnMake(n, __('>'), __('blockquote'), '<blockquote>', '</blockquote>')
    btnMake(n, '<mark>' + __('标记') + '</mark>', __('高亮显示选中文本'), '<mark>', '</mark>')
    btnMake(n, '<i>' + __('I') + '</i>', __('Italic'), '*')
    btnMake(n, '<center>' + __('居中') + '</center>', __('内容居中显示'), '<center>', '</center>')
    btnMake(n, '<u>' + __('U') + '</u>', __('Underline'), '<u>', '</u>')
    btnMake(n, '<s>' + __('S') + '</s>', __('Strikethrough'), '<s>', '</s>')
    btnMake(n, '&lt;br&gt;', __('Force line break'), '<br>', '', true)
    btnMake(n, __('---'), __('Horizontal line'), '\n\n---\n\n', '', true)
    btnMake(n, __('URL'), __('Add URL to selected text'),
        function (e) {
            try {
                edWrapInTag('[', '](' + prompt(__('URL') + ':') + ')', edInit(e.target))
            } catch (ex) { }
        }
    )
    btnMake(n, __('Image (https)'), __('Convert selected https://url to inline image'), '![' + __('image') + '](', ')')
    //  if (inForum) {
    btnMake(n, __('Table'), __('Insert table template'), __('\n| head1 | head2 |\n|-------|-------|\n| cell1 | cell2 |\n| cell3 | cell4 |\n'), '', true)
    //} 都添加表格
    btnMake(n, __('Code'), __('Apply CODE markdown to selected text'),
        function (e) {
            var ed = edInit(e.target)
            if (ed.sel.indexOf('\n') < 0) {
                edWrapInTag('`', '`', ed)
            } else {
                edWrapInTag(
                    ((ed.sel1 == 0) || (ed.text.charAt(ed.sel1 - 1) == '\n') ? '' : '\n') + '```' + (ed.sel.charAt(0) == '\n' ? '' : '\n'),
                    (ed.sel.substr(-1) == '\n' ? '' : '\n') + '```' + (ed.text.substr(ed.sel2, 1) == '\n' ? '' : '\n'),
                    ed
                )
            }
        }
    )
    g = btnMake(n, __('谷歌翻译'), __('快速翻译选中的内容'),
        function (e) {
            const translatedzh = edInit(e.target)
            translateText(translatedzh.sel).then(translatedText => {

                edWrapInTag('', translatedText, translatedzh, true)
            }).catch(error => {
                alert(' GoogleTranslate ERROR!!! ')
            })
        }
    )
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'q') {
            g.click()
        }
    })
    const WeiWeiimages = [
        ['npzhyrb4txdoegwl82bkapekufb5', '维维发问：你有眼界吗？'],
        ['gkhj9p2qhtm62uza3qveshtooe2u', '维维被你震撼到了！'],
        ['p0i0f5xubhln1wvph3ip70zhpzqq', '维维发问：什么叫做搬起石头砸自己的脚？'],
        ['nahzae6vc3d3osq861cbt8uaopkk', '维维断言：这就是个国际笑话'],
        ['kzpmox79idq4gmsbyoj0yyuhx13v', '维维发问：你怎么敢讲这种话的？']
    ]
    const WeiWeiLoveYou = WeiWei(WeiWeiimages, true)
    btnMake(n, '维维嘲讽', '来自爱国教授维维的五连问', __('\n\n' + WeiWeiLoveYou + `\n\n
`), '', true)
    function WeiWei(images, WeiWeiSays) {
        let html = `
<div style="background-color: #FFF3E0;color: #FF5722;border: 1px solid #FF5722;"><center><h3 style="color: red;">爱国教授维维有话对你说</h3></center><p><br>
 <center>`
        images.forEach(([imgSrc, rtText]) => {
            const WeiWeiImg = `https://greasyfork.s3.us-east-2.amazonaws.com/${imgSrc} `
            if (WeiWeiSays) {
                html += `
                <ruby>
                    <img src="${WeiWeiImg}" alt="">
                    <rt>${rtText}</rt>
                </ruby>`
            } else {
                html += `\n<img src="${WeiWeiImg}" alt="">`
            }
        })

        html += `
            </center>
            </p>
        </div>`
        return html
    }
    var allPreviewTabs = contains('.preview-tab', 'Preview')
    allPreviewTabs.forEach(element => {
        element.onclick = function (event) {
            let target = event.target // delegation: where was the click?
            if (target.tagName !== 'A' && target.tagName !== 'SPAN') { return }
            form.querySelectorAll('.Button').forEach(element2 => element2.style.display = 'none')
        }
    })

    var allWriteTabs = contains('.write-tab', 'Write')
    allWriteTabs.forEach(element => {
        element.onclick = function (event) {
            let target = event.target // where was the click?
            if (target.tagName !== 'A' && target.tagName !== 'SPAN') { return }
            form.querySelectorAll('.Button').forEach(element2 => element2.style.display = 'inline-block')
        }
    })
}

function btnMake(afterNode, label, title, tag1_or_cb, tag2, noWrap) {
    var a = document.createElement('a')
    a.className = 'mdButton'
    a.innerHTML = label
    a.title = title

    a.addEventListener('click',
        typeof (tag1_or_cb) === 'function' ? tag1_or_cb :   					// if
            noWrap ? function (e) { edInsertText(tag1_or_cb, edInit(e.target)) } : 	// else if
                function (e) { edWrapInTag(tag1_or_cb, tag2, edInit(e.target)) } 		// else
    )

    var nparent
    inForum ? nparent = afterNode : nparent = afterNode.parentNode
    a.textAreaNode = nparent.textAreaNode || nparent.parentNode.querySelector('textArea')
    nparent.appendChild(a)
    return a
}

function edInit(btn) {
    var ed = { node: btn.textAreaNode || btn.parentNode.textAreaNode }
    ed.sel1 = ed.node.selectionStart
    ed.sel2 = ed.node.selectionEnd
    ed.text = ed.node.value
    ed.sel = ed.text.substring(ed.sel1, ed.sel2)
    return ed
}

function edWrapInTag(tag1, tag2, ed, rep = false) {
    if (rep) {
        ed.node.value = ed.text.substr(0, ed.sel1) + (tag2 ? tag2 : tag1) + ed.text.substr(ed.sel2)
    } else {
        ed.node.value = ed.text.substr(0, ed.sel1) + tag1 + ed.sel + (tag2 ? tag2 : tag1) + ed.text.substr(ed.sel2)
    }
    ed.node.setSelectionRange(ed.sel1 + tag1.length, ed.sel1 + tag1.length + ed.sel.length)
    if (rep) return//不选中,文本太长了,选中干啥,
    ed.node.focus()
}

function edInsertText(text, ed) {
    ed.node.value = ed.text.substr(0, ed.sel2) + text + ed.text.substr(ed.sel2)
    ed.node.setSelectionRange(ed.sel2 + text.length, ed.sel2 + text.length)
    ed.node.focus()
}

var __ = (function (l, langs) {
    var lang = langs[l] || langs[l.replace(/-.+/, '')]
    return lang ? function (text) { return lang[text] || text }
        : function (text) { return text } // No matching language, fallback to english
})(location.pathname.match(/^\/(.+?)\//)[1], {
    'zh-CN': {
        'B': '粗体',
        'I': '斜体',
        'U': '下划线',
        'S': '删除线',
        'Bold': '粗体',
        '-': '列表',
        '#': '标题',
        '>': '引用',
        '---': '分割线',
        'Italic': '斜体',
        'Underline': '下划线',
        'Strikethrough': '删除线',
        'Force line break': '强制换行',
        'Horizontal line': '水平分割线',
        'URL': '链接',
        'Title': '正文标题H1',
        'List': '无序列表，用作分类下的信息展示',
        'Add URL to selected text': '为所选文字添加链接',
        'Image (https)': '图片 (https)',
        'Convert selected https://url to inline image': '将所选地址转换为行内图片',
        'image': '图片描述', // Default image alt value
        'Table': '表格',
        'blockquote': '引用文本',
        'Insert table template': '插入表格模板',
        'Code': '代码',
        'Apply CODE markdown to selected text': '将选中代码围起来',
        '\n| head1 | head2 |\n|-------|-------|\n| cell1 | cell2 |\n| cell3 | cell4 |\n':
            '\n| 表头 1 | 表头 2 |\n|-------|-------|\n| 表格 1 | 表格 2 |\n| 表格 3 | 表格 4 |\n'
    },
    'ru': {
        'B': 'Ж',
        'I': 'К',
        'U': 'Ч',
        'S': 'П',
        'Bold': 'Жирный',
        'Italic': 'Курсив',
        'Underline': 'Подчеркнутый',
        'Strikethrough': 'Перечеркнутый',
        'Force line break': 'Новая строка',
        'Horizontal line': 'Горизонтальная линия',
        'URL': 'ссылка',
        'Title': 'Заголовок',
        'List': 'Неупорядоченный список',
        'Add URL to selected text': 'Добавить ссылку к выделенному тексту',
        'Image (https)': 'Картинка (https)',
        'Convert selected https://url to inline image': 'Преобразовать выделенный https:// адрес в картинку',
        'image': 'картинка', // Default image alt value
        'Table': 'Таблица',
        'Insert table template': 'Вставить шаблон таблицы',
        'Code': 'Код',
        'Apply CODE markdown to selected text': 'Пометить выделенный фрагмент как программный код',
        '\n| head1 | head2 |\n|-------|-------|\n| cell1 | cell2 |\n| cell3 | cell4 |\n':
            '\n| заголовок1 | заголовок2 |\n|-------|-------|\n| ячейка1 | ячейка2 |\n| ячейка3 | ячейка4 |\n'
    },
    'fr': {
        'B': 'G',
        'I': 'I',
        'U': 'S',
        'S': 'B',
        'Bold': 'Gras',
        'Italic': 'Italique',
        'Underline': 'Souligné',
        'Strikethrough': 'Barré',
        'Force line break': 'Forcer le saut de ligne',
        'Horizontal line': 'Ligne horizontale',
        'URL': 'URL',
        'Title': 'Titre',
        'List': 'Liste non ordonnée',
        'Add URL to selected text': 'Ajouter URL au texte sélectionné',
        'Image (https)': 'Image (https)',
        'Convert selected https://url to inline image': 'Convertir https://url sélectionnés en images',
        'image': 'image', // Default image alt value
        'Table': 'Tableau',
        'Insert table template': 'Insérer un modèle de table',
        'Code': 'Code',
        'Apply CODE markdown to selected text': 'Appliquer CODE markdown au texte sélectionné',
        '\n| head1 | head2 |\n|-------|-------|\n| cell1 | cell2 |\n| cell3 | cell4 |\n':
            '\n| En-tête 1 | En-tête 2 |\n|-------|-------|\n| cellule 1 | cellule 2 |\n| cellule 3 | cellule 4 |\n'
    }
})
function translateText(text) {
    return new Promise((resolve, reject) => {
        var api = 'https://translate.googleapis.com/translate_a/single'
        var params = {
            client: 'gtx',
            dt: 't',
            sl: 'auto',
            tl: translate,
            q: text
        }

        GM_xmlhttpRequest({
            method: 'GET',
            url: api + buildQueryString(params),
            onload: function (response) {
                try {
                    var data = JSON.parse(response.responseText.replace('\'', '\u2019'))
                    var translatedText = data[0].reduce((acc, item) => acc + item[0], '')
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
function buildQueryString(params) {
    return '?' + Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&')
}
