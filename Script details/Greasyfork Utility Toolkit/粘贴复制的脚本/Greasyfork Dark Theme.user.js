// ==UserScript==
// @name           Greasyfork Dark Theme
// @name:en        Greasyfork Dark Theme
// @name:vi        Giao diện tối Greasyfork
// @name:zh-CN     Greasyfork 暗黑主题
// @name:zh-TW     Greasyfork 暗黑主題
// @name:ja        Greasyfork ダークテーマ
// @name:ko        Greasyfork 다크 테마
// @name:es        Tema Oscuro Greasyfork
// @name:ru        Темная тема Greasyfork
// @name:id        Tema Gelap Greasyfork
// @name:hi        Greasyfork डार्क थीम
// @namespace      http://tampermonkey.net/
// @version        1.7.0
// @description    A sleek and modern dark theme for Greasyfork, with enhanced visuals and readability.
// @description:en A sleek and modern dark theme for Greasyfork, with enhanced visuals and readability.
// @description:vi Giao diện tối hiện đại cho Greasyfork, với hình ảnh và khả năng đọc được cải thiện.
// @description:zh-CN 为 Greasyfork 打造的时尚现代暗黑主题，增强了视觉效果和可读性。
// @description:zh-TW 為 Greasyfork 打造的時尚現代暗黑主題，增強了視覺效果和可讀性。
// @description:ja Greasyfork の洗練されたモダンなダークテーマ。視覚効果と可読性が向上しました。
// @description:ko Greasyfork를 위한 세련되고 현대적인 다크 테마로, 향상된 시각 효과와 가독성을 제공합니다.
// @description:es Un tema oscuro elegante y moderno para Greasyfork, con imágenes y legibilidad mejoradas.
// @description:ru Изящная и современная темная тема для Greasyfork с улучшенными визуальными эффектами и удобочитаемостью.
// @description:id Tema gelap yang ramping dan modern untuk Greasyfork, dengan visual dan keterbacaan yang ditingkatkan.
// @description:hi Greasyfork के लिए एक आकर्षक और आधुनिक डार्क थीम, जिसमें बेहतर विजुअल और पठनीयता है।
// @author         RenjiYuusei
// @license        GPL-3.0-only
// @icon           https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @match          https://greasyfork.org/*
// @match          https://sleazyfork.org/*
// @grant          GM_addStyle
// @downloadURL https://update.greasyfork.org/scripts/503243/Greasyfork%20Dark%20Theme.user.js
// @updateURL https://update.greasyfork.org/scripts/503243/Greasyfork%20Dark%20Theme.meta.js
// ==/UserScript==
(function() {
    'use strict';
 
    const headerBkg = 'rgb(29, 32, 37)';
    const dark1 = 'rgb(29, 32, 37)';
    const dark2 = 'rgb(40, 44, 52)';
    const dark3 = 'rgb(37, 41, 49)';
    const dark4 = 'rgb(33, 36, 43)';
    const blue1 = 'rgb(82, 139, 255)';
    const blue2 = 'rgb(97, 175, 239)';
    const bluePool = 'rgb(86, 182, 194)';
    const lavender = 'rgb(198, 120, 221)';
    const green = 'rgb(152, 195, 121)';
    const pink = 'rgb(224, 108, 117)';
    const lightBrown = 'rgb(209, 154, 102)';
    const red = 'rgb(190, 80, 70)';
    const yellow = 'rgb(235, 215, 17)';
    const lightYellow = 'rgb(229, 192, 123)';
    const blueIce = 'rgb(171, 178, 191)';
    const lightGray = 'rgb(204, 204, 204)';
    const lightGreen = 'rgba(130, 255, 130, 0.6)';
    const lightRed = 'rgba(255, 130, 130, 0.6)';
    const translucent = 'rgba(255, 255, 255, .3)';
    const black = 'rgba(0, 0, 0, 1)';
    const dBorderRadius = '5px 0 100px 1px';
    const wrapCode = false; // Set to true to wrap code in container
    const modHeaders = true; // Set to true to apply to headers
    const invertBkgHPP = false; // Set to true to invert background color for Greasyfork++ header
    const modScrollbars = true; // Set to true to apply to scrollbars
 
    // CSS styles
    const css = `
    :root {
      --dark-1: ${dark1} !important;
      --dark-2: ${dark2} !important;
      --dark-3: ${dark3} !important;
      --dark-4: ${dark4} !important;
      --blue-1: ${blue1} !important;
      --blue-2: ${blue2} !important;
      --blue-pool: ${bluePool} !important;
      --lavender: ${lavender} !important;
      --green: ${green} !important;
      --pink:  ${pink} !important;
      --light-brown: ${lightBrown} !important;
      --red: ${red} !important;
      --yellow: ${yellow} !important;
      --light-yellow: ${lightYellow} !important;
      --blue-ice: ${blueIce} !important;
      --light-gray: ${lightGray} !important;
      --light-green: ${lightGreen} !important;
      --light-red: ${lightRed} !important;
      --translucent: ${translucent} !important;
      --black: ${black} !important;
      --default-border-radius: ${dBorderRadius} !important;
    }
    .bradius {
      border-radius: var(--default-border-radius);
    }
    body {
      background-color: var(--dark-3) !important;
      color: var(--light-gray) !important;
    }
    #main-header,
    #main-header a,
    #main-header a:visited,
    #main-header a:active {
      color: var(--light-gray) !important;
    }
    nav nav {
      background-color: var(--dark-3) !important;
      border: 1px solid var(--dark-2) !important;
      box-shadow: 0 0 5px var(--dark-2) !important;
    }
    a:not(.install-link, .install-help-link) {
      color: var(--pink) !important;
    }
    #main-header {
      ${modHeaders ? 'background-image: none !important;' : ''}
      background-color: ${headerBkg} !important;
    }
    .script-list,
    .user-list,
    .text-content,
    .discussion-list,
    .list-option-group ul,
    #script-info,
    .discussion-read,
    #discussion-locale{
      ${modHeaders ? 'background-image: unset !important;' : ''}
      background-color: var(--dark-1) !important;
      box-shadow: 0 0 5px var(--dark-2) !important;
      border: 1px solid var(--dark-2) !important;
      border-radius: var(--default-border-radius) !important;
    }
    .block-button {
      background-color: var(--dark-2) !important;
      border: 1px solid var(--dark-3) !important;
      color: var(--light-gray) !important;
    }
    .user-content,
    #script_version_code {
      background-image: unset !important;
      background-color: var(--dark-1) !important;
      border-color: var(--dark-2) !important;
    }
    .code-container {
      border-color: var(--dark-3) !important;
      border-style: solid !important;
    }
    pre.prettyprint {
      border: none !important;
    }
    #script_version_code {
      color: var(--light-gray) !important;
    }
    .default-input,
    .sidebar-search input[type="search"],
    .home-search input[type="search"],
    .list-option-button,
    input[type="search"],
    #language-selector-locale,
    form.new_user input[type="text"],
    form.new_user input[type="email"],
    form.new_user input[type="password"],
    #favorite-groups {
      background-color: var(--dark-4) !important;
      border: 1px solid var(--dark-2) !important;
      color: var(--blue-ice) !important;
      border-radius: var(--default-border-radius) !important;
    }
    .notice {
      background-color: var(--dark-1);
      border-left: 6px solid var(--blue-pool);
    }
    form.external-login-form,
    form.new_user {
      background-color: var(--dark-3);
      border: 1px solid var(--dark-2);
    }
    form.new_user input[type="submit"] {
      background-color: var(--blue-pool);
      color: #fff;
      background-image: unset;
    }
    .list-option-button:hover,
    .list-option-button:focus {
      background-image: unset !important;
      background-color: var(--dark-2) !important;
    }
    .sidebar-search input[type="search"]:focus-visible,
    .home-search input[type="search"]:focus-visible {
      background-color: var(--dark-3) !important;
      border: 1px solid var(--blue-pool) !important;
      outline: none !important;
    }
    input[type="submit"] {
      background-color: var(--dark-3) !important;
      color: var(--light-gray) !important;
      border: 1px solid var(--dark-2) !important;
    }
    input[type="submit"]:hover {
      background-color: var(--dark-2) !important;
    }
    .sidebar-search input[type="search"] {
      font-size: 14px !important;
    }
    .list-option-group ul {
      background-color: var(--dark-1) !important;
    }
    .list-option-group .list-current,
    .tabs .current {
      border-color: var(--red) !important;
      background-image: unset !important;
      background-color: var(--dark-2) !important;
    }
    .list-option-group a:hover,
    .list-option-group a:focus {
      background-image: unset !important;
      background-color: var(--dark-2) !important;
      box-shadow: unset !important;
    }
    input[type="checkbox"] {
      accent-color: var(--blue-1) !important;
    }
    input[type="radio"] {
      accent-color: var(--blue-1) !important;
    }
    .script-list li:not(.ad-entry) {
      border: 1px solid var(--dark-3)
    }
    .pagination > *,
    .script-list + .pagination > *,
    .user-list + .pagination > * {
      background-color: var(--dark-2) !important;
    }
    .pagination .current,
    .pagination .gap {
      background-color: transparent !important;
    }
    a.next_page,
    .pagination a:not(.current) {
      color: var(--red) !important;
    }
    .previewable textarea,
    #discussion_comments_attributes_0_text {
      background-color: var(--dark-2) !important;
      border: 1px solid var(--dark-3) !important;
      color: var(--light-gray) !important;
    }
    #discussion_comments_attributes_0_text:focus-visible {
      outline: none !important;
      border: 1px solid var(--dark-3) !important;
    }
    .rating-icon {
      background-color: var(--dark-3) !important;
    }
    .rating-icon-bad,
    .bad-rating-count {
      color: var(--red) !important;
      border-color: currentColor !important;
    }
    .rating-icon-ok,
    .ok-rating-count {
      color: var(--yellow) !important;
      border-color: currentColor !important;
    }
    .rating-icon-good,
    .good-rating-count {
      color: var(--green) !important;
      border-color: currentColor !important;
    }
    pre:not(pre.prettyprint),
    code {
      border: 1px solid var(--dark-2) !important;
    }
    code {
      background-color: var(--dark-1) !important;
    }
    li.L1,
    li.L3,
    li.L5,
    li.L7,
    li.L9 {
      background-color: var(--dark-3) !important;
    }
    .diff li.unchanged:nth-child(odd) {
      background-color: var(--dark-3) !important;
    }
    .diff ul {
      background-color: var(--dark-1) !important;
    }
    .diff li.del {
      background: var(--light-red) !important;
      color: rgb(30, 0, 0) !important;
    }
    .diff li.ins {
      background: var(--light-green) !important;
      color: rgb(0, 30, 5) !important;
    }
    .diff li:hover {
      background: unset;
    }
    .com {
      color: var(--lavender) !important;
    }
    .clo,
    .opn,
    .pun {
      color: var(--yellow) !important;
    }
    .kwd {
      color: var(--blue-2) !important;
    }
    .str {
      color: var(--green) !important;
    }
    .pln {
      color: var(--light-yellow) !important;
    }
    .lit {
      color: var(--pink) !important;
    }
    .typ {
      color: var(--blue-pool) !important;
    }
    ol.linenums {
      padding-left: 55px !important
    }
    ${modScrollbars ? `
      .code-container, select {
        &::-webkit-scrollbar {
          width: 8px !important;
          height: 8px !important;
        }
      }
      ::-webkit-scrollbar-track {
        background: alpha(black, .2) !important;
      }
      ::-webkit-scrollbar-thumb {
        background: alpha(var(--translucent), .2) !important;
        border-radius: var(--default-border-radius) !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: alpha(var(--translucent), .3) !important;
      }
      ::-webkit-scrollbar-corner {
        background: alpha(black, .2) !important;
      }
      ::-webkit-scrollbar-button {
        display: none !important;
      }
    ` : ''}
    .validation-errors {
      border-color: var(--light-yellow) !important;
      background-color: var(--dark-3) !important;
    }
    html:has(body#greasyfork-plus) {
      background: var(--dark-1) !important;
      body, #greasyfork-plus_wrapper {
        background: var(--dark-1) !important;
      }
      #greasyfork-plus_wrapper {
        border: none !important;
      }
      button[id^="greasyfork-plus"] {
        background: var(--dark-4) !important;
        border: 1px solid var(--dark-2) !important;
        color: var(--blue-ice) !important;
        border-radius: var(--default-border-radius);
      }
      input, textarea {
        margin-block: 5px !important;
        background-color: var(--dark-4) !important;
        border: 1px solid var(--dark-2) !important;
        color: var(--blue-ice) !important;
        border-radius: var(--default-border-radius) !important;
      }
      .section_header.center {
        background-image: unset !important;
        background-color: var(--dark-3) !important;
        border-radius: var(--default-border-radius);
      }
      b {
        color: var(--lavender) !important;
      }
    }
    .comment-meta-item.comment-meta-item-main + .comment-meta-item + .comment-meta-item {
      display: inline-block !important;
      width: 100% !important;
      min-width: 189px !important;
      max-width: 189px !important;
    }
    .comment-meta-item.comment-meta-item-main + .comment-meta-item + .comment-meta-item > relative-time:before {
      content: attr(datetime) !important;
      clip-path: inset(0px 125px 0px 0px) !important;
      position: absolute !important;
      display: inline-block !important;
      height: 100% !important;
      min-height: 20px !important;
      max-height: 20px !important;
      line-height: 20px !important;
      width: 201px !important;
      margin: 1px 0 0 2px !important;
      padding: 0 2px 0 0 !important;
      letter-spacing: 1.4px !important;
      font-size: 12px !important;
      visibility: visible !important;
      opacity: 1 !important;
      text-align: left !important;
      color: red !important;
      background: #111 !important;
    }
    @supports (contain:paint) {
      .post-discussion .script-discussion-list .discussion-list-container .discussion-meta > .discussion-meta-item:first-of-type > relative-time:before,
      .post-discussion .script-discussion-list .discussion-list-container .discussion-meta > .discussion-meta-item:last-of-type .discussion-meta-item> relative-time:before,
      #script-meta dd.script-show-updated-date > span relative-time:before,
      #script-meta dd.script-show-created-date > span relative-time:before,
      .comment-meta-item.comment-meta-item-main + .comment-meta-item + .comment-meta-item + .comment-meta-item > relative-time:before,
      .comment-meta-item.comment-meta-item-main + .comment-meta-item + .comment-meta-item + .comment-meta-item > relative-time:after,
      .comment-meta-item.comment-meta-item-main + .comment-meta-item + .comment-meta-item > relative-time:before {
        display: none !important;
      }
      .comment-meta-item.comment-meta-item-main + .comment-meta-item + .comment-meta-item > relative-time:after {
        content: attr(datetime)!important;
        clip-path: inset(0px 98px 0px 114px) !important;
        display: none !important;
      }
    }
 
/* New styles */
.install-link, .install-link:visited, .install-link:active,
.install-help-link, .install-help-link:visited, .install-help-link:active {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  border: none !important;
  border-radius: var(--default-border-radius) !important;
  transition: background-color 0.3s ease !important;
}
 
.install-link:hover, .install-help-link:hover {
  background-color: var(--blue-2) !important;
}
 
.script-author a {
  color: var(--light-yellow) !important;
}
 
.script-list-author {
  color: var(--blue-ice) !important;
}
 
.script-list li:hover {
  background-color: var(--dark-2) !important;
  transition: background-color 0.3s ease !important;
}
 
table {
  border-collapse: separate !important;
  border-spacing: 0 !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
  overflow: hidden !important;
}
 
th, td {
  border: 1px solid var(--dark-2) !important;
  padding: 8px !important;
}
 
th {
  background-color: var(--dark-2) !important;
  color: var(--light-gray) !important;
}
 
tr:nth-child(even) {
  background-color: var(--dark-3) !important;
}
 
tr:hover {
  background-color: var(--dark-4) !important;
}
 
.script-list-current {
  border-left: 3px solid var(--blue-pool) !important;
}
 
.discussion-header {
  background-color: var(--dark-2) !important;
  border-bottom: 1px solid var(--dark-3) !important;
}
 
.discussion-more-link {
  background-color: var(--dark-3) !important;
  border: 1px solid var(--dark-2) !important;
  color: var(--blue-ice) !important;
  border-radius: var(--default-border-radius) !important;
  transition: background-color 0.3s ease !important;
}
 
.discussion-more-link:hover {
  background-color: var(--dark-2) !important;
}
 
.select-all-link {
  color: var(--blue-pool) !important;
}
 
.script-list-label {
  background-color: var(--dark-3) !important;
  color: var(--light-gray) !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
}
 
#script-content {
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
}
 
.script-meta-block {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px !important;
  margin-bottom: 15px !important;
}
 
.script-meta-block h3 {
  color: var(--blue-pool) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
 
.script-meta-block ul {
  list-style-type: none !important;
  padding-left: 0 !important;
}
 
.script-meta-block li {
  margin-bottom: 5px !important;
}
 
.form-control textarea, .form-control select {
  background-color: var(--dark-4) !important;
  color: var(--light-gray) !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
}
 
.form-control textarea:focus, .form-control select:focus {
  border-color: var(--blue-pool) !important;
  outline: none !important;
}
 
.form-submit {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  border: none !important;
  border-radius: var(--default-border-radius) !important;
  padding: 8px 15px !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
}
 
.form-submit:hover {
  background-color: var(--blue-2) !important;
  }
  .install-link, .install-link:visited, .install-link:active,
.install-help-link, .install-help-link:visited, .install-help-link:active {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  border: none !important;
  border-radius: var(--default-border-radius) !important;
  transition: background-color 0.3s ease !important;
}
 
.install-link:hover, .install-help-link:hover {
  background-color: var(--blue-2) !important;
}
 
.script-author a {
  color: var(--light-yellow) !important;
}
 
.script-list-author {
  color: var(--blue-ice) !important;
}
 
.script-list li:hover {
  background-color: var(--dark-2) !important;
  transition: background-color 0.3s ease !important;
}
 
table {
  border-collapse: separate !important;
  border-spacing: 0 !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
  overflow: hidden !important;
}
 
th, td {
  border: 1px solid var(--dark-2) !important;
  padding: 8px !important;
}
 
th {
  background-color: var(--dark-2) !important;
  color: var(--light-gray) !important;
}
 
tr:nth-child(even) {
  background-color: var(--dark-3) !important;
}
 
tr:hover {
  background-color: var(--dark-4) !important;
}
 
.script-list-current {
  border-left: 3px solid var(--blue-pool) !important;
}
 
.discussion-header {
  background-color: var(--dark-2) !important;
  border-bottom: 1px solid var(--dark-3) !important;
}
 
.discussion-more-link {
  background-color: var(--dark-3) !important;
  border: 1px solid var(--dark-2) !important;
  color: var(--blue-ice) !important;
  border-radius: var(--default-border-radius) !important;
  transition: background-color 0.3s ease !important;
}
 
.discussion-more-link:hover {
  background-color: var(--dark-2) !important;
}
 
.select-all-link {
  color: var(--blue-pool) !important;
}
 
.script-list-label {
  background-color: var(--dark-3) !important;
  color: var(--light-gray) !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
}
 
#script-content {
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
}
 
.script-meta-block {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px !important;
  margin-bottom: 15px !important;
}
 
.script-meta-block h3 {
  color: var(--blue-pool) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
 
.script-meta-block ul {
  list-style-type: none !important;
  padding-left: 0 !important;
}
 
.script-meta-block li {
  margin-bottom: 5px !important;
}
 
.form-control textarea, .form-control select {
  background-color: var(--dark-4) !important;
  color: var(--light-gray) !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
}
 
.form-control textarea:focus, .form-control select:focus {
  border-color: var(--blue-pool) !important;
  outline: none !important;
}
 
.form-submit {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  border: none !important;
  border-radius: var(--default-border-radius) !important;
  padding: 8px 15px !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
}
 
.form-submit:hover {
  background-color: var(--blue-2) !important;
  }
  .sidebar {
  background-color: var(--dark-2) !important;
  border-right: 1px solid var(--dark-3) !important;
  padding: 15px !important;
}
 
.sidebar h3 {
  color: var(--blue-pool) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
 
.sidebar ul {
  list-style-type: none !important;
  padding-left: 0 !important;
}
 
.sidebar li {
  margin-bottom: 8px !important;
}
 
.sidebar a {
  color: var(--light-gray) !important;
  transition: color 0.3s ease !important;
}
 
.sidebar a:hover {
  color: var(--blue-2) !important;
}
 
.pagination a, .pagination span {
  background-color: var(--dark-3) !important;
  border: 1px solid var(--dark-2) !important;
  color: var(--light-gray) !important;
  padding: 5px 10px !important;
  margin: 0 2px !important;
  border-radius: var(--default-border-radius) !important;
  transition: background-color 0.3s ease !important;
}
 
.pagination a:hover {
  background-color: var(--dark-4) !important;
}
 
.pagination .current {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
}
 
.script-list-ratings {
  background-color: var(--dark-3) !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 5px 10px !important;
}
 
.script-list-ratings span {
  margin-right: 10px !important;
}
 
.discussion-list .discussion-title {
  font-size: 1.1em !important;
  color: var(--blue-2) !important;
}
 
.discussion-list .discussion-meta {
  font-size: 0.9em !important;
  color: var(--light-gray) !important;
}
 
.code-container {
  background-color: var(--dark-1) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px !important;
  margin: 10px 0 !important;
}
 
.code-container pre {
  margin: 0 !important;
}
 
.alert {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  color: var(--light-gray) !important;
  padding: 10px !important;
  margin: 10px 0 !important;
  border-radius: var(--default-border-radius) !important;
}
 
.alert-info {
  border-left: 5px solid var(--blue-pool) !important;
}
 
.alert-warning {
  border-left: 5px solid var(--yellow) !important;
}
 
.alert-danger {
  border-left: 5px solid var(--red) !important;
}
 
.user-profile {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-bottom: 20px !important;
}
 
.user-profile-avatar {
  border: 3px solid var(--dark-3) !important;
  border-radius: 50% !important;
}
 
.user-profile-info h2 {
  color: var(--blue-pool) !important;
  margin-bottom: 10px !important;
}
 
.user-profile-stats {
  background-color: var(--dark-3) !important;
  border: 1px solid var(--dark-2) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px !important;
  margin-top: 15px !important;
}
 
.user-profile-stats span {
  margin-right: 15px !important;
  color: var(--light-gray) !important;
}
 
.script-version-list {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px !important;
  margin-top: 15px !important;
}
 
.script-version-list h3 {
  color: var(--blue-pool) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
 
.script-version-list li {
  margin-bottom: 8px !important;
  padding: 5px !important;
  border-bottom: 1px solid var(--dark-3) !important;
}
 
.script-version-list li:last-child {
  border-bottom: none !important;
  }
  .script-list-container {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-bottom: 20px !important;
}
 
.script-list-container h2 {
  color: var(--blue-pool) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 10px !important;
  margin-bottom: 15px !important;
}
 
.script-list-description {
  color: var(--light-gray) !important;
  font-size: 0.9em !important;
  margin-bottom: 10px !important;
}
 
.script-list-author {
  font-style: italic !important;
  color: var(--blue-ice) !important;
}
 
.script-list-ratings {
  display: flex !important;
  align-items: center !important;
  margin-top: 5px !important;
}
 
.script-list-ratings > * {
  margin-right: 10px !important;
}
 
.forum-post {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-bottom: 20px !important;
}
 
.forum-post-author {
  color: var(--blue-2) !important;
  font-weight: bold !important;
}
 
.forum-post-content {
  margin-top: 10px !important;
  line-height: 1.6 !important;
}
 
.forum-post-meta {
  font-size: 0.8em !important;
  color: var(--light-gray) !important;
  margin-top: 10px !important;
}
 
.tag-list {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 5px !important;
  margin-top: 10px !important;
}
 
.tag {
  background-color: var(--dark-3) !important;
  color: var(--light-gray) !important;
  padding: 3px 8px !important;
  border-radius: 12px !important;
  font-size: 0.8em !important;
  transition: background-color 0.3s ease !important;
}
 
.tag:hover {
  background-color: var(--dark-4) !important;
}
 
.search-form {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-bottom: 20px !important;
}
 
.search-form input[type="text"] {
  background-color: var(--dark-4) !important;
  border: 1px solid var(--dark-3) !important;
  color: var(--light-gray) !important;
  padding: 8px !important;
  width: 100% !important;
  border-radius: var(--default-border-radius) !important;
}
 
.search-form input[type="submit"] {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  border: none !important;
  padding: 8px 15px !important;
  border-radius: var(--default-border-radius) !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
}
 
.search-form input[type="submit"]:hover {
  background-color: var(--blue-2) !important;
}
 
.script-meta {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  gap: 15px !important;
  margin-bottom: 20px !important;
}
 
.script-meta-block {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px !important;
}
 
.script-meta-block h3 {
  color: var(--blue-pool) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
 
.notification {
  background-color: var(--dark-2) !important;
  border-left: 4px solid var(--blue-pool) !important;
  color: var(--light-gray) !important;
  padding: 10px 15px !important;
  margin-bottom: 15px !important;
  border-radius: 0 var(--default-border-radius) var(--default-border-radius) 0 !important;
}
 
.notification-warning {
  border-left-color: var(--yellow) !important;
}
 
.notification-error {
  border-left-color: var(--red) !important;
}
 
.script-delete-form {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--red) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-top: 20px !important;
}
 
.script-delete-form h3 {
  color: var(--red) !important;
  margin-bottom: 10px !important;
}
 
.script-delete-form input[type="submit"] {
  background-color: var(--red) !important;
  color: var(--dark-1) !important;
  border: none !important;
  padding: 8px 15px !important;
  border-radius: var(--default-border-radius) !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
}
 
.script-delete-form input[type="submit"]:hover {
  background-color: #ff6b6b !important;
  }
  .script-list li {
  transition: transform 0.2s ease-in-out !important;
}
 
.script-list li:hover {
  transform: translateX(5px) !important;
}
 
.script-version-code {
  font-family: 'Courier New', Courier, monospace !important;
  background-color: var(--dark-1) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin: 15px 0 !important;
  overflow-x: auto !important;
}
 
.diff {
  background-color: var(--dark-1) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin: 15px 0 !important;
  font-family: 'Courier New', Courier, monospace !important;
}
 
.diff-add {
  background-color: rgba(0, 255, 0, 0.1) !important;
}
 
.diff-remove {
  background-color: rgba(255, 0, 0, 0.1) !important;
}
 
.user-list {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
  gap: 20px !important;
}
 
.user-list-item {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  text-align: center !important;
  transition: transform 0.2s ease-in-out !important;
}
 
.user-list-item:hover {
  transform: translateY(-5px) !important;
}
 
.user-list-avatar {
  width: 80px !important;
  height: 80px !important;
  border-radius: 50% !important;
  margin-bottom: 10px !important;
}
 
.user-list-name {
  font-weight: bold !important;
  color: var(--blue-2) !important;
}
 
.tooltip {
  position: relative !important;
  display: inline-block !important;
  cursor: help !important;
}
 
.tooltip .tooltiptext {
  visibility: hidden !important;
  width: 200px !important;
  background-color: var(--dark-1) !important;
  color: var(--light-gray) !important;
  text-align: center !important;
  border-radius: var(--default-border-radius) !important;
  padding: 5px !important;
  position: absolute !important;
  z-index: 1 !important;
  bottom: 125% !important;
  left: 50% !important;
  margin-left: -100px !important;
  opacity: 0 !important;
  transition: opacity 0.3s !important;
}
 
.tooltip:hover .tooltiptext {
  visibility: visible !important;
  opacity: 1 !important;
}
 
.breadcrumbs {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 10px 15px !important;
  margin-bottom: 20px !important;
}
 
.breadcrumbs a {
  color: var(--blue-2) !important;
  text-decoration: none !important;
}
 
.breadcrumbs a:hover {
  text-decoration: underline !important;
}
 
.breadcrumbs .separator {
  color: var(--light-gray) !important;
  margin: 0 5px !important;
}
 
.script-stats {
  display: flex !important;
  justify-content: space-around !important;
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-bottom: 20px !important;
}
 
.stat-item {
  text-align: center !important;
}
 
.stat-value {
  font-size: 1.5em !important;
  font-weight: bold !important;
  color: var(--blue-pool) !important;
}
 
.stat-label {
  font-size: 0.9em !important;
  color: var(--light-gray) !important;
}
 
.loading-spinner {
  border: 4px solid var(--dark-3) !important;
  border-top: 4px solid var(--blue-pool) !important;
  border-radius: 50% !important;
  width: 40px !important;
  height: 40px !important;
  animation: spin 1s linear infinite !important;
}
 
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
 
.script-feedback {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-top: 20px !important;
}
 
.feedback-form textarea {
  width: 100% !important;
  background-color: var(--dark-4) !important;
  border: 1px solid var(--dark-3) !important;
  color: var(--light-gray) !important;
  padding: 10px !important;
  border-radius: var(--default-border-radius) !important;
  resize: vertical !important;
}
 
.feedback-form input[type="submit"] {
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  border: none !important;
  padding: 8px 15px !important;
  border-radius: var(--default-border-radius) !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
  margin-top: 10px !important;
}
 
.feedback-form input[type="submit"]:hover {
  background-color: var(--blue-2) !important;
  }
  .modal {
  background-color: var(--dark-1) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}
 
.modal-header {
  background-color: var(--dark-2) !important;
  border-bottom: 1px solid var(--dark-3) !important;
  padding: 15px !important;
}
 
.modal-title {
  color: var(--blue-pool) !important;
  font-size: 1.2em !important;
}
 
.modal-body {
  padding: 20px !important;
}
 
.modal-footer {
  background-color: var(--dark-2) !important;
  border-top: 1px solid var(--dark-3) !important;
  padding: 15px !important;
}
 
.close-modal {
  color: var(--light-gray) !important;
  background-color: transparent !important;
  border: none !important;
  font-size: 1.5em !important;
  cursor: pointer !important;
  transition: color 0.3s ease !important;
}
 
.close-modal:hover {
  color: var(--blue-2) !important;
}
 
.tabs {
  display: flex !important;
  border-bottom: 1px solid var(--dark-3) !important;
  margin-bottom: 20px !important;
}
 
.tab {
  padding: 10px 20px !important;
  cursor: pointer !important;
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-bottom: none !important;
  margin-right: 5px !important;
  border-radius: var(--default-border-radius) var(--default-border-radius) 0 0 !important;
  transition: background-color 0.3s ease !important;
}
 
.tab:hover {
  background-color: var(--dark-3) !important;
}
 
.tab.active {
  background-color: var(--dark-1) !important;
  border-bottom-color: var(--dark-1) !important;
}
 
.accordion {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  margin-bottom: 10px !important;
}
 
.accordion-header {
  padding: 15px !important;
  cursor: pointer !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
 
.accordion-title {
  color: var(--blue-pool) !important;
  font-weight: bold !important;
}
 
.accordion-icon {
  transition: transform 0.3s ease !important;
}
 
.accordion-content {
  padding: 0 15px !important;
  max-height: 0 !important;
  overflow: hidden !important;
  transition: max-height 0.3s ease !important;
}
 
.accordion.active .accordion-icon {
  transform: rotate(180deg) !important;
}
 
.accordion.active .accordion-content {
  max-height: 1000px !important;
  padding: 15px !important;
}
 
.progress-bar {
  background-color: var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  height: 20px !important;
  overflow: hidden !important;
}
 
.progress-bar-fill {
  background-color: var(--blue-pool) !important;
  height: 100% !important;
  width: 0% !important;
  transition: width 0.5s ease !important;
}
 
.card {
  background-color: var(--dark-2) !important;
  border: 1px solid var(--dark-3) !important;
  border-radius: var(--default-border-radius) !important;
  padding: 15px !important;
  margin-bottom: 20px !important;
  transition: box-shadow 0.3s ease !important;
}
 
.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}
 
.card-header {
  border-bottom: 1px solid var(--dark-3) !important;
  padding-bottom: 10px !important;
  margin-bottom: 10px !important;
}
 
.card-title {
  color: var(--blue-pool) !important;
  font-size: 1.2em !important;
  margin: 0 !important;
}
 
.card-content {
  color: var(--light-gray) !important;
}
 
.tooltip-new {
  position: relative !important;
  display: inline-block !important;
}
 
.tooltip-new .tooltip-text {
  visibility: hidden !important;
  width: 120px !important;
  background-color: var(--dark-1) !important;
  color: var(--light-gray) !important;
  text-align: center !important;
  border-radius: 6px !important;
  padding: 5px 0 !important;
  position: absolute !important;
  z-index: 1 !important;
  bottom: 125% !important;
  left: 50% !important;
  margin-left: -60px !important;
  opacity: 0 !important;
  transition: opacity 0.3s !important;
}
 
.tooltip-new .tooltip-text::after {
  content: "" !important;
  position: absolute !important;
  top: 100% !important;
  left: 50% !important;
  margin-left: -5px !important;
  border-width: 5px !important;
  border-style: solid !important;
  border-color: var(--dark-1) transparent transparent transparent !important;
}
 
.tooltip-new:hover .tooltip-text {
  visibility: visible !important;
  opacity: 1 !important;
}
 
.floating-action-button {
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  background-color: var(--blue-pool) !important;
  color: var(--dark-1) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  font-size: 24px !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease, transform 0.3s ease !important;
}
 
.floating-action-button:hover {
  background-color: var(--blue-2) !important;
  transform: scale(1.1) !important;
  }
    `;
 
    // Apply the CSS
    GM_addStyle(css);
   })();
   
   
