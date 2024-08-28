// ==UserScript==
// @name                  Greasy Fork URL Script Name Cleanup
// @name:zh-CN            Greasy Fork URL 脚本名称清理
// @version               1.1.2.20210925
// @namespace             laster2800
// @author                Laster2800
// @description           Cleanup Greasy Fork URL Script Name
// @description:zh-CN     清理 Greasy Fork URL 中的脚本名称
// @icon                  https://api.iowen.cn/favicon/greasyfork.org.png
// @homepageURL           https://greasyfork.org/zh-CN/scripts/431940
// @supportURL            https://greasyfork.org/zh-CN/scripts/431940/feedback
// @license               LGPL-3.0
// @noframes
// @include               /^https?:\/\/(greasy|sleazy)fork\.org\/[^/]+\/scripts\/\d+-/
// @grant                 none
// @run-at                document-start
// @downloadURL https://update.greasyfork.org/scripts/431940/Greasy%20Fork%20URL%20Script%20Name%20Cleanup.user.js
// @updateURL https://update.greasyfork.org/scripts/431940/Greasy%20Fork%20URL%20Script%20Name%20Cleanup.meta.js
// ==/UserScript==

const m = /(\/[^/]+\/scripts\/\d+)-[^/]+(\/.*)?/.exec(location.pathname)
history.replaceState({}, null, `${location.origin}${m[1]}${m[2] ?? ''}${location.search}${location.hash}`)
