// ==UserScript==
// @name        GitHub CommitMessage Html View
// @description   This script converts commit messages on GitHub into HTML views for clearer visibility of commit details. It automatically transforms commit message lists, commit headers, and the latest commit information into HTML format, providing enhanced visual appeal and user experience.
// @name:zh-CN  GitHub 提交信息显示网页视图
// @description:zh-CN  该脚本将 GitHub 上的提交信息转化为 HTML 视图，以更清晰地查看提交详情。它会自动将提交信息列表、提交头部和最新提交信息转化为 HTML 格式，提供更佳的视觉效果和用户体验。
// @name:ar  GitHub إرسال عرض المعلومات على شبكة الإنترنت
// @description:ar  هذا البرنامج النصي سوف GitHub معلومات التقديم على HTML منظر，لرؤية تفاصيل التقديم بشكل أكثر وضوحًا。وسوف يقدم تلقائيا قائمة المعلومات、يتم تحويل رأس الالتزام وأحدث معلومات الالتزام إلى HTML شكل，توفير تأثيرات بصرية أفضل وتجربة المستخدم。
// @name:bg  GitHub Изпращане на информация за показване на уеб изглед
// @description:bg  Този скрипт ще GitHub Информацията за подаване на HTML изглед，за да видите по-ясно подробностите за подаването。Той автоматично ще изпрати списъка с информация、Заглавката на ангажимента и последната информация за ангажимент се преобразуват в HTML формат，Осигурете по-добри визуални ефекти и потребителско изживяване。
// @name:cs  GitHub Odeslat zobrazení informací na webu
// @description:cs  Tento skript bude GitHub Informace o podání na HTML pohled，pro jasnější zobrazení podrobností o odeslání。Automaticky odešle informační seznam、Záhlaví odevzdání a informace o nejnovějším odevzdání se převedou na HTML Formát，Poskytujte lepší vizuální efekty a uživatelský zážitek。
// @name:da  GitHub Indsend informationsvisning webvisning
// @description:da  Dette script vil GitHub Indsendelsesoplysningerne vedr HTML udsigt，for at se indsendelsesdetaljerne mere tydeligt。Det vil automatisk indsende informationslisten、Commit-headeren og seneste commit-information konverteres til HTML Format，Giv bedre visuelle effekter og brugeroplevelse。
// @name:de  GitHub Webansicht zur Anzeige von Informationen übermitteln
// @description:de  Dieses Skript wird GitHub Die Einreichungsinformationen zu HTML Sicht，um die Einreichungsdetails klarer zu sehen。Die Informationsliste wird automatisch übermittelt、Der Commit-Header und die neuesten Commit-Informationen werden konvertiert HTML Format，Bieten Sie bessere visuelle Effekte und ein besseres Benutzererlebnis。
// @name:el  GitHub Υποβολή προβολής πληροφοριών ιστού
// @description:el  Αυτό το σενάριο θα GitHub Οι πληροφορίες υποβολής για HTML θέα，για να δείτε πιο καθαρά τις λεπτομέρειες υποβολής。Θα υποβάλει αυτόματα τη λίστα πληροφοριών、Η κεφαλίδα δέσμευσης και οι πιο πρόσφατες πληροφορίες δέσμευσης μετατρέπονται σε HTML Σχήμα και διάταξις βιβλίου，Παρέχετε καλύτερα οπτικά εφέ και εμπειρία χρήστη。
// @name:en  GitHub Submit information display web view
// @description:en  This script will GitHub The submission information on HTML view，to see submission details more clearly。It will automatically submit the information list、The commit header and latest commit information are converted to HTML Format，Provide better visual effects and user experience。
// @name:eo  GitHub Sendu informojn montri retejon
// @description:eo  Ĉi tiu skripto faros GitHub La submeta informo pri HTML vido，por pli klare vidi prezentaĵojn。Ĝi aŭtomate sendos la informliston、La commit-kapo kaj plej novaj kommit-informoj estas konvertitaj al HTML Formato，Provizu pli bonajn vidajn efikojn kaj sperton de uzanto。
// @name:es  GitHub Enviar información mostrar vista web
// @description:es  Este guión GitHub La información de presentación en HTML vista，para ver los detalles del envío más claramente。Enviará automáticamente la lista de información.、El encabezado de confirmación y la información de confirmación más reciente se convierten a HTML Formato，Proporcionar mejores efectos visuales y experiencia de usuario.。
// @name:fi  GitHub Lähetä tietonäytön verkkonäkymä
// @description:fi  Tämä käsikirjoitus tulee GitHub Lähetystiedot osoitteessa HTML näkymä，nähdäksesi lähetyksen tiedot selkeämmin。Se lähettää tietoluettelon automaattisesti、Toimitusotsikko ja viimeisimmät toimitustiedot muunnetaan muotoon HTML Muoto，Tarjoa parempia visuaalisia tehosteita ja käyttökokemusta。
// @name:fr  GitHub Soumettre des informations, afficher la vue Web
// @description:fr  Ce script sera GitHub Les informations de soumission sur HTML voir，pour voir plus clairement les détails de la soumission。Il soumettra automatiquement la liste d’informations、L’en-tête de validation et les dernières informations de validation sont convertis en HTML Format，Fournir de meilleurs effets visuels et une meilleure expérience utilisateur。
// @name:he  GitHub שלח תצוגת מידע באינטרנט
// @description:he  התסריט הזה יהיה GitHub מידע ההגשה על HTML נוֹף，כדי לראות את פרטי ההגשה בצורה ברורה יותר。זה יגיש אוטומטית את רשימת המידע、כותרת ההתחייבות ופרטי ההתחייבות העדכניים ביותר מומרים ל HTML פוּרמָט，לספק אפקטים חזותיים וחווית משתמש טובים יותר。
// @name:hr  GitHub Pošaljite prikaz informacija na webu
// @description:hr  Ova skripta će GitHub Informacije o podnošenju HTML pogled，da biste jasnije vidjeli detalje prijave。Automatski će poslati popis informacija、Zaglavlje predaje i najnovije informacije o predaji se pretvaraju u HTML Format，Omogućite bolje vizualne efekte i korisničko iskustvo。
// @name:hu  GitHub Információk beküldése webes nézet
// @description:hu  Ez a script fog GitHub A benyújtási információk a HTML kilátás，hogy tisztábban lássák a benyújtás részleteit。Automatikusan elküldi az információs listát、A véglegesítési fejléc és a legutóbbi véglegesítési információ a következőre konvertálódik HTML Formátum，Jobb vizuális effektusok és felhasználói élmény biztosítása。
// @name:id  GitHub Kirim informasi menampilkan tampilan web
// @description:id  Skrip ini akan melakukannya GitHub Informasi penyerahan pada HTML melihat，untuk melihat detail penyerahan lebih jelas。Ini secara otomatis akan mengirimkan daftar informasi、Header komit dan informasi komit terbaru dikonversi menjadi HTML Format，Memberikan efek visual dan pengalaman pengguna yang lebih baik。
// @name:it  GitHub Invia informazioni visualizzando la visualizzazione web
// @description:it  Questo script lo farà GitHub Le informazioni sull’invio su HTML visualizzazione，per visualizzare più chiaramente i dettagli dell’invio。Invierà automaticamente l’elenco delle informazioni、Vengono convertite l’intestazione del commit e le informazioni sul commit più recente HTML Formato，Fornire effetti visivi ed esperienza utente migliori。
// @name:ja  GitHub 情報表示Webビューの送信
// @description:ja  このスクリプトは、 GitHub 投稿情報は、 HTML ビュー，提出物の詳細をより明確に確認するには。情報リストを自動的に送信します、コミットヘッダーと最新のコミット情報が変換されます。 HTML 形式，より優れた視覚効果とユーザーエクスペリエンスを提供する。
// @name:ka  GitHub ინფორმაციის ჩვენების ვებ ხედის გაგზავნა
// @description:ka  ეს სკრიპტი იქნება GitHub წარდგენის შესახებ ინფორმაცია HTML ხედი，წარდგენის დეტალების უფრო ნათლად სანახავად。ის ავტომატურად წარადგენს ინფორმაციის სიას、commit header და უახლესი commit ინფორმაცია გარდაიქმნება HTML ფორმატი，უზრუნველყოს უკეთესი ვიზუალური ეფექტები და მომხმარებლის გამოცდილება。
// @name:ko  GitHub 정보 표시 웹뷰 제출
// @description:ko  이 스크립트는 GitHub 제출정보는 HTML 보다，제출 세부정보를 더 명확하게 보려면。정보 목록이 자동으로 제출됩니다.、커밋 헤더와 최신 커밋 정보는 다음과 같이 변환됩니다. HTML 체재，더 나은 시각 효과와 사용자 경험 제공。
// @name:nl  GitHub Informatie verzenden webweergave weergeven
// @description:nl  Dit script zal GitHub De indieningsinformatie op HTML weergave，om de details van de indiening duidelijker te zien。De informatielijst wordt automatisch verzonden、De commit-header en de laatste commit-informatie worden geconverteerd naar HTML Formaat，Zorg voor betere visuele effecten en gebruikerservaring。
// @name:nb  GitHub Send inn informasjonsvisning på nett
// @description:nb  Dette skriptet vil GitHub Innsendingsinformasjonen på HTML utsikt，for å se innleveringsdetaljer tydeligere。Den vil automatisk sende inn informasjonslisten、Commit-headeren og siste commit-informasjon konverteres til HTML Format，Gi bedre visuelle effekter og brukeropplevelse。
// @name:pl  GitHub Prześlij informacje, aby wyświetlić widok sieciowy
// @description:pl  Ten skrypt to zrobi GitHub Informacje o złożeniu dot HTML pogląd，aby wyraźniej zobaczyć szczegóły przesłania。Automatycznie prześle listę informacji、Nagłówek zatwierdzenia i informacje o ostatnim zatwierdzeniu są konwertowane na HTML Format，Zapewnij lepsze efekty wizualne i wygodę użytkownika。
// @name:pt-BR  GitHub Enviar informações exibir visualização da web
// @description:pt-BR  Este roteiro irá GitHub As informações de submissão em HTML visualizar，para ver os detalhes do envio com mais clareza。Ele enviará automaticamente a lista de informações、O cabeçalho do commit e as informações do commit mais recente são convertidos para HTML Formatar，Fornece melhores efeitos visuais e experiência do usuário。
// @name:ro  GitHub Trimiteți informații afișați vizualizarea web
// @description:ro  Acest script va GitHub Informațiile de depunere pe HTML vedere，pentru a vedea detaliile trimiterii mai clar。Acesta va trimite automat lista de informații、Antetul de comitere și cele mai recente informații de comitere sunt convertite în HTML Format，Oferă efecte vizuale și experiență utilizator mai bune。
// @name:ru  GitHub Отправить информацию, отобразить веб-просмотр
// @description:ru  Этот сценарий будет GitHub Информация о подаче на HTML вид，чтобы более четко видеть детали отправки。Он автоматически отправит список информации、Заголовок фиксации и последняя информация о фиксации преобразуются в HTML Формат，Обеспечьте лучшие визуальные эффекты и удобство взаимодействия с пользователем.。
// @name:sk  GitHub Odoslať zobrazenie informácií na webe
// @description:sk  Tento skript bude GitHub Informácie o predložení na HTML pohľad，aby ste jasnejšie videli podrobnosti odoslania。Automaticky odošle informačný zoznam、Hlavička odovzdania a najnovšie informácie o odovzdaní sa skonvertujú na HTML Formátovať，Poskytnite lepšie vizuálne efekty a používateľský zážitok。
// @name:sr  GitHub Пошаљите приказ информација веб приказ
// @description:sr  Ова скрипта ће GitHub Информације о подношењу на HTML поглед，да бисте јасније видели детаље о подношењу。Аутоматски ће доставити листу информација、Заглавље урезивања и најновије информације о урезивању се конвертују у HTML Формат，Обезбедите боље визуелне ефекте и корисничко искуство。
// @name:sv  GitHub Skicka informationsvisning webbvy
// @description:sv  Detta skript kommer GitHub Inlämningsinformationen på HTML se，för att se inlämningsdetaljer tydligare。Den kommer automatiskt att skicka informationslistan、Commit-huvudet och senaste commit-informationen konverteras till HTML Formatera，Ge bättre visuella effekter och användarupplevelse。
// @name:th  GitHub ส่งข้อมูลแสดงมุมมองเว็บ
// @description:th  สคริปต์นี้จะ GitHub ข้อมูลการส่งเรื่องที่ HTML ดู，เพื่อดูรายละเอียดการส่งได้ชัดเจนยิ่งขึ้น。มันจะส่งรายการข้อมูลโดยอัตโนมัติ、ส่วนหัวการคอมมิตและข้อมูลการคอมมิตล่าสุดจะถูกแปลงเป็น HTML รูปแบบ，ให้เอฟเฟกต์ภาพและประสบการณ์ผู้ใช้ที่ดีขึ้น。
// @name:tr  GitHub Bilgi görüntüleme web görünümünü gönder
// @description:tr  Bu komut dosyası GitHub Gönderim bilgileri HTML görüş，Gönderim ayrıntılarını daha net görmek için。Bilgi listesini otomatik olarak gönderecektir、Taahhüt başlığı ve en son taahhüt bilgileri şuna dönüştürülür: HTML Biçim，Daha iyi görsel efektler ve kullanıcı deneyimi sağlayın。
// @name:ug  GitHub ئۇچۇر كۆرسىتىش تور كۆرۈنۈشىنى يوللاڭ
// @description:ug  بۇ قوليازما GitHub يوللاش ئۇچۇرى HTML كۆرۈش，تاپشۇرۇش تەپسىلاتلىرىنى تېخىمۇ ئېنىق كۆرۈش。ئۇ ئۇچۇر تىزىملىكىنى ئاپتوماتىك يوللايدۇ、ۋەدىگە مۇناسىۋەتلىك ماۋزۇ ۋە ئەڭ يېڭى ۋەدىلەر ئۇچۇرلىرىغا ئايلاندۇرۇلىدۇ HTML فورماتى，تېخىمۇ ياخشى كۆرۈش ئۈنۈمى ۋە ئىشلەتكۈچى تەجرىبىسى بىلەن تەمىنلەڭ。
// @name:uk  GitHub Відображення інформації в Інтернеті
// @description:uk  Цей сценарій буде GitHub Інформація про подання HTML переглянути，щоб чіткіше бачити деталі подання。Він автоматично надішле список інформації、Заголовок фіксації та остання інформація про фіксацію перетворюються на HTML Формат，Забезпечте кращі візуальні ефекти та досвід користувача。
// @name:vi  GitHub Gửi thông tin hiển thị xem web
// @description:vi  Kịch bản này sẽ GitHub Thông tin nộp hồ sơ trên HTML xem，để xem chi tiết gửi rõ ràng hơn。Nó sẽ tự động gửi danh sách thông tin、Tiêu đề cam kết và thông tin cam kết mới nhất được chuyển đổi thành HTML Định dạng，Cung cấp hiệu ứng hình ảnh và trải nghiệm người dùng tốt hơn。
// @name:zh-TW  GitHub 提交資料顯示網頁視圖
// @description:zh-TW  該腳本將 GitHub 上的提交資訊轉化為 HTML 視圖，以更清晰地查看提交詳情。它會自動將提交資訊列表、提交頭部和最新提交資訊轉化為 HTML 格式，提供更佳的視覺效果與使用者體驗。
// @name:zh-HK  GitHub 提交資料顯示網頁視圖
// @description:zh-HK  該腳本將 GitHub 上的提交資訊轉化為 HTML 視圖，以更清晰地查看提交詳情。它會自動將提交資訊列表、提交頭部和最新提交資訊轉化為 HTML 格式，提供更佳的視覺效果與使用者體驗。
// @name:fr-CA  GitHub Soumettre des informations, afficher la vue Web
// @description:fr-CA  Ce script sera GitHub Les informations de soumission sur HTML voir，pour voir plus clairement les détails de la soumission。Il soumettra automatiquement la liste d’informations、L’en-tête de validation et les dernières informations de validation sont convertis en HTML Format，Fournir de meilleurs effets visuels et une meilleure expérience utilisateur。
// @version 1.0.0.9
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