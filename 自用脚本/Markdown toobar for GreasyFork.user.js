// ==UserScript==
// @name              Markdown toolbar for GreasyFork
// @name:ru           Markdown-тулбар для GreasyFork
// @name:zh-CN        GreasyFork markdown
// @description       Select Markdown format by default, add help links, add toolbar formatting buttons for markdown
// @description:ru    Включает формат Markdown по умолчанию, добавляет справочные ссылки по форматам, добавляет панель кнопок форматирования markdown
// @description:zh-CN 在论坛默认使用 Markdown 格式，添加格式帮助链接及 Markdown 工具栏
// @author            wOxxOm, darkred
// @contributor       JixunMoe
// @license           MIT
// @include           https://greasyfork.org/*discussions/*
// @include           https://greasyfork.org/*scripts/*/versions/new*
// @include           https://greasyfork.org/*scripts/*/feedback*
// @include           https://greasyfork.org/*script_versions/new*
// @include           https://greasyfork.org/*/conversations/*
// @include           https://greasyfork.org/*/users/edit
// @grant             GM_addStyle
// @run-at            document-start
// @icon              https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/66x40-solid.png
// @supportURL        https://github.com/darkred/Userscripts/issues
// ==/UserScript==

var inForum = location.href.indexOf('/discussions') > 0
var inPostNewScriptVer = location.href.indexOf('/versions/new') > 0

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
            if (nn = document.querySelectorAll('input[value="markdown"]')) {
                for (var n, i = 0; (i < nn.length) && (n = nn[i]); i++) {
                    if (location.href.indexOf('/script_versions/')) {
                        n.click()
                    }
                    n.click() // posting a new script
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

    if (form.action.indexOf('/edit') < 0) {
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
    btnMake(n, '#', '标题', '#', '  ')
    btnMake(n, '-', '无序列表', '-  ', ' ')

    btnMake(n, '<i>' + __('I') + '</i>', __('Italic'), '*')
    btnMake(n, '<u>' + __('U') + '</u>', __('Underline'), '<u>', '</u>')
    btnMake(n, '<s>' + __('S') + '</s>', __('Strikethrough'), '<s>', '</s>')
    btnMake(n, '&lt;br&gt;', __('Force line break'), '<br>', '', true)
    btnMake(n, '---', __('Horizontal line'), '\n\n---\n\n', '', true)
    btnMake(n, __('URL'), __('Add URL to selected text'),
        function (e) {
            try {
                edWrapInTag('[', '](' + prompt(__('URL') + ':') + ')', edInit(e.target))
            } catch (ex) { }
        }
    )
    btnMake(n, __('Image (https)'), __('Convert selected https://url to inline image'), '![' + __('image') + '](', ')')
    if (inForum) {
        btnMake(n, __('Table'), __('Insert table template'), __('\n| head1 | head2 |\n|-------|-------|\n| cell1 | cell2 |\n| cell3 | cell4 |\n'), '', true)
    }
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
}

function edInit(btn) {
    var ed = { node: btn.textAreaNode || btn.parentNode.textAreaNode }
    ed.sel1 = ed.node.selectionStart
    ed.sel2 = ed.node.selectionEnd
    ed.text = ed.node.value
    ed.sel = ed.text.substring(ed.sel1, ed.sel2)
    return ed
}

function edWrapInTag(tag1, tag2, ed) {
    ed.node.value = ed.text.substr(0, ed.sel1) + tag1 + ed.sel + (tag2 ? tag2 : tag1) + ed.text.substr(ed.sel2)
    ed.node.setSelectionRange(ed.sel1 + tag1.length, ed.sel1 + tag1.length + ed.sel.length)
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
        'Bold': '粗体',
        'Italic': '斜体',
        'Underline': '下划线',
        'Strikethrough': '删除线',
        'Force line break': '强制换行',
        'Horizontal line': '水平分割线',
        'URL': '链接',
        'Add URL to selected text': '为所选文字添加链接',
        'Image (https)': '图片 (https)',
        'Convert selected https://url to inline image': '将所选地址转换为行内图片',
        'image': '图片描述', // Default image alt value
        'Table': '表格',
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
