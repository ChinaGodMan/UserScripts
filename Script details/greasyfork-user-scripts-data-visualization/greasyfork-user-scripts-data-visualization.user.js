// ==UserScript==
// @name                 GrreasyFork User-published script data visualization
// @description   useChart.jsObtaining and visualizing user script data，And generate a chart on the user’s personal homepage to display the detailed installation
// @name:zh-CN                   GrreasyFork 用户发布的脚本数据可视化
// @description:zh-CN    使用Chart.js获取和可视化获取用户脚本数据，并在用户个人主页生成一个图表在下方显示详细安装情况
// @name:ar                   GrreasyFork تصور البيانات النصية التي ينشرها المستخدم
// @description:ar    يستخدمChart.jsالحصول على بيانات البرنامج النصي للمستخدم وتصورها，وقم بإنشاء مخطط على الصفحة الرئيسية الشخصية للمستخدم لعرض حالة التثبيت التفصيلية أدناه.
// @name:bg                   GrreasyFork Визуализация на данни от скрипт, публикуван от потребителя
// @description:bg    използванеChart.jsПолучаване и визуализиране на потребителски скриптови данни，И генерирайте диаграма на личната начална страница на потребителя, за да покажете подробното състояние на инсталацията по-долу.
// @name:cs                   GrreasyFork Uživatelsky publikovaná vizualizace dat skriptu
// @description:cs    použitíChart.jsZískávání a vizualizace dat uživatelských skriptů，A vygenerujte graf na osobní domovské stránce uživatele, který zobrazí podrobný stav instalace níže.
// @name:da                   GrreasyFork Brugerudgivet scriptdatavisualisering
// @description:da    brugeChart.jsIndhentning og visualisering af brugerscriptdata，Og generer et diagram på brugerens personlige hjemmeside for at vise den detaljerede installationsstatus nedenfor.
// @name:de                   GrreasyFork Vom Benutzer veröffentlichte Skriptdatenvisualisierung
// @description:de    verwendenChart.jsAbrufen und Visualisieren von Benutzerskriptdaten，Und erstellen Sie auf der persönlichen Homepage des Benutzers ein Diagramm, um unten den detaillierten Installationsstatus anzuzeigen.
// @name:el                   GrreasyFork Οπτικοποίηση δεδομένων σεναρίου δημοσιευμένων από χρήστη
// @description:el    χρήσηChart.jsΛήψη και οπτικοποίηση δεδομένων σεναρίου χρήστη，Και δημιουργήστε ένα γράφημα στην προσωπική αρχική σελίδα του χρήστη για να εμφανίσετε τη λεπτομερή κατάσταση εγκατάστασης παρακάτω.
// @name:en                   GrreasyFork User-published script data visualization
// @description:en    useChart.jsObtaining and visualizing user script data，And generate a chart on the user’s personal homepage to display the detailed installation status below.
// @name:eo                   GrreasyFork Vidigo de datumoj eldonitaj de uzantoj
// @description:eo    uziChart.jsAkiro kaj bildigo de uzantaj skriptodatenoj，Kaj generu diagramon sur la persona hejmpaĝo de la uzanto por montri la detalan instalan staton sube.
// @name:es                   GrreasyFork Visualización de datos de script publicados por el usuario
// @description:es    usarChart.jsObtención y visualización de datos de script de usuario，Y genere un gráfico en la página de inicio personal del usuario para mostrar el estado de instalación detallado a continuación.
// @name:fi                   GrreasyFork Käyttäjän julkaisema komentosarjatietojen visualisointi
// @description:fi    käyttääChart.jsKäyttäjän komentosarjatietojen hankkiminen ja visualisointi，Ja luo kaavio käyttäjän henkilökohtaiselle kotisivulle nähdäksesi yksityiskohtaisen asennuksen tilan alla.
// @name:fr                   GrreasyFork Visualisation des données de script publié par l’utilisateur
// @description:fr    utiliserChart.jsObtention et visualisation des données de script utilisateur，Et générez un graphique sur la page d’accueil personnelle de l’utilisateur pour afficher l’état détaillé de l’installation ci-dessous.
// @name:he                   GrreasyFork הדמיית נתוני סקריפט שפורסם על ידי המשתמש
// @description:he    לְהִשְׁתַמֵשׁChart.jsהשגה והצגה של נתוני סקריפט משתמש，וצור תרשים בדף הבית האישי של המשתמש כדי להציג את מצב ההתקנה המפורט למטה.
// @name:hr                   GrreasyFork Vizualizacija podataka skripte koju je objavio korisnik
// @description:hr    koristitiChart.jsDobivanje i vizualizacija podataka korisničke skripte，I generirajte grafikon na osobnoj početnoj stranici korisnika za prikaz detaljnog statusa instalacije u nastavku.
// @name:hu                   GrreasyFork Felhasználó által közzétett szkriptadatok megjelenítése
// @description:hu    használatChart.jsFelhasználói szkriptadatok beszerzése és megjelenítése，És készítsen diagramot a felhasználó személyes honlapján, hogy megjelenítse a részletes telepítési állapotot.
// @name:id                   GrreasyFork Visualisasi data skrip yang dipublikasikan pengguna
// @description:id    menggunakanChart.jsMemperoleh dan memvisualisasikan data skrip pengguna，Dan buat bagan di beranda pribadi pengguna untuk menampilkan status instalasi terperinci di bawah.
// @name:it                   GrreasyFork Visualizzazione dei dati degli script pubblicati dall’utente
// @description:it    utilizzoChart.jsOttenere e visualizzare i dati dello script utente，E genera un grafico sulla home page personale dell’utente per visualizzare lo stato dettagliato dell’installazione di seguito.
// @name:ja                   GrreasyFork ユーザーが公開したスクリプト データの視覚化
// @description:ja    使用Chart.jsユーザースクリプトデータの取得と可視化，また、ユーザーの個人ホームページ上にチャートを生成し、以下の詳細なインストール状況を表示します。
// @name:ka                   GrreasyFork მომხმარებლის მიერ გამოქვეყნებული სკრიპტის მონაცემთა ვიზუალიზაცია
// @description:ka    გამოყენებაChart.jsმომხმარებლის სკრიპტის მონაცემების მიღება და ვიზუალიზაცია，და შექმენით დიაგრამა მომხმარებლის პირად მთავარ გვერდზე, რათა აჩვენოთ ინსტალაციის დეტალური სტატუსი ქვემოთ.
// @name:ko                   GrreasyFork 사용자 게시 스크립트 데이터 시각화
// @description:ko    사용Chart.js사용자 스크립트 데이터 획득 및 시각화，그리고 사용자의 개인 홈페이지에 차트를 생성하여 아래와 같이 자세한 설치 현황을 표시합니다.
// @name:nl                   GrreasyFork Door de gebruiker gepubliceerde visualisatie van scriptgegevens
// @description:nl    gebruikChart.jsVerkrijgen en visualiseren van gebruikersscriptgegevens，En genereer een diagram op de persoonlijke startpagina van de gebruiker om de gedetailleerde installatiestatus hieronder weer te geven.
// @name:nb                   GrreasyFork Brukerpublisert skriptdatavisualisering
// @description:nb    brukChart.jsInnhenting og visualisering av brukerskriptdata，Og generer et diagram på brukerens personlige hjemmeside for å vise den detaljerte installasjonsstatusen nedenfor.
// @name:pl                   GrreasyFork Wizualizacja danych skryptu opublikowanych przez użytkownika
// @description:pl    używaćChart.jsPozyskiwanie i wizualizacja danych skryptu użytkownika，I wygeneruj wykres na osobistej stronie głównej użytkownika, aby wyświetlić poniżej szczegółowy stan instalacji.
// @name:pt-BR                   GrreasyFork Visualização de dados de script publicado pelo usuário
// @description:pt-BR    usarChart.jsObtendo e visualizando dados de script do usuário，E gere um gráfico na página inicial pessoal do usuário para exibir o status detalhado da instalação abaixo.
// @name:ro                   GrreasyFork Vizualizarea datelor scripturilor publicate de utilizator
// @description:ro    utilizareChart.jsObținerea și vizualizarea datelor de script utilizator，Și generați o diagramă pe pagina de pornire personală a utilizatorului pentru a afișa mai jos starea detaliată a instalării.
// @name:ru                   GrreasyFork Визуализация данных сценария, опубликованного пользователем.
// @description:ru    использоватьChart.jsПолучение и визуализация данных пользовательского сценария，И создайте диаграмму на личной домашней странице пользователя, чтобы отобразить подробный статус установки ниже.
// @name:sk                   GrreasyFork Používateľom publikovaná vizualizácia dát skriptu
// @description:sk    použitieChart.jsZískavanie a vizualizácia údajov používateľského skriptu，A vygenerujte graf na osobnej domovskej stránke používateľa, ktorý zobrazí podrobný stav inštalácie nižšie.
// @name:sr                   GrreasyFork Визуелизација података скрипте коју је објавио корисник
// @description:sr    користитиChart.jsДобијање и визуелизација података корисничких скрипти，И генеришите графикон на личној почетној страници корисника да бисте приказали детаљан статус инсталације испод.
// @name:sv                   GrreasyFork Användarpublicerad skriptdatavisualisering
// @description:sv    användaChart.jsSkaffa och visualisera användarskriptdata，Och generera ett diagram på användarens personliga hemsida för att visa den detaljerade installationsstatusen nedan.
// @name:th                   GrreasyFork การแสดงข้อมูลสคริปต์ที่ผู้ใช้เผยแพร่
// @description:th    ใช้Chart.jsการรับและการแสดงภาพข้อมูลสคริปต์ผู้ใช้，และสร้างแผนภูมิบนหน้าแรกส่วนตัวของผู้ใช้เพื่อแสดงสถานะการติดตั้งโดยละเอียดด้านล่าง
// @name:tr                   GrreasyFork Kullanıcı tarafından yayınlanan komut dosyası veri görselleştirmesi
// @description:tr    kullanmakChart.jsKullanıcı komut dosyası verilerinin elde edilmesi ve görselleştirilmesi，Aşağıda ayrıntılı kurulum durumunu görüntülemek için kullanıcının kişisel ana sayfasında bir grafik oluşturun.
// @name:ug                   GrreasyFork ئىشلەتكۈچى ئېلان قىلغان قوليازما سانلىق مەلۇمات كۆرۈنۈش
// @description:ug    useChart.jsئىشلەتكۈچى قوليازما سانلىق مەلۇماتلىرىغا ئېرىشىش ۋە تەسۋىرلەش，ھەمدە تۆۋەندىكى تەپسىلىي قاچىلاش ھالىتىنى كۆرسىتىش ئۈچۈن ئىشلەتكۈچىنىڭ شەخسىي باش بېتىدە جەدۋەل ھاسىل قىلىڭ.
// @name:uk                   GrreasyFork Візуалізація даних опублікованого користувачем сценарію
// @description:uk    використовуватиChart.jsОтримання та візуалізація даних сценарію користувача，І створіть діаграму на особистій домашній сторінці користувача, щоб відобразити детальний стан встановлення нижче.
// @name:vi                   GrreasyFork Trực quan hóa dữ liệu tập lệnh do người dùng xuất bản
// @description:vi    sử dụngChart.jsLấy và hiển thị dữ liệu tập lệnh người dùng，Và tạo biểu đồ trên trang chủ cá nhân của người dùng để hiển thị trạng thái cài đặt chi tiết bên dưới.
// @name:zh-TW                   GrreasyFork 用戶發布的腳本資料視覺化
// @description:zh-TW    使用Chart.js獲取和可視化獲取用戶腳本數據，並在使用者個人主頁產生圖表在下方顯示詳細安裝情況
// @name:zh-HK                   GrreasyFork 用戶發布的腳本資料視覺化
// @description:zh-HK    使用Chart.js獲取和可視化獲取用戶腳本數據，並在使用者個人主頁產生圖表在下方顯示詳細安裝情況
// @name:fr-CA                   GrreasyFork Visualisation des données de script publié par l’utilisateur
// @description:fr-CA    utiliserChart.jsObtention et visualisation des données de script utilisateur，Et générez un graphique sur la page d’accueil personnelle de l’utilisateur pour afficher l’état détaillé de l’installation ci-dessous.
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJmaWxsOiAjRDcyMzIzOyI+PHBhdGggZD0iTTIwMC4zIDI2OS45Yy0xNS43IDYuNi0zMi43IDEwLjEtNTAuMyAxMC4xLTM0LjcgMC02Ny40LTEzLjUtOTEuOS0zOC4xQzMzLjUgMjE3LjQgMjAgMTg0LjcgMjAgMTUwczEzLjUtNjcuNCAzOC4xLTkxLjlDODIuNiAzMy41IDExNS4zIDIwIDE1MCAyMHM2Ny40IDEzLjUgOTEuOSAzOC4xQzI2Ni41IDgyLjYgMjgwIDExNS4zIDI4MCAxNTBjMCAxNy42LTMuNSAzNC42LTEwIDUwLjMgNSA1IDEwIDEwLjEgMTUuMSAxNS4xIDkuNi0xOS44IDE1LTQyIDE1LTY1LjRDMzAwIDY3LjIgMjMyLjggMCAxNTAgMFMwIDY3LjIgMCAxNTBzNjcuMiAxNTAgMTUwIDE1MGMyMy40IDAgNDUuNi01LjQgNjUuNC0xNS01LjEtNS0xMC4xLTEwLjEtMTUuMS0xNS4xeiIvPjxwYXRoIGQ9Ik0yNjcuOCAzMDBjLTkuNi0xLjMtMTYuNS03LTIzLjEtMTMuNy0xNC45LTE1LjMtMzAuMS0zMC4yLTQ1LjItNDUuMy05LjMtOS4zLTEyLTIwLjEtNy41LTMyLjcuMy0uOC4zLTIuMS0uMi0yLjYtMy45LTQuMS03LjktOC0xMi0xMi4xLTYuNCA0LTEzLjEgNi43LTIwLjUgNy42LTE1LjUgMS45LTI5LTIuNC00MC4yLTEzLjItMTIuMy0xMS44LTI0LjItMjQtMzYuMi0zNi4xLTMuNS0zLjUtNC4xLTcuNC0yLjItMTEuMiAxLjktMy43IDUuOS02LjQgOS43LTUuNiAyLjUuNSA1LjEgMiA2LjkgMy44IDcuNCA3LjEgMTQuNSAxNC40IDIxLjggMjEuNi42LjYgMS4zIDEuMiAxLjcgMS42bDEzLjgtMTMuOGMtNi4yLTYuMS0xMi42LTEyLjUtMTguOS0xOC45LTEuOS0xLjktMy44LTMuNy01LjYtNS42LTMuOC00LjItMy43LTkuNy4yLTEzLjYgMy45LTMuOSA5LjUtNC4xIDEzLjYtLjEgNy41IDcuMyAxNC44IDE0LjcgMjIuMSAyMi4xLjguOCAxLjUgMS44IDIuMSAyLjRsMTQuMy0xNC4zYy0yLTEuOC00LjUtNC02LjgtNi4zLTYtNS45LTExLjktMTEuOC0xNy44LTE3LjgtMi43LTIuNy0zLjctNS45LTIuNC05LjYgMS40LTMuOSA0LjItNi4zIDguMy02LjkgMy40LS42IDYgMSA4LjQgMy4zbDE0LjcgMTQuN2M3LjQgNy40IDE0LjkgMTQuNiAyMiAyMi4yIDE0LjcgMTUuNyAxNyAzOS4xIDYuMSA1Ny43LS40LjctLjcgMS40LTEuMyAyLjQgMy45IDMuOSA3LjkgNy44IDExLjkgMTEuNi42LjUgMiAuNiAyLjguMyAxMi41LTQuNCAyMy4zLTEuNyAzMi43IDcuNiAxNS4xIDE1LjEgMzAuMSAzMC4zIDQ1LjMgNDUuMiA2LjcgNi41IDEyLjQgMTMuNCAxMy43IDIzdjUuOGMtLjIuNS0uNCAxLjEtLjUgMS42LTEuOCA5LjUtNi42IDE3LTE1LjUgMjEuMi0zLjMgMS42LTYuOSAyLjMtMTAuNCAzLjUtMS45LjItMy44LjItNS44LjJ6Ii8+PHBhdGggZD0iTTE3MCAyMTkuNmMtMi43LjctNS40IDEuMi04LjIgMS41LTMuMS40LTYuMi42LTkuMi42LTE3LjkgMC0zNC4yLTYuNi00Ny4yLTE5LjItMTAuMi05LjgtMjAuMi0yMC0zMC0yOS44bC02LjYtNi42Yy05LjUtOS41LTExLjctMjIuNy01LjgtMzQuMyA0LjktOS42IDE0LjQtMTYgMjQuNS0xNi42LjUtNi45IDMuNS0xMy42IDguOS0xOC45IDUuMi01LjEgMTEuOC04LjIgMTguNy04LjcuMi0yLjUuNy00LjkgMS42LTcuNCAzLjgtMTAuOCAxMi42LTE4LjEgMjMuOS0yMCAxLjUtLjIgMy4xLS40IDQuNi0uNCA1LjQgMCAxMy40IDEuNiAyMS4xIDkuMiA0LjcgNC43IDkuNiA5LjUgMTQuOCAxNC43IDIuMSAyLjIgNC40IDQuNCA2LjUgNi41IDUuMyA1LjIgMTAuNyAxMC42IDE1LjkgMTYuMiAxMC4yIDEwLjkgMTYuNCAyNC41IDE3LjkgMzkuMy45IDguMi4yIDE2LjQtMS44IDI0LjJoLjFjMTIuOCAwIDI0LjcgNS4xIDM0LjcgMTQuOCAzLjYtMTAuOSA1LjYtMjIuNiA1LjYtMzQuNyAwLTYwLjgtNDkuMi0xMTAtMTEwLTExMFM0MCA4OS4yIDQwIDE1MHM0OS4yIDExMCAxMTAgMTEwYzEyLjEgMCAyMy44LTIgMzQuNy01LjYtOS44LTEwLjEtMTQuOC0yMi4xLTE0LjctMzQuOHoiLz48L3N2Zz4=
// @namespace   https://github.com/ChinaGodMan/UserScripts
// @version      1.1.1.1
// @author       aspen138,人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @match        *://greasyfork.org/*/users/*
// @grant        none
// @license      MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @downloadURL https://update.greasyfork.org/scripts/508968/GrreasyFork%20User-published%20script%20data%20visualization.user.js
// @updateURL https://update.greasyfork.org/scripts/508968/GrreasyFork%20User-published%20script%20data%20visualization.meta.js
// ==/UserScript==
(function () {
    'use strict'
    let ONPAGE = true//默认向GreasyFork下载用户数据,为true时从当前访问的页面获取
    let OPENLINK = 1 //点击柱,跳转到脚本网址.0 不跳转,1跳转前有提示,2直接跳转
    // Function to fetch user data
    const injectChartJs = () => {
        const userHeader = document.querySelector('#about-user h2')
        if (!userHeader) return
        const loadChartJs = (library) => {
            const script = document.createElement('script')
            script.textContent = library
            document.head.appendChild(script)
            fetchDataAndPlot()
        }
        const chartJsFromStorage = localStorage.getItem('chartJsLibrary')
        if (chartJsFromStorage) {
            loadChartJs(chartJsFromStorage)
        } else {
            fetch('https://cdn.jsdelivr.net/npm/chart.js')
                .then(response => response.text())
                .then(library => {
                    localStorage.setItem('chartJsLibrary', library)
                    loadChartJs(library)
                })
                .catch(error => console.error('Chart.js 加载失败: ', error))
        }
    }
    const getUserData = (userID) => {
        return fetch(`https://${window.location.hostname}/users/${userID}.json`)
            .then((response) => {
                console.log(`${response.status}: ${response.url}`)
                return response.json()
            })
            .then((data) => {
                data.scripts.sort((a, b) => b.total_installs - a.total_installs)
                return data
            })
    }
    // Function to plot the chart  console.log()
    const plotDistribution = (labels, totalInstalls, dailyInstalls, links, updateds, createds) => {
        const canvasHtml = '<canvas id="installDistributionCanvas" width="100" height="50"></canvas>'
        const userHeader = document.querySelector('#about-user h2')
        if (userHeader) {
            userHeader.insertAdjacentHTML('afterend', canvasHtml)
            const ctx = document.getElementById('installDistributionCanvas').getContext('2d')
            // Plot chart
            const chart = new Chart(ctx, {
                type: 'bar',  // Change this to 'line', 'bar', etc. as needed
                data: {
                    labels: labels,  // X-axis labels
                    datasets: [{
                        label: 'Total Installs',
                        data: totalInstalls,  // Y-axis data for Total Installs
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        yAxisID: 'y-axis-1',// Associate this dataset with the first y-axis
                    },
                    {
                        label: 'Daily Installs',
                        data: dailyInstalls, // Y-axis data for Daily Installs
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        yAxisID: 'y-axis-2',// Associate this dataset with the second y-axis
                    }]
                },
                options: {
                    scales: {
                        'y-axis-1': {
                            type: 'linear',
                            position: 'left', // This places the first y-axis on the left
                            beginAtZero: true,
                            ticks: {
                                color: 'rgba(54, 162, 235, 1)'
                            },
                        },
                        'y-axis-2': {
                            type: 'linear',
                            position: 'right',// This places the second y-axis on the right
                            beginAtZero: true,
                            ticks: {
                                color: 'rgba(255, 99, 132, 1)'
                            }
                        }, x: {
                            grid: {
                                display: false
                            },
                            /*     ticks: {
                                    color: 'blue',
                                    maxRotation: 60,
                                    minRotation: 60,
                                    callback: function (value) {
                                        const label = this.getLabelForValue(value)
                                        if (label.length > 15) {
                                            return label.substring(0, 10) + '...'
                                        }
                                        return label.split(' ').join('\n')
                                    },
                                } */
                        }
                    }, onClick: function (evt, activeElements) {
                        if (activeElements.length > 0) {
                            const element = activeElements[0]
                            const datasetIndex = element.datasetIndex
                            const dataIndex = element.index
                            const label = chart.data.labels[dataIndex]
                            const value = chart.data.datasets[datasetIndex].data[dataIndex]
                            console.log(`点击\nLabel: ${label}\nValue: ${value}\nLink: ${links[dataIndex]}`)
                            if (OPENLINK === 1 && !confirm(`Open:  ${label}?`)) return
                            if (OPENLINK !== 0) window.open(links[dataIndex], '_blank')
                        }
                    },
                    plugins: {
                        legend: {
                            onClick: (e, legendItem, legend) => {
                                // 获取当前数据集
                                const datasetIndex = legendItem.datasetIndex
                                const dataset = chart.data.datasets[datasetIndex]
                                // 切换数据集的显示状态
                                dataset.hidden = !dataset.hidden
                                // 更新 Y 轴显示状态
                                chart.options.scales['y-axis-1'].display = chart.data.datasets.some(ds => ds.yAxisID === 'y-axis-1' && !ds.hidden)
                                chart.options.scales['y-axis-2'].display = chart.data.datasets.some(ds => ds.yAxisID === 'y-axis-2' && !ds.hidden)
                                // 更新图表
                                chart.update()
                            }
                        }, tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    const label = tooltipItem.dataset.label || ''
                                    const value = tooltipItem.raw
                                    return `${label}: ${value}`
                                },
                                afterBody: function (tooltipItem) {
                                    const index = tooltipItem[0].dataIndex
                                    const extraInfo = `\n📅${toSystemTime(createds[index])}\n⏰${toSystemTime(updateds[index])}`
                                    return extraInfo
                                }
                            },
                        }
                    }
                }
            })
        }
    }
    function toSystemTime(isoTime) {
        let date = new Date(isoTime)
        return date.toLocaleString()
    }
    // Function to display totals
    const displayTotals = (daily, total, publishedScriptsNumber) => {
        const userHeader = document.querySelector('#about-user h2')
        const language = document.documentElement.lang // Get the current language of the document
        let dailyInstallsText = ''
        let totalInstallsText = ''
        // Determine the text based on the current language
        switch (language) {
            case 'zh-CN':
                publishedScriptsNumber = `已发布脚本总数：${publishedScriptsNumber}`
                dailyInstallsText = `该用户所有脚本的今日总安装次数：${daily}`
                totalInstallsText = `该用户所有脚本的迄今总安装次数：${total}`
                break
            case 'zh-TW':
                publishedScriptsNumber = `已發布腳本總數：${publishedScriptsNumber}`
                dailyInstallsText = `該用戶所有腳本的今日總安裝次數：${daily}`
                totalInstallsText = `該用戶所有腳本的迄今總安裝次數：${total}`
                break
            case 'ja':
                publishedScriptsNumber = `公開されたスクリプトの合計：${publishedScriptsNumber}`
                dailyInstallsText = `本日の全スクリプトの合計インストール回数：${daily}`
                totalInstallsText = `全スクリプトの累計インストール回数：${total}`
                break
            case 'ko':
                publishedScriptsNumber = `게시된 스크립트 총 수: ${publishedScriptsNumber}`
                dailyInstallsText = `해당 사용자의 모든 스크립트에 대한 오늘의 총 설치 횟수: ${daily}`
                totalInstallsText = `해당 사용자의 모든 스크립트에 대한 총 설치 횟수: ${total}`
                break
            default:
                publishedScriptsNumber = `Number of published scripts: ${publishedScriptsNumber}`
                dailyInstallsText = `Total daily installations for all scripts: ${daily}`
                totalInstallsText = `Total installations to date for all scripts: ${total}`
        }
        if (userHeader) {
            userHeader.insertAdjacentHTML('afterend', `
                <div>${publishedScriptsNumber}</div>
                <div>${dailyInstallsText}</div>
                <div>${totalInstallsText}</div>
            `)
        }
    }
    // Function to fetch data and plot the chart
    const fetchDataAndPlot = () => {
        if (ONPAGE) {
            const totalInstalls_selector = '#user-script-list-section dd.script-list-total-installs > span'
            const dailyInstalls_selector = '#user-script-list-section dd.script-list-daily-installs > span'
            const scriptTitle_selector = '#user-script-list-section article > h2 > a.script-link'
            const links = Array.from(document.querySelectorAll(scriptTitle_selector)).map(el => el.href)
            if (!links.length) return
            const labels = Array.from(document.querySelectorAll(scriptTitle_selector)).map(el => el.text)
            const updateds = Array.from(document.querySelectorAll("#user-script-list-section dd.script-list-updated-date > span"))
                .map(span => span.querySelector("relative-time")?.getAttribute("datetime"))
            const createds = Array.from(document.querySelectorAll("#user-script-list-section dd.script-list-created-date > span"))
                .map(span => span.querySelector("relative-time")?.getAttribute("datetime"))
            const totalInstalls = Array.from(document.querySelectorAll(totalInstalls_selector)).map(el => (parseInt(el.textContent.replace(/,/g, ''), 10) || 0))
            const dailyInstalls = Array.from(document.querySelectorAll(dailyInstalls_selector)).map(el => (parseInt(el.textContent.replace(/,/g, ''), 10) || 0))
            const totalDailyInstalls = dailyInstalls.reduce((sum, current) => sum + current, 0)
            const totalTotalInstalls = totalInstalls.reduce((sum, current) => sum + current, 0)
            const publishedScriptsNumber = totalInstalls.length
            plotDistribution(labels, totalInstalls, dailyInstalls, links, updateds, createds)
            displayTotals(totalDailyInstalls, totalTotalInstalls, publishedScriptsNumber)
            return
        }
        const currentURL = window.location.href
        const userIDMatch = currentURL.match(/(\d+)/)
        const userID = userIDMatch ? userIDMatch[1] : null
        getUserData(userID)
            .then((data) => {
                //console.log("data=", data);
                const scripts = data.all_listable_scripts || data.scripts || []
                //const filteredScripts = scripts.filter(script => !script.deleted)
                const filteredScripts = scripts.filter(script =>
                    !script.deleted &&
                    (script.code_url.includes('.user.js') || script.code_url.includes('.user.css'))
                )//在当前已登录账户的个人主页屏蔽删除掉的脚本与排除.js库文件
                const labels = filteredScripts.map(script => script.name)
                const links = filteredScripts.map(script => script.url)
                if (!links.length) return
                const updateds = filteredScripts.map(script => script.code_updated_at)
                const createds = filteredScripts.map(script => script.created_at)
                const totalInstalls = filteredScripts.map(script => script.total_installs)
                const dailyInstalls = filteredScripts.map(script => script.daily_installs)
                const totalDailyInstalls = dailyInstalls.reduce((sum, value) => sum + value, 0)
                const totalTotalInstalls = totalInstalls.reduce((sum, value) => sum + value, 0)
                const publishedScriptsNumber = filteredScripts.length
                plotDistribution(labels, totalInstalls, dailyInstalls, links, updateds, createds)
                displayTotals(totalDailyInstalls, totalTotalInstalls, publishedScriptsNumber)
            })
            .catch((error) => console.error('Error fetching user data:', error))
    }
    injectChartJs()
})()
