// ==UserScript==
// @name          Greasyfork in your language
// @description   Whenever a link to localized greasyfork page is clicked, redirect it to the specified language
// @namespace     wOxxOm.scripts
// @author        wOxxOm
// @version       3.0.8
// @match         https://greasyfork.org/*
// @exclude       https://greasyfork.org/system/*
// @exclude       https://greasyfork.org/*.user.css*
// @run-at        document-start
// @grant         GM_getValue
// @grant         GM_setValue
// @downloadURL https://update.greasyfork.org/scripts/6245/Greasyfork%20in%20your%20language.user.js
// @updateURL https://update.greasyfork.org/scripts/6245/Greasyfork%20in%20your%20language.meta.js
// ==/UserScript==

var language = GM_getValue('language', 'en');

maybeRedirect(location);

window.addEventListener('load', function _() {
  window.removeEventListener('load', _);
  var _timer, _title;
  document.getElementById('language-selector-locale').addEventListener('change', function() {
    GM_setValue('language', this.value);
    _title = _title || this.title;
    this.title = this.value + ' saved in ' + GM_info.script.name;
    clearTimeout(_timer);
    _timer = setTimeout(function() {
      this.title = _title;
      _title = null;
    }, 5000);
  });
});

window.addEventListener('mousedown', function(e) {
  var a = e.target.closest('a');
  if (a &&
      a.origin === 'https://greasyfork.org' &&
      a.pathname.lastIndexOf('/system/', 0) < 0 &&
      !a.pathname.match(/\/code\/.*?\.user\.(js|css)/))
    maybeRedirect(a);
}, true);

function makeRedirectedUrl(url) {
  var m = url.href.split('/');
  if (!/^\w\w(?:-\w\w)?$/.test(m[3]))
    m.splice(3, 0, '');
  if (m[3] === language)
    return url.href;
  m[3] = language;
  var newUrl = m.join('/').replace(/&?locale_override[^&]*/, '').replace(/\?$/, '');
  var noOvr = m[4] === 'forum' || m[4] === 'scripts' && /^\D|^$/.test(m[5]);
  return noOvr ? newUrl : newUrl + (newUrl.indexOf('?') > 0 ? '&' : '?') + 'locale_override=1';
}

function maybeRedirect(url) {
  var newUrl = makeRedirectedUrl(url);
  if (newUrl === url.href ||
     document.referrer && makeRedirectedUrl({href: document.referrer}) === newUrl)
    return;
  url.href = newUrl;
}
