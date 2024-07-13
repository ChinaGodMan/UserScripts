// ==UserScript==
// @name        Greasyfork Utility Toolkit
// @name:en     Greasyfork Utility Toolkit
// @name:zh-CN  Greasyfork 糊裱匠
// @name:zh-TW  Greasyfork 糊裱匠
// @name:ja     Greasyfork ツールキット
// @name:ko     Greasyfork 유틸리티 툴킷
// @name:ru     Набор инструментов для Greasyfork
// @name:de     Greasyfork Dienstprogramm-Toolkit
// @name:fr     Toolkit utilitaire Greasyfork
// @name:it     Kit di strumenti utilitari Greasyfork
// @name:ar     مجموعة أدوات Greasyfork
// @name:he     ערכת כלים Greasyfork
// @name:vi     Bộ công cụ tiện ích Greasyfork
// @namespace    https://greasyfork.org/zh-CN/users/1169082-%E4%BA%BA%E6%B0%91%E7%9A%84%E5%8B%A4%E5%8A%A1%E5%91%98
// @description Providing various features for Greasyfork, including absolute time, widescreen web pages, script page enhancements, download extensions, panel fixes, and more.
// @description:en Providing various features for Greasyfork, including absolute time, widescreen web pages, script page enhancements, download extensions, panel fixes, and more.
// @description:zh-CN 为 Greasyfork 提供各种使用功能，绝对时间，网页宽屏，脚本页增强，下载拓展，面板修复等一系列操作
// @description:zh-TW 為 Greasyfork 提供各種使用功能，絕對時間，網頁寬屏，腳本頁增強，下載擴展，面板修復等一系列操作
// @description:ja Greasyfork に絶対時間、ワイドスクリーンウェブページ、スクリプトページの強化、ダウンロード拡張、パネル修正など、さまざまな機能を提供します。
// @description:ko Greasyfork에 절대 시간, 와이드스크린 웹 페이지, 스크립트 페이지 강화, 다운로드 확장, 패널 수정 등을 포함한 다양한 기능을 제공합니다.
// @description:ru Предоставление различных функций для Greasyfork, включая абсолютное время, широкоформатные веб-страницы, улучшения страниц скриптов, расширения для загрузки, исправления панелей и многое другое.
// @description:de Bereitstellung verschiedener Funktionen für Greasyfork, einschließlich absoluter Zeit, Breitbild-Webseiten, Skriptseitenerweiterungen, Download-Erweiterungen, Panelkorrekturen und mehr.
// @description:fr Fournir diverses fonctionnalités pour Greasyfork, y compris le temps absolu, les pages Web en écran large, les améliorations de pages de scripts, les extensions de téléchargement, les correctifs de panneau, et plus encore.
// @description:it Fornire varie funzionalità per Greasyfork, inclusi il tempo assoluto, le pagine Web widescreen, i miglioramenti delle pagine degli script, le estensioni di download, le correzioni dei pannelli e altro ancora.
// @description:ar توفير وظائف متنوعة لـ Greasyfork، بما في ذلك الوقت المطلق، وصفحات الويب ذات الشاشة العريضة، وتعزيز صفحات النصوص البرمجية، وتوسعات التنزيل، وإصلاحات اللوحة، والمزيد.
// @description:he מתן מגוון פונקציות עבור Greasyfork, כולל זמן מוחלט, דפי אינטרנט ברוחב מסך רחב, שיפורי דפי סקריפטים, הרחבות להורדה, תיקוני לוח ועוד.
// @description:vi Cung cấp các tính năng khác nhau cho Greasyfork, bao gồm thời gian tuyệt đối, trang web màn hình rộng, nâng cao trang kịch bản, tiện ích mở rộng tải xuống, sửa lỗi bảng điều khiển và nhiều hơn nữa.
// @require https://update.greasyfork.org/scripts/498897/1404834/Toastnew.js
// @require      https://cdn.jsdelivr.net/gh/fuzetsu/userscripts@ec863aa92cea78a20431f92e80ac0e93262136df/wait-for-elements/wait-for-elements.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @resource    atom-one-dark.css https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/styles/atom-one-dark.min.css
// @resource    atom-one-light.css https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/styles/atom-one-light.min.css
// @resource     nnfx-dark.min.css  https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/nnfx-dark.min.css
// @resource     nnfx-light.min.css  https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/nnfx-light.min.css
// @require      https://update.greasyfork.org/scripts/447149/1065246/checkVersion.js
// @grant       GM_getResourceText
// @grant        GM_registerMenuCommand
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant      GM_xmlhttpRequest
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @version 2.2.0.4



// @i1con          https://raw.gitmirror.com/greasyfork-org/greasyfork/main/public/images/blacklogo96.png
// @icon         data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300" style="fill: %23D72323;"><path d="M200.3 269.9c-15.7 6.6-32.7 10.1-50.3 10.1-34.7 0-67.4-13.5-91.9-38.1C33.5 217.4 20 184.7 20 150s13.5-67.4 38.1-91.9C82.6 33.5 115.3 20 150 20s67.4 13.5 91.9 38.1C266.5 82.6 280 115.3 280 150c0 17.6-3.5 34.6-10 50.3 5 5 10 10.1 15.1 15.1 9.6-19.8 15-42 15-65.4C300 67.2 232.8 0 150 0S0 67.2 0 150s67.2 150 150 150c23.4 0 45.6-5.4 65.4-15-5.1-5-10.1-10.1-15.1-15.1z"/><path d="M267.8 300c-9.6-1.3-16.5-7-23.1-13.7-14.9-15.3-30.1-30.2-45.2-45.3-9.3-9.3-12-20.1-7.5-32.7.3-.8.3-2.1-.2-2.6-3.9-4.1-7.9-8-12-12.1-6.4 4-13.1 6.7-20.5 7.6-15.5 1.9-29-2.4-40.2-13.2-12.3-11.8-24.2-24-36.2-36.1-3.5-3.5-4.1-7.4-2.2-11.2 1.9-3.7 5.9-6.4 9.7-5.6 2.5.5 5.1 2 6.9 3.8 7.4 7.1 14.5 14.4 21.8 21.6.6.6 1.3 1.2 1.7 1.6l13.8-13.8c-6.2-6.1-12.6-12.5-18.9-18.9-1.9-1.9-3.8-3.7-5.6-5.6-3.8-4.2-3.7-9.7.2-13.6 3.9-3.9 9.5-4.1 13.6-.1 7.5 7.3 14.8 14.7 22.1 22.1.8.8 1.5 1.8 2.1 2.4l14.3-14.3c-2-1.8-4.5-4-6.8-6.3-6-5.9-11.9-11.8-17.8-17.8-2.7-2.7-3.7-5.9-2.4-9.6 1.4-3.9 4.2-6.3 8.3-6.9 3.4-.6 6 1 8.4 3.3l14.7 14.7c7.4 7.4 14.9 14.6 22 22.2 14.7 15.7 17 39.1 6.1 57.7-.4.7-.7 1.4-1.3 2.4 3.9 3.9 7.9 7.8 11.9 11.6.6.5 2 .6 2.8.3 12.5-4.4 23.3-1.7 32.7 7.6 15.1 15.1 30.1 30.3 45.3 45.2 6.7 6.5 12.4 13.4 13.7 23v5.8c-.2.5-.4 1.1-.5 1.6-1.8 9.5-6.6 17-15.5 21.2-3.3 1.6-6.9 2.3-10.4 3.5-1.9.2-3.8.2-5.8.2z"/><path d="M170 219.6c-2.7.7-5.4 1.2-8.2 1.5-3.1.4-6.2.6-9.2.6-17.9 0-34.2-6.6-47.2-19.2-10.2-9.8-20.2-20-30-29.8l-6.6-6.6c-9.5-9.5-11.7-22.7-5.8-34.3 4.9-9.6 14.4-16 24.5-16.6.5-6.9 3.5-13.6 8.9-18.9 5.2-5.1 11.8-8.2 18.7-8.7.2-2.5.7-4.9 1.6-7.4 3.8-10.8 12.6-18.1 23.9-20 1.5-.2 3.1-.4 4.6-.4 5.4 0 13.4 1.6 21.1 9.2 4.7 4.7 9.6 9.5 14.8 14.7 2.1 2.2 4.4 4.4 6.5 6.5 5.3 5.2 10.7 10.6 15.9 16.2 10.2 10.9 16.4 24.5 17.9 39.3.9 8.2.2 16.4-1.8 24.2h.1c12.8 0 24.7 5.1 34.7 14.8 3.6-10.9 5.6-22.6 5.6-34.7 0-60.8-49.2-110-110-110S40 89.2 40 150s49.2 110 110 110c12.1 0 23.8-2 34.7-5.6-9.8-10.1-14.8-22.1-14.7-34.8z"/></svg>
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @license      MIT
// @supportURL   https://greasyfork.org/scripts/497346/feedback
// @homepageURL  https://greasyfork.org/users/1169082
// @downloadURL https://update.greasyfork.org/scripts/497346/Greasyfork%20%E7%B3%8A%E8%A3%B1%E5%8C%A0.user.js
// @updateURL https://update.greasyfork.org/scripts/497346/Greasyfork%20%E7%B3%8A%E8%A3%B1%E5%8C%A0.meta.js
//20240712添加网站风格
// ==/UserScript==
const translate = (function () {
    const userLang = location.pathname.split('/')[1]
    const strings = {
        'en': {
            'newScript': 'Post a new Script',
            'linesOfCode': 'Lines of code',
            'wordCount': 'Word count',
            'setDisplay': 'Set display options',
            'showJump': 'Show jump to code',
            'beautifyDis': 'Beautify discussion page options',
            'AutoEnableCodeEditor': 'Auto enable code editor beautification',
            'showRating': 'Show rating',
            'scriptLinNumb': 'Script code line number display',
            'ScriptListByCreat': 'Sort script list by creation date',
            'moveSidebar': 'Move sidebar favorites up',
            'fixNavbar': 'Fix navbar',
            'addNewScript': 'Add new script option to navbar',
            'exactDate': 'Exact date',
            'addDownButton': 'Add download button to scripts & libraries',
            'jumpTo18': '🔞Jump to adult scripts',
            'maxView': 'Maximize website view',
            'cleanUpOld': 'Clean up comments older than days',
            'openTab': 'Open links in new Greasemonkey tab',
            'showIcon': 'Show script icon',
            'scriptHisAddInstall': 'Add install to script history',
            'Settings': 'Settings',
            'Close': 'Close',
            'inputDaysToCleanUp': 'Please enter days to clean up:',
            'download': 'Download ⇩',
            'downloading': 'Downloading...',
            'errorCode': 'Error: Download failed, server returned status code:',
            'errorNetwork': 'Download failed, network error or cross-domain issue',
            'install': 'Install',
            'downloadFailed': 'Download failed',
            'dallScripts': 'All Released Scripts',
            'JSScripts': "Number of JS Scripts:",
            'CSSScripts': "Number of CSS Scripts:",
            'DailyTotal': "Daily Installs:",
            'TotalInstalls': "Total Installs:",
            'ok': "All Scripts:",
            'bad': "Total Bad Reviews:",
            'good': "Total Good Reviews:",
            'ok': "Average:",
            'loading': "Fetching, please wait.",
            'viewauthor': 'Author',
            'viewdaily_installs': 'Daily installs',
            'tviewotal_installs': 'Total installs',
            'viewfan_score': 'Fan score',
            'viewversion': 'Version',
            'viewcreated_at': 'Created at',
            'viewcode_updated_at': 'Updated at',
            'viewlicense': 'License',
            'viewlocale': 'Locale',
            'copyto': 'Copy code to clipboard.',
            'htmlViewtotext': ' Toggle the TEXT view',
            'texttohtmlView': ' Toggle the HTML view',
            'Rememberme': 'Auto check Remember Me on the login page.',
            'locklang': 'Switching the website language to:',
            'locklangset': 'Lock Language after you click the language switcher',
            'openindoc': 'Add to the navigation bar to open this page',
            'thisname': ' Greasyfork Utility Toolkit',
            '脚本详情': ' Details Page',
            '导航栏': 'Navigation Bar',
            'website': 'Site Settings',
            '复制短链接': 'Copy short link',
            '主页脚本添加操作': 'Adding Operations to Homepage Script',
        },
        'zh-CN': {
            'newScript': '发布新脚本',
            'linesOfCode': '行数',
            'wordCount': '字数',
            'setDisplay': '设置显示选项',
            'showJump': '显示跳转代码',
            'beautifyDis': '讨论页面美化选项',
            'AutoEnableCodeEditor': '自动启用代码编辑框美化',
            'showRating': '显示评分',
            'scriptLinNumb': '脚本代码显示行数字数',
            'ScriptListByCreat': '脚本列表按创建日期排序',
            'moveSidebar': '侧边栏收藏上移',
            'fixNavbar': '导航栏修复',
            'addNewScript': '导航栏增加发布新脚本选项',
            'exactDate': '精确日期',
            'addDownButton': '脚本&库增加下载按钮',
            'jumpTo18': '🔞跳转成人脚本',
            'maxView': '网站最大化浏览',
            'cleanUpOld': '清理超过天数的脚本评论',
            'openTab': '油猴新窗口打开链接',
            'showIcon': '显示脚本图标',
            'scriptHisAddInstall': '脚本历史增加安装',
            'Settings': '设置',
            'Close': '关闭',
            'inputDaysToCleanUp': '请输入清理超过天数:',
            'download': '下载 ⇩',
            'downloading': '下载中...',
            'errorCode': '错误: 下载失败，服务器返回状态码:',
            'errorNetwork': '下载失败，网络错误或跨域问题',
            'install': '安装',
            'downloadFailed': '下载失败',
            'dallScripts': '所有发布脚本',
            'JSScripts': 'JS脚本数量:',
            'CSSScripts': 'CSS脚本数量:',
            'DailyTotal': '每日安装:',
            'TotalInstalls': '总安装:',
            'ok': '所有脚本:',
            'bad': '总差评:',
            'good': '总好评:',
            'ok': '一般:',
            'loading': '正在获取中，请耐心等待。',
            'viewauthor': '作者',
            'viewdaily_installs': '日安装量',
            'tviewotal_installs': '总安装量',
            'viewfan_score': '评分',
            'viewversion': '版本',
            'viewcreated_at': '创建于',
            'viewcode_updated_at': '更新于',
            'viewlicense': '许可证',
            'viewlocale': '适用于',
            'copyto': '复制代码',
            'htmlViewtotext': '切换文档视图',
            'texttohtmlView': '切换网页视图',
            'Rememberme': '在登录页面勾选记住我',
            'locklang': '即将切换网站语言到：',
            'locklangset': '选择语言后设置锁定',
            'openindoc': '在导航栏添加打开本界面',
            'thisname': 'Greasyfork 糊裱匠',
            '脚本详情': '脚本详情',
            '导航栏': '导航栏',
            'website': '网站',
            '复制短链接': '复制短链接',
            '主页脚本添加操作': '主页脚本添加操作',
        },
        'zh-TW': {
            'newScript': '發布新腳本',
            'linesOfCode': '行數',
            'wordCount': '字數',
            'setDisplay': '設置顯示選項',
            'showJump': '顯示跳轉程式碼',
            'beautifyDis': '討論頁面美化選項',
            'AutoEnableCodeEditor': '自動啟用程式碼編輯框美化',
            'showRating': '顯示評分',
            'scriptLinNumb': '腳本程式碼顯示行數字數',
            'ScriptListByCreat': '腳本列表按創建日期排序',
            'moveSidebar': '側邊欄收藏上移',
            'fixNavbar': '導航欄修復',
            'addNewScript': '導航欄增加發布新腳本選項',
            'exactDate': '精確日期',
            'addDownButton': '腳本&庫增加下載按鈕',
            'jumpTo18': '跳轉成人腳本',
            'maxView': '網站最大化瀏覽',
            'cleanUpOld': '清理超過天數的腳步評論',
            'openTab': '油猴新視窗打開連結',
            'showIcon': '顯示腳本圖標',
            'scriptHisAddInstall': '腳本歷史增加安裝',
            'Settings': '設置',
            'Close': '關閉',
            'inputDaysToCleanUp': '請輸入清理超過天數:',
            'download': '下載 ⇩',
            'downloading': '下載中...',
            'errorCode': '錯誤: 下載失敗，伺服器返回狀態碼:',
            'errorNetwork': '下載失敗，網路錯誤或跨域問題',
            'install': '安裝',
            'downloadFailed': '下載失敗',
            'dallScripts': "所有發布腳本",
            'JSScripts': "JS腳本數量:",
            'CSSScripts': "CSS腳本數量:",
            'DailyTotal': "每日安裝:",
            'TotalInstalls': "總安裝:",
            'ok': "所有腳本:",
            'bad': "總差評:",
            'good': "總好評:",
            'ok': "一般:",
            'loading': "正在獲取中，請耐心等待。"
        },
        'ja': {
            'newScript': '新しいスクリプトを公開する',
            'linesOfCode': 'コード行数',
            'wordCount': '単語数',
            'setDisplay': '表示オプションを設定する',
            'showJump': 'ジャンプコードを表示する',
            'beautifyDis': 'ディスカッションページの美化オプション',
            'AutoEnableCodeEditor': '自動でコードエディタを有効にする',
            'showRating': '評価を表示する',
            'scriptLinNumb': 'スクリプトコードの行番号を表示する',
            'ScriptListByCreat': '作成日でスクリプトリストをソートする',
            'moveSidebar': 'サイドバーのお気に入りを移動する',
            'fixNavbar': 'ナビゲーションバーを修正する',
            'addNewScript': 'ナビゲーションバーに新しいスクリプトの投稿オプションを追加する',
            'exactDate': '正確な日付',
            'addDownButton': 'スクリプトとライブラリにダウンロードボタンを追加する',
            'jumpTo18': '成人向けスクリプトにジャンプする',
            'maxView': 'ウェブサイトの最大化表示',
            'cleanUpOld': '指定日数を超える古いスクリプトコメントをクリアする',
            'openTab': '新しいタブでリンクを開く',
            'showIcon': 'スクリプトアイコンを表示する',
            'scriptHisAddInstall': 'スクリプト履歴にインストールを追加する',
            'Settings': '設定',
            'Close': '閉じる',
            'inputDaysToCleanUp': 'クリーンアップする日数を入力してください:',
            'download': 'ダウンロード ⇩',
            'downloading': 'ダウンロード中...',
            'errorCode': 'エラー：ダウンロードに失敗しました、サーバーからのステータスコード:',
            'errorNetwork': 'ダウンロードに失敗しました、ネットワークエラーまたはクロスドメインの問題が発生しました',
            'install': 'インストール',
            'downloadFailed': 'ダウンロードに失敗しました',
            'dallScripts': "すべてのリリースされたスクリプト",
            'JSScripts': "JSスクリプトの数:",
            'CSSScripts': "CSSスクリプトの数:",
            'DailyTotal': "毎日のインストール:",
            'TotalInstalls': "総インストール数:",
            'ok': "すべてのスクリプト:",
            'bad': "総悪いレビュー:",
            'good': "総良いレビュー:",
            'ok': "平均:",
            'loading': "取得中、お待ちください。"
        },
        'ko': {
            'newScript': '새 스크립트 게시',
            'linesOfCode': '코드 라인 수',
            'wordCount': '단어 수',
            'setDisplay': '표시 옵션 설정',
            'showJump': '점프 코드 표시',
            'beautifyDis': '토론 페이지 미화 옵션',
            'AutoEnableCodeEditor': '자동 코드 편집기 활성화',
            'showRating': '평점 표시',
            'scriptLinNumb': '스크립트 코드 줄 번호 표시',
            'ScriptListByCreat': '작성 날짜로 스크립트 목록 정렬',
            'moveSidebar': '사이드바 즐겨찾기 이동',
            'fixNavbar': '네비게이션 바 수정',
            'addNewScript': '네비게이션 바에 새 스크립트 게시 옵션 추가',
            'exactDate': '정확한 날짜',
            'addDownButton': '스크립트 및 라이브러리에 다운로드 버튼 추가',
            'jumpTo18': '성인 스크립트로 이동',
            'maxView': '웹사이트 최대화 보기',
            'cleanUpOld': '지정한 일 수 이상으로 오래된 스크립트 댓글 정리',
            'openTab': '새 탭에서 링크 열기',
            'showIcon': '스크립트 아이콘 표시',
            'scriptHisAddInstall': '스크립트 이력에 설치 추가',
            'Settings': '설정',
            'Close': '닫기',
            'inputDaysToCleanUp': '삭제할 일 수를 입력하십시오:',
            'download': '다운로드 ⇩',
            'downloading': '다운로드 중...',
            'errorCode': '오류: 다운로드 실패, 서버가 반환한 상태 코드:',
            'errorNetwork': '다운로드 실패, 네트워크 오류 또는 크로스도메인 문제',
            'install': '설치',
            'downloadFailed': '다운로드 실패',
            'dallScripts': "모든 릴리스된 스크립트",
            'JSScripts': "JS 스크립트 수:",
            'CSSScripts': "CSS 스크립트 수:",
            'DailyTotal': "일일 설치:",
            'TotalInstalls': "총 설치:",
            'ok': "모든 스크립트:",
            'bad': "총 나쁜 리뷰:",
            'good': "총 좋은 리뷰:",
            'ok': "보통:",
            'loading': "가져오는 중, 잠시 기다려 주세요."
        },
        'ru': {
            'newScript': 'Опубликовать новый скрипт',
            'linesOfCode': 'Количество строк кода',
            'wordCount': 'Количество слов',
            'setDisplay': 'Настройка параметров отображения',
            'showJump': 'Показать переход к коду',
            'beautifyDis': 'Опции улучшения страницы обсуждения',
            'AutoEnableCodeEditor': 'Автоматически включать редактор кода',
            'showRating': 'Показать рейтинг',
            'scriptLinNumb': 'Отображать номера строк кода скрипта',
            'ScriptListByCreat': 'Сортировать список скриптов по дате создания',
            'moveSidebar': 'Переместить боковую панель вверх',
            'fixNavbar': 'Исправить навигационную панель',
            'addNewScript': 'Добавить опцию размещения нового скрипта в навигационную панель',
            'exactDate': 'Точная дата',
            'addDownButton': 'Добавить кнопку загрузки к скриптам и библиотекам',
            'jumpTo18': 'Перейти к взрослым скриптам',
            'maxView': 'Максимизировать просмотр веб-сайта',
            'cleanUpOld': 'Очистить комментарии к скриптам старше указанного количества дней',
            'openTab': 'Открыть ссылку в новой вкладке',
            'showIcon': 'Показать иконку скрипта',
            'scriptHisAddInstall': 'Добавить установку в историю скриптов',
            'Settings': 'Настройки',
            'Close': 'Закрыть',
            'inputDaysToCleanUp': 'Введите количество дней для очистки:',
            'download': 'Скачать ⇩',
            'downloading': 'Загрузка...',
            'errorCode': 'Ошибка: сбой загрузки, сервер вернул код состояния:',
            'errorNetwork': 'Сбой загрузки, сетевая ошибка или проблема с кросс-доменом',
            'install': 'Установить',
            'downloadFailed': 'Сбой загрузки',
            'dallScripts': "Все выпущенные скрипты",
            'JSScripts': "Количество JS скриптов:",
            'CSSScripts': "Количество CSS скриптов:",
            'DailyTotal': "Ежедневные установки:",
            'TotalInstalls': "Всего установок:",
            'ok': "Все скрипты:",
            'bad': "Всего плохих отзывов:",
            'good': "Всего хороших отзывов:",
            'ok': "Средний:",
            'loading': "Получение данных, пожалуйста, подождите."
        },
        'de': {
            'newScript': 'Neues Skript veröffentlichen',
            'linesOfCode': 'Zeilenanzahl',
            'wordCount': 'Wortanzahl',
            'setDisplay': 'Anzeigeoptionen einstellen',
            'showJump': 'Sprung zum Code anzeigen',
            'beautifyDis': 'Optionen zur Verschönerung der Diskussionsseite',
            'AutoEnableCodeEditor': 'Automatische Aktivierung des Code-Editors',
            'showRating': 'Bewertung anzeigen',
            'scriptLinNumb': 'Anzeige der Zeilennummer im Skriptcode',
            'ScriptListByCreat': 'Skriptliste nach Erstellungsdatum sortieren',
            'moveSidebar': 'Favoriten in der Seitenleiste nach oben verschieben',
            'fixNavbar': 'Navigationsleiste reparieren',
            'addNewScript': 'Option zum Veröffentlichen neuer Skripte zur Navigationsleiste hinzufügen',
            'exactDate': 'Exaktes Datum',
            'addDownButton': 'Download-Schaltfläche zu Skripten und Bibliotheken hinzufügen',
            'jumpTo18': 'Zu Erwachsenenskripten springen',
            'maxView': 'Website maximieren',
            'cleanUpOld': 'Kommentare zu Skripten, die älter als eine bestimmte Anzahl von Tagen sind, aufräumen',
            'openTab': 'Links in neuem Tab öffnen',
            'showIcon': 'Skriptsymbol anzeigen',
            'scriptHisAddInstall': 'Installation zur Skript-Historie hinzufügen',
            'Settings': 'Einstellungen',
            'Close': 'Schließen',
            'inputDaysToCleanUp': 'Bitte geben Sie die Anzahl der Tage zum Aufräumen ein:',
            'download': 'Herunterladen ⇩',
            'downloading': 'Herunterladen...',
            'errorCode': 'Fehler: Download fehlgeschlagen, Server hat Statuscode zurückgegeben:',
            'errorNetwork': 'Download fehlgeschlagen, Netzwerkfehler oder Cross-Domain-Probleme',
            'install': 'Installieren',
            'downloadFailed': 'Download fehlgeschlagen',
            'dallScripts': "Alle veröffentlichten Skripte",
            'JSScripts': "Anzahl der JS-Skripte:",
            'CSSScripts': "Anzahl der CSS-Skripte:",
            'DailyTotal': "Tägliche Installationen:",
            'TotalInstalls': "Gesamtinstallationen:",
            'ok': "Alle Skripte:",
            'bad': "Gesamtschlechte Bewertungen:",
            'good': "Gesamtgute Bewertungen:",
            'ok': "Durchschnitt:",
            'loading': "Abrufen, bitte warten."
        },
        'fr': {
            'newScript': 'Publier un nouveau script',
            'linesOfCode': 'Nombre de lignes de code',
            'wordCount': 'Nombre de mots',
            'setDisplay': 'Configurer les options d\'affichage',
            'showJump': 'Afficher le saut de code',
            'beautifyDis': 'Options d\'embellissement de la page de discussion',
            'AutoEnableCodeEditor': 'Activer automatiquement l\'éditeur de code',
            'showRating': 'Afficher la note',
            'scriptLinNumb': 'Afficher le numéro de ligne du code du script',
            'ScriptListByCreat': 'Trier la liste des scripts par date de création',
            'moveSidebar': 'Déplacer les favoris de la barre latérale vers le haut',
            'fixNavbar': 'Réparer la barre de navigation',
            'addNewScript': 'Ajouter une option de publication de nouveau script dans la barre de navigation',
            'exactDate': 'Date exacte',
            'addDownButton': 'Ajouter un bouton de téléchargement aux scripts et aux bibliothèques',
            'jumpTo18': 'Aller aux scripts pour adultes',
            'maxView': 'Maximiser la vue du site Web',
            'cleanUpOld': 'Nettoyer les commentaires de scripts plus anciens que le nombre de jours spécifié',
            'openTab': 'Ouvrir le lien dans un nouvel onglet',
            'showIcon': 'Afficher l\'icône du script',
            'scriptHisAddInstall': 'Ajouter une installation à l\'historique des scripts',
            'Settings': 'Paramètres',
            'Close': 'Fermer',
            'inputDaysToCleanUp': 'Veuillez entrer le nombre de jours pour nettoyer :',
            'download': 'Télécharger ⇩',
            'downloading': 'Téléchargement en cours...',
            'errorCode': 'Erreur : échec du téléchargement, le serveur a renvoyé le code d\'état :',
            'errorNetwork': 'Échec du téléchargement, erreur réseau ou problème de domaine croisé',
            'install': 'Installer',
            'downloadFailed': 'Échec du téléchargement',
            'dallScripts': "Tous les scripts publiés",
            'JSScripts': "Nombre de scripts JS:",
            'CSSScripts': "Nombre de scripts CSS:",
            'DailyTotal': "Installations quotidiennes:",
            'TotalInstalls': "Total des installations:",
            'ok': "Tous les scripts:",
            'bad': "Total des mauvais avis:",
            'good': "Total des bons avis:",
            'ok': "Moyenne:",
            'loading': "Récupération en cours, veuillez patienter."
        },
        'it': {
            'newScript': 'Pubblica nuovo script',
            'linesOfCode': 'Numero di righe di codice',
            'wordCount': 'Numero di parole',
            'setDisplay': 'Imposta opzioni di visualizzazione',
            'showJump': 'Mostra salto al codice',
            'beautifyDis': 'Opzioni di abbellimento della pagina di discussione',
            'AutoEnableCodeEditor': 'Abilita automaticamente l\'editor di codice',
            'showRating': 'Mostra valutazione',
            'scriptLinNumb': 'Mostra numero di righe nel codice dello script',
            'ScriptListByCreat': 'Ordina lista script per data di creazione',
            'moveSidebar': 'Sposta preferiti nella barra laterale in alto',
            'fixNavbar': 'Ripara la barra di navigazione',
            'addNewScript': 'Aggiungi opzione per pubblicare nuovo script nella barra di navigazione',
            'exactDate': 'Data esatta',
            'addDownButton': 'Aggiungi pulsante download a script e librerie',
            'jumpTo18': 'Vai a script per adulti',
            'maxView': 'Massimizza visualizzazione del sito web',
            'cleanUpOld': 'Pulisci commenti script più vecchi di un certo numero di giorni',
            'openTab': 'Apri link in una nuova scheda',
            'showIcon': 'Mostra icona dello script',
            'scriptHisAddInstall': 'Aggiungi installazione alla cronologia degli script',
            'Settings': 'Impostazioni',
            'Close': 'Chiudi',
            'inputDaysToCleanUp': 'Inserisci i giorni per la pulizia:',
            'download': 'Scarica ⇩',
            'downloading': 'Scaricamento...',
            'errorCode': 'Errore: download fallito, il server ha restituito il codice di stato:',
            'errorNetwork': 'Download fallito, errore di rete o problema di dominio incrociato',
            'install': 'Installa',
            'downloadFailed': 'Download fallito',
            'dallScripts': "Tutti gli script rilasciati",
            'JSScripts': "Numero di script JS:",
            'CSSScripts': "Numero di script CSS:",
            'DailyTotal': "Installazioni giornaliere:",
            'TotalInstalls': "Installazioni totali:",
            'ok': "Tutti gli script:",
            'bad': "Totale recensioni negative:",
            'good': "Totale recensioni positive:",
            'ok': "Media:",
            'loading': "Recupero in corso, attendere prego."
        },
        'ar': {
            'newScript': 'نشر سكريبت جديد',
            'linesOfCode': 'عدد الأسطر في الكود',
            'wordCount': 'عدد الكلمات',
            'setDisplay': 'تعيين خيارات العرض',
            'showJump': 'إظهار الانتقال إلى الكود',
            'beautifyDis': 'خيارات تجميل صفحة المناقشة',
            'AutoEnableCodeEditor': 'تمكين محرر الكود تلقائيًا',
            'showRating': 'إظهار التقييم',
            'scriptLinNumb': 'عرض أرقام الأسطر في كود السكريبت',
            'ScriptListByCreat': 'فرز قائمة السكريبتات حسب تاريخ الإنشاء',
            'moveSidebar': 'نقل الاختيارات في الشريط الجانبي لأعلى',
            'fixNavbar': 'إصلاح شريط التنقل',
            'addNewScript': 'إضافة خيار نشر سكريبت جديد إلى شريط التنقل',
            'exactDate': 'تاريخ دقيق',
            'addDownButton': 'إضافة زر التنزيل للسكريبتات والمكتبات',
            'jumpTo18': 'الانتقال إلى السكريبتات الخاصة بالبالغين',
            'maxView': 'تكبير عرض الموقع الإلكتروني',
            'cleanUpOld': 'تنظيف تعليقات السكريبتات القديمة بعد عدد معين من الأيام',
            'openTab': 'فتح الروابط في علامة تبويب جديدة',
            'showIcon': 'إظهار رمز السكريبت',
            'scriptHisAddInstall': 'إضافة التثبيت إلى سجل السكريبتات',
            'Settings': 'الإعدادات',
            'Close': 'إغلاق',
            'inputDaysToCleanUp': 'يرجى إدخال عدد الأيام لتنظيفها:',
            'download': 'تحميل ⇩',
            'downloading': 'جار التحميل...',
            'errorCode': 'خطأ: فشل التحميل، استجابة خادم برمز الحالة:',
            'errorNetwork': 'فشل التحميل، خطأ في الشبكة أو مشكلة في النطاق العابر',
            'install': 'تثبيت',
            'downloadFailed': 'فشل التحميل',
            'dallScripts': "جميع البرامج النصية المنشورة",
            'JSScripts': "عدد برامج JS النصية:",
            'CSSScripts': "عدد برامج CSS النصية:",
            'DailyTotal': "التثبيتات اليومية:",
            'TotalInstalls': "إجمالي التثبيتات:",
            'ok': "جميع البرامج النصية:",
            'bad': "إجمالي التقييمات السلبية:",
            'good': "إجمالي التقييمات الإيجابية:",
            'ok': "متوسط:",
            'loading': "جارٍ التحميل، يرجى الانتظار."
        },
        'he': {
            'newScript': 'פרסם סקריפט חדש',
            'linesOfCode': 'מספר שורות בקוד',
            'wordCount': 'מספר מילים',
            'setDisplay': 'הגדר אפשרויות תצוגה',
            'showJump': 'הצג קפיצה לקוד',
            'beautifyDis': 'אפשרויות ייפוי דף הדיון',
            'AutoEnableCodeEditor': 'הפעל עורך קוד באופן אוטומטי',
            'showRating': 'הצג דירוג',
            'scriptLinNumb': 'הצג מספרי שורות בקוד הסקריפט',
            'ScriptListByCreat': 'מיין רשימת סקריפטים לפי תאריך יצירה',
            'moveSidebar': 'הזז את המועדפים בסרגל הצד',
            'fixNavbar': 'תקן את תפריט הניווט',
            'addNewScript': 'הוסף אפשרות לפרסום סקריפט חדש לתפריט הניווט',
            'exactDate': 'תאריך מדויק',
            'addDownButton': 'הוסף כפתור הורדה לסקריפטים וספריות',
            'jumpTo18': 'קפיצה לסקריפטים למבוגרים',
            'maxView': 'הצגה מקסימלית של האתר',
            'cleanUpOld': 'ניקוי תגובות סקריפטים ישנות מעל מספר ימים מסוים',
            'openTab': 'פתח קישור בכרטיסייה חדשה',
            'showIcon': 'הצג סמל סקריפט',
            'scriptHisAddInstall': 'הוסף התקנה להיסטוריית הסקריפטים',
            'Settings': 'הגדרות',
            'Close': 'סגור',
            'inputDaysToCleanUp': 'אנא הזן את מספר הימים לניקוי:',
            'download': 'הורדה ⇩',
            'downloading': 'מוריד...',
            'errorCode': 'שגיאה: הורדה נכשלה, השרת החזיר קוד מצב:',
            'errorNetwork': 'הורדה נכשלה, בעיה ברשת או בקריאה חוצה דומיין',
            'install': 'התקן',
            'downloadFailed': 'הורדה נכשלה',
            'dallScripts': "כל הסקריפטים שפורסמו",
            'JSScripts': "מספר סקריפטים JS:",
            'CSSScripts': "מספר סקריפטים CSS:",
            'DailyTotal': "התקנות יומיות:",
            'TotalInstalls': "סך ההתקנות:",
            'ok': "כל הסקריפטים:",
            'bad': "סה\"כ ביקורות רעות:",
            'good': "סה\"כ ביקורות טובות:",
            'ok': "ממוצע:",
            'loading': "טוען, נא להמתין."
        },
        'vi': {
            'newScript': 'Đăng bài kịch mới',
            'linesOfCode': 'Số dòng mã',
            'wordCount': 'Số từ',
            'setDisplay': 'Thiết lập tùy chọn hiển thị',
            'showJump': 'Hiển thị chuyển đến mã',
            'beautifyDis': 'Tùy chọn làm đẹp trang thảo luận',
            'AutoEnableCodeEditor': 'Tự động bật trình soạn thảo mã',
            'showRating': 'Hiển thị xếp hạng',
            'scriptLinNumb': 'Hiển thị số dòng mã script',
            'ScriptListByCreat': 'Sắp xếp danh sách script theo ngày tạo',
            'moveSidebar': 'Di chuyển ưa thích trong thanh bên',
            'fixNavbar': 'Sửa chữa thanh điều hướng',
            'addNewScript': 'Thêm tùy chọn đăng bài kịch mới vào thanh điều hướng',
            'exactDate': 'Ngày chính xác',
            'addDownButton': 'Thêm nút tải về cho script và thư viện',
            'jumpTo18': 'Chuyển đến script người lớn',
            'maxView': 'Tối đa hóa xem trang web',
            'cleanUpOld': 'Dọn dẹp bình luận script cũ hơn một số ngày nhất định',
            'openTab': 'Mở liên kết trong tab mới',
            'showIcon': 'Hiển thị biểu tượng script',
            'scriptHisAddInstall': 'Thêm cài đặt vào lịch sử script',
            'Settings': 'Cài đặt',
            'Close': 'Đóng',
            'inputDaysToCleanUp': 'Vui lòng nhập số ngày để dọn dẹp:',
            'download': 'Tải xuống ⇩',
            'downloading': 'Đang tải xuống...',
            'errorCode': 'Lỗi: Tải xuống thất bại, máy chủ đã trả về mã trạng thái:',
            'errorNetwork': 'Tải xuống thất bại, lỗi mạng hoặc vấn đề vượt miền',
            'install': 'Cài đặt',
            'downloadFailed': 'Tải xuống thất bại',
            'dallScripts': "Tất cả các tập lệnh đã phát hành",
            'JSScripts': "Số lượng tập lệnh JS:",
            'CSSScripts': "Số lượng tập lệnh CSS:",
            'DailyTotal': "Lượt cài đặt hàng ngày:",
            'TotalInstalls': "Tổng lượt cài đặt:",
            'ok': "Tất cả tập lệnh:",
            'bad': "Tổng số đánh giá xấu:",
            'good': "Tổng số đánh giá tốt:",
            'ok': "Trung bình:",
            'loading': "Đang tải, vui lòng đợi."
        }
    }
    return (id, lang = '') => {
        const selectedLang = lang || userLang
        return (strings[selectedLang] || strings.en)[id] || strings.en[id]
    }
    //  return id => (strings[userLang] || strings.en)[id] || strings.en[id];
}());
(function () {
    'use strict'
    var DEBUG = true
    var showRating = GM_getValue('showRating', false) // 默认展示评分
    var showSourceCode = GM_getValue('showSourceCode', false) // 默认展示源码按钮
    var modifyRadioLabels = GM_getValue('modifyRadioLabels', false)//评论区梅花
    var autocheck = GM_getValue('autocheck', false)//自动点击美化编辑器
    var showtotal = GM_getValue('showtotal', false)//显示代码字数
    var scriptwithdata = GM_getValue('scriptwithdata', true)//导航栏点击跳转时间创建
    var scriptset = GM_getValue('scriptset', true)//侧边栏脚本上移动
    var HeaderStyleFix = GM_getValue('HeaderStyleFix', true)//修复导航栏
    var AbsoluteTime = GM_getValue('AbsoluteTime', false)//精确时间
    var addbutton = GM_getValue('addbutton', true)//添加下载按钮
    var jumpto = GM_getValue('jumpto', false)//跳转18
    var greasymaxWidth = GM_getValue('greasymaxWidth', false)//最大窗口
    var clearhomepage = GM_getValue('clearhomepage', true)//清理主页过期评论
    var clearhomepagedays = GM_getValue('clearhomepagedays', false)//清理主页过期评论的天数
    var newtabtoinstall = GM_getValue('newtabtoinstall', false)  //油猴新窗口打开
    var viewicon = GM_getValue('viewicon', true)//查看脚本的图标
    var installforversions = GM_getValue('installforversions', true)//下载历史版本
    var setcopylink = GM_getValue('setcopylink', true)//复制代码
    var sethtmlview = GM_getValue('sethtmlview', false)//脚本简介转文档查看
    var Postlink = GM_getValue('Postlink', true)//发布新脚本
    var remme = GM_getValue('remme', true)//在登录页自动点击记住我
    var setlocklang = GM_getValue('setlocklang', false)// 锁点语言
    var setopenindoc = GM_getValue('setopenindoc', true) //在导航栏添加打开设置界面
    var buttonopen = true
    var copyshortlink = GM_getValue('copyshortlink', true) //复制短链接
    var cleanscriptname = GM_getValue('cleanscriptname', true) //清理脚本名称
    var addedittohomepage = GM_getValue('addedittohomepage', true) //在主页脚本增加编辑删除安装
    var searchingreasyfork = GM_getValue('searchingreasyfork', '1')//适用于默认打开网址
    var usersearchingreasyfork = GM_getValue('usersearchingreasyfork', true)//启用适用于增强
    var navigateTotab = GM_getValue('navigateTotab', true)//适用于新窗口打开
    var showlinktotal = GM_getValue('showlinktotal', true)//适用于网站数量
    var userhandleLocaleFilter = GM_getValue('userhandleLocaleFilter', true)//语言移除功能
    var userapplyCustomStyles = GM_getValue('userapplyCustomStyles', false)//旧版本风格
    var usercssto = GM_getValue('usercssto', true)//美化页面按钮等信息
    var useHighlighting = GM_getValue('useHighlighting', true)//高亮网页文本代码
    var useHighlighttocode = GM_getValue('useHighlighttocode', true)//高亮查看代码
    var showinstallbutton = GM_getValue('showinstallbutton', true)//脚本列表显示安装和下载按钮
    var addCopyButtonBeforelibScript = GM_getValue('addCopyButtonBeforelibScript', true)//库声明前增加复制
    var wightnav = GM_getValue('wightnav', true)//对齐导航栏
    var lockmode = GM_getValue('lockmode', '0')//高亮美化代码和代码片段锁定黑夜模式
    var hideuserdiscussions = GM_getValue('hideuserdiscussions', false)//隐藏主页评论
    var showresource = GM_getValue('showresource', false)//代码页面显示引用的文件数量
    var usereport = GM_getValue('usereport', true)//讨论页面增加举报
    var userlocalfav = GM_getValue('userlocalfav', true)//本地收藏
    var favs = JSON.parse(GM_getValue('favs', '[]'))//本地收藏信息
    var hidediscussionread = GM_getValue('hidediscussionread', false)//隐藏已经阅读的评论
    var italicdiscussionread = GM_getValue('italicdiscussionread', true)//斜体已经阅读的评论
    var shouwtotalonuserpage = GM_getValue('shouwtotalonuserpage', true)// 主页显示数量
    function reloadSettings() {
        showRating = GM_getValue('showRating', false) // 默认展示评分
        showSourceCode = GM_getValue('showSourceCode', false) // 默认展示源码按钮
        modifyRadioLabels = GM_getValue('modifyRadioLabels', false) // 评论区梅花
        autocheck = GM_getValue('autocheck', false) // 自动点击美化编辑器
        showtotal = GM_getValue('showtotal', false) // 显示代码字数
        scriptwithdata = GM_getValue('scriptwithdata', true) // 导航栏点击跳转时间创建
        scriptset = GM_getValue('scriptset', true) // 侧边栏脚本上移动
        HeaderStyleFix = GM_getValue('HeaderStyleFix', true) // 修复导航栏
        AbsoluteTime = GM_getValue('AbsoluteTime', false) // 精确时间
        addbutton = GM_getValue('addbutton', true) // 添加下载按钮
        jumpto = GM_getValue('jumpto', false) // 跳转18
        greasymaxWidth = GM_getValue('greasymaxWidth', false) // 最大窗口
        clearhomepage = GM_getValue('clearhomepage', true) // 清理主页过期评论
        clearhomepagedays = GM_getValue('clearhomepagedays', false) // 清理主页过期评论的天数
        newtabtoinstall = GM_getValue('newtabtoinstall', false) // 油猴新窗口打开
        viewicon = GM_getValue('viewicon', true) // 查看脚本的图标
        installforversions = GM_getValue('installforversions', true) // 下载历史版本
        setcopylink = GM_getValue('setcopylink', true) // 复制代码
        sethtmlview = GM_getValue('sethtmlview', false) // 脚本简介转文档查看
        Postlink = GM_getValue('Postlink', true) // 发布新脚本
        remme = GM_getValue('remme', true) // 在登录页自动点击记住我
        setlocklang = GM_getValue('setlocklang', false) // 锁点语言
        setopenindoc = GM_getValue('setopenindoc', true) // 在导航栏添加打开设置界面
        buttonopen = true
        copyshortlink = GM_getValue('copyshortlink', true) // 复制短链接
        cleanscriptname = GM_getValue('cleanscriptname', true) // 清理脚本名称
        addedittohomepage = GM_getValue('addedittohomepage', true) // 在主页脚本增加编辑删除安装
        searchingreasyfork = GM_getValue('searchingreasyfork', '1') // 适用于默认打开网址
        usersearchingreasyfork = GM_getValue('usersearchingreasyfork', true) // 启用适用于增强
        navigateTotab = GM_getValue('navigateTotab', true) // 适用于新窗口打开
        showlinktotal = GM_getValue('showlinktotal', true) // 显示链接总数
    }
    //功能-发布新脚本链接放在导航栏
    if (Postlink) {
        const country_code = getCountryCode()
        setTimeout(function () {
            addNavLink(translate('newScript'), "/" + country_code + '/script_versions/new', false)
        }, 100)
    }
    if (remme && document.querySelector("#new_user > div:nth-child(4) > label")) {
        //功能-登录页面自动点击记住我
        function clickLabelsDirectly() {
            // 直接选中并点击第一个元素
            document.querySelector("#new_user > div:nth-child(4) > label").click()
            // 直接选中并点击第二个元素
            document.querySelector("body > div.width-constraint > section > div > div > form > div.remember-me > label").click()
        }
        if (window.location.href.includes("users/sign_in")) {
            clickLabelsDirectly()
        }
    }
    // 调用函数
    //功能-增加图标
    if (viewicon) {
        if (/^https:\/\/(greasy|sleazy)fork\.org\/([^/]+\/)?scripts\/([^/]+|$)/.test(window.location.href)) {
            const installArea = document.querySelector('div#install-area')
            if (installArea) {
                addIcon(installArea)
            }
        }
    }
    //功能-油猴新窗口打开
    if (newtabtoinstall) {
        //      installBtn.target = '_blank';
        document.querySelectorAll('a').forEach(item => {
            //不给空href和greasyfork的page页加_blank
            if (!/javascript/.test(item.href) && !/page/.test(item.href)) {
                item.setAttribute('target', '_blank')
            }
        })
    }
    //功能-作者界面清理超过30天的评论
    if (clearhomepage) {
        if (window.location.href.includes("users")) {
            let items = document.querySelectorAll("#user-discussions-on-scripts-written > section > div")
            let now = new Date()
            let num = 0
            for (let item of items) {
                let item_time = item.querySelector('relative-time').date
                if (now - new Date(item_time) > 24 * 3600 * 1000 * clearhomepagedays) {
                    item.style.display = "none"
                    num += 1
                }
            }
        }
    }
    //功能-修复导航栏不在中间
    if (wightnav) {
        var e = document.getElementsByClassName("width-constraint")
        e[0].style.maxWidth = "95%" //header
    }
    //功能-最大化使用
    if (greasymaxWidth) {
        try {
            var e = document.getElementsByClassName("width-constraint")
            e[0].style.maxWidth = "95%" //header
            e[1].style.maxWidth = "95%" //content
        } catch (exp) { }
        try {
            document.getElementById("browse-script-list").style.width = "100%"
        } catch (exp) { } //suchergebnisse;
        try {
            document.getElementById("user-script-list").style.width = "100%"
        } catch (exp) { } //suchergebnisse;
        try {
            document.getElementById("script-list-option-groups").style.width = "100%"
        } catch (exp) { } //sidebar;
        try {
            document.getElementById("carbonads").style.height = "0px"
        } catch (exp) { } //carbon werbung
        //try{document.getElementsByClassName("adsbygoogle")[0].style.height = "0px";}catch(exp){} //google werbung
    }
    //功能-点击导航栏默认跳转创建日期
    if (scriptwithdata) {
        var scriptslinks = document.getElementsByClassName("scripts-index-link")
        if (userhandleLocaleFilter) {
            scriptslinks[0].firstChild.href = scriptslinks[0].firstChild.href.replace("/scripts", "/scripts?sort=created&filter_locale=0")
        } else {
            scriptslinks[0].firstChild.href = scriptslinks[0].firstChild.href.replace("/scripts", "/scripts?sort=created")
        }
    }
    // 功能-跳转大人
    if (jumpto) {
        var currentUrl = window.location.href
        const country_code = getCountryCode()
        if (currentUrl.includes("greasyfork.org")) {
            addNavLink("🔞", "https://sleazyfork.org/" + country_code + '/scripts')
        } else if (currentUrl.includes("sleazyfork.org")) {
            addNavLink("🍴", "https://greasyfork.org/" + country_code + '/scripts', false, false)
        }
    }
    //功能-本地收藏夹
    function refreshFavorites() {
        favs = JSON.parse(GM_getValue('favs', '[]'))
    }
    if (userlocalfav) {
        addNavLink('书签', "https://greasyfork.org/" + getCountryCode() + "/404?Bookmarks", true)
    }
    getCountryCode()
    function favPage() {
        if (window.location.href == "https://greasyfork.org/" + getCountryCode() + "/404?Bookmarks") {
            document.title = 'bookmarks'
            //  document.querySelector("body > div > section").remove()
            let scripts = JSON.parse(GM_getValue('favs', '[]'))
            document.querySelector("body > div > section").innerHTML = `<ol id="browse-script-list" class="script-list ">`
            const reverseOrder = true
            for (let script of (reverseOrder ? scripts.reverse() : scripts)) {
                let elm = document.querySelector("#browse-script-list"),
                    li = document.createElement("li")
                li.innerHTML = `
             <div class="parent-container">
            <a class="script-link" href="${script.href}">${script.title}</a>
            <span class="badge badge-author" title="收藏时间">${script.timestamp}</span>
            <span class="script-description description">${script.description}
            </div>
         `
                let scriptLinkElement = li.querySelector('.script-link')
                handleScriptPage(script.description, script.title, scriptLinkElement, script.href, 'a', 'custom-class', (favs, value, scriptLinks) => {
                    // 这里是回调函数的实现
                    if (value) {
                        scriptLinks.style.textDecoration = 'none'
                        scriptLinks.style.color = '#a42121'       // 文字颜色改为红色
                        scriptLinks.style.fontStyle = 'normal'    // 取消斜体
                    } else {
                        scriptLinks.style.textDecoration = 'line-through'
                        scriptLinks.style.color = 'gray'           // 文字颜色改为灰色
                        scriptLinks.style.fontStyle = 'italic'    // 文字变成斜体
                    }
                })
                elm.appendChild(li)
            }
        }
    }
    favPage()
    function handleScriptPage(scriptDescription, scriptTitle, scriptLinks, href, type = 'li', customClassName = '', callback = null) {
        let li = document.createElement(type)
        if (customClassName) {
            li.classList.add(customClassName)
        }
        setStar(li, false)
        if (type === 'li') {
            scriptLinks.appendChild(li)
        } else {
            scriptLinks.parentNode.insertBefore(li, scriptLinks.nextElementSibling)
        }
        let index = -1,
            val = scriptTitle,
            filteredObj = favs.find((item, i) => {
                if (item.title === val) {
                    index = i
                    return i
                }
            })
        if (index !== -1) {
            setStar(li, true)
        }
        li.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            refreshFavorites()
            const now = new Date()
            const localTime = now.toLocaleString()
            var value = {
                title: scriptTitle,
                description: scriptDescription,
                href: href,
                timestamp: localTime,
            }
            var index = -1,
                val = scriptTitle,
                filteredObj = favs.find(function (item, i) {
                    if (item.title === val) {
                        index = i
                        return i
                    }
                })
            if (index == -1) {
                favs.push(value)
                setStar(li, true)
                if (callback) {
                    callback(favs, true, scriptLinks)
                }
            } else {
                favs.splice(index, 1)
                setStar(li, false)
                if (callback) {
                    callback(favs, false, scriptLinks)
                }
            }
            GM_setValue('favs', JSON.stringify(favs))
        })
    }
    function scriptPage() {
        if (location.href.match('/scripts') && document.querySelector("#script-links")) {
            let scriptLinks = document.querySelector("#script-links")
            let scriptTitle = document.querySelector("#script-info > header > h2").innerText
            let scriptDescription = document.querySelector(".script-description").innerText
            let href = window.location.href
            handleScriptPage(scriptDescription, scriptTitle, scriptLinks, href)
        }
    }
    scriptPage()
    function addStyle() {
        var css = `
.badge.badge-author {
font-size: 0.7em;
float: right;
}
.custom-class {
position: absolute;
bottom: 0;
right: 0;
margin-right: 0px;
margin-bottom: 0;
}
  .parent-container {
  position: relative;
}
    #script-links > li:nth-child(6) {
    text-decoration: none;
    cursor: pointer;
    color: #a42121;
    }`,
            style = document.createElement('style')
        style.innerHTML = css
        document.head.append(style)
    } addStyle()
    function setStar(li, condition) {
        if (condition) {
            li.innerHTML = '<a href="#" style="color: green;">★</a>'
        } else {
            li.innerHTML = '<a href="#" style="text-decoration: none;">☆</a>'
        }
    }
    // 功能-脚本名称清理 https://greasyfork.org/zh-CN/scripts/431940
    const m = /(\/[^/]+\/(?:scripts|users)\/\d+)-[^/]+(\/.*)?/.exec(location.pathname)
    if (m && cleanscriptname) {
        history.replaceState({}, null, `${location.origin}${m[1]}${m[2] ?? ''}${location.search}${location.hash}`)
    }
    // 功能-主页增加编辑  // Adds a new link plus a separator
    //https://update.greasyfork.org/scripts/15201/Greasy%20Fork%20Links.user.js
    if (addedittohomepage && isHomepage()) {
        function insertElement(link, text, href) {
            var el = document.createElement(href ? 'a' : 'span')
            if (href) {
                el.href = href
                // console.log(el);
            }
            el.innerText = text
            link.parentNode.insertBefore(el, link.nextElementSibling)
        }
        function addLink(link, text, href, separator) {
            insertElement(link, text, href)
            insertElement(link, separator, null)
        }
        if (document.querySelector('#user-script-list')) {
            var loggedIn = document.querySelector('#nav-user-info > .user-profile-link')
            var items = document.querySelectorAll('#user-script-list > li')
            for (var i = 0; i < items.length; i++) {
                var link = items[i].querySelector('a')
                if (loggedIn) {
                    addLink(link, 'Edit', '/en/scripts/' + items[i].getAttribute('data-script-id') + '/versions/new', ' - ')
                    addLink(link, 'Delete', link.href + '/delete', '/')
                }
                addLink(link, 'Install', link.href + '/code/' + encodeURIComponent(link.innerText) + '.user.js', ' - ')
            }
            // Display number of userscripts
            var scripts = document.querySelector("#user-script-list-section > header > h3")
            if (scripts) {
                scripts.innerText = `${scripts.innerText} (${items.length})`
            }
        }
    }
    //功能-隐藏主页评论
    if (hideuserdiscussions && isHomepage()) {
        document.querySelector("#user-discussions").style.display = 'none'
    }
    // 功能-短链接复制
    const idPrefix = "" // 根据需要设置前缀
    if (copyshortlink && document.querySelector("#script-info")) {
        shortLink()
    }
    function shortLink() {
        const description = document.querySelector("div#script-content")
        const url = window.location.href
        const scriptId = url.match(/\/scripts\/(\d+)/)?.[1]
        if (!scriptId || !description) return
        const id = idPrefix + "short-link"
        const current = document.getElementById(id)
        const short = `https://greasyfork.org/scripts/${scriptId}`
        if (current) {
            logMessage('shortLink', '删除现有的短链接元素', false)
            // Remove the existing short link element
            current.remove()
        } else {
            logMessage('shortLink', '新增短链元素', true)
            // Add the short link element
            const p = description.insertAdjacentElement("beforebegin", document.createElement("p"))
            p.id = id
            p.textContent = "Short link: "
            const link = p.appendChild(document.createElement("a"))
            link.href = short
            link.textContent = short
            const copy = p.appendChild(document.createElement("a"))
            copy.textContent = "Copy"
            copy.style.marginLeft = "1em"
            copy.style.cursor = "pointer"
            copy.title = "Copy short link to clipboard"
            copy.addEventListener("click", () => {
                if (copy.textContent === "Copied!") return
                navigator.clipboard.writeText(short).then(() => {
                    copy.textContent = "Copied!"
                    window.setTimeout(() => {
                        copy.textContent = "Copy"
                    }, 1000)
                })
            })
        }
    }
    //webhoot
    // 功能-导航栏增加打开设置
    if (setopenindoc) {
        addNavLink(translate('thisname'), '#', false, false, "renminde")
        var customClassName = 'renminde' // 自定义类名
        var link = document.querySelector(`.${customClassName} > a`)
        if (link) {
            link.addEventListener('click', event => {
                event.preventDefault()
                showSettingsModal()
            })
        }
    }
    // 功能-评论区美化选项
    if (modifyRadioLabels) {
        if (document.location.pathname.endsWith('/feedback')) {
            var ratings = {
                'discussion_rating_0': {
                    separator: ' - ',
                    originalText: ''
                },
                'discussion_rating_2': {
                    separator: ' - ',
                    originalText: ''
                },
                'discussion_rating_3': {
                    separator: ' - ',
                    originalText: ''
                },
                'discussion_rating_4': {
                    separator: ' - ',
                    originalText: ''
                }
            }
            // 遍历评分信息对象，获取并处理每个评分选项的原始文本
            Object.keys(ratings).forEach(function (key) {
                ratings[key].originalText = $('.radio-label[for="' + key + '"]').text()
                ratings[key].parts = ratings[key].originalText.split(ratings[key].separator)
            })
            // 更新页面上的评分选项内容
            $('.radio-label[for="discussion_rating_0"]').html('<span class="rating-icon rating-icon-none">' + ratings['discussion_rating_0'].parts[0] + '</span> - ' + ratings['discussion_rating_0'].parts[1])
            $('.radio-label[for="discussion_rating_2"]').html('<span class="rating-icon rating-icon-bad">' + ratings['discussion_rating_2'].parts[0] + '</span> - ' + ratings['discussion_rating_2'].parts[1])
            $('.radio-label[for="discussion_rating_3"]').html('<span class="rating-icon rating-icon-ok">' + ratings['discussion_rating_3'].parts[0] + '</span> - ' + ratings['discussion_rating_3'].parts[1])
            $('.radio-label[for="discussion_rating_4"]').html('<span class="rating-icon rating-icon-good">' + ratings['discussion_rating_4'].parts[0] + '</span> - ' + ratings['discussion_rating_4'].parts[1])
        }
        //
    }
    // 功能-代码字数
    function get_size_from_doc(doc) {
        let t = doc.querySelector('#script-content .code-container pre').innerText
        const byteLength = new TextEncoder().encode(t).length
        const size = formatFileSize(byteLength)
        return {
            lines: t.split('\n').length,
            chars: t.length,
            filesize: size,
        }
    }
    function handle_code_page() {
        let s = get_size_from_doc(document)
        let e = document.createElement('span')
        e.innerText = `Lines: ${s.lines}, Characters: ${s.chars}`
        e.innerHTML = `<span style="font-size: 15px; border-radius: 3px; background: rgb(45, 45, 45); color: rgb(255, 255, 255); margin: 0px 4px; padding: 0 4px; outline: 2px solid red;">
                    <span style="width: 8px; height: 8px; display: inline-flex; margin-bottom: 1px; margin-left: 4px; border-radius: 50%; background: yellow;"></span>
                    ${translate('linesOfCode')} ${s.lines}, ${translate('wordCount')} ${s.chars},大小${s.filesize}
                  </span>`
        if (isMobile()) {
            var parentElement = document.querySelector('#script-feedback-suggestion')
            var referenceElement = parentElement.nextElementSibling
            parentElement.insertAdjacentElement('afterend', e)
        } else {
            document.querySelector('#script-feedback-suggestion').appendChild(e)
        }
    }
    if (isScriptCodePage() && showtotal) {
        handle_code_page()
    }
    if (setcopylink && isScriptCodePage()) {
        copycodelink()
    }
    // 封装的复制代码函数
    function copyCode() {
        let pre = document.querySelector(".code-container > pre")
        if (!pre) {
            pre = document.querySelector("pre.uglyprint")
        }
        //  const pre = document.querySelector(".code-container > pre");
        const codeText = pre.innerText
            .split('\n')
            .filter(line => line.trim() !== '')  // 删除空白行
            .map(line => {
                // 删除行首的纯数字串和紧跟其后的空白字符
                return line.replace(/^\d+/, '')
            })
            .join('\n')
        GM_setClipboard(codeText, "text")
    }
    // 功能-代码复制按钮
    function copycodelink() {
        let b = document.createElement('a')
        b.href = '#'
        b.draggable = false
        b.innerText = translate('copyto')
        b.className = 'copycode'
        b.onclick = async event => {
            event.preventDefault()
            await copyCode()
            Toast('Copy successful', 3000, '#0000ff', '#ffffff', 'top')
        }
        if (isMobile()) {
            var parentElement = document.querySelector("#script-content > div.code-container")
            var referenceElement = parentElement.nextElementSibling
            parentElement.insertAdjacentElement('beforebegin', b)
        } else {
            document.querySelector('#script-feedback-suggestion').appendChild(b)
        }
    }
    // 功能-切换脚本简介greasyfork.org/scripts/471149
    let additionalInfoDiv = document.querySelector('#additional-info.user-content')
    if (sethtmlview && additionalInfoDiv) {
        const htmlViewb = document.createElement("a")
        htmlViewb.href = "#"
        htmlViewb.className = "install-link htmlViewb"
        htmlViewb.style.marginLeft = "0.5rem"
        htmlViewb.textContent = translate('htmlViewtotext')
        htmlViewb.addEventListener('click', (event) => {
            event.preventDefault()
            // Toggle the HTML view
            if (additionalInfoDiv.dataset.htmlView === 'true') {
                // Revert to the original content
                additionalInfoDiv.dataset.htmlView = 'false'
                additionalInfoDiv.innerHTML = additionalInfoDiv.dataset.originalContent
                htmlViewb.textContent = translate('htmlViewtotext')
            } else {
                // Save the original content and replace with the HTML view
                additionalInfoDiv.dataset.htmlView = 'true'
                additionalInfoDiv.dataset.originalContent = additionalInfoDiv.innerHTML
                additionalInfoDiv.textContent = additionalInfoDiv.innerHTML
                htmlViewb.textContent = translate('texttohtmlView')
            }
        })
        if (additionalInfoDiv) {
            additionalInfoDiv.parentNode.insertBefore(htmlViewb, additionalInfoDiv)
        }
    }
    // 功能-侧边栏脚本上移动
    const findlis = document.getElementById("script-list-sort")
    if (scriptset && findlis) {
        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    // 检查是否出现了 Script set 元素
                    var setDiv = document.getElementById("script-list-set")
                    if (setDiv) {
                        // 找到 script-list-sort 元素
                        var sortDiv = document.getElementById("script-list-sort")
                        // 将 setDiv 插入到 sortDiv 下面
                        sortDiv.parentNode.insertBefore(setDiv, sortDiv.nextSibling)
                        // 弹出提示
                        // 停止监听DOM的变化
                        observer.disconnect()
                        break
                    }
                }
            }
        })
        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    }
    // 功能-编辑器自动美化
    if (/\/(versions|script_versions)\/new/.test(window.location.href)) {
        if (autocheck) {
            var textarea = document.getElementById('script_version_code')
            waitForElems({
                sel: '#enable-source-editor-code',
                stop: true,
                onmatch(checkbox) {
                    // 检查当前页面的 URL 是否包含 "scripts" 和 "versions"
                    // https://update.greasyfork.org/scripts/22223/
                    checkbox.click()
                    textarea.style.height = '800px'
                    logMessage('autocheck', '自动点击完成', true)
                    // @match               *://greasyfork.org/*/*versions/new
                }
            }
            )
        }
    }
    // 注册油猴菜单命令
    GM_registerMenuCommand(translate('setDisplay'), () => {
        // 创建一个设置窗口
        // createsetui();
        showSettingsModal()
    })
    function handleCheckboxChange() {
        if (this.checked) {
            let input = prompt(translate('inputDaysToCleanUp'), "30")
            let number = parseInt(input)
            if (isNaN(number)) {
                number = 30
            }
            GM_setValue('clearhomepage', true)
            GM_setValue('clearhomepagedays', number)
        } else {
            GM_setValue('clearhomepage', false)
        }
    }
    //功能-列表增加评分
    /**
     * 创建一个自定义的链接元素
     * @param {string} url - 链接的目标地址
     * @param {string} text - 链接的文本内容
     * @param {string} className - 链接的 CSS 类名
     * @param {string} backgroundColor - 链接的背景颜色
     * @param {string} textColor - 链接的文字颜色
     * @param {string} [fontSize='12px'] - 链接的字体大小（可选，默认为 '12px'）
     * @returns {HTMLAnchorElement} - 创建的链接元素
     */
    function createCodeLink({
        url,
        text = 'code',
        className = 'code-link',
        backgroundColor = '#0084ff',
        textColor = 'white',
        fontSize = '12px'
    }) {
        let newLink = document.createElement('a')
        newLink.textContent = text // 链接文本内容
        newLink.href = url // 将链接地址设置为传入的 URL
        newLink.className = className // 添加一个类来标识这个链接
        newLink.style.marginLeft = '10px' // 添加一些左边距以增加间距
        newLink.style.paddingLeft = '2px'
        newLink.style.paddingRight = '2px'
        newLink.style.fontSize = fontSize // 设置链接的字体大小
        newLink.style.background = backgroundColor // 设置背景颜色
        newLink.style.color = textColor // 设置文字颜色
        newLink.style.textDecoration = 'none' // 移除链接下划线
        return newLink // 返回创建的链接元素
    }
    // 函数：在 .script-link 元素上方添加一个新的链接
    function addLinkAboveScriptList(article) {
        let scriptLink = article.querySelector('.script-link')
        // 如果 .script-link 元素存在，获取它的 href 属性
        if (scriptLink) {
            // 检查链接是否已经存在，以避免重复添加
            if (!scriptLink.nextElementSibling || !scriptLink.nextElementSibling.classList.contains('code-link')) {
                let scriptLinkUrl = scriptLink.getAttribute('href')  // 获取原始链接地址
                let newCodeLinkUrl = scriptLinkUrl + '/code'  // 在原始地址后添加 /code
                // 创建新的链接元素
                let newLink = createCodeLink({
                    url: newCodeLinkUrl,
                    text: 'code',
                    className: 'code-link',
                    backgroundColor: '#0084ff',
                    textColor: 'white',
                    fontSize: '12px'
                })
                // 将新链接插入到现有 .script-link 元素后面
                scriptLink.insertAdjacentElement('afterend', newLink)
            }
        }
    }
    // 请求队列的最大并发数
    // 请求队列的最大并发数
    const MAX_CONCURRENT_REQUESTS = 5
    let activeRequests = 0
    const requestQueue = []
    async function checkVersionInfo(metaUrl, button, netversion) {
        // 创建一个新的 Promise 以将当前请求添加到请求队列中
        await new Promise(resolve => {
            const request = async () => {
                // 在请求开始之前增加活跃请求数
                activeRequests++
                try {
                    const metaText = await fetchTextFromURL(metaUrl, true)
                    const name = metaText.name
                    const namespace = metaText.namespace
                    if (name && namespace) {
                        // 使用 checkVersion 库的方法 1大于。-1小于 0 等于
                        try {
                            const installedVersion = await checkVersion.getInstalledVersion(name, namespace)
                            if (installedVersion) {
                                const comparisonResult = checkVersion.compareVersionPart(installedVersion, netversion)
                                let status
                                switch (comparisonResult) {
                                    case 1:
                                        status = `降级到：${netversion}`
                                        break
                                    case 0:
                                        status = `重新安装：${netversion}`
                                        break
                                    case -1:
                                        status = `升级到：${netversion}`
                                        break
                                    default:
                                        status = `Install：${installedVersion}`
                                }
                                button.textContent = status
                            } else {
                                //  button.textContent = `${name} is not installed.`
                            }
                        } catch (error) {
                            logMessage('checkVersionInfo', '检查失败:', false, error)
                            //  button.textContent = 'Error checking version.'
                        }
                    } else {
                        //   button.textContent = 'Failed to extract name or namespace from meta.js'
                        logMessage('checkVersionInfo', '读取空间失败', false, error)
                    }
                } catch (error) {
                    logMessage('checkVersionInfo', '获取json失败:', false, error)
                    //  button.textContent = 'Error fetching meta.js.'
                } finally {
                    // 请求完成后减少活跃请求数
                    activeRequests--
                    // 从队列中取出下一个请求并执行
                    if (requestQueue.length > 0) {
                        requestQueue.shift()()
                    }
                }
            }
            // 如果活跃请求数已达到最大限制，则将请求加入队列中
            if (activeRequests >= MAX_CONCURRENT_REQUESTS) {
                requestQueue.push(request)
            } else {
                request()
            }
            resolve()
        })
    }
    /**
     * 在 article 元素的底部添加安装和下载链接
     * @param {HTMLElement} article - 要在其底部添加链接的 article 元素
     */
    function addInstallAndDownloadLinks(article) {
        let liElement = article.closest('li[data-script-id]')  // 获取最近的父级 <li> 元素
        if (liElement) {
            // 从 <li> 元素中提取 data-code-url
            const codeUrl = article.getAttribute('data-code-url')
            const scripver = article.getAttribute('data-script-version')
            const scriptid = article.getAttribute('data-script-id')
            const scriptlang = article.getAttribute('data-script-language')
            // 检查 "Install" 链接是否已经存在
            const existingInstallLink = article.querySelector('.install-link')
            if (!existingInstallLink) {
                // 创建安装链接
                let installLink = document.createElement('a')
                installLink.href = codeUrl
                installLink.textContent = 'Install'
                installLink.className = 'install-link'
                installLink.innerHTML = `
    <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
        <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4 11h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/>
    </svg>Install ${scripver}
`
                installLink.addEventListener('click', function (event) {
                    event.preventDefault()  // 阻止默认的链接跳转行为
                    event.stopPropagation()  // 阻止事件进一步传播
                    navigateTo(codeUrl, false)
                })
                // 将安装链接添加到 article 元素的底部
                article.appendChild(installLink)
                if (scriptlang === "js") {
                    //  checkVersionInfo(`https://greasyfork.org/scripts/${scriptid}.json`, installLink, scripver)
                } else {
                    logMessage('addInstallAndDownloadLinks', `${scriptlang}文件暂未添加检测版本`, false)
                }
            }
            // 检查 "Download" 链接是否已经存在
            const existingDownloadLink = article.querySelector('.install-link.down-code-link')
            if (!existingDownloadLink) {
                // 创建下载链接
                const downloadLink = document.createElement('a')
                downloadLink.href = codeUrl // 设置链接的目标地址
                downloadLink.textContent = 'Download' // 设置链接的文本内容
                downloadLink.className = 'install-link down-code-link' // 设置 CSS 类名
                toggleDownloadIcon(downloadLink, false)
                downloadLink.addEventListener('click', function (event) {
                    event.preventDefault()  // 阻止默认的链接跳转行为
                    event.stopPropagation()  // 阻止事件进一步传播
                    toggleDownloadIcon(downloadLink, true)
                    const filename = getFilenameFromUrl(codeUrl)
                    downloadFile(codeUrl, filename, function (error) {
                        // 下载完成后执行的操作
                        if (error) {
                            Toast(error.message, 3000, '#ff6347', '#ffffff', 'top')
                        } else {
                            toggleDownloadIcon(downloadLink, false)
                        }
                    }, 2)
                })
                // 将下载链接添加到 article 元素的底部
                article.appendChild(downloadLink)
            }
        }
    }
    // 函数：在 .script-link 元素添加本地收藏
    function addlocalfav(article) {
        if (window.location.href.includes('Bookmarks')) {
            return
        }
        const scriptLink = article.querySelector('.script-link')
        const description = article.querySelector('.script-description')
        if (scriptLink) {
            handleScriptPage(description.textContent.trim(), scriptLink.textContent.trim(), scriptLink, scriptLink.getAttribute('href'), 'a')
        }
    }
    // 函数：向指定元素中添加一个显示评分的 span 元素
    /**
     * 从 article 元素中提取评分信息，并根据参数决定如何显示评分信息
     * @param {HTMLElement} article - 包含评分信息的 article 元素
     * @param {boolean} [insertAtScriptLink=true] - 如果为 true，将评分信息添加到 .script-list-ratings 内部；如果为 false，将评分信息添加到 .script-link 后面
     */
    function addRatingSpan(article, insertAtScriptLink = true) {
        // 查找包含评分信息的元素
        let ratingsItems = article.querySelectorAll('div > dl > dd.script-list-ratings')
        ratingsItems.forEach(item => {
            let ratingScore = item.getAttribute('data-rating-score')  // 从数据属性中获取评分
            if (insertAtScriptLink) {
                // 如果 insertAtScriptLink 为 true，添加评分信息到 .script-link 后面
                let scriptLink = article.querySelector('.script-link')
                if (scriptLink) {
                    // 检查评分信息是否已经存在，以避免重复添加
                    if (
                        !scriptLink.nextElementSibling ||
                        !scriptLink.nextElementSibling.matches('.good-rating-count[title="rating-score"]') &&
                        (!scriptLink.nextElementSibling.nextElementSibling ||
                            !scriptLink.nextElementSibling.nextElementSibling.matches('.good-rating-count[title="rating-score"]'))
                    ) {
                        let newSpan = document.createElement('span')
                        newSpan.className = 'good-rating-count'
                        newSpan.title = 'rating-score'
                        newSpan.textContent = 'Score: ' + ratingScore  // 将文本内容设置为评分
                        newSpan.style.marginLeft = '10px'  // 添加一些左边距以增加间距
                        newSpan.style.fontSize = '12px'  // 设置字体大小
                        scriptLink.insertAdjacentElement('afterend', newSpan)  // 将新 span 元素添加到 .script-link 后面
                    }
                }
            } else {
                // 如果 insertAtScriptLink 为 false，添加评分信息到 .script-list-ratings 内部
                if (!item.querySelector('.good-rating-count[title="rating-score"]')) {
                    let newSpan = document.createElement('span')
                    newSpan.className = 'good-rating-count'
                    newSpan.title = 'rating-score'
                    newSpan.textContent = 'Score: ' + ratingScore  // 将文本内容设置为评分
                    newSpan.style.marginLeft = '10px'  // 添加一些左边距以增加间距
                    newSpan.style.fontSize = '12px'  // 设置字体大小
                    item.insertAdjacentElement('beforeend', newSpan)  // 将新 span 元素添加为现有元素的子元素
                }
            }
        })
    }
    // 函数：处理脚本列表中的每个项
    function processScriptItem(article) {
        if (userlocalfav) {
            addlocalfav(article)
        }
        if (showRating) {
            addRatingSpan(article, true)
        }
        if (showSourceCode) {
            addLinkAboveScriptList(article)
        }
        if (showinstallbutton) {
            addInstallAndDownloadLinks(article)
        }
    }
    function initializeScriptList() {
        const articles = document.querySelectorAll('#browse-script-list > li, #user-script-list > li')
        if (articles.length > 0) {
            articles.forEach(article => {
                processScriptItem(article)
            })
        } else {
            return // 或者返回某个特定值，例如 return false;
        }
    }
    if (document.querySelectorAll('#browse-script-list > li, #user-script-list > li')) {
        // 初次调用处理现有脚本列表项
        initializeScriptList()
        // 创建 MutationObserver 以检测 DOM 中的变化
        const ScriptListobserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && (node.matches('#browse-script-list > li') || node.matches('#user-script-list > li'))) {
                            logMessage('脚本列表', '元素', true, node)
                            processScriptItem(node)
                        }
                    })
                }
            })
        })
        // 观察整个文档主体中的变化
        ScriptListobserver.observe(document.body, { childList: true, subtree: true })
    }
    //  功能- 修复导航栏https://update.greasyfork.org/scripts/473269/GreasyFork%20Header%20Style%20Fix.user.js
    if (HeaderStyleFix) {
        let css = `
    /* Insert code here... */
    html {
        --main-header-scale: 1.0;
    }
    #site-nav {
        font-size: min(16px, calc(20px * var(--main-header-scale)));
    }
    #site-name {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin: 0;
    }
    #site-name-text h1 {
        font-size: calc(38pt * var(--main-header-scale));
        white-space: nowrap;
        margin: 0;
    }
    #site-name-text {
        margin: 0;
    }
    #main-header > .width-constraint:only-child {
        display: flex;
        place-items: center;
        padding-top: calc(8px * var(--main-header-scale));
        padding-bottom: calc(8px * var(--main-header-scale));
        padding-right: calc(24px * var(--main-header-scale));
        padding-left: calc(24px * var(--main-header-scale));
        flex-direction: row;
        margin: 0;
    }
    #site-nav > nav,
    #nav-user-info {
        position: static;
        margin: 0;
    }
    #site-nav {
        display: flex;
        row-gap: 4px;
        flex-direction: column;
        margin: 0;
    }
    #main-header > .width-constraint:only-child > #site-nav:last-child {
        flex-grow: 1;
        margin: 0;
    }
    html #site-name img {
        width: calc(58px * var(--main-header-scale));
        height: calc(58px * var(--main-header-scale));
        margin: 0;
    }
    @media screen and (max-width: 768px) {
        html {
            --main-header-scale: 0.74;
        }
    }
    @media screen and (max-width: 672px) {
        html {
            --main-header-scale: 0.62;
        }
    }
`
        if (typeof GM_addStyle !== "undefined") {
            GM_addStyle(css)
        } else {
            let styleNode = document.createElement("style")
            styleNode.appendChild(document.createTextNode(css));
            (document.querySelector("head") || document.documentElement).appendChild(styleNode)
        }
    }
    //功能- 显示绝对时间 https://update.greasyfork.org/scripts/470348/Absolute%20Time%20on%20GreasyFork.user.js
    if (AbsoluteTime) {
        let langUsed = null
        const Promise = (async () => { })().constructor
        const PromiseExternal = ((resolve_, reject_) => {
            const h = (resolve, reject) => {
                resolve_ = resolve
                reject_ = reject
            }
            return class PromiseExternal extends Promise {
                constructor(cb = h) {
                    super(cb)
                    if (cb === h) {
                        /** @type {(value: any) => void} */
                        this.resolve = resolve_
                        /** @type {(reason?: any) => void} */
                        this.reject = reject_
                    }
                }
            }
        })()
        function pad(s, d) {
            s = `000000${s}`
            return s.substring(s.length - d)
        }
        /**
         * @callback formatDateTimeFn
         * @param {DateTime} dt
         * @returns {string} formated text for date & time
         */
        /** @type {formatDateTimeFn} */
        const formatUFn = (dt) => {
            return `${dt.getFullYear()}.${pad(dt.getMonth() + 1, 2)}.${pad(dt.getDate(), 2)} ${pad(dt.getHours(), 2)}:${pad(dt.getMinutes(), 2)}:${pad(dt.getSeconds(), 2)}`
        }
        /** @type {formatDateTimeFn} */
        const formatFrFn = (dt) => {
            return `${pad(dt.getDate(), 2)}.${pad(dt.getMonth() + 1, 2)}.${dt.getFullYear()} ${pad(dt.getHours(), 2)}:${pad(dt.getMinutes(), 2)}:${pad(dt.getSeconds(), 2)}`
        }
        let formatFn = formatUFn
        let rafPromise = null
        const getRafPromise = () => rafPromise || (rafPromise = new Promise(resolve => {
            requestAnimationFrame(hRes => {
                rafPromise = null
                resolve(hRes)
            })
        }))
        let delay100 = null
        delay100 = new PromiseExternal()
        setInterval(() => {
            delay100.resolve()
            delay100 = new PromiseExternal()
        }, 100)
        let psk = 0
        const cssText = `
    @keyframes relativeTimeNotAbsoluteAppended {
        from{
            background-position-x: 1px;
        }
        to{
            background-position-x: 2px;
        }
    }
    relative-time[datetime]:not(.absolute) {
        animation: relativeTimeNotAbsoluteAppended 1ms linear 0s 1 normal forwards;
    }
  `
        async function fixRelativeTime(s) {
            psk = Date.now()
            s.classList.add("absolute")
            s.format = 'datetime'
            await Promise.resolve().then()
            await getRafPromise().then()
            if (langUsed === null) {
                langUsed = document.documentElement.lang
                if (typeof langUsed === 'string' && (langUsed === 'fr' || langUsed.startsWith('fr-'))) {
                    formatFn = formatFrFn
                }
            }
            let d = s.getAttribute('datetime')
            let dt = d ? new Date(d) : null
            if (dt && s.shadowRoot && s.shadowRoot.firstChild) {
                psk = Date.now()
                while (Date.now() - psk < 800) {
                    s.shadowRoot.firstChild.textContent = formatFn(dt)
                    await delay100.then()
                }
            }
        }
        document.addEventListener('animationstart', (evt) => {
            const animationName = evt.animationName
            if (!animationName) return
            if (animationName === 'relativeTimeNotAbsoluteAppended') {
                fixRelativeTime(evt.target)
            }
        }, {
            capture: true,
            passive: true
        })
        document.head.appendChild(document.createElement('style')).textContent = cssText
    }
    //功能- 给库和脚本详情页增加下载按钮  https://greasyfork.org/users/980489
    if (addbutton && document.querySelector('div#script-feedback-suggestion')) {
        const installArea = document.querySelector('div#install-area')
        const installBtns = installArea?.querySelectorAll(':scope > a.install-link')
        const installHelpLinks = document.querySelectorAll('a.install-help-link')
        const suggestion = document.querySelector('div#script-feedback-suggestion')
        const libraryRequire = document.querySelector('div#script-content > p > code')
        const libraryVersion = document.querySelector(
            '#script-stats > dd.script-show-version > span'
        )
        if (
            installArea &&
            (installBtns.length > 0) &&
            (installBtns.length === installHelpLinks.length)
        ) {
            for (let i = 0; i < installBtns.length; i++) {
                mountScriptDownloadButton(installBtns[i], installArea, installHelpLinks[i])
            }
        }
        // or maybe a library
        else if (suggestion && libraryRequire) {
            mountLibraryDownloadButton(suggestion, libraryRequire, libraryVersion)
        }
        function mountLibraryDownloadButton(suggestion, libraryRequire, libraryVersion) {
            let [
                libraryHref,
                libraryName,
            ] = libraryRequire.innerText.match(
                /\/\/ @require (https:\/\/.+\/scripts\/\d+\/\d+\/(.*)\.js)/
            ).slice(1)
            // this probably is completely useless but whatever
            if (!libraryHref) throw new Error('library href is not found')
            libraryName = decodeURIComponent(libraryName)
            if (libraryVersion?.innerText) libraryName += ` ${libraryVersion.innerText}`
            const b = document.createElement('a')
            b.href = '#'
            b.draggable = false
            b.innerText = translate('download')
            b.className = 'GF-DSB__library-download-button'
            suggestion.appendChild(b)
            b.addEventListener('click', function (event) {
                event.preventDefault()
                const filename = getFilenameFromUrl(libraryHref)
                b.textContent = translate('downloading') // 修改链接文本为 "下载中..."
                b.style.pointerEvents = 'none' // 禁用点击事件，防止重复点击
                b.blur() // 让链接失去焦点
                downloadFile(libraryHref, filename, function (error) {
                    // 下载完成后执行的操作
                    if (error) {
                        b.textContent = translate('download') // 恢复链接文本为 "下载"
                        b.style.pointerEvents = 'auto' // 恢复点击事件
                        // 如果下载失败，处理错误情况
                        Toast(error.message, 3000, '#ff6347', '#ffffff', 'top')
                        // 可以进行其他错误处理，例如显示错误消息给用户
                    } else {
                        // 下载成功后执行的操作
                        b.textContent = translate('download') // 恢复链接文本为 "下载"
                        b.style.pointerEvents = 'auto' // 恢复点击事件
                        b.focus() // 让链接重新获取焦点，给用户一种下载完成的感觉
                    }
                }, 2)
            })
        }
        function mountScriptDownloadButton(
            installBtn,
            installArea,
            installHelpLink,
        ) {
            if (!installBtn.href) throw new Error('script href is not found')
            const linkText = installBtn.textContent.trim()
            installBtn.innerHTML = `
         <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
            <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4 11h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/>
        </svg>
         ${linkText}`
            const downloadButton = document.createElement('a')
            downloadButton.href = "#"
            downloadButton.className = "install-link down-code-link"
            toggleDownloadIcon(downloadButton, false)
            downloadButton.style.marginLeft = '"0.5rem'
            // suggestion.appendChild(downloadButton);
            installArea.insertBefore(downloadButton, installHelpLink)
            installHelpLink.remove()
            downloadButton.addEventListener('click', function (event) {
                event.preventDefault()
                event.stopPropagation()  // 阻止事件冒泡
                toggleDownloadIcon(downloadButton, true)
                const filename = getFilenameFromUrl(installBtn.href)
                downloadFile(installBtn.href, filename, function (error) {
                    // 下载完成后执行的操作
                    if (error) {
                        Toast(error.message, 3000, '#ff6347', '#ffffff', 'top')
                    } else {
                        toggleDownloadIcon(downloadButton, false)
                    }
                }, 2)
            })
        }
    }
    //插入图标选项
    function addIcon(h2Element) {
        const scripts = JSON.parse(GM_getValue('scriptsIcon', '{}'))  // 将存储的 JSON 字符串解析为对象
        var scriptID = location.href.match(/scripts\/(\d+)/)[1]
        var iconsrc = scripts[scriptID]
        // var iconsrc = GM_getValue(scriptID);
        if (iconsrc && iconsrc.match(/^data:image|https:/)) {
            __addIcon(iconsrc, h2Element)
        } else {
            GM_xmlhttpRequest({
                method: 'GET',
                url: location.pathname.replace(/(scripts\/\d+[^/]+)(\/.*)?$/, '$1/code/1.user.js'),
                timeout: 10000,
                onload: function (r) {
                    var url = (r.responseText.match(/\n\s*\/\/\s+@icon(?:url)?\s+((?:https?:\/\/|data:image\/).+)|$/i)[1] || '').trim()
                    if (!url)
                        return
                    if (!/^http:/.test(url))
                        return __addIcon(url, h2Element)
                    // download http icon and store it in script db if it's small
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: url,
                        timeout: 10000,
                        headers: {
                            'Accept': 'image/png,image/*;q=0.8,*/*;q=0.5'
                        },
                        responseType: 'arraybuffer',
                        onload: function (ri) {
                            var /**@type ArrayBuffer*/ rb = ri.response,
                                rbl = rb.byteLength
                            if (rbl > 100000) {
                                logMessage('addIcon', '图标超过100k', false)
                                return
                            }
                            var mime = ri.responseHeaders.match(/(^|\n\s*)Content-Type:\s*(image\/[^;,\s]+)|$/i)[2]
                            var rb8 = new Uint8Array(rb)
                            var rbs = Array(rbl)
                            for (var i = 0; i < rbl; i++)
                                rbs[i] = String.fromCharCode(rb8[i])
                            var dataUrl = 'data:image/' + (mime || 'png') + ';base64,' + btoa(rbs.join(''))
                            __addIcon(dataUrl, h2Element)
                        }
                    })
                }
            })
        }
        function __addIcon(url, h2Element) {
            if (!h2Element) {
                logMessage('addIcon', '缺少附加图标的元素', false)
                return
            }
            h2Element.insertAdjacentHTML('afterbegin', '<div style="\
        position: absolute;\
        width: 80px;\
        margin-left: calc(-80px - 1ex);\
        display: inline-block;\
        text-align: right"></div>')
            var img = h2Element.appendChild(document.createElement('img'))
            img.style.maxWidth = img.style.maxHeight = '64px'
            img.style.width = img.style.height = 'auto'
            img.src = url
            const scripts = JSON.parse(GM_getValue('scriptsIcon', '{}'))
            scripts[scriptID] = url
            GM_setValue('scriptsIcon', JSON.stringify(scripts))
            // GM_setValue(scriptID, url);
        }
    }
    //功能-美化控件
    const beautifyMarkdownCSS = 'code {\r\n font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r\n font-size: 0.85em;\r\n  color: #000;\r\n  background-color: #f0f0f0;\r\n  border-radius: 3px;\r\n padding: 0.2em 0;\r\n}\r\ntable {\r\n text-indent: initial;\r\n}\r\ntable {\r\n margin: 10px 0 15px 0;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  display: block;\r\n width: 100%;\r\n  overflow: auto;\r\n word-break: normal;\r\n word-break: keep-all;\r\n}\r\ncode,\r\npre {\r\n  color: #333;\r\n  background: 0 0;\r\n  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  text-align: left;\r\n white-space: pre;\r\n word-spacing: normal;\r\n word-break: normal;\r\n word-wrap: normal;\r\n  line-height: 1.4;\r\n -moz-tab-size: 8;\r\n -o-tab-size: 8;\r\n tab-size: 8;\r\n  -webkit-hyphens: none;\r\n  -moz-hyphens: none;\r\n -ms-hyphens: none;\r\n  hyphens: none;\r\n}\r\npre {\r\n  padding: 0.8em;\r\n overflow: auto;\r\n border-radius: 3px;\r\n background: #f5f5f5;\r\n}\r\n:not(pre) > code {\r\n padding: 0.1em;\r\n border-radius: 0.3em;\r\n white-space: normal;\r\n  background: #f5f5f5;\r\n}\r\nhtml body {\r\n  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,\r\n    sans-serif;\r\n font-size: 16px;\r\n  line-height: 1.6;\r\n color: #333;\r\n  background-color: #fff;\r\n overflow: initial;\r\n  box-sizing: border-box;\r\n word-wrap: break-word;\r\n}\r\nhtml body > :first-child {\r\n margin-top: 0;\r\n}\r\nhtml body h1,\r\nhtml body h2,\r\nhtml body h3,\r\nhtml body h4,\r\nhtml body h5,\r\nhtml body h6 {\r\n  line-height: 1.2;\r\n margin-top: 1em;\r\n  margin-bottom: 16px;\r\n  color: #000;\r\n}\r\nhtml body h1 {\r\n font-size: 2.25em;\r\n  font-weight: 300;\r\n padding-bottom: 0.3em;\r\n}\r\nhtml body h2 {\r\n font-size: 1.75em;\r\n  font-weight: 400;\r\n padding-bottom: 0.3em;\r\n}\r\nhtml body h3 {\r\n font-size: 1.5em;\r\n font-weight: 500;\r\n}\r\nhtml body h4 {\r\n  font-size: 1.25em;\r\n  font-weight: 600;\r\n}\r\nhtml body h5 {\r\n  font-size: 1.1em;\r\n font-weight: 600;\r\n}\r\nhtml body h6 {\r\n  font-size: 1em;\r\n font-weight: 600;\r\n}\r\nhtml body h1,\r\nhtml body h2,\r\nhtml body h3,\r\nhtml body h4,\r\nhtml body h5 {\r\n  font-weight: 600;\r\n}\r\nhtml body h5 {\r\n  font-size: 1em;\r\n}\r\nhtml body h6 {\r\n  color: #5c5c5c;\r\n}\r\nhtml body strong {\r\n  color: #000;\r\n}\r\nhtml body del {\r\n  color: #5c5c5c;\r\n}\r\nhtml body a:not([href]) {\r\n color: inherit;\r\n}\r\nhtml body a {\r\n text-decoration: underline;\r\n text-underline-offset: 0.2rem;\r\n}\r\nhtml body a:hover {\r\n  color: #00a3f5;\r\n}\r\nhtml body img {\r\n max-width: 100%;\r\n}\r\nhtml body > p {\r\n  margin-top: 0;\r\n  margin-bottom: 16px;\r\n  word-wrap: break-word;\r\n}\r\nhtml body > ol,\r\nhtml body > ul {\r\n  margin-bottom: 16px;\r\n}\r\nhtml body ol,\r\nhtml body ul {\r\n  padding-left: 2em;\r\n}\r\nhtml body ol.no-list,\r\nhtml body ul.no-list {\r\n  padding: 0;\r\n list-style-type: none;\r\n}\r\nhtml body ol ol,\r\nhtml body ol ul,\r\nhtml body ul ol,\r\nhtml body ul ul {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\nhtml body li {\r\n  margin-bottom: 0;\r\n}\r\nhtml body li.task-list-item {\r\n list-style: none;\r\n}\r\nhtml body li > p {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\nhtml body .task-list-item-checkbox {\r\n  margin: 0 0.2em 0.25em -1.8em;\r\n  vertical-align: middle;\r\n}\r\nhtml body .task-list-item-checkbox:hover {\r\n  cursor: pointer;\r\n}\r\nhtml body blockquote {\r\n margin: 16px 0;\r\n font-size: inherit;\r\n padding: 0 15px;\r\n  color: #5c5c5c;\r\n background-color: #f0f0f0;\r\n  border-left: 4px solid #d6d6d6 !important;\r\n}\r\nhtml body blockquote > :first-child {\r\n  margin-top: 0;\r\n}\r\nhtml body blockquote > :last-child {\r\n margin-bottom: 0;\r\n}\r\nhtml body hr {\r\n  height: 4px;\r\n  margin: 32px 0;\r\n background-color: #d6d6d6;\r\n  border: 0 none;\r\n}\r\nhtml body table {\r\n margin: 10px 0 15px 0;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  display: block;\r\n width: 100%;\r\n  overflow: auto;\r\n word-break: normal;\r\n word-break: keep-all;\r\n}\r\nhtml body table th {\r\n  font-weight: 700;\r\n color: #000;\r\n}\r\nhtml body table td,\r\nhtml body table th {\r\n  border: 1px solid #d6d6d6;\r\n  padding: 6px 13px;\r\n}\r\nhtml body dl {\r\n padding: 0;\r\n}\r\nhtml body dl dt {\r\n padding: 0;\r\n margin-top: 16px;\r\n font-size: 1em;\r\n font-style: italic;\r\n font-weight: 700;\r\n}\r\nhtml body dl dd {\r\n padding: 0 16px;\r\n  margin-bottom: 16px;\r\n}\r\nhtml body code {\r\n font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r\n font-size: 0.85em;\r\n  color: #000;\r\n  background-color: #f0f0f0;\r\n  border-radius: 3px;\r\n padding: 0.2em 0;\r\n}\r\nhtml body code::after,\r\nhtml body code::before {\r\n  letter-spacing: -0.2em;\r\n content: "\\00a0";\r\n}\r\nhtml body pre > code {\r\n padding: 0;\r\n margin: 0;\r\n  word-break: normal;\r\n white-space: pre;\r\n background: 0 0;\r\n  border: 0;\r\n}\r\nhtml body .highlight {\r\n margin-bottom: 16px;\r\n}\r\nhtml body .highlight pre,\r\nhtml body pre {\r\n padding: 1em;\r\n overflow: auto;\r\n line-height: 1.45;\r\n  border: #d6d6d6;\r\n  border-radius: 3px;\r\n}\r\nhtml body .highlight pre {\r\n  margin-bottom: 0;\r\n word-break: normal;\r\n}\r\nhtml body pre code,\r\nhtml body pre tt {\r\n display: inline;\r\n  max-width: initial;\r\n padding: 0;\r\n margin: 0;\r\n  overflow: initial;\r\n  line-height: inherit;\r\n word-wrap: normal;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\nhtml body pre code:after,\r\nhtml body pre code:before,\r\nhtml body pre tt:after,\r\nhtml body pre tt:before {\r\n  content: normal;\r\n}\r\nhtml body blockquote,\r\nhtml body dl,\r\nhtml body ol,\r\nhtml body p,\r\nhtml body pre,\r\nhtml body ul {\r\n  margin-top: 0;\r\n  margin-bottom: 16px;\r\n}\r\nhtml body kbd {\r\n  color: #000;\r\n  border: 1px solid #d6d6d6;\r\n  border-bottom: 2px solid #c7c7c7;\r\n padding: 2px 4px;\r\n background-color: #f0f0f0;\r\n  border-radius: 3px;\r\n}\r\n@media print {\r\n  html body {\r\n   background-color: #fff;\r\n }\r\n html body h1,\r\n html body h2,\r\n html body h3,\r\n html body h4,\r\n html body h5,\r\n html body h6 {\r\n    color: #000;\r\n    page-break-after: avoid;\r\n  }\r\n html body blockquote {\r\n    color: #5c5c5c;\r\n }\r\n html body pre {\r\n   page-break-inside: avoid;\r\n }\r\n html body table {\r\n   display: table;\r\n }\r\n html body img {\r\n   display: block;\r\n   max-width: 100%;\r\n    max-height: 100%;\r\n }\r\n html body code,\r\n html body pre {\r\n   word-wrap: break-word;\r\n    white-space: pre;\r\n }\r\n}\r\n.scrollbar-style::-webkit-scrollbar {\r\n width: 8px;\r\n}\r\n.scrollbar-style::-webkit-scrollbar-track {\r\n border-radius: 10px;\r\n  background-color: transparent;\r\n}\r\n.scrollbar-style::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n background-color: rgba(150, 150, 150, 0.66);\r\n  border: 4px solid rgba(150, 150, 150, 0.66);\r\n  background-clip: content-box;\r\n}\r\n'
    const beautifyButtonCSS = '/* 美化按钮 */\r\ninput[type="submit"],\r\nbutton {\r\n  display: inline-flex;\r\n justify-content: center;\r\n  align-items: center;\r\n  line-height: 1;\r\n height: 32px;\r\n white-space: nowrap;\r\n  cursor: pointer;\r\n  /* color: #606266; */\r\n text-align: center;\r\n box-sizing: border-box;\r\n outline: none;\r\n  transition: 0.1s;\r\n font-weight: 500;\r\n user-select: none;\r\n  vertical-align: middle;\r\n -webkit-appearance: none;\r\n background-color: #ffffff;\r\n  border: 1px solid #dcdfe6;\r\n  border-color: #dcdfe6;\r\n  padding: 8px 15px;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type="submit"]:hover,\r\ninput[type="submit"]:focus,\r\nbutton:hover,\r\nbutton:focus {\r\n color: #409eff;\r\n border-color: #c6e2ff;\r\n  background-color: #ecf5ff;\r\n  outline: none;\r\n}\r\n\r\ninput[type="url"] {\r\n  position: relative;\r\n font-size: 14px;\r\n  display: inline-flex;\r\n line-height: 32px;\r\n  box-sizing: border-box;\r\n vertical-align: middle;\r\n -webkit-appearance: none;\r\n /* color: #606266; */\r\n padding: 0;\r\n outline: none;\r\n  border: none;\r\n background: none;\r\n flex-grow: 1;\r\n align-items: center;\r\n  justify-content: center;\r\n  padding: 1px 11px;\r\n  background-color: #ffffff;\r\n  background-image: none;\r\n border-radius: 4px;\r\n cursor: text;\r\n transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n transform: translateZ(0);\r\n box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n\r\n  width: 100%;\r\n  width: -moz-available;\r\n  width: -webkit-fill-available;\r\n  width: fill-available;\r\n}\r\n\r\ninput[type="url"]::placeholder {\r\n color: #a8abb2;\r\n}\r\n\r\ninput[type="url"]:hover {\r\n box-shadow: 0 0 0 1px #c0c4cc inset;\r\n}\r\n\r\ninput[type="url"]:focus {\r\n  box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n'
    const beautifyRadioCSS = 'label.radio-label {\r\n font-weight: 500;\r\n position: relative;\r\n cursor: pointer;\r\n  display: inline-flex;\r\n align-items: center;\r\n  white-space: normal;\r\n  outline: none;\r\n  font-size: 14px;\r\n  user-select: none;\r\n  margin-right: 32px;\r\n height: 32px;\r\n padding: 4px;\r\n border-radius: 4px;\r\n box-sizing: border-box;\r\n}\r\nlabel:has(input[type="radio"]:checked),\r\nlabel:has(input[type="radio"]:checked) a {\r\n color: #409eff;\r\n}\r\nlabel.radio-label input[type="radio"] {\r\n margin-right: 4px;\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\nlabel.radio-label input[type="radio"]:checked {\r\n -webkit-appearance: none;\r\n -moz-appearance: none;\r\n  appearance: none;\r\n border-radius: 50%;\r\n width: 14px;\r\n  height: 14px;\r\n outline: none;\r\n  border: 4px solid #409eff;\r\n  cursor: pointer;\r\n}\r\nlabel.radio-label input[type="radio"]:checked + span {\r\n color: #409eff;\r\n}\r\n'
    const beautifyTextAreaCSS = "textarea {\r\n position: relative;\r\n display: inline-block;\r\n  width: 100%;\r\n  vertical-align: bottom;\r\n font-size: 14px;\r\n  position: relative;\r\n display: block;\r\n resize: vertical;\r\n padding: 5px 11px;\r\n  line-height: 1.5;\r\n box-sizing: border-box;\r\n width: 100%;\r\n  font-size: inherit;\r\n font-family: inherit;\r\n /* color: #606266; */\r\n background-color: #ffffff;\r\n  background-image: none;\r\n -webkit-appearance: none;\r\n box-shadow: 0 0 0 1px #dcdfe6 inset;\r\n  border-radius: 4px;\r\n transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n border: none;\r\n}\r\ntextarea:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 1px #409eff inset;\r\n}\r\n"
    const beautifyVersionsPageCSS = 'ul.history_versions,\r\nul.history_versions li {\r\n width: 100%;\r\n}\r\nul.history_versions li {\r\n display: flex;\r\n  flex-direction: column;\r\n margin: 25px 0px;\r\n}\r\n.diff-controls input[type="radio"]:nth-child(2) {\r\n margin-left: 5px;\r\n}\r\n.flex-align-item-center {\r\n display: flex;\r\n  align-items: center;\r\n}\r\n.script-tag {\r\n  margin-bottom: 8px;\r\n}\r\n.script-tag-version a {\r\n color: #656d76;\r\n fill: #656d76;\r\n  text-decoration: none;\r\n  width: fit-content;\r\n width: -moz-fit-content;\r\n}\r\n.script-tag-version a:hover svg {\r\n  color: #00a3f5;\r\n fill: #00a3f5;\r\n}\r\n.script-tag-version a > span {\r\n margin-left: 0.25rem;\r\n}\r\n.script-note-box-body {\r\n border-radius: 0.375rem;\r\n  border-style: solid;\r\n  border-width: max(1px, 0.0625rem);\r\n  border-color: #d0d7de;\r\n  color: #1f2328;\r\n padding: 16px;\r\n  overflow-wrap: anywhere;\r\n}\r\n.script-note-box-body p {\r\n  margin-bottom: unset;\r\n}\r\n'
    const beautifyUploadImageCSS = '/* 隐藏 添加： */\r\nlabel[for="discussion_comments_attributes_0_attachments"],\r\nlabel[for="comment_attachments"] {\r\n  display: none;\r\n}\r\ninput[type="file"] {\r\n width: 100%;\r\n  font-size: 20px;\r\n  background: #e2e2e2;\r\n  padding: 40px 0px;\r\n  border-radius: 10px;\r\n  text-align-last: center;\r\n}\r\n'
    const compatibleBeautifyCSS = "#main-header {\r\n background-color: #670000 !important;\r\n background-image: linear-gradient(#670000, #990000) !important;\r\n}\r\n#site-nav-vue {\r\n flex-wrap: wrap;\r\n  justify-content: flex-end;\r\n}\r\n.open-sidebar {\r\n  border-width: 1px;\r\n  border-radius: 3px;\r\n margin-right: 0;\r\n}\r\ninput.search-submit {\r\n  transform: translateY(-5%) !important;\r\n  margin-left: 10px;\r\n}\r\n#script-content code {\r\n word-wrap: break-word;\r\n}\r\n.code-container ::selection {\r\n  background-color: #3d4556 !important;\r\n}\r\n"
    if (usercssto) {
        GM_addStyle(`
${beautifyMarkdownCSS}
${beautifyButtonCSS}
${beautifyRadioCSS}
${beautifyTextAreaCSS}
${beautifyVersionsPageCSS}
${beautifyUploadImageCSS}
${compatibleBeautifyCSS}
    `)
        // 添加 CSS 样式到页面
    }
    //功能-美化版本列表边框
    function beautifyChangelog() {
        document.querySelectorAll(".version-changelog").forEach(element => {
            element.style.cssText = `
            border: 2px solid #4CAF50; /* 绿色边框 */
            border-radius: 8px; /* 边框圆角 */
            padding: 10px; /* 内边距 */
            background-color: #f9f9f9; /* 背景颜色 */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
            font-family: Arial, sans-serif; /* 字体样式 */
            color: #333; /* 文字颜色 */
        `
        })
    }
    function replaceVersionLinks() {
        // 选择所有的包含版本号的 <a> 元素
        const versionLinks = document.querySelectorAll('#script-content > form > ul a[rel="nofollow"]')
        versionLinks.forEach((versionLink) => {
            // 提取版本号文本和 href 链接
            const versionNumber = versionLink.textContent.trim()
            const versionUrl = versionLink.getAttribute('href')
            // 创建新的 <div> 元素
            const newDiv = document.createElement('div')
            newDiv.className = 'script-tag-version'
            newDiv.innerHTML = `
            <a href="${versionUrl}" class="flex-align-item-center">
                <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                    <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                </svg>
                <span>${versionNumber}</span>
            </a>
        `
            // 替换原来的 <a> 元素
            versionLink.parentNode.replaceChild(newDiv, versionLink)
        })
    }
    // 调用函数来执行替换操作
    //功能- 下载历史版本
    if (window.location.href.includes('versions') && installforversions) {
        beautifyChangelog()//m美化日志
        replaceVersionLinks()//美化信息边框
        window.addEventListener('load', function () {
            fetchHistoryVersions()
        }, false)
    }
    function fetchHistoryVersions() {
        var jsonLink = document.querySelector('link[href$=".json"]')
        var currentUrl = window.location.href
        // 在 `versions` 后面添加 `.json`
        var jsonUrl = currentUrl.replace(/(\/versions)([^\/]*)$/, '$1.json$2')
        if (jsonUrl) {
            fetch(jsonUrl)
                .then(response => response.json())
                .then(data => {
                    logMessage('fetchHistoryVersions', '历史版本', true, data)
                    createHistoryLinks(data)
                })
                .catch(error => {
                    logMessage('fetchHistoryVersions', 'Error fetching JSON:', true, error)
                })
        } else {
            logMessage('fetchHistoryVersions', 'JSON link element not found', true)
        }
    }
    function createHistoryLinks(jsonData) {
        var ulElement = document.querySelector("#script-content > form > ul")
        if (ulElement) {
            logMessage('createHistoryLinks', 'Parent element found:', true, ulElement)
            // Iterate over each version in JSON data
            jsonData.forEach(function (versionInfo, index) {
                //  console.log("Version info " + (index + 1) + ":", versionInfo);
                // Create link element
                var link = document.createElement('a')
                link.href = versionInfo.code_url // 设置链接地址为当前版本的 url
                link.textContent = translate('install') // 设置链接文本为 "安装"
                var link2 = document.createElement('a')
                link2.href = '#' // 设置链接地址为 "#"，这里假设点击后执行下载操作
                link2.textContent = translate('download') // 设置链接文本为 "下载"
                link2.style.color = 'bule' // 请根据需要设置具体的颜色值b
                link2.setAttribute('download', '') // 设置下载属性，空字符串表示使用默认文件名
                // 创建一个容器元素
                var container = document.createElement('div')
                // 设置容器样式，这里通过CSS来控制间距
                container.style.display = 'flex' // 使用flex布局
                container.style.gap = '10px' // 设置链接元素之间的间距为20px
                // 将链接元素添加到容器中
                container.appendChild(link)
                container.appendChild(link2)
                // Find corresponding .diff-controls element (assuming index corresponds to the order)
                var diffControls = ulElement.querySelectorAll(".diff-controls")
                if (index < diffControls.length) {
                    var diffControl = diffControls[index]
                    diffControl.insertAdjacentElement('beforebegin', container)
                    link2.addEventListener('click', function (event) {
                        event.preventDefault() // 阻止默认的链接跳转行为
                        var name = getFilenameFromUrl(versionInfo.code_url)
                        name = name.replace(/\?version=\d+/g, '')
                        link2.textContent = translate('downloading') // 修改链接文本为 "下载中..."
                        link2.style.pointerEvents = 'none' // 禁用点击事件，防止重复点击
                        link2.blur() // 让链接失去焦点
                        downloadFile(versionInfo.code_url, name, function (error) {
                            // 下载完成后执行的操作
                            if (error) {
                                link2.textContent = translate('download') // 恢复链接文本为 "下载"
                                link2.style.pointerEvents = 'auto' // 恢复点击事件
                                // 如果下载失败，处理错误情况
                                Toast(error.message, 3000, '#ff6347', '#ffffff', 'top')
                                // 可以进行其他错误处理，例如显示错误消息给用户
                            } else {
                                // 下载成功后执行的操作
                                link2.textContent = translate('download') // 恢复链接文本为 "下载"
                                link2.style.pointerEvents = 'auto' // 恢复点击事件
                                link2.focus() // 让链接重新获取焦点，给用户一种下载完成的感觉
                            }
                        })
                    }, 2)
                } else {
                    logMessage('createHistoryLinks', '找不到版本信息对应的 .diff-controls 元素', false, versionInfo)
                }
            })
        } else {
            logMessage('createHistoryLinks', '找不到父元素', false)
        }
    }
    //功能- 脚本详情页增加作者所有脚本
    function createAuthorScriptsLink() {
        // 检查是否已经存在作者其他脚本链接
        if (document.querySelector('[data-author-scripts-link]')) {
            // 如果已经存在，则添加点击事件监听器
            document.querySelector('[data-author-scripts-link]').addEventListener('click', function (event) {
                event.preventDefault()
                switchToAuthorScript() // 调用 switchToAuthorScript 函数
            })
            return // 结束函数，不再继续执行
        }
        // 创建新的链接元素
        var newLink = document.createElement('a')
        newLink.textContent = translate('dallScripts')
        newLink.setAttribute('href', '#')
        newLink.setAttribute('data-author-scripts-link', '') // 添加标记
        // 获取或创建用于显示新链接的容器 li 元素
        var targetLi = document.querySelector('#script-links > li:first-child')
        // 检查目标 li 元素是否存在，如果存在则添加新的 li 元素和链接
        if (targetLi) {
            var newLi = document.createElement('li')
            newLi.appendChild(newLink)
            targetLi.insertAdjacentElement('afterend', newLi)
        } else {
            logMessage('createAuthorScriptsLink', '找不到目标 li 元素。', false)
        }
        // 添加点击事件监听器
        newLink.addEventListener('click', function (event) {
            event.preventDefault()
            switchToAuthorScript() // 调用 switchToAuthorScript 函数
        })
    }
    if (/\/scripts\/\d+[^\s\/\\]*\/?/.test(location.href)) {
        createAuthorScriptsLink()
    }
    async function getUserJSON(urls) {
        try {
            // 使用Promise.all并行获取多个JSON数据
            logMessage('用户信息', 'JSON地址', true, urls)
            const responses = await Promise.all(urls.map(url => fetch(url)))
            const jsonResults = await Promise.all(responses.map(response => response.json()))
            // 将所有数据合并到一个数组中
            const allScripts = jsonResults.reduce((acc, curr) => {
                return acc.concat(curr.all_listable_scripts || curr.scripts)
                // return acc.concat(curr.all_listable_scripts);
            }, [])
            // 返回合并后的JSON数组
            return allScripts
        } catch (error) {
            logMessage('getUserJSON', '错误', false, error)
            throw error // 抛出错误以便上层处理
        }
    }
    function getUserIdFormJson(jsonlink) {
        return fetch(jsonlink)
            .then(response => response.json())
            .catch(error => {
                logMessage('fetchJSON', '获取或解析 JSON 时出错：', false, error)
                throw error
            })
    }
    function getUserIdFromAuthorLink(selector) {
        const link = document.querySelector(`${selector} a`)
        const match = link ? link.href.match(/(\d+)/) : null
        return match ? parseInt(match[1], 10) : null
    }
    function switchToAuthorScript() {
        let scriptDetail = [] //从脚本提取用户名称
        var useridformlink = getUserIdFromAuthorLink("#script-stats > dd.script-show-author")
        var textContents = getDtContents("#script-stats")
        var jsonlink = null
        const currentUrl = window.location.href // 获取当前页面的 URL
        const match2 = currentUrl.match(/\/scripts\/(\d+)/)
        if (useridformlink) {
            const userscripts = ['https://greasyfork.org/zh-CN/users/' + useridformlink + '.json']
            logMessage('switchToAuthorScript', '用户主页地址', false, userscripts)
            getUserJSON(userscripts)
                .then(mergedData => {
                    const scrName = document.querySelector("#script-stats > dd.script-show-author > span > a").textContent
                    insertUserScript(mergedData, { name: scrName }, textContents)
                })
                .catch(error => {
                    // 处理错误情况
                    logMessage('switchToAuthorScript', '获取或解析 JSON 时出错：', false, error)
                })
        } else {
            if (!match2) {
                logMessage('switchToAuthorScript', '无法从当前 URL 中提取脚本 ID', false, '错误')
                return
            }
            jsonlink = 'https://greasyfork.org/zh-CN/scripts/' + match2[1] + '.json'
            getUserIdFormJson(jsonlink)
                .then(data => {
                    scriptDetail = data.users[0]
                    const userscripts = ['https://greasyfork.org/zh-CN/users/' + scriptDetail.id + '.json']
                    logMessage('switchToAuthorScript', '用户主页地址', false, userscripts)
                    return getUserJSON(userscripts)
                })
                .then(mergedData => {
                    // 调用封装后的函数处理 `mergedData`
                    insertUserScript(mergedData, scriptDetail, textContents)
                })
                .catch(error => {
                    // 处理错误情况
                    logMessage('switchToAuthorScript', '获取或解析 JSON 时出错：', false, error)
                })
        }
    }
    //功能-主页显示统计
    const userHeader = document.querySelector('#about-user h2')
    if (userHeader && shouwtotalonuserpage) {
        var userId = window.location.href.match(/\d+/)?.[0]
        userId = `https://greasyfork.org/zh-CN/users/${userId}.json`
        getUserJSON([userId])
            .then(mergedData => {
                const userHeader = document.querySelector('#about-user h2')
                // insertUserScript(mergedData, { name: scrName }, textContents)
                const totala = generateStatsHtml(mergedData, '#ffcc00', true)
                userHeader.insertAdjacentHTML('afterend', `
                <div>${totala}</div>
            `)
            })
            .catch(error => {
                // 处理错误情况
                logMessage('switchToAuthorScript', '获取或解析 JSON 时出错：', false, error)
            })
    }
    function generateStatsHtml(scriptData, color = '#ffcc00', plainText = false) {
        const cssCount = scriptData.filter(obj => obj.code_url.endsWith('.css')).length
        const jsCount = scriptData.filter(obj => obj.code_url.endsWith('.js')).length
        const LatestCreated = new Date(Math.max(...scriptData.map(obj => new Date(obj.created_at))))
        const LatestUpdated = new Date(Math.max(...scriptData.map(obj => new Date(obj.code_updated_at))))
        const ok = scriptData.reduce((acc, obj) => acc + parseInt(obj.ok_ratings, 10), 0)
        const bad = scriptData.reduce((acc, obj) => acc + parseInt(obj.bad_ratings, 10), 0)
        const good = scriptData.reduce((acc, obj) => acc + parseInt(obj.good_ratings, 10), 0)
        const DailyTotal = scriptData.reduce((acc, obj) => acc + parseInt(obj.daily_installs, 10), 0)
        const TotalInstalls = scriptData.reduce((acc, obj) => acc + parseInt(obj.total_installs, 10), 0)
        const stats = [
            { label: translate('JSScripts'), count: jsCount },
            { label: translate('CSSScripts'), count: cssCount },
            { label: translate('dallScripts'), count: scriptData.length },
            { label: translate('DailyTotal'), count: DailyTotal },
            { label: translate('TotalInstalls'), count: TotalInstalls },
            { label: translate('ok'), count: ok },
            { label: translate('bad'), count: bad },
            { label: translate('good'), count: good }
        ]
        return stats.map(stat => plainText
            ? `<div>${stat.label} ${stat.count.toLocaleString()}</div>`
            : `
<span style="font-size: 15px; border-radius: 3px; background: rgb(45, 45, 45); color: rgb(255, 255, 255); margin: 0 4px; padding: 0 4px; outline: 2px solid ${color}; display: inline-flex; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    <span style="width: 8px; height: 8px; display: inline-flex; margin-right: 4px; border-radius: 50%; background: ${color};"></span>
    ${stat.label} ${stat.count.toLocaleString()}
</span><br>`).join('')
    }
    //插入所有脚本内容函数
    function insertUserScript(scriptData, scr, textContents) {
        // 计算各项统计
        const statsHtml = generateStatsHtml(scriptData)
        const backup = document.querySelector('#script-info').innerHTML
        beautifyUserScript()
        document.querySelector('#script-info').innerHTML = `
      <section>
        <header>
          <h3>${scr.name}: ${translate('dallScripts')}
            <button id="close-button" style="margin-left: 10px;">${translate('Close')}</button>
          </h3>
        </header>
        <section class="text-content">
          ${statsHtml}
        </section>
        <ol id="browse-script-list" class="script-list">
        
        </ol>
      </section>
    `
        // 绑定关闭按钮事件
        document.getElementById('close-button').addEventListener('click', restoreBackup)
        // 处理下载链接点击事件
        document.addEventListener('click', function (event) {
            // 查找被点击的 `.install-link.down` 链接
            const link = event.target.closest('a.install-link.down')
            // 如果没有找到链接，直接返回
            if (!link) return
            // 阻止默认行为，如跳转到下载链接
            event.preventDefault()
            event.stopPropagation()
            toggleDownloadIcon(link, true)
            // 获取文件名
            const filename = getFilenameFromUrl(link.href)
            // 调用下载文件的函数
            downloadFile(link.href, filename, function (error) {
                // 下载完成后执行的操作
                if (error) {
                    Toast(error.message, 3000, '#ff6347', '#ffffff', 'top')
                } else {
                    link.textContent = "下载"
                }
            }, 2)
        })
        // 动态插入列表项
        scriptData.forEach(scriptDetails => {
            const scriptHtml = createScriptInfoHtml(scriptDetails, scr.name, scr.url, textContents)
            document.querySelector('#browse-script-list').insertAdjacentHTML('beforeend', scriptHtml)
        })
        function restoreBackup() {
            document.querySelector('#script-info').innerHTML = backup
            createAuthorScriptsLink()
        }
    }
    //给所有脚本页面增加下CSS美化下
    function beautifyUserScript() {
        GM_addStyle(`
            [style-54998] {
                float: right;
                font-size: 70%;
                text-decoration: none;
            }
         input[type="submit"],
button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    background-color: #ff6666; /* 红色背景 */
    border: 1px solid #ff6666; /* 红色边框 */
    padding: 8px 15px;
    font-size: 14px;
    color: #ffffff; /* 白色文字 */
    border-radius: 4px;
}
button:hover,
button:focus {
    color: #ffffff; /* 白色文字 */
    border-color: #ff0000; /* 淡红色边框 */
    background-color: #ff0000; /* 淡红色背景 */
    outline: none;
}
.badge {
    /* 通用的徽章样式 */
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}
.badge-css {
    background-color: #254bdd;
    color: #fff
}
.badge-js {
    /* JavaScript 相关的徽章样式 */
    background-color: #efd81d; /* 蓝色背景 */
    color: #fff; /* 白色文字 */
    padding: 0.2em 0.4em; /* 调整内边距 */
    margin-left: 5px; /* 可选：左侧间距 */
}
        `)
    }
    //从信息页面获取，如果在其他如代码页等失效。
    function getDtContents(selector) {
        const elements = document.querySelectorAll(`${selector} > dt`)
        const dtContents = Array.from(elements)
            .map(element => element.textContent.trim())
        return dtContents
    }
    //构建HTML内容
    function createScriptInfoHtml(scriptDetails, fname, fuRl, tran) {
        // 解构传入的脚本详情对象
        const {
            url,
            name,
            description,
            created_at,
            code_updated_at,
            daily_installs,
            total_installs,
            good_ratings,
            ok_ratings,
            bad_ratings,
            code_url,
            version,
            license
        } = scriptDetails
        const extension = code_url.substring(code_url.lastIndexOf('.') + 1)
        // logMessage('createScriptInfoHtml', '翻译', true,tran);
        let badgeContent = ''
        let badgeClass = ''
        if (extension === 'js') {
            badgeContent = 'JS'
            badgeClass = 'badge-js'
        } else if (extension === 'css') {
            badgeContent = 'CSS'
            badgeClass = 'badge-css'
        }
        // 构建 HTML 结构
        const scriptInfoHtml = `
      <li  >
                <h2>
                  <a class="script-link" href="${url}"target="_blank">${name}</a>
                  <span class="badge ${badgeClass}" title="用户脚本">${badgeContent}</span><a class="install-link" href="${code_url}" style-54998="" style="text-decoration: none;">${translate('install')} ${version}</a></span>
  <a class="install-link down" href="${code_url}" style-54998=""style="text-decoration: none;">下载</a></span>
                  <span class="name-description-separator">
                  </span>
                  <br>
                  <span class="script-description description">
                   ${description}
                  </span>
                </h2>
                <div class="script-meta-block">
                  <dl class="inline-script-stats">
                    <dt class="script-list-author"><span>${translate('viewauthor')}</span></dt>
                    <dd class="script-list-author"><span><a href="${fuRl}"target="_blank">${fname}</a></span></dd>
                      <dt class="script-list-daily-installs"><span>${translate('viewdaily_installs')}</span></dt>
                      <dd class="script-list-daily-installs"><span> ${daily_installs}</span></dd>
                      <dt class="script-list-total-installs"><span>${translate('tviewotal_installs')}</span></dt>
                      <dd class="script-list-total-installs"><span>${total_installs}</span></dd>
                      <dt class="script-list-ratings"><span>${translate('viewfan_score')}</span></dt>
                      <dd class="script-list-ratings" data-rating-score="0.0"><span><span class="good-rating-count" title="好评或收藏的人数。">${good_ratings}</span>
        <span class="ok-rating-count" title="评级为一般的人数。">${ok_ratings}</span>
        <span class="bad-rating-count" title="评级为差评的人数。">${bad_ratings}</span>
        </span></dd>
                   <dt class="script-show-version"><span>${translate('viewversion')}</span></dt>
    <dd class="script-show-version"><span>${version}</span></dd>
                    <dt class="script-list-created-date"><span>${translate('viewcreated_at')}</span></dt>
                    <dd class="script-list-created-date"><span><relative-time datetime="${created_at}" prefix="" title="2024年6月26日 GMT+8 08:04">2024-06-26</relative-time></span></dd>
                    <dt class="script-list-updated-date"><span>${translate('viewcode_updated_at')}</span></dt>
                    <dd class="script-list-updated-date"><span><relative-time datetime="${code_updated_at}" prefix="" title="2024年6月26日 GMT+8 08:04">2024-06-26</relative-time></span></dd>
                            <dt class="script-show-license"><span>${translate('viewlicense')}</span></dt>
    <dd class="script-show-license"><span><i>${license}</i></span></dd>
                  </dl>
                </div>
            </li>
    `
        //  去你妈的  checkVersionInfo(`https://greasyfork.org/scripts/${scriptid}.json`, installLink, version)
        return scriptInfoHtml
    }
    //功能- 锁定语言  greasyfork.org/scripts/6245/
    if (setlocklang) {
        let valuehe = ''
        if (window.location.origin == 'https://greasyfork.org') {
            valuehe = 'language'
        } else if (window.location.origin == 'https://sleazyfork.org') {
            valuehe = 'language_sleasy'
        } else {
            // 如果没有匹配的情况，可以设置一个默认值
            valuehe = 'language'
        }
        var language = GM_getValue(valuehe, 'en')
        maybeRedirect(location)
        window.addEventListener('load', function _() {
            window.removeEventListener('load', _)
            var _timer, _title
            document.getElementById('language-selector-locale').addEventListener('change', function () {
                GM_setValue(valuehe, this.value)
                _title = _title || this.title
                this.title = this.value + ' saved in ' + GM_info.script.name
                clearTimeout(_timer)
                _timer = setTimeout(function () {
                    this.title = _title
                    _title = null
                }, 5000)
            })
        })
        window.addEventListener('mousedown', function (e) {
            var a = e.target.closest('a')
            if (a &&
                (a.origin === 'https://greasyfork.org' || a.origin === 'https://sleazyfork.org') &&
                a.pathname.lastIndexOf('/system/', 0) < 0 &&
                !a.pathname.match(/\/code\/.*?\.user\.(js|css)/))
                maybeRedirect(a)
        }, true)
        function makeRedirectedUrl(url) {
            var m = url.href.split('/')
            if (!/^\w\w(?:-\w\w)?$/.test(m[3]))
                m.splice(3, 0, '')
            if (m[3] === language)
                return url.href
            m[3] = language
            var newUrl = m.join('/').replace(/&?locale_override[^&]*/, '').replace(/\?$/, '')
            var noOvr = m[4] === 'forum' || m[4] === 'scripts' && /^\D|^$/.test(m[5])
            return noOvr ? newUrl : newUrl + (newUrl.indexOf('?') > 0 ? '&' : '?') + 'locale_override=1'
        }
        function maybeRedirect(url) {
            var newUrl = makeRedirectedUrl(url)
            if (newUrl === url.href ||
                document.referrer && makeRedirectedUrl({
                    href: document.referrer
                }) === newUrl)
                return
            Toast(translate('locklang', language) + language, 1000, '#0000ff', '#ffffff', 'top')
            url.href = newUrl
        }
    }
    // 添加Bootstrap CSS
    function addScopedStyles() {
        GM_addStyle(`
      /* 模态框整体样式 */
      #settingsModal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 800px;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
        font-family: Arial, sans-serif;
      }
      /* 模态框标题栏和底部按钮样式 */
      #settingsModal .modal-header, #settingsModal .modal-footer {
        padding: 0.75rem;
        border-bottom: 1px solid #eee;
        background-color: #f8f9fa;
      }
#settingsModal .form-control,
#settingsModal .form-check-label {
  font-size: 16px; /* 这里可以设置你想要的字体大小 */
}
      #settingsModal .modal-footer {
        border-top: none;
        text-align: right;
      }
      /* 关闭按钮样式 */
      #settingsModal .close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1.5rem;
        color: #dc3545;
        opacity: 0.7;
      }
      #settingsModal .close:hover {
        opacity: 1;
      }
      /* 模态框内容样式 */
      #settingsModal .modal-body {
        padding: 1rem;
      }
      /* 导航菜单样式 */
      #settingsModal .nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      #settingsModal .nav-item {
        margin-bottom: 0;
      }
      #settingsModal .nav-link {
        cursor: pointer;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0;
        color: #007bff;
        background-color: transparent;
      }
      #settingsModal .nav-link.active {
        background-color: #007bff;
        color: white;
      }
      /* Tab内容样式 */
      #settingsModal .tab-content > .tab-pane {
        display: none;
      }
      #settingsModal .tab-content > .tab-pane.active {
        display: block;
      }
      /* 表单控件样式 */
      #settingsModal .form-group {
        margin-bottom: 1rem;
      }
      #settingsModal .form-check-input {
        margin-top: 0.25rem;
      }
      /* 按钮样式 */
      #settingsModal .btn {
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        font-size: 0.9rem;
        border-radius: 4px;
      }
      #settingsModal .btn-secondary {
        background-color: #6c757d;
        border-color: #6c757d;
      }
      #settingsModal .btn-secondary:hover {
        background-color: #5a6268;
        border-color: #545b62;
      }
      #settingsModal .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
      }
      #settingsModal .btn-primary:hover {
        background-color: #0069d9;
        border-color: #0062cc;
      }
        .nav-link {
        white-space: nowrap;
    }    .close:focus {
    background-color: red;
}
.close:hover {
    background-color: red;
}
#settingsTabs {
  list-style-type: none; /* 去掉列表项前的小黑点 */
  padding-left: 0; /* 去掉左侧内边距 */
  margin: 0; /* 去掉外边距 */
}
/* 自定义的栅格系统 */
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-md-1 { flex: 0 0 8.33%; max-width: 8.33%; }
.col-md-2 { flex: 0 0 16.66%; max-width: 16.66%; }
.col-md-3 { flex: 0 0 25%; max-width: 25%; }
.col-md-4 { flex: 0 0 33.33%; max-width: 33.33%; }
.col-md-5 { flex: 0 0 41.66%; max-width: 41.66%; }
.col-md-6 { flex: 0 0 50%; max-width: 50%; }
.col-md-7 { flex: 0 0 58.33%; max-width: 58.33%; }
.col-md-8 { flex: 0 0 66.66%; max-width: 66.66%; }
.col-md-9 { flex: 0 0 75%; max-width: 75%; }
.col-md-10 { flex: 0 0 83.33%; max-width: 83.33%; }
.col-md-11 { flex: 0 0 91.66%; max-width: 91.66%; }
.col-md-12 { flex: 0 0 100%; max-width: 100%; }
      `)
    }
    // 控件数据示例
    // 创建模态框的HTML结构
    const modalHTML = `
  <div id="settingsModal" style="display: none;">
    <div class="modal-header">
      <h5 class="modal-title">Settings</h5>
      <button type="button" class="close" id="closeXSettings"onclick="document.getElementById('settingsModal').style.display='none'">&times;</button>
    </div>
    <div class="modal-body">
      <div style="display: flex;">
        <div style="flex: 1;">
          <div class="nav" id="settingsTabs">
          </div>
        </div>
        <div style="flex: 3;">
          <div class="tab-content" id="settingsTabsContent">
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" id="closeSettings"  onclick="document.getElementById('settingsModal').style.display='none'">Close</button>
      <button type="button" class="btn btn-primary" id="saveSettings" onclick="document.getElementById('settingsModal').style.display='none'">SaveSettings</button>
    </div>
  </div>
   <style>
    .nav a {
      text-decoration: none; /* 移除下划线 */
    }
  .nav a:hover {
    text-decoration: underline; /* 鼠标悬停时显示下划线，可根据需要调整 */
}
  </style>
  `
    $('#closeModal').click(function () {
        $('#settingsModal').hide()
    })
    // 将模态框HTML添加到页面
    $('body').prepend(modalHTML)
    // 封装函数：创建分类
    function createCategory(id, name, controls, controlsPerRow = 1) {
        const tabId = `${id}-tab`
        const tabPaneId = id
        // 计算每列的宽度
        const colWidth = Math.floor(12 / controlsPerRow)
        // 添加Tab项
        $('#settingsTabs').append(`
  <li class="nav-item">
    <a class="nav-link" id="${tabId}" href="#${tabPaneId}" role="tab" aria-controls="${tabPaneId}" aria-selected="false">${name}</a>
  </li>
`)
        // 添加Tab内容
        $('#settingsTabsContent').append(`
    <div class="tab-pane fade" id="${tabPaneId}" role="tabpanel" aria-labelledby="${tabId}">
      <form id="${tabPaneId}Form">
        <div class="container-fluid">
          <div class="row">
            ${controls.map(control => generateControlHTML(control, colWidth)).join('')}
          </div>
        </div>
      </form>
    </div>
  `)
        // 绑定事件
        controls.forEach(control => {
            if (control.onclick) {
                $(`#${control.id}`).click(control.onclick)
            }
            if (control.onchange) {
                $(`#${control.id}`).change(control.onchange)
            }
        })
        // 初始化第一个分类为激活状态
        if ($('#settingsTabs .nav-link.active').length === 0) {
            $(`#${tabId}`).addClass('active')
            $(`#${tabPaneId}`).addClass('show active')
        }
    }
    // 生成控件HTML，并指定每列的宽度
    function generateControlHTML(control, colWidth) {
        switch (control.type) {
            case 'link':
                return `
        <div class="col-md-${colWidth}">
          <div class="form-group">
            <a href="${control.href}" target="${control.target}" class="btn btn-link custom-link">${control.text}</a>
          </div>
        </div>
      `
            case 'label':
                return `
        <div class="col-md-${colWidth}">
          <div class="form-group">
           <label class="${control.class || ''}">
              ${control.label}
              ${control.link ? `<a href="${control.link.href}" target="${control.link.target}" class="${control.link.class}">${control.link.text}</a>` : ''}
            </label>
          </div>
        </div>
      `
            case 'checkbox':
                return `
        <div class="col-md-${colWidth}">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${control.id}" ${control.checked ? 'checked' : ''} onchange="${control.onchange ? control.onchange.toString() : ''}">
            <label class="form-check-label" for="${control.id}">${control.label}</label>
          </div>
        </div>
      `
            case 'text':
                return `
        <div class="col-md-${colWidth}">
          <div class="form-group">
            <label for="${control.id}">${control.label}</label>
            <input type="text" class="form-control" id="${control.id}" value="${control.value}" placeholder="${control.placeholder}" onchange="${control.onchange ? control.onchange.toString() : ''}">
          </div>
        </div>
      `
            case 'button':
                return `
        <div class="col-md-${colWidth}">
          <button type="button" id="${control.id}" class="btn btn-primary" onclick="${control.onclick ? control.onclick.toString() : ''}">${control.text}</button>
        </div>
      `
            case 'textarea':
                return `
        <div class="col-md-${colWidth}">
          <div class="form-group">
            <label for="${control.id}">${control.label}</label>
            <textarea id="${control.id}" class="form-control" placeholder="${control.placeholder}" onchange="${control.onchange ? control.onchange.toString() : ''}">${control.value}</textarea>
          </div>
        </div>
      `
            case 'select':
                return `
        <div class="col-md-${colWidth}">
          <div class="form-group">
            <label for="${control.id}">${control.label}</label>
            <select id="${control.id}" class="form-control" onchange="${control.onchange ? control.onchange.toString() : ''}">
              ${control.options.map(option => `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${option.text}</option>`).join('')}
            </select>
          </div>
        </div>
      `
            case 'divider':
                return `
    <div class="col-md-${colWidth}">
      <hr style="border: 1px solid blue;">
    </div>
  `
            default:
                return ''
        }
    }
    // 初始化模态框
    $(document).ready(function () {
        $('#settingsModal').on('shown.bs.modal', function () {
            addScopedStyles()
        })
        $('#settingsModal').on('hidden.bs.modal', function () {
            saveSettings()
        })
        $('#settingsTabs').on('click', '.nav-link', function (e) {
            e.preventDefault()
            $('.nav-link').removeClass('active')
            $('.tab-pane').removeClass('show active')
            $(this).addClass('active')
            $($(this).attr('href')).addClass('show active')
        })
    })
    // 保存设置
    function saveSettings() {
        // 遍历每个控件
        $('#settingsTabsContent').find('input, select').each(function () {
            const element = this
            const controlId = element.id
            const controlType = element.type
            // 根据控件类型保存值
            if (controlType === 'checkbox') {
                GM_setValue(controlId, element.checked)
            } else if (controlType === 'text' || controlType === 'number' || controlType === 'select-one') {
                GM_setValue(controlId, element.value)
            }
        })
        // 弹出提示或执行其他操作
        // alert('设置已保存');
    }
    // 显示模态框
    function showSettingsModal() {
        // $('body').addClass('modal-open');
        $('#settingsModal').modal('show')
    }
    $('#closeXSettings').on('click', function () {
        $('#settingsModal').modal('hide')
    })
    $('#closeSettings').on('click', function () {
        $('#settingsModal').modal('hide')
    })
    // 保存设置按钮事件
    $('#saveSettings').on('click', function () {
        saveSettings()
        reloadSettings()
        $('#settingsModal').modal('hide')
    })
    const viewMode = isMobileDevice() ? 1 : 2
    // 使用封装函数创建分类
    createCategory('category1', translate('脚本详情'), [
        { type: 'checkbox', id: 'sethtmlview', label: translate('htmlViewtotext'), checked: GM_getValue('sethtmlview', false), onchange: function () { GM_setValue('sethtmlview', this.checked) } },
        { type: 'checkbox', id: 'setcopylink', label: translate('copyto'), checked: GM_getValue('setcopylink', true), onchange: function () { GM_setValue('setcopylink', this.checked) } },
        { type: 'checkbox', id: 'viewicon', label: translate('showIcon'), checked: GM_getValue('viewicon', true), onchange: function () { GM_setValue('viewicon', this.checked) } },
        { type: 'button', id: 'clear-icon-cache', text: `清空${Object.keys(JSON.parse(GM_getValue('scriptsIcon', '{}'))).length}个图标缓存`, class: 'btn-danger', onclick: () => { GM_setValue('scriptsIcon', JSON.stringify({})); Toast('已清空', 1000, '#0000ff', '#ffffff', 'top') } },
        { type: 'checkbox', id: 'installforversions', label: translate('scriptHisAddInstall'), checked: GM_getValue('installforversions', true), onchange: function () { GM_setValue('installforversions', this.checked) } },
        { type: 'checkbox', id: 'addbutton', label: translate('addDownButton'), checked: GM_getValue('addbutton', true), onchange: function () { GM_setValue('addbutton', this.checked) } },
        { type: 'checkbox', id: 'showtotal', label: translate('scriptLinNumb'), checked: GM_getValue('showtotal', false), onchange: function () { GM_setValue('showtotal', this.checked) } },
        { type: 'checkbox', id: 'addCopyButtonBeforelibScript', label: '复制库声明', checked: GM_getValue('addCopyButtonBeforelibScript', true), onchange: function () { GM_setValue('addCopyButtonBeforelibScript', this.checked) } },
        { type: 'checkbox', id: 'showresource', label: '显示引用文件数', checked: GM_getValue('showresource', false), onchange: function () { GM_setValue('showresource', this.checked) } },
        { type: 'checkbox', id: 'copyshortlink', label: translate('复制短链接'), checked: GM_getValue('copyshortlink', true), onchange: function () { GM_setValue('copyshortlink', this.checked) } },
        { type: 'checkbox', id: 'useHighlighting', label: '美化代码片段', checked: GM_getValue('useHighlighting', true), onchange: function () { GM_setValue('useHighlighting', this.checked) } },
        { type: 'checkbox', id: 'useHighlighttocode', label: '美化查看代码', checked: GM_getValue('useHighlighttocode', true), onchange: function () { GM_setValue('useHighlighttocode', this.checked) } },
        {
            type: 'select',
            id: 'lockmode',
            label: '美化代码主题:',
            placeholder: 'Select...',
            options: [
                { value: '0', text: '跟随系统', selected: true },
                { value: '1', text: '黑夜模式', selected: false },
                { value: '2', text: '白天模式', selected: false },
                { value: 'Tomorrow-Night', text: 'Tomorrow-Night', selected: false },
                { value: 'Tomorrow-Night-Eighties', text: 'Tomorrow-Night-Eighties', selected: false },
                { value: 'Tomorrow-Night-Blue', text: 'Tomorrow-Night-Blue', selected: false },
                { value: 'Tomorrow-Night-Bright', text: 'Tomorrow-Night-Bright', selected: false },
                { value: 'Vibrant-Ink', text: 'Vibrant-Ink', selected: false },
                { value: 'Hemisu-Dark', text: 'Hemisu-Dark', selected: false },
                { value: 'Tranquil-Heart', text: 'Tranquil-Heart', selected: false },
                { value: 'Atelier-Dune-Dark', text: 'Atelier-Dune-Dark', selected: false },
                { value: 'Atelier-Estuary-Dark', text: 'Atelier-Estuary-Dark', selected: false },
                { value: 'Atelier-Forest-Dark', text: 'Atelier-Forest-Dark', selected: false },
                { value: 'Atelier-Heath-Dark', text: 'Atelier-Heath-Dark', selected: false },
                { value: 'Atelier-Lakeside-Dark', text: 'Atelier-Lakeside-Dark', selected: false },
                { value: 'Atelier-Plateau-Dark', text: 'Atelier-Plateau-Dark', selected: false },
                { value: 'Atelier-Savanna-Dark', text: 'Atelier-Savanna-Dark', selected: false },
                { value: 'Atelier-Seaside-Dark', text: 'Atelier-Seaside-Dark', selected: false },
                { value: 'Atelier-Sulphurpool-Dark', text: 'Atelier-Sulphurpool-Dark', selected: false },
                { value: 'Desert', text: 'Desert', selected: false },
                { value: 'Sunburst', text: 'Sunburst', selected: false },
                { value: 'Sons-Of-Obsidian', text: 'Sons-Of-Obsidian', selected: false }
            ],
            onchange: thandleSelectChange('lockmode')
        }
    ], viewMode)
    createCategory('category2', translate('导航栏'), [
        { type: 'checkbox', id: 'Postlink', label: translate('addNewScript'), checked: GM_getValue('Postlink', true), onchange: function () { GM_setValue('Postlink', this.checked) } },
        { type: 'checkbox', id: 'jumpto', label: translate('jumpTo18'), checked: GM_getValue('jumpto', false), onchange: function () { GM_setValue('jumpto', this.checked) } },
        { type: 'checkbox', id: 'HeaderStyleFix', label: translate('fixNavbar'), checked: GM_getValue('HeaderStyleFix', true), onchange: function () { GM_setValue('HeaderStyleFix', this.checked) } },
        { type: 'checkbox', id: 'setopenindoc', label: translate('openindoc'), checked: GM_getValue('setopenindoc', true), onchange: function () { GM_setValue('setopenindoc', this.checked) } },
        { type: 'checkbox', id: 'wightnav', label: '导航栏对齐', checked: GM_getValue('wightnav', true), onchange: function () { GM_setValue('wightnav', this.checked) } }
    ])
    createCategory('category3', translate('website'), [
        { type: 'checkbox', id: 'autocheck', label: translate('AutoEnableCodeEditor'), checked: GM_getValue('autocheck', false), onchange: function () { GM_setValue('autocheck', this.checked) } },
        { type: 'checkbox', id: 'newtabtoinstall', label: translate('openTab'), checked: GM_getValue('newtabtoinstall', false), onchange: function () { GM_setValue('newtabtoinstall', this.checked) } },
        { type: 'checkbox', id: 'AbsoluteTime', label: translate('exactDate'), checked: GM_getValue('AbsoluteTime', false), onchange: function () { GM_setValue('AbsoluteTime', this.checked) } },
        { type: 'checkbox', id: 'greasymaxWidth', label: translate('maxView'), checked: GM_getValue('greasymaxWidth', false), onchange: function () { GM_setValue('greasymaxWidth', this.checked) } },
        { type: 'checkbox', id: 'usereport', label: '一键举报', checked: GM_getValue('usereport', true), onchange: function () { GM_setValue('usereport', this.checked) } },
        { type: 'checkbox', id: 'userlocalfav', label: '本地书签', checked: GM_getValue('userlocalfav', true), onchange: function () { GM_setValue('userlocalfav', this.checked) } },
        { type: 'checkbox', id: 'remme', label: translate('Rememberme'), checked: GM_getValue('remme', true), onchange: function () { GM_setValue('remme', this.checked) } },
        {
            type: 'checkbox', id: 'hidediscussionread', label: '隐藏已阅读评论', checked: GM_getValue('hidediscussionread', false
            ), onchange: function () { GM_setValue('hidediscussionread', this.checked) }
        },
        { type: 'checkbox', id: 'italicdiscussionread', label: '斜体已阅读评论', checked: GM_getValue('italicdiscussionread', true), onchange: function () { GM_setValue('italicdiscussionread', this.checked) } },
    ], viewMode)
    createCategory('sl', '脚本列表', [
        { type: 'checkbox', id: 'showinstallbutton', label: '列表显示安装下载', checked: GM_getValue('showinstallbutton', true), onchange: function () { GM_setValue('showinstallbutton', this.checked) } },
        { type: 'checkbox', id: 'setlocklang', label: translate('locklangset'), checked: GM_getValue('setlocklang', false), onchange: function () { GM_setValue('setlocklang', this.checked) } },
        { type: 'checkbox', id: 'showRating', label: translate('showRating'), checked: GM_getValue('showRating', false), onchange: function () { GM_setValue('showRating', this.checked) } },
        { type: 'checkbox', id: 'showSourceCode', label: translate('showJump'), checked: GM_getValue('showSourceCode', false), onchange: function () { GM_setValue('showSourceCode', this.checked) } },
        { type: 'checkbox', id: 'userapplyCustomStyles', label: '使用旧版列表', checked: GM_getValue('userapplyCustomStyles', false), onchange: function () { GM_setValue('userapplyCustomStyles', this.checked) } },
        { type: 'checkbox', id: 'userhandleLocaleFilter', label: '显示所有语言脚本', checked: GM_getValue('userhandleLocaleFilter', true), onchange: function () { GM_setValue('userhandleLocaleFilter', this.checked) } },
        { type: 'checkbox', id: 'scriptset', label: translate('moveSidebar'), checked: GM_getValue('scriptset', true), onchange: function () { GM_setValue('scriptset', this.checked) } },
        { type: 'checkbox', id: 'scriptwithdata', label: translate('ScriptListByCreat'), checked: GM_getValue('scriptwithdata', true), onchange: function () { GM_setValue('scriptwithdata', this.checked) } },
    ], viewMode)
    createCategory('sl2', '个人主页', [
        { type: 'checkbox', id: 'clearhomepage', label: translate('cleanUpOld'), checked: GM_getValue('clearhomepage', true), onchange: function () { GM_setValue('clearhomepage', this.checked) } },
        { type: 'text', id: 'clearhomepagedays', label: translate('cleanUpOld'), value: GM_getValue('clearhomepagedays', 30) },
        { type: 'checkbox', id: 'addedittohomepage', label: translate('主页脚本添加操作'), checked: GM_getValue('addedittohomepage', true), onchange: function () { GM_setValue('addedittohomepage', this.checked) } },
        { type: 'checkbox', id: 'hideuserdiscussions', label: '隐藏近期评论', checked: GM_getValue('hideuserdiscussions', false), onchange: function () { GM_setValue('hideuserdiscussions', this.checked) } },
        { type: 'checkbox', id: 'shouwtotalonuserpage', label: '主页显示统计', checked: GM_getValue('shouwtotalonuserpage', true), onchange: function () { GM_setValue('shouwtotalonuserpage', this.checked) } },
    ], viewMode)
    createCategory('sl3', '美化控件', [
        { type: 'checkbox', id: 'usercssto', label: '控件美化', checked: GM_getValue('usercssto', true), onchange: function () { GM_setValue('usercssto', this.checked) } },
        { type: 'checkbox', id: 'modifyRadioLabels', label: translate('beautifyDis'), checked: GM_getValue('modifyRadioLabels', false), onchange: function () { GM_setValue('modifyRadioLabels', this.checked) } },
    ], viewMode)
    createCategory('openabout', '适用于', [
        { type: 'checkbox', id: 'usersearchingreasyfork', label: '启用增强', checked: GM_getValue('usersearchingreasyfork', true), onchange: function () { GM_setValue('usersearchingreasyfork', this.checked) } },
        //  { type: 'divider' },
        { type: 'checkbox', id: 'newtabopenabout', label: '新窗口打开', checked: GM_getValue('navigateTotab', true), onchange: function () { GM_setValue('navigateTotab', this.checked) } },
        { type: 'checkbox', id: 'showlinktotal', label: '显示在论坛的脚本数量', checked: GM_getValue('navigateTotab', true), onchange: function () { GM_setValue('showlinktotal', this.checked) } },
        { type: 'select', id: 'searchingreasyfork', label: '详情适用于打开:', placeholder: 'Select...', options: [{ value: '0', text: '论坛搜索', selected: false }, { value: '1', text: '网页打开', selected: true }, { value: '2', text: '弹出提示', selected: false }], onchange: thandleSelectChange('searchingreasyfork') }
    ], 1)
    const controls2 = [
        { type: 'label', label: 'Thank You', class: 'text-center', link: { href: '', target: '_blank', class: 'ml-2', text: '' } },
        { type: 'link', id: 'greasyforkInYourLanguage', text: 'Greasyfork in your language', href: 'https://greasyfork.org/zh-CN/scripts/6245', target: '_blank' },
        { type: 'link', id: 'greasyforkOptimization', text: 'Greasyfork 优化', href: 'https://greasyfork.org/zh-CN/scripts/411837', target: '_blank' },
        { type: 'link', id: 'greasyforkCopyCodeSnippet', text: 'GreasyFork Copy Code Snippet', href: 'https://greasyfork.org/zh-CN/scripts/423726', target: '_blank' },
        { type: 'link', id: 'downloadScriptButton', text: 'download script button', href: 'https://greasyfork.org/zh-CN/scripts/420872', target: '_blank' },
        { type: 'link', id: 'greasyforkScriptIcon', text: 'GreasyFork script icon', href: 'https://greasyfork.org/zh-CN/scripts/6861', target: '_blank' },
        { type: 'link', id: 'postANewScript', text: 'Add "Post a new script" link', href: 'https://greasyfork.org/zh-CN/scripts/450357', target: '_blank' },
        { type: 'link', id: 'openScriptsListSorting', text: 'Open scripts list sorting for creation date by default', href: 'https://greasyfork.org/zh-CN/scripts/495477', target: '_blank' },
        { type: 'link', id: 'absoluteTimeOnGreasyFork', text: 'Absolute Time on GreasyFork', href: 'https://greasyfork.org/zh-CN/scripts/470348', target: '_blank' },
        { type: 'link', id: 'collapseGreasyforkExpiredDiscussion', text: '折叠 greasyfork 过期讨论', href: 'https://greasyfork.org/scripts/426549/', target: '_blank' },
        { type: 'link', id: 'maximaleFensterbreite', text: 'maximale Fensterbreite auf nutzen', href: 'https://greasyfork.org/de/scripts/36037', target: '_blank' },
        { type: 'link', id: 'toggleHTMLView', text: 'Toggle HTML View', href: 'https://greasyfork.org/de/scripts/471149', target: '_blank' },
        { type: 'link', id: 'greasyforkHeaderStyleFix', text: 'GreasyFork Header Style Fix', href: 'https://greasyfork.org/zh-CN/scripts/473269', target: '_blank' },
        { type: 'link', id: 'autoEnableSyntaxHighlightingSourceEditor', text: 'Auto Enable Syntax-Highlighting Source Editor', href: 'https://greasyfork.org/zh-CN/scripts/22223', target: '_blank' },
    ]
    createCategory('category52', 'Thank You', controls2, 1)
    function thandleSelectChange(searchingValue) {
        return function (event) {
            // 获取选中的值
            const selectedValue = event.target.value
            // 使用传递的 searchingValue 作为键来设置 GM_setValue
            GM_setValue(searchingValue, selectedValue)
        }
    }
    handleSelectChange('searchingreasyfork', searchingreasyfork)
    handleSelectChange('lockmode', lockmode)
    function handleSelectChange(searchingid, searchingValue) {
        const selectElement = document.getElementById(searchingid)
        for (let option of selectElement.options) {
            if (option.value === searchingValue) {
                selectElement.value = searchingValue  // 设置 <select> 的值
                break  // 找到后退出循环
            }
        }
    }
    //设置- 适用于网页增强
    const ulElement = document.querySelector("#script-stats > dd.script-show-applies-to > ul")
    if (ulElement && usersearchingreasyfork) {
        const links = ulElement.querySelectorAll("a")
        if (showlinktotal) {
            links.forEach(link => {
                const titleText = link.getAttribute("title")
                if (titleText) {
                    const numberMatch = titleText.match(/\d+/)
                    if (numberMatch) {

                        const span = document.createElement('span')
                        span.className = 'title-number'
                        span.style.fontSize = '12px'
                        span.style.color = '#007bff'
                        span.textContent = numberMatch[0]

                        link.parentNode.insertBefore(span, link)
                    }
                }
            })
        }
        // 添加点击事件监听器
        $(ulElement).on('click', 'a', function (event) {
            event.preventDefault()
            var target = $(this)
            var textContent = target.text().trim()
            if (target.is('a') || target.is('span')) {
                if (searchingreasyfork === '0') {
                    navigateTo(target.attr('href'), navigateTotab)
                } else if (searchingreasyfork === '1') {
                    var url = 'https://' + textContent
                    navigateTo(url, navigateTotab)
                } else if (searchingreasyfork === '2') {
                    // 创建对话框
                    var dialog = $('<div>')
                        .css({
                            'position': 'fixed',
                            'top': '50%',
                            'left': '50%',
                            'transform': 'translate(-50%, -50%)',
                            'background-color': '#fff',
                            'border': '1px solid #ccc',
                            'border-radius': '5px',
                            'box-shadow': '0 2px 10px rgba(0,0,0,0.1)',
                            'padding': '20px',
                            'z-index': '1000',
                            'width': '300px',
                            'text-align': 'center'
                        })
                    // 创建按钮
                    var openButton = $('<button>')
                        .text('打开网页')
                        .click(function () {
                            var url = 'https://' + textContent
                            navigateTo(url, navigateTotab)
                        })
                    var forumSearchButton = $('<button>')
                        .text('论坛搜索')
                        .click(function () {
                            navigateTo(target.attr('href'), navigateTotab)
                        })
                    var copyButton = $('<button>')
                        .text('复制网址')
                        .click(function () {
                            var url = 'https://' + textContent
                            navigator.clipboard.writeText(url).then(function () {
                                Toast('网址已复制到剪贴板', 2000, '#00FF00', '#ffffff', 'top')
                            })
                        })
                    var closeButton = $('<button>')
                        .text('关闭')
                        .click(function () {
                            dialog.remove()
                        })
                    // 将按钮添加到对话框中
                    dialog.append(openButton, forumSearchButton, copyButton, closeButton)
                    // 将对话框添加到页面中
                    $('body').append(dialog)
                } else {
                    alert('未启用')
                }
            }
        })
    } else {
        // logMessage('适用于网页增强usersearchingreasyfork', '未找到 <ul> 元素', false);
    }
    function navigateTo(url, useWindowOpen) {
        if (useWindowOpen) {
            window.open(url, '_blank')
        } else {
            window.location.href = url
        }
    }
    //webhook页面增强 482672
    function customizeWebhookInfoPage() {
        if (!location.pathname.includes('/users/webhook-info')) return
        document.head.appendChild(document.createElement('style')).textContent = `
    #main-header ~ .width-constraint > .text-content:only-child > ul li {
      font-size: 0.88rem;
    }
    #main-header ~ .width-constraint > .text-content:only-child > ul a:first-child {
      display: block;
      font-size: 1rem;
      margin-top: 4px;
      text-decoration: none;
    }
    #main-header ~ .width-constraint > .text-content:only-child > ul a ~ a {
      color: #383855;
      text-decoration: none;
    }
    [dark] #main-header ~ .width-constraint > .text-content:only-child > ul a ~ a {
      color: #9898c9;
    }
    #main-header ~ .width-constraint > .text-content:only-child dt {
      font-weight: bold;
      color: #2376a0;
    }
    #main-header ~ .width-constraint > .text-content:only-child dd textarea {
      flex-grow: 1;
      height: 5.2rem;
      margin: 0px;
      padding: 8px;
      box-sizing: border-box;
    }
    #main-header ~ .width-constraint > .text-content:only-child dd form {
      display: flex;
      flex-direction: row;
      align-items: end;
      column-gap: 24px;
      row-gap: 8px;
      flex-wrap: wrap;
      max-width: calc(100% - 48px);
    }
    @media all and (min-width:300px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: end;
      column-gap: 24px;
      max-width: calc(100% - 48px);
    }
    #main-header ~ .width-constraint > .text-content:only-child h3 {
      margin-top: 18px;
      margin-left: 8px;
    }
    #main-header ~ .width-constraint > .text-content:only-child > ul {
      margin-bottom: 48px;
    }
    #main-header ~ .width-constraint > .text-content:only-child h3 ~ *:not(h3) {
      margin-left: 48px;
    }
    /* Basic Styling for Submit Inputs and Buttons */
    input[type="submit"], button {
      font-family: 'Arial', sans-serif;
      font-size: 10pt;
      color: #FFFFFF;
      background-color: #007BFF;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      text-align: center;
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    /* Hover effect */
    input[type="submit"]:hover, button:hover {
      background-color: #0056b3;
    }
    /* Active (pressed) effect */
    input[type="submit"]:active, button:active {
      background-color: #004494;
    }
    /* Focus effect for accessibility */
    input[type="submit"]:focus, button:focus {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
    dd textarea {
      border: 0;
      padding: 0;
      font-family: inherit;
      font-weight: 900;
      color: #a83710;
      font-size: inherit;
      appearance: none;
      border: none;
      outline: none;
      resize: none;
    }
    /* For WebKit browsers like Safari and Chrome */
    dd textarea::-webkit-input-placeholder {
      color: inherit;
    }
    /* Remove the inner shadow in WebKit renderings */
    dd textarea:focus,
    dd textarea:active {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    [dark] section>ul>li>b:nth-of-type(odd){
      color: #80ecd3;
    }
    [dark] section>ul>li>b:nth-of-type(even){
      color: #bfe6a0;
    }
  `
        new Promise(r => {
            if (document.readyState !== 'loading') {
                r()
            } else {
                window.addEventListener("DOMContentLoaded", r, false)
            }
        }).then(() => {
            for (const elm of document.querySelectorAll('.text-content dd, .text-content dd textarea')) {
                if (elm.nodeName !== 'TEXTAREA' && elm.firstElementChild === null) {
                    let s = elm.textContent
                    if (s && typeof s === 'string' && s.includes('/users/') && s.includes('/webhook') && s.includes('https://')) {
                        let t = s.replace(/\/users\/(\d+)\-[^\/]+\//, '/users/$1/')
                        t = t.replace(/https:\/\/greasyfork\.org\/[-\w]+\/users\//, 'https://greasyfork.org/en/users/')
                        elm.textContent = t
                    }
                } else if (typeof elm.value === 'string') {
                    let s = elm.value
                    // Add a click event listener to the textarea
                    elm.addEventListener('click', function () {
                        if (window.getSelection() + "" === "")
                            this.select()
                    })
                    elm.addEventListener('drag', function (evt) {
                        evt.preventDefault()
                    })
                    elm.addEventListener('drop', function (evt) {
                        evt.preventDefault()
                    })
                    elm.addEventListener('dragstart', function (evt) {
                        evt.preventDefault()
                    })
                    if (s && typeof s === 'string' && s.includes('/users/') && s.includes('/webhook') && s.includes('https://')) {
                        let t = s.replace(/\/users\/(\d+)\-[^\/]+\//, '/users/$1/')
                        t = t.replace(/https:\/\/greasyfork\.org\/[-\w]+\/users\//, 'https://greasyfork.org/en/users/')
                        elm.value = t
                    }
                }
            }
        })
    }
    // 调用函数
    customizeWebhookInfoPage()
    customizeWebhookInfoPage2()
    function customizeWebhookInfoPage2() {
        if (window.location.href.indexOf("https://greasyfork.org/zh-CN/users/webhook-info") != -1) //webhook
        {
            $("h3").each(function () {
                if ($(this).text() == 'GitHub') {
                    $(this).html('<img src="https://github.githubassets.com/favicons/favicon.svg"> Github')
                }
                else if ($(this).text() == 'Bitbucket') {
                    $(this).html('<img src="https://wac-cdn.atlassian.com/assets/img/favicons/bitbucket/favicon-32x32.png"> Bitbucket')
                }
                else if ($(this).text() == 'GitLab') {
                    $(this).html('<img src="https://gitlab.com/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png"> GitLab')
                }
            })
            $('textarea').attr('cols', '130')
            $("input").each(function () {
                if ($(this).val() == "Generate")
                    $(this).val("生成")
                if ($(this).val() == "Regenerate")
                    $(this).val("重新生成")
            })
        }
    }
    //功能-隐藏AD 482672
    function addStyleToHideElements(classSelectors) {
        classSelectors.forEach(selector => {
            var style = document.createElement('style')
            style.type = 'text/css'
            style.innerHTML = selector + ' { display: none !important; }'
            document.head.appendChild(style)
        })
    }
    addStyleToHideElements(['.ad-entry', '.ad.ad-ea'])
    //功能-语言筛选器 greasyfork.org/scripts/467463
    function handleLocaleFilter(linkSelector, filterParam = 'filter_locale', defaultValue = '0') {
        const currentURL = new URL(window.location.href)
        const regex = /^https:\/\/greasyfork\.org\/.*\/scripts\?.*/
        if (!regex.test(currentURL)) {
            return // 如果 URL 不匹配，退出函数
        }
        const searchParams = new URLSearchParams(currentURL.search)
        // Check if the user manually clicked the filter locale link.
        const manuallyClicked = sessionStorage.getItem('filterLocaleClicked')
        // If user did not manually select language, and filter_locale is not set, redirect to show scripts from all languages.
        if (manuallyClicked !== 'true' && !searchParams.has(filterParam)) {
            searchParams.append(filterParam, defaultValue)
            currentURL.search = searchParams.toString()
            window.location.replace(currentURL.toString())
        }
        // On a page where the locale can be filtered, add click listener to the filter locale link.
        const filterLocaleLink = document.querySelector(linkSelector) // Selector for the "Show English results only" or equivalent link
        if (filterLocaleLink) {
            filterLocaleLink.addEventListener('click', () => {
                sessionStorage.setItem('filterLocaleClicked', 'true')
            })
        }
    }
    if (userhandleLocaleFilter) {
        handleLocaleFilter('.sidebarred-main-content p a')
    }
    //功能-旧版本视图greasyfork.org/scripts/464089/
    function applyCustomStyles() {
        let css = `
        /* disable default properties */
        .inline-script-stats {
            display: unset;
            margin: 0;
        }
        .script-meta-block {
            max-width: none;
        }
        /* return old properties */
        .inline-script-stats dt,
        .inline-script-stats dd {
            float: left;
            width: 50%;
        }
        /* make 600px max width for script meta block if this is script page */
        #script-content .script-meta-block {
            max-width: 600px;
        }
        /* to prevent style breaking, 18px is minimal height if element doesn't have any content (e.g. author link may not appear) */
        .inline-script-stats dd span:empty {
            display: block;
            height: 20px;
        }
    `
        if (typeof GM_addStyle !== "undefined") {
            GM_addStyle(css)
        } else {
            let styleNode = document.createElement("style")
            styleNode.appendChild(document.createTextNode(css));
            (document.querySelector("head") || document.documentElement).appendChild(styleNode)
        }
    }
    if (userapplyCustomStyles) {
        applyCustomStyles()
    }
    // Call the function to apply the styles
    //功能-高亮代码片段
    // Define a function to set up code highlighting
    function setupCodeHighlighting() {
        if (checkMode()) {
            setCodeContainerTheme(false, false)
        } else {
            setCodeContainerTheme(true, false)
        }
        // Function to highlight code blocks
        function highlightTextCode() {
            const selectors = [
                'pre:not([class])', // 选择没有 class 属性的 <pre> 元素
                'code',            // 选择所有 <code> 元素
            ]
            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(block => {
                    $(block).css({
                        'font-size': 'smaller',
                        'word-break': 'break-word',
                        'white-space': 'pre-wrap',
                        'word-wrap': 'break-word'
                    })
                    // Get the text content of the <code> element
                    const codeContent = block.textContent
                    hljs.highlightElement(block)
                })
            })
        }
        // Run the highlightTextCode function immediately for existing code blocks
        highlightTextCode()
    }
    if (useHighlighting) {
        setupCodeHighlighting()
    }
    // Call the setupCodeHighlighting function to initialize code highlighting
    function isMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera
        return /android|iPad|iPhone|iPod|IEMobile|WPDesktop|Windows Phone|webOS|BlackBerry|Opera Mini|Mobile|tablet/i.test(userAgent) ||
            (window.innerWidth <= 1024 && (window.innerHeight <= 768 || window.orientation !== undefined))
    }
    //功能-库页面增加复制按钮 greasyfork.org/scripts/463
    function addCopyButtonBeforeScriptLink() {
        var scriptLink = $('#script-content > p > code:first-child')
        if (scriptLink.length > 0) {
            GM_addStyle(`
            .custom-container {
                display: flex;
                align-items: center;
                gap: 10px; /* 增加 button 和 code 之间的间隔 */
            }
            .custom-button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
            }
            .custom-button:hover {
                background-color: #0056b3;
            }
            .custom-button:active {
                background-color: #004a99;
            }
        `)
            // 创建一个包含复制按钮和原始 code 元素的 div 元素
            var container = $('<div class="custom-container"></div>')
            // 创建一个复制按钮
            var copyButton = $('<button type="button" class="custom-button">Copy</button>')
            // 添加点击事件来复制内容到剪贴板
            copyButton.on('click', function () {
                var codeContent = scriptLink.text() // 获取原始 code 元素内容
                // 直接复制内容到剪贴板
                navigator.clipboard.writeText(codeContent).then(function () {
                    // 提示用户内容已复制
                    copyButton.text('Copied')
                    // 1 秒后将按钮标题恢复为 "Copy"
                    setTimeout(function () {
                        copyButton.text('Copy')
                    }, 1000)
                }).catch(function (error) {
                    logMessage('addCopyButtonBeforeScriptLink', '复制失败:', false, error)
                })
            })
            // 将复制按钮和原始 code 元素添加到 container 中
            container.append(copyButton)
            container.append(scriptLink.clone())
            // 用 container 替换 scriptLink
            scriptLink.replaceWith(container)
        }
    }
    if (addCopyButtonBeforelibScript) {
        addCopyButtonBeforeScriptLink()
    }
    //功能-代码查看页面增加梅花
    function setCodeContainerTheme(isDayMode, addde = true) {
        // const themeCSS = isDayMode ? GM_getResourceText('nnfx-light.min.css') : GM_getResourceText('nnfx-dark.min.css');
        const themeCSS = isDayMode ? GM_getResourceText('atom-one-light.css') : GM_getResourceText('atom-one-dark.css')
        GM_addStyle(themeCSS)
        let lockmode1 = GM_getValue('lockmode')
        // 检查 lockmode1 是否是一个字符串，并且是否包含英文字母
        if (typeof lockmode1 === 'string' && /[a-zA-Z]/.test(lockmode1)) {
            //下面的CSS代码不允许添加，防止控件超出范围
            return
        }
        if (addde) {
            GM_addStyle(`
.code-container {
 background-color: ${isDayMode ? '#fafafa' : '#282c34'};
  border-radius: 8px;
  max-height: 100%;
  overflow: visible;
}
.code-container ::-webkit-scrollbar {
  width: 14px;
  height: 14px;
  background-color: transparent;
}
.code-container ::-webkit-scrollbar-track {
  background-color: transparent;
}
.code-container ::-webkit-scrollbar-thumb {
  background-color: rgba(78, 86, 102, 0);
}
.code-container ::-webkit-scrollbar-corner {
  background-color: transparent;
}
.code-container:hover ::-webkit-scrollbar-thumb {
  background-color: ${isDayMode ? '#FF8C00' : '#636d83'};
}
.code-container ::selection {
  background-color: ${isDayMode ? '#f5f5f5' : '#636d83'};
}
.code-container pre code {
  padding: 0;
  font-family: Consolas;
  cursor: text;
  overflow: auto;
   max-height: calc(100vh - 267px);
}
.code-container pre code .marker {
  display: inline-block;
  color:${isDayMode ? '#FF8C00' : '#636d83'};
  text-align: right;
  padding-right: 20px;
  user-select: none;
  cursor: auto;
}
      `)
            alert
        }
    }
    // 选择白天模式或黑夜模式  //反选
    function checkMode() {
        // 获取 #script-info 元素
        const scriptInfoElement = document.querySelector('#script-info')
        // 检查元素是否存在
        if (scriptInfoElement) {
            if (lockmode === "1") {
                return true  // 锁定黑夜
            }
            if (lockmode === "2") {
                return false  // 锁定白天
            }
            // 获取元素的计算样式
            const computedStyle = window.getComputedStyle(scriptInfoElement)
            // 获取背景颜色
            const backgroundColor = computedStyle.backgroundColor
            // 打印背景颜色到控制台
            // 判断背景颜色是否为白色
            if (backgroundColor === 'rgb(255, 255, 255)') { // 白色背景
                return false // 白色背景为白天模式
            } else {
                return true  // 其他背景色为黑夜模式
            }
        } else {
            return false // 如果没有找到元素，假设为白天模式
        }
    }
    function checkAndSetTheme() {
        const scriptInfoElement = document.querySelector('#script-info')
        if (scriptInfoElement) {
            if (checkMode()) {
                setCodeContainerTheme(false)
            } else {
                setCodeContainerTheme(true)
            }
        } else {
        }
    }
    if (useHighlighttocode && window.location.href.includes('/code')) {
        let lockmode1 = GM_getValue('lockmode')
        // 检查 lockmode1 是否是一个字符串，并且是否包含英文字母
        if (typeof lockmode1 === 'string' && /[a-zA-Z]/.test(lockmode1)) {
            // 执行不等于 0、1、2 时的逻辑
            const type = lockmode1
            const css = getCssRules(type)
            GM_addStyle(`
      .prettyprint {
        font-size: 12px
      }
        #script-content > div.code-container > pre {
        white-space: pre-wrap; /* 自动换行 */
        word-wrap: break-word; /* 长单词换行 */
          width: unset
      }
      `)
            GM_addStyle(css)
            return
        }
        checkAndSetTheme()
        $(document).ready(function () {
            function processCodeBlocks(selector, languageClass) {
                $(selector).each((pre_i, pre) => {
                    // 调整代码，给一些压缩代码增加换行
                    $(pre).find('li').append('\n')
                    const code = $(`<code class="${languageClass}">`).html(pre.innerHTML)
                    // 清空原始代码容器，放置新容器
                    $(pre).removeClass().html('').append(code).addClass('code-container')
                    // 高亮
                    hljs.highlightElement(pre.querySelector('code'))
                    // 增加行号
                    const html = $(pre).find('code').html()
                    const htmlSplit = html.split('\n')
                    const totalLines = htmlSplit.length
                    $(pre).find('code').html(
                        htmlSplit.map((n, i) => `<span class="marker" style="width: calc(${String(totalLines).length * 0.5}em + 0px);">${i + 1}</span>${n}`).join('\n')
                    )
                })
            }
            if ($('pre.lang-js').length > 0) {
                // 存在 .lang-js 元素时，高亮 JavaScript 代码
                processCodeBlocks('pre.lang-js', 'language-javascript')
            } else if ($('pre.lang-css').length > 0) {
                // 不存在 .lang-js 元素且存在 .lang-css 元素时，高亮 CSS 代码
                processCodeBlocks('pre.lang-css', 'language-css')
            } else if ($('pre.uglyprint').length > 0) {
                processCodeBlocks('pre.uglyprint', 'language-javascript')
            }
        })
    }
    //功能-选择器透明
    function fuckselector() {
        const languageSelector = document.querySelector("#language-selector-locale")
        if (languageSelector) {
            // 设置默认背景颜色为透明
            languageSelector.style.backgroundColor = 'transparent'
            // 取消边框
            languageSelector.style.border = 'none'
            // 添加样式来控制下拉时和悬停时的背景颜色
            const styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = `
              #language-selector-locale {
                background-color: transparent !important; /* 默认状态下背景透明 */
                border: none !important; /* 取消边框 */
              }
              #language-selector-locale:focus {
                background-color: #fff !important; /* 下拉时的背景颜色 */
                border: none !important; /* 取消边框 */
              }
              #language-selector-locale:hover {
                background-color: #f0f0f0 !important; /* 鼠标悬停时的背景颜色 */
                border: none !important; /* 取消边框 */
              }
            `
            document.head.appendChild(styleSheet)
            // 监听焦点和失去焦点事件以调试背景颜色
            languageSelector.addEventListener('focus', () => {
                languageSelector.style.backgroundColor = '#fff' // 下拉时的背景颜色
            })
            languageSelector.addEventListener('blur', () => {
                languageSelector.style.backgroundColor = 'transparent' // 收起时的背景颜色
            })
        }
    }
    // 执行函数以应用样式
    // fuckselector();
    function getCssRules(type) {
        switch (type) {
            case 'Tomorrow-Night':
                return `.prettyprint{background:#1d1f21;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#c5c8c6}ol.linenums{margin-top:0;margin-bottom:0;color:#969896}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#1d1f21;list-style-type:decimal}@media screen{.str{color:#b5bd68}.kwd{color:#b294bb}.com{color:#969896}.typ{color:#81a2be}.lit{color:#de935f}.pun{color:#c5c8c6}.opn{color:#c5c8c6}.clo{color:#c5c8c6}.tag{color:#c66}.atn{color:#de935f}.atv{color:#8abeb7}.dec{color:#de935f}.var{color:#c66}.fun{color:#81a2be}}
    .ace_gutter{background:#25282c!important;color:#C5C8C6!important}.ace_print-margin{width:1px!important;background:#25282c!important}.ace_editor{background-color:#1D1F21!important;color:#C5C8C6!important}.ace_cursor{color:#AEAFAD!important}.ace_marker-layer .ace_selection{background:#373B41!important}.ace-tomorrow-night.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #1D1F21!important}.ace_marker-layer .ace_step{background:rgb(102,82,0)!important}.ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px!important;border:1px solid #4B4E55!important}.ace_marker-layer .ace_active-line{background:#282A2E!important}.ace_gutter-active-line{background-color:#282A2E!important}.ace_marker-layer .ace_selected-word{border:1px solid #373B41!important}.ace_invisible{color:#4B4E55!important}.ace_keyword,.ace_meta,.ace_storage,.ace_storage.ace_type,.ace_support.ace_type{color:#B294BB!important}.ace_keyword.ace_operator{color:#8ABEB7!important}.ace_constant.ace_character,.ace_constant.ace_language,.ace_constant.ace_numeric,.ace_keyword.ace_other.ace_unit,.ace_support.ace_constant,.ace_variable.ace_parameter{color:#DE935F!important}.ace_constant.ace_other{color:#CED1CF!important}.ace_invalid{color:#CED2CF!important;background-color:#DF5F5F!important}.ace_invalid.ace_deprecated{color:#CED2CF!important;background-color:#B798BF!important}.ace_fold{background-color:#81A2BE!important;border-color:#C5C8C6!important}.ace_entity.ace_name.ace_function,.ace_support.ace_function,.ace_variable{color:#81A2BE!important}.ace_support.ace_class,.ace_support.ace_type{color:#F0C674!important}.ace_heading,.ace_markup.ace_heading,.ace_string{color:#B5BD68!important}.ace_entity.ace_name.ace_tag,.ace_entity.ace_other.ace_attribute-name,.ace_meta.ace_tag,.ace_string.ace_regexp,.ace_variable{color:#CC6666!important}.ace_comment{color:#969896!important}.ace_indent-guide{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC') right repeat-y!important}
    `
            case 'Tomorrow-Night-Eighties':
                return `.prettyprint{background:#2d2d2d;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#ccc}ol.linenums{margin-top:0;margin-bottom:0;color:#999}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#2d2d2d;list-style-type:decimal}@media screen{.str{color:#9c9}.kwd{color:#c9c}.com{color:#999}.typ{color:#69c}.lit{color:#f99157}.pun{color:#ccc}.opn{color:#ccc}.clo{color:#ccc}.tag{color:#f2777a}.atn{color:#f99157}.atv{color:#6cc}.dec{color:#f99157}.var{color:#f2777a}.fun{color:#69c}}
    .ace_gutter{background:#272727!important;color:#CCC!important}.ace_print-margin{width:1px!important;background:#272727!important}.ace_editor{background-color:#2D2D2D!important;color:#CCCCCC!important}.ace_constant.ace_other,.ace_cursor{color:#CCCCCC!important}.ace_marker-layer .ace_selection{background:#515151!important}.ace-tomorrow-night-eighties.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #2D2D2D!important}.ace_marker-layer .ace_step{background:rgb(102,82,0)!important}.ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px!important;border:1px solid #6A6A6A!important}.ace-tomorrow-night-bright .ace_stack{background:rgb(66,90,44)!important}.ace_marker-layer .ace_active-line{background:#393939!important}.ace_gutter-active-line{background-color:#393939!important}.ace_marker-layer .ace_selected-word{border:1px solid #515151!important}.ace_invisible{color:#6A6A6A!important}.ace_keyword,.ace_meta,.ace_storage,.ace_storage.ace_type,.ace_support.ace_type{color:#CC99CC!important}.ace_keyword.ace_operator{color:#66CCCC!important}.ace_constant.ace_character,.ace_constant.ace_language,.ace_constant.ace_numeric,.ace_keyword.ace_other.ace_unit,.ace_support.ace_constant,.ace_variable.ace_parameter{color:#F99157!important}.ace_invalid{color:#CDCDCD!important;background-color:#F2777A!important}.ace_invalid.ace_deprecated{color:#CDCDCD!important;background-color:#CC99CC!important}.ace_fold{background-color:#6699CC!important;border-color:#CCCCCC!important}.ace_entity.ace_name.ace_function,.ace_support.ace_function,.ace_variable{color:#6699CC!important}.ace_support.ace_class,.ace_support.ace_type{color:#FFCC66!important}.ace_heading,.ace_markup.ace_heading,.ace_string{color:#99CC99!important}.ace_comment{color:#999999!important}.ace_entity.ace_name.ace_tag,.ace_entity.ace_other.ace_attribute-name,.ace_meta.ace_tag,.ace_variable{color:#F2777A!important}.ace_indent-guide{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC') right repeat-y!important}
    `
            case 'Tomorrow-Night-Blue':
                return `.prettyprint{background:#002451;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#fff}ol.linenums{margin-top:0;margin-bottom:0;color:#7285b7}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#002451;list-style-type:decimal}@media screen{.str{color:#d1f1a9}.kwd{color:#ebbbff}.com{color:#7285b7}.typ{color:#bbdaff}.lit{color:#ffc58f}.pun{color:#fff}.opn{color:#fff}.clo{color:#fff}.tag{color:#ff9da4}.atn{color:#ffc58f}.atv{color:#9ff}.dec{color:#ffc58f}.var{color:#ff9da4}.fun{color:#bbdaff}}
    .ace_gutter{background:#00204b!important;color:#7388b5!important}.ace_print-margin{width:1px!important;background:#00204b!important}.ace_editor{background-color:#002451!important;color:#FFFFFF!important}.ace_constant.ace_other,.ace_cursor{color:#FFFFFF!important}.ace_marker-layer .ace_selection{background:#003F8E!important}.ace-tomorrow-night-blue.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #002451!important}.ace_marker-layer .ace_step{background:rgb(127,111,19)!important}.ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px!important;border:1px solid #404F7D!important}.ace_marker-layer .ace_active-line{background:#00346E!important}.ace_gutter-active-line{background-color:#022040!important}.ace_marker-layer .ace_selected-word{border:1px solid #003F8E!important}.ace_invisible{color:#404F7D!important}.ace_keyword,.ace_meta,.ace_storage,.ace_storage.ace_type,.ace_support.ace_type{color:#EBBBFF!important}.ace_keyword.ace_operator{color:#99FFFF!important}.ace_constant.ace_character,.ace_constant.ace_language,.ace_constant.ace_numeric,.ace_keyword.ace_other.ace_unit,.ace_support.ace_constant,.ace_variable.ace_parameter{color:#FFC58F!important}.ace_invalid{color:#FFFFFF!important;background-color:#F99DA5!important}.ace_invalid.ace_deprecated{color:#FFFFFF!important;background-color:#EBBBFF!important}.ace_fold{background-color:#BBDAFF!important;border-color:#FFFFFF!important}.ace_entity.ace_name.ace_function,.ace_support.ace_function,.ace_variable{color:#BBDAFF!important}.ace_support.ace_class,.ace_support.ace_type{color:#FFEEAD!important}.ace_heading,.ace_markup.ace_heading,.ace_string{color:#D1F1A9!important}.ace_entity.ace_name.ace_tag,.ace_entity.ace_other.ace_attribute-name,.ace_meta.ace_tag,.ace_string.ace_regexp,.ace_variable{color:#FF9DA4!important}.ace_comment{color:#7285B7!important}.ace_indent-guide{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC') right repeat-y!important}
    `
            case 'Tomorrow-Night-Bright':
                return `.prettyprint{background:#000;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#eaeaea}ol.linenums{margin-top:0;margin-bottom:0;color:#969896}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#000;list-style-type:decimal}@media screen{.str{color:#b9ca4a}.kwd{color:#c397d8}.com{color:#969896}.typ{color:#7aa6da}.lit{color:#e78c45}.pun{color:#eaeaea}.opn{color:#eaeaea}.clo{color:#eaeaea}.tag{color:#d54e53}.atn{color:#e78c45}.atv{color:#70c0b1}.dec{color:#e78c45}.var{color:#d54e53}.fun{color:#7aa6da}}
    #ace-editor{border:1px solid rgba(255,255,255,.1)}.ace_gutter{background:#1a1a1a!important;color:#DEDEDE!important}.ace_print-margin{width:1px!important;background:#1a1a1a!important}.ace_editor{background-color:#000000!important;color:#DEDEDE!important}.ace_cursor{color:#9F9F9F!important}.ace_marker-layer .ace_selection{background:#424242!important}.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #000000!important}.ace_marker-layer .ace_step{background:rgb(102,82,0)!important}.ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px!important;border:1px solid #888888!important}.ace_marker-layer .ace_highlight{border:1px solid rgb(110,119,0)!important;border-bottom:0!important;box-shadow:inset 0 -1px rgb(110,119,0)!important;margin:-1px 0 0 -1px!important;background:rgba(255,235,0,.1)!important}.ace_marker-layer .ace_active-line{background:#2A2A2A!important}.ace_gutter-active-line{background-color:#2A2A2A!important}.ace_stack{background-color:rgb(66,90,44)!important}.ace_marker-layer .ace_selected-word{border:1px solid #888888!important}.ace_invisible{color:#343434!important}.ace_keyword,.ace_meta,.ace_storage,.ace_storage.ace_type,.ace_support.ace_type{color:#C397D8!important}.ace_keyword.ace_operator{color:#70C0B1!important}.ace_constant.ace_character,.ace_constant.ace_language,.ace_constant.ace_numeric,.ace_keyword.ace_other.ace_unit,.ace_support.ace_constant,.ace_variable.ace_parameter{color:#E78C45!important}.ace_constant.ace_other{color:#EEEEEE!important}.ace_invalid{color:#CED2CF!important;background-color:#DF5F5F!important}.ace_invalid.ace_deprecated{color:#CED2CF!important;background-color:#B798BF!important}.ace_fold{background-color:#7AA6DA!important;border-color:#DEDEDE!important}.ace_entity.ace_name.ace_function,.ace_support.ace_function,.ace_variable{color:#7AA6DA!important}.ace_support.ace_class,.ace_support.ace_type{color:#E7C547!important}.ace_heading,.ace_markup.ace_heading,.ace_string{color:#B9CA4A!important}.ace_entity.ace_name.ace_tag,.ace_entity.ace_other.ace_attribute-name,.ace_meta.ace_tag,.ace_string.ace_regexp,.ace_variable{color:#D54E53!important}.ace_comment{color:#969896!important}.ace_c9searchresults.ace_keyword{color:#C2C280!important}.ace_indent-guide{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC') right repeat-y!important}
    `
            case 'Vibrant-Ink':
                return `.prettyprint{background:#000;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#fff}ol.linenums{margin-top:0;margin-bottom:0;color:#666}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#000;list-style-type:decimal}@media screen{.str{color:#6f0}.kwd{color:#f60}.com{color:#93c}.typ{color:#458}.lit{color:#458}.pun{color:#fff}.opn{color:#fff}.clo{color:#fff}.tag{color:#fff}.atn{color:#9c9}.atv{color:#6f0}.dec{color:#fff}.var{color:#fff}.fun{color:#fc0}}
    .ace_gutter{background:#1a1a1a!important;color:#BEBEBE!important}.ace_print-margin{width:1px!important;background:#1a1a1a!important}.ace_editor{background-color:#0F0F0F!important;color:#FFFFFF!important}.ace_cursor{color:#FFFFFF!important}.ace_marker-layer .ace_selection{background:#6699CC!important}.ace-vibrant-ink.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #0F0F0F!important}.ace_marker-layer .ace_step{background:rgb(102,82,0)!important}.ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px!important;border:1px solid #404040!important}.ace_marker-layer .ace_active-line{background:#333333!important}.ace_gutter-active-line{background-color:#333333!important}.ace_marker-layer .ace_selected-word{border:1px solid #6699CC!important}.ace_invisible{color:#404040!important}.ace_keyword,.ace_meta{color:#FF6600!important}.ace_constant,.ace_constant.ace_character,.ace_constant.ace_character.ace_escape,.ace_constant.ace_other{color:#339999!important}.ace_constant.ace_numeric{color:#99CC99!important}.ace_invalid,.ace_invalid.ace_deprecated{color:#CCFF33!important;background-color:#000000!important}.ace_fold{background-color:#FFCC00!important;border-color:#FFFFFF!important}.ace_entity.ace_name.ace_function,.ace_support.ace_function,.ace_variable{color:#FFCC00!important}.ace_variable.ace_parameter{font-style:italic!important}.ace_string{color:#66FF00!important}.ace_string.ace_regexp{color:#44B4CC!important}.ace_comment{color:#9933CC!important}.ace_entity.ace_other.ace_attribute-name{font-style:italic!important;color:#99CC99!important}.ace_indent-guide{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC') right repeat-y!important}
    `
            case 'Hemisu-Dark':
                return `.prettyprint{background:#000;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#eee}ol.linenums{margin-top:0;margin-bottom:0;color:#777}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#000;list-style-type:decimal}@media screen{.str{color:#b1d631}.kwd{color:#b1d631}.com{color:#777}.typ{color:#bfa}.lit{color:#9fd3e6}.pun{color:#eee}.opn{color:#eee}.clo{color:#eee}.tag{color:#eee}.atn{color:#b1d631}.atv{color:#bfa}.dec{color:#eee}.var{color:#eee}.fun{color:#9fd3e6}}
    `
            case 'Tranquil-Heart':
                return `.prettyprint{background:#2f3640;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#e6e9ed}ol.linenums{margin-top:0;margin-bottom:0;color:#656d78}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#2f3640;list-style-type:decimal}@media screen{.str{color:#ffce54}.kwd{color:#4fc1e9}.com{color:#656d78}.typ{color:#4fc1e9}.lit{color:#ac92ec}.pun{color:#e6e9ed}.opn{color:#e6e9ed}.clo{color:#e6e9ed}.tag{color:#ed5565}.atn{color:#a0d468}.atv{color:#ffce54}.dec{color:#ac92ec}.var{color:#e6e9ed}.fun{color:#e6e9ed}}
    `
            case 'Atelier-Cave-Dark':
                return `.prettyprint{background:#19171c;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#efecf4}ol.linenums{margin-top:0;margin-bottom:0;color:#655f6d}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#19171c;list-style-type:decimal}@media screen{.str{color:#2a9292}.kwd{color:#955ae7}.com{color:#655f6d}.typ{color:#576ddb}.lit{color:#aa573c}.pun{color:#efecf4}.opn{color:#efecf4}.clo{color:#efecf4}.tag{color:#be4678}.atn{color:#aa573c}.atv{color:#398bc6}.dec{color:#aa573c}.var{color:#be4678}.fun{color:#576ddb}}
    `
            case 'Atelier-Dune-Dark':
                return `.prettyprint{background:#20201d;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#fefbec}ol.linenums{margin-top:0;margin-bottom:0;color:#7d7a68}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#20201d;list-style-type:decimal}@media screen{.str{color:#60ac39}.kwd{color:#b854d4}.com{color:#7d7a68}.typ{color:#6684e1}.lit{color:#b65611}.pun{color:#fefbec}.opn{color:#fefbec}.clo{color:#fefbec}.tag{color:#d73737}.atn{color:#b65611}.atv{color:#1fad83}.dec{color:#b65611}.var{color:#d73737}.fun{color:#6684e1}}
    `
            case 'Atelier-Estuary-Dark':
                return `.prettyprint{background:#22221b;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#f4f3ec}ol.linenums{margin-top:0;margin-bottom:0;color:#6c6b5a}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#22221b;list-style-type:decimal}@media screen{.str{color:#7d9726}.kwd{color:#5f9182}.com{color:#6c6b5a}.typ{color:#36a166}.lit{color:#ae7313}.pun{color:#f4f3ec}.opn{color:#f4f3ec}.clo{color:#f4f3ec}.tag{color:#ba6236}.atn{color:#ae7313}.atv{color:#5b9d48}.dec{color:#ae7313}.var{color:#ba6236}.fun{color:#36a166}}
    `
            case 'Atelier-Forest-Dark':
                return `.prettyprint{background:#1b1918;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#f1efee}ol.linenums{margin-top:0;margin-bottom:0;color:#766e6b}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#1b1918;list-style-type:decimal}@media screen{.str{color:#7b9726}.kwd{color:#6666ea}.com{color:#766e6b}.typ{color:#407ee7}.lit{color:#df5320}.pun{color:#f1efee}.opn{color:#f1efee}.clo{color:#f1efee}.tag{color:#f22c40}.atn{color:#df5320}.atv{color:#3d97b8}.dec{color:#df5320}.var{color:#f22c40}.fun{color:#407ee7}}
    `
            case 'Atelier-Heath-Dark':
                return `.prettyprint{background:#1b181b;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#f7f3f7}ol.linenums{margin-top:0;margin-bottom:0;color:#776977}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#1b181b;list-style-type:decimal}@media screen{.str{color:#918b3b}.kwd{color:#7b59c0}.com{color:#776977}.typ{color:#516aec}.lit{color:#a65926}.pun{color:#f7f3f7}.opn{color:#f7f3f7}.clo{color:#f7f3f7}.tag{color:#ca402b}.atn{color:#a65926}.atv{color:#159393}.dec{color:#a65926}.var{color:#ca402b}.fun{color:#516aec}}
    `
            case 'Atelier-Lakeside-Dark':
                return `.prettyprint{background:#161b1d;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#ebf8ff}ol.linenums{margin-top:0;margin-bottom:0;color:#5a7b8c}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#161b1d;list-style-type:decimal}@media screen{.str{color:#568c3b}.kwd{color:#6b6bb8}.com{color:#5a7b8c}.typ{color:#257fad}.lit{color:#935c25}.pun{color:#ebf8ff}.opn{color:#ebf8ff}.clo{color:#ebf8ff}.tag{color:#d22d72}.atn{color:#935c25}.atv{color:#2d8f6f}.dec{color:#935c25}.var{color:#d22d72}.fun{color:#257fad}}
    `
            case 'Atelier-Plateau-Dark':
                return `.prettyprint{background:#1b1818;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#f4ecec}ol.linenums{margin-top:0;margin-bottom:0;color:#655d5d}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#1b1818;list-style-type:decimal}@media screen{.str{color:#4b8b8b}.kwd{color:#8464c4}.com{color:#655d5d}.typ{color:#7272ca}.lit{color:#b45a3c}.pun{color:#f4ecec}.opn{color:#f4ecec}.clo{color:#f4ecec}.tag{color:#ca4949}.atn{color:#b45a3c}.atv{color:#5485b6}.dec{color:#b45a3c}.var{color:#ca4949}.fun{color:#7272ca}}
    `
            case 'Atelier-Savanna-Dark':
                return `.prettyprint{background:#171c19;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#ecf4ee}ol.linenums{margin-top:0;margin-bottom:0;color:#5f6d64}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#171c19;list-style-type:decimal}@media screen{.str{color:#489963}.kwd{color:#55859b}.com{color:#5f6d64}.typ{color:#478c90}.lit{color:#9f713c}.pun{color:#ecf4ee}.opn{color:#ecf4ee}.clo{color:#ecf4ee}.tag{color:#b16139}.atn{color:#9f713c}.atv{color:#1c9aa0}.dec{color:#9f713c}.var{color:#b16139}.fun{color:#478c90}}
    `
            case 'Atelier-Seaside-Dark':
                return `.prettyprint{background:#131513;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#f4fbf4}ol.linenums{margin-top:0;margin-bottom:0;color:#687d68}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#131513;list-style-type:decimal}@media screen{.str{color:#29a329}.kwd{color:#ad2bee}.com{color:#687d68}.typ{color:#3d62f5}.lit{color:#87711d}.pun{color:#f4fbf4}.opn{color:#f4fbf4}.clo{color:#f4fbf4}.tag{color:#e6193c}.atn{color:#87711d}.atv{color:#1999b3}.dec{color:#87711d}.var{color:#e6193c}.fun{color:#3d62f5}}
    `
            case 'Atelier-Sulphurpool-Dark':
                return `.prettyprint{background:#202746;font-family:Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;border:0!important}.pln{color:#f5f7ff}ol.linenums{margin-top:0;margin-bottom:0;color:#6b7394}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{padding-left:1em;background-color:#202746;list-style-type:decimal}@media screen{.str{color:#ac9739}.kwd{color:#6679cc}.com{color:#6b7394}.typ{color:#3d8fd1}.lit{color:#c76b29}.pun{color:#f5f7ff}.opn{color:#f5f7ff}.clo{color:#f5f7ff}.tag{color:#c94922}.atn{color:#c76b29}.atv{color:#22a2c9}.dec{color:#c76b29}.var{color:#c94922}.fun{color:#3d8fd1}}
    `
            case 'Desert':
                return `pre.prettyprint,pre.prettyprinted,.Message pre ol{display:block;background-color:#333}pre .nocode{background-color:none;color:#000}pre .str{color:#ffa0a0}pre .kwd{color:khaki;font-weight:700}pre .com{color:#87ceeb}pre .typ{color:#98fb98}pre .lit{color:#cd5c5c}pre .pun{color:#fff}pre .pln{color:#fff}pre .tag{color:khaki;font-weight:700}pre .atn{color:#bdb76b;font-weight:700}pre .atv{color:#ffa0a0}pre .dec{color:#98fb98}ol.linenums{margin-top:0;margin-bottom:0;color:#AEAEAE}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:none}
    `
            case 'Sunburst':
                return `pre .str, code .str { color: #65B042; }pre .kwd, code .kwd { color: #E28964; }pre .com, code .com { color: #AEAEAE; font-style: italic; }
    pre .typ, code .typ { color: #89bdff; }pre .lit, code .lit { color: #3387CC; }pre .pun, code .pun { color: #fff; }pre .pln, code .pln { color: #fff; }pre .tag, code .tag { color: #89bdff; }pre .atn, code .atn { color: #bdb76b; }pre .atv, code .atv { color: #65B042; } pre .dec, code .dec { color: #3387CC; }pre.prettyprint, code.prettyprint, , pre.prettyprinted, .Message pre ol {background-color: #000;border-radius: 8px;}ol.linenums { margin-top: 0; margin-bottom: 0; color: #AEAEAE; }li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8 { list-style-type: none }li.L1,li.L3,li.L5,li.L7,li.L9 { background: none }
    `
            case 'Sons-Of-Obsidian':
                return `
        .str{color:#EC7600}.kwd{color:#93C763}.com{color:#66747B}.typ{color:#678CB1}.lit{color:#FACD22}.pun{color:#F1F2F3}.pln{color:#F1F2F3}.tag{color:#8AC763}.atn{color:#E0E2E4}.atv{color:#EC7600}.dec{color:purple}pre.prettyprint{border:0 solid #888}ol.linenums{margin-top:0;margin-bottom:0}.prettyprint,,pre.prettyprinted,.Message pre ol{background:#000}li.L0,li.L1,li.L2,li.L3,li.L4,li.L5,li.L6,li.L7,li.L8,li.L9{color:#555;list-style-type:decimal}li.L1,li.L3,li.L5,li.L7,li.L9{background:#111}
    `
            default:
                return null
        }
    }
    //功能-已经阅读的评论斜体
    function applyDiscussionReadStyles(hide, applyStyles) {
        const style = document.createElement('style')
        let css = '.discussion-list-container.discussion-read {'
        if (hide) css += 'display: none;'
        if (applyStyles) {
            css += 'color: gray;font-size: 0.9em;font-style: italic; opacity: 0.3;'
        }
        css += '}'
        style.textContent = css
        document.head.appendChild(style)
    }
    applyDiscussionReadStyles(hidediscussionread, italicdiscussionread)
    //功能-在代码页面增加引用库数量显示
    function logUserScriptOccurrences(textContent) {
        const urlPattern = /(https?:\/\/[^\s]+)/g  // 匹配网址的正则表达式
        const scriptPattern = /(@require|@resource)/  // 查找 @require 或 @resource 的正则表达式
        const targetSubstring = '==/UserScript==' // 目标匹配子串
        const urls = []  // 用于存储匹配的网址
        // 如果文件内容包含 "==/UserScript=="
        if (textContent.includes(targetSubstring)) {
            // 在文件内容中查找 @require 和 @resource
            const lines = textContent.split('\n')
            for (const line of lines) {
                // 如果当前行包含 @require 或 @resource
                if (scriptPattern.test(line)) {
                    const matches = line.match(urlPattern)
                    if (matches) {
                        for (const match of matches) {
                            if (!urls.includes(match)) {
                                urls.push(match)  // 将唯一的匹配网址添加到数组中
                            }
                        }
                    }
                }
            }
            // 当找到目标子串并停止遍历后，将收集到的网址传递给 createDetailsWithLinks 函数
            if (urls.length > 0) {
                createDetailsWithLinks("#install-area", urls.map(url => [url, url]), '6666', `引用${urls.length}个文件`)
            } else {
                logMessage('logUserScriptOccurrences', '没有找到 @require 或 @resource 相关的链接', true)
            }
        } else {
            logMessage('logUserScriptOccurrences', '目标文件不包含 "==/UserScript==" 子串', true)
        }
    }
    /**
 * 从指定的 URL 中获取文本内容
 * @param {string} url - 需要获取文本的 URL
 * @returns {Promise<string>} - 返回一个 Promise，解析为获取到的文本内容
 */
    async function fetchTextFromURL(url, json = false) {
        try {
            // 从指定的 URL 中获取文件内容
            const response = await fetch(url)
            if (!response.ok) throw new Error('网络响应失败')
            if (json) {
                // 如果 json 参数为 true，返回 JSON 数据
                const jsonData = await response.json()
                return jsonData
            } else {
                // 否则返回文本内容
                const textContent = await response.text()
                return textContent
            }
        } catch (error) {
            console.error('获取文件内容失败:', error)
            throw error // 将错误抛出，以便调用者处理
        }
    }
    if (isScriptCodePage() && showresource) {
        $(document).ready(function () {
            const number = getNumberFromURL()
            if (number) {
                // 构建 URL 并调用 logUserScriptOccurrences 函数
                const url = `https://update.greasyfork.org/scripts/${number}.meta.js`
                fetchTextFromURL(url)
                    .then(textContent => {
                        // 将文本内容传递给 logUserScriptOccurrences 函数
                        logUserScriptOccurrences(textContent)
                    })
                    .catch(error => {
                        logMessage('fetchTextFromURL', '获取文本内容失败', true)
                    })
            } else {
                logMessage('getNumberFromURL', '当前网址中未找到数字串', true)
            }
        })
    } function getNumberFromURL() {
        const match = window.location.href.match(/(\d+)/) // 匹配第一个数字串
        return match ? match[0] : null // 返回第一个匹配的数字串或 null
    }
    /**
     * 创建包含链接列表的 details 元素，并将其插入到指定元素之后
     * @param {string} selector - 插入位置的选择器
     * @param {Array} URLs - 包含 URL 和描述文本的数组
     * @param {string} detailsId - details 元素的 id
     * @param {string} summaryText - summary 元素的文本内容
     */
    function createDetailsWithLinks(selector, URLs, detailsId, summaryText) {
        const description = document.querySelector(selector)
        if (description) {
            const details = document.createElement("details")
            const summary = document.createElement("summary")
            summary.textContent = summaryText || "Links" // 如果未提供 summaryText，则默认为 "Links"
            details.appendChild(summary)
            const list = document.createElement("ul")
            for (const [url, text] of URLs) {
                const listItem = document.createElement("li")
                const link = document.createElement("a")
                link.href = url
                link.textContent = getFilenameFromUrl(url)
                link.title = text
                link.target = "_blank"
                listItem.appendChild(link)
                list.appendChild(listItem)
            }
            details.appendChild(list)
            description.after(details)
            details.id = detailsId || 'default-details-id' // 如果未提供 detailsId，则默认为 'default-details-id'
        } else {
            //console.error('指定的插入位置不存在');
        }
    }
    //功能-添加举报
    const TEST_MODE = 0
    let skipMode = false
    const onIframeLoad = async (evt) => {
        const iframe = evt.target
        if (!(iframe instanceof HTMLIFrameElement)) return
        if (skipMode) return
        const onNewUrl = async () => {
            skipMode = true
            Toast('reported', 2000, '#00FF00', '#ffffff', 'top')
            await new Promise(requestAnimationFrame)
            iframe.remove()
            skipMode = false
        }
        const onAbort = async () => {
            skipMode = true
            await new Promise(requestAnimationFrame)
            iframe.remove()
            skipMode = false
        }
        iframe.removeEventListener('load', onIframeLoad, false)
        if (!iframe.contentDocument) {
            Toast('Iframe Access Error. Action aborted.', 2000, '#FF0000', '#ffffff', 'top')
            onAbort()
            return
        }
        const reportReasonRadio = iframe.contentDocument.querySelector('input[name="report[reason]"]')
        if (reportReasonRadio) {
            for (const s of iframe.contentDocument.querySelectorAll('html, body, main')) {
                s.style.scrollBehavior = 'auto'
            }
            reportReasonRadio.scrollIntoView()
            await new Promise(requestAnimationFrame)
            reportReasonRadio.click()
            const form = reportReasonRadio.closest('form')
            let currentUrl = iframe.contentWindow.location.pathname
            skipMode = true
            if (TEST_MODE) {
                iframe.contentWindow.location.href = 'https://greasyfork.org/'
            } else {
                form.submit()
            }
            let cid = setInterval(() => {
                if (!cid) return
                let nextUrl = iframe.contentWindow.location.pathname
                if (nextUrl !== currentUrl) {
                    clearInterval(cid)
                    cid = 0
                    setTimeout(onNewUrl, 300)
                }
            }, 100)
        } else if (iframe.contentDocument.querySelector('#open-report-:not(:empty)')) {
            Toast("The spam report is already submitted for moderator's review. Action aborted.", 2000, '#FF0000', '#ffffff', 'top')
            onAbort()
        } else {
            Toast("Cannot find the report[reason] radio button. Action aborted.", 2000, '#FF0000', '#ffffff', 'top')
            onAbort()
        }
    }
    const clickHandler = (evt) => {
        evt.preventDefault()
        if (!(evt.target instanceof HTMLElement)) return
        let url = evt.target.getAttribute('data-href')
        if (!url) return
        let discussionId = /id=(\d+)\b/.exec(url)
        if (discussionId) discussionId = discussionId[1]
        let r = window.confirm(`举报评论#${discussionId || "------"} ?`)
        if (!r) return
        const iframe = document.createElement('iframe')
        skipMode = false
        iframe.addEventListener('load', onIframeLoad, false)
        iframe.name = "u423323"
        iframe.src = url
        Object.assign(iframe.style, {
            display: 'block',
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '300px',
            height: '300px',
            'contain': 'strict',
        })
        document.body.appendChild(iframe)
    }
    document.head.appendChild(document.createElement('style')).textContent = `
.re {
font-weight: bold;
font-size: 14px;
cursor: pointer;
}
`
    function addReportButtonToDiscussionItem(li) {
        let a = li.querySelector('a[href*="/discussions/"].discussion-title')
        if (!a) return
        let href = a.getAttribute('href')
        let discussionIdMatch = href.match(/(\d+)\/?$/)
        let discussionId = discussionIdMatch ? parseInt(discussionIdMatch[1]) : null
        let lastSegment = href.split('/').pop()
        if (isNaN(lastSegment) || lastSegment < 0) return
        let span = document.createElement('span') // 使用 document.createElement 创建元素
        span.classList.add('rating-icon', 'rating-icon-bad', 're')  // 添加自定义类名 're'
        span.textContent = '举报'
        span.setAttribute('data-href', 'https://greasyfork.org/en/reports/new?item_class=discussion&item_id=' + discussionId)
        span.addEventListener('click', clickHandler, false)
        let meta = li.querySelector('.discussion-meta') // 选择 .discussion-meta 元素
        let relativeTime = meta ? meta.querySelector('.relative-time') : null // 选择 .relative-time 元素
        if (meta) {
            if (relativeTime) {
                // 将按钮插入到 .relative-time 之后
                meta.insertBefore(span, relativeTime.nextSibling)
            } else {
                // 如果没有 .relative-time 元素，则将按钮插入到 .discussion-meta 之后
                meta.appendChild(span)
            }
        } else {
            li.parentNode.insertBefore(span, li.nextSibling) // 如果没有 .discussion-meta 元素，则插入到 .discussion-list-item 之后
        }
    }
    // 定义观察器回调函数
    const observerCallback = (mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains('discussion-list-item')) {
                    } else if (node.nodeType === 1) {
                        // 检查子孙节点
                        const items = node.querySelectorAll('.discussion-list-item')
                        items.forEach(item => {
                            addReportButtonToDiscussionItem(item)
                            logMessage('一键举报', '元素', true, item)
                        })
                    }
                })
            }
        }
    }
    if (usereport) {
        for (const anchor of document.querySelectorAll('a[href*="/reports/new?item_class=comment&item_id="],a[href*="/reports/new?item_class=discussion&item_id="]')) {
            let anchorNode = anchor
            if (anchor.parentNode.firstElementChild === anchor.parentNode.lastElementChild) {
                anchorNode = anchorNode.parentNode
            }
            let newAnchorNode = anchorNode.cloneNode(true)
            let newAnchor = newAnchorNode.querySelector('a[href]') || newAnchorNode
            newAnchor.classList.add('report-spam-btn')
            newAnchor.setAttribute('data-href', newAnchor.getAttribute('href'))
            newAnchor.setAttribute('href', '#')
            newAnchor.addEventListener('click', clickHandler, false)
            newAnchor.textContent = '举报'
            anchorNode.parentNode.insertBefore(newAnchorNode, anchorNode.nextSibling)
        }
        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(observerCallback)
        // 配置观察器选项
        const observerOptions = {
            childList: true, // 观察子节点的变化
            subtree: true // 观察整个子树（包括子节点及其后代）的变化
        }
        // 选择要观察的目标节点
        const targetNode = document.body // 观察整个文档树的变化
        // 开始观察目标节点
        observer.observe(targetNode, observerOptions)
        setTimeout(() => {
            document.querySelectorAll('.discussion-list-item').forEach(item => addReportButtonToDiscussionItem(item))
        }, 270)
    }
    //----------------------------------------------通用函数---------------------------------------------
    function isMobile() {
        let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        return flag
    }
    function formatFileSize(byteSize) {
        if (byteSize < 1024) {
            return `${byteSize.toFixed(2)} B` // 小于 1 KB 显示为字节
        } else if (byteSize < 1024 * 1024) {
            return `${(byteSize / 1024).toFixed(2)} KB` // 介于 1 KB 到 1 MB 之间
        } else {
            return `${(byteSize / (1024 * 1024)).toFixed(2)} MB` // 大于 1 MB
        }
    }
    function toggleDownloadIcon(linkElement, isSpinning) {
        // 确保传入的参数是一个有效的 HTML 元素
        if (!(linkElement instanceof HTMLElement)) {
            return
        }
        // 添加 CSS 动画样式
        // 确保样式只添加一次
        if (!document.querySelector('.spin')) {
            GM_addStyle(`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .spin {
        animation: spin 1s linear infinite; /* 旋转动画，持续时间 1 秒，线性渐变，无限循环 */
      }
    `)
        }
        // 查找 svg 元素
        const svg = linkElement.querySelector('svg')
        if (isSpinning) {
            // 设置旋转的圆圈图标
            linkElement.innerHTML = `
      <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" stroke-dashoffset="31.4" fill="none">
          <animate attributeName="stroke-dashoffset" from="31.4" to="0" dur="1s" repeatCount="indefinite"/>
        </circle>
      </svg>
    `
            // 查找新创建的 svg 元素
            const newSvg = linkElement.querySelector('svg')
            // 添加旋转效果的类
            if (newSvg) {
                newSvg.classList.add('spin')
            }
        } else {
            // 设置下载箭头图标
            linkElement.innerHTML = `
      <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
        <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v8h3.586a1 1 0 0 1 .707 1.707l-5 5a1 1 0 0 1-1.414 0l-5-5A1 1 0 0 1 7.414 11H11V3a1 1 0 0 1 1-1zm8 14a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1z"/>
      </svg>
    `
            // 查找新创建的 svg 元素
            const newSvg = linkElement.querySelector('svg')
            // 移除旋转效果的类
            if (newSvg) {
                newSvg.classList.remove('spin')
            }
        }
    }
    /**
 * 检查当前网址是否匹配给定的正则表达式路径模式
 * @returns {boolean} - 如果当前网址匹配该路径模式，则返回 true；否则返回 false
 */
    function isScriptCodePage() {
        //const regex = /\/scripts\/\d+[^\s\/\\]*\/code(\/|$)/;
        const regex = /\/code/
        return regex.test(window.location.href)
    }
    //是否为主页
    function isHomepage() {
        // 判断 #about-user 元素是否存在
        return !!document.querySelector("#about-user")
    }
    //下载函数
    function downloadFile(url, filename, callback, maxRetries = 3) {
        let attempt = 0  // 当前尝试次数
        function tryDownload() {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            xhr.responseType = 'blob'
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var blob = xhr.response
                    var objectUrl = window.URL.createObjectURL(blob)
                    var a = document.createElement('a')
                    a.href = objectUrl
                    a.download = filename // 设置下载文件名
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(objectUrl)
                    document.body.removeChild(a) // 清理 DOM
                    if (callback && typeof callback === 'function') {
                        callback(null) // 执行回调，传递 null 表示没有错误
                    }
                } else {
                    // 请求失败的处理
                    if (attempt < maxRetries) {
                        attempt++
                        logMessage('downloadFile', `下载失败。正在重试... (${attempt}/${maxRetries})`, false)
                        tryDownload()  // 重试下载
                    } else {
                        if (callback && typeof callback === 'function') {
                            callback(new Error(translate('errorCode') + xhr.status))
                        }
                    }
                }
            }
            xhr.onerror = function () {
                // 网络错误等导致请求无法完成时的处理
                if (attempt < maxRetries) {
                    attempt++
                    logMessage('downloadFile', `网络错误。正在重试... (${attempt}/${maxRetries})`, false)
                    tryDownload()  // 重试下载
                } else {
                    if (callback && typeof callback === 'function') {
                        callback(new Error(translate('errorNetwork')))
                    }
                }
            }
            xhr.send()
        }
        tryDownload()  // 开始下载
    }
    function getFilenameFromUrl(url) {
        if (typeof url !== 'string' || url.trim() === '') {
            logMessage('getFilenameFromUrl', 'URL无效，默认文件名download', false)
            return 'download' // 返回一个默认的文件名
        }
        var lastSlashIndex = url.lastIndexOf('/')
        if (lastSlashIndex === -1 || lastSlashIndex === url.length - 1) {
            logMessage('getFilenameFromUrl', 'URL格式无效缺少文件名，默认文件名download', false)
            return 'download' // 返回一个默认的文件名
        }
        var filenameWithExtension = url.substring(lastSlashIndex + 1)
        var decodedFilename = decodeURIComponent(filenameWithExtension)
        decodedFilename = decodedFilename.replace(/%20/g, '_') // 替换所有的 %20 为下划线
        return decodedFilename
    }
    /**
* 在控制台输出带有样式的日志信息
* @param {string} mainMessage - 主要日志信息
* @param {string} extraMessage - 附加信息
* @param {boolean} isSuccess - 如果为 true，附加信息为绿色；如果为 false，附加信息为红色
*/
    function logMessage(mainMessage, extraMessage, isSuccess, extraMessageObject) {
        if (!DEBUG) return
        // 确保主要消息是字符串
        mainMessage = String(mainMessage)
        // 确保附加信息是字符串
        extraMessage = String(extraMessage)
        const formattedMainMessage = `[Greasyfork 糊裱匠-${mainMessage}]`
        // 根据 isSuccess 参数设置附加信息的颜色
        const extraMessageStyle = isSuccess
            ? 'color: green; font-size: 16px;'  // 绿色样式
            : 'color: red; font-size: 16px;'    // 红色样式
        // 输出日志信息
        if (extraMessageObject && typeof extraMessageObject === 'object') {
            console.log(
                '%c%s %c%s %c%o',
                'color: orange; font-size: 16px;', // 主要日志信息的橙色字体样式
                formattedMainMessage, // 主要日志信息
                extraMessageStyle,  // 附加信息样式
                extraMessage, // 附加信息
                'color: black; font-size: 16px;', // 对象信息样式
                extraMessageObject // 直接输出对象信息
            )
        } else {
            console.log(
                '%c%s %c%s',
                'color: orange; font-size: 16px;', // 主要日志信息的橙色字体样式
                formattedMainMessage, // 主要日志信息
                extraMessageStyle,  // 附加信息样式
                extraMessage // 附加信息
            )
        }
    }
    function getCountryCode() {
        return window.location.pathname.split('/')[1]
    }
    function addNavLink(link_text, linkurl, newtab, lastone, lclassname) {
        var li = document.createElement('li')
        if (lclassname) {
            li.className = lclassname
        } else {
            li.className = 'scripts-index-link'
        }
        // 创建新的 <a> 元素
        var a = document.createElement('a')
        a.href = linkurl
        a.innerText = link_text
        if (newtab) {
            a.target = "_blank" // 设置为新窗口打开
        }
        // 将 <a> 元素添加到 <li> 中
        li.appendChild(a)
        // 将 <li> 元素添加到导航栏中
        var nav = document.querySelector('div#site-nav > nav')
        if (nav) {
            if (lastone) {
                nav.append(li)
            } else {
                nav.prepend(li)
            }
        } else {
            logMessage('addNavLink', '导航栏未找到', false)
        }
    }
    //  -------------------------------------------------------------
    //--功能-增加本地中文汉化
    if (getCountryCode() === 'zh-CN') {
        const translatet = new Map()
        translatet.set("Script Sets", "脚本收藏夹")
        translatet.set("Edit", "编辑")
        $("label, span, li, h3, a").each(function () {
            var currentText = $(this).text()
            if (translatet.has(currentText)) {
                $(this).html(translatet.get(currentText))
            }
        })
    }
    //功能-增加自动登录
    async function autoLogin() {
        // 等待登录链接出现
        await waitForElement("span.sign-in-link a[rel=nofollow]")

        let user = ""
        let pwd = ""

        if (!user) {
            Toast("本地尚未储存账号", 1000, '#ff6347', '#ffffff', 'top')
            alert()
            return
        }
        if (!pwd) {
            Toast("本地尚未储存密码", 1000, '#ff6347', '#ffffff', 'top')
            return
        }

        let csrfTokenMeta = document.querySelector("meta[name='csrf-token']")
        if (!csrfTokenMeta) {

            Toast("获取csrf-token失败", 1000, '#ff6347', '#ffffff', 'top')
            return
        }
        let csrfToken = csrfTokenMeta.getAttribute("content")

        let postResp = await fetch("https://greasyfork.org/zh-CN/users/sign_in", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                authenticity_token: csrfToken,
                'user[email]': user,
                'user[password]': pwd,
                'user[remember_me]': '1',
                commit: '登录'
            })
        })

        if (postResp.status !== 200) {
            alert("登录失败，请在控制台查看原因")
            return
        }

        let respText = await postResp.text()
        let parser = new DOMParser()
        let parseLoginHTMLNode = parser.parseFromString(respText, 'text/html')

        if (parseLoginHTMLNode.querySelectorAll(
            ".sign-out-link a[rel=nofollow][data-method='delete']"
        ).length) {
            alert("登录成功，1秒后自动跳转")
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } else {
            alert("登录失败，可能是账号/密码错误，请在控制台查看原因")
        }
    }

    // 等待指定的元素出现
    function waitForElement(selector) {
        return new Promise((resolve) => {
            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) {
                    resolve()
                    observer.disconnect()
                }
            })
            observer.observe(document.body, { childList: true, subtree: true })
        })
    }

    autoLogin()
})()
///--功能-美化网页徽章等 greasyfork.org/scripts/436913
function addbageStyles() {
    const cssMain = `
        .report-link.report-link-abs::before {
            content: "🚩 ";
        }

        .report-link.report-link-abs {
            box-shadow: rgba(221, 46, 68, 0.52) 0px 0px 5px;
            background-color: rgba(36, 36, 36, 0.9);
            border: 0.16em solid rgb(217, 29, 53);
            color: rgb(230, 33, 58) !important;
            padding: 1px 4px 2px 0px;
            letter-spacing: 0.029em;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            scale: 0.9;
        }

        .report-link.report-link-abs:lang(ar), .report-link.report-link-abs:lang(ug), .report-link.report-link-abs:lang(he) {
            direction: ltr;
            margin-right: 90.46%;
        }

        .script-type {
            box-shadow: rgba(221, 160, 15, 0.29) 0px 0px 5px;
            background-color: rgba(36, 36, 36, 0.9);
            border: 0.16em solid rgb(172, 81, 0);
            color: rgb(221, 102, 15) !important;
            padding: 0.8px 0.5ex 2px 2px;
            font-variant: all-petite-caps;
            border-radius: 4px;
            position: relative;
            font-weight: 800;
            margin-left: 1ex;
            font-size: 70%;
            top: -0.2ex;
        }
            .sign-out-link {
 color: rgb(5, 5, 5) !important;
       }
 
 
    `

    GM_addStyle(cssMain)
}


addbageStyles();

