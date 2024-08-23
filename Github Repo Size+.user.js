// ==UserScript==
// @name        Github Repo Size+
// @name:zh-CN        Github 仓库大小
// @namespace   https://github.com/qinwuyuan-cn
// @description Adds the repo size next to the repo name on github search and repo pages
// @description:zh-CN 在 github 搜索和存储库页面上的存储库名称旁边添加存储库大小
// @version 0.1.2.30
// @author      mshll & 人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match       *://github.com/search*
// @match       *://github.com/*/*
// @match       *://github.com/*?tab=repositories*
// @grant       none
// @grant       GM_getValue
// @grant       GM_setValue
// @grant        GM_addStyle
// @grant       GM_registerMenuCommand
// @grant       none
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @license     MIT
// @source     https://github.com/qinwuyuan-cn/UserScripts
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
"use strict"
//! Generate a new public access token from https://github.com/settings/tokens and insert it here
//*Note: to be able to see the size of your private repos, you need to select the `repo` scope when generating the token
let TOKEN = GM_getValue('githubToken', "")
GM_addStyle(`
    .modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:1000;}
    .modal-content{background:white;padding:20px;border-radius:8px;width:400px;box-shadow:0 4px 15px rgba(0,0,0,0.2);position:relative;}
    .modal-title{margin:0 0 10px 0;font-size:20px;}
    .modal-description{margin-bottom:20px;font-size:14px;color:#666;}
    .modal-description a{color:#007bff;text-decoration:underline;}
    #github-token-input{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-bottom:20px;font-size:14px;}
    #save-token{background-color:#28a745;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:4px;margin-right:10px;}
    #cancel-token{background-color:#dc3545;color:white;border:none;padding:10px 20px;cursor:pointer;border-radius:4px;}
`)
function createModal() {
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <h2 class="modal-title">Set GitHub Token</h2>
                <p class="modal-description">
                    Enter your GitHub personal access token with "repo" scope.
                    <a href="https://github.com/settings/tokens/new?description=GitHub%20Repo%20Size%20UserScript&scopes=repo" target="_blank" rel="noopener noreferrer">
                        Click here to create a new token
                    </a>
                </p>
                <input type="text" id="github-token-input" placeholder="Enter your GitHub personal access token">
                <button id="save-token">Save</button>
                <button id="cancel-token" class="cancel">Cancel</button>
            </div>
        </div>
    `
    const modalContainer = document.createElement('div')
    modalContainer.innerHTML = modalHTML
    document.body.appendChild(modalContainer)
    const input = document.getElementById('github-token-input')
    input.value = GM_getValue('githubToken', '')
    document.getElementById('save-token').addEventListener('click', () => {
        const token = input.value.trim()
        if (token) {
            GM_setValue('githubToken', token)
            modalContainer.remove()
            TOKEN = token
        }
    })
    document.getElementById('cancel-token').addEventListener('click', () => modalContainer.remove())
}
GM_registerMenuCommand('Set GitHub Token', function () {
    createModal()
})
const getPageType = () => {
    const { pathname, search } = window.location
    const params = new URLSearchParams(search)
    const [, username, repo] = pathname.split("/")
    const q = params.get("q")?.toLocaleLowerCase()
    const type = params.get("type")?.toLocaleLowerCase()
    if (window.location.pathname.split('/').pop() === "repositories") return "list-view-container"
    if (window.location.href.includes("?tab=repositories")) return "user-repositories"
    if (username && repo) return "repo"
    if (q && type === "code") return "code_search"
    if (q) return "search"
}
const addSizeToRepos = () => {
    const pageType = getPageType()
    // Get the repo selector based on the page type
    let repoSelector
    switch (pageType) {
        case "repo"://仓库详情界面
            repoSelector = "#repository-container-header strong a"
            break
        case "list-view-container"://ORG下的仓库列表
            repoSelector = 'div[data-testid="list-view-item-title-container"] h4 a'
            break
        case "user-repositories"://用户资料页面的仓库TAB
            repoSelector = '#user-repositories-list h3 a'
            break
        case "search"://搜索
            repoSelector = 'div[data-testid="results-list"] .search-title a'
            break
        case "code_search"://代码搜索
            repoSelector = 'div[data-testid="results-list"] .search-title a'
            break
        default:
            return
    }
    function extractPath(input) {
        const thirdSlashIndex = input.indexOf('/', input.indexOf('/', input.indexOf('/') + 1) + 1)
        if (thirdSlashIndex !== -1) {
            return input.substring(0, thirdSlashIndex)
        }
        return input
    }
    // Get all the repo links
    document.querySelectorAll(repoSelector).forEach(async (elem) => {
        // Get json data from github api to extract the size
        const tkn = TOKEN
        var href = elem.getAttribute("href")
        href = extractPath(href)
        console.log(href)
        const headers = tkn ? { authorization: `token ${tkn}` } : {}
        const jsn = await (
            await fetch(`https://api.github.com/repos${href}`, {
                headers: headers,
            })
        ).json()
        // If JSON failed to load, skip
        if (jsn.message) return
        // Get parent element to append the size to
        let parent = elem.parentElement
        if (pageType === "repo") {
            parent = elem.parentElement.parentElement
        }
        // Create the size container
        let sizeContainer = parent.querySelector(`#mshll-repo-size`)
        if (sizeContainer === null) {
            sizeContainer = document.createElement("span")
            sizeContainer.id = "mshll-repo-size"
            sizeContainer.classList.add("Label", "Label--info", "v-align-middle", "ml-1")
            sizeContainer.setAttribute("title", "Repository size")
            sizeContainer.innerText = "-"
            // Create the size icon
            let sizeSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            sizeSVG.setAttribute("aria-hidden", "true")
            sizeSVG.setAttribute("viewBox", "-4 -4 22 22")
            sizeSVG.setAttribute("width", "16")
            sizeSVG.setAttribute("height", "16")
            sizeSVG.setAttribute("fill", "currentColor")
            sizeSVG.setAttribute("data-view-component", "true")
            sizeSVG.classList.add("octicon", "octicon-file-directory", "mr-1")
            let sizeSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
            sizeSVGPath.setAttribute("fill-rule", "evenodd")
            sizeSVGPath.setAttribute("d", "M1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55 0-.133-.058-.318-.282-.551-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742-.508.224-.873.471-1.1.708-.224.232-.282.417-.282.55Zm0 4.5c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406Z")
            sizeSVG.appendChild(sizeSVGPath)
            // Convert the size to human readable
            const sizes = ["B", "KB", "MB", "GB", "TB"]
            const size = jsn.size * 1024 // Github API returns size in KB so convert to bytes
            let i = parseInt(Math.floor(Math.log(size) / Math.log(1024)))
            const humanReadableSize = (size / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
            // Insert the size into the size container
            sizeContainer.innerHTML = `${humanReadableSize}`
            sizeContainer.prepend(sizeSVG)
            // Insert the size container into the DOM
            if (pageType === "code_search") {
                parent.style.direction = 'ltr'
            }
            parent.appendChild(sizeContainer)
        }
    })
}
window.addSizeToRepos = addSizeToRepos
// Add the size to the repos on the page
//addSizeToRepos()
window.onload = function () {
    addSizeToRepos()
}
// Watch for URL changes
let lastUrl = location.href
new MutationObserver(() => {
    const url = location.href
    if (url !== lastUrl) {
        lastUrl = url
        setTimeout(function () {
            //NOTE - 此处增加延时了,就这样得了
            addSizeToRepos()
        }, 1500)
    }
}).observe(document, { subtree: true, childList: true })
