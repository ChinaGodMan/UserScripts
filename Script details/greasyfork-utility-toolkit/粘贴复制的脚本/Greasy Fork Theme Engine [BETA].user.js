// ==UserScript==
// @name         Greasy Fork Theme Engine [BETA]
// @namespace    https://naeembolchhi.github.io/
// @version      0.11
// @description  A sleek Geasy Fork redesign with support for custom colors. Supports both light mode and dark mode.
// @author       NaeemBolchhi
// @license      GPL-3.0-or-later
// @icon         data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300" style="fill: %23D72323;"><path d="M200.3 269.9c-15.7 6.6-32.7 10.1-50.3 10.1-34.7 0-67.4-13.5-91.9-38.1C33.5 217.4 20 184.7 20 150s13.5-67.4 38.1-91.9C82.6 33.5 115.3 20 150 20s67.4 13.5 91.9 38.1C266.5 82.6 280 115.3 280 150c0 17.6-3.5 34.6-10 50.3 5 5 10 10.1 15.1 15.1 9.6-19.8 15-42 15-65.4C300 67.2 232.8 0 150 0S0 67.2 0 150s67.2 150 150 150c23.4 0 45.6-5.4 65.4-15-5.1-5-10.1-10.1-15.1-15.1z"/><path d="M267.8 300c-9.6-1.3-16.5-7-23.1-13.7-14.9-15.3-30.1-30.2-45.2-45.3-9.3-9.3-12-20.1-7.5-32.7.3-.8.3-2.1-.2-2.6-3.9-4.1-7.9-8-12-12.1-6.4 4-13.1 6.7-20.5 7.6-15.5 1.9-29-2.4-40.2-13.2-12.3-11.8-24.2-24-36.2-36.1-3.5-3.5-4.1-7.4-2.2-11.2 1.9-3.7 5.9-6.4 9.7-5.6 2.5.5 5.1 2 6.9 3.8 7.4 7.1 14.5 14.4 21.8 21.6.6.6 1.3 1.2 1.7 1.6l13.8-13.8c-6.2-6.1-12.6-12.5-18.9-18.9-1.9-1.9-3.8-3.7-5.6-5.6-3.8-4.2-3.7-9.7.2-13.6 3.9-3.9 9.5-4.1 13.6-.1 7.5 7.3 14.8 14.7 22.1 22.1.8.8 1.5 1.8 2.1 2.4l14.3-14.3c-2-1.8-4.5-4-6.8-6.3-6-5.9-11.9-11.8-17.8-17.8-2.7-2.7-3.7-5.9-2.4-9.6 1.4-3.9 4.2-6.3 8.3-6.9 3.4-.6 6 1 8.4 3.3l14.7 14.7c7.4 7.4 14.9 14.6 22 22.2 14.7 15.7 17 39.1 6.1 57.7-.4.7-.7 1.4-1.3 2.4 3.9 3.9 7.9 7.8 11.9 11.6.6.5 2 .6 2.8.3 12.5-4.4 23.3-1.7 32.7 7.6 15.1 15.1 30.1 30.3 45.3 45.2 6.7 6.5 12.4 13.4 13.7 23v5.8c-.2.5-.4 1.1-.5 1.6-1.8 9.5-6.6 17-15.5 21.2-3.3 1.6-6.9 2.3-10.4 3.5-1.9.2-3.8.2-5.8.2z"/><path d="M170 219.6c-2.7.7-5.4 1.2-8.2 1.5-3.1.4-6.2.6-9.2.6-17.9 0-34.2-6.6-47.2-19.2-10.2-9.8-20.2-20-30-29.8l-6.6-6.6c-9.5-9.5-11.7-22.7-5.8-34.3 4.9-9.6 14.4-16 24.5-16.6.5-6.9 3.5-13.6 8.9-18.9 5.2-5.1 11.8-8.2 18.7-8.7.2-2.5.7-4.9 1.6-7.4 3.8-10.8 12.6-18.1 23.9-20 1.5-.2 3.1-.4 4.6-.4 5.4 0 13.4 1.6 21.1 9.2 4.7 4.7 9.6 9.5 14.8 14.7 2.1 2.2 4.4 4.4 6.5 6.5 5.3 5.2 10.7 10.6 15.9 16.2 10.2 10.9 16.4 24.5 17.9 39.3.9 8.2.2 16.4-1.8 24.2h.1c12.8 0 24.7 5.1 34.7 14.8 3.6-10.9 5.6-22.6 5.6-34.7 0-60.8-49.2-110-110-110S40 89.2 40 150s49.2 110 110 110c12.1 0 23.8-2 34.7-5.6-9.8-10.1-14.8-22.1-14.7-34.8z"/></svg>
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @exclude      */assets/*
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/476333/Greasy%20Fork%20Theme%20Engine%20%5BBETA%5D.user.js
// @updateURL https://update.greasyfork.org/scripts/476333/Greasy%20Fork%20Theme%20Engine%20%5BBETA%5D.meta.js
// ==/UserScript==

// Main event initiator.
(function() {
    'use strict';

    // Set default theme to dark if theme choice is unavailable.
    if (!localStorage.getItem('theme')) {localStorage.setItem('theme',"dark");}

    // Only initiate theme engine if the URL doesn't match.
    if (window.location.pathname != "/theme") {
        // Pendulum
        const pendulum = setInterval(function () {
            try {
                if (!document.querySelector('head')) {
                    return;
                }
                themeStyles(true);
                // if favicon
            } catch(e) {console.error("early-load-failed");catchErrors(e);}
        }, 100);

        // Only execute if window is interactive or fully loaded at this point.
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            setTimeout((function() {
                clearInterval(pendulum);
                themeStyles();
                removeStyles();
                // check theme choice in localstorage
                // any favicon function
                // add the toggle for theme changing
                /* DOM Changes START */
                logoSVG();
                addFOOTER();
                forkNAV();
                forkHOME();
                /* DOM Changes END */
                // fix favicon again, just in case
                loadTime();
            }), 100);
        }

        // Modifying head when available.
        let observer = new MutationObserver(function() {
            if (document.body) {
                clearInterval(pendulum);
                themeStyles();
                removeStyles();
                // any favicon function
                observer.disconnect();
            }
        });
        observer.observe(document.documentElement, {childList: true, subtree: true});

        // Execute DOM modifications when ready state changes.
        document.onreadystatechange = function () {
            // Modify body when document is interactive.
            if (document.readyState === 'interactive') {
                // check theme choice in localstorage
                // add the toggle for theme changing
                /* DOM Changes */
                logoSVG();
                addFOOTER();
                forkNAV();
                forkHOME();
            }
            // Modify body when document is complete.
            if (document.readyState === 'complete') {
                // fix favicon again, just in case
                loadTime();
            }
        }
    }

})();

// Catch errors.
function catchErrors(e) {
    console.log(e instanceof TypeError)
    console.log(e.message)
    console.log(e.name)
    console.log(e.fileName)
    console.log(e.lineNumber)
    console.log(e.columnNumber)
    console.log(e.stack)
}

// SVG Icons
const greasySVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" version="1.1" viewBox="0 0 500 92"><path d="M132.3 43.8h19.2v25.8c-2.7.9-5.5 1.6-8.4 2.1s-6.1.7-9.7.7c-5.2 0-9.7-1-13.3-3.1s-6.4-5.1-8.2-9c-1.9-3.9-2.8-8.7-2.8-14.3 0-5.4 1-10 3.1-14 2.1-3.9 5.1-7 9.1-9.2 4-2.2 8.8-3.3 14.5-3.3 2.8 0 5.5.3 8.1.8 2.6.6 5 1.3 7.2 2.3l-3 7c-1.7-.8-3.7-1.5-5.8-2.1-2.2-.6-4.4-.8-6.7-.8-3.7 0-6.9.8-9.5 2.4-2.7 1.6-4.7 3.8-6.1 6.7-1.4 2.9-2.1 6.3-2.1 10.2 0 3.8.6 7.2 1.7 10.1 1.1 2.9 2.9 5.1 5.4 6.7 2.4 1.6 5.6 2.4 9.5 2.4 1.9 0 3.6-.1 5-.3 1.4-.2 2.6-.4 3.8-.7V51h-10.9v-7.2zM180.9 32c.7 0 1.4 0 2.1.1s1.4.2 2 .3l-.8 7.7c-.5-.1-1.1-.2-1.8-.3-.7-.1-1.4-.1-1.9-.1-1.5 0-2.9.2-4.2.7-1.3.5-2.5 1.2-3.6 2.2-1 1-1.8 2.2-2.4 3.6-.6 1.5-.9 3.1-.9 5.1v20.4h-8.3V32.8h6.5l1.1 6.9h.4c.8-1.4 1.7-2.6 2.9-3.8 1.1-1.1 2.5-2.1 4-2.8 1.5-.7 3.1-1.1 4.9-1.1zm25 0c3.5 0 6.4.7 8.9 2.1 2.5 1.4 4.4 3.5 5.7 6.1 1.3 2.6 2 5.8 2 9.4V54h-26c.1 3.8 1.1 6.7 3 8.7s4.6 3.1 8.1 3.1c2.5 0 4.7-.2 6.7-.7 2-.5 4-1.2 6.1-2.1v6.7c-1.9.9-3.9 1.6-5.9 2-2 .4-4.4.6-7.2.6-3.8 0-7.2-.7-10.1-2.2-2.9-1.5-5.2-3.7-6.8-6.7-1.6-3-2.4-6.6-2.4-11s.7-8.1 2.2-11.1c1.5-3 3.6-5.4 6.2-7 2.9-1.5 6-2.3 9.5-2.3zm0 6.3c-2.6 0-4.7.8-6.3 2.5-1.6 1.7-2.5 4.2-2.8 7.4h17.7c0-1.9-.3-3.7-1-5.2-.6-1.5-1.6-2.7-2.8-3.5-1.2-.8-2.8-1.2-4.8-1.2zm39.5-6.3c4.9 0 8.6 1.1 11.2 3.3s3.8 5.6 3.8 10.2v26.2h-5.9l-1.6-5.5h-.3c-1.1 1.4-2.2 2.6-3.4 3.5-1.2.9-2.5 1.6-4.1 2.1-1.5.5-3.4.7-5.6.7-2.3 0-4.4-.4-6.2-1.3S230 69 229 67.3s-1.6-4-1.6-6.7c0-4 1.5-7 4.5-9s7.5-3.1 13.6-3.3l6.7-.2v-2c0-2.7-.6-4.6-1.9-5.8-1.3-1.1-3-1.7-5.3-1.7-1.9 0-3.8.3-5.7.8s-3.6 1.3-5.3 2.1l-2.7-5.8c1.9-1 4.1-1.8 6.5-2.5s5-1.2 7.6-1.2zm6.7 21.1-5 .2c-4.1.1-7 .8-8.7 2.1-1.7 1.3-2.5 3-2.5 5.2 0 1.9.6 3.3 1.7 4.2 1.1.9 2.7 1.3 4.5 1.3 2.9 0 5.2-.8 7.1-2.4 1.9-1.6 2.8-4 2.8-7.2v-3.4zm44.1 7.5c0 2.6-.6 4.7-1.9 6.5s-3.1 3.1-5.4 4-5.3 1.4-8.7 1.4c-2.7 0-5.1-.2-7-.6s-3.8-1-5.5-1.8V63c1.9.9 3.9 1.6 6.2 2.2s4.5.9 6.6.9c2.7 0 4.7-.4 5.9-1.3s1.8-2 1.8-3.4c0-.8-.2-1.6-.7-2.3s-1.4-1.4-2.7-2.1-3.2-1.6-5.7-2.6-4.5-2-6.2-3-3-2.2-3.8-3.6-1.3-3.2-1.3-5.4c0-3.4 1.4-6.1 4.1-7.9s6.3-2.7 10.8-2.7c2.4 0 4.6.2 6.8.7 2.1.5 4.2 1.2 6.2 2.1l-2.6 6.2c-1.8-.8-3.5-1.4-5.3-1.9-1.8-.5-3.6-.8-5.4-.8-2.1 0-3.8.3-4.9 1-1.1.7-1.7 1.6-1.7 2.8 0 .9.3 1.7.8 2.3s1.5 1.3 2.8 1.9 3.2 1.4 5.5 2.4c2.3.9 4.3 1.8 6 2.8s3 2.2 3.9 3.6 1.4 3.5 1.4 5.7zm1.3-27.8h9l8 22.2c.4 1 .7 2 1 3s.6 1.9.8 2.9.4 1.9.5 2.8h.2c.2-1.2.6-2.6 1-4.1s.9-3 1.5-4.6l7.7-22.2h8.9L319.3 77c-1 2.5-2.1 4.7-3.5 6.5s-3 3.2-4.9 4.1-4.1 1.4-6.5 1.4c-1.2 0-2.2-.1-3.1-.2s-1.6-.3-2.2-.4v-6.6c.5.1 1.1.2 1.9.3s1.5.1 2.3.1c1.5 0 2.8-.3 3.8-.9s2-1.4 2.7-2.5 1.4-2.3 1.9-3.6l1.4-3.7-15.6-38.7zm68.7 38.9h-8.4V20.3h29v7.1h-20.7v16h19.3v7.1h-19.3v21.2zM428 52.1c0 3.2-.4 6.1-1.3 8.6s-2.1 4.6-3.7 6.3-3.6 3-5.8 3.9-4.8 1.4-7.7 1.4c-2.7 0-5.1-.5-7.3-1.4s-4.2-2.2-5.8-3.9-2.9-3.8-3.8-6.3-1.3-5.4-1.3-8.6c0-4.3.7-7.9 2.2-10.9s3.6-5.3 6.4-6.8c2.8-1.6 6.1-2.4 9.9-2.4 3.6 0 6.8.8 9.5 2.4 2.7 1.6 4.9 3.9 6.4 6.9s2.3 6.6 2.3 10.8zm-28.3 0c0 2.8.3 5.3 1 7.3s1.8 3.6 3.2 4.6 3.3 1.6 5.6 1.6 4.2-.5 5.6-1.6 2.5-2.6 3.2-4.6 1-4.4 1-7.3-.3-5.2-1-7.2-1.7-3.5-3.2-4.5c-1.5-1-3.3-1.6-5.7-1.6-3.4 0-5.9 1.1-7.5 3.4s-2.2 5.7-2.2 9.9zM455.4 32c.7 0 1.4 0 2.1.1s1.4.2 2 .3l-.8 7.7c-.5-.1-1.1-.2-1.8-.3s-1.4-.1-1.9-.1c-1.5 0-2.9.2-4.2.7-1.3.5-2.5 1.2-3.6 2.2s-1.8 2.2-2.4 3.6-.9 3.1-.9 5.1v20.4h-8.3V32.8h6.5l1.1 6.9h.4c.8-1.4 1.7-2.6 2.9-3.8 1.1-1.1 2.5-2.1 4-2.8 1.5-.7 3.1-1.1 4.9-1.1zm17.8-15v26.4c0 1.2 0 2.5-.1 3.9s-.2 2.7-.3 4h.2c.6-.8 1.3-1.8 2.2-2.9s1.7-2.1 2.4-2.9l11.9-12.8h9.5l-15.6 16.7L500 71.7h-9.7l-12.4-17.1-4.6 4v13.1H465V17h8.2z"/><circle cx="46" cy="46" r="46"/><path d="M42.9 36.6c1 1 2 2.1 3 3.1l2.9 2.9c.8.8 1.7 1.7 2.6 2.5.7.7 1.5 1.4 2.2 2.1 1.7 1.7 3.5 3.4 5.2 5.2 1.5 1.5 2.9 3.1 4.4 4.6 1.4 1.4 3 2.8 4.4 4.3 1.4 1.4 2.8 3 4.3 4.4 1.4 1.5 2.9 2.9 4.4 4.3 1.8 1.5 2.7 3.9 1.8 5.9-1.3 3-4.7 3.8-7 1.9-1.7-1.4-3.2-3-4.8-4.5-2.9-2.8-5.7-5.7-8.5-8.6L44.9 51.8c-2.7-2.7-5.4-5.4-8-8.1-.5-.5-.8-.5-1.4-.1-2.9 2.3-5.9 1.5-8.2-.8-2.3-2.2-4.5-4.4-6.7-6.6-1.9-1.9-3.7-3.8-5.6-5.7-1.6-1.6-3.3-3.2-4.9-4.8-.6-.6-1.2-1.2-1.6-1.9-.2-.4-.1-1.2.2-1.6.4-.6 1.2-1 1.9-.4.9.6 1.7 1.4 2.5 2.2l7.2 7.2c1.4 1.4 2.8 2.9 4.3 4.3.1.1.3.2.5.4.7-.7 1.4-1.3 2.1-2l1.5-1.5c.4-.4.5-.7 0-1.1-2.1-2-4.1-3.9-6.1-5.9-2-2-4-4.1-6-6.2-.5-.5-1.1-1.1-1.5-1.7-.5-.7-.3-1.6.3-2.1s1.4-.4 2 .3c2.3 2.3 4.6 4.5 6.9 6.8 2.3 2.3 4.6 4.6 7 7.1 1.5-1.4 2.8-2.8 4.3-4.2-1.1-1.1-2.2-2.3-3.3-3.3-1-1-2-1.9-3-2.9-1.3-1.3-2.6-2.7-4-4-1.3-1.3-2.6-2.5-3.8-3.9-.6-.6-.5-1.4.2-2 .6-.6 1.4-.7 2.1-.1 1.3 1.3 2.6 2.6 3.9 3.8l4.2 4.2c1.5 1.5 2.9 3 4.4 4.4l2.5 2.5c1 1 1.9 1.9 2.8 2.9.5.5 1.1 1 1.5 1.5 1.7 2.3 1.9 4.8.4 7.3-.2.2-.4.4-.6.8zM8.8 69.5c-1 .3-1.4-.3-1.4-1v-7.8h1.4c0 .3.1.6.1.7 1-.3 2-.8 3-1 1.2-.1 2.1.6 2.6 1.7.5-.4.9-.9 1.4-1.2 2.5-1.3 4.5-.2 4.7 2.6.1 2 0 3.9 0 6h-1.4v-5.9c-.1-1.2-.8-2-1.8-2.1-1.2-.1-2.2.6-2.4 1.8-.2 1.1-.2 2.3-.2 3.5v2.7h-1.5v-5.6c-.1-1.5-.6-2.2-1.8-2.4-1.2-.1-2.4.7-2.6 2-.2 1.1-.1 2.2-.1 3.3v2.7zm19.8 0H27v-12h1.5v4.8h5.9v-4.8H36v12h-1.6v-5.9h-5.9c.1 2 .1 3.9.1 5.9zm57.6-25.3c-.1.8-.2 1.8-.3 2.7-.3 1.7-1.3 2.8-2.8 3.3-1.7.6-3.2-.1-4.1-1.5-.6-.9-.8-2.2-1-3.3-.3-1.8 0-3.6.6-5.3.8-2.2 4.1-2.9 5.9-1.3 1.7 1.5 1.5 3.4 1.7 5.4zm-1.5 0c-.2-1.1-.3-2.2-.5-3.2s-1-1.7-1.9-1.8c-.9-.1-1.7.4-2.1 1.5-.8 2.4-.8 4.8.2 7.2.4 1 1.1 1.1 1.9 1 .8 0 1.6-.3 1.8-1.3.2-1.1.4-2.2.6-3.4zM59.8 81.3v-4.8h1.4v1.4c0 3-.1 5.9 0 8.9 0 1.1-.3 1.5-1.4 1.6 0-.2-.1-.4-.2-.8-.8 1.5-2 1.8-3.3 1.6-1.4-.2-2.3-1.2-2.8-2.6-.7-1.9-.4-3.7.5-5.4 1.1-1.8 4.2-1.9 5.8.1zm.1 3.3c-.2-.8-.4-1.7-.7-2.4-.7-1.4-2.8-1.5-3.6-.2-1.1 1.6-1.1 3.6 0 5.1.7 1 3.1 1 3.6-.1.3-.7.5-1.6.7-2.4zm-17.4.2h-6.8c-.1 1.9 1 3 2.9 3 1.1 0 2.2-.3 3.3-.5.2 1.1.2 1.2-1.1 1.6-1.5.5-3 .5-4.4-.1-1.8-.9-2.6-2.5-2.4-4.4.1-1.5.3-2.9 1.8-3.8 1.7-1 3.5-1.1 5.2.1.6.4.9 1.3 1.2 2.1.2.5.2 1.2.3 2zm-1.6-1c0-1.6-.9-2.7-2.3-2.8-1.7-.1-2.8 1-2.9 2.8h5.2zm11-52.9c-2.6 0-4.2-1.8-4-4.7.1-3.1 1.4-4.5 4.1-4.5 2.7 0 4 1.6 4.1 4.7-.1 2.8-1.8 4.7-4.2 4.5zm2.6-4.5c-.2-.8-.3-1.6-.6-2.3-.6-1.4-2.5-1.7-3.5-.5-1.2 1.4-1.3 3.6-.3 5.1.5.8 1.5 1.1 2.5.9 1.2-.5 1.8-1.4 1.9-3.2zm4.7 4.3h-1.6v-8.9h1.5c0 .3.1.5.1.9.1-.1.2-.1.2-.1 1.3-1.1 3.4-1.4 4.6-.4.6.5 1 1.6 1.1 2.5.2 2 0 4 0 6h-1.4v-5.9c-.1-1.3-.9-2-2-2-1.3 0-2.5.9-2.5 2.1v5.8zM39.8 11.3h-1.5V2.4h1.5c0 .2.1.5.1.9.1 0 .2-.1.2-.1 1.3-1.1 3.3-1.5 4.6-.4.6.5 1 1.6 1.1 2.5.2 2 0 4 0 6.1h-1.4V5.5c-.1-1.2-1-2-2-2.1-1.3 0-2.4.9-2.5 2.1-.1 1.5 0 3 0 4.5-.1.4-.1.8-.1 1.3zM54 2.4h1.5v8.9H54c0-.4 0-.7-.1-.9-.8.3-1.5.9-2.4 1-2.2.2-3.1-.4-3.5-2.7-.3-2-.1-4.2-.1-6.3h1.3c0 1.7-.1 3.4 0 5.2 0 .7.3 1.7.8 2.1 1.4 1.2 3.6.2 3.7-1.7.1-1.5 0-3 0-4.5.3-.3.3-.7.3-1.1zm31.4 59.2c0-.3 0-.6.1-1h1.2c.7 2.8-.5 5.1-1.9 7.4-.1.2-.2.3-.3.5-.3.4-.7 1.1-1 1.1-.8.1-1.8.1-2.5-.3-1.1-.7-2.1-1.7-2.1-3.2 0-1.2 0-2.6.5-3.7 1.1-2.4 3.7-2.8 5.7-1 .1.1.1.3.1.4l.2-.2zm-5.2 3.3c.1 0 .1 0 .2.1 0 .5.1 1 .1 1.5.2 1.3.8 1.8 2 1.9 1.1.1 2-.4 2.5-1.4.5-1.1.6-2.4.1-3.5-.3-.7-1.1-1.4-1.8-1.8-.8-.4-1.8.1-2.2.8-.5.7-.6 1.6-.9 2.4zm-3-34.1h-1.3v-8.9h1.3c0 .3 0 .6.1 1 .5-.3 1-.7 1.5-.9 1.7-.8 4.2-.4 4.6 2.4.1.4.1.7.1 1.1v5.3h-1.4v-5.4c0-1.6-.8-2.5-2-2.6-1.4-.1-2.6 1-2.7 2.5-.1 1.5 0 3 0 4.5-.2.3-.2.6-.2 1zM51.6 89h-1.4v-5.7c0-1-.4-1.8-1.4-2.1-.9-.4-1.9-.2-2.4.6-.5.6-.8 1.4-.9 2.1-.1 1.4 0 2.7 0 4.1v1h-1.3v-8.9h1.3c0 .3 0 .7.1 1 .4-.3.8-.5 1.2-.8 2.3-1.3 4.7-.1 4.9 2.6 0 2-.1 4-.1 6.1z" fill="#fff"/><path d="M51.4 68.3V73H50V60.7l.2-.2c.6.6 1.3 1.1 1.9 1.7.1.1 0 .4-.1.6-.9 1.7-.7 3.3.2 4.8.3.5 1.2.7 1.8.7.6 0 1.2-.4 1.8-.8.3-.2.4-.7.5-1.1 1.5 1 1.6 1.4.3 2.5-1.7 1.4-3.2 1.2-5.2-.6zM26.2 86c-1.4-.3-1.4-.3-1.4-1.8V80h1.4c0 .3 0 .6.1 1 .4-.2.7-.5 1-.7 2.2-1.4 5-.1 5.4 2.5.2 1.2.1 2.4-.1 3.6-.1.6-.5 1.2-1 1.5-.3.2-1-.1-1.7-.1 1.5-1.7 1.4-3.5 1-5.3-.2-.9-1.3-1.5-2.2-1.5-.9 0-2 .9-2.2 2-.3.9-.2 1.9-.3 3zm12.2-24.4c-.4 0-.6-.1-1-.1v-.9c.3-.1.6-.1.9-.2v-2.5h1.5v2.5h3.1v1h-3v5.9c0 .2.5.6.8.6.7.1 1.4 0 2.1 0v1.4c-.8 0-1.6.1-2.4 0-1.3-.2-2.1-1.1-2.2-2.5.2-1.6.2-3.3.2-5.2zm5.8 0c-.3 0-.6-.1-.9-.1v-.9c.3-.1.6-.1 1-.2v-2.5h1.4v2.5h3.1v1h-3v5.7c0 .6.4.9 1 .9h2v1.3c-.2 0-.3.1-.5.1-3.2.1-3.9-.5-3.9-3.8-.2-1.2-.2-2.5-.2-4zM19.7 38.2c.6.4.9.9.6 1.6-1.7 4.2-1.3 7.6 1 12.5-.7-.2-1.3-.3-1.5-.6-2.7-3.9-3.1-9-.1-13.5zM1.2 41.1c2.9-.1 4.2 1.8 4.2 4.8 0 2.7-1.8 4.6-4.2 4.4-.1-.4-.2-.7-.2-1.1 2.2-.8 2.9-1.7 2.8-3.8-.1-1.9-.9-2.9-2.8-3.3.1-.4.1-.7.2-1zm22.9 28.5h-1.3V57.1h1.3v12.5zm-17-28.4h1.3c0 .4 0 .7.1 1.1 1-1.1 2.2-1.5 3.7-1.3v1.2c-2.7-.2-3.8.8-3.8 3.4v4.3c0 .1 0 .1-.1.2H7c.1-2.9.1-5.9.1-8.9zm19.8 7.5c.3-.9.6-1.7.8-2.5 1.5.3 1.5.3 1 1.6-.1.3-.2.6-.4.8-.8 1.6-.8 1.6-2.5 1.4-1.1-2.9-2.2-5.7-3.3-8.8 3 1.8 3.2 4.9 4.4 7.5zM68 78c-3.5 1.2-4.6 4.5-2.8 8.1-.4.2-.7.4-1.3.8-.3-.9-.7-1.7-.8-2.5-.2-1.6-.4-3.2.6-4.7.5-.8 1.2-1.6 2-2.2 1.1-.9 1.3-.8 2.3.5zm3.9-56.2h1.5v8.9h-1.5v-8.9zM59.2 11.3h-1.5V2.6c1.5.1 1.5.1 1.5 1.6v7.1zm18.4 54.1c-1.2-.2-2.6.6-3.5-1h2.1c0-2.6-1.8-3.5-4.4-2.2l-.9-.9c1.8-1.2 3.7-1.3 5.4 0 1.2.9 1.4 2.5 1.3 4.1zM61.2 43.9v-1.1h10.4v1.1H61.2zm10.4 2.2v1.1H61.2c0-.3 0-.7-.1-1.1h10.5zm-38.4.9c0 1 .4 1.7 1.4 1.9 1.3.3 2.4-.1 3.2-1.2.7.7 1.4 1.5 2 2.2-.1.1-.1.2-.2.3h-1.4c-.1-.4-.1-.7-.2-1.2-1.4 1.4-3 1.9-4.8 1-1-.6-1.6-1.6-1.4-2.9.4-.1.8-.1 1.4-.1zM63 11.3h-1.3V4c1 .1 1.4.5 1.4 1.6-.2 1.9-.1 3.8-.1 5.7zM17.3 80.6c1.6-1.1 3-.9 4.2-.1 1.3.9 1.6 2.3 1.8 3.9-1-.2-1.6-.7-2-1.6-.4-1-1.1-1.8-2.4-1.7-.5-.1-.9-.3-1.6-.5zm27.1-58.8h1.3v6.4c-.9-.9-1.6-1.9-1.4-3.3.2-.9.1-2 .1-3.1zM6.2 25.1c1.3.5 1.5 1.4 1.4 2.6-.1 1 0 2 0 3H6.2v-5.6zM31.4 7.2v1.1c-1.7 0-3.4.1-5.1 0-.4 0-.8-.6-1.5-1.1h6.6zm11.8 14.6v.9c-.9 0-1.9.2-2.7-.1-1.2-.4-1.9-2-1.8-3.4H40v2.5c1.1.1 2.1.1 3.2.1zm42.5 3.6c1 1.7 1.8 3.4 1.2 5.4h-1.2v-5.4zM89 48.2h1.3c.5 1.3-.5 2.1-.8 3.1-.2.8-.6.8-1.3.6.2-1.1.5-2.3.8-3.7zm-23.5-35c.3-1.3.6-2.5.9-3.8h1.3c.4 1.6-.9 3.9-2.2 3.8zM5.8 57.6l-2.1 3.3c-.6-1-.8-1.7 0-2.7.6-.9 1.2-.7 2.1-.6zM27.3 4.8c1.3-.3 2.6-.7 4-1.1v1.4h-4v-.3zm26.4 39.3c-1.1-.7-2-1.4-1.4-2.9h1.4v2.9zm35.1-.8v-1.8h1.5v1.8h-1.5zm-36.5-5.7h1.4v1.7h-1.4v-1.7zm19.6-19.4h1.5v1.7h-1.5v-1.7zm-26.2 1.7h-1.3v-1.7h1.3v1.7z" fill="#fff"/></svg>',
      forumSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M300 148.4c-.3 74.4-51.6 135.8-123.1 149-31.4 5.8-61.5 1.7-90.4-11.9-2.4-1.1-4.5-1.3-7-.7-20.9 4.8-41.8 9.4-62.7 14.4-10.2 2.5-18.6-5.7-16-16.3 5.2-21.2 9.8-42.6 14.6-63.9.3-1.4.1-3.1-.5-4.4-24.1-55-19.3-107.4 16.6-155.9C54.7 27.5 86.4 8.9 124.8 2.2c77.6-13.4 149.6 35.2 169.7 107.2 3.7 13.4 5.4 27 5.5 39zm-150-11.2h53.2c3.5 0 7 .1 10.5-.1 7.1-.5 12.3-7.4 10.9-14.5-1.3-6.3-6.1-10.1-13.2-10.1H86.7c-8.1.7-13.3 8.2-11.1 15.9 1.6 5.4 6.3 8.7 12.7 8.7 20.8.1 41.3.1 61.7.1zm-15.4 25.5h-29.8c-6 0-12.1-.2-18.1.1-7.4.4-12.5 7.4-10.9 14.6 1.3 6.3 6.2 9.9 13.6 9.9h91.3c5.7-.1 10-2.4 12.2-7.8 3.4-8.3-2.6-16.7-12-16.8-15.5-.1-30.9 0-46.3 0z"/></svg>',
      helpSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M125.9 212.1c-.2 6.2-2.3 12.4-7.3 17.4-17.4 17.5-34.7 35.1-52.2 52.4-9.8 9.7-23.9 10.6-34.6 2-5.8-4.6-11.2-9.9-15.9-15.7-8.8-10.8-6.9-26 3.8-36.6l41.1-40.8c2.2-2.2 4.4-4.5 6.5-6.7 12.2-12.9 29.1-13.3 41.7-.8 3.2 3.1 6.4 6.3 9.4 9.5 4.9 5 7.5 11.3 7.5 19.3zm84.9-86.2c-6.4-.1-12.3-2.2-17.3-6.8-3.8-3.6-7.5-7.3-11.2-11-11.2-11.4-11.2-27.6 0-38.9 13.4-13.6 27-27 40.5-40.5 2.8-2.8 5.5-5.6 8.2-8.4 11-11.6 28.9-14.5 41.6-.7 2.7 2.9 5.7 5.7 8.5 8.5 11.4 11.6 11.5 27.6.1 39.1-12.4 12.5-24.9 25-37.4 37.4-4.4 4.4-8.8 8.9-13.3 13.2-5.4 5.4-11.8 8.1-19.7 8.1zm-84.9-36.5c.2 6.4-2.5 11.7-6.5 16.4-3.6 4.2-7.5 8.2-11.6 12.1-11.6 11.1-27.5 10.9-38.9-.4-15-14.9-29.8-29.8-44.8-44.7-2.1-2.1-4.3-4.2-6.4-6.4-10-10.8-10-26.5.1-37.2 3.2-3.3 6.4-6.5 9.7-9.7 12.1-12 28-12.1 40.1-.1C82.7 34.1 97.6 49 112.4 64c3.4 3.4 7 6.7 9.3 10.8 2.5 4.3 3.5 9.5 5.1 14.2-.2.1-.5.3-.9.4zm163.6 163.2c0 6.4-2 12.1-6.3 16.8-4.4 4.8-8.9 9.4-13.7 13.7-10.4 9.3-26.3 8.4-36.6-1.8-11.9-11.8-23.7-23.6-35.5-35.5-5.4-5.4-10.7-10.8-15.9-16.2-9.4-9.8-10.1-24.8-1.4-35 4.5-5.2 9.4-10.2 14.7-14.6 10.5-8.9 25.8-7.8 36.1 2.4 14.4 14.2 28.6 28.5 42.9 42.8 2 2 4 3.9 6 5.8 6 5.9 9.6 12.9 9.7 21.6zM17.6 79.9c1.8 2.3 3.3 4.4 5 6.2 13.1 13.2 26.4 26.3 39.6 39.5 1 1 2 2.2 3.3 2.8 4.5 2.3 4.9 5.8 4 10.4-1.6 8.6-1.2 17.3.5 25.9.4 2.1.2 3.4-1.8 4.7-2.8 1.8-5.3 4.1-7.7 6.4-13.6 13.5-27.2 27.1-40.7 40.7-.9.9-1.4 2-2.2 3.3-23-40.5-23.9-97.1 0-139.9zM81.1 283c7-7.2 14-14.1 20.7-21.2 9.9-10.3 19.6-20.7 29.5-31 .7-.7 2.1-1.1 3.1-.9 10.4 1.9 20.8 1.9 31.3 0 .9-.2 2.3.2 2.9.8 6.5 6.9 12.7 14 19.3 20.8 9.4 9.7 19.1 19.1 28.7 28.6.9.9 1.7 1.8 2.5 2.7-38.3 21.8-94.9 24-138 .2zM220 17.7c-2.5 2.1-4.9 3.7-6.9 5.7-13 13-26 26-38.9 39.1-1.8 1.8-3.5 3.8-4.9 5.9-1.2 1.9-2.5 2-4.5 1.6-10-1.9-20-1.9-29.9 0-2.1.4-3-.2-4.4-1.8-4.5-5.3-9.1-10.4-14-15.3-11-11.1-22.1-22.1-33.1-33.1-.9-.9-1.7-1.8-2.5-2.7C119.8-5 176.5-6.6 220 17.7zm62.8 63.1c23.5 42.1 22.5 98.6-.1 138.3-4.7-4.7-9.3-9.4-14-14-10.5-10.5-21.1-20.9-31.6-31.3-1-1-2-2.3-3.2-2.9-4.1-1.9-4.4-4.7-3.7-8.8 1.7-9.2 1.3-18.4-.4-27.6-.2-1 .2-2.5.9-3.1 11.7-11.3 23.5-22.5 35.2-33.8 5.7-5.5 11.3-11.2 16.9-16.8z"/></svg>',
      librarySVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M64.1 150.2v126.1c0 14.9-8.7 23.6-23.6 23.6H22.8C9 299.9 0 291 0 277.1V30.5c0-4.6-.2-9.2.6-13.7C2.4 7.2 10.9.3 20.8.1c7-.1 14-.1 21 0 13.1 0 22.3 9.2 22.3 22.3v127.8zm21.3-.4V23.7C85.4 8.9 94.1.1 108.8.1h18.7c12.7.1 22 9.2 22 21.9v256.3c0 12.5-9.3 21.6-21.8 21.7-6.8.1-13.6.1-20.4 0-12.7-.1-21.8-9.3-21.9-22V149.8zM300 271.2c-.2 9.4-6.1 17.8-15.1 20.5-7.3 2.2-14.7 4.3-22.2 6-11.7 2.8-22.5-4-25.7-16-7.4-27.7-14.8-55.5-22.2-83.3-14.5-54.2-29-108.4-43.4-162.6-3.6-13.6 2.6-24.6 16.1-28.3 6.1-1.7 12.2-3.3 18.3-4.9 12.8-3.3 23.8 3 27.2 15.8 7.3 27.2 14.6 54.4 21.8 81.6 14.6 54.8 29.2 109.5 43.8 164.3.6 2.3.9 4.6 1.4 6.9z"/></svg>',
      logSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M.3 167.5h78.4c6.7 0 11.3-3.7 11.8-9.3.6-6.3-3.7-11.3-10.1-11.6-2.3-.1-4.6 0-6.9 0H3.9c.3-1.1.4-2 .7-2.7 6.3-16.9 16.4-30.4 33.9-36.7 4.7-1.7 10-2.3 15-2.4 14.6-.3 29.2-.1 44.3-.1-.4-1.2-.7-2.1-1.1-2.9-2.2-4.5-4.6-8.9-6.7-13.5-5.9-12.5 2-25.4 15.8-25.6 10.8-.1 21.6 0 32.4 0 7.6 0 13 3.6 16.4 10.4 4.8 9.6 9.6 19.1 14.3 28.7 1 2.2 2.2 3 4.7 3 12-.1 24-.1 36.8-.1-20.9 18.9-29.2 42.4-29 69.9h-44.1c-6.6 0-11.1 3.9-11.5 9.6-.4 6.6 4.1 11.3 11 11.3 14.8.1 29.6.1 44.5 0 2.4 0 3.5.6 4.3 3.1 4.3 14.4 11.8 26.9 23 37.1.4.4.8.8 1.1 1.2 0 0 0 .2-.1.7h-3.7c-49.8 0-99.6-.3-149.4.1-19.1.1-33.1-8-43.6-23.1C3.4 200.8-.4 185.5 0 169.1c0-.4.2-.8.3-1.6z"/><path d="M195.2 170.9c.4-18.2 5.2-34.8 17.1-48.8 19.6-23.1 49.9-23.4 69.9-.7 23.9 27 23.6 73.5-.7 99.9-10 10.9-22.2 17.1-37.4 15.9-13.1-1.1-23.5-7.6-31.8-17.4-12-14.1-16.7-30.8-17.1-48.9z"/></svg>',
      otherSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M135 92.2c0 9 .1 18 0 27-.1 9.2-6 15.7-14.9 15.8-19.8.1-39.6.6-59.3-.5C31.4 132.9 5.3 108 1 78.7-4.7 39.9 20.5 6.1 59.5.6c34.3-4.8 68.9 20.4 74.2 54.9 1.8 12.1 1.4 24.5 2 36.7h-.7zm72.9 42.9h-26.3c-10.5 0-16.6-6.2-16.6-16.6.1-19.2-.5-38.4.6-57.5 1.7-29.5 26.5-55.5 55.7-59.9 38.9-5.8 73.1 19.9 78.2 58.8 4.8 36.8-23.7 72.1-60.7 74.7-10.2.7-20.6.1-30.9.1v.4zm-43 74.7v-28.1c0-10.5 6.1-16.7 16.6-16.7 19.2.1 38.4-.5 57.6.6 29.6 1.7 55.2 26.1 59.8 55.4 5.8 36.6-16.9 69.7-53 77.5-38.6 8.4-77.4-20.2-80.4-59.6-.7-9.7-.1-19.4-.1-29.1h-.5zM90.3 165h28.1c10.5 0 16.7 6.1 16.6 16.6-.1 19.2.5 38.4-.6 57.6-1.7 29.5-26.2 55.2-55.4 59.8-36.6 5.7-69.7-17-77.5-53.1-8.3-38.6 20.2-77.3 59.7-80.4 9.7-.7 19.4-.1 29.1-.1v-.4z"/></svg>',
      scriptSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M1 150.1c0-11.2 1.1-22.2 4-33.1 1.6-6.1 6.3-9.8 12.8-9.4 17.3.9 31.5-9.8 34.6-25.5 1.7-8.7-.4-16.8-5-24.4-1.1-1.8-2.1-3.9-2.6-6-.8-3.2.2-6 2.6-8.4C63.9 26.8 83.4 15 106 8.4c6.6-1.9 10.5-.3 13.6 5.8 4.1 8.4 10.4 14.5 19.3 17.5 15.4 5.2 31.9-1.4 39.5-15.8 4.2-8 8-9.6 16.7-6.9 21.4 6.7 40.2 18 56.5 33.3 3.7 3.5 4 8.6.5 13.5-4.6 6.5-6.5 13.6-6 21.5.9 17.5 16.8 31.2 34.2 29.5 7.3-.7 11.7 2.4 13.7 9.5 3.7 13 7.1 26.1 5.8 39.7-.9 9.3-2.3 18.6-4.1 27.8-1.2 6.2-5.4 8.9-11.8 8.7-16.7-.6-30.7 8.6-34.6 23-2.6 9.4-.9 18.1 4.2 26.3 4.8 7.8 4.4 11.4-2.5 17.5-16.4 14.5-34.7 25.6-55.8 32.1-7.2 2.2-11.9.2-15.4-6.4-6.3-11.9-16.2-18.3-29.6-18.2-13.3.1-23 6.7-29.1 18.5-3.3 6.4-7.9 8.4-14.8 6.3-22.5-6.9-41.9-18.9-59.1-34.8-3.7-3.4-3.9-8.6-.5-13.5 4.6-6.5 6.4-13.7 6-21.5-.9-17.4-16.9-31.2-34.2-29.4-8.7.9-12.2-1.2-13.8-9.8-2-10.7-3.2-21.5-4.7-32.3.3-.1.6-.1 1-.2zm218.3-.1c-1.1 1.1-1.9 2-2.7 2.9-7.2 7.3-14.6 14.4-21.7 21.8-4.3 4.5-4.1 10.5.2 14.8 4.2 4.1 10.1 4.3 14.5 0 10.8-10.6 21.5-21.3 32.1-32.1 4.3-4.4 4.3-10.2 0-14.5-10.6-10.8-21.3-21.5-32.1-32.1-4.4-4.3-10.6-4.1-14.8.2-4.1 4.2-4.2 10.1 0 14.6 3 3.2 6.2 6.3 9.3 9.4 5.1 4.9 10.1 9.9 15.2 15zm-139.8.2c.9-.9 1.4-1.5 1.9-2 7.5-7.5 15.1-14.9 22.4-22.5 4.3-4.5 4.1-10.6-.1-14.8-4.2-4.1-10.2-4.3-14.6-.1-10.8 10.6-21.5 21.3-32.1 32.1-4.2 4.3-4.4 10.1-.3 14.3 10.8 11 21.7 22 32.8 32.7 4 3.9 9.7 3.6 13.8-.1 4.2-3.9 4.8-9.5 1.4-14-1-1.3-2.2-2.4-3.4-3.6-7.1-7.4-14.4-14.6-21.8-22zm48.4 52.9c4.9 0 8-2.7 10-6.8l41.7-83.4c2.7-5.5.7-11.5-4.6-14-5.4-2.6-10.3-.6-13.3 5.3-14 27.9-27.9 55.8-41.9 83.7-.4.9-.9 1.8-1.2 2.7-1.9 6.1 2.8 12.5 9.3 12.5z"/></svg>',
      searchSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M291 250.7c-18.7-18.7-37.3-37.4-56.1-56-1.8-1.7-1.8-2.8-.6-4.9 11.7-19.7 17.3-41.1 18.1-64-1.1-8.5-1.7-17.2-3.4-25.7C234.7 28.5 159.5-16.6 89.8 5.6c-48.5 15.5-78.3 49-87.6 99.1C-4.7 142 4.6 176 28.7 205.3 68.4 254 136 265.8 190.3 234.1c1.8-1.1 2.9-1.1 4.4.5 13 13.1 26 26.2 39.1 39.2 6.4 6.4 12.6 13 19.3 19 12.4 11.2 31.7 8.9 41.5-4.6 8.4-11.5 7-26.8-3.6-37.5zm-165-47.2c-42.8 0-77.5-34.7-77.5-77.5S83.2 48.5 126 48.5s77.5 34.7 77.5 77.5-34.7 77.5-77.5 77.5z"/></svg>',
      userSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M150.2 285H79.9c-12.2 0-19.4-4.6-23.8-15.9-1.7-4.4-3-9.2-3.3-13.9-1-15-1.2-30 6.3-43.9 8.4-15.7 21.1-26 38.5-30.4 7.2-1.8 14.2-.8 20.8 2.6 21.1 11.1 42.1 11.2 63.2.1 8.3-4.3 16.8-4.5 25.5-1.6 24.4 8.3 40.1 30.1 40.6 56.6.2 8.8.7 17.6-2 26.1s-6.7 16.1-16.1 18.9c-2.9.8-6 1.2-9 1.2-23.5.2-46.9.2-70.4.2zm-.1-120c-37.5-.2-67.6-30.3-67.5-67.4.1-37.6 30.6-67.7 68.2-67.5 37 .2 67 30.8 66.8 68.2-.2 36.8-30.6 66.9-67.5 66.7zm-64.5-4.3c-30 11.4-48.2 32.8-54.5 64.2-4.1 0-7.9.3-11.8-.1-7.4-.6-12.9-4.4-15.6-11.3C2 209 .5 204.1.3 199.3c-.6-10.6-1-21.3 3.5-31.5 6.3-14.4 16.9-23.9 32-28.3 6.3-1.8 12.3-.8 18.5 1.7 6.3 2.6 13 4.3 19.5 6.5.8.3 2 .4 2.5 1 3.1 4 6.1 7.9 9.3 12zm129 0c3.3-4.1 6.3-8.1 9.5-12 .5-.6 1.6-.7 2.5-.9 6.4-2.1 13-3.7 19.2-6.3 6.6-2.8 12.9-3.6 19.8-1.5 20 6.1 33.9 23.8 34.4 44.7.2 7.7.2 15.6-1.4 23-2.8 12.8-9.6 17.4-22.6 17.4h-6.8c-6.5-31.4-24.5-52.9-54.6-64.4zm-18-140.6c19.8-8 38.8-6.9 55.9 5.8 19.3 14.4 26.6 34.2 21.2 57.6-4.5 19.9-17.5 32.9-37 40 9.9-43.6-3.5-77.8-40.1-103.4zM63.5 123.6c-19.5-7.1-32.1-20.2-37-40-5.5-22.1 3-44.9 21.5-57.9 17.4-12.2 36-13.5 55.7-5.5C67 45.7 53.6 79.9 63.5 123.6z"/></svg>',
      clearSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M150.3 125.2c1-1.2 1.7-2.1 2.5-2.9C191.4 83.6 230 45 268.6 6.5c6.8-6.8 14.7-8.3 22.3-4.2 9.4 5.1 12 17.6 5.4 26-1 1.3-2.2 2.5-3.3 3.7-38.5 38.5-77 77.1-115.6 115.6-.7.7-1.5 1.5-2.3 2.4.9.9 1.7 1.8 2.5 2.6l116 116c6.9 6.9 8.3 15 4 22.6-5.2 9.1-17.6 11.6-25.9 5.1-1.3-1-2.5-2.2-3.7-3.3-38.5-38.5-77.1-77-115.6-115.6-.7-.7-1.5-1.5-2.4-2.3-.9.9-1.8 1.7-2.6 2.5l-116 116c-6.9 6.9-15 8.3-22.6 4-9.1-5.2-11.6-17.6-5.1-25.9 1-1.3 2.2-2.5 3.3-3.7 38.5-38.5 77-77.1 115.6-115.6.7-.7 1.5-1.5 2.3-2.4-.9-.9-1.7-1.8-2.5-2.6l-116-116c-6.9-6.9-8.3-15-4-22.6C7.6-.3 20-2.8 28.3 3.7c1.3 1 2.5 2.2 3.7 3.3 38.5 38.6 77 77.1 115.6 115.6.7.8 1.5 1.5 2.7 2.6z"/></svg>',
      findSVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 300 300"><path d="M223.7 239.9C164.9 288.8 80.3 279.7 33 224.7c-46.3-53.8-43.6-133 6.2-184.3 48.3-49.7 128.4-54 182.6-9.8 57.6 46.9 67.8 134 17.4 194 1.1.7 2.6 1.2 3.6 2.2 17.8 17.7 35.6 35.6 53.4 53.3 3.3 3.3 4.6 7.1 3.4 11.7-1.2 4.2-4.1 6.9-8.3 8-4.6 1.1-8.3-.6-11.5-3.9l-53.1-53.1c-1-1.1-2-1.9-3-2.9zm-87.9 9.1c62.4.2 113.2-50.5 113.2-113S198.9 23.2 136.2 22.9c-62.4-.5-113.1 50-113.4 112.7-.2 62.5 50.3 113.2 113 113.4z"/></svg>';

// Function for inserting new elements in the DOM.
function elemake(tag, innr, attr) {
    let element = document.createElement(tag);
    if (innr) {element.innerHTML = innr;}
    if (!attr) {return element;}

    for (let x = 0; x < attr.key.length; x++) {
        element.setAttribute(attr.key[x], attr.val[x]);
    }
    return element;
}

// Dark Theme Colors
const duskCSS = `
:root {
  --engine-body-bg: #fbfbfb;
  --engine-nav-bg: #f6f6f6;
  --engine-nav-shade: #e0e0e0;
  --engine-text-color: #000000;
  --engine-accent-color-1: #a42121;
}
`.replace(/\n/g,'').replace(/\s{2}/g,' ').replace(/([\{\;\:])\s/g,'$1');

// Light Theme Colors
const dawnCSS = `
:root {
  --engine-body-bg: #ffffff;
  --engine-nav-bg: #f6f6f6;
  --engine-nav-shade: #e0e0e0;
  --engine-text-color: #000000;
  --engine-accent-color-1: #a42121;
}
`.replace(/\n/g,'').replace(/\s{2}/g,' ').replace(/([\{\;\:])\s/g,'$1');

// General Redesign Excluding Colors
const normCSS = `
:root {
  --engine-border-radius: 4px;
}

html {
  font-size: 10px;
}
html, html > body {
  height: 100%;
  width: 100%;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
html > body {
  display: flex;
  flex-direction: column;
  background-color: var(--engine-body-bg);
  font-size: 1.6rem;
}

*, *::before, *::after {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

a, a:visited, a:active {
  text-decoration: none;
  color: var(--engine-text-color);
  fill: var(--engine-text-color);
}

#main-header {
  background: var(--engine-nav-bg);
  color: var(--engine-text-color);
  box-shadow: initial;
  padding: 1.6rem;
}
#main-header > .width-constraint {
  height: 100%;
  margin: 0 auto;
  padding: 0;
}
#main-header a, #main-header a:visited, #main-header a:active {
  color: inherit;
  fill: inherit;
}

#site-nav {
  height: 100%;
  width: -moz-fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
#site-nav > nav {
  display: flex;
  gap: 16px;
}
#site-nav > nav a:hover {
  color: var(--engine-text-color);
}
#site-nav > nav nav {
  background: var(--engine-nav-bg);
  color: var(--engine-text-color);
  padding: 1.6rem;
  transform: translateX(1.6rem);
  border-radius: 0 0 var(--engine-border-radius) var(--engine-border-radius);
  gap: 16px;
  z-index: 1;
}
#site-nav > nav > li + li {
  margin: 0;
}

#language-selector-locale {
  background: transparent;
  border: 1px solid var(--engine-nav-shade);
  border-radius: var(--engine-border-radius);
  cursor: pointer;
}
#language-selector-locale:hover, #language-selector-locale:focus {
  color: var(--engine-accent-color-1);
  background: var(--engine-nav-shade);
}

#nav-user-info {
  display: flex;
  gap: 1.3rem;
  text-align: center;
  position: static;
  width: -moz-fit-content;
  width: fit-content;
}
#nav-user-info .sign-in-link a {
  display: block;
  padding: 1px 6px;
  border: 1px solid var(--engine-nav-shade);
  border-radius: var(--engine-border-radius);
  color: var(--engine-text-color);
  text-decoration: none;
}
#nav-user-info .sign-in-link a:hover, #nav-user-info .sign-in-link a:focus {
  background: var(--engine-nav-shade);
  color: var(--engine-accent-color-1);
}
#nav-user-info select, #nav-user-info input {
  font-size: 1.3rem;
}

nav a:hover + nav, nav a:focus + nav {
  display: flex;
}
nav nav:hover {
  display: flex;
}

#site-nav > nav {
  text-align: center;
  position: static;
  width: -moz-fit-content;
  width: fit-content;
}
#site-nav > nav li > a, #site-nav > nav nav li > a {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  line-height: 1;
  gap: 6px;
  border: 1px solid var(--engine-nav-shade);
  padding: 0.8rem 1rem;
  border-radius: var(--engine-border-radius);
}
#site-nav > nav li > a:hover, #site-nav > nav li > a:focus, #site-nav > nav nav li > a:hover, #site-nav > nav nav li > a:focus {
  color: var(--engine-accent-color-1);
  fill: var(--engine-accent-color-1);
  background: var(--engine-nav-shade);
}
#site-nav > nav li > a svg, #site-nav > nav nav li > a svg {
  height: 1.6rem;
  width: 1.6rem;
}

nav .with-submenu {
  padding-right: 0;
}
nav .with-submenu > a::after {
  display: none;
}
nav .with-submenu a {
  position: relative;
  z-index: 2;
}

.script-list,
.user-list,
.text-content,
.discussion-list,
.list-option-group ul,
#script-info {
  border-color: transparent;
  box-shadow: initial;
  background: var(--engine-body-bg);
}

.width-constraint {
  width: 100%;
}
@media screen and (max-width: 1228px) {
  .width-constraint {
    margin: 0 auto;
  }
}

body > .width-constraint {
  flex-grow: 1;
}
body > .width-constraint .all-center-home {
  height: 100%;
  width: 100%;
  padding: 1.6rem 1.6rem 12.8rem 1.6rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  --_height: 5.6rem;
}
body > .width-constraint .all-center-home .engine-welcome {
  font-size: 1.5rem;
}

.engine-search-main {
  display: flex;
  width: 100%;
  height: var(--_height);
  max-width: calc(var(--_height) * 13.35714286);
  background: var(--engine-nav-bg);
  border-radius: var(--engine-border-radius);
  overflow: hidden;
  box-shadow: 0 3px 0 0 var(--engine-nav-shade);
}
.engine-search-main .engine-search-input {
  flex-grow: 1;
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1.7rem;
  padding: 1.3rem 0 1.3rem 1.3rem;
  color: var(--engine-text-color);
  fill: var(--engine-text-color);
}
.engine-search-main .engine-search-clear,
.engine-search-main .engine-search-submit {
  height: var(--_height);
  width: calc(var(--_height) * 1.2);
  background: transparent;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.engine-search-main .engine-search-clear:hover, .engine-search-main .engine-search-clear:focus,
.engine-search-main .engine-search-submit:hover,
.engine-search-main .engine-search-submit:focus {
  fill: var(--engine-accent-color-1);
}
.engine-search-main .engine-search-clear {
  display: none;
}
.engine-search-main .engine-search-clear svg {
  height: calc(var(--_height) / 3.5);
  width: calc(var(--_height) / 3.5);
}
.engine-search-main .engine-search-submit svg {
  height: calc(var(--_height) / 3);
  width: calc(var(--_height) / 3);
}
.engine-search-main .engine-search-submit:hover, .engine-search-main .engine-search-submit:focus {
  background: rgba(0, 0, 0, 0.06);
}
.engine-search-main.active .engine-search-submit {
  background: rgba(0, 0, 0, 0.06);
}
.engine-search-main.active .engine-search-clear {
  display: flex;
}

#engine-top-sites {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: calc(var(--_height) * 13.35714286);
}
#engine-top-sites a {
  border: 1px solid var(--engine-nav-shade);
  border-radius: var(--engine-border-radius);
  padding: 0.4rem 0.7rem;
  color: var(--engine-text-color);
}
#engine-top-sites a:hover, #engine-top-sites a:focus {
  color: var(--engine-accent-color-1);
  background: var(--engine-nav-bg);
}

#main-footer {
  padding: 1.6rem;
  background: var(--engine-nav-bg);
}
#main-footer .width-constraint {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#main-footer .width-constraint > span:first-of-type {
  display: flex;
  gap: 0.4rem;
}
#main-footer a {
  color: inherit;
}
#main-footer a:hover, #main-footer a:focus {
  color: var(--engine-accent-color-1);
}

#main-header .width-constraint {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#main-header .width-constraint #site-name {
  --_rem: 0.8rem;
}
@media only screen and (max-width: 1536px) {
  #main-header .width-constraint #site-name {
    --_rem: calc(0.8rem + -1px);
  }
}
@media only screen and (max-width: 1280px) {
  #main-header .width-constraint #site-name {
    --_rem: calc(0.8rem + -2px);
  }
}
@media only screen and (max-width: 1024px) {
  #main-header .width-constraint #site-name {
    --_rem: calc(0.8rem + -3px);
  }
}
@media only screen and (max-width: 768px) {
  #main-header .width-constraint #site-name {
    --_rem: calc(0.8rem + -4px);
  }
}
@media only screen and (max-width: 640px) {
  #main-header .width-constraint #site-name {
    --_rem: calc(0.8rem + -5px);
  }
}
#main-header .width-constraint #site-name a.greasy-svg {
  height: calc(9.2 * var(--_rem));
  width: calc(50 * var(--_rem));
}
#main-header .width-constraint #site-name a.greasy-svg svg {
  height: 100%;
  width: auto;
}
#main-header .width-constraint #site-name > *:not(.greasy-svg) {
  display: none;
}

#site-name h1, #site-name a, #site-name div {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

// Remove Bruteforced Styles
function removeStyles() {
    let styleTMP = document.querySelectorAll('head style[data-temp]');

    for (let x = 0; x < styleTMP.length; x++) {
        styleTMP[x].remove();
    }
}

// Regular Styles
function themeStyles(temp) {
    if (document.querySelector('#normCSS')) {return;}

    if (!temp) {
        // document.head.appendChild(elemake("link","",{"key":["rel","href","type","id"],"val":["stylesheet","http://127.0.0.1:12428/norm.css","text/css","duskCSS"]}));
        document.head.appendChild(elemake("style",normCSS,{"key":["type","id"],"val":["text/css","normCSS"]}));
        document.head.appendChild(elemake("style",duskCSS,{"key":["type","id"],"val":["text/css","duskCSS"]}));
        document.head.appendChild(elemake("style",dawnCSS,{"key":["type","id"],"val":["text/css","dawnCSS"]}));
    } else {
        // document.head.appendChild(elemake("link","",{"key":["rel","href","type","data-temp"],"val":["stylesheet","http://127.0.0.1:12428/norm.css","text/css","duskCSS"]}));
        document.head.appendChild(elemake("style",normCSS,{"key":["type","data-temp"],"val":["text/css","normCSS"]}));
        document.head.appendChild(elemake("style",duskCSS,{"key":["type","data-temp"],"val":["text/css","duskCSS"]}));
        document.head.appendChild(elemake("style",dawnCSS,{"key":["type","data-temp"],"val":["text/css","dawnCSS"]}));
    }
}

// Calculate loading time.
function loadTime() {
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    try {
        document.querySelector('#main-footer .width-constraint > span:nth-of-type(2)').innerHTML = 'Loaded in ' + (loadTime/1000).toFixed(2) + ' secs';
    } catch {}
}

// Add a simple footer on EVERY page
function addFOOTER() {
    let footer = `
        <div class="width-constraint">
            <span>
                <a href="/">Greasy Fork</a>
                <span>|</span>
                <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank">GPL-3.0</a>
            </span>
            <span>•••</span>
        </div>
    `.replace(/>\s+</g,'><');

    document.body.appendChild(elemake("footer",footer,{"key":["id"],"val":["main-footer"]}));
}

// Update NAV with Icons
function forkNAV() {
    let navList = document.querySelector('#site-nav > nav'),
        scriptL = navList.querySelector('.scripts-index-link a'),
        forumL = navList.querySelector('.forum-link a'),
        otherL = navList.querySelector('.with-submenu a'),
        helpL = navList.querySelector('.help-link');

    scriptL.innerHTML = scriptSVG + '<span>' + scriptL.innerText + '</span>';
    forumL.innerHTML = forumSVG + '<span>' + forumL.innerText + '</span>';
    otherL.innerHTML = otherSVG + '<span>' + otherL.innerText + '</span>';
    helpL.innerHTML = '<a href="' + scriptL.getAttribute('href').replace('/scripts','/help') + '">' + helpSVG + '<span>' + helpL.innerText + '</span></a>';

    let searchL = navList.querySelector('nav li a[href$="/search"]'),
        userL = navList.querySelector('nav li a[href$="/users"]'),
        libraryL = navList.querySelector('nav li a[href$="/libraries"]'),
        logL = navList.querySelector('nav li a[href$="/moderator_actions"]');

    searchL.innerHTML = searchSVG + '<span>' + searchL.innerText.replace('Advanced search','Search') + '</span>';
    userL.innerHTML = userSVG + '<span>' + userL.innerText.replace('User list','Users') + '</span>';
    libraryL.innerHTML = librarySVG + '<span>' + libraryL.innerText + '</span>';
    logL.innerHTML = logSVG + '<span>' + logL.innerText.replace('Moderator log','Mod Logs') + '</span>';
}

// Update HOMEPAGE with new Search
function forkHOME() {
    if (!document.getElementById('home-script-nav')) {return;}

    let topSites = document.querySelectorAll('#home-top-sites a'),
        siteTags = '';
    for (let x = 0; x < topSites.length; x++) {
        siteTags = siteTags + topSites[x].outerHTML;
    }

    document.querySelector('body > div.width-constraint > section.text-content').innerHTML = `
        <span class="engine-welcome">What are we forking today?</span>
        <form class="engine-search-main" action="${document.querySelector('#home-script-nav .home-search').getAttribute('action')}" accept-charset="UTF-8" method="get">
            <input class="engine-search-input" name="q" value="" autocomplete="off" type="search" required>
            <engine class="engine-search-clear">${clearSVG}</engine>
            <engine class="engine-search-submit">${findSVG}</engine>
        </form>
        <div id="engine-top-sites">${siteTags}</div>
    `.replace(/>\s+</g,'><');

    let input = document.querySelector('.engine-search-input'),
        clear = document.querySelector('.engine-search-clear'),
        submit = document.querySelector('.engine-search-submit');

    input.parentNode.parentNode.classList.add('all-center-home');

    function checkInput() {
        if (input.value === '') {
            input.parentNode.classList.remove('active');
        } else {
            input.parentNode.classList.add('active');
        }
    }

    input.addEventListener('input', checkInput);
    clear.addEventListener('click', function() {
        clear.parentNode.children[0].value = '';
        checkInput();
        clear.parentNode.children[0].focus();
    });
    submit.addEventListener('click', function() {
        submit.parentNode.submit();
    });
}

// Turn the logo into SVG
function logoSVG() {
    let logo = document.getElementById('site-name');

    logo.innerHTML = `
        <a class="greasy-svg" href="/">
            ${greasySVG}
        </a>
    `.replace(/>\s+</g,'><');
}