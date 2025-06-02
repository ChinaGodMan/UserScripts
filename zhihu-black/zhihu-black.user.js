// ==UserScript==
// @name              知乎的深色主题
// @name:zh-CN        知乎的深色主题
// @description       知乎的深色主题风格
// @description:zh-CN 知乎的深色主题风格
// @author            Benjamin L
// @namespace         https://github.com/bensgith/userscripts
// @supportURL        https://github.com/bensgith/userscripts
// @homepageURL       https://github.com/bensgith/userscripts
// @license           MIT
// @match             https://www.zhihu.com/*
// @icon              https://static.zhihu.com/heifetz/favicon.ico
// @grant             GM_addStyle
// @run-at            document-idle
// @compatible        chrome
// @compatible        firefox
// @compatible        edge
// @compatible        opera
// @compatible        safari
// @compatible        kiwi
// @compatible        qq
// @compatible        via
// @compatible        brave
// @version           2025.6.2.1
// @downloadURL       https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/zhihu-black/zhihu-black.user.js
// @updateURL         https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/zhihu-black/zhihu-black.user.js
// ==/UserScript==
(function () {
    'use strict'

    ///////////////////////////////
    // top story container
    //////////////////////////////
    if (document.getElementsByClassName('Topstory').length > 0) {
        var cssTopstory = `
            /* top story container */
            .TopstoryItem--advertCard {
                display: none;
            }
            .Topstory-mainColumn {
                width: 787px;
            }
            .Topstory-mainColumnCard .Card {
                border-bottom-color: #414141 !important;
            }
        `
        GM_addStyle(cssTopstory)
    }

    /////////////////////////////////////////////////////
    // Question details page
    ///////////////////////////////////////////////////
    if (document.getElementsByClassName('QuestionPage').length > 0) {
        var cssQuestionPage = `
            /* question details page */
            .QuestionHeader-footer,
            .Pc-word, /* advertisement */
            .Reward, /* reward option */
            .Question-sideColumnAdContainer, /* 侧边栏广告 */
            .AnswerInfo-favlist-title .AnswerInfo-favlist-followers, /* 被收藏次数 */
            .AnswerInfo-favlist-author /* 被收藏的作者信息 */ {
                display: none;
            }
            .QuestionHeader,
            .QuestionHeader-footer {
                background-color: #1E1E1E;
                color: #D4D4D4;
            }
            .QuestionHeader-title,
            .NumberBoard-itemValue {
                color: white;
            }
            .QuestionHeader-main {
                padding-left: 0;
            }
            .Question-mainColumn {
                width: 752px;
            }
            .css-1qyytj7 /* 侧边栏 */{
                max-width: 234px;
            }
            .InputButton {
                background-color: #1E1E1E;
            }
            .AuthorInfo {
                max-width: none;
            }
            /* article separator line */
            .List-item+.List-item:after {
                border-bottom-color: #414141;
            }
            /* Yanxuan special column meta info */
            .KfeCollection-IntroCard-newStyle-mobile,
            .KfeCollection-IntroCard-newStyle-pc {
                background-color: #414141;
            }
        `
        GM_addStyle(cssQuestionPage)
    }

    /////////////////////////////////////////////////////
    // Search result page
    ///////////////////////////////////////////////////
    if (document.getElementsByClassName('Search-container').length > 0) {
        var cssSearch = `
            /* Search result page */
            .SearchTabs,
            .css-knqde /* right side panel */ {
                display: none;
            }
            .Search-container,
            .SearchMain {
                width: 1050px;
            }
        `
        GM_addStyle(cssSearch)
    }

    /////////////////////////////////////////////////
    // main page
    ////////////////////////////////////////////////
    var css = `
        /* hidden elements */
        .FollowButton, /* 关注按钮 */
        .KfeCollection-CreateSaltCard, /* 盐先作者平台 */
        .css-173vipd, /* 推荐关注 */
        .css-2pfapc, /* 帮助中心 举报中心 关于知乎 备案信息 */
        .Pc-card, /* 侧边栏广告 */
        .Pc-Business-Card-PcTopFeedBanner /* 首页顶部广告banner */{
            display: none;
        }

        /* common elements */
        body {
            background-color: #333333;
        }
        a,
        a:hover,
        input.Input {
            color: white !important;
        }

        .css-17rnw55 /* app header background */ {
            background-color: #323233;
            color: white;
        }
        .SearchBar {
            max-width: 670px;
        }
        .SearchBar-input {
            background-color: #3C3C3D !important;
        }

        /* article common */
        .Card {
            background-color: #1E1E1E;
            color: #D4D4D4;
        }
        .ContentItem-actions {
            background-color: #1E1E1E;
        }
        .Button--blue {
            background-color: #0E639C !important;
            color: white !important;
        }
        .css-1503iqi, /* collapse comment button */
        .css-1503iqi:hover,
        .VoteButton,
        .CornerButton {
            background-color: #0E639C;
            color: white;
        }

        /* comments area */
        .css-1jpzztt {
            color: #D4D4D4;
        }
        .css-kt4t4n,
        .css-7wvdjh, /* reply content in reply box in comments */
        .css-1e7fksk /* reply list in reply box in comments */ {
            background-color: #1E1E1E;
        }
        .css-70t8h2 {
            background: unset;
            border-bottom: unset;
        }

        /* input box border in comments */
        .css-14zbeoe,
        .css-u76jt1 {
            border-color: #414141;
        }

        /* timeline font color in story topic */
        .css-13brsx3,
        .css-r4op92 /* 评论回复 */ {
            color: white;
        }

    `
    GM_addStyle(css)
})()
