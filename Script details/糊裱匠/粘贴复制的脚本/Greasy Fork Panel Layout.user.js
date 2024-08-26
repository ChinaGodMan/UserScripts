// ==UserScript==
// @name        Greasy Fork Panel Layout
// @namespace   https://github.com/chriskim06/userscripts
// @description Moves the control panel to the right of the scripts listing as its own list group and removes ad
// @match       https://greasyfork.org/en/users/*
// @version     1.0.3
// @downloadURL https://update.greasyfork.org/scripts/21272/Greasy%20Fork%20Panel%20Layout.user.js
// @updateURL https://update.greasyfork.org/scripts/21272/Greasy%20Fork%20Panel%20Layout.meta.js
// ==/UserScript==

(function() {

  var section = document.querySelector('#control-panel');
  var panel = document.querySelector('#user-control-panel');
  var groups = document.querySelector('#script-list-option-groups');
  if (section !== null && panel !== null && groups !== null) {
    var div = document.createElement('div');
    div.className = 'list-option-group';
    div.innerHTML = 'Control Panel:';
    div.appendChild(panel);
    section.parentNode.removeChild(section);
    groups.insertBefore(div, groups.firstChild);
  }

  var ads = document.querySelectorAll('.ad');
  if (ads.length) {
    for (var i = 0; i < ads.length; i++) {
      ads[i].style.display = 'none';
    }
  }

})();

