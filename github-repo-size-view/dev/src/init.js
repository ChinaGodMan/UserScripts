import { github, help, fork, config, checkCommitDate } from '@/env'
const getPageType = () => {
    const { pathname, search } = window.location
    const params = new URLSearchParams(search)
    const [, username, repo] = pathname.split('/')
    const q = params.get('q')?.toLocaleLowerCase()
    const type = params.get('type')?.toLocaleLowerCase()
    if (window.location.pathname.split('/').pop() === 'repositories') return 'list-view-container'
    if (window.location.href.includes('?tab=repositories')) return 'user-repositories'
    if (window.location.href.includes('?tab=stars')) return 'user-starred-repos'
    if (username && repo) return 'repo'
    if (q && type === 'code') return 'code_search'
    if (q) return 'search'
}

export const addSizeToRepos = () => {

    const pageType = getPageType()
    // Get the repo selector based on the page type
    let repoSelector
    switch (pageType) {
        case 'repo': //仓库详情界面
            repoSelector = '#repository-container-header strong a'
            break
        case 'list-view-container': //ORG下的仓库列表
            repoSelector =
                'div[data-testid="list-view-item-title-container"] h4 a'
            break
        case 'user-repositories': //用户资料页面的仓库TAB
            repoSelector = '#user-repositories-list h3 a'
            break
        case 'user-starred-repos': //用户资料页面的已星标仓库
            repoSelector = '#user-starred-repos h3 a'
            break
        case 'search': //搜索
            repoSelector = 'div[data-testid="results-list"] .search-title a'
            break
        case 'code_search': //代码搜索
            repoSelector = 'div[data-testid="results-list"] .search-title a'
            break
        default:
            return
    }

    if (pageType === 'user-repositories') {
        const repoItems = document.querySelectorAll('li[itemprop="owns"]')
        repoItems.forEach(item => {
            const repoName = item.querySelector('a[itemprop="name codeRepository"]').textContent.trim()
            const ownerName = window.location.pathname.split('/')[1]
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.classList.add('delete-repo-btn')
            deleteButton.onclick = function () {
            }
            github.insertDelBtn(ownerName, repoName, false, 'dialog-show-repo-delete-user-repositories', item)
        })
    }
    // Get all the repo links
    let filterHref
    document.querySelectorAll(repoSelector).forEach(async (elem) => {
        // Get json data from github api to extract the size
        const tkn = config.TOKEN
        var href = elem.getAttribute('href')
        href = help.extractPath(href)
        if (filterHref == href) {
            return
        } else {
            filterHref = href
        }
        if (pageType === 'repo') {
            const parts = href.split('/')
            const owner = parts[1]
            const name = parts[2]
            fork.insertActiveForks(owner, name, !help.isMobileDevice())
            fork.insertOssInsightButton(owner, name, !help.isMobileDevice())
            if (github.isLoggedInUser_f()) github.insertDelBtn(owner, name, !help.isMobileDevice())
        }
        console.log(href)
        const headers = tkn ? { authorization: `token ${tkn}` } : {}
        const jsn = await (
            await fetch(`https://api.github.com/repos${href}`, {
                headers: headers
            })
        ).json()
        // If JSON failed to load, skip
        if (jsn.message) return
        if (pageType === 'repo' && config.WARNING) {
            checkCommitDate(jsn.pushed_at)
        }

        if (pageType === 'repo') {
            const reposApi = github.isLoggedInUser(jsn.owner.avatar_url)
                ? (config.TOKEN ? 'https://api.github.com/user/repos' : jsn.owner.repos_url)
                : jsn.owner.repos_url

            if (!document.querySelector('#view-user-repos')) {

                github.fetchReposWithCache(jsn.owner.login, reposApi, headers)
            }

        }

        // Get parent element to append the size to
        let parent = elem.parentElement
        if (pageType === 'repo') parent = elem.parentElement.parentElement
        // Create the size container
        let sizeContainer = parent.querySelector('#mshll-repo-size')
        if (sizeContainer === null) {
            sizeContainer = document.createElement('span')
            sizeContainer.id = 'mshll-repo-size'
            sizeContainer.className = 'tooltipped tooltipped-s'
            sizeContainer.classList.add(
                'Label',
                'Label--info',
                'v-align-middle',
                'ml-1'
            )
            sizeContainer.setAttribute('aria-label', 'Repository size')
            sizeContainer.innerText = '-'
            // Create the size icon
            let sizeSVG = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'svg'
            )
            sizeSVG.setAttribute('aria-hidden', 'true')
            sizeSVG.setAttribute('viewBox', '-4 -4 22 22')
            sizeSVG.setAttribute('width', '16')
            sizeSVG.setAttribute('height', '16')
            sizeSVG.setAttribute('fill', 'currentColor')
            sizeSVG.setAttribute('data-view-component', 'true')
            sizeSVG.classList.add('octicon', 'octicon-file-directory', 'mr-1')
            let sizeSVGPath = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            )
            sizeSVGPath.setAttribute('fill-rule', 'evenodd')
            sizeSVGPath.setAttribute(
                'd',
                'M1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55 0-.133-.058-.318-.282-.551-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742-.508.224-.873.471-1.1.708-.224.232-.282.417-.282.55Zm0 4.5c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406Z'
            )
            sizeSVG.appendChild(sizeSVGPath)
            const size = jsn.size * 1024
            const humanReadableSize = help.getHumanReadableSize(jsn.size)
            // Insert the size into the size container
            sizeContainer.innerHTML = `${humanReadableSize}`
            sizeContainer.prepend(sizeSVG)
            // Insert the size container into the DOM
            if (pageType === 'code_search') {
                parent.style.direction = 'ltr'
            }
            if (!size) {
                sizeContainer.style.color = 'red'
                sizeContainer.style.border = '1px solid red'
            }
            parent.appendChild(sizeContainer)
        }

    })
}
