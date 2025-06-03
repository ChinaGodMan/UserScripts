// ==UserScript==
// @name               微信网页版深色模式
// @name:zh-CN         微信网页版深色模式
// @description        启用网页微信全屏窗口，深色模式
// @description:zh-CN  启用网页微信全屏窗口，深色模式
// @author             Benjamin L
// @namespace          https://github.com/bensgith/userscripts
// @supportURL         https://github.com/bensgith/userscripts/issues
// @homepageURL        https://github.com/bensgith/userscripts
// @homepage           https://github.com/bensgith/userscripts
// @license            MIT
// @match              https://wx.qq.com/*
// @match              https://wx2.qq.com/*
// @icon               https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.2.1
// @grant              GM_addStyle
// @run-at             document-idle
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/wechat-black/wechat-black.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/wechat-black/wechat-black.user.js
// ==/UserScript==

(function () {
    'use strict'

    GM_addStyle(`
        /* login page */
        .login .web_wechat_login_logo,
        .login .login_box .qrcode .sub_title,
        .login .login_box .qrcode .sub_desc,
        .login .login_box .avatar .img,
        .login .login_box .association .img,
        .login .login_box .association .waiting_confirm,
        .login .login_box .broken_network,
        .login .lang,
        .login .copyright {
            display: none;
        }
        .login .login_box {
            background: #1E1E1E;
        }
        .login .login_box .avatar .action,
        .login .login_box .association .button.button_primary,
        .login .login_box .association .button.button_default {
            color: #000000;
            border: 1px solid #CCCCCC;
            background-color: #CCCCCC;
        }

        /* Common elements */
        body {
            background: #1E1E1E;
        }
        .main {
            min-height: 100%;
            padding-top: 0px;
        }
        .main .copyright {
            display: none;
        }
        .main_inner {
            max-width: 100%;
            line-height: 1.35;
        }
        #vscode_logo {
            display: table-cell;
            padding-right: 10px;
        }

        /* left sidebar */
        .header .avatar,
        .header .info .nickname .display_name,
        .download_entry,
        .read_item .ext,
        .read_item_hd .avatar,
        .recommendation .avatar,
        .contact_list .contact_item .avatar,
        .contact_list .contact_item .info .nickname .emoji,
        .chat_list .chat_item .avatar .img,
        .chat_list .chat_item .nickname .emoji,
        .chat_list .chat_item .ext,
        .chat_list .chat_item .info .msg {
            display: none;
        }
        .panel .header .info .nickname::before {
            display: inline-block;
            height: 30px;
            align-content: center;
            color: #CCCCCC;
            content: "VS CODE";
        }
        .panel .header .info .nickname .opt {
            float: right;
        }
        .panel .search_bar {
            width: auto;
            text-align: center;
        }
        .panel .search_bar .frm_search {
            width: 78%;
        }
        .panel .search_bar .recommendation {
            left: 18px;
            font-size: 13px;
        }
        .panel .search_bar .recommendation .contact_item {
            padding: 6px 9px;
        }
        .panel .search_bar .recommendation .info {
            line-height: 22px;
        }
        .panel {
            background-color: #252526;
        }
        .panel.give_me .nav_view {
            top: 140px;
        }
        .web_wechat_tab_chat,
        .web_wechat_tab_public,
        .web_wechat_tab_friends {
            background: none;
            color: #4f4f4f;
            height: 34px;
            align-content: center;
        }
        .web_wechat_tab_chat_hl,
        .web_wechat_tab_public_hl,
        .web_wechat_tab_friends_hl {
            background: none;
            color: #FFFFFF;
            height: 34px;
        }
        /* replace tab icons with text */
        .web_wechat_tab_chat::after {
            content: "₡";
        }
        .web_wechat_tab_public::after {
            content: "₱";
        }
        .web_wechat_tab_friends::after {
            content: "₣";
        }
        .nav_view .read_item_hd {
            padding: 2px 18px;
        }
        .nav_view .chat_list .chat_item .info .nickname,
        .nav_view .read_list .read_item .title,
        .nav_view .contact_list .contact_item .info .nickname {
            line-height: 22px;
            font-weight: normal;
        }
        .nav_view .chat_list .chat_item,
        .nav_view .read_list .read_item,
        .nav_view .contact_list .contact_item {
            padding: 6px 18px 6px;
        }

        /* message box */
        #chatArea .box_hd .title .title_name .emoji,
        #chatArea .box_bd .chat_bd .message_empty,
        #chatArea .box_bd .chat_bd .avatar,
        #chatArea .box_bd .message .content .bubble:before, /* left triangle */
        #chatArea .box_bd .message .content .bubble:after, /* right triangle */
        #chatArea .box_bd .message .content .nickname .emoji,
        #chatArea .box_bd .message .content .emoticon .custom_emoji,
        #chatArea .box_bd .message .content .bubble .bubble_cont .card .emoji,
        #chatArea .box_bd .message .content .bubble .bubble_cont .app .cover,
        #chatArea .box_bd .message .content .bubble .bubble_cont .card .card_avatar,
        #chatArea .box_bd .message .content .bubble .bubble_cont .card:after,
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice .web_wechat_noread,
        #chatArea .box_bd .message .content .bubble .bubble_cont .location .img,
        #chatArea .box_bd .message_system,
        #chatArea .box_ft .action,
        .box .box_bd .web_wechat_no_contect {
            display: none;
        }
        .box,
        .box .box_bd {
            background-color: #1E1E1E;
            color: #FFFFFF;
        }
        .box .box_bd .profile .button {
            color: #000000;
            background-color: #CCCCCC;
        }
        .box .box_hd .title_wrap {
            background-color: #1E1E1E;
            border-bottom: none;
            text-align: left;
            margin: 0 28px;
        }
        #chatArea .box_hd .title_wrap .title .title_name {
            color: #FFFFFF;
        }
        #chatArea .box_hd .members {
            background-color: #1E1E1E;
            border-bottom: 1px solid #4f4f4f;
        }
        #chatArea .box_bd .message {
            margin-bottom: 0px;
        }
        #chatArea .box_bd .message a {
            color: #0098FF;
            text-decoration: none; /* remove underscore */
        }
        #chatArea .box_bd .message .content .emoticon {
            padding: 2px 11px;
        }
        /* custom emojis are hidden use text instead */
        #chatArea .box_bd .message .content .emoticon::after {
            color: #CCCCCC;
            font-size: 14px;
            content: "[custom_emoji]";
        }
        #chatArea .box_bd .message .content .bubble {
            color: #CCCCCC;
            background-color: #1E1E1E;
            max-width: none;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .plain,
        #chatArea .box_bd .message .content .bubble .bubble_cont .picture,
        #chatArea .box_bd .message .content .bubble .bubble_cont .video,
        #chatArea .box_bd .message .content .bubble .bubble_cont .location {
            padding: 4px 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice {
            background-color: #CCCCCC;
            border-radius: 5px;
            padding: 4px 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .picture img {
            max-width: 25px;
            max-height: 25px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .app {
            padding: 4px;
            margin: 0px;
            background-color: #2D2D2D;
            max-width: none;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .app .title {
            color: #CCCCCC;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .card {
            padding: 4px;
            margin: 0px;
            background-color: #2D2D2D;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .card .card_hd {
            padding: 0px;
        }
        /* smaller size of video message */
        #chatArea .box_bd .message .content .bubble .bubble_cont .video img {
            max-width: 30px;
            max-height: 30px;
        }
        /* smaller size of video play icon */
        #chatArea .box_bd .message .content .bubble .bubble_cont .video .web_wechat_paly {
            margin-top: -16px;
            margin-left: -16px;
            width: 30px;
            height: 30px;
            background-position: -246px -120px;
            -webkit-background-size: 284px 254px;
            background-size: 283px 254px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice .web_wechat_voice_gray,
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice .web_wechat_voice_green {
            background: none;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .location .desc::before {
            content: "📍: ";
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .location .desc {
            position: relative;
            width: auto;
            overflow: auto;
            background-color: #2D2D2D;
            color: #CCCCCC;
            padding: 4px;
        }
        #chatArea .box_bd .message .message_system {
            margin: 0px auto;
        }
        #chatArea .box_bd .message .message_system .content {
            padding: 4px 0px;
            color: #4f4f4f;
        }

        /* chat box */
        .chat .box_ft {
            border-top: 1px solid #4f4f4f;
        }
        .chat .box_ft .content {
            color: #CCCCCC;
        }
        .chat .box_ft .toolbar .web_wechat_face,
        .chat .box_ft .toolbar .web_wechat_screencut,
        .chat .box_ft .toolbar .web_wechat_pic {
            width: 40px;
            height: 30px;
            background: none;
            color: #4f4f4f;
            text-decoration: none;
            font-size: 14px;
            text-align: center;
            align-content: center;
        }
        .chat .box_ft .toolbar .web_wechat_pic .webuploader-pick {
            opacity: 100;
            width: 40px;
            height: 30px;
            text-align: center;
            align-content: center;
        }
        .chat .box_ft .toolbar .web_wechat_face::after {
            content: 'FACE';
        }
        .chat .box_ft .toolbar .web_wechat_screencut::after {
            content: 'CUT';
        }
        .chat .box_ft .toolbar .web_wechat_pic .webuploader-pick::after {
            content: 'FILE';
            color: #4f4f4f;
        }
    `)

    // Private Mode
    // - if enabled: nicknames, group names, emojis are hidden or masked
    // - if disabled: nicknames, group names, emojis are shown
    let privateMode = true
    if (privateMode) {
        GM_addStyle(`
            .chat_list .chat_item .info .nickname_text,
            #chatArea .box_hd .title_wrap .title .title_count {
                display: none;
            }
            .panel {
                width: 200px;
            }
            .panel .search_bar .recommendation {
                left: 0px;
                width: 200px;
                font-size: 13px;
            }
            .panel.give_me .nav_view .chat_list .chat_item .info .nickname::after {
                content: "📄 README.md";
            }
            #chatArea .box_hd .title_wrap .title .title_name {
                max-width: 80px;
                overflow: hidden;
            }
            /* replace emoji with "wechat face" in message */
            #chatArea .box_bd .message .content .bubble .bubble_cont .plain .emoji,
            #chatArea .box_bd .message .content .bubble .bubble_cont .plain .qqemoji {
                background: url(//res.wx.qq.com/t/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;
                background-position: -342px -338px;
                -webkit-background-size: 408px 389px;
                background-size: 408px 389px;
            }
        `)
    }

    let vscodeFavico = 'https://code.visualstudio.com/favicon.ico'
    let vscodeName = 'Microsoft VS Code'

    // change favicon and title
    document.getElementsByTagName('link')[0].href = vscodeFavico
    /* If window is blur (not focus), page title will be updated once there are new messages.
       Another user script, named "Always on focus" (https://github.com/daijro/always-on-focus),
       is being used to trick the app that window is always "focused" */
    document.getElementsByTagName('title')[0].innerHTML = vscodeName

    // add vs code logo
    let divLogo = document.createElement('div')
    divLogo.setAttribute('id', 'vscode_logo')
    divLogo.innerHTML = `
        <img src="https://code.visualstudio.com/favicon.ico"
            style="width:30px;height:30px;vertical-align:middle;">
    `
    let header = document.getElementsByClassName('panel give_me')[0].getElementsByClassName('header')[0]
    header.insertBefore(divLogo, header.firstElementChild)

})()
