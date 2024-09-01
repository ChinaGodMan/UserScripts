// ==UserScript==
// @name        GitHub CommitMessage Html View
// @name:vi     GitHub Tin nhắn cam kết Hiển thị HTML
// @name:en     GitHub Commit Message HTML View
// @name:ja     GitHub コミットメッセージ HTML ビュー
// @name:ko     GitHub 커밋 메시지 HTML 보기
// @name:zh-CN  GitHub 提交信息显示网页视图
// @name:zh-TW  GitHub 提交訊息顯示網頁視圖
// @name:fr     GitHub Affichage des messages de commit en HTML
// @name:de     GitHub Commit-Nachricht HTML-Ansicht
// @name:it     GitHub Visualizzazione dei messaggi di commit in HTML
// @name:fi     GitHub Commit-viestien HTML-näkymä
// @name:sg     GitHub Commit Message HTML View
// @name:hk     GitHub 提交信息顯示網頁視圖
// @name:mo     GitHub 提交信息顯示網頁視圖
// @name:pt     GitHub Exibição de Mensagens de Commit em HTML
// @name:ru     GitHub Просмотр сообщений коммитов в HTML
// @description   This script converts commit messages on GitHub into HTML views for clearer visibility of commit details. It automatically transforms commit message lists, commit headers, and the latest commit information into HTML format, providing enhanced visual appeal and user experience.
// @description:vi  Script này chuyển đổi tin nhắn cam kết trên GitHub thành các chế độ xem HTML để rõ ràng hơn về chi tiết cam kết. Nó tự động chuyển đổi danh sách tin nhắn cam kết, tiêu đề cam kết và thông tin cam kết mới nhất thành định dạng HTML, cung cấp sự hấp dẫn về mặt thị giác và trải nghiệm người dùng tốt hơn.
// @description:en  This script converts commit messages on GitHub into HTML views for clearer visibility of commit details. It automatically transforms commit message lists, commit headers, and the latest commit information into HTML format, providing enhanced visual appeal and user experience.
// @description:ja  このスクリプトは、GitHub 上のコミットメッセージを HTML ビューに変換し、コミットの詳細をより明確に表示します。コミットメッセージのリスト、コミットヘッダー、最新のコミット情報を自動的に HTML 形式に変換し、視覚的な魅力とユーザー体験を向上させます。
// @description:ko  이 스크립트는 GitHub의 커밋 메시지를 HTML 뷰로 변환하여 커밋 세부 정보를 보다 명확하게 볼 수 있도록 합니다. 커밋 메시지 목록, 커밋 헤더 및 최신 커밋 정보를 자동으로 HTML 형식으로 변환하여 시각적 매력과 사용자 경험을 향상시킵니다.
// @description:zh-CN  该脚本将 GitHub 上的提交信息转化为 HTML 视图，以更清晰地查看提交详情。它会自动将提交信息列表、提交头部和最新提交信息转化为 HTML 格式，提供更佳的视觉效果和用户体验。
// @description:zh-TW  該腳本將 GitHub 上的提交訊息轉換為 HTML 视图，以更清晰地查看提交細節。它會自動將提交訊息列表、提交標題和最新提交訊息轉換為 HTML 格式，提供更佳的視覺效果和使用者體驗。
// @description:fr  Ce script convertit les messages de commit sur GitHub en vues HTML pour une meilleure visibilité des détails des commits. Il transforme automatiquement les listes de messages de commit, les en-têtes de commit et les informations sur le dernier commit en format HTML, offrant ainsi un attrait visuel et une expérience utilisateur améliorés.
// @description:de  Dieses Skript konvertiert Commit-Nachrichten auf GitHub in HTML-Ansichten, um die Details der Commits klarer sichtbar zu machen. Es wandelt automatisch Commit-Nachrichtendaten, Commit-Kopfzeilen und die neuesten Commit-Informationen in HTML-Format um und bietet eine verbesserte visuelle Darstellung und Benutzererfahrung.
// @description:it  Questo script converte i messaggi di commit su GitHub in visualizzazioni HTML per una visibilità più chiara dei dettagli dei commit. Trasforma automaticamente le liste dei messaggi di commit, le intestazioni dei commit e le informazioni sull'ultimo commit in formato HTML, offrendo un'appeal visivo e un'esperienza utente migliorati.
// @description:fi  Tämä skripti muuntaa GitHubin commit-viestit HTML-näkymiksi, jotta commit-tiedot ovat selkeämmin näkyvissä. Se muuntaa automaattisesti commit-viestilistat, commit-otsikot ja viimeisimmät commit-tiedot HTML-muotoon, tarjoten parannettua visuaalista vetovoimaa ja käyttäjäkokemusta.
// @description:sg  This script converts commit messages on GitHub into HTML views for clearer visibility of commit details. It automatically transforms commit message lists, commit headers, and the latest commit information into HTML format, providing enhanced visual appeal and user experience.
// @description:hk  該腳本將 GitHub 上的提交信息轉換為 HTML 视图，以更清晰地查看提交詳情。它會自動將提交信息列表、提交標題和最新提交信息轉換為 HTML 格式，提供更佳的視覺效果和使用者體驗。
// @description:mo  該腳本將 GitHub 上的提交信息轉換為 HTML 视图，以更清晰地查看提交詳情。它會自動將提交信息列表、提交標題和最新提交信息轉換為 HTML 格式，提供更佳的視覺效果和使用者體驗。
// @description:pt  Este script converte mensagens de commit no GitHub em visualizações HTML para uma visibilidade mais clara dos detalhes dos commits. Ele transforma automaticamente listas de mensagens de commit, cabeçalhos de commit e informações sobre o último commit em formato HTML, proporcionando maior atratividade visual e experiência do usuário.
// @description:ru  Этот скрипт преобразует сообщения коммитов на GitHub в HTML-виды для более четкого отображения деталей коммитов. Он автоматически преобразует списки сообщений коммитов, заголовки коммитов и информацию о последнем коммите в формат HTML, обеспечивая улучшенную визуальную привлекательность и пользовательский опыт.
// @version 1.0.0.5
// @namespace   https://github.com/ChinaGodMan
// @author   人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match       *://github.com/*/*
// @grant       GM_registerMenuCommand
// @grant       none
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @license     MIT
// @source     https://github.com/qinwuyuan-cn/UserScripts
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
const selectors = {
    commitList: {
        value: '.react-directory-commit-message a', // 选择提交消息列表中的链接
        description: '选择仓库列表中的提交信息'
    },
    commitListFound: false,
    commitHeader: {
        value: '.fgColor-muted > span[data-testid="latest-commit-html"]', // 选择最新提交的头部信息
        description: '选择仓库列表头部展开详细信息'
    },
    commitHeaderScreen: {
        value: 'span.Truncate-text[data-testid="latest-commit-html"]', // 头部小预览
        description: '选择头部预览小标题'
    },
    commitLastTime: {
        value: 'div.react-directory-commit-age', // 选择最新提交的头部信息
        description: '获取最新提交信息'
    },
    commitHeaderIsRun: false,
    commitHeaderFound: false,
    commitHeaderScreenIsRun: false,
    commitHeaderScreenFound: false,
}
let LastCommitText = ""
let LastCommitHref = ""
let wocaonima = null
function updateCommitMessageInDetails(selector) {//详情页,
    const element = document.querySelector(selector)
    if (!element) return
    const textContent = element.textContent.trim()
    if (!containsHTML(textContent)) return
    if (wocaonima) {
        element.innerHTML = wocaonima
    } else {
        element.innerHTML = textContent
    }
}
function updateRepoHeaderExpandCommit(selector) {//头部展开
    const spanElements = document.querySelectorAll(selector)
    spanElements.forEach(spanElement => {
        const parentElement = spanElement.parentElement
        const textContent = spanElement.textContent.trim()
        const linkElement = spanElement.querySelector('a')
        const hrefValue = linkElement.getAttribute('href')
        if (containsHTML(textContent)) {
            if (!LastCommitHref || !LastCommitText) {
                spanElement.innerHTML = `<a href="${hrefValue}">` + textContent + `</a>`
            } else {
                spanElement.innerHTML = `<a href="${LastCommitHref}">` + LastCommitText + `</a>`
            }
        }
    })
}
//
function updateRepoHeaderScreenCommit(selector) {
    const spanElements = document.querySelectorAll(selector)
    spanElements.forEach(spanElement => {
        const parentElement = spanElement.parentElement
        const textContent = spanElement.textContent.trim()
        const linkElement = spanElement.querySelector('a')
        const hrefValue = linkElement.getAttribute('href')
        if (containsHTML(textContent)) {
            spanElement.addEventListener('click', () => {
                wocaonima = spanElement.innerHTML
            })
            if (!LastCommitHref || !LastCommitText) {
                console.log("未通过点击跳转:", textContent)
                spanElement.innerHTML = `<a href="${hrefValue}">` + textContent + `</a>`
            } else {
                console.log("通过点击跳转", LastCommitText)
                spanElement.innerHTML = `<a href="${LastCommitHref}">` + LastCommitText + `</a>`
            }
        }
    })
}
function updateRepoListCommit(selector) {
    const commitMessages = document.querySelectorAll(selector)
    commitMessages.forEach(element => {
        const nextElement = element.nextElementSibling
        if (nextElement) (
            nextElement.remove()
        )
        const titleContent = element.getAttribute("title")
        const hrefValue = element.getAttribute("href")
        if (titleContent) {
            if (containsHTML(titleContent)) {
                element.addEventListener('click', () => {
                    wocaonima = element.innerHTML
                })
                element.innerHTML = `<a href="${hrefValue}">${titleContent}</a>`
            }
        }
    })
}
function getLastTimeCommit(selector) {
    const allElements = document.querySelectorAll(selector)
    let latestElement = null
    let latestDate = new Date(0)
    allElements.forEach(div => {
        const relativeTime = div.querySelector('relative-time')
        if (relativeTime) {
            const datetime = relativeTime.getAttribute('datetime')
            if (datetime) {
                const currentDate = new Date(datetime)
                if (currentDate > latestDate) {
                    latestDate = currentDate
                    latestElement = div
                }
            }
        }
    })
    if (latestElement) {
        const parentTd = latestElement.closest('td')
        if (parentTd) {
            const previousTd = parentTd.previousElementSibling
            const linkElement = previousTd.querySelector(selectors.commitList.value)
            LastCommitText = linkElement.getAttribute("title")
            LastCommitHref = linkElement.getAttribute("href")
            return { previousTd, linkElement }
        } else {
            return null
        }
    } else {
        return null
    }
}
function containsHTML(str) {
    const pattern = /<\/?[a-z][\s\S]*>/i
    return pattern.test(str)
}
/**
 * 监视 DOM 变化，直到找到符合选择器的元素，然后执行指定的回调函数。
 * @param {string} selector - 要匹配的选择器。
 * @param {function} callback - 找到匹配元素后的回调函数。
 */
function observeForElement(selector, callback, disconnect = true, DEBUG = "操作", isElementFound) {
    isElementFound = false
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList') {
                const element = document.querySelector(selector)
                if (element) {
                    if (!isElementFound) {
                        console.log(`成功执行:${DEBUG} - ${selector} `)
                        isElementFound = true
                        callback(element)
                        if (disconnect) {
                            observer.disconnect()
                        } //else { console.log(`没有断开监听器器: ${DEBUG} - ${selector} `) }
                    }
                }
            }
        })
    })
    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
    if (!disconnect) {
        const removalObserver = new MutationObserver(mutationsList => {
            mutationsList.forEach(mutation => {
                mutation.removedNodes.forEach(node => {
                    const element = document.querySelector(selector)
                    if (!element) {
                        //   console.log(`继续查找: ${DEBUG} ${selector}`)
                        isElementFound = false
                    }
                })
            })
        })
        removalObserver.observe(document.body, {
            childList: true,
            subtree: true
        })
    }
}
function observeForElement_______________________________(selector, callback) {
    let isElementFound = false
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList' && !isElementFound) {
                const element = document.querySelector(selector)
                if (element) {
                    console.log("成功找到仓库列表中的提交信息元素")
                    isElementFound = true
                    callback(element)//留着以后用
                    observer.disconnect()
                }
            }
        })
    })
    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
}
main()
watchUpdate()
function main() {
    LastCommitText = ""
    LastCommitHref = ""
    observeForElement(selectors.commitList.value, function (element) {
        updateRepoListCommit(selectors.commitList.value)
    },
        true,
        selectors.commitList.description,
        selectors.commitListFound)
    if (!selectors.commitHeaderIsRun) {
        selectors.commitHeaderIsRun = true
        observeForElement(
            selectors.commitHeader.value,
            function (element) {
                getLastTimeCommit(selectors.commitLastTime.value)//从列表获取最新的提交信息,作为进入或返回目录使用
                updateRepoHeaderExpandCommit(selectors.commitHeader.value)
            },
            false,
            selectors.commitHeader.description,
            selectors.commitHeaderFound
        )
    }
    selectors.commitHeaderScreenIsRun = false
    if (!selectors.commitHeaderScreenIsRun) {
        observeForElement(
            selectors.commitHeaderScreen.value,
            function (element) {
                getLastTimeCommit(selectors.commitLastTime.value)//从列表获取最新的提交信息,作为进入或返回目录使用
                updateRepoHeaderScreenCommit(selectors.commitHeaderScreen.value)//头部预览
            },
            false,
            selectors.commitHeaderScreen.description,
            selectors.commitHeaderScreenIsRun
        )
    }
    //updateCommitMessageInDetails('.commit-desc')
    const element = document.querySelector('.commit-title.markdown-title')
    if (element) {
        element.remove()
    }
    updateCommitMessageInDetails('.commit-desc')
    //updateCommitMessageInDetails('.commit-title.markdown-title')
    wocaonima = null
    //  
}
function watchUpdate() {//检查链接变化
    // 检测浏览器是否支持 MutationObserver
    const MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
    // 获取当前页面的 URL
    const getCurrentURL = () => location.href
    getCurrentURL.previousURL = getCurrentURL()
    // 创建 MutationObserver 实例，监听 DOM 变化
    const observer = new MutationObserver((mutations, observer) => {
        const currentURL = getCurrentURL()
        // 如果页面的 URL 发生变化
        if (currentURL !== getCurrentURL.previousURL) {
            getCurrentURL.previousURL = currentURL
            console.log(`链接变化,正在启动监听器`)
            setTimeout(() => {
                main()
            }, 500)
        }
    })
    // 配置 MutationObserver
    const config = {
        characterData: true,
        subtree: true,
        childList: true,
        attributeFilter: ['value', 'placeholder', 'aria-label', 'data-confirm'], // 仅观察特定属性变化
    }
    // 开始观察 document.body 的变化
    observer.observe(document.body, config)
}