// ==UserScript==
// @name            GreaysFork Enhanced WebHook Sync Settings
// @description    Quickly input script sync information and batch add language codes for multiple countries without the need to click
// @name:zh-CN         GreaysFork 增强WebHook同步设置
// @description:zh-CN  GreaysFork 快速输入脚本同步信息，并批量增加多个国家的语言代码，而不用一个个地点击选择框再去对应的网址。
// @name:zh-TW         GreaysFork 增強WebHook同步設定
// @description:zh-TW  GreaysFork 快速輸入腳本同步資訊，並批量增加多個國家的語言代碼，而不用逐個點擊選擇框再去對應的網址。
// @name:zh-HK         GreaysFork 增強WebHook同步設置
// @description:zh-HK  GreaysFork 快速輸入腳本同步信息，並批量增加多個國家語言代碼，而不用逐個點擊選擇框再去對應的網址。
// @name:ja            GreaysFork WebHook同期設定の強化
// @description:ja     GreaysFork スクリプト同期情報を素早く入力し、複数の国の言語コードを一括で追加します。選択ボックスを一つ一つクリックする必要はありません。
// @name:ko            GreaysFork WebHook 동기화 설정 강화
// @description:ko     GreaysFork 스크립트 동기화 정보를 빠르게 입력하고, 여러 국가의 언어 코드를 한 번에 추가합니다. 선택 상자를 하나하나 클릭할 필요가 없습니다.
// @name:ru            Улучшенные настройки синхронизации WebHook для GreaysFork
// @description:ru     Быстрое ввод данных синхронизации скриптов GreaysFork и массовое добавление языковых кодов нескольких стран без необходимости поочередного выбора из выпадающего списка и перехода по соответствующим ссылкам.
// @name:en            GreaysFork Enhanced WebHook Sync Settings
// @description:en     Quickly input script sync information and batch add language codes for multiple countries without the need to click through each selection box and visit corresponding URLs.
// @name:fr            GreaysFork Amélioration des paramètres de synchronisation WebHook
// @description:fr     Saisie rapide des informations de synchronisation des scripts GreaysFork et ajout en masse des codes de langue pour plusieurs pays sans avoir à sélectionner chaque option individuellement et visiter les URL correspondantes.
// @name:de            GreaysFork Verbesserte WebHook-Synchronisierungseinstellungen
// @description:de     Schnelles Eingeben von Skriptsynchronisierungsinformationen und gleichzeitiges Hinzufügen von Sprachcodes für mehrere Länder, ohne jedes Auswahlfeld einzeln anzuklicken und die entsprechenden URLs zu besuchen.
// @name:vi            Cài đặt đồng bộ WebHook GreaysFork được nâng cao
// @description:vi     Nhập nhanh thông tin đồng bộ hóa kịch bản GreaysFork và thêm hàng loạt mã ngôn ngữ cho nhiều quốc gia mà không cần phải nhấp từng ô chọn và truy cập các URL tương ứng.
// @version      1.1
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @icon         https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/RedFork.svg
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        *://greasyfork.org/*
// @license      MIT
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @namespace   https://github.com/ChinaGodMan/UserScripts
// @modified        2024-9-05 04:29
// ==/UserScript==
(function () {
    'use strict'
    let isCreated1 = null
    let isCreated = null
    const global = {
        syncingfrom: null,//脚本同步地址
        adminUrl: null,//同步地址   
        defaultAttribute: null,//默认匹配@name //用于设置时显示用
        inputModal: null,//设置床窗口
        inputModalTextArea: null,//链接
        inputModalScript: null,//输入同步脚本地址框
        inputModalDefault: null, //默认匹配@name的输入框
        attribute_other: null,///本地化附加信息,用于设置时显示.
        scriptname: null
    }
    document.head.appendChild(document.createElement('style')).textContent = `
    #main-header ~ .width-constraint > .text-content:only-child > ul li {
      font-size: 0.88rem;
    }
    /* Basic Styling for Submit Inputs and Buttons */
.Sync-Modal button {
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
      .Sync-Modal textarea {
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
            .Sync-Modal input {
      border: 0;
      padding: 0;
      font-family: inherit;
      font-weight: 900;
      color: #80ecd3;
      font-size: inherit;
      appearance: none;
      border: none;
      outline: none;
      resize: none;
    }
.custom-label {
    font-weight: bold;
    color: #bfe6a0;
}
  `
    function creatSetModal() {
        if (isCreated) return
    }
    document.body.insertAdjacentHTML('beforeend', `
<div class="Sync-Modal">
    <button id="openSyncButton" style="position:fixed;top:10px;right:10px;z-index:1000;display:none;">Open Modal</button>
    <button id="openSyncOnadminPage" style="position:fixed;top:300px;right:200px;z-index:1000;display:none;">Set sync</button>
    <div id="inputWindow" style="display:none;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);justify-content:center;align-items:center;z-index:1001;">
        <div style="background-color:white;padding:20px;border-radius:5px;width:90%;max-width:1000px;height:90%;max-height:95%;display:flex;flex-direction:column;">
            <center><label id="ScriptName">Source Syncing</label></center>
            <h2 style="color: blue;flex-shrink:0;"><label id="SyncLabel" label for="SyncScript">Source Syncing</label></h2>
            <input type="text" id="SyncScriptForm" style="width:100%;margin-bottom:10px;flex-shrink:0;">
            <h3 style="flex-shrink:0;">
                <label for="default" class="custom-label">Default additional info (language matches @name)</label>
            </h3>
            <input type="text" id="inputdefaultAttribute" style="width:100%;margin-bottom:10px;flex-shrink:0;">
            <h3 style="flex-shrink:0;">For locale (matches @name:XX):</h3>
            <textarea id="urlTextArea" rows="6" style="flex-grow:1;width:100%;resize:none;"></textarea>
            <div style="display:flex;justify-content:flex-end;margin-top:10px;flex-shrink:0;">
                <button id="submitModalButton" style="margin-left:10px;">Update and sync now</button>
                <button id="closeSyncButton" style="margin-left:10px;background-color:red;">Close</button>
            </div>
        </div>
    </div>
</div>
`)
    global.inputModal = document.getElementById('inputWindow')
    global.inputModalScript = document.getElementById('SyncScriptForm')
    global.inputModalDefault = document.getElementById('inputdefaultAttribute')
    global.inputModalTextArea = document.getElementById('urlTextArea')
    const openModalButton = document.getElementById('openSyncButton')
    const closeModalButton = document.getElementById('closeSyncButton')
    const submitModalButton = document.getElementById('submitModalButton')
    const openSyncOnadminPage = document.getElementById('openSyncOnadminPage')
    openModalButton.addEventListener('click', addAdminButtons)
    closeModalButton.addEventListener('click', () => global.inputModal.style.display = 'none')
    submitModalButton.addEventListener('click', handleSubmit)
    function handleSubmit() {
        syncUpdate(SyncScriptForm.value, global.inputModalDefault.value, global.adminUrl)
    }
    openSyncOnadminPage.addEventListener('click', () => {
        openSuperAdmin(window.location.href.replace(/\/[^\/]*$/, ''), "", false)
    })
    //取消鲨臂按钮
    addNavLink("Set sync", '#', false, false, "ScriptSyncLink")
    var customClassName = 'ScriptSyncLink'
    var link = document.querySelector(`.${customClassName} > a`)
    if (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault()
            addAdminButtons()
        })
    }
    if (window.location.pathname.includes("/admin")) {
        //  openSyncOnadminPage.style.display = "block"
        const targetElement = document.querySelector("#script-content > section:nth-child(2) > h3")
        const newLink = document.createElement('a')
        newLink.href = '#'
        newLink.textContent = 'Set sync'
        newLink.addEventListener('click', function (event) {
            event.preventDefault()
            openSuperAdmin(window.location.href.replace(/\/[^\/]*$/, ''), "", false)
        })
        targetElement.insertAdjacentElement('afterend', newLink)
    }
    async function syncUpdate(scriptSyncIdentifier, additionalInfoSyncIdentifier, postUrl) {
        const urls = global.inputModalTextArea.value.trim().split('\n')
        const translateTable = [
            { "code": "aa", "value": "1" },
            { "code": "ab", "value": "2" },
            { "code": "ae", "value": "3" },
            { "code": "af", "value": "4" },
            { "code": "ak", "value": "5" },
            { "code": "am", "value": "6" },
            { "code": "as", "value": "8" },
            { "code": "ast", "value": "9" },
            { "code": "av", "value": "10" },
            { "code": "ay", "value": "11" },
            { "code": "az", "value": "12" },
            { "code": "ba", "value": "13" },
            { "code": "be", "value": "14" },
            { "code": "bh", "value": "16" },
            { "code": "bi", "value": "17" },
            { "code": "bm", "value": "18" },
            { "code": "bn", "value": "19" },
            { "code": "bo", "value": "20" },
            { "code": "br", "value": "21" },
            { "code": "bs", "value": "22" },
            { "code": "ca", "value": "23" },
            { "code": "ce", "value": "24" },
            { "code": "ceb", "value": "25" },
            { "code": "ch", "value": "26" },
            { "code": "chr", "value": "27" },
            { "code": "co", "value": "28" },
            { "code": "cr", "value": "29" },
            { "code": "cs", "value": "30" },
            { "code": "cu", "value": "31" },
            { "code": "cv", "value": "32" },
            { "code": "cy", "value": "33" },
            { "code": "da", "value": "34" },
            { "code": "de", "value": "35" },
            { "code": "dv", "value": "36" },
            { "code": "dz", "value": "37" },
            { "code": "ee", "value": "38" },
            { "code": "el", "value": "39" },
            { "code": "en", "value": "40" },
            { "code": "eo", "value": "41" },
            { "code": "es", "value": "42" },
            { "code": "et", "value": "43" },
            { "code": "eu", "value": "44" },
            { "code": "fa", "value": "45" },
            { "code": "ff", "value": "46" },
            { "code": "fi", "value": "47" },
            { "code": "fil", "value": "48" },
            { "code": "fj", "value": "49" },
            { "code": "fo", "value": "50" },
            { "code": "fr", "value": "51" },
            { "code": "fy", "value": "52" },
            { "code": "ga", "value": "53" },
            { "code": "gd", "value": "54" },
            { "code": "gl", "value": "55" },
            { "code": "gn", "value": "56" },
            { "code": "gsw-berne", "value": "57" },
            { "code": "gu", "value": "58" },
            { "code": "gv", "value": "59" },
            { "code": "ha", "value": "60" },
            { "code": "he", "value": "61" },
            { "code": "hi", "value": "62" },
            { "code": "hmn", "value": "63" },
            { "code": "ho", "value": "64" },
            { "code": "hr", "value": "65" },
            { "code": "ht", "value": "66" },
            { "code": "hu", "value": "67" },
            { "code": "hy", "value": "68" },
            { "code": "hz", "value": "69" },
            { "code": "ia", "value": "70" },
            { "code": "id", "value": "71" },
            { "code": "ie", "value": "72" },
            { "code": "ig", "value": "73" },
            { "code": "ik", "value": "74" },
            { "code": "is", "value": "75" },
            { "code": "it", "value": "76" },
            { "code": "iu", "value": "77" },
            { "code": "ja", "value": "78" },
            { "code": "jv", "value": "79" },
            { "code": "ka", "value": "80" },
            { "code": "kg", "value": "81" },
            { "code": "ki", "value": "82" },
            { "code": "kj", "value": "83" },
            { "code": "kk", "value": "84" },
            { "code": "kl", "value": "85" },
            { "code": "km", "value": "86" },
            { "code": "kn", "value": "87" },
            { "code": "ko", "value": "88" },
            { "code": "kr", "value": "89" },
            { "code": "ks", "value": "90" },
            { "code": "ku", "value": "91" },
            { "code": "kv", "value": "92" },
            { "code": "kw", "value": "93" },
            { "code": "ky", "value": "94" },
            { "code": "la", "value": "95" },
            { "code": "lb", "value": "96" },
            { "code": "lg", "value": "97" },
            { "code": "lif", "value": "98" },
            { "code": "ln", "value": "99" },
            { "code": "lo", "value": "100" },
            { "code": "lt", "value": "101" },
            { "code": "lu", "value": "102" },
            { "code": "lv", "value": "103" },
            { "code": "mg", "value": "104" },
            { "code": "mh", "value": "105" },
            { "code": "mi", "value": "106" },
            { "code": "mk", "value": "107" },
            { "code": "ml", "value": "108" },
            { "code": "mn", "value": "109" },
            { "code": "mo", "value": "110" },
            { "code": "mr", "value": "111" },
            { "code": "ms", "value": "112" },
            { "code": "mt", "value": "113" },
            { "code": "my", "value": "114" },
            { "code": "na", "value": "115" },
            { "code": "nb", "value": "119" },
            { "code": "nd", "value": "120" },
            { "code": "ne", "value": "121" },
            { "code": "ng", "value": "122" },
            { "code": "nl", "value": "118" },
            { "code": "nn", "value": "124" },
            { "code": "no", "value": "125" },
            { "code": "nr", "value": "126" },
            { "code": "nv", "value": "127" },
            { "code": "ny", "value": "128" },
            { "code": "oc", "value": "129" },
            { "code": "pa", "value": "131" },
            { "code": "pi", "value": "132" },
            { "code": "ps", "value": "133" },
            { "code": "pt", "value": "134" },
            { "code": "qu", "value": "135" },
            { "code": "rm", "value": "136" },
            { "code": "rn", "value": "137" },
            { "code": "ro", "value": "138" },
            { "code": "ru", "value": "139" },
            { "code": "rw", "value": "140" },
            { "code": "sa", "value": "141" },
            { "code": "sc", "value": "142" },
            { "code": "sd", "value": "143" },
            { "code": "sg", "value": "144" },
            { "code": "sh", "value": "145" },
            { "code": "si", "value": "146" },
            { "code": "sk", "value": "149" },
            { "code": "sl", "value": "150" },
            { "code": "sm", "value": "151" },
            { "code": "sn", "value": "152" },
            { "code": "so", "value": "153" },
            { "code": "sq", "value": "154" },
            { "code": "sr", "value": "155" },
            { "code": "ss", "value": "156" },
            { "code": "st", "value": "157" },
            { "code": "su", "value": "158" },
            { "code": "sv", "value": "159" },
            { "code": "sw", "value": "160" },
            { "code": "ta", "value": "161" },
            { "code": "te", "value": "162" },
            { "code": "tg", "value": "163" },
            { "code": "th", "value": "165" },
            { "code": "ti", "value": "166" },
            { "code": "tk", "value": "167" },
            { "code": "tl", "value": "168" },
            { "code": "tn", "value": "169" },
            { "code": "to", "value": "170" },
            { "code": "tr", "value": "171" },
            { "code": "ts", "value": "172" },
            { "code": "tt", "value": "173" },
            { "code": "tw", "value": "174" },
            { "code": "ty", "value": "175" },
            { "code": "ug", "value": "176" },
            { "code": "uk", "value": "177" },
            { "code": "ur", "value": "178" },
            { "code": "uz", "value": "179" },
            { "code": "ve", "value": "180" },
            { "code": "vi", "value": "181" },
            { "code": "vo", "value": "182" },
            { "code": "wa", "value": "183" },
            { "code": "wo", "value": "184" },
            { "code": "xh", "value": "185" },
            { "code": "yi", "value": "186" },
            { "code": "zh-CN", "value": "187" },
            { "code": "zh-TW", "value": "188" },
            { "code": "zu", "value": "189" }
        ]
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
        const formDataObj = {
            _method: 'patch',
            authenticity_token: csrfToken,
            'script[sync_identifier]': scriptSyncIdentifier,
            'script[sync_type]': 'webhook',
        }
        if (additionalInfoSyncIdentifier) {
            formDataObj['additional_info_sync[0][attribute_default]'] = 'true'
            formDataObj['additional_info_sync[0][sync_identifier]'] = additionalInfoSyncIdentifier
            formDataObj['additional_info_sync[0][value_markup]'] = 'markdown'
        }
        urls.forEach((url, index) => {
            const localeKey = extractLocaleKey(url)
            const locale = translateTable.find(entry => entry.code === localeKey)
            const cleanUrl = url.replace(/##.*/, '')
            formDataObj[`additional_info_sync[${index + 1}][attribute_default]`] = 'false'
            formDataObj[`additional_info_sync[${index + 1}][locale]`] = locale ? locale.value : ''
            formDataObj[`additional_info_sync[${index + 1}][sync_identifier]`] = cleanUrl
            formDataObj[`additional_info_sync[${index + 1}][value_markup]`] = 'markdown'
        })
        formDataObj['update-and-sync'] = '更新设置并立即同步'
        const formData = new URLSearchParams(formDataObj)
        console.log(formData.toString())
        const postResp = await fetch(postUrl + '/sync_update', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData
        })
        const responseText = await postResp.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(responseText, 'text/html')
        const specificElement = doc.querySelector("body > div.width-constraint > p")
        // 创建并插入弹出框的 HTML
        document.body.insertAdjacentHTML('beforeend', `
  <div id="custom-popup" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);padding:20px;background-color:#fff;border:1px solid #ccc;box-shadow:0 0 10px rgba(0,0,0,0.1);z-index:9999;">
    ${specificElement ? specificElement.innerHTML : 'Element not found'}
    <button id="close-popup" style="top: 10px;  right: 10px;  color: red;">&times;</button>
  </div>
`)
        document.getElementById('close-popup').onclick = function () {
            document.getElementById('custom-popup').remove()
        }
        setTimeout(function () {
            const popup = document.getElementById('custom-popup')
            if (popup) {
                popup.remove()
            }
        }, 5000)
        //  global.inputModal.style.display = 'none'
        //alert((postResp.ok || postResp.status === 302) ? global.scriptname + ' Sync Successful!' : 'Synchronization failed, please check the input.')
    }
    function extractLocaleKey(url) {
        let localeKey = url.includes('##') ? url.match(/##.*\((.*?)\)$/) || url.match(/##(.*?)$/) : url.match(/README_(.*?)\.md/)
        return localeKey ? localeKey[1] : null
    }
    //----设置主窗口
    function addAdminButtons() {
        fetch('https://greasyfork.org/zh-CN/users/webhook-info')
            .then(response => response.ok ? response.text() : Promise.reject('Network response was not ok'))
            .then(data => createModalWindow(parseLinks(data)))
            .catch(error => console.error('Fetch operation failed:', error))
    }
    function parseLinks(data) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        const firstUl = doc.querySelector('ul')
        if (!firstUl) return []
        return Array.from(firstUl.querySelectorAll('li')).map(li => {
            const links = li.querySelectorAll('a')
            return {
                firstHref: links[0]?.href || '',
                firstTitle: links[0]?.textContent || '',
                secondHref: links[1]?.href || '',
                secondTitle: links[1]?.textContent || ''
            }
        })
    }
    function openSuperAdmin(url, syncjs, isFetch = false) {
        global.adminUrl = url
        if (isFetch) {
            updateWebHookInfo(url + "/admin")
        } else {
            updateWebHookInfo()
        }
        global.inputModalScript.value = global.syncingfrom
        global.inputModalDefault.value = global.defaultAttribute
        global.inputModalTextArea.value = global.attribute_other
        global.inputModal.style.display = 'flex'
        document.querySelector("h2 label[for='SyncScript']").textContent = global.scriptname + "←Source Syncing"
        document.getElementById("ScriptName").textContent = global.scriptname
    }
    function createModalWindow(linksData) {
        const modalHtml = `
        <center>
         <div class="Sync-Modal">
    <div id="adminModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 50px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: transparent;">
        <div style="background-color: #fefefe; padding: 20px; border: 1px solid #888; width: 40%; max-width: 100%;">
            <span id="closeLinkModal" style="color: red; float: right; font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
            <h2>Here are the scripts you have already set up to sync</h2>
            <ul id="linksList" style="list-style-type: none; padding: 0; max-height: 60vh; overflow-y: auto;">
            </ul>
        </div>
    </div>
     </div>
       </center>
`
        document.body.insertAdjacentHTML('beforeend', modalHtml)
        const modal = document.getElementById('adminModal')
        const closeModal = document.getElementById('closeLinkModal')
        const linksList = document.getElementById('linksList')
        //    
        linksData.forEach(link => {
            const listItem = document.createElement('li')
            listItem.style.marginBottom = '10px'
            listItem.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center;">
    <a href="${link.firstHref}" target="_blank" style="text-decoration: none; color: blue;">${link.firstTitle}</a>
    <div>
      <a href="${link.secondHref}" target="_blank" style="text-decoration: none; color: blue;">Source Syncing</a>
        <!--<button style="margin-left: 10px;" onclick="window.open('${link.firstHref}')">View</button>
        -->
         <button class="super-admin-btn" style="margin-left: 10px;" onclick="openSuperAdmin('${link.firstHref}/admin')">Set Sync</button>
    </div>
</div>
        `
            linksList.appendChild(listItem)
            listItem.querySelector('.super-admin-btn').addEventListener('click', () => {
                openSuperAdmin(link.firstHref, link.secondHref, true)
            })
        })
        modal.style.display = 'block'
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
            modal.remove()
        })
        window.addEventListener('click', (event) => {
            return//不关闭
            if (event.target === modal) {
                modal.style.display = 'none'
                modal.remove()
            }
        })
    }
    function updateStateFromDOM(dom) {
        const syncInputElement = dom.getElementById('script_sync_identifier')
        if (syncInputElement) {
            global.syncingfrom = syncInputElement.value
        } else {
            console.warn("Input element with id 'script_sync_identifier' not found")
        }
        const defaultInputElement = dom.querySelector('input#script-version-additional-info-0.previewable')
        if (defaultInputElement) {
            global.defaultAttribute = defaultInputElement.value
        } else {
            console.warn("Default input element not found")
        }
        const inputElements = dom.querySelectorAll('input[id^="script-version-additional-info-"].previewable')
        global.scriptname = dom.querySelector("#script-info > header > h2").textContent
        global.attribute_other = ''
        inputElements.forEach((inputElement, index) => {
            if (inputElement.id !== "script-version-additional-info-0") {
                if (global.attribute_other) {
                    global.attribute_other += '\n'
                }
                const previousSibling = inputElement.previousElementSibling
                const selectElement = previousSibling?.previousElementSibling
                const selectedText = selectElement?.options[selectElement.selectedIndex]?.text
                global.attribute_other += `${inputElement.value}##${selectedText}`
            }
        })
    }
    function updateWebHookInfo(url = null) {
        if (url) {
            try {
                const xhr = new XMLHttpRequest()
                xhr.open("GET", url, false) // `false` 使请求同步
                xhr.send(null)
                if (xhr.status >= 200 && xhr.status < 300) {
                    const htmlText = xhr.responseText
                    const parser = new DOMParser()
                    const doc = parser.parseFromString(htmlText, 'text/html')
                    updateStateFromDOM(doc)
                    console.log("Data fetched from URL and parsed:", global)
                } else {
                    throw new Error(`Network response was not ok: ${xhr.statusText}`)
                }
            } catch (error) {
                console.error("Error fetching data from URL:", error)
            }
        } else {
            updateStateFromDOM(document)
            console.log("Data fetched from current page:", global)
        }
    }
    function addNavLink(link_text, linkurl, newtab, lastone, lclassname) {
        var li = document.createElement('li')
        if (lclassname) {
            li.className = lclassname
        } else {
            li.className = 'scripts-index-link'
        }
        var a = document.createElement('a')
        a.href = linkurl
        a.innerText = link_text
        li.appendChild(a)
        var nav = document.querySelector('div#site-nav > nav')
        if (nav) {
            if (lastone) {
                nav.append(li)
            } else {
                nav.prepend(li)
            }
        }
    }
})()
