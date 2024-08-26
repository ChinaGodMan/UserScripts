// ==UserScript==
// @name               Greasyfork comments date to locale
// @namespace          https://greasyfork.org/users/821661
// @match              https://greasyfork.org/*
// @grant              none
// @version            1.0
// @author             hdyzen
// @description        replace comments with date to locale date
// @license            GPL-3.0
// @downloadURL https://update.greasyfork.org/scripts/497937/Greasyfork%20comments%20date%20to%20locale.user.js
// @updateURL https://update.greasyfork.org/scripts/497937/Greasyfork%20comments%20date%20to%20locale.meta.js
// ==/UserScript==
'use strict';

const dateTimes = document.querySelectorAll('[datetime]');

dateTimes.forEach(datetime => {
    console.log(datetime.datetime);
    datetime.shadowRoot.innerHTML += ` | (${datetime.title})`;
});
