// ==UserScript==
// @name         Toggle HTML View of Additional Info (Greasyfork)
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Adds a button to toggle the HTML view of the additional info div on Greasy Fork pages so yo can see the HTML that made that awesome looking Addition Info 😁
// @author       longkidkoolstar
// @license      MIT
// @icon         https://th.bing.com/th/id/R.324dedb79ac284c5289c6bcac9bd9177?rik=fGtU%2fR4d%2fTvQIw&pid=ImgRaw&r=0
// @match        https://greasyfork.org/*
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/471149/Toggle%20HTML%20View%20of%20Additional%20Info%20%28Greasyfork%29.user.js
// @updateURL https://update.greasyfork.org/scripts/471149/Toggle%20HTML%20View%20of%20Additional%20Info%20%28Greasyfork%29.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Create the button element
    const button = document.createElement('button');
    button.textContent = 'Toggle HTML View';

    // Style the button to match the Greasy Fork style
    button.style.backgroundColor = 'rgb(0, 82, 0)';
    button.style.border = 'none';
    button.style.color = '#fff';
    button.style.padding = '8px 16px';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.display = 'inline-block';
    button.style.fontSize = '16px';
    button.style.marginBottom = '16px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = 'inherit';

    // Get the additional info div
    const additionalInfoDiv = document.querySelector('#additional-info.user-content');

    // Add the click event listener to the button
    button.addEventListener('click', () => {
        // Toggle the HTML view
        if (additionalInfoDiv.dataset.htmlView === 'true') {
            // Revert to the original content
            additionalInfoDiv.dataset.htmlView = 'false';
            additionalInfoDiv.innerHTML = additionalInfoDiv.dataset.originalContent;
        } else {
            // Save the original content and replace with the HTML view
            additionalInfoDiv.dataset.htmlView = 'true';
            additionalInfoDiv.dataset.originalContent = additionalInfoDiv.innerHTML;
            additionalInfoDiv.textContent = additionalInfoDiv.innerHTML;
        }
    });

    // Add the button to the page
    additionalInfoDiv.parentNode.insertBefore(button, additionalInfoDiv);

})();