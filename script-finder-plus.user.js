// ==UserScript==
// @name                    Script Finder+
// @description             Script Finder allows you to find userscripts from greasyfork on any website.
// @name:en                 Script Finder+
// @description:en          Script Finder allows you to find userscripts from greasyfork on any website.
// @name:zh-CN              Script Finder 油猴脚本查找
// @description:zh-CN       Script Finder 在任何网站上找到适用于该网站的 greasyfork 油猴脚本。
// @name:zh-TW              腳本搜尋器+
// @description:zh-TW       腳本搜尋器可以讓你在任何網站上從 greasyfork 找到使用者腳本。
// @name:vi                 Tìm kiếm Script+
// @description:vi          Script Finder cho phép bạn tìm các script người dùng từ greasyfork trên bất kỳ trang web nào.
// @name:ja                 スクリプトファインダー+
// @description:ja          スクリプトファインダーを使うことで、greasyfork からユーザースクリプトを任意のウェブサイトで見つけることができます。
// @name:ko                 스크립트 파인더+
// @description:ko          Script Finder를 사용하면 greasyfork에서 사용자 스크립트를 어떤 웹사이트에서든 찾을 수 있습니다.

// @namespace               https://greasyfork.org/zh-CN/users/1169082
// @version 0.1.6.69
// @author                  shiquda   &  人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @match                   *://*/*
// @connect                 greasyfork.org
// @icon                    https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/Finder.jpg
// @grant                   GM_xmlhttpRequest
// @grant                   GM_addStyle
// @license                 MIT

// ==/UserScript==
const translate = (function () {
    const userLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
    const strings = {
        'en': {
            Author: 'Author',
            Installs: 'Installs',
            DailyInstalls: 'Daily Installs',
            Created: 'Created',
            Updated: 'Updated',
            Rating: 'Rating',
            LoadingScripts: 'Loading scripts...',
            LoadMore: 'Load more',
            AllScriptsLoaded: 'All scripts loaded',
            SearchPlaceholder: 'Search scripts...',
            ViewOnGreasyfork: 'View on Greasyfork',
            errorMessage: 'Failed to retrieve script information or there are no available scripts for this domain.',
            Loading: 'Loading...',
            Scripts: 'Scripts'
        },
        'zh-CN': {
            Author: '作者',
            Installs: '安装数量',
            DailyInstalls: '每日安装',
            Created: '创建日期',
            Updated: '更新时间',
            Rating: '评分',
            LoadingScripts: '正在加载脚本...',
            LoadMore: '加载更多',
            AllScriptsLoaded: '所有脚本已加载',
            SearchPlaceholder: '搜索脚本...',
            ViewOnGreasyfork: '在Greasyfork查看',
            errorMessage: '无法检索脚本信息或该域没有可用的脚本。',
            Loading: '载入中...',
            Scripts: '脚本'

        },
        'zh-TW': {
            Author: '作者',
            Installs: '安裝數量',
            DailyInstalls: '每日安裝',
            Created: '創建日期',
            Updated: '更新日期',
            Rating: '評分',
            LoadingScripts: '正在載入腳本...',
            LoadMore: '載入更多',
            AllScriptsLoaded: '所有腳本已載入',
            SearchPlaceholder: '搜尋腳本...',
            ViewOnGreasyfork: '在Greasyfork查看',
            errorMessage: '無法檢索腳本信息或該域沒有可用的腳本。',
            Loading: '載入中...',
            Scripts: '腳本'
        },
        'ja': {
            Author: '著者',
            Installs: 'インストール数',
            DailyInstalls: '日次インストール数',
            Created: '作成日',
            Updated: '更新日',
            Rating: '評価',
            LoadingScripts: 'スクリプトを読み込んでいます...',
            LoadMore: 'もっと読む',
            AllScriptsLoaded: 'すべてのスクリプトが読み込まれました',
            SearchPlaceholder: 'スクリプトを検索...',
            ViewOnGreasyfork: 'Greasyforkで見る',
            errorMessage: 'スクリプト情報の取得に失敗するか、またはこのドメインには利用可能なスクリプトがありません。',
            Loading: '読み込み中...',
            Scripts: 'スクリプト'
        },
        'vi': {
            Author: 'Tác giả',
            Installs: 'Số lượt cài đặt',
            DailyInstalls: 'Cài đặt hàng ngày',
            Created: 'Ngày tạo',
            Updated: 'Ngày cập nhật',
            Rating: 'Đánh giá',
            LoadingScripts: 'Đang tải các tập lệnh...',
            LoadMore: 'Tải thêm',
            AllScriptsLoaded: 'Đã tải tất cả các tập lệnh',
            SearchPlaceholder: 'Tìm kiếm tập lệnh...',
            ViewOnGreasyfork: 'Xem trên Greasyfork',
            errorMessage: 'Không thể truy xuất thông tin tập lệnh hoặc không có tập lệnh nào có sẵn cho miền này.',
            Loading: 'Đang tải...',
            Scripts: 'Tập lệnh'
        }
    }
    // 返回翻译函数
    return (id, lang = '') => {
        const selectedLang = lang || userLang
        return (strings[selectedLang] || strings.en)[id] || strings.en[id]
    }
}());
(function () {
    const domainParts = window.location.hostname.split('.').slice(-2)
    const domain = domainParts.join('.')
    const errorMessage = translate('errorMessage')
    let neverLoadedScripts = true
    let collapsed = true
    let loadedPages = 0

    function getScriptsInfo(domain, page = 1) {
        var url = `https://greasyfork.org/scripts/by-site/${domain}?filter_locale=0&sort=updated&page=${page}`

        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            onload: (response) => {
                // 解析结果
                const parser = new DOMParser()
                const doc = parser.parseFromString(response.responseText, "text/html")
                const scripts = doc.querySelector("#browse-script-list")?.querySelectorAll('[data-script-id]')
                let scriptsInfo = []

                if (!scripts) {
                    scriptsInfo = errorMessage
                } else {
                    for (var i = 0; i < scripts.length; i++) {
                        scriptsInfo.push(parseScriptInfo(scripts[i]))
                    }
                }

                // 处理对象
                const loadMoreButton = document.querySelector('.load-more')
                console.log(doc.querySelector('.next_page'))
                if (doc.querySelector('.next_page') == null || doc.querySelector('.next_page')?.getAttribute('aria-disabled') === 'true') {
                    loadedPages = 'max'
                    loadMoreButton.disabled = true
                    loadMoreButton.textContent = translate('AllScriptsLoaded')
                } else {
                    loadMoreButton.disabled = false
                    loadMoreButton.textContent = translate('LoadMore')
                }
                // console.log(scriptsInfo);
                document.querySelector('.wait-loading').style.display = 'none'
                loadMoreButton.style.display = 'block'
                appendScriptsInfo(scriptsInfo)
                updateMatches()

                typeof (loadedPages) === 'number' ? loadedPages += 1 : loadedPages = loadedPages
                // console.log(loadedPages)
            },
            onerror: () => {
                console.log("Some error occurred!")
                if (loadedPages === 0) {
                    appendScriptsInfo(scriptsInfo)
                }
                const scriptsInfo = errorMessage
                document.querySelector('.wait-loading').style.display = 'none'
            }
        })
    }

    // 解析脚本信息
    function parseScriptInfo(script) {
        return {
            id: script.getAttribute('data-script-id'),
            name: script.getAttribute('data-script-name'),
            author: script.querySelector("dd.script-list-author").textContent,
            description: script.querySelector(".script-description").textContent,
            version: script.getAttribute('data-script-version'),
            url: 'https://greasyfork.org/scripts/' + script.getAttribute('data-script-id'),
            createDate: script.getAttribute('data-script-created-date'),
            updateDate: script.getAttribute('data-script-updated-date'),
            installs: script.getAttribute('data-script-total-installs'),
            dailyInstalls: script.getAttribute('data-script-daily-installs'),
            ratingScore: script.getAttribute('data-script-rating-score')
        }
    }

    // 插入脚本
    function appendScriptsInfo(scriptsInfo) {
        const infoList = document.querySelector('.info-list')
        if (scriptsInfo === errorMessage) {
            //  infoList.innerHTML = errorMessage;
            const loadMoreButton = document.querySelector('.load-more')
            loadMoreButton.disabled = true
            loadMoreButton.textContent = translate('AllScriptsLoaded')
            loadMoreButton.innerHTML = errorMessage
        } else {
            for (var i = 0; i < scriptsInfo.length; i++) {
                var script = scriptsInfo[i]
                var listItem = document.createElement('li')
                listItem.className = 'info-item'

                var scriptContainer = document.createElement('div')
                scriptContainer.className = 'script-container'

                var nameElement = document.createElement('a')
                nameElement.className = 'mscript-link'
                nameElement.innerText = script.name
                nameElement.href = script.url
                nameElement.target = '_blank'

                var descriptionElement = document.createElement('p')
                descriptionElement.className = 'script-description'
                descriptionElement.innerHTML = script.description

                var detailsContainer = document.createElement('div')
                detailsContainer.className = 'details-container'

                // 创建一键安装按钮
                var installButton = document.createElement('a')
                installButton.className = 'install-button'
                installButton.innerText = `Install ${script.version}`
                installButton.href = `https://greasyfork.org/scripts/${script.id}/code/script.user.js`

                const details = [
                    { key: translate('Author'), value: script.author },
                    { key: translate('Installs'), value: script.installs },
                    { key: translate('DailyInstalls'), value: script.dailyInstalls },
                    { key: translate('Created'), value: script.createDate },
                    { key: translate('Updated'), value: script.updateDate },
                    { key: translate('Rating'), value: script.ratingScore }
                ]

                for (let i = 0; i < details.length; i++) {
                    const spanElement = document.createElement('span')
                    spanElement.className = 'script-details'
                    spanElement.innerText = `${details[i].key}:\n${details[i].value}`
                    detailsContainer.appendChild(spanElement)
                }

                scriptContainer.appendChild(nameElement)
                scriptContainer.appendChild(descriptionElement)
                scriptContainer.appendChild(detailsContainer)
                scriptContainer.appendChild(installButton)

                listItem.appendChild(scriptContainer)
                listItem.scriptId = script.id
                infoList.appendChild(listItem)
            }
        }
    }

    function setupUI() {
        GM_addStyle(`
    scrbutton.script-button {
        position: fixed;
        bottom: 20%;
        right: -50px;
        transform: translateY(50%);
        padding: 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        background-color: #1e90ff;
        color: #ffffff;
        cursor: pointer;
        transition: right 0.3s;
        z-index: 9999999999999999;
    }
    div.info-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 650px;
    padding: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 9999;
    max-height: 80vh;
    overflow-y: auto;
}
    ul.info-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li.info-item {
        margin-bottom: 15px;
        padding: 12px;
        padding-bottom: 22px;
        display: flex;
        flex-direction: column;
        border: 1px solid #1e90ff;
        border-radius: 5px;
    }
    .div.script-container {
        display: flex;
        flex-direction: column;
    }
   a.mscript-link {
        font-size: 18px !important;
        font-weight: bold !important;
        margin-bottom: 5px !important;
        color: #1e90ff !important;
    }
    p.script-description {
        color: black !important;
        margin-top: 2px;
        margin-bottom: 5px;
        font-size: 16px;
    }
    div.details-container {
        font-size: 15px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    span.script-details {
        font: !important;
        color: black !important;
        flex-grow: 1 !important;
        text-align: center !important;
        border: 1px solid #1e90ff !important;
        border-radius: 5px !important;
        margin: 4px !important;
    }
    div.table-header {
        color: #1e90ff !important;
        font-size: 25px;
        font-weight: bold;
    }
    input.script-search-input {
        width: 96% !important;
        padding: 10px !important;
        font-size: 18px !important;
        border: 1px solid #1e90ff !important;
        border-radius: 4px !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) !important;
        margin-bottom: 15px !important;
        margin-top: 20px !important;
    }
    a.install-button {
        font-size: 20px;
        background-color: green;
        color: white;
        padding: 12px;
    }
    button.to-greasyfork {
        position: absolute;
        top: 12px;
        right: 12px;
        border-radius: 4px;
        padding: 8px;
        font-size: 16px;
        border: none;
        background-color: #1e90ff;
        color: #ffffff;
        cursor: pointer;
    }
    span.match-count {
        background-color: #1e90ff;
        font-size: 25px;
        font-weight: bold;
        color: white;
        padding: 6px;
        position: absolute;
        right: 50%;
        border-radius: 12px;
        top: 10px;
    }
    div.wait-loading {
        font-size: 20px;
        font-weight: bold;
        color: #1e90ff;
        animation: blink 1s infinite;
    }
    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    button.load-more {
        border-radius: 4px;
        padding: 8px;
        font-size: 16px;
        border: none;
        background-color: #1e90ff;
        color: #ffffff;
        cursor: pointer;
        position: relative;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
    }
    button.load-more:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    /* Mobile styles */
    @media (max-width: 600px) {
        scrbutton.script-button {
            right: -30px;
            padding: 8px;
            font-size: 14px;
        }
        span.script-details {
        font-size: 10px !important;
        margin: 2px !important;
        padding: 2px !important;
    }
     span.match-count {
        font-size: 20px;
        padding: 4px;
    }

    button.to-greasyfork {
        padding: 6px;
        font-size: 14px;
    }

     a.install-button {
        font-size: 12px;
        padding: 8px;
    }
      div.table-header {
        font-size: 20px;
    }
     div.script-container {
        padding: 10px;
    }
div.info-container {
        top: 10%;
        left: 5%;
        right: 5%;
        transform: none;
        width: calc(90% - 10px); /* 自适应宽度，保持左右边距 */
        max-width: 100%; /* 确保不超出屏幕宽度 */
    }
        a.script-link {
            font-size: 16px !important;
        }
        p.script-description {
            font-size: 14px;
        }
       {

        input.script-search-input {
            width: 92% !important;
            padding: 8px !important;
            font-size: 16px !important;
        }
        span.match-count {
            font-size: 20px;
            padding: 4px;
        }
        button.load-more {
            font-size: 14px;
            padding: 6px;
        }
    }
`)


        // 创建打开列表按钮
        var button = document.createElement('scrbutton')
        button.className = 'script-button'
        button.innerText = translate('Scripts')
        document.addEventListener('fullscreenchange', function () {
            if (document.fullscreenElement) {
                button.style.display = 'none'
            } else {
                button.style.display = 'block'
            }
        })
        // 创建脚本容器
        var infoContainer = document.createElement('div')
        infoContainer.className = 'info-container'

        // 创建搜索框
        var searchInput = document.createElement('input')
        searchInput.type = 'text'
        searchInput.placeholder = translate('SearchPlaceholder')
        searchInput.className = 'script-search-input'

        // 创建指向greasyfork的链接
        var toGreasyfork = document.createElement('button')
        toGreasyfork.className = 'to-greasyfork'
        toGreasyfork.innerText = translate('ViewOnGreasyfork')

        // 创建计数器
        var matchCount = document.createElement('span')
        matchCount.className = 'match-count'

        // 创建表头
        var tableHeader = document.createElement('div')
        tableHeader.className = 'table-header'
        tableHeader.appendChild(document.createTextNode('Script Finder'))
        tableHeader.appendChild(matchCount)
        tableHeader.appendChild(searchInput)
        tableHeader.appendChild(toGreasyfork)

        // 创建脚本列表
        var infoList = document.createElement('ul')
        infoList.className = 'info-list'

        // 创建等待加载
        var waitLoading = document.createElement('div')
        waitLoading.className = 'wait-loading'
        waitLoading.innerText = translate('LoadingScripts')

        // 创建加载更多
        var loadMore = document.createElement('button')
        loadMore.className = 'load-more'
        loadMore.innerText = 'Load more'
        loadMore.style.display = 'none'

        infoList.appendChild(waitLoading)
        infoList.appendChild(loadMore)

        infoContainer.appendChild(tableHeader)
        infoContainer.appendChild(infoList)

        var timeout
        button.addEventListener('mouseenter', function () {
            clearTimeout(timeout)
            button.style.right = '10px'
        })

        button.addEventListener('mouseleave', function () {
            timeout = setTimeout(function () {
                button.style.right = '-50px'
            }, 500)
        })

        button.addEventListener('click', function (event) {
            event.stopPropagation()
            if (collapsed) {
                infoContainer.style.display = "block"
                infoContainer.style.opacity = 1
                collapsed = false
            }
            else {
                infoContainer.style.display = "none"
                infoContainer.style.opacity = 0
                collapsed = true
            }

            if (neverLoadedScripts) {
                getScriptsInfo(domain, 1)
                neverLoadedScripts = false
            }

        })

        infoContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })

        searchInput.addEventListener('input', () => {
            searchScript()
            updateMatches()
        })

        toGreasyfork.addEventListener('click', function () {
            window.open(`https://greasyfork.org/scripts/by-site/${domain}?q=${searchInput.value}&filter_locale=0&sort=updated`)
        })

        loadMore.addEventListener('click', () => {
            if (loadedPages === 'max') {
                return
            }
            const loadMoreButton = document.querySelector('.load-more')
            loadMoreButton.disabled = true
            loadMoreButton.textContent = translate('Loading')
            document.querySelector('.wait-loading').style.display = 'block'
            getScriptsInfo(domain, loadedPages + 1)
        })

        document.body.addEventListener('click', function () {
            clearTimeout(timeout)
            collapsed = true
            button.style.right = '-50px'
            infoContainer.style.opacity = 0
            infoContainer.style.display = "none"
        })

        document.body.appendChild(button)

        document.body.appendChild(infoContainer)

        infoContainer.addEventListener('change', () => {
            updateMatches()
        })
        updateMatches()
    }

    function searchScript() {
        const searchWord = document.querySelector('.script-search-input').value.toLowerCase() // 将要匹配的文本转换为小写
        const scriptList = document.querySelectorAll('.info-item')
        for (let i = 0; i < scriptList.length; i++) {
            const scriptText = scriptList[i].innerText.toLowerCase() // 将检索的文本转换为小写
            if (scriptText.includes(searchWord)) {
                scriptList[i].style.display = 'block'
            } else {
                scriptList[i].style.display = 'none'
            }
        }
    }

    function updateMatches() {
        const matchCount = document.querySelectorAll('.info-item:not([style*="display: none"])').length
        const allCount = document.querySelectorAll('.info-item').length
        document.querySelector('.match-count').innerText = matchCount === allCount ? matchCount : `${matchCount}/${allCount}`
    }

    function main() {
        if (window.self !== window.top) {
            // 在iframe中执行时，直接退出
            return
        }
        setupUI()
    }

    main()


})()
