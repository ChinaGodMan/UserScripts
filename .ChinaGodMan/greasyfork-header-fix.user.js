// ==UserScript==
// @name         GreasyFork Header Style Fix
// @description  To fix GreasyFork Header Style.增加在移动设备上显示完整的导航栏,而不是小汉堡菜单。
// @author       CY Fung,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL   https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL  https://github.com/ChinaGodMan/UserScripts
// @homepage     https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @match        *://*.greasyfork.org/*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJmaWxsOiAjRDcyMzIzOyI+PHBhdGggZD0iTTIwMC4zIDI2OS45Yy0xNS43IDYuNi0zMi43IDEwLjEtNTAuMyAxMC4xLTM0LjcgMC02Ny40LTEzLjUtOTEuOS0zOC4xQzMzLjUgMjE3LjQgMjAgMTg0LjcgMjAgMTUwczEzLjUtNjcuNCAzOC4xLTkxLjlDODIuNiAzMy41IDExNS4zIDIwIDE1MCAyMHM2Ny40IDEzLjUgOTEuOSAzOC4xQzI2Ni41IDgyLjYgMjgwIDExNS4zIDI4MCAxNTBjMCAxNy42LTMuNSAzNC42LTEwIDUwLjMgNSA1IDEwIDEwLjEgMTUuMSAxNS4xIDkuNi0xOS44IDE1LTQyIDE1LTY1LjRDMzAwIDY3LjIgMjMyLjggMCAxNTAgMFMwIDY3LjIgMCAxNTBzNjcuMiAxNTAgMTUwIDE1MGMyMy40IDAgNDUuNi01LjQgNjUuNC0xNS01LjEtNS0xMC4xLTEwLjEtMTUuMS0xNS4xeiIvPjxwYXRoIGQ9Ik0yNjcuOCAzMDBjLTkuNi0xLjMtMTYuNS03LTIzLjEtMTMuNy0xNC45LTE1LjMtMzAuMS0zMC4yLTQ1LjItNDUuMy05LjMtOS4zLTEyLTIwLjEtNy41LTMyLjcuMy0uOC4zLTIuMS0uMi0yLjYtMy45LTQuMS03LjktOC0xMi0xMi4xLTYuNCA0LTEzLjEgNi43LTIwLjUgNy42LTE1LjUgMS45LTI5LTIuNC00MC4yLTEzLjItMTIuMy0xMS44LTI0LjItMjQtMzYuMi0zNi4xLTMuNS0zLjUtNC4xLTcuNC0yLjItMTEuMiAxLjktMy43IDUuOS02LjQgOS43LTUuNiAyLjUuNSA1LjEgMiA2LjkgMy44IDcuNCA3LjEgMTQuNSAxNC40IDIxLjggMjEuNi42LjYgMS4zIDEuMiAxLjcgMS42bDEzLjgtMTMuOGMtNi4yLTYuMS0xMi42LTEyLjUtMTguOS0xOC45LTEuOS0xLjktMy44LTMuNy01LjYtNS42LTMuOC00LjItMy43LTkuNy4yLTEzLjYgMy45LTMuOSA5LjUtNC4xIDEzLjYtLjEgNy41IDcuMyAxNC44IDE0LjcgMjIuMSAyMi4xLjguOCAxLjUgMS44IDIuMSAyLjRsMTQuMy0xNC4zYy0yLTEuOC00LjUtNC02LjgtNi4zLTYtNS45LTExLjktMTEuOC0xNy44LTE3LjgtMi43LTIuNy0zLjctNS45LTIuNC05LjYgMS40LTMuOSA0LjItNi4zIDguMy02LjkgMy40LS42IDYgMSA4LjQgMy4zbDE0LjcgMTQuN2M3LjQgNy40IDE0LjkgMTQuNiAyMiAyMi4yIDE0LjcgMTUuNyAxNyAzOS4xIDYuMSA1Ny43LS40LjctLjcgMS40LTEuMyAyLjQgMy45IDMuOSA3LjkgNy44IDExLjkgMTEuNi42LjUgMiAuNiAyLjguMyAxMi41LTQuNCAyMy4zLTEuNyAzMi43IDcuNiAxNS4xIDE1LjEgMzAuMSAzMC4zIDQ1LjMgNDUuMiA2LjcgNi41IDEyLjQgMTMuNCAxMy43IDIzdjUuOGMtLjIuNS0uNCAxLjEtLjUgMS42LTEuOCA5LjUtNi42IDE3LTE1LjUgMjEuMi0zLjMgMS42LTYuOSAyLjMtMTAuNCAzLjUtMS45LjItMy44LjItNS44LjJ6Ii8+PHBhdGggZD0iTTE3MCAyMTkuNmMtMi43LjctNS40IDEuMi04LjIgMS41LTMuMS40LTYuMi42LTkuMi42LTE3LjkgMC0zNC4yLTYuNi00Ny4yLTE5LjItMTAuMi05LjgtMjAuMi0yMC0zMC0yOS44bC02LjYtNi42Yy05LjUtOS41LTExLjctMjIuNy01LjgtMzQuMyA0LjktOS42IDE0LjQtMTYgMjQuNS0xNi42LjUtNi45IDMuNS0xMy42IDguOS0xOC45IDUuMi01LjEgMTEuOC04LjIgMTguNy04LjcuMi0yLjUuNy00LjkgMS42LTcuNCAzLjgtMTAuOCAxMi42LTE4LjEgMjMuOS0yMCAxLjUtLjIgMy4xLS40IDQuNi0uNCA1LjQgMCAxMy40IDEuNiAyMS4xIDkuMiA0LjcgNC43IDkuNiA5LjUgMTQuOCAxNC43IDIuMSAyLjIgNC40IDQuNCA2LjUgNi41IDUuMyA1LjIgMTAuNyAxMC42IDE1LjkgMTYuMiAxMC4yIDEwLjkgMTYuNCAyNC41IDE3LjkgMzkuMy45IDguMi4yIDE2LjQtMS44IDI0LjJoLjFjMTIuOCAwIDI0LjcgNS4xIDM0LjcgMTQuOCAzLjYtMTAuOSA1LjYtMjIuNiA1LjYtMzQuNyAwLTYwLjgtNDkuMi0xMTAtMTEwLTExMFM0MCA4OS4yIDQwIDE1MHM0OS4yIDExMCAxMTAgMTEwYzEyLjEgMCAyMy44LTIgMzQuNy01LjYtOS44LTEwLjEtMTQuOC0yMi4xLTE0LjctMzQuOHoiLz48L3N2Zz4=
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @compatible   opera
// @compatible   safari
// @compatible   kiwi
// @compatible   qq
// @compatible   via
// @compatible   brave
// @run-at       document-start
// @version      0.1
// ==/UserScript==

/**
 * File: greasyfork-header-fix.js
 * Project: UserScripts
 * File Created: 2025/04/30,Wednesday 02:32:22
 * Author:  CY Fung<https://greasyfork.org/zh-CN/users/371179>,人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/04/30,Wednesday 02:36:05
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */

(function () {
    let css = `
        html {
            --main-header-scale: 1.0;
        }

        #site-nav {
            font-size: min(16px, calc(20px * var(--main-header-scale)));
        }

        #site-name {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            margin: 0;
        }
        #site-name-text h1 {
            font-size: calc(38pt * var(--main-header-scale));
            white-space: nowrap;
            margin: 0;
        }

        #site-name-text {
            margin: 0;
        }

        #main-header > .width-constraint:only-child {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-top: calc(8px * var(--main-header-scale));
            padding-bottom: calc(8px * var(--main-header-scale));
            padding-right: calc(24px * var(--main-header-scale));
            padding-left: calc(24px * var(--main-header-scale));
            flex-direction: row;
            margin: 0;
        }
        #site-nav > nav,
        #nav-user-info {
            position: static;
            margin: 0;
        }

        #site-nav {
            display: flex;
            row-gap: 4px;
            flex-direction: column;
            margin: 0;
        }
        #main-header > .width-constraint:only-child > #site-nav:last-child {
            flex-grow: 1;
            margin: 0;
        }
        html #site-name img {
            width: calc(58px * var(--main-header-scale));
            height: calc(58px * var(--main-header-scale));
            margin: 0;
        }
        @media screen and (max-width: 768px) {
            #site-name {
                display: none;
            }
            #mobile-nav {
                display: none;
            }
            html {
                --main-header-scale: 0.74;
            }
        }
        @media screen and (max-width: 672px) {
            html {
                --main-header-scale: 0.62;
            }
        }
    `
    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css)
    } else {
        const styleNode = document.createElement('style')
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector('head') || document.documentElement).appendChild(styleNode)
    }
    function isMobile() {
        let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        return flag
    }
    /* if (isMobile()) {
    // 网站图标区
    var siteName = document.querySelector('#site-name').style.display = 'none'
    // 小汉堡按钮
    document.querySelector('#mobile-nav > div').style.display = 'none'
    // 平移用户登录名
    document.querySelector('#nav-user-info').style.marginLeft = '20px'
    // 整个导航栏
    var siteNav = document.querySelector('#site-nav > nav').style.marginLeft = '-100px

}
 */
})()
