// ==UserScript==
// @name        GreasyFork: User Control Panel Button
// @namespace   UserScripts
// @match       https://greasyfork.org/*
// @grant       none
// @version     0.2.0
// @license     MIT
// @author      CY Fung
// @description To add User Control Panel Button into navigation bar
// @downloadURL https://update.greasyfork.org/scripts/475796/GreasyFork%3A%20User%20Control%20Panel%20Button.user.js
// @updateURL https://update.greasyfork.org/scripts/475796/GreasyFork%3A%20User%20Control%20Panel%20Button.meta.js
// ==/UserScript==

(async () => {

  function preSetup() {
    // for styling

    let pos = document.querySelectorAll('#site-nav>nav>li.with-submenu');
    pos = pos.length >= 1 ? pos[pos.length - 1] : null;

    if (!pos) return;

    pos.parentNode.style.minHeight = '2.8rem';




    return { pos };

  }

  function setup(m) {

    const { cpmRoot } = m;


    let h = (cpmRoot.querySelector('h3') || cpmRoot.querySelector('header'));
    if (!h) return;

    let nav = document.createElement('nav');

    for (const anchor of cpmRoot.querySelectorAll('li a[href]')) {
      let li = nav.appendChild(document.createElement('li'));
      li.appendChild(anchor);
    }


    let tm = document.createElement('template');
    tm.innerHTML = `
          <li class="with-submenu" style="display: block;">
            <a href="#" onclick="return false">${h.textContent}</a>
            <nav style="min-width: initial;">
              ${nav.innerHTML}
            </nav>
          </li>
  `.trim();

    return tm.content;


  }


  function bufferToHex(buffer) {
    const byteArray = new Uint8Array(buffer);
    const len = byteArray.length;
    const hexCodes = new Array(len * 2);
    const chars = '0123456789abcdef';
    for (let i = 0, j = 0; i < len; i++) {
      const byte = byteArray[i];
      hexCodes[j++] = chars[byte >> 4];
      hexCodes[j++] = chars[byte & 0x0F];
    }
    return hexCodes.join('');
  }

  async function digestMessage(message) {
    const encoder = new TextEncoder("utf-8");
    const msgUint8 = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
    return bufferToHex(hashBuffer);
  }

  async function fetchCPHTML(o) {

    const { stKey, href } = o;

    for (let trialN = 4; trialN--;) {


      let r = await new Promise(resolve => {


        let t = sessionStorage.getItem(stKey)

        if (`${t}`.length > 32) resolve(t);


        sessionStorage.setItem(stKey, `${Date.now()}`);


        fetch(href, {
          method: "GET",
          mode: "same-origin",
          cache: "force-cache",
          credentials: "same-origin",
          redirect: "follow",
          referrerPolicy: "no-referrer",


        }).then(res => res.text()).then(async res => {
          sessionStorage.removeItem(stKey);


          let template = document.createElement('template');
          template.innerHTML = res;
          let w = template.content;

          let cp = w.querySelector('#control-panel');

          if (cp) {

            const html = cp.innerHTML.trim();

            sessionStorage.setItem(stKey, html);

            resolve(html);
          } else {


            await fetch(href, {
              method: "GET",
              mode: "same-origin",
              cache: "reload",
              credentials: "same-origin",
              redirect: "follow",
              referrerPolicy: "no-referrer",

            }).catch((e)=>{
              console.debug(e);
            });

            resolve();

          }



        }).catch(e => {

          sessionStorage.removeItem(stKey);
        });



      });

      if (r && typeof r === 'string' && r.length > 32) return r;

    }



  }

  if (!document.querySelector('.sign-out-link') || document.querySelector('.sign-in-link')) return;

  let plink = document.querySelector('.user-profile-link');
  if (!plink) return;

  let href = plink.querySelector('a[href*="/users/"]').href;

  let mi = href.indexOf('/users/');
  if (mi < 0) return;

  if (href.includes('/users/sign')) return;


  let presetup = preSetup();

  if (!presetup) return;

  const { pos } = presetup;


  let dm = await digestMessage(href);

  const stKey = `gf_control_panel_${dm}`


  for (let trialN = 8; trialN--;) {
    let s = sessionStorage.getItem(stKey);
    let d = typeof s === 'string' ? parseInt(s) : 0;
    if (d > 9 && Date.now() - d < 8000) await new Promise(r => setTimeout(r, 320));
    else break;
  }


  const cpHTML = await fetchCPHTML({ stKey, href });

  if (!cpHTML || typeof cpHTML !== 'string') return;

  let cpm = document.createElement('template');

  cpm.innerHTML = cpHTML;

  const kc = setup({ cpmRoot: cpm.content, pos });
  if (kc) {

    function headerClickHanlder(evt){
          const target = (evt||0).target||0;
          if(!target)return;
          const section = target.closest('section#control-panel');
          if(!section)return;
          if(section.getAttribute('gf-user-cp-section')==='show'){
            section.setAttribute('gf-user-cp-section', 'greyout');
          } else{
            section.setAttribute('gf-user-cp-section', 'show');
          }

    }

    pos.parentNode.insertBefore(kc, pos.nextSibling);
    let headerTitleCP = document.querySelector('section#control-panel #Control-panel');
    if(headerTitleCP){
      const sectionCP = headerTitleCP.closest('section#control-panel');
      const ul = sectionCP.querySelector('ul#user-control-panel');
      if(ul){
        sectionCP.setAttribute('gf-user-cp-section', 'greyout');
        document.head.appendChild(document.createElement('style')).textContent=`
          [gf-user-cp-section="greyout"] ul {
            display: none;
          }
          [gf-user-cp-section="greyout"] #Control-panel {
            cursor: pointer;
            opacity: 0.2;
          }
         [gf-user-cp-section="greyout"] #Control-panel:hover {
            opacity: 0.6;
          }
         [gf-user-cp-section="show"] #Control-panel {
            cursor: pointer;
          }
        `;
        headerTitleCP.addEventListener('click', headerClickHanlder, true);
      }

    }
  }



})();
