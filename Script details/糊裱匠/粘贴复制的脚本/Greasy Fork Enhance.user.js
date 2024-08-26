// ==UserScript==
// @name         Greasy Fork Enhance
// @name:zh-CN   Greasy Fork 增强
// @namespace    http://tampermonkey.net/
// @version      0.8.1
// @description  Enhance your experience at Greasyfork.
// @description:zh-CN 增进 Greasyfork 浏览体验。
// @author       PRO
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @match        https://greasyfork.org/*
// @require      https://update.greasyfork.org/scripts/470224/1428466/Tampermonkey%20Config.js
// @icon         https://raw.githubusercontent.com/greasyfork-org/greasyfork/main/public/images/blacklogo16.png
// @icon64       https://raw.githubusercontent.com/greasyfork-org/greasyfork/main/public/images/blacklogo96.png
// @license      gpl-3.0
// @downloadURL https://update.greasyfork.org/scripts/467078/Greasy%20Fork%20Enhance.user.js
// @updateURL https://update.greasyfork.org/scripts/467078/Greasy%20Fork%20Enhance.meta.js
// ==/UserScript==

(function () {
    'use strict';
    // Judge if the script should run
    const no_run = [".json", ".js"];
    let is_run = true;
    const idPrefix = "greasyfork-enhance-";
    const name = GM_info.script.name;
    no_run.forEach((suffix) => {
        if (window.location.pathname.endsWith(suffix)) {
            is_run = false;
        }
    });
    if (!is_run) return;
    // Config
    const config_desc = {
        "$default": {
            value: true,
            input: "current",
            processor: "not",
            formatter: "boolean",
            autoClose: false
        },
        "regex-filter": { name: "Regex filter", title: "Use regex to filter out matching scripts", value: "", input: "prompt", processor: "same", formatter: "normal" },
        "auto-hide-code": { name: "Auto hide code", title: "Hide long code blocks by default" },
        "auto-hide-rows": {
            name: "Min rows to hide",
            value: 10,
            input: "prompt",
            processor: "int_range-1-",
            formatter: "normal",
            title: "Minimum number of rows to hide"
        },
        "tab-size": {
            name: "Tab size",
            value: 4,
            input: "prompt",
            processor: "int_range-0-",
            formatter: "normal",
            title: "Set Tab indentation size"
        },
        "hide-buttons": { name: "Hide buttons", title: "Hide floating buttons added by this script", value: false },
        "flat-layout": { name: "Flat layout", title: "Use flat layout for script list and descriptions", value: false },
        "show-version": { name: "Show version", title: "Show version number in script list", value: false },
        "animation": { name: "Animation", title: "Enable animation for toggling code blocks" },
        "lib-alternative-url": { name: "Alternative URLs for library", title: "Show a list of alternative URLs for a given library", value: false },
        "short-link": { name: "Short link", title: "Display a shortened link to current script" },
        "shortcut": { name: "Shortcut", title: "Enable keyboard shortcuts" },
        "search-syntax": { name: "*Search syntax", title: "Enable partial search syntax for Greasy Fork search bar" },
        "image-proxy": { name: "*Image proxy", title: "Use `wsrv.nl` as proxy for user-uploaded images", value: false },
    };
    const config = new GM_config(config_desc);
    const configProxy = config.proxy;
    // CSS
    const dynamicStyle = {
        "hide-buttons": `div#float-buttons { display: none; }`,
        "flat-layout": `
            .script-list > li {
                &:not(.ad-entry) { padding-right: 0; }
                article {
                    display: flex; flex-direction: row; justify-content: space-between; align-items: center;
                    > .script-meta-block {
                        width: 40%; column-gap: 0;
                        > .inline-script-stats {
                            margin: 0;
                            > dd { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                        }
                    }
                    > h2 {
                        width: 60%; overflow: hidden; text-overflow: ellipsis; margin-right: 0.5em; padding-right: 0.5em; border-right: 1px solid #88888888;
                        > .script-link { white-space: nowrap; }
                        > .script-description { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                    }
                }
                &[data-script-type="library"] > article {
                    > h2 { width: 80%; }
                    > .script-meta-block { width: 20%; column-count: 1; }
                }
            }
            @media (max-width: 600px) {
                .script-list > li {
                    &[data-script-type="library"] > article > div.script-meta-block { width: 40%; }
                    &:not([data-script-type="library"]) > article {
                        display: block;
                        > h2 { width: unset; border-right: none; }
                        > .script-meta-block { column-count: 2; }
                    }
                    > article > div.script-meta-block { width: unset; column-gap: 0; }
                }
            }
            .showing-all-languages .badge-js, .showing-all-languages .badge-css, .script-type { display: none; }
            #script-info .script-meta-block { float: right; column-count: 1; max-width: 300px; border-left: 1px solid #DDDDDD; margin-left: 1em; padding-left: 1em; }
            #additional-info { width: calc(100% - 2em - 2px); }
        `,
        "show-version": `.script-list > li[data-script-version]::before { content: "@" attr(data-script-version); position: absolute; translate: 0 -1em; color: grey; font-size: smaller; }`,
        "animation": `
            /* Toggle code animation */
            pre > code { transition: height 0.5s ease-in-out 0s; }
            /* Adapted from animate.css - https://animate.style/ */
            :root { --animate-duration: 1s; --animate-delay: 1s; --animate-repeat: 1; }
            .animate__animated { animation-duration: var(--animate-duration); animation-fill-mode: both; }
            .animate__animated.animate__fastest { animation-duration: calc(var(--animate-duration) / 3); }
            @keyframes tada {
                from { transform: scale3d(1, 1, 1); }
                10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }
                30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }
                40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }
                to { transform: scale3d(1, 1, 1); }
            }
            .animate__tada { animation-name: tada; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            .animate__fadeIn { animation-name: fadeIn; }
            @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
            .animate__fadeOut { -webkit-animation-name: fadeOut; animation-name: fadeOut; }
        `
    };
    // Functions
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const log = console.log.bind(console, `[${name}]`);
    const body = $("body");
    function sanitify(s) {
        // Remove emojis (such a headache)
        s = s.replaceAll(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDEFF]|\uFE0F)/g, "");
        // Trim spaces and newlines
        s = s.trim();
        // Replace spaces
        s = s.replaceAll(" ", "-");
        s = s.replaceAll("%20", "-");
        // No more multiple "-"
        s = s.replaceAll(/-+/g, "-");
        return s;
    }
    function process(outline, node) { // Add anchor and assign id to given node; Add to outline. Return true if node is actually processed.
        if (node.childElementCount > 1 || node.classList.length > 0) return false; // Ignore complex nodes
        const text = node.textContent;
        if (!node.id) { // If the node has no id
            node.id = sanitify(text); // Then assign id
        }
        // Add anchors
        const anchor = node.appendChild(document.createElement('a'));
        anchor.className = 'anchor';
        anchor.href = '#' + node.id;
        const link = outline.appendChild(document.createElement("li"))
            .appendChild(document.createElement("a"));
        link.href = "#" + node.id;
        link.text = text;
        return true;
    }
    async function animate(node, animation) {
        return new Promise((resolve, reject) => {
            node.classList.add("animate__animated", "animate__" + animation);
            if (node.getAnimations().length == 0) {
                node.classList.remove("animate__animated", "animate__" + animation);
                reject("No animation available");
            }
            node.addEventListener('animationend', e => {
                e.stopPropagation();
                node.classList.remove("animate__animated", "animate__" + animation);
                resolve("Animation ended");
            }, { once: true });
        });
    }
    async function transition(node, height) {
        return new Promise((resolve, reject) => {
            node.style.height = height;
            if (node.getAnimations().length == 0) {
                resolve("No transition available");
            }
            node.addEventListener('transitionend', e => {
                e.stopPropagation();
                resolve("Transition ended");
            }, { once: true });
        });
    }
    function copyCode() {
        const code = this.parentNode.nextElementSibling;
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
            this.textContent = "Copied!";
            animate(this, "tada").then(() => {
                this.textContent = "Copy code";
            }, () => {
                window.setTimeout(() => {
                    this.textContent = "Copy code";
                }, 1000);
            });
        });
    }
    function toggleCode() {
        const code = this.parentNode.nextElementSibling;
        if (code.style.height == "0px") {
            code.style.willChange = "height";
            transition(code, code.getAttribute("data-height")).then(() => {
                code.style.willChange = "";
            });
            animate(this, "fadeOut").then(() => {
                this.textContent = "Hide code";
                animate(this, "fadeIn");
            }, () => {
                this.textContent = "Hide code";
            });
        } else {
            code.style.willChange = "height";
            transition(code, "0px").then(() => {
                code.style.willChange = "";
            });
            animate(this, "fadeOut").then(() => {
                this.textContent = "Show code";
                animate(this, "fadeIn");
            }, () => {
                this.textContent = "Show code";
            });
        }
    }
    function createToolbar() {
        const toolbar = document.createElement("div");
        const copy = toolbar.appendChild(document.createElement("a"));
        const toggle = toolbar.appendChild(document.createElement("a"));
        copy.textContent = "Copy code";
        copy.className = "code-operation";
        copy.title = "Copy code to clipboard";
        copy.addEventListener("click", copyCode);
        toggle.textContent = "Hide code";
        toggle.classList.add("code-operation", "animate__fastest");
        toggle.title = "Toggle code display";
        toggle.addEventListener("click", toggleCode);
        // Css
        toolbar.className = "code-toolbar";
        return toolbar;
    }
    function injectCSS(id, css) {
        const style = document.head.appendChild(document.createElement("style"));
        style.id = idPrefix + id;
        style.textContent = css;
    }
    function cssHelper(id, enable) {
        const current = document.getElementById(idPrefix + id);
        if (current) {
            current.disabled = !enable;
        } else if (enable) {
            injectCSS(id, dynamicStyle[id]);
        }
    }
    // Basic css
    injectCSS("basic", `
    html { scroll-behavior: smooth; }
    a.anchor::before { content: "#"; }
    a.anchor { opacity: 0; text-decoration: none; padding: 0px 0.5em; transition: all 0.25s ease-in-out; }
    h1:hover>a.anchor, h2:hover>a.anchor, h3:hover>a.anchor,
    h4:hover>a.anchor, h5:hover>a.anchor, h6:hover>a.anchor { opacity: 1; transition: all 0.25s ease-in-out; }
    a.button { margin: 0.5em 0 0 0; display: flex; align-items: center; justify-content: center; text-decoration: none; color: black; background-color: #a42121ab; border-radius: 50%; width: 2em; height: 2em; font-size: 1.8em; font-weight: bold; }
    div.code-toolbar { display: flex; gap: 1em; }
    a.code-operation { cursor: pointer; font-style: italic; }
    div.lum-lightbox { z-index: 2; }
    #float-buttons { position: fixed; bottom: 1em; right: 1em; display: flex; flex-direction: column; user-select: none; z-index: 1; }
    aside.panel { display: none; }
    .dynamic-opacity { transition: opacity 0.2s ease-in-out; opacity: 0.2; }
    .dynamic-opacity:hover { opacity: 0.8; }
    input[type=file] { border-style: dashed; border-radius: 0.5em; border-color: gray; padding: 0.5em; background: rgba(169, 169, 169, 0.4); transition-property: border-color, background; transition-duration: 0.25s; transition-timing-function: ease-in-out; }
    input[type=file]:hover { border-color: black; background: rgba(169, 169, 169, 0.6); }
    input[type=file]::file-selector-button { border: 1px solid; border-radius: 0.3em; transition: background 0.25s ease-in-out; background: rgba(169, 169, 169, 0.7); }
    input[type=file]::file-selector-button:hover { background: rgba(169, 169, 169, 1); }
    table { border: 1px solid #8d8d8d; border-collapse: collapse; width: auto; }
    table td, table th { padding: 0.5em 0.75em; vertical-align: middle; border: 1px solid #8d8d8d; }
    @media (any-hover: none) { .dynamic-opacity { opacity: 0.8; } .dynamic-opacity:hover { opacity: 0.8; } }
    @media screen and (min-width: 767px) {
        aside.panel { display: contents; line-height: 1.5; }
        ul.outline { position: sticky; float: right; padding: 0 0 0 0.5em; margin: 0 0.5em -99vh; max-height: 80vh; border: 1px solid #BBBBBB; border-left: 2px solid #F2E5E5; box-shadow: 0 0 5px #ddd; background: linear-gradient(to right, #fcf1f1, #FFF 1em); list-style: none; width: 10.5%; color: gray; border-radius: 5px; overflow-y: scroll; z-index: 1; }
        ul.outline > li { overflow: hidden; text-overflow: ellipsis; }
        ul.outline > li > a { color: gray; white-space: nowrap; text-decoration: none; }
    }
    pre > code { overflow: hidden; display: block; }
    ul { padding-left: 1.5em; }
    .script-list > .regex-filtered { display: none; }
    #greasyfork-enhance-regex-filter-tip { float: right; color: grey; }
    @media screen and (max-width: 800px) { #greasyfork-enhance-regex-filter-tip { display: none; } }`);
    // Aside panel & Anchors
    const is_script = /^\/[^\/]+\/scripts/;
    const is_specific_script = /^\/[^\/]+\/scripts\/\d+/;
    const is_disccussion = /^\/[^\/]+\/discussions/;
    const path = window.location.pathname;
    if ((!is_script.test(path) && !is_disccussion.test(path)) || is_specific_script.test(path)) {
        const panel = body.insertBefore(document.createElement("aside"), $("body > div.width-constraint"));
        panel.className = "panel";
        const reference_node = $("body > div.width-constraint > section");
        const outline = panel.appendChild(document.createElement("ul"));
        outline.classList.add("outline");
        outline.classList.add("dynamic-opacity");
        outline.style.top = reference_node ? getComputedStyle(reference_node).marginTop : "1em";
        outline.style.marginTop = outline.style.top;
        let flag = false;
        $$("body > div.width-constraint h1, h2, h3, h4, h5, h6").forEach((node) => {
            flag = process(outline, node) || flag; // Not `flag || process(node)`!
        });
        if (!flag) {
            panel.remove();
        }
    }
    // Navigate to hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        const ele = document.getElementById(decodeURIComponent(hash));
        if (ele) {
            ele.scrollIntoView();
        }
    }
    // Buttons
    const buttons = body.appendChild(document.createElement("div"));
    buttons.id = "float-buttons";
    const to_top = buttons.appendChild(document.createElement("a"));
    to_top.classList.add("button");
    to_top.classList.add("dynamic-opacity");
    to_top.href = "#top";
    to_top.text = "↑";
    // Double click to get to top
    body.addEventListener("dblclick", (e) => {
        if (e.target === body) {
            to_top.click();
        }
    });
    // Fix current tab link
    const tab = $("ul#script-links > li.current");
    if (tab) {
        const link = tab.appendChild(document.createElement("a"));
        link.href = window.location.pathname;
        link.appendChild(tab.firstChild);
    }
    const parts = window.location.pathname.split("/");
    if (parts.length <= 2 || (parts.length == 3 && parts[2] === '')) {
        const banner = $("header#main-header div#site-name");
        const img = banner.querySelector("img");
        const text = banner.querySelector("#site-name-text > h1");
        const link1 = document.createElement("a");
        link1.href = window.location.pathname;
        img.parentNode.replaceChild(link1, img);
        link1.appendChild(img);
        const link2 = document.createElement("a");
        link2.href = window.location.pathname;
        link2.textContent = text.textContent;
        text.textContent = "";
        text.appendChild(link2);
    }
    // Toolbar for code blocks
    const code_blocks = document.getElementsByTagName("pre");
    for (const code_block of code_blocks) {
        if (code_block.firstChild.tagName === "CODE") {
            const height = getComputedStyle(code_block.firstChild).getPropertyValue("height");
            code_block.firstChild.style.height = height;
            code_block.firstChild.setAttribute("data-height", height);
            code_block.insertAdjacentElement("afterbegin", createToolbar());
        }
    }
    // Regex filter
    const regexFilterTip = $(".sidebarred > .sidebarred-main-content > .script-list#browse-script-list")
        ?.previousElementSibling?.appendChild?.(document.createElement("span"));
    if (regexFilterTip) {
        regexFilterTip.id = idPrefix + "regex-filter-tip";
        regexFilterTip.title = `[${name}] Number of scripts filtered by regex`;
    }
    function setRegexFilterTip(content) {
        if (regexFilterTip) {
            regexFilterTip.textContent = content;
        }
    }
    function regexFilterOne(regex, script) {
        const info = script.querySelector("article > h2");
        if (!info) return;
        const name = info.querySelector(".script-link").textContent;
        const result = regex.test(name);
        script.classList.toggle("regex-filtered", result);
        if (result) {
            log("Filtered:", name);
        }
        return result;
    }
    function regexFilter(regexStr) {
        const scripts = $$(".script-list > li");
        if (regexStr === "" || scripts.length === 0) {
            scripts.forEach(script => script.classList.remove("regex-filtered"));
            setRegexFilterTip("");
            return;
        }
        const regex = new RegExp(regexStr, "i");
        let count = 0;
        console.groupCollapsed(`[${name}] Regex filtered scripts`);
        scripts.forEach(script => {
            if (regexFilterOne(regex, script)) {
                count++;
            }
        });
        setRegexFilterTip(`Filtered: ${count}/${scripts.length}`);
        console.groupEnd();
    }
    regexFilter(configProxy["regex-filter"]);
    // Auto hide code blocks
    function autoHide() {
        if (!configProxy["auto-hide-code"]) {
            for (const code_block of code_blocks) {
                const toggle = code_block.firstChild.lastChild;
                if (!toggle) continue;
                if (toggle.textContent === "Show code") {
                    toggle.click(); // Click the toggle button
                }
            }
        } else {
            for (const code_block of code_blocks) {
                const m = code_block.lastChild.textContent.match(/\n/g);
                const rows = m ? m.length : 0;
                const toggle = code_block.firstChild.lastChild;
                if (!toggle) continue;
                const hidden = toggle.textContent === "Show code";
                if (rows >= configProxy["auto-hide-rows"] && !hidden || rows < configProxy["auto-hide-rows"] && hidden) {
                    code_block.firstChild.lastChild.click(); // Click the toggle button
                }
            }
        }
    }
    document.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === "complete") {
            autoHide();
        }
    }, { once: true });
    // Tab size
    function tabSize() {
        const size = configProxy["tab-size"];
        const style = $("style#" + idPrefix + "tab-size") ?? document.head.appendChild(document.createElement("style"));
        style.id = idPrefix + "tab-size";
        style.textContent = `pre { tab-size: ${size}; }`;
    }
    tabSize();
    // Alternative URLs for library
    function alternativeURLs(enable) {
        if ($(".remove-attachments") || !$("div#script-content") || $("div#script-content > div#install-area")) return; // Not a library
        const id = idPrefix + "lib-alternative-url";
        const current = document.getElementById(id);
        if (current && !enable) {
            current.remove();
        } else if (!current && enable) {
            const description = $("div#script-content > p");
            const trim = "// @require ";
            const text = description?.querySelector("code")?.textContent;
            if (!text || !text.startsWith(trim)) return; // Found no URL
            const url = text.slice(trim.length);
            const parts = url.split("/");
            const scriptId = parts[4];
            const scriptVersion = parts[5];
            const fileName = parts[6];
            const URLs = [
                [`// @require https://update.greasyfork.org/scripts/${scriptId}/${fileName}`, "Latest version"],
                [`// @require https://greasyfork.org/scripts/${scriptId}/code/${fileName}?version=${scriptVersion}`, "Current version (Legacy)"],
                [`// @require https://greasyfork.org/scripts/${scriptId}/code/${fileName}`, "Latest version (Legacy)"],
            ];

            const detail = document.createElement("p").appendChild(document.createElement("details"));
            description.after(detail.parentElement);
            detail.parentElement.id = id;
            detail.appendChild(document.createElement("summary")).textContent = "Alternative URLs";
            const list = detail.appendChild(document.createElement("ul"));
            for (const [url, text] of URLs) {
                const link = list.appendChild(document.createElement("li")).appendChild(document.createElement("code"));
                link.textContent = url;
                link.title = text;
            }
        }
    }
    alternativeURLs(configProxy["lib-alternative-url"]);
    // Short link
    function shortLink(enable) {
        const description = $("div#script-content");
        const url = window.location.href;
        const scriptId = url.match(/\/scripts\/(\d+)/)?.[1];
        if (!scriptId || !description) return;
        const id = idPrefix + "short-link";
        const current = document.getElementById(id);
        if (current && !enable) {
            current.remove();
        } else if (!current && enable) {
            const short = `https://greasyfork.org/scripts/${scriptId}`;
            const p = description.insertAdjacentElement("beforebegin", document.createElement("p"));
            p.id = id;
            p.textContent = "Short link: ";
            const link = p.appendChild(document.createElement("a"));
            link.href = short;
            link.textContent = short;
            const copy = p.appendChild(document.createElement("a"));
            copy.textContent = "(Copy)";
            copy.style.marginLeft = "1em";
            copy.style.cursor = "pointer";
            copy.title = "Copy short link to clipboard";
            copy.addEventListener("click", () => {
                if (copy.textContent === "(Copied!)") return;
                navigator.clipboard.writeText(short).then(() => {
                    copy.textContent = "(Copied!)";
                    window.setTimeout(() => {
                        copy.textContent = "(Copy)";
                    }, 1000);
                });
            });
        }
    }
    shortLink(configProxy["short-link"]);
    // Shortcut
    function submitOnCtrlEnter(e) {
        const form = this.form;
        if (!form) return;
        // Ctrl + Enter to submit
        if (e.ctrlKey && e.key === "Enter") {
            form.submit();
        }
    }
    function handleInputFocus(e) {
        const ele = document.activeElement;
        // Ignore key combinations
        if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
            return;
        }
        // Do not interfere with input elements
        if (ele.tagName === "INPUT" || ele.tagName === "TEXTAREA" || ele.getAttribute("contenteditable") === "true") {
            if (e.key === "Escape") {
                e.preventDefault();
                ele.blur(); // Escape to blur
            }
            return;
        }
        // Do not interfere with input methods
        if (e.isComposing || e.keyCode === 229) {
            return;
        }
        if (e.key === "Enter") {
            const input = $("input[type=search]") || $("input[type=text]") || $("textarea");
            if (input) {
                e.preventDefault();
                input.focus();
            }
        }
    }
    let shortcutEnabled = false;
    function shortcut(enable) {
        const textAreas = $$("textarea");
        if (!shortcutEnabled && enable) {
            for (const textarea of textAreas) {
                textarea.addEventListener("keyup", submitOnCtrlEnter);
            }
            document.addEventListener("keydown", handleInputFocus);
            shortcutEnabled = true;
        } else if (shortcutEnabled && !enable) {
            for (const textarea of textAreas) {
                textarea.removeEventListener("keyup", submitOnCtrlEnter);
            }
            document.removeEventListener("keydown", handleInputFocus);
            shortcutEnabled = false;
        }
    }
    shortcut(configProxy["shortcut"]);
    // Initialize css
    for (const prop in dynamicStyle) {
        cssHelper(prop, configProxy[prop]);
    }
    // Dynamically respond to config changes
    const callbacks = {
        "regex-filter": regexFilter,
        "auto-hide-code": autoHide,
        "auto-hide-rows": autoHide,
        "tab-size": tabSize,
        "flat-layout": (after) => {
            const meta_orig = $("#script-info > #script-content .script-meta-block");
            const meta_mod = $("#script-info > .script-meta-block");
            if (after && meta_orig) {
                const header = $("#script-info > header");
                header.before(meta_orig);
            } else if (!after && meta_mod) {
                const additional = $("#script-info > #script-content #additional-info");
                additional.before(meta_mod);
            }
        },
        "lib-alternative-url": alternativeURLs,
        "short-link": shortLink,
        "shortcut": shortcut,
    };
    callbacks["flat-layout"](configProxy["flat-layout"]);
    config.addListener(e => {
        if (e.detail.type === "set") {
            const callback = callbacks[e.detail.prop];
            if (callback && (e.detail.before !== e.detail.after)) {
                callback(e.detail.after);
            }
            if (e.detail.prop in dynamicStyle) {
                cssHelper(e.detail.prop, e.detail.after);
            }
        }
    });
    // Search syntax
    const types = {
        "script": "scripts",
        "lib": "scripts/libraries",
        "library": "scripts/libraries",
        // "code": "scripts/code-search", // It uses a different search parameter `c` instead of `q`
        "user": "users"
    };
    const langs = {
        "js": "",
        "javascript": "",
        "css": "css",
        "any": "all",
        "all": "all"
    };
    const sorts = {
        "rel": "",
        "relevant": "",
        "relevance": "",
        "day": "daily_installs",
        "daily": "daily_installs",
        "daily_install": "daily_installs",
        "daily_installs": "daily_installs",
        "total": "total_installs",
        "total_install": "total_installs",
        "total_installs": "total_installs",
        "score": "ratings",
        "rate": "ratings",
        "rating": "ratings",
        "ratings": "ratings",
        "created": "created",
        "created_at": "created",
        "updated": "updated",
        "updated_at": "updated",
        "name": "name",
        "title": "name",
    };
    if (configProxy["search-syntax"]) {
        function parseString(input) {
            // Regular expression to match key:value pairs, allowing for non-word characters in values
            const regex = /\b(\w+:[^\s]+)\b/g;
            // Extract all key:value pairs
            const pairs = input.match(regex) || [];
            // Remove the pairs from the input string
            const cleanedString = input.replace(regex, '').replace(/\s{2,}/g, ' ').trim();

            // Convert pairs to an object
            const parsedPairs = pairs.reduce((acc, pair) => {
                const [key, value] = pair.split(':');
                acc[key.toLowerCase()] = value.toLowerCase(); // Case-insensitive
                return acc;
            }, {});

            return { cleanedString, parsedPairs };
        }
        function processSearch(search) {
            const form = search.form;
            if (form.method !== "get") {
                return;
            }
            form.addEventListener("submit", (e) => {
                const { cleanedString, parsedPairs } = parseString(search.value);
                if (cleanedString === search.value) return;
                search.value = cleanedString;
                if (!parsedPairs) return;
                e.preventDefault();
                const url = new URL(form.action, window.location.href);
                url.searchParams.set("q", cleanedString);
                if (parsedPairs["site"]) { // site:site-name
                    url.pathname = `/scripts/by-site/${parsedPairs["site"]}`;
                } else if (parsedPairs["type"]) { // type:type, including "script", "lib"/"library", "code", "user"
                    const typeUrl = types[parsedPairs["type"]];
                    if (typeUrl) {
                        url.pathname = `/${typeUrl}`;
                    }
                }
                if (parsedPairs["lang"]) { // lang:language
                    const lang = langs[parsedPairs["lang"]];
                    if (lang === "") {
                        url.searchParams.delete("language");
                    } else if (lang) {
                        url.searchParams.set("language", lang);
                    }
                }
                if (parsedPairs["sort"]) { // sort:sort-by
                    const sort = sorts[parsedPairs["sort"]];
                    if (sort === "" || sort === "daily_installs" && cleanedString === "") {
                        url.searchParams.delete("sort");
                    } else if (sort) {
                        url.searchParams.set("sort", sort);
                    }
                }
                window.location.href = url.href;
            });
        }
        const searches = $$("input[type=search][name=q]");
        for (const search of searches) {
            processSearch(search);
        }
    }
    // Image proxy
    if (configProxy["image-proxy"]) {
        const PROXY = "https://wsrv.nl/?url=";
        const images = $$("a[href^='/rails/active_storage/blobs/redirect/'] > img[src^='https://greasyfork.']");
        for (const img of images) {
            img.src = PROXY + img.src;
            const link = img.parentElement;
            link.href = PROXY + link.href;
        }
    }
})();
