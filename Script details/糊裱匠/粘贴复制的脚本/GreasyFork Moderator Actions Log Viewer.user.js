// ==UserScript==
// @name          GreasyFork Moderator Actions Log Viewer
// @namespace     http://tampermonkey.net/
// @version       0.2.5
// @description   to view GreasyFork Moderator Actions Log Table
// @author        CY Fung
// @match         https://greasyfork.org/*/moderator_actions*
// @icon          https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant         none
// @run-at        document-idle
// @license       MIT
// @downloadURL https://update.greasyfork.org/scripts/466908/GreasyFork%20Moderator%20Actions%20Log%20Viewer.user.js
// @updateURL https://update.greasyfork.org/scripts/466908/GreasyFork%20Moderator%20Actions%20Log%20Viewer.meta.js
// ==/UserScript==

(function () {
  'use strict';

  function formatDateToCustomFormat(date) {
    var year = date.getFullYear();
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    var timeZoneOffset = getTimeZoneOffsetString();

    return year + '.' + month + '.' + day + ' ' + hours + ':' + minutes + ' (GMT' + timeZoneOffset + ')';
  }

  function padZero(value) {
    return value.toString().padStart(2, '0');
  }

  function getTimeZoneOffsetString() {
    var offsetMinutes = new Date().getTimezoneOffset();
    var sign = offsetMinutes > 0 ? '-' : '+';
    var offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);

    return sign + offsetHours;
  }

  function removePrevTextNode(e, k) {
    let tn = e.previousSibling;
    if (tn && tn.nodeType === Node.TEXT_NODE) {
      if (tn.textContent.trim() === k) tn.remove();
    }
  }


  function setupTableContent() {

    for (const s of document.querySelectorAll('.log-table td:nth-child(1) relative-time:not(.jsm)')) {

      s.classList.add('jsm')

      let date = s.date;
      if (date) {

        let e = document.createElement('div');
        let q = formatDateToCustomFormat(date);
        q = q.split(' ');
        // e.textContent = formatDateToCustomFormat(date);
        e.className = 'date-entry';
        s.classList.add('jsm-hidden')
        s.after(e)

        e.appendChild(Object.assign(document.createElement('span'), {
          className: 'date-entry-date',

          textContent: q[0]
        }));

        e.appendChild(Object.assign(document.createElement('span'), {
          className: 'date-entry-time',

          textContent: q[1]
        }));

        e.appendChild(Object.assign(document.createElement('span'), {
          className: 'date-entry-gmt',
          textContent: q[2]
        }));
      }


    }


    for (const s of document.querySelectorAll('.log-table td:nth-child(3)')) {

        if(s.querySelector('a')) continue;

        let t = s.textContent;
        let m;
        t=t.replace(/O script (\d+) foi removido/g,(_,d)=>`Deleted script ${d}`);
        if(m=/([\s\S]*)\b(Deleted user)\s?(\d+)\b([\s\S]*)/i.exec(t)){
            m[1]=m[1].trim();
            m[4]=m[4].trim();
            s.innerHTML=`<a class="user-link deleted" href="/${document.documentElement.lang}/users/${m[3]}">${"Deleted User: "+m[3]}</a>`;
            if(m[1]) s.insertBefore(document.createTextNode(m[1]), s.firstChild);
            if(m[4]) s.appendChild(document.createTextNode(m[4]));
        }else if(m=/([\s\S]*)(Slettet skriptet|Skrip terhapus|ลบสคริปต์|Đã xoá script|סקריפט מחוק|Gelöschtes Skript|삭제된 스크립트|Script supprimé|Silinmiş script|Удалённый скрипт|刪除腳本|Verwijderd script|Изтрит скрипт|已删除的脚本|削除されたスクリプト|Διαγραμμένος κώδικας|Șterge script-ul|Script borrado|Deleted script|Script eliminato|Odstránený skript|Usunięto skrypt|أحذف السكربت)\s?(\d+)\b([\s\S]*)/i.exec(t)){
            m[1]=m[1].trim();

            m[4]=m[4].trim();
            s.innerHTML=`<a class="deleted" href="/${document.documentElement.lang}/scripts/${m[3]}">${"Deleted Script: "+m[3]}</a>`;
            if(m[1]) s.insertBefore(document.createTextNode(m[1]), s.firstChild);
            if(m[4]) s.appendChild(document.createTextNode(m[3]));
        }



    }



    for (const s of document.querySelectorAll('.log-table td:nth-child(3) a[href*="/scripts/"]:not(.jsm)')) {



      s.classList.add('jsm')
      let m = /\/scripts\/(\d+)/.exec(s.href);
      if (m) {
        let e = document.createElement('div');
        e.className = 'script-entry';
        s.replaceWith(e);
        e.appendChild(s);

        let span = document.createElement('span');
        span.className = 'entry-rid';
        span.textContent = m[1]
        e.prepend(span)
        removePrevTextNode(e, 'Script:');
      }


    }

    for (const s of document.querySelectorAll('.log-table td:nth-child(3) a[href*="/users/"]:not(.jsm)')) {



      s.classList.add('jsm')
      let m = /\/users\/(\d+)/.exec(s.href);
      if (m) {
        let e = document.createElement('div');
        e.className = 'user-entry';
        s.replaceWith(e);
        e.appendChild(s);

        let span = document.createElement('span');
        span.className = 'entry-rid';
        span.textContent = m[1]
        e.prepend(span)
        removePrevTextNode(e, 'User:');
      }


    }


    for (const s of document.querySelectorAll('.log-table td:nth-child(4)')) {

      convertToBadges(s);


    }


    for (const s of document.querySelectorAll('.log-table td:nth-child(5)')) {

      convertHyperlinks(s);


    }

  }
  function convertHyperlinks(elm) {
    var walker = document.createTreeWalker(elm, NodeFilter.SHOW_TEXT, null, false);

    while (walker.nextNode()) {
      var textNode = walker.currentNode;
      var parentNode = textNode.parentNode;

      var text = textNode.nodeValue.trim();
      if (text.length > 0 && parentNode.tagName !== 'A') {
        var match = text.match(/(https?:\/\/[^\s]+)/);

        if (match) {
          var link = document.createElement('a');
          link.href = match[0];
          link.textContent = match[0].replace('https://greasyfork.org/scripts/', 'scripts/');

          var before = document.createTextNode(text.substring(0, match.index));
          var after = document.createTextNode(text.substring(match.index + match[0].length));

          parentNode.insertBefore(before, textNode);
          parentNode.insertBefore(link, textNode);
          parentNode.insertBefore(after, textNode);

          parentNode.removeChild(textNode);
        }
      }
    }
  }

  function makeTextableBadge(tag, message, color) {

    let div = Object.assign(document.createElement('div'), {
      className: 'textable-div',
    })
    let img = Object.assign(document.createElement('img'), {
      src: `https://img.shields.io/badge/${tag}-${message}-${color}`
    });
    div.appendChild(img)
    div.appendChild(Object.assign(document.createElement('span'), {
      className: 'textable-span',
      textContent: `${tag}: ${message}`
    }))
    return div;

  }

  function convertToBadges(elm) {

    const converts = {
      'Ban': () => makeTextableBadge('action', 'ban', 'FF5C5C'),
      'Delete and lock': () => makeTextableBadge('action', 'delete', 'FF9933'),
      'Undelete': () => makeTextableBadge('action', 'undelete', '66CC66'),

    }

    var walker = document.createTreeWalker(elm, NodeFilter.SHOW_TEXT, null, false);

    while (walker.nextNode()) {
      var textNode = walker.currentNode;
      var parentNode = textNode.parentNode;

      var text = textNode.nodeValue.trim();
      if (text.length > 0 && parentNode.tagName !== 'A' && parentNode.tagName !== 'IMG') {
        let t = text.trim();
        if (converts[t]) textNode.replaceWith(converts[t]());
      }
    }
  }



  function convertToAdvancedTable(tableSelector) {

    setupTableContent();
    // Get the table element
    var table = document.querySelector(tableSelector);

    // Add classes to the table and its components
    table.classList.add('advanced-table');
    table.tHead.classList.add('advanced-table-head');
    table.tBodies[0].classList.add('advanced-table-body');

    // Get the table headers
    var headers = Array.from(table.tHead.rows[0].cells);

    var sortOrder = []; // Track sort order for each column

    // Add classes and event listeners to enable sorting
    headers.forEach(function (header, index) {
      header.classList.add('sortable');
      header.addEventListener('click', function (event) {
        if (!event.target.classList.contains('search-input')) {
          sortTable(table, index, sortOrder);
          sortOrder[index] = !sortOrder[index]; // Toggle sort order
        }
      });

      // Create search input element
      var searchInput = document.createElement('input');
      searchInput.setAttribute('type', 'text');
      searchInput.setAttribute('placeholder', 'Search');
      searchInput.classList.add('search-input');
      searchInput.addEventListener('input', function () {
        filterTable(table, index);
      });
      header.appendChild(searchInput);

      // Create sort icon element
      var sortIcon = document.createElement('span');
      sortIcon.classList.add('sort-icon');
      header.appendChild(sortIcon);
    });
  }

  // Function to sort the table by column index
  function sortTable(table, columnIndex, sortOrder) {
    var rows = Array.from(table.tBodies[0].rows);

    rows.sort(function (a, b) {
      var cellA = a.cells[columnIndex].textContent.toLowerCase();
      var cellB = b.cells[columnIndex].textContent.toLowerCase();

      if (sortOrder[columnIndex]) {
        // Sort in descending order
        if (cellA < cellB) return 1;
        if (cellA > cellB) return -1;
        return 0;
      } else {
        // Sort in ascending order
        if (cellA < cellB) return -1;
        if (cellA > cellB) return 1;
        return 0;
      }
    });

    table.tBodies[0].innerHTML = '';
    rows.forEach(function (row) {
      table.tBodies[0].appendChild(row);
    });
  }

  // Function to filter the table by column index
  function filterTable(table, columnIndex) {
    var filterValue = table.tHead.rows[0].cells[columnIndex].querySelector('.search-input').value.toLowerCase();
    var rows = Array.from(table.tBodies[0].rows);

    rows.forEach(function (row) {
      var cellValue = row.cells[columnIndex].textContent.toLowerCase();
      row.style.display = cellValue.includes(filterValue) ? '' : 'none';
    });
  }


  const colsize = (idx) => `.log-table th:nth-child(${idx}), .log-table td:nth-child(${idx}){width:${colsizes[idx - 1]}; max-width:${0};}`

  let colsizes = [28, 34, 120, 32, 82];
  let colsizeSum = colsizes.reduce((a, b) => a + b, 0);
  colsizes = colsizes.map(t => (t / colsizeSum * 100).toFixed(2) + '%');

  document.head.appendChild(document.createElement('style')).textContent = `
  .log-table.advanced-table {
    border-collapse:separate;
    border-spacing: 0 1em;
  }
  .log-table.advanced-table td img{
    display:block;
  }

.advanced-table-head th {
  position: relative;
  padding: 2px 4px;
}

.sortable {
  cursor: pointer;
}

.sort-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  transition: transform 0.2s ease;
}

.sortable.asc .sort-icon {
  border-bottom: 4px solid #000;
}

.sortable.desc .sort-icon {
  border-top: 4px solid #000;
}

.search-input {
  width: 100%;
  box-sizing: border-box;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}



		${colsize(1)}
		${colsize(2)}
		${colsize(3)}
		${colsize(4)}
		${colsize(5)}

    .entry-rid{
      font-size:80%;
      font-family: 'Open Sans',sans-serif,"Segoe UI Emoji";
    }
    .date-entry{
      font-family: 'Open Sans',sans-serif,"Segoe UI Emoji";

    }

        .user-entry, .script-entry{
        display: flex;
        column-gap: 4px;
            place-items: center;
        }

        .script-entry a[href]{
          overflow: hidden;
          white-space: nowrap;
          max-width: 24em;
          text-overflow: ellipsis;
        }


/* Shared styles for both ".user-entry > .entry-rid" and ".script-entry > .entry-rid" */
.user-entry > .entry-rid,
.script-entry > .entry-rid {

    display: inline-flex;
    place-content: center;
  padding: 4px 8px;
  color: #fff; /* Set an appropriate white text color */
  border-radius: 8px; /* Set the desired border radius */
  transition: background-color 0.3s; /* Add transition effect */
  min-width: 4em;
}

/* Styles for ".user-entry > .entry-rid" */
.user-entry > .entry-rid {
  background-color: #4A90E2; /* Set your desired background color */
}

.user-entry > .entry-rid:hover {
  background-color: #77B5FF; /* Set your desired hover background color */
}

/* Styles for ".script-entry > .entry-rid" */
.script-entry > .entry-rid {
  background-color: #B146C2; /* Set your desired background color */
}

.script-entry > .entry-rid:hover {
  background-color: #D27BFF; /* Set your desired hover background color */
}

relative-time.jsm-hidden {
display:none;
}

.date-entry-date{

  display: inline-block;
  padding: 4px 8px;
  color: #fff; /* Set an appropriate white text color */
  border-radius: 8px; /* Set the desired border radius */
  transition: background-color 0.3s; /* Add transition effect */
  font-size:70%;
  background-color: #336699;
}


.date-entry-time{

  display: inline-block;
  padding: 4px 8px;
  color: #fff; /* Set an appropriate white text color */
  border-radius: 8px; /* Set the desired border radius */
  transition: background-color 0.3s; /* Add transition effect */
  font-size:70%;
  background-color: #663366;
}

.date-entry-gmt{

  display: inline-block;
  padding: 4px 8px;
  color: #fff; /* Set an appropriate white text color */
  border-radius: 8px; /* Set the desired border radius */
  transition: background-color 0.3s; /* Add transition effect */
  font-size:40%;
  background-color: #336633;

}


/*
.date-entry-gmt{

  padding: 2px 4px;
  border-radius:4px;
  }*/

  .date-entry{
  display: flex;
  flex-wrap:wrap;
  row-gap:2px;
  column-gap:2px;
      place-items: end;
  }


  .textable-div {
    display: inline-block;
  }
  .textable-span {
    position: fixed;
    left: -100vw;
    top: -100vh;
    transform: scale(0.001);
    font-size: 1pt;
    user-select: none !important;
    pointer-events: none !important;
    transform-origin: 0 0;
    z-index: -1;
  }

  .log-table .deleted {
    background: #aaa;
    color: #222;
    text-decoration: line-through underline;

  }

`

  setInterval(() => {

    let table = document.querySelector('table.log-table:not(.advanced-table)')
    if (table) {
      requestAnimationFrame(() => {
        if (table.classList.contains('advanced-table')) return;
        table = null;
        convertToAdvancedTable('table.log-table')
      });
    }

  }, 100);



  // Your code here...
})();