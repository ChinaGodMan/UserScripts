// ==UserScript==
// @name        Greasy Fork: Mark script discussions as read
// @namespace   xbenpm8g5fr72kx7s3w4
// @match       https://greasyfork.org/*/users/*
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.deleteValue
// @version     1.1
// @description Mark feedback on your scripts as read
// @run-at      document-end
// @inject-into content
// @license     MIT
// @downloadURL https://update.greasyfork.org/scripts/438010/Greasy%20Fork%3A%20Mark%20script%20discussions%20as%20read.user.js
// @updateURL https://update.greasyfork.org/scripts/438010/Greasy%20Fork%3A%20Mark%20script%20discussions%20as%20read.meta.js
// ==/UserScript==

(function () {
	"use strict";

	// Get list of discussions
	const context = document.getElementById("user-discussions-on-scripts-written");
	if (!context) {
		return;
	}

	// Get user ID
	const uid = location.pathname.match(/\/users\/(\d+)/);
	if (!uid) {
		return;
	}


	const discussions = context.getElementsByClassName("discussion-list-container");
	const prefKey = "markedReadTime" + uid[1];


	function markDiscussions(seenTime) {
		seenTime = new Date(seenTime);

		checkDiscussions:
		for (const discussion of discussions) {
			const times = discussion.getElementsByTagName("relative-time");

			for (let time of times) {
				time = new Date(time.getAttribute("datetime"));
				if (time > seenTime) {
					// newer datetime found, skip marking this discussion
					continue checkDiscussions;
				}
			}

			// no newer datetime found, mark it
			discussion.style.opacity = "0.3";
		}
	}


	function unmarkDiscussions() {
		for (const discussion of discussions) {
			discussion.style.opacity = "";
		}
	}


	GM.getValue(prefKey).then(seenTime => {
		if (seenTime !== undefined) {
			markDiscussions(seenTime);
		}
	});


	const BTN_MARK = "mark as read";
	const TITLE_MARK = "mark all script discussions as read up to the current point in time";
	const BTN_UNMARK = "clear read status";
	const TITLE_UNMARK = "remove the read indicator on all discussions";


	function setButtonText(btn, marked) {
		if (marked) {
			btn.textContent = BTN_UNMARK;
			btn.title = TITLE_UNMARK;
		} else {
			btn.textContent = BTN_MARK;
			btn.title = TITLE_MARK;
		}
	}

	const markButton = document.createElement("button");
	markButton.type = "button";

	const pageLoad = Math.floor(performance.timeOrigin);
	let marked = false;

	setButtonText(markButton, false);

	markButton.addEventListener("click", function () {
		if (!marked) {
			markDiscussions(pageLoad);
			GM.setValue(prefKey, pageLoad);
		} else {
			unmarkDiscussions();
			GM.deleteValue(prefKey);
		}

		marked = !marked;
		setButtonText(this, marked);
	});

	context.getElementsByTagName("h3")[0].append(" ", markButton);
})();
