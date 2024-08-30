// ==UserScript==
// @name Greasy Fork Display User Information
// @namespace -
// @version 0.3
// @description Display user information.
// @author NotYou
// @match *greasyfork.org/*/users/*
// @license GPL-3.0
// @grant none
// @downloadURL https://update.greasyfork.org/scripts/437643/Greasy%20Fork%20Display%20User%20Information.user.js
// @updateURL https://update.greasyfork.org/scripts/437643/Greasy%20Fork%20Display%20User%20Information.meta.js
// ==/UserScript==

const IDUS = location.pathname.slice(10).split('-'),
      ID = IDUS[0],
      $ = s => document.querySelector(s),
      $$ = s => document.querySelectorAll(s),
      USER = $('#about-user > h2').innerText.replace('MOD', ''),
      IS_MOD = $('#about-user > h2').innerHTML.includes('<span class="badge badge-moderator" title="Moderator">Mod</span>')

$('head').insertAdjacentHTML('beforeend', `<style>
#user-information-card {
  background: rgb(47, 47, 47);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 6px;
  width: 300px;
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
}
#user-info-copy-btn {
  margin-left: 4px;
}
.user-info-item {
  margin-bottom: 3px;
  margin-top: 3px;
}
</style>`)

$('#about-user').insertAdjacentHTML('beforeend', `<section id="user-information">
<header><h3>User information<input id="user-info-copy-btn" type="button" value="Copy All"></h3></header>
      <div id="user-information-card">
            <li class="user-info-item">Username:</li>
            <li class="user-info-item">ID:</li>
            <li class="user-info-item">Moderator:</li>
            <b id="user-info-name" class="user-info-sub-item" title="Click to copy">${USER}</b>
            <b id="user-info-id" class="user-info-sub-item" title="Click to copy">${ID}</b>
            <b id="user-info-is-mod" class="user-info-sub-item" title="Click to copy">${IS_MOD ? 'Yes' : 'No'}</b>
      </div>
</section>`)

$$('.user-info-sub-item').forEach((e) => {
    e.addEventListener('click', () => {
        navigator.clipboard.writeText(e.innerText)
        e.title = 'Copied'
        setTimeout(() => (e.title = 'Click to copy'), 2000)
    })
})

$('#user-info-copy-btn').addEventListener('click', (e) => {
    navigator.clipboard.writeText(`Username: ${USER}, ID: ${ID}, Mod: ${IS_MOD ? 'Yes' : 'No'}`)
    $('#user-info-copy-btn').value = 'Copied'
    setTimeout(() => ($('#user-info-copy-btn').value = 'Copy All'), 2000)
})










