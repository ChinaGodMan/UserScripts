// ==UserScript==
// @name        Open scripts list sorting for creation date by default
// @namespace   StephenP
// @match       https://greasyfork.org/*
// @grant       none
// @version     1.0
// @author      StephenP
// @description When you click on the top menu of Greasyfork on the Scripts link, you normally see the scripts listed by daily installs. With this script the same link will open scripts list sorted for creation date by defaut.
// @license     AGPL-3.0
// @contributionURL https://buymeacoffee.com/stephenp_greasyfork
// @downloadURL https://update.greasyfork.org/scripts/495477/Open%20scripts%20list%20sorting%20for%20creation%20date%20by%20default.user.js
// @updateURL https://update.greasyfork.org/scripts/495477/Open%20scripts%20list%20sorting%20for%20creation%20date%20by%20default.meta.js
// ==/UserScript==
var scriptslinks=document.getElementsByClassName("scripts-index-link");
scriptslinks[0].firstChild.href=scriptslinks[0].firstChild.href.replace("/scripts","/scripts?sort=created");