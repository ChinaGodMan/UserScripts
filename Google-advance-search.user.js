// ==UserScript==
// @name                    Advanced Search Assistant for Google
// @name:zh-CN              Google 高级搜索助手
// @namespace               https://github.com/ChinaGodMan/UserScripts
// @version 0.1.9.2
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
// @icon                    data:image/png;base64,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

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
