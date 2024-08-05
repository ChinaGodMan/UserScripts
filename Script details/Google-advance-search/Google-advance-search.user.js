// ==UserScript==
// @name                    Advanced Search Assistant for Google
// @name:zh-CN              Google 高级搜索助手
// @namespace               https://github.com/ChinaGodMan/UserScripts
// @version                 0.1.8
// @description             Add an advanced search form to the top of the page
// @description:zh-CN       在谷歌搜索页面顶部添加一个高级搜索表单
// @author                  shiquda  &人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @namespace               https://github.com/shiquda/shiquda_UserScript
// @supportURL              https://github.com/shiquda/shiquda_UserScript/issues
// @match                   *://www.google.com/search*
// @include                 *://*google*/search*
// @grant                   GM_addStyle
// @grant                   GM_setValue
// @grant                   GM_getValue
// @license                 MIT

// ==/UserScript==

(function () {
    "use strict"
    let isMobile = false
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        // On mobile device
        isMobile = true
    }

    let isDarkMode = false

    try {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            // Dark mode is enabled
            isDarkMode = true
            console.log("Dark mode is enabled.")
        }
    } catch (error) {
        console.log("Failed to determine the color mode.", error)
    }

    const userLanguage = "" // You can set your language config here manually. 'zh-CN' & 'en' are supported now.

    const supportedLanguages = ["zh-CN", "en"]

    const translation = {
        as_q: {
            "zh-CN": "搜索字词：",
            en: "Search word:",
        },
        as_epq: {
            "zh-CN": "与以下字词完全匹配：",
            en: "Match the following words exactly:",
        },
        as_oq: {
            "zh-CN": "包含以下任意字词：",
            en: "Contains any of the following words:",
        },
        as_eq: {
            "zh-CN": "排除以下字词：",
            en: "Exclude the following words:",
        },
        as_nlo: {
            "zh-CN": "包含的数字范围：从",
            en: "Number range: from",
        },
        as_nhi: {
            "zh-CN": "到：",
            en: "to:",
        },
        lr: {
            "zh-CN": "语言：",
            en: "Language:",
        },
        cr: {
            "zh-CN": "地区：",
            en: "Region:",
        },
        as_qdr: {
            "zh-CN": "最后更新时间：",
            en: "Last update time:",
        },
        as_sitesearch: {
            "zh-CN": "网站或域名：",
            en: "Website or domain:",
        },
        as_occt: {
            "zh-CN": "字词出现位置：",
            en: "Word position:",
        },
        as_filetype: {
            "zh-CN": "文件类型：",
            en: "File type:",
        },
        tbs: {
            "zh-CN": "使用权限：",
            en: "Usage rights:",
        },
        advancedSearch: {
            "zh-CN": "高级搜索",
            en: "Advanced Search",
        },
        search: {
            "zh-CN": "搜索",
            en: "Search",
        },
        clear: {
            "zh-CN": "清空",
            en: "Clear",
        },
        as_qdr_select: {
            "": {
                "zh-CN": "请选择",
                en: "Please select",
            },
            d: {
                "zh-CN": "一天内",
                en: "Past 24 hours",
            },
            w: {
                "zh-CN": "一周内",
                en: "Past week",
            },
            m: {
                "zh-CN": "一月内",
                en: "Past month",
            },
            y: {
                "zh-CN": "一年内",
                en: "Past year",
            },
        },
        as_occt_select: {
            "": {
                "zh-CN": "请选择",
                en: "Please select",
            },
            title: {
                "zh-CN": "网页标题中",
                en: "In the title of the web page",
            },
            body: {
                "zh-CN": "网页正文中",
                en: "In the body of the web page",
            },
            url: {
                "zh-CN": "网页网址中",
                en: "In the URL of the web page",
            },
            links: {
                "zh-CN": "指向网页的链接中",
                en: "In the links to the web page",
            },
        },
    }
    const style = `
    #advancedSearchToggleButton {
        margin-right: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        margin: 10px;
    }


    #advancedSearchFormContainer {
        position: fixed;
        ${isMobile ? "top: 150px;" : "top: 130px;"}
        ${isMobile ? "left: 15px;" : "left: 30px;"}
        display: none;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        ${isDarkMode
            ? "background-color: rgba(0, 0, 0, 1);"
            : "background-color: rgba(255, 255, 255, 1);"
        }
        ${isMobile ? "column-count: 2;" : ""} /* 在移动设备上分为两列 */
        z-index: 1000; // Make sure the button is on top of the search bar
    }


    #advancedSearchFormContainer label {
        display: block;
        margin-top: 5px;
    }


    #advancedSearchFormContainer input[type="text"] {
        margin-top: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    #advancedSearchFormContainer select {
        margin-top: 5px;
        padding: 5px;
        border-radius: 5px;
    }

    #advancedSearchFormContainer button {
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        margin: 20px;
    }
    `
    GM_addStyle(style)

    let language = "en"
    if (userLanguage.length > 0) { // userLanguage is set manually
        if (supportedLanguages.includes(userLanguage)) {
            language = userLanguage
        } else {
            console.log(`Unsupported language: ${userLanguage}`)
        }
    } else {
        // Check if any of the user's preferred languages are supported
        language =
            navigator.languages
                .map((lang) => lang.split("-")[0]) // Consider only the language part, not the region
                .map((lang) => supportedLanguages.find((supportedLang) => supportedLang.split("-")[0] === lang)) // Match with the supported languages
                .filter(Boolean) // Remove undefined values
                .shift() // Take the first matched language
            || "en" // Default to 'en' if no match found
        console.log(`Here is the language: ${language}`)
    }

    // Create user interface
    const toggleButton = document.createElement("button")
    toggleButton.className = "nfSF8e"
    toggleButton.textContent = translation["advancedSearch"][language]
    toggleButton.id = "advancedSearchToggleButton"
    if (isMobile) {
        document.querySelector(".Fh5muf").appendChild(toggleButton)
    } else {
        document.querySelector(".logo").appendChild(toggleButton)
        const searchContainer = document.querySelector(".RNNXgb")
        searchContainer.appendChild(toggleButton)
    }



    // Add minimal style for positioning
    toggleButton.style.marginTop = "5px" // Add some space above the button
    toggleButton.style.marginLeft = "5px" // Add some space to the left of the button
    // Add any additional styles to match the search bar's height or other styling

    const formContainer = document.createElement("div")
    formContainer.id = "advancedSearchFormContainer"
    document.body.appendChild(formContainer)

    //
    const form = document.createElement("form")
    formContainer.appendChild(form)

    const params = {
        as_q: translation["as_q"][language],
        as_epq: translation["as_epq"][language],
        as_oq: translation["as_oq"][language],
        as_eq: translation["as_eq"][language],
        as_nlo: translation["as_nlo"][language],
        as_nhi: translation["as_nhi"][language],
        // 'lr': translation['lr'][language],
        // 'cr': translation['cr'][language],
        as_qdr: {
            name: translation["as_qdr"][language],
            options: {
                "": translation["as_qdr_select"][""][language],
                d: translation["as_qdr_select"]["d"][language],
                w: translation["as_qdr_select"]["w"][language],
                m: translation["as_qdr_select"]["m"][language],
                y: translation["as_qdr_select"]["y"][language],
            },
        },
        as_sitesearch: translation["as_sitesearch"][language],
        as_occt: {
            name: translation["as_occt"][language],
            options: {
                "": translation["as_occt_select"][""][language],
                title: translation["as_occt_select"]["title"][language],
                body: translation["as_occt_select"]["body"][language],
                url: translation["as_occt_select"]["url"][language],
                links: translation["as_occt_select"]["links"][language],
            },
        },
        as_filetype: translation["as_filetype"][language],
        // 'tbs': translation['tbs'][language],
    }

    for (const param in params) {
        if (typeof params[param] === "object") {
            const label = document.createElement("label")
            label.textContent = params[param].name
            const select = document.createElement("select")
            select.name = param

            Object.keys(params[param]["options"]).forEach((option) => {
                const optionElement = document.createElement("option")
                optionElement.value = option
                optionElement.textContent = params[param]["options"][option]
                select.appendChild(optionElement)
            })

            form.appendChild(label)
            form.appendChild(select)
            form.appendChild(document.createElement("br"))
            continue
        }
        const label = document.createElement("label")
        label.textContent = params[param]
        const input = document.createElement("input")
        input.name = param
        input.type = "text"
        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(document.createElement("br"))
    }

    const searchButton = document.createElement("button")
    searchButton.textContent = translation["search"][language]
    form.appendChild(searchButton)

    // Add a clear button to reset the form
    const clearButton = document.createElement("button")
    clearButton.textContent = translation["clear"][language]
    clearButton.addEventListener("click", function (event) {
        event.preventDefault()
        form.reset()
    })
    form.appendChild(clearButton)

    // Load saved data and fill the form when opening a new page
    window.addEventListener("load", function () {
        for (const param in params) {
            const savedValue = GM_getValue(param)
            if (savedValue) {
                form[param].value = savedValue
            }
        }
    })

    // Save form data to Greasemonkey storage
    form.addEventListener("input", function () {
        for (const param in params) {
            GM_setValue(param, form[param].value)
        }
    })

    // Toggle the form display
    toggleButton.addEventListener("click", function (event) {
        event.preventDefault()
        let status = formContainer.style.display
        status = status === "none" || status === "" ? "block" : "none"
        formContainer.style.display = status
    })

    // Submit the form
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        const searchParams = new URLSearchParams()
        for (const param in params) {
            const value = form[param].value
            if (value) {
                searchParams.set(param, value)
            }
        }
        const searchUrl =
            "https://www.google.com/search?" + searchParams.toString()
        window.location.href = searchUrl
    })
})()
