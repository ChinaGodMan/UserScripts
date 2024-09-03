// ==UserScript==
// @name         GreasyFork Discussion Watcher
// @description  On GreasyFork, when there are new replies to your scripts or discussions you're involved in, the latest discussion content will be displayed on the webpage.
// @name:zh-CN        GreasyFork 通知助手
// @description:zh-CN  当你的脚本或你参与的讨论有新回复时，脚本会在网页上以模态窗口显示最新的讨论内容。
// @name:zh-TW        GreasyFork 通知助手
// @description:zh-TW  當你的腳本或你參與的討論有新回覆時，腳本會在網頁上以模態窗口顯示最新的討論內容。
// @name:pt-BR        GreasyFork Notificador
// @description:pt-BR  Quando seu script ou discussão em que você está participando tiver uma nova resposta, o script exibirá o conteúdo mais recente da discussão em uma janela modal na página.
// @name:de          GreasyFork Benachrichtigungsassistent
// @description:de    Wenn Ihr Skript oder eine Diskussion, an der Sie teilnehmen, eine neue Antwort erhält, wird das Skript den neuesten Diskussionsinhalt in einem Modalfenster auf der Seite anzeigen.
// @name:fr          GreasyFork Assistant de Notification
// @description:fr    Lorsque votre script ou une discussion à laquelle vous participez reçoit une nouvelle réponse, le script affichera le contenu le plus récent de la discussion dans une fenêtre modale sur la page.
// @name:en          GreasyFork Notification Assistant
// @description:en    When your script or a discussion you are participating in receives a new reply, the script will display the latest discussion content in a modal window on the page.
// @name:es          GreasyFork Asistente de Notificaciones
// @description:es    Cuando tu script o una discusión en la que participas recibe una nueva respuesta, el script mostrará el contenido más reciente de la discusión en una ventana modal en la página.
// @name:ru          GreasyFork Уведомления
// @description:ru    Когда ваш скрипт или обсуждение, в котором вы участвуете, получает новый ответ, скрипт отображает последнее содержимое обсуждения в модальном окне на странице.
// @name:ko          GreasyFork 알림 도우미
// @description:ko    당신의 스크립트 또는 당신이 참여하고 있는 논의에 새 답글이 달리면, 스크립트가 최신 논의 내용을 모달 창으로 페이지에 표시합니다.
// @name:ja          GreasyFork 通知アシスタント
// @description:ja    あなたのスクリプトや参加しているディスカッションに新しい返信があると、スクリプトが最新のディスカッション内容をモーダルウィンドウでページに表示します。
// @name:vi          GreasyFork Trợ Lý Thông Báo
// @description:vi    Khi kịch bản của bạn hoặc một cuộc thảo luận mà bạn tham gia có phản hồi mới, kịch bản sẽ hiển thị nội dung thảo luận mới nhất trong một cửa sổ modal trên trang.
// @name:ms          GreasyFork Pembantu Pemberitahuan
// @description:ms    Apabila skrip anda atau perbincangan yang anda sertai menerima balasan baru, skrip akan memaparkan kandungan perbincangan terkini dalam tetingkap modal di halaman.
// @name:cy          GreasyFork Cymorth Rhybudd
// @description:cy    Pan fo'ch sgript neu drafodaeth rydych chi'n cymryd rhan ynddi'n derbyn ateb newydd, bydd y sgript yn dangos cynnwys y drafodaeth ddiweddaraf mewn ffenestr modal ar y dudalen.
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @version      1.1.0.0
// @icon           https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://greasyfork.org/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
(function () {
    'use strict'
    const config = {
        isInstalled: GM_getValue('Installed', false),//第一次不加载~,
        lastUpdated: GM_getValue('lastUpdated', 0),//上次更新时间
        delay: GM_getValue('delay', "30m") // 格式如下: 1h1m1s, 1h1s, 1m, 1s, 1m1s
    }
    GM_registerMenuCommand("Set refresh time", function () {
        const currentDelay = config.delay
        const newDelay = prompt("New refresh time (example: 1h30m1s, 1s0m30s,1h1s, 1m, 1s):", currentDelay)
        if (newDelay !== null) {
            if (/^\d+(h|m|s)?(\d+(h|m|s)?)*$/.test(newDelay)) {
                GM_setValue('delay', newDelay)
                config.delay = newDelay
            } else {
                alert("The input format is incorrect, please re-enter!")
            }
        }
    })
    function timeToSeconds(timeStr) {
        let hours = 0, minutes = 0, seconds = 0
        const hoursMatch = timeStr.match(/(\d+)h/)
        const minutesMatch = timeStr.match(/(\d+)m/)
        const secondsMatch = timeStr.match(/(\d+)s/)
        if (hoursMatch) {
            hours = parseInt(hoursMatch[1], 10)
        }
        if (minutesMatch) {
            minutes = parseInt(minutesMatch[1], 10)
        }
        if (secondsMatch) {
            seconds = parseInt(secondsMatch[1], 10)
        }
        let totalSeconds = (hours * 3600) + (minutes * 60) + seconds
        return totalSeconds
    }
    function isUpdate() {
        const now = Math.floor(new Date().getTime() / 1000)
        const lastUpdated = config.lastUpdated
        const secondsDifference = now - lastUpdated
        if (secondsDifference > timeToSeconds(config.delay)) {
            GM_setValue('lastUpdated', now)
            console.log(`时间超过${config.delay} 进行更新`)
            return true
        }
        return false
    }
    function fetchAndDisplayDiscussions(urls) {
        // GM_setValue('discussions', [])
        if (!isUpdate()) {
            return
        }
        let discussions = GM_getValue('discussions', [])
        let fetchPromises = []
        let itemCount = 0
        var modalHTML = `
            <div id="discussion-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; visibility: hidden;align-items: center; justify-content: center; z-index: 1000;">
                <div id="modal-content" style="background: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); max-height: 80vh; overflow-y: auto; width: 80%; max-width: 600px; padding: 20px; font-family: Arial, sans-serif;">
                    <ul id="discussion-list" style="list-style-type: none; padding: 0; margin: 0;"></ul>
                    <button id="close-button" style="background-color: #ff5e5e; border: none; color: #fff; padding: 5px 10px; cursor: pointer; border-radius: 5px; font-family: Arial, sans-serif; font-size: 14px;">Close</button>
                </div>
            </div>
        `
        document.body.insertAdjacentHTML('beforeend', modalHTML)
        var discussionList = document.getElementById('discussion-list')
        var modalContent = document.getElementById('modal-content')
        urls.forEach(url => {
            fetchPromises.push(
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        var parser = new DOMParser()
                        var doc = parser.parseFromString(data, 'text/html')
                        var elements = doc.querySelectorAll('.discussion-list > div > div')
                        elements.forEach(function (element) {
                            var discussionTitle = element.querySelector('.discussion-title')
                            var relativeTimes = element.querySelectorAll('relative-time')
                            if (!discussionTitle || relativeTimes.length === 0) return
                            var discussionTitleHref = discussionTitle.getAttribute('href')
                            var latestRelativeTime = relativeTimes[relativeTimes.length - 1].getAttribute('datetime')
                            var existingDiscussion = discussions.find(function (disc) {
                                return disc.discussionTitleHref === discussionTitleHref
                            })
                            if (existingDiscussion && existingDiscussion.relativeTime === latestRelativeTime) return
                            var discussionInfo = {
                                discussionTitleHref: discussionTitleHref,
                                relativeTime: latestRelativeTime,
                                userName: element.querySelector('a.user-link') ? element.querySelector('a.user-link').textContent.trim() : null
                            }
                            if (existingDiscussion) {
                                existingDiscussion.relativeTime = latestRelativeTime
                                existingDiscussion.userName = discussionInfo.userName
                            } else {
                                discussions.push(discussionInfo)
                            }
                            var listItemHTML = '<li class="discussion-item">' + element.innerHTML + '<hr style="margin: 10px 0; border: none; border-top: 1px solid #ddd;"></li>'
                            discussionList.innerHTML += listItemHTML
                            itemCount++
                        })
                    })
            )
        })
        Promise.all(fetchPromises).then(() => {
            if (itemCount === 0) {
                return
            }
            // 将讨论信息保存到 GM_setValue
            GM_setValue('discussions', discussions)
            if (!config.isInstalled) {
                console.log('首次安装时,不弹出:')
                GM_setValue('Installed', true)
                return
            }
            // 计算关闭按钮的位置，并动态设置
            var closeButton = document.getElementById('close-button')
            closeButton.style.position = 'absolute'
            closeButton.style.top = `${discussionList.offsetTop - 50}px`
            closeButton.style.left = `${discussionList.right}px`
            document.getElementById('discussion-modal').style.visibility = 'visible'
            // 设置所有链接在新窗口中打开
            var links = discussionList.querySelectorAll('a')
            links.forEach(function (link) {
                link.setAttribute('target', '_blank')
            })
            // 添加关闭按钮事件
            closeButton.addEventListener('click', function () {
                document.body.removeChild(document.getElementById('discussion-modal'))
            })
        }).catch(error => {
            console.error('无法获取讨论列表:', error)
        })
    }
    function getUserId() {
        const profileLinkElement = document.querySelector("#nav-user-info > span.user-profile-link > a")
        if (profileLinkElement) {
            const href = profileLinkElement.getAttribute('href')
            const match = href.match(/\/users\/(\d+)-/)
            if (match) {
                const userId = match[1]
                console.log(userId)
                return userId
            } else {
                console.log('放弃操作,无法找到id')
                return null
            }
        } else {
            return null
        }
    }
    const userId = getUserId()
    if (userId) {
        fetchAndDisplayDiscussions([
            `https://greasyfork.org/discussions?user=${userId}`,
            'https://greasyfork.org/discussions?me=script'
        ])
    } else {
        console.log("没有登录,放弃操作")
    }
})()
