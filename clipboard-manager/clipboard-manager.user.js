// ==UserScript==
// @name               Web page writing clip version authorization manager
// @name:zh-CN         网页写入剪辑版授权管理器
// @name:ar            صفحة الويب كتابة مدير ترخيص إصدار المقطع
// @name:bg            Мениджър за оторизиране на версия на клип за писане на уеб страница
// @name:cs            Správce autorizace verze klipu pro psaní webové stránky
// @name:da            Websideskrivende klipversionsautorisationsmanager
// @name:de            Autorisierungsmanager für Webseiten-Schreibclip-Versionen
// @name:el            Διαχείριση εξουσιοδότησης έκδοσης κλιπ συγγραφής ιστοσελίδας
// @name:en            Web page writing clip version authorization manager
// @name:eo            Retpaĝo skribanta klipo versio rajtigo administranto
// @name:es            Administrador de autorización de versión de clip de escritura de página web
// @name:fi            Web-sivun kirjoitusleikkeen valtuutushallinta
// @name:fr            Gestionnaire d’autorisation de version de clip d’écriture de page Web
// @name:he            מנהל הרשאות גרסאות כתיבת דף אינטרנט
// @name:hr            Upravitelj autorizacije verzije isječka za pisanje web stranice
// @name:hu            Weboldal írási klip verzió engedélyezési kezelője
// @name:id            Manajer otorisasi versi klip penulisan halaman web
// @name:it            Gestore delle autorizzazioni della versione del clip di scrittura della pagina Web
// @name:ja            Web ページ書き込みクリップ バージョン認証マネージャー
// @name:ka            ვებ გვერდის ჩაწერის კლიპის ვერსიის ავტორიზაციის მენეჯერი
// @name:ko            웹 페이지 작성 클립 버전 권한 관리자
// @name:nl            Autorisatiemanager voor het schrijven van clips voor webpagina’s
// @name:nb            Nettsideskriving klipp versjon autorisasjon manager
// @name:pl            Menedżer autoryzacji wersji klipu do pisania stron internetowych
// @name:pt-BR         Gerenciador de autorização de versão de clipe de gravação de página da Web
// @name:ro            Manager de autorizare a versiunii clipului de scriere a paginii web
// @name:ru            Менеджер авторизации версий клипов для написания веб-страниц
// @name:sk            Manažér autorizácie verzie klipu na písanie webovej stránky
// @name:sr            Менаџер ауторизације верзије клипа за писање веб странице
// @name:sv            Webbsida skriver klipp version auktoriseringshanterare
// @name:th            ผู้จัดการการอนุญาตเวอร์ชันการเขียนคลิปหน้าเว็บ
// @name:tr            Web sayfası yazma klibi sürüm yetkilendirme yöneticisi
// @name:ug            تور بەت يېزىش قىستۇرما نەشرىگە ھوقۇق باشقۇرغۇچى
// @name:uk            Менеджер авторизації версії кліпу для написання веб-сторінки
// @name:vi            Trình quản lý ủy quyền phiên bản clip viết trang web
// @name:zh-SG         网页写入剪辑版授权管理器
// @name:zh            网页写入剪辑版授权管理器
// @name:zh-TW         網頁寫入剪輯版授權管理員
// @name:zh-HK         網頁寫入剪輯版授權管理員
// @name:fr-CA         Gestionnaire d’autorisation de version de clip d’écriture de page Web
// @description:zh-CN  管理网页对剪贴板的写入行为防止未经授权的自动复制和禁用音视频内容预载及自动播放。
// @description        Manage the writing behavior of web pages to the clipboard to prevent unauthorized automatic copying and disable audio and video content preloading and automatic playback.
// @description:ar     إدارة سلوك الكتابة لصفحات الويب في الحافظة لمنع النسخ التلقائي غير المصرح به وتعطيل التحميل المسبق لمحتوى الصوت والفيديو والتشغيل التلقائي.
// @description:bg     Управлявайте поведението на запис на уеб страници в клипборда, за да предотвратите неоторизирано автоматично копиране и да деактивирате предварителното зареждане на аудио и видео съдържание и автоматичното възпроизвеждане.
// @description:cs     Spravujte chování při zápisu webových stránek do schránky, abyste zabránili neoprávněnému automatickému kopírování a deaktivovali předběžné načítání zvukového a obrazového obsahu a automatické přehrávání.
// @description:da     Administrer skriveadfærden for websider til udklipsholderen for at forhindre uautoriseret automatisk kopiering og deaktiver forudindlæsning af lyd- og videoindhold og automatisk afspilning.
// @description:de     Verwalten Sie das Schreibverhalten von Webseiten in die Zwischenablage, um unbefugtes automatisches Kopieren zu verhindern und das Vorladen von Audio- und Videoinhalten sowie die automatische Wiedergabe zu deaktivieren.
// @description:el     Διαχειριστείτε τη συμπεριφορά γραφής των ιστοσελίδων στο πρόχειρο για να αποτρέψετε μη εξουσιοδοτημένη αυτόματη αντιγραφή και να απενεργοποιήσετε την προφόρτωση περιεχομένου ήχου και βίντεο και την αυτόματη αναπαραγωγή.
// @description:en     Manage the writing behavior of web pages to the clipboard to prevent unauthorized automatic copying and disable audio and video content preloading and automatic playback.
// @description:eo     Administru la skriban konduton de retpaĝoj al la tondujo por malhelpi neaŭtorizitan aŭtomatan kopiadon kaj malŝalti aŭd- kaj videenhavan antaŭŝarĝon kaj aŭtomatan reproduktadon.
// @description:es     Administre el comportamiento de escritura de páginas web en el portapapeles para evitar copias automáticas no autorizadas y deshabilite la precarga y reproducción automática de contenido de audio y video.
// @description:fi     Hallitse web-sivujen kirjoituskäyttäytymistä leikepöydälle estääksesi luvattoman automaattisen kopioinnin ja poista käytöstä ääni- ja videosisällön esilataus ja automaattinen toisto.
// @description:fr     Gérez le comportement d’écriture des pages Web dans le presse-papiers pour empêcher la copie automatique non autorisée et désactiver le préchargement et la lecture automatique du contenu audio et vidéo.
// @description:he     נהל את התנהגות הכתיבה של דפי אינטרנט ללוח כדי למנוע העתקה אוטומטית בלתי מורשית ולהשבית טעינה מראש של תוכן אודיו ווידאו והשמעה אוטומטית.
// @description:hr     Upravljajte ponašanjem pisanja web stranica u međuspremnik kako biste spriječili neovlašteno automatsko kopiranje i onemogućili prethodno učitavanje audio i video sadržaja i automatsku reprodukciju.
// @description:hu     Kezelje a weboldalak vágólapra írási viselkedését, hogy megakadályozza a jogosulatlan automatikus másolást, valamint letiltja az audio- és videotartalom előtöltését és az automatikus lejátszást.
// @description:id     Kelola perilaku penulisan halaman web ke clipboard untuk mencegah penyalinan otomatis tanpa izin dan menonaktifkan pramuat konten audio dan video serta pemutaran otomatis.
// @description:it     Gestisci il comportamento di scrittura delle pagine web negli appunti per impedire la copia automatica non autorizzata e disabilitare il precaricamento e la riproduzione automatica dei contenuti audio e video.
// @description:ja     Web ページのクリップボードへの書き込み動作を管理して、不正な自動コピーを防止し、オーディオおよびビデオ コンテンツのプリロードと自動再生を無効にします。
// @description:ka     მართეთ ვებ გვერდების ჩაწერის ქცევა ბუფერში, რათა თავიდან აიცილოთ არაავტორიზებული ავტომატური კოპირება და გამორთოთ აუდიო და ვიდეო კონტენტის წინასწარ ჩატვირთვა და ავტომატური დაკვრა.
// @description:ko     웹페이지의 클립보드 쓰기 동작을 관리하여 무단 자동 복사를 방지하고 오디오 및 비디오 콘텐츠 사전 로드 및 자동 재생을 비활성화합니다.
// @description:nl     Beheer het schrijfgedrag van webpagina’s naar het klembord om ongeoorloofd automatisch kopiëren te voorkomen en om het vooraf laden en automatisch afspelen van audio- en video-inhoud uit te schakelen.
// @description:nb     Administrer skriveoppførselen til nettsider til utklippstavlen for å forhindre uautorisert automatisk kopiering og deaktiver forhåndsinnlasting av lyd- og videoinnhold og automatisk avspilling.
// @description:pl     Zarządzaj zachowaniem stron internetowych podczas zapisywania w schowku, aby zapobiec nieautoryzowanemu automatycznemu kopiowaniu oraz wyłączyć wstępne ładowanie i automatyczne odtwarzanie treści audio i wideo.
// @description:pt-BR  Gerencie o comportamento de gravação de páginas da web na área de transferência para evitar cópias automáticas não autorizadas e desativar o pré-carregamento e a reprodução automática de conteúdo de áudio e vídeo.
// @description:ro     Gestionați comportamentul de scriere a paginilor web în clipboard pentru a preveni copierea automată neautorizată și pentru a dezactiva preîncărcarea conținutului audio și video și redarea automată.
// @description:ru     Управляйте процессом записи веб-страниц в буфер обмена, чтобы предотвратить несанкционированное автоматическое копирование и отключить предварительную загрузку и автоматическое воспроизведение аудио- и видеоконтента.
// @description:sk     Spravujte správanie pri zápise webových stránok do schránky, aby ste zabránili neoprávnenému automatickému kopírovaniu a zakázali predbežné načítanie zvukového a video obsahu a automatické prehrávanie.
// @description:sr     Управљајте понашањем писања веб страница у клипборд да бисте спречили неовлашћено аутоматско копирање и онемогућили претходно учитавање аудио и видео садржаја и аутоматску репродукцију.
// @description:sv     Hantera skrivbeteendet för webbsidor till urklipp för att förhindra obehörig automatisk kopiering och inaktivera förladdning av ljud- och videoinnehåll och automatisk uppspelning.
// @description:th     จัดการลักษณะการเขียนของหน้าเว็บไปยังคลิปบอร์ดเพื่อป้องกันการคัดลอกอัตโนมัติโดยไม่ได้รับอนุญาต และปิดใช้งานการโหลดเนื้อหาเสียงและวิดีโอล่วงหน้าและการเล่นอัตโนมัติ
// @description:tr     Yetkisiz otomatik kopyalamayı önlemek ve ses ve video içeriğinin önceden yüklenmesini ve otomatik oynatmayı devre dışı bırakmak için web sayfalarının panoya yazma davranışını yönetin.
// @description:ug     تور بەتلەرنىڭ يېزىش ھەرىكىتىنى چاپلاش تاختىسىغا باشقۇرۇپ ، رۇخسەتسىز ئاپتوماتىك كۆچۈرۈلۈشنىڭ ئالدىنى ئالىدۇ ۋە ئاۋاز ۋە سىن مەزمۇنىنى ئالدىن قاچىلاش ۋە ئاپتوماتىك قويۇشنى چەكلەيدۇ.
// @description:uk     Керуйте поведінкою запису веб-сторінок у буфер обміну, щоб запобігти неавторизованому автоматичному копіюванню та вимкнути попереднє завантаження аудіо- та відеовмісту та автоматичне відтворення.
// @description:vi     Quản lý hành vi ghi của các trang web vào bảng nhớ tạm để ngăn chặn việc sao chép tự động trái phép, đồng thời tắt tính năng tải trước nội dung âm thanh và video cũng như tự động phát lại.
// @description:zh-SG  管理网页对剪贴板的写入行为防止未经授权的自动复制和禁用音视频内容预载及自动播放。
// @description:zh     管理网页对剪贴板的写入行为防止未经授权的自动复制和禁用音视频内容预载及自动播放。
// @description:zh-TW  管理網頁對剪貼簿的寫入行為防止未經授權的自動複製和停用音視頻內容預載及自動播放。
// @description:zh-HK  管理網頁對剪貼簿的寫入行為防止未經授權的自動複製和停用音視頻內容預載及自動播放。
// @description:fr-CA  Gérez le comportement d’écriture des pages Web dans le presse-papiers pour empêcher la copie automatique non autorisée et désactiver le préchargement et la lecture automatique du contenu audio et vidéo.
// @namespace          https://github.com/ChinaGodMan/UserScripts
// @author             人民的勤务员 <china.qinwuyuan@gmail.com> Sky,仰望星空
// @version            1.2.3.1
// @match              *://*/*
// @run-at             document-body
// @license            MIT
// @grant              GM_setClipboard
// @icon               data:image/png;base64,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
// @supportURL         https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL        https://github.com/ChinaGodMan/UserScripts
// @homepage           https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

//在其他地方下载的脚本，作者不知道是谁很不错，防范牛皮癣 。用Chatgpt修改了下，让脚本在PC端浏览时可以使用快捷键复制
!function () {
    const userLang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        'en'
    const translations = {
        en: {
            ask: 'Is it allowed for the webpage to copy the following content?',
            cancel: 'The webpage\'s clipboard writing has been blocked',
            save: 'The webpage has been allowed to write to the clipboard'
        },
        'zh-CN,zh,zh-SG': {
            ask: '允许网页复制以下内容吗？',
            cancel: '已阻止网页写入剪贴板',
            save: '已允许网页写入剪贴板'
        },
        'zh-TW,zh-HK,zh-MO': {
            ask: '允許網頁複製以下內容嗎？',
            cancel: '已阻止網頁寫入剪貼板',
            save: '已允許網頁寫入剪貼板'
        },
        vi: {
            ask: 'Có cho phép trang web sao chép nội dung sau không?',
            cancel: 'Đã chặn trang web ghi vào clipboard',
            save: 'Trang web đã được phép ghi vào clipboard'
        },
        ja: {
            ask: 'ウェブページが以下の内容をコピーすることを許可しますか？',
            cancel: 'ウェブページによるクリップボードへの書き込みがブロックされました',
            save: 'ウェブページがクリップボードへの書き込みを許可されました'
        },
        ko: {
            ask: '웹페이지가 다음 내용을 복사하는 것을 허용하시겠습니까?',
            cancel: '웹페이지의 클립보드 쓰기가 차단되었습니다',
            save: '웹페이지가 클립보드에 쓰는 것을 허용했습니다'
        }
    }

    const getTranslations = (lang) => {
        for (const key in translations) {
            if (key === lang || key.split(',').includes(lang)) {
                return translations[key]
            }
        }
        return translations['en']
    }
    const translate = new Proxy(
        function (key) {
            const lang = userLang
            const strings = getTranslations(lang)
            return strings[key] || translations['en'][key]
        },
        {
            get(target, prop) {
                const lang = userLang
                const strings = getTranslations(lang)
                return strings[prop] || translations['en'][prop]
            }
        }
    )
    // 定义唯一键，用于防止重复执行
    const key = encodeURIComponent('剪贴板保护&禁用预载:执行判断')
    // 如果已经执行过，直接返回
    if (window[key]) { return }
    try {
        // 标记已经执行过
        window[key] = true
        // 初始化变量
        let red = true
        let green = false
        let orange = false
        // 获取页面中的所有视频元素
        var videoTags = document.getElementsByTagName('video')
        // 创建开关按钮元素
        const sw = document.createElement('div')
        // 设置按钮样式
        sw.style = 'position:fixed!important;bottom:30%;right:10px;z-index:2147483647;width:18px;height:18px;opacity:0.4;border-radius:9px;background:red;visibility:hidden'
        // 将按钮添加到页面中
        document.body.appendChild(sw)
        // 对所有视频元素进行处理，禁用预加载和自动播放
        for (var i = 0; i < videoTags.length; i++) {
            videoTags[i].setAttribute('preload', 'metadata')
            videoTags[i].removeAttribute('autoplay')
        }
        // 获取页面中的所有音频元素
        var audioTags = document.getElementsByTagName('audio')
        // 对所有音频元素进行处理，禁用预加载和自动播放
        for (var video = 0; video < audioTags.length; video++) {
            audioTags[video].setAttribute('preload', 'metadata')
            audioTags[video].removeAttribute('autoplay')
        }
        window.navigator.clipboard.writeText = function (text) {
            pc(null, text, true)
        }
        // 显示提示消息的函数
        function Toast(msg, duration, backgroundColor, textColor) {
            duration = isNaN(duration) ? 3000 : duration
            backgroundColor = backgroundColor || 'rgba(0, 0, 0, 0.7)'
            textColor = textColor || 'rgb(255, 255, 255)'
            var m = document.createElement('div')
            m.innerHTML = msg
            m.style.cssText = 'max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: ' + textColor + ';line-height: 40px;text-align: center;border-radius: 12px;position: fixed;top: 95%;left: 50%;transform: translate(-50%, -50%);z-index: 2147483647;background: ' + backgroundColor + ';font-size: 16px;'
            document.body.appendChild(m)
            setTimeout(function () {
                var d = 0.5
                m.style.transition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
                m.style.opacity = '0'
                setTimeout(function () {
                    document.body.removeChild(m)
                }, d * 1000)
            }, duration)
        }

        // 处理复制事件的函数
        function pc(e, selection = window.getSelection().toString(), C = false) {
            if (red) {
                var confirmed = window.confirm(translate.ask + '\n' + selection)
                if (confirmed) {
                    if (C) {
                        GM_setClipboard(selection)
                    }
                    Toast(translate.save, 500, 'rgba(0, 255, 0, 0.7)', 'rgb(255, 255, 255)')
                } else {
                    if (e) {
                        e.preventDefault()
                        e.stopPropagation()
                    }
                    sw.style.visibility = 'visible'
                    Toast(translate.cancel, 500, 'rgba(255, 0, 0, 0.7)', 'rgb(255, 255, 255)')
                }
            } else {//NOTE  - 此处不为red时且来源于为 window.navigator.clipboard.writeText ,需要手动复制到剪辑版.
                if (C) {
                    GM_setClipboard(selection)
                }
            }
            setTimeout(function () {
                sw.style.visibility = 'hidden'
            }, 4000)
            if (C) {
                return Promise.reject('.')
            }

        }
        /*         document.addEventListener('mouseup', (event) => {

                    if (event.button === 2) {
                        handleSelectedText()
                    }
                })
                document.addEventListener('touchend', (event) => {
                    handleSelectedText()
                })
                function handleSelectedText() {
                    let selectedText = window.getSelection().toString().trim()
                    if (selectedText) {
                        if (red) {
                            red = false
                            orange = true
                            setTimeout(() => {
                                red = true
                                orange = false
                            }, 5000)
                        }
                    }
                } */
        // 添加复制事件监听器
        document.addEventListener('copy', (e) => pc(e), { 'passive': false, 'capture': true })
        // 遍历所有iframe元素，为其内容添加复制事件监听器
        Array.from(document.getElementsByTagName('iframe')).forEach((i) => i.contentDocument.addEventListener('copy', (e) => pc(e), { 'passive': false, 'capture': true }))
        // 点击开关按钮的事件处理
        sw.addEventListener('click', function (e) {
            if (!orange) {
                sw.style.background = red ? 'green' : 'red'
                red = !red
                green = !green
            } else {
                sw.style.background = 'red'
                red = !red
                orange = !orange
            }
        }, { 'passive': true })
        // 右键菜单事件处理
        document.addEventListener('contextmenu', function (e) {
            if (!green) {
                sw.style.visibility = 'visible'
                sw.style.background = 'orange'
                red = false
                orange = true
                setTimeout(function () { sw.style.visibility = 'hidden' }, 4000)
            }
        }, { 'passive': true })
        // 复制完成后的事件处理
        document.addEventListener('copy', function (e) {
            if (orange) {
                sw.style.background = 'red'
                red = true
                orange = false
                sw.style.visibility = 'hidden'
            }
        }, { 'passive': true })
        // 添加键盘事件监听器，支持快捷键复制
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.key === 'c') {
                sw.style.visibility = 'visible'
                if (red) {
                    sw.style.background = 'orange'
                    red = false
                    orange = true
                }
            }
        }, { 'passive': true })
        // 鼠标按下事件处理
        document.addEventListener('mousedown', function (e) {
            if (orange) {
                sw.style.background = 'red'
                red = true
                orange = false
            }
        }, { 'passive': true })
    } catch (err) {
        console.log('剪贴板保护&禁用预载：', err)
    }
}()
