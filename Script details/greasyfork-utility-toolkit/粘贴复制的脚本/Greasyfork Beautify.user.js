// ==UserScript==
// @name         Greasyfork Beautify
// @namespace    https://github.com/kiccer
// @version      1.6.4
// @description  优化导航栏样式 / 脚本列表改为卡片布局 / 代码高亮(atom-one-dark + vscode 风格) 等……融入式美化，自然、优雅，没有突兀感，仿佛页面原本就是如此……（更多优化逐步完善中！）
// @description:en  Optimize the navigation bar style / script list to card layout / code highlighting (atom-one-dark + vscode style), etc. Into the style of beautification, more natural, more elegant, no sense of abruptness, as if the page is originally so. (more optimization in progress!)
// @author       kiccer<1072907338@qq.com>
// @supportURL   https://github.com/kiccer/TampermonkeyScripts/issues
// @license      MIT
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @icon         https://greasyfork.org/packs/media/images/blacklogo96-b2384000fca45aa17e45eb417cbcbb59.png
// @require      https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/index.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/javascript-detect-element-resize/0.5.3/jquery.resize.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/less.js/4.1.3/less.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/highlight.js/11.5.1/highlight.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/highlight.js/11.5.1/languages/javascript.min.js
// @require      https://greasyfork.org/scripts/447149-checkversion/code/checkVersion.js?version=1065242
// @resource normalize.css https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css
// @resource element-ui.css https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/theme-chalk/index.min.css
// @resource element-icons https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/theme-chalk/fonts/element-icons.ttf
// @resource atom-one-dark.css https://cdn.bootcdn.net/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css
// @run-at       document-start
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @downloadURL https://update.greasyfork.org/scripts/446849/Greasyfork%20Beautify.user.js
// @updateURL https://update.greasyfork.org/scripts/446849/Greasyfork%20Beautify.meta.js
// ==/UserScript==

/* globals $ less Vue hljs checkVersion ELEMENT */

Vue.use(ELEMENT)

if (/\(Development\)$/i.test(GM_info.script.name)) {
    Vue.config.devtools = true
}

// 默认设置
const defaultSettings = {
    script_list_columns_num: 2,
    show_install_button_in_card: true,
    show_version_info_in_card: true
}

// 获取设置
const getSettings = () => {
    return Object.assign(
        {},
        defaultSettings,
        JSON.parse(GM_getValue('formData') || '{}')
    )
}

const VERSION = GM_info.script.version
const settings = getSettings()

// 样式注入
GM_addStyle(GM_getResourceText('normalize.css'))
GM_addStyle(GM_getResourceText('element-ui.css'))
GM_addStyle(GM_getResourceText('atom-one-dark.css'))

const lessOptions = {}

const lessInput = `
    // --------------------------------------------- 变量

    @nav_height: 60px;
    @user_container_height: 24px;

    // --------------------------------------------- 混合宏

    .ellipsis (@lines) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.5;
        -webkit-line-clamp: @lines;
    }

    // --------------------------------------------- 通用样式

    * {
        box-sizing: border-box;
        outline: none;
    }

    body {
        line-height: 1.5;
        min-height: 100vh;
        background-color: #f7f7f7;

        > .width-constraint {
            min-height: 100vh;
            background-color: #fff;
            padding: 20px;
            padding-top: calc(@nav_height + @user_container_height + 20px);
            
            .text-content {
                border: 0;
                box-shadow: none;
                padding: 0;
            }
        }
    }

    a {
        color: rgb(38, 38, 38);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }

        &:visited {
            color: rgb(38, 38, 38);
        }
    }

    // --------------------------------------------- element-ui

    // 解决 element-icons 图标引用不到问题
    @font-face {
        font-family: element-icons;
        src: url(${GM_getResourceURL('element-icons')}),
    }

    // --------------------------------------------- 代码高亮

    .code-container {
        background-color: #282c34;
        border-radius: 8px;
        max-height: 100%;
        overflow: visible;

        // 定义滚动条
        ::-webkit-scrollbar {
            width: 14px;
            height: 14px;
            background-color: transparent;
        }

        // 定义滚动条轨道
        ::-webkit-scrollbar-track {
            background-color: transparent;
        }

        // 定义滑块
        ::-webkit-scrollbar-thumb {
            background-color: rgba(78, 86, 102, 0);
        }

        // 定义边角
        ::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        &:hover {
            ::-webkit-scrollbar-thumb {
                background-color: rgba(78, 86, 102, .5);
            }
        }

        ::selection {
            background-color: rgb(51, 56, 66);
        }

        pre {
            code {
                padding: 0;
                font-family: Consolas;
                cursor: text;
                overflow: auto;

                .marker {
                    display: inline-block;
                    color: #636d83;
                    text-align: right;
                    padding-right: 20px;
                    user-select: none;
                    cursor: auto;
                }
            }
        }
    }

    // --------------------------------------------- 页码

    .pagination {
        margin-top: 20px !important;
        user-select: none;

        > * {
            padding: 0 .5em !important;
            min-width: 2em;
            height: 2em;
            line-height: 2;
            text-align: center;
            text-decoration: none !important;
        }

        > a {
            background-color: #f7f7f7 !important;

            &:hover {
                background-color: #e1e1e1 !important;
            }
        }
    }

    // --------------------------------------------- 输入框

    input[type=search] {
        padding: 3px 6px;
        padding-right: 2.4em !important;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
    }

    form {
        input.search-submit {
            top: 50% !important;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }

    .home-search {
        margin-bottom: 20px;
    }

    .sidebar-search {
        margin-bottom: 20px;

        input[type="search"] {
            margin: 0;
        }
    }

    // --------------------------------------------- header

    #main-header {
        background-color: #000;
        background-image: none;
        width: 100%;
        padding: 0;
        position: fixed;
        top: 0;
        z-index: 1;
        user-select: none;
        box-shadow: 0 0 5px 2px rgb(0 0 0 / 50%);

        .width-constraint {
            display: flex;
            justify-content: space-between;
            height: 100%;
            padding: 0;

            #site-name {
                display: flex;
                align-items: center;
                
                a {
                    display: block;
                }

                img {
                    width: auto;
                    height: 50px;
                }

                #site-name-text {
                    margin-left: 10px;

                    h1 {
                        font-size: 36px;
                    }
                }
            }
        }

        #user-container {
            width: 100%;
            height: @user_container_height;
            background-color: #343434;

            .user-main {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: auto;
                max-width: 1200px;
                height: @user_container_height;
                padding-right: 10px;

                @media screen and (max-width: 1228px) {
                    margin: auto 1.2vw;
                }

                .script-version {
                    font-size: 12px;
                    letter-spacing: 1px;
                    font-family: "微软雅黑";
                    font-weight: 200;
                    color: rgba(255, 255, 255, .3);

                    .has-new-version {
                        color: lime;
                        margin-left: 5px;
                    }
                }

                .login-info {
                    font-size: 14px;
                }
            }
        }
    }

    #site-nav {
        width: 0;
        height: 0;
        border: 0;
        padding: 0;
        overflow: hidden;
        position: relative;
    }

    #site-nav-vue {
        display: flex;
        
        .nav-item {
            line-height: @nav_height;
            padding: 0 10px;
            transition: all .2s ease;
            text-decoration: none;
            position: relative;
            white-space: nowrap;

            &:hover {
                background-color: rgba(255, 255, 255, .2);

                .sub-nav {
                    display: flex;
                }
            }

            .sub-nav {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                right: 0;
                background-color: rgba(0, 0, 0, .8);

                .nav-item {
                    line-height: 40px;
                }
            }
        }
    }

    // --------------------------------------------- 脚本列表

    #user-library-script-list,
    #user-script-list,
    #user-deleted-script-list,
    #browse-script-list {
        display: grid;
        grid-template-columns: repeat(${settings.script_list_columns_num}, 1fr);
        grid-gap: 20px;
        border: 0;
        box-shadow: none;

        @media screen and (max-width: 1228px) {
            grid-template-columns: repeat(1, 1fr);
        }

        li {
            border: 1px solid #bbb;
            box-shadow: 0 0 5px #ddd;
            border-radius: 5px;
            padding: 10px;
            position: relative;
            word-break: break-all;

            a.script-link {
                .ellipsis(2);
                height: calc(3em  + 8px);
                font-size: 16px;
                margin: 4px -10px 4px -14px;
                padding: 4px 10px;
                background: linear-gradient(#fff, #eee);
                border-left: 7px solid #800;
                box-shadow: inset 0 1px rgb(0 0 0 / 10%), inset 0 -1px rgb(0 0 0 / 10%);
            }

            & > article {
                & > h2 {
                    & > .badge,
                    & > .name-description-separator,
                    & > strong {
                        display: none; // 兼容 “大人的Greasyfork”
                    }

                    .script-description {
                        .ellipsis(3);
                        text-indent: 2em;
                        margin: 10px 0 10px;
                        height: 4.5em;
                        font-size: 14px;
        
                        strong,
                        #install-area {
                            display: none; // 兼容 “大人的Greasyfork”
                        }
                    }
                }
            }

            .inline-script-stats {
                padding: 10px 0;
                // margin-bottom: 10px;
                border-top: 1px solid #ebebeb;
                // border-bottom: 1px solid #ebebeb;

                dt {
                    // width: 40%;
                }

                dd {
                    width: 60%;
                }
            }

            .install-link {
                float: right;
                font-size: 12px;

                &:hover {
                    transition: box-shadow .2s;
                    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
                }

                &.lum-lightbox-loader {
                    border-left: 10px solid #005200;
                    border-right: 10px solid #005200;
                    position: relative;
                    min-height: 30px;
                    min-width: 70px;

                    &::before,
                    &::after {
                        width: 1em;
                        height: 1em;
                        margin-top: -0.5em;
                        border-radius: 1em;
                        background: hsla(0, 0%, 100%, .5);
                    }
                }
            }
        }
    }

    // --------------------------------------------- 列表右侧选项组

    .list-option-groups {
        #language-selector {
            + * {
                margin-top: 10px;
            }
            
            #language-selector-locale {
                width: 100%;
                border: 1px solid #bfbfbf;
                border-radius: 4px;
            }
        }
    }
`

less.render(lessInput, lessOptions).then(output => {
    // output.css = string of css
    // output.map = string of sourcemap
    // output.imports = array of string filenames of the imports referenced

    GM_addStyle(output.css)
}, err => {
    console.error(err)
})

// 查看代码页面简化，隐藏信息
if (/https:\/\/greasyfork\.org\/[a-zA-Z-]+\/scripts\/\d+-.+\/code/.test(location.href)) {
    GM_addStyle(`
        #script-info header,
        #install-area,
        #script-feedback-suggestion {
            display: none;
        }

        #script-content {
            margin-top: 16px;
        }

        .code-container pre code {
            max-height: calc(100vh - 267px);
        }
    `)
}

// 脚本卡片美化
function scriptCardBeautify () {
    $(`
        #user-script-list li[data-script-id],
        #user-deleted-script-list li[data-script-id],
        #browse-script-list li[data-script-id]
    `).each((i, n) => {
        const card = $(n)
        const href = card.find('> article a.script-link').attr('href')

        // TODO 显示脚本图标 (看情况，如果加了图标不好布局就算了)

        // 判断这个卡片是否已经美化过了
        const hasVersionTag = card.find('.script-show-version').length > 0
        const hasDownloadBtn = card.find('.install-link-copy').length > 0

        if (!(hasVersionTag && hasDownloadBtn)) {
            // 信息占位
            if (settings.show_version_info_in_card) {
                card.find('.inline-script-stats').append(`
                    <dt class="script-show-version"><span>...</span></dt>
                    <dd class="script-show-version"><span></span></dd>
                `)
            }

            // 下载按钮占位
            if (settings.show_install_button_in_card) {
                card.append(`
                    <a class="install-link lum-lightbox-loader"></a>
                `)
            }

            // 增加延时，避免请求过多导致 503 错误 （每秒最多 10 个请求）
            setTimeout(() => {
                $.ajax({
                    type: 'get',
                    url: href,
                    success: res => {
                        const html = $(res)

                        if (settings.show_version_info_in_card) {
                            // 删除占位元素
                            card.find('.script-show-version').remove()

                            // 版本
                            card.find('.inline-script-stats').append(
                                html.find('.script-show-version')
                            )
                        }

                        if (settings.show_install_button_in_card) {
                            // 删除占位元素
                            card.find('.install-link.lum-lightbox-loader').remove()

                            // 下载按钮
                            card.append(
                                html.find('#install-area .install-link').eq(0).addClass('install-link-copy')
                            )

                            // 下载按钮文案根据已安装的版本号调整
                            setTimeout(() => {
                                const btn = card.find('.install-link-copy')[0]
                                if (btn) checkVersion.checkForUpdatesJS(btn, true)
                            })
                        }
                    }
                })
            }, (i % 5) * 2e3)
        }
    })
}

// 页面获得焦点时
window.addEventListener('focus', e => {
    // 自动更新安装状态
    $('.script-list li[data-script-id] a.install-link-copy').each((i, n) => {
        checkVersion.checkForUpdatesJS(n, true)
    })
})

// 卡片数量记录
let cardCountRecord = 0

// 兼容无限翻页插件
function compatibleWithInfiniteScroll () {
    const cardCount = $('.script-list li[data-script-id]').length

    if (cardCountRecord !== cardCount) {
        cardCountRecord = cardCount
        scriptCardBeautify()
    }
}

// 页面加载完成后执行
$(() => {
    // 导航
    const navContainer = document.createElement('div')
    navContainer.id = 'site-nav-vue'
    document.querySelector('.width-constraint').appendChild(navContainer)

    // eslint-disable-next-line no-unused-vars
    const navApp = new Vue({
        el: '#site-nav-vue',

        template: `
            <div id="site-nav-vue">
                <a
                    class="nav-item"
                    v-for="(nav, nav_i) in navList"
                    :key="nav_i"
                    :href="nav.url"
                >
                    <span>{{ nav.label }}</span>

                    <div class="sub-nav" v-if="nav.list?.length">
                        <a
                            class="nav-item"
                            v-for="(sub, sub_i) in nav.list"
                            :key="sub_i"
                            :href="sub.url"
                        >
                            <span>{{ sub.label }}</span>
                        </a>
                    </div>
                </a>
            </div>
        `,

        data () {
            return {
                navList: [...$('#site-nav > nav > li')].map(n => {
                    const a = $(n).find('> a')
                    const subNav = [...$(n).find('> nav > li')]

                    return {
                        label: a.text() || $(n).text(),
                        url: a.attr('href'),
                        list: subNav.map(m => {
                            const subA = $(m).find('> a')

                            return {
                                label: subA.text(),
                                url: subA.attr('href')
                            }
                        })
                    }
                })
            }
        }
    })

    // 用户
    const userContainer = document.createElement('div')
    userContainer.id = 'user-container'
    document.querySelector('#main-header').appendChild(userContainer)

    // eslint-disable-next-line no-unused-vars
    const userApp = new Vue({
        el: '#user-container',
        template: `
            <div id="user-container">
                <div class="user-main">
                    <div class="script-version">
                        Greasyfork Beautify v${VERSION}
                        <a
                            class="has-new-version"
                            href="https://greasyfork.org/scripts/446849-greasyfork-beautify/code/Greasyfork%20Beautify.user.js"
                            v-if="lastVersion !== '${VERSION}'"
                        >Update to v{{ lastVersion }}</a>
                    </div>

                    <div class="login-info">
                        <a
                            :href="dom.attr('href')"
                        >{{ dom.text() }}</a>

                        <template v-if="isLogin">
                            [<a :href="logoutDom.attr('href')">{{ logoutDom.text() }}</a>]
                        </template>
                    </div>
                </div>
            </div>
        `,

        data () {
            return {
                lastVersion: VERSION,
                dom: $('#nav-user-info .user-profile-link a, #nav-user-info .sign-in-link a'),
                logoutDom: $('.sign-out-link a'),
                isLogin: $('.sign-out-link').length > 0 // 存在登出按钮则表示已登录
            }
        },

        created () {
            this.versionCheck()
        },

        methods: {
            versionCheck () {
                $.ajax({
                    url: 'https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify',
                    success: res => {
                        const html = $(res)
                        this.lastVersion = html.find('dd.script-show-version span').text()
                    }
                })
            }
        }
    })

    // 代码高亮
    $('pre.lang-js').each((pre_i, pre) => {
        // 调整代码，给一些压缩代码增加换行
        $(pre).find('li').append('\n')
        const code = $('<code class="language-javascript">').html(
            pre.innerHTML
        )

        // 清空原始代码容器，放置新容器
        $(pre)
            .removeClass()
            .html('')
            .append(code)

        // 高亮
        hljs.highlightElement(pre.querySelector('code'))

        // 增加行号
        const html = $(pre).find('code').html()
        const htmlSplit = html.split('\n')
        const totalLines = htmlSplit.length

        $(pre).find('code').html(
            htmlSplit.map((n, i) => `<span class="marker" style="width: calc(${String(totalLines).length * 0.5}em + 20px);">${i + 1}</span>${n}`).join('\n')
        )
    })

    // 脚本列表页面，卡片
    if (settings.show_install_button_in_card || settings.show_version_info_in_card) {
        compatibleWithInfiniteScroll()
        $('.script-list ').resize(compatibleWithInfiniteScroll)
    }

    // 列表右侧选项组
    $('.list-option-groups > *:eq(0)').before(
        // 设置语言
        $('#language-selector')
    )

    // 注册菜单
    $('body').append($('<div id="greasyfork-beautify-settings">'))

    const settingsApp = new Vue({
        el: '#greasyfork-beautify-settings',

        template: `
            <el-dialog
                width="600px"
                title="Greasyfork Beautify v${VERSION}"
                :visible.sync="show"
                @closed="onClosed"
            >
                <el-form
                    size="mini"
                    label-width="120px"
                    :model="formData"
                >
                    <el-form-item label="脚本列表列数">
                        <el-input-number
                            label="描述文字"
                            v-model="formData.script_list_columns_num"
                            :min="1"
                            :max="2"
                        />
                    </el-form-item>

                    <el-form-item label="显示安装按钮">
                        <el-switch
                            v-model="formData.show_install_button_in_card"
                        />
                    </el-form-item>

                    <el-form-item label="显示版本信息">
                        <el-switch
                            v-model="formData.show_version_info_in_card"
                        />
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="onReset">重 置</el-button>
                    <el-button type="primary" @click="onSubmit">确 定</el-button>
                </span>
            </el-dialog>
        `,

        data () {
            return {
                show: false,
                formData: getSettings()
            }
        },

        methods: {
            onClosed () {
                Object.assign(this.formData, getSettings())
            },

            onReset () {
                Object.assign(this.formData, defaultSettings)
            },

            onSubmit () {
                GM_setValue('formData', JSON.stringify(this.formData))
                location.reload()
            }
        }
    })

    GM_registerMenuCommand('美化设置', e => {
        settingsApp.show = true
    })
})
