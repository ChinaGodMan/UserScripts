// ==UserScript==
// @name        Greasy Fork Links
// @namespace   https://github.com/chriskim06/userscripts
// @description Add links to navigate to the update tab and links to install scripts
// @match       https://greasyfork.org/en/users/*
// @version     1.3.4
// @downloadURL https://update.greasyfork.org/scripts/15201/Greasy%20Fork%20Links.user.js
// @updateURL https://update.greasyfork.org/scripts/15201/Greasy%20Fork%20Links.meta.js
// ==/UserScript==

(function() {

  // Adds an element next to the provided link
  function insertElement(link, text, href) {
    var el = document.createElement(href ? 'a' : 'span');
    if (href) {
      el.href = href;
    }
    el.innerText = text;
    link.parentNode.insertBefore(el, link.nextElementSibling);
  }

  // Adds a new link plus a separator
  function addLink(link, text, href, separator) {
    insertElement(link, text, href);
    insertElement(link, separator, null);
  }

  if (document.querySelector('#user-script-list')) {
    var loggedIn = document.querySelector('#nav-user-info > .user-profile-link');
    var items = document.querySelectorAll('#user-script-list > li');
    for (var i = 0; i < items.length; i++) {
      var link = items[i].querySelector('a');
      if (loggedIn) {
        addLink(link, 'Edit', '/en/scripts/' + items[i].getAttribute('data-script-id') + '/versions/new', ' - ');
        addLink(link, 'Delete', link.href + '/delete', '/');
      }
      addLink(link, 'Install', link.href + '/code/' + encodeURIComponent(link.innerText) + '.user.js', ' - ');
    }

    // Display number of userscripts
    var scripts = document.querySelector('body > .width-constraint > section:nth-child(3) > header > h3');
    if (scripts) {
      scripts.innerText = 'Scripts (' + items.length + ')';
    }
  }

})();

