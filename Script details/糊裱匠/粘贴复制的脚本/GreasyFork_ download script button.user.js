// ==UserScript==
// @name          GreasyFork: download script button
// @description   If you have a script manager and you want to download some script without installing it, this script will help
// @author        Konf
// @version       2.3.1
// @namespace     https://greasyfork.org/users/424058
// @icon          https://i.imgur.com/OIGiyQc.png
// @match         https://greasyfork.org/*/scripts/*
// @match         https://sleazyfork.org/*/scripts/*
// @match         https://web.archive.org/web/*/https://greasyfork.org/*/scripts/*
// @match         https://web.archive.org/web/*/https://sleazyfork.org/*/scripts/*
// @compatible    Chrome
// @compatible    Opera
// @compatible    Firefox
// @run-at        document-end
// @grant         GM_addStyle
// @noframes
// @downloadURL https://update.greasyfork.org/scripts/420872/GreasyFork%3A%20download%20script%20button.user.js
// @updateURL https://update.greasyfork.org/scripts/420872/GreasyFork%3A%20download%20script%20button.meta.js
// ==/UserScript==

/* jshint esversion: 8 */

(function() {
  'use strict';

  const i18n = {
    download: 'download',
    downloadWithoutInstalling: 'downloadWithoutInstalling',
    failedToDownload: 'failedToDownload',
  };

  const translate = (function() {
    const userLang = location.pathname.split('/')[1];
    const strings = {
      'en': {
        [i18n.download]: 'Download ⇩',
        [i18n.downloadWithoutInstalling]: 'Download without installing',
        [i18n.failedToDownload]:
          'Failed to download the script. There is might be more info in the browser console',
      },
      'ru': {
        [i18n.download]: 'Скачать ⇩',
        [i18n.downloadWithoutInstalling]: 'Скачать не устанавливая',
        [i18n.failedToDownload]:
          'Не удалось скачать скрипт. Больше информации может быть в консоли браузера',
      },
      'zh-CN': {
        [i18n.download]: '下载 ⇩',
        [i18n.downloadWithoutInstalling]: '下载此脚本',
        [i18n.failedToDownload]: '无法下载此脚本',
      },
    };

    return id => (strings[userLang] || strings.en)[id] || strings.en[id];
  }());

  const installArea = document.querySelector('div#install-area');
  const installBtns = installArea?.querySelectorAll(':scope > a.install-link');
  const installHelpLinks = document.querySelectorAll('a.install-help-link');
  const suggestion = document.querySelector('div#script-feedback-suggestion');
  const libraryRequire = document.querySelector('div#script-content > p > code');
  const libraryVersion = document.querySelector(
    '#script-stats > dd.script-show-version > span'
  );

  // if a script/style is detected
  if (
    installArea &&
    (installBtns.length > 0) &&
    (installBtns.length === installHelpLinks.length)
  ) {
    for (let i = 0; i < installBtns.length; i++) {
      mountScriptDownloadButton(installBtns[i], installArea, installHelpLinks[i]);
    }
  }
  // or maybe a library
  else if (suggestion && libraryRequire) {
    mountLibraryDownloadButton(suggestion, libraryRequire, libraryVersion);
  }

  function mountScriptDownloadButton(
    installBtn,
    installArea,
    installHelpLink,
  ) {
    if (!installBtn.href) throw new Error('script href is not found');

    // https://img.icons8.com/pastel-glyph/64/ffffff/download.png
    // array to fold the string in a code editor
    const downloadIconBase64 = [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaX',
      'HeAAAABmJLR0QA/wD/AP+gvaeTAAABgUlEQVR4nO3ZTU6DUAAE4HnEk+jWG3TrHV',
      'wY3XoEt23cGleamtRtTbyPS3sCV0bXjptHRAIEsM/hZ76kCZRHGaZAGwDMzMzMbJ',
      '6CasMkMwBncXYbQvhSZZEgecEf56ocmWrDAA4L00eqEMoCBsEFqAOouQB1ADUXoA',
      '6g5gLUAdRcgDqAmgtQB1BzAeoAakkLIHlN8pPkDcnWd59IBpK3cd1VyoxJkfwo3P',
      'V5KJZAcllYtiy8H+LY3HvKjKlPgU1h+hLAuulIiMvWcWzVZ4xL/Dbv+Nsjyax8BM',
      'Sx96Wxm3jzdLwaSliVCpjezucqzmuSfKuZJkvXi0moORKqTOebL2tRwnR3PtdQwv',
      'R3PldRgmznlc8GA4DTOPscQqAqy6x1+X8+6Ke5yfNxIE9z6/TN1+XCM4inuQ165Z',
      'vHz04DF6AOoOYC1AHUXIA6gNpBz/UWJK/2muTvFn1W6lvASXyNXpdTYJcsxf69th',
      '3Y5QjYAiCA485x/tcLgCd1CDMzMzMbum8+xtkWw6QCvwAAAABJRU5ErkJggg==',
    ].join('');

    GM_addStyle([`
      .GF-DSB__script-download-button {
        position: relative;
        padding: 8px 22px;
        cursor: pointer;
        border: none;
        background: #0F750F;
        transition: box-shadow 0.2s;
      }

      .GF-DSB__script-download-button:hover,
      .GF-DSB__script-download-button:focus {
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
      }


      .GF-DSB__script-download-icon {
        position: absolute;
      }

      .GF-DSB__script-download-icon--download {
        width: 30px;
        height: 30px;
        top: 4px;
        left: 7px;
      }

      .GF-DSB__script-download-icon--loading,
      .GF-DSB__script-download-icon--loading:after {
        border-radius: 50%;
        width: 16px;
        height: 16px;
      }

      .GF-DSB__script-download-icon--loading {
        top: 8px;
        left: 11px;
        border-top: 3px solid rgba(255, 255, 255, 0.2);
        border-right: 3px solid rgba(255, 255, 255, 0.2);
        border-bottom: 3px solid rgba(255, 255, 255, 0.2);
        border-left: 3px solid #ffffff;
        transform: translateZ(0);
        object-position: -99999px;
        animation: GF-DSB__script-download-loading-icon 1.1s infinite linear;
      }

      @keyframes GF-DSB__script-download-loading-icon {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `][0]);

    const b = document.createElement('a');
    const bIcon = document.createElement('img');

    b.href = '#';
    b.title = translate(i18n.downloadWithoutInstalling);
    b.draggable = false;
    b.className = 'GF-DSB__script-download-button';

    bIcon.src = downloadIconBase64;
    bIcon.draggable = false;
    bIcon.className =
      'GF-DSB__script-download-icon GF-DSB__script-download-icon--download';

    installHelpLink.style.position = 'relative'; // shadows bugfix

    b.appendChild(bIcon);
    installArea.insertBefore(b, installHelpLink);

    // against doubleclicks
    let isFetchingAllowed = true;

    async function clicksHandler(ev) {
      ev.preventDefault();

      setTimeout(() => b === document.activeElement && b.blur(), 250);

      if (isFetchingAllowed === false) return;

      isFetchingAllowed = false;
      bIcon.className =
        'GF-DSB__script-download-icon GF-DSB__script-download-icon--loading';

      try {
        let scriptName = installBtn.dataset.scriptName;

        if (installBtn.dataset.scriptVersion) {
          scriptName += ` ${installBtn.dataset.scriptVersion}`;
        }

        await downloadScript({
          fileExt: `.user.${installBtn.dataset.installFormat || 'txt'}`,
          href: installBtn.href,
          name: scriptName,
        });
      } catch (e) {
        console.error(e);
        alert(`${translate(i18n.failedToDownload)}: \n${e}`);
      } finally {
        setTimeout(() => {
          isFetchingAllowed = true;
          bIcon.className =
            'GF-DSB__script-download-icon GF-DSB__script-download-icon--download';
        }, 300);
      }
    }

    b.addEventListener('click', clicksHandler);
    b.addEventListener('auxclick', e => e.button === 1 && clicksHandler(e));
  }

  function mountLibraryDownloadButton(suggestion, libraryRequire, libraryVersion) {
    let [
      libraryHref,
      libraryName,
    ] = libraryRequire.innerText.match(
      /\/\/ @require (https:\/\/.+\/scripts\/\d+\/\d+\/(.*)\.js)/
    ).slice(1);

    // this probably is completely useless but whatever
    if (!libraryHref) throw new Error('library href is not found');

    libraryName = decodeURIComponent(libraryName);

    if (libraryVersion?.innerText) libraryName += ` ${libraryVersion.innerText}`;

    GM_addStyle([`
      .GF-DSB__library-download-button {
        transition: box-shadow 0.2s;
      }

      .GF-DSB__library-download-button--loading {
        animation: GF-DSB__loading-text 1s infinite linear;
      }

      @keyframes GF-DSB__loading-text {
        50% {
          opacity: 0.4;
        }
      }
    `][0]);

    const b = document.createElement('a');

    b.href = '#';
    b.draggable = false;
    b.innerText = translate(i18n.download);
    b.className = 'GF-DSB__library-download-button';

    suggestion.appendChild(b);

    // against doubleclicks
    let isFetchingAllowed = true;

    async function clicksHandler(ev) {
      ev.preventDefault();

      setTimeout(() => b === document.activeElement && b.blur(), 250);

      if (isFetchingAllowed === false) return;

      isFetchingAllowed = false;
      b.className =
        'GF-DSB__library-download-button GF-DSB__library-download-button--loading';

      try {
        await downloadScript({
          fileExt: '.js',
          href: libraryHref,
          name: libraryName,
        });
      } catch (e) {
        console.error(e);
        alert(`${translate(i18n.failedToDownload)}: \n${e}`);
      } finally {
        setTimeout(() => {
          isFetchingAllowed = true;
          b.className = 'GF-DSB__library-download-button';
        }, 300);
      }
    }

    b.addEventListener('click', clicksHandler);
    b.addEventListener('auxclick', e => e.button === 1 && clicksHandler(e));
  }

  // utils --------------------------------------------------------------------

  // Is needed because you can't fetch a new format script link
  // due to different domain cors restriction...
  function convertScriptHrefToAnOldFormat(href) {
    const regex = /https:\/\/update\.(\w+\.org)\/scripts\/(\d+)\/(\d+\/)?(.+)/;
    const match = href.match(regex);

    if (!match) throw new Error("can't convert href to an old format");

    const domain = match[1];
    const scriptId = match[2];
    const version = match[3] ? `?version=${match[3]}` : '';
    const scriptName = match[4];

    return `https://${domain}/scripts/${scriptId}/code/${scriptName}${version}`;
  }

  async function downloadScript({
    fileExt = '.txt',
    href,
    name = Date.now(),
  } = {}) {
    if (!href) throw new Error('Script href is missing');

    const fetchErrors = [];
    let linksToTry = [];
    let url;

    // "web.archive" part has been done poorly and unreliable
    if (location.hostname === 'web.archive.org') {

      // Get a "web.archive" link prefix. Full link example:
      // https://web.archive.org/web/20220827221543/https://greasyfork...
      // Prefix:
      // https://web.archive.org/web/20220827221543
      const webArchivePrefix =
        location.href.match(/(.+)\/http(s|):\/\/(greas|sleaz)yfork\.org/)[1];

      if (!webArchivePrefix) throw new Error('Failed to get script href');

      // "id_" part is needed to get a clean file from the webarchive.
      // By default there are some js metadata that will break the script.
      // See: https://archive.org/post/1044859
      // Possible alternative is to cut off these strings manually
      // hoping that there are fixed amount of them, or maybe using regex
      linksToTry.push(webArchivePrefix + 'id_/' + href);

    } else {
      // Consider first link as a main attempt. Second one is
      // needed just for some unknown edge case scenarios. See:
      // https://greasyfork.org/scripts/420872/discussions/216921
      linksToTry = [
        convertScriptHrefToAnOldFormat(href),
        href,
      ];
    }

    for (const scriptHref of linksToTry) {
      try {
        const response = await fetch(scriptHref);

        if (response.status !== 200) {
          throw new Error(`Bad response: ${response.status}`);
        }

        url = window.URL.createObjectURL(await response.blob());

        break;
      } catch (e) {
        fetchErrors.push(e);
      }
    }

    if (!url) {
      fetchErrors.forEach(e => console.error(e));

      throw new Error('Failed to fetch. See console');
    }

    const a = document.createElement('a');

    a.href = url;
    a.download = `${name}${fileExt}`;
    document.body.appendChild(a); // is needed due to firefox bug
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  }
}());
