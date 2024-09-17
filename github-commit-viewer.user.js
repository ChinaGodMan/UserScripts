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
// @version 1.0.0.19
// @namespace     https://github.com/ChinaGodMan/UserScripts
// @author   人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match       *://github.com/*/*
// @grant       GM_registerMenuCommand
// @grant       none
// @icon  data:image/png;base64,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
// @iconbak https://github.githubassets.com/pinned-octocat.svg
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