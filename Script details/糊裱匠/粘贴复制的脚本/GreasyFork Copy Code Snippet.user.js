// ==UserScript==
// @name        GreasyFork Copy Code Snippet
// @version     0.1.1
// @description A userscript that adds a copy code button to the greasyfork code page
// @license     MIT
// @author      Rob Garrison
// @namespace   https://github.com/Mottie
// @match       https://greasyfork.org/*/scripts/*/code
// @match       https://sleazyfork.org/*/scripts/*/code
// @run-at      document-idle
// @grant       none
// @icon        https://www.google.com/s2/favicons?domain=greasyfork.org
// @require     https://greasyfork.org/scripts/398877-utils-js/code/utilsjs.js?version=895926
// @downloadURL https://update.greasyfork.org/scripts/423726/GreasyFork%20Copy%20Code%20Snippet.user.js
// @updateURL https://update.greasyfork.org/scripts/423726/GreasyFork%20Copy%20Code%20Snippet.meta.js
// ==/UserScript==
/* global $ */
(() => {
	"use strict";

	const copyCode = () => {
		const code = $(".code-container");
		if ("clipboard" in navigator) {
			return navigator.clipboard.writeText(code.innerText || "");
		}

		const selection = getSelection();
		if (selection == null) {
			return Promise.reject(new Error());
		}

		selection.removeAllRanges();

		const range = document.createRange();
		range.selectNodeContents(code);
		selection.addRange(range);

		document.execCommand("copy");
		selection.removeAllRanges();
		return Promise.resolve();
	};

	const installArea = $("#install-area");
	if (installArea && !$(".copy-code-link")) {
		const copyLink = document.createElement("a");
		copyLink.href = "#";
		copyLink.className = "install-link copy-code-link";
		copyLink.style.marginLeft = "0.5rem";
		copyLink.innerHTML = `
			<svg aria-hidden="true" height="16" viewBox="0 0 14 16" width="14">
				<path fill="currentColor" fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
			</svg>
			Copy code to clipboard`;
		copyLink.onclick = async event => {
			event.preventDefault();
			await copyCode();
		};

		installArea.appendChild(copyLink);
	}
})();

