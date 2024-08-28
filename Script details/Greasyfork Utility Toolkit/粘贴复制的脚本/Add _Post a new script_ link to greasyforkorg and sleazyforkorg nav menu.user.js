// ==UserScript==
// @name        Add "Post a new script" link to greasyfork.org and sleazyfork.org nav menu
// @namespace   Violentmonkey Scripts
// @match       https://sleazyfork.org/*
// @match       https://greasyfork.org/*
// @grant       none
// @version     1.0
// @author      -
// @description Add "Post a new script" link to greasyfork.org and sleazyfork.org nav menu - 8/28/2022, 10:16:09 PM
// @downloadURL https://update.greasyfork.org/scripts/450357/Add%20%22Post%20a%20new%20script%22%20link%20to%20greasyforkorg%20and%20sleazyforkorg%20nav%20menu.user.js
// @updateURL https://update.greasyfork.org/scripts/450357/Add%20%22Post%20a%20new%20script%22%20link%20to%20greasyforkorg%20and%20sleazyforkorg%20nav%20menu.meta.js
// ==/UserScript==


// I got these by looking at the page title on greasyfork.org, so if something wasn't translated, it was in English.
link_name_translated = {
  "ar": "Post a new script",
  "bg": "Публикувай нов скрипт",
  "cs": "Post a new script",
  "da": "Post a new script",
  "de": "Neues Skript veröffentlichen",
  "el": "Δημοσίευση νέου κώδικα",
  "en": "Post a new script",
  "eo": "Post a new script",
  "es": "Publicar un nuevo script",
  "fi": "Post a new script",
  "fr": "Publier un nouveau script",
  "fr-CA": "Publier un nouveau script",
  "he": "Post a new script",
  "hu": "Post a new script",
  "id": "Post a new script",
  "it": "Pubblica un nuovo script",
  "ja": "スクリプトを投稿",
  "ko": "새 스크립트 업로드",
  "nb": "Post a new script",
  "nl": "Nieuw scripts publiceren",
  "pl": "Opublikuj nowy skrypt",
  "pt-BR": "Postar um novo script",
  "ro": "Postează un nou script",
  "ru": "Опубликовать новый скрипт",
  "sk": "Pridať nový skript",
  "sr": "Post a new script",
  "sv": "Post a new script",
  "th": "Post a new script",
  "tr": "Yeni script paylaş",
  "uk": "Додати новий скрипт",
  "ug": "Post a new script",
  "vi": "Post a new script",
  "zh-CN": "发布新脚本",
  "zh-TW": "發佈新腳本",
};

country_code = window.location.pathname.split('/')[1];

if (! (country_code in link_name_translated)) {
  country_code = "en"; // if you type random crap into the country code in the url, the website defaults to English
}

setTimeout(function() {
  li = document.createElement("li");
  li.className = "scripts-index-link";
  a = document.createElement("a");
  a.href = "/" + country_code + "/script_versions/new";
  a.innerText = link_name_translated[country_code];
  li.appendChild(a);
  document.querySelector("div#site-nav > nav").prepend(li);
}, 100);