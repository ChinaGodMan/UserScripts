// ==UserScript==
// @name         GreasyFork - lines number fix
// @version      1.0.1
// @namespace    V@no
// @author       V@no
// @license      MIT
// @description  Fixes lines number over 9999 not shown properly
// @match        https://greasyfork.org/en/scripts/*/code*
// @icon         https://icons.duckduckgo.com/ip2/greasyfork.org.ico
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/480937/GreasyFork%20-%20lines%20number%20fix.user.js
// @updateURL https://update.greasyfork.org/scripts/480937/GreasyFork%20-%20lines%20number%20fix.meta.js
// ==/UserScript==

(css => {
    'use strict';
    const elCss = document.createElement("style");
    elCss.textContent = css;
    document.head.appendChild(elCss);
})(`
ol
{
  --offset: 3.5ch;
  padding-inline-start:var(--offset);
}
ol:has(li:nth-child(10)){--offset:4.5ch}
ol:has(li:nth-child(100)){--offset:5.5ch}
ol:has(li:nth-child(1000)){--offset:6.5ch}
ol:has(li:nth-child(10000)){--offset:7.5ch}
ol:has(li:nth-child(100000)){--offset:8.5ch}
ol:has(li:nth-child(1000000)){--offset:9.5ch}
ol:has(li:nth-child(10000000)){--offset:10.5ch}
ol:has(li:nth-child(100000000)){--offset:11.5ch}
ol:has(li:nth-child(1000000000)){--offset:12.5ch}
ol:has(li:nth-child(10000000000)){--offset:13.5ch}
ol:has(li:nth-child(100000000000)){--offset:14.5ch}
ol:has(li:nth-child(1000000000000)){--offset:15.5ch}
`);