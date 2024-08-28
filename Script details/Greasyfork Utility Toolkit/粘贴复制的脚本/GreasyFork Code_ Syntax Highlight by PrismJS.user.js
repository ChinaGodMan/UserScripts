// ==UserScript==
// @name         GreasyFork Code: Syntax Highlight by PrismJS
// @namespace    Violentmonkey Scripts
// @grant        none
// @version      0.4.1
// @author       CY Fung
// @description  To syntax highlight GreasyFork Code by PrismJS
// @run-at       document-start
// @inject-into  page
// @unwrap
// @license      MIT
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
//
// @downloadURL https://update.greasyfork.org/scripts/482182/GreasyFork%20Code%3A%20Syntax%20Highlight%20by%20PrismJS.user.js
// @updateURL https://update.greasyfork.org/scripts/482182/GreasyFork%20Code%3A%20Syntax%20Highlight%20by%20PrismJS.meta.js
// ==/UserScript==


(() => {

    const USE_SHADOW_MODE = true; // performance fix for long coding

    const cdn = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0';
    const resoruces = {
        'prism-core.js': `${cdn}/components/prism-core.js`,
        'prism-clike.js': `${cdn}/components/prism-clike.min.js`,
        'prism-javascript.js': `${cdn}/components/prism-javascript.min.js`,
        'prism-css.js': `${cdn}/components/prism-css.min.js`,
        'prism-stylus.js': `${cdn}/components/prism-stylus.min.js`,
        'prism.css': `${cdn}/themes/prism.min.css`,
        'prism-dark.css': `${cdn}/themes/prism-dark.min.css`,
    }

    const doActionCSS = () => `

        .code-container, .code-container-shadow{
            height:100vh;
        }
        .code-container .CodeMirror, .code-container textarea{
            height:100%;
        }
    `;


    const global_css = () =>`

        html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            font-feature-settings: normal;
            font-variation-settings: normal
        }

        .code-container code, .code-container kbd, .code-container pre, .code-container samp,
        .code-container-pre, .code-container-pre code, .code-container-pre pre {
            font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
            font-size: 1em
        }

        #script-content > .code-container[class] {
            width: 100%;
        }

        .code-container[class], .code-container-shadow[class] {
            border-radius: 0;
        }

        .code-container > pre:only-child, .code-container-pre{
            padding:0;
        }

        pre.code-container-pre[class]{

            padding: 0;
            border: 0;
            margin: 0;
        }

        code.syntax-highlighted[class] {
            font-family: monospace;
            font-size: 13px;
            font-variant-ligatures: contextual;
            line-height: 1.15rem;
            text-shadow: none !important;
        }

        .hljs-comment[class], .hljs-quote[class] {
            font-style: inherit;
            color: #259789;
        }

        .hljs-add-marker-width .marker-fixed-width[class] {
            user-select: none !important;
            width: calc(var(--hljs-marker-width, 0em) + 16px);
            background: var(--marker-color-background, #f4f4f4);
            padding-right: 6px;
            margin-right: 4px;
            contain: paint style;
            color: var(--marker-color-text, inherit);
        }

        .marker-fixed-width[marker-text]::before {
            content:attr(marker-text);
        }

    `;


    const cssForCodePage = () => /\/scripts\/\d+[^\s\/\\]*\/code(\/|$)/.test(location.href) ? `

        html:not([dkkfv]) div.code-container {
            display:none;
        }

        .code-container,
        .code-container pre:only-child,
        .code-container pre:only-child code:only-child,
        .code-container-pre {
            max-height: calc(100vh + 4px);
            max-width: calc(100vw + 4px);
        }
    ` : '';


    const cssAdd = () =>`

        ${global_css()}

        ${cssForCodePage()}

        .code-container, .code-container-shadow {
            max-width: 100%;
            display: inline-flex;
            flex-direction: column;
            overflow: auto;
            border-radius: 8px;
            max-height: 100%;
            overflow: visible;
        }
        .code-container > pre:only-child, .code-container-pre {
            max-width: 100%;
            display: inline-flex;
            flex-direction: column;
            flex-grow: 1;
            height: 0;
        }
        .code-container > pre:only-child > code:only-child, .code-container-pre > code:only-child{
            max-width: 100%;
            flex-grow: 1;
            height: 0;
        }
        .code-container pre code, .code-container-pre code {
            padding: 0;
            font-family: Consolas;
            cursor: text;
            overflow: auto;
            box-sizing: border-box;
        }
        .code-container pre code .marker, .code-container-pre code .marker {
            display: inline-block;
            color: #636d83;
            text-align: right;
            padding-right: 20px;
            user-select: none;
            cursor: auto;
        }

        .code-container[contenteditable]{
          outline: 0 !important;
          contain: strict;
          box-sizing: border-box;
        }

        .code-container[contenteditable]>pre[contenteditable="false"]{
          contain: strict;
          width: initial;
          box-sizing: border-box;
        }




        html {

        --token-color-keyword: #07a;
        --token-color-punctuation: #1415ec;
        --token-color-comment: #259789;
        --token-color-function: #da204f;
        }

        [dark] {

        --token-color-keyword: #898af2;
        --token-color-punctuation: #fadbdb;
        --token-color-comment:#59c6b9;
        --token-color-function: #e98aa2;

        --marker-color-background: #242424;
        --marker-color-text: #b6b2b2;

        }


        code .token.comment {
            color: var(--token-color-comment);
        }

        code .token.atrule, code .token.attr-value, code .token.keyword {
            color: #1415ec;
            color: var(--token-color-keyword);
        }


        .language-stylus .token.atrule, .language-stylus .token.attr-value, .language-stylus .token.keyword {
            color: #700d0d;
        }


        code .token.punctuation{
        color: var(--token-color-punctuation);
        }


        code .token.variable-declaration,
        code  .token.variable {
            color: #0d10cd;
        }

        code .token.selector{
        color: #1373bb;
        }


        code .token.function {
        color:var(--token-color-function);
        }



        .language-stylus .token.variable-declaration,
        .language-stylus .token.variable {
            color: #0d10cd;
        }

        .language-stylus .token.selector{
        color: #1373bb;
        }

        .language-stylus .token.punctuation{
        color:#700d0d;
        }


        .language-stylus .token.function {
        color:#da204f
        }


        .token, span.marker {
            contain: content;
        }

    `;


    const Promise = (async function () { })().constructor;

    const delayPn = delay => new Promise((fn => setTimeout(fn, delay)));

    const PromiseExternal = ((resolve_, reject_) => {
        const h = (resolve, reject) => { resolve_ = resolve; reject_ = reject };
        return class PromiseExternal extends Promise {
            constructor(cb = h) {
                super(cb);
                if (cb === h) {
                    /** @type {(value: any) => void} */
                    this.resolve = resolve_;
                    /** @type {(reason?: any) => void} */
                    this.reject = reject_;
                }
            }
        };
    })();

    // -------- fix requestIdleCallback issue for long coding --------

    const pud = new PromiseExternal();
    if (typeof window.requestIdleCallback === 'function' && !window.requestIdleCallback842 && window.requestIdleCallback.length === 1) {
        window.requestIdleCallback842 = window.requestIdleCallback;
        window.requestIdleCallback = function (callback, ...args) {
            console.error(322)
            return (this || window).requestIdleCallback842(async function () {
                await pud.then();
                setTimeout(()=>{
                    callback.apply(this, arguments);
                });
            }, ...args);
        }
    }

    // -------- fix requestIdleCallback issue for long coding --------

    const pScript = new PromiseExternal();
    const pElementQuery = new PromiseExternal();

    HTMLElement.prototype.getElementsByTagName331 = HTMLElement.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagName331 = Document.prototype.getElementsByTagName;

    HTMLElement.prototype.getElementsByTagName = getElementsByTagName;
    Document.prototype.getElementsByTagName = getElementsByTagName;

    let byPass = true;

    const observablePromise = (proc, timeoutPromise) => {
        let promise = null;
        return {
            obtain() {
                if (!promise) {
                    promise = new Promise(resolve => {
                        let mo = null;
                        const f = () => {
                            let t = proc();
                            if (t) {
                                mo.disconnect();
                                mo.takeRecords();
                                mo = null;
                                resolve(t);
                            }
                        }
                        mo = new MutationObserver(f);
                        mo.observe(document, { subtree: true, childList: true })
                        f();
                        timeoutPromise && timeoutPromise.then(() => {
                            resolve(null)
                        });
                    });
                }
                return promise
            }
        }
    }

    const documentReady = new Promise(resolve => {
        Promise.resolve().then(() => {
            if (document.readyState !== 'loading') {
                resolve();
            } else {
                window.addEventListener("DOMContentLoaded", resolve, false);
            }
        });
    });

    documentReady.then(async () => {
        pud.resolve();
    });

    function getElementsByTagName(tag) {
        if (byPass) {
            if (tag === 'pre' || tag === 'code' || tag === 'xmp') {
                if (location.pathname.endsWith('/code')) {
                    pElementQuery.resolve();
                    return [];
                }
            }
        }
        return this.getElementsByTagName331(tag);
    }

    async function onBodyHeadReadyAsync() {
        await observablePromise(() => document.body && document.head).obtain();
    }


    // Load CSS
    function loadJS(href) {

        return new Promise(resolve => {

            const script = document.createElement('script');
            script.src = href;
            script.onload = () => {
                resolve(script);
            };
            document.head.appendChild(script);

        });

    }

    // Load CSS
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
        return link;
    }





    function getLangClassName(pre, textContent){



        let className = '';
        let preLang = '';

        if (pre.classList.contains('lang-js')) {
            preLang = 'lang-js';
        } else if (pre.classList.contains('lang-css')) {
            preLang = 'lang-css';
        } else if (pre.classList.contains('uglyprint')){
            let m =/\/\/\s*={2,9}(\w+)={2,9}\s*[\r\n]/.exec(pre.textContent);
            if(m){
                m = m[1];
                if(m === 'UserScript') preLang = 'lang-js';
                if(m === 'UserStyle') preLang = 'lang-css';
            }
        }

        if (preLang === 'lang-js') {
            className = 'language-javascript';
        } else if (preLang === 'lang-css') {

            const text = textContent;
            let m = /\n@preprocessor\s+([-_a-zA-Z]{3,8})\s*\n/.exec(text);
            className = 'language-css'
            if (m) {
                const preprocessor = m[1];
                if (preprocessor === 'stylus') {
                    className = 'language-stylus';
                } else if (preprocessor === 'uso') {
                    className = 'language-stylus';
                } else if (preprocessor === 'less') {
                    className = 'language-less';
                } else if (preprocessor === 'default') {
                    className = 'language-stylus';
                } else {
                    className = 'language-stylus';
                }
            }

        }

        return className;


    }

    /** @param {HTMLElement} pre */
    function prepareCodeAreaAsync(pre) {

        if (pre.isConnected === false) return;
        const preParentNode = pre.parentNode;
        const preNextNode = pre.nextSibling;

        const codeContainer = pre.closest('.code-container');
        const doContentEditable = codeContainer && codeContainer.querySelector('.code-container>pre:only-child');

        pre.remove();

        for (const li of pre.querySelectorAll('li')) {
            li.append(document.createTextNode('\n'));
        }

        const textContent = pre.textContent;

        const className = getLangClassName(pre, textContent);

        if (!className) return;

        if (doContentEditable) {
            // avoid selection to the outside by mouse dragging
            codeContainer.setAttribute('contenteditable', '');
            pre.setAttribute('contenteditable', 'false');
        }

        const code = document.createElement('code');

        code.classList.add(className);
        code.classList.add('syntax-highlighted')

        let htmlCode = '';

        if (className === 'language-javascript') {
            htmlCode = Prism.highlight(textContent, Prism.languages.javascript, 'javascript');
        } else if (className === 'language-stylus') {
            htmlCode = Prism.highlight(textContent, Prism.languages.stylus, 'stylus');
        } else if (className === 'language-less') {
            htmlCode = Prism.highlight(textContent, Prism.languages.less, 'less');
        } else {
            htmlCode = Prism.highlight(textContent, Prism.languages.css, 'css');
        }

        // Adding line numbers
        htmlCode = htmlCode || '';
        const htmlSplit = htmlCode ? htmlCode.split('\n') : [];
        const totalLines = htmlSplit.length;

        let mwStyle = '';

        if (totalLines >= 1) {
            code.classList.add('hljs-add-marker-width');
            const len = `${totalLines}`.length * 0.5;
            mwStyle = `${len}em`;
            htmlCode = htmlSplit.map((n, i) => `<span class="marker marker-fixed-width" marker-text="${i + 1}"></span>${n}`).join('\n') || '';

        } else {

            code.classList.remove('hljs-add-marker-width');
        }

        code.innerHTML = htmlCode;
        code.style.setProperty('--hljs-marker-width', mwStyle);



        if(pre.firstChild === pre.lastChild && pre.firstChild instanceof Node){
            pre.firstChild.replaceWith(code);
        }else{
            pre.innerHTML = '';
            pre.appendChild(code);
        }
        pre.classList.add('code-container-pre');


        if(USE_SHADOW_MODE){

            const shadowDiv = document.createElement("div");
            shadowDiv.classList.add('code-container-shadow')

            const shadow = shadowDiv.attachShadow({ mode: "open" });

            const styles = document.querySelectorAll('link, style');
            for(style of styles) {
                if(style.classList.contains("stylus")) continue;
                if(style.nodeName === 'LINK' && style.rel !== 'stylesheet') continue;
                shadow.appendChild(style.cloneNode(true))
            }

            shadow.appendChild(pre)
            preParentNode.insertBefore(shadowDiv, preNextNode);
        }else{

            preParentNode.insertBefore(pre, preNextNode);
        }




    }

    const documentBodyHeadReady = onBodyHeadReadyAsync();

    documentBodyHeadReady.then(async () => {

        if (!location.pathname.endsWith('/code')) {
            return;
        }

        document.head.appendChild(document.createElement('style')).textContent = `${cssAdd()}`;

        self.Prism = self.Prism || {};
        self.Prism.manual = true;
        await loadJS(resoruces['prism-core.js']);
        await loadJS(resoruces['prism-clike.js']);
        await loadJS(resoruces['prism-javascript.js']);
        await loadJS(resoruces['prism-css.js']);
        await loadJS(resoruces['prism-stylus.js']);

        if (document.documentElement.hasAttribute('dark')) {

            loadCSS(resoruces['prism-dark.css']);
        } else {

            loadCSS(resoruces['prism.css']);
        }

        pScript.resolve();




    });

    let keydownActive = false;

    documentReady.then(async () => {

        if (!location.pathname.endsWith('/code')) {
            byPass = false;
            return;
        }
        await pScript.then();

        await Promise.race([pElementQuery, delayPn(800)]);

        const targets = document.querySelectorAll('.code-container pre.lang-js, .code-container pre.lang-css, .code-container pre.uglyprint');
        // pre.uglyprint : too long code ; see https://greasyfork.org/zh-CN/scripts/24204-picviewer-ce/code

        if (targets.length === 0) return;

        await delayPn(40);

        document.head.appendChild(document.createElement('style')).textContent = doActionCSS();

        await delayPn(40);

        byPass = false;

        // Code highlighting
        const promises = [...targets].map(prepareCodeAreaAsync)
        await Promise.all(promises);

        await delayPn(40);
        document.documentElement.setAttribute('dkkfv', '');
        keydownActive = true;

    });

    function selectAllWithinElement(element) {
        window.getSelection().removeAllRanges();
        let range = document.createRange();
        if (element) {
            range.selectNodeContents(element);
            window.getSelection().addRange(range);
        } else {
            console.error('Element not found with ID:', element);
        }
    }
    document.addEventListener('keydown', (e) => {
        if (keydownActive && e && e.code === 'KeyA' && e.isTrusted && (e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey) {

            const target = e.target;
            const container = target ? target.closest('div.code-container') : null;
            const code = container ? container.querySelector('code') : null;

            if (container && code) {

                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                setTimeout(() => {
                    selectAllWithinElement(code);
                }, 1)

            }

        }
    }, true);


})();
