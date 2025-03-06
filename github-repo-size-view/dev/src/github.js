import { i18n, help, repolist, config } from '@/env'
export function isLoggedInUser(avatar_url) {//从返回的json判断
    const imgElement = document.querySelector('.AppHeader-user button span span img')
    if (imgElement) {
        const imgSrc = imgElement.src
        return imgSrc === avatar_url
    } else {
        return false
    }
}
export function isLoggedInUser_f() {//NOTE - 比较仓库头像和登录头像中的ID
    const imgElement = document.querySelector('.AppHeader-user button span span img')
    const repoImgElement = document.querySelector('#repo-title-component > img')
    if (imgElement && repoImgElement) {
        const imgSrc = imgElement.src
        const repoImgSrc = repoImgElement.src

        const userIdPattern = /\/u\/(\d+)/
        const imgUserIdMatch = imgSrc.match(userIdPattern)
        const repoUserIdMatch = repoImgSrc.match(userIdPattern)
        if (imgUserIdMatch && repoUserIdMatch) {
            const imgUserId = imgUserIdMatch[1]
            const repoUserId = repoUserIdMatch[1]
            return imgUserId === repoUserId
        }
    }
    return false
}
export async function getUserRepos(href, header = {}) {
    try {
        const response = await fetch(`${href}`, {
            headers: header
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}
export async function getUserAllRepos(href, header = {}, getAll = false, maxPage = 0) {
    try {
        let allRepos = []
        let page = 1
        let perPage = 100
        do {
            const url = getAll ? `${href}?per_page=${perPage}&page=${page}` : href//NOTE - false时，就获取前30个就行了 ，够用了 仓库没那么多，列表太长也不好。
            const response = await fetch(url, { headers: header })
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const repos = await response.json()
            if (repos.length === 0) break
            allRepos = allRepos.concat(repos)
            page++
            // 如果设定了最大页数并且已经达到了最大页数，结束战斗
            if (maxPage !== 0 && page > maxPage) break
        } while (getAll)
        return allRepos
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}
export function insertDelBtn(owner, repo, usePageHeadActions, cusClass = 'dialog-show-repo-delete-home', element) {
    const svgStr = '<div style="display: flex; justify-content: center; align-items: center;"><svg class="octicon octicon-trash color-fg-danger" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>'
    const targetUrl = `https://ossinsight.io/analyze/${owner}/${repo}`
    const title = `[${repo}]\n  ${i18n.translate.deleteRepo}`
    var el = null
    if (element) {
        el = element
    } else {
        el = usePageHeadActions
            ? document.querySelector('.pagehead-actions')
            : document.querySelector('#responsive-meta-container .d-flex.gap-2.mt-n3.mb-3.flex-wrap')
    }
    if (!el) {
        console.log('github-Active Forks: 没有找到目标元素, 无法添加按钮')
        return
    }
    if (el.querySelector(`#${cusClass}`)) return
    const buttonHtml = `<button id="${cusClass}" data-show-dialog-id="repo-delete-menu-dialog" type="button"
  data-view-component="true"
  class="js-repo-delete-button Button--danger Button--medium Button float-none float-sm-right ">
  <span class="Button-content">
    <span class="Button-label tooltipped tooltipped-s"  aria-label="${title}">${svgStr}${usePageHeadActions ? i18n.translate.deleteRepo_btn : ''}</span>
  </span>
</button>`
    if (usePageHeadActions) {
        el.insertAdjacentHTML('beforeend', `<li>${buttonHtml}</li>`)
    } else {
        el.insertAdjacentHTML('beforeend', buttonHtml)
    }
    el.querySelector(`#${cusClass}`).addEventListener('click', function () {
        showDeleteConfirmations(owner, repo)
    })
}
export function showDeleteConfirmations(owner, repo, count = 3) {
    const blacklist = ['ChinaGodMan/disk', 'ChinaGodMan/LocalDev', 'ChinaGodMan/Ebackup', 'ChinaGodMan/portable-device', 'ChinaGodMan/UserScripts']
    const repoIdentifier = `${owner}/${repo}`
    if (blacklist.includes(repoIdentifier)) {
        alert(`[${repoIdentifier}] 在黑名单中`)
        return
    }
    for (let i = 0; i < count; i++) {
        let confirmed = confirm(`${owner}:\n${i18n.translate.deleteRepo_i}[${repo}]\n${i18n.translate.deleteRepo}\n${i18n.translate.deleteRepo_ask}  ${i + 1}/${count})`)
        if (!confirmed) return
    }
    deleteRepository(owner, repo)
}
export function deleteRepository(owner, repo) {
    fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `token ${TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
        .then(response => {
            if (response.status === 204) {
                alert(`"${repo}" ${i18n.translate.deleteRepo_pass}`)
                location.reload()
            } else {
                alert(`"[${repo}]"\n${i18n.translate.deleteRepo_failed} ${i18n.translate.deleteRepo_failed_status}${response.status}`)
            }
        })
        .catch(error => {
            alert(`An error occurred: ${error}`)
        })
}
export function fetchReposWithCache(ownerKey, reposApi, headers) {
    const localData = localStorage.getItem(ownerKey)
    const currentTime = new Date().getTime()
    if (localData) {
        const parsedData = JSON.parse(localData)
        const localTimeStamp = new Date(parsedData.timeStamp).getTime()
        if (currentTime - localTimeStamp < help.timeToSeconds(config.DELAY) * 1000) {
            console.log('本地缓存数据未过期，直接使用本地数据')
            repolist.insertReposList(parsedData.reposArray, config.USETIP)
            return
        }
    }
    github.getUserAllRepos(reposApi, headers)
        .then(data => {
            const reposArray = data.map(repo => ({
                name: repo.name,
                private: repo.private,
                html_url: repo.html_url,
                fork: repo.fork,
                description: repo.description,
                stargazers_count: repo.stargazers_count,
                owner: repo.owner.login,
                forks_count: repo.forks_count,
                open_issues_count: repo.open_issues_count,
                language: repo.language,
                size: repo.size,
                created_at: help.systemTime(repo.created_at),
                updated_at: help.systemTime(repo.updated_at),
                pushed_at: help.systemTime(repo.pushed_at)
            }))
            const timeStamp = new Date().toISOString()
            const dataToStore = {
                reposArray: reposArray,
                timeStamp: timeStamp
            }
            localStorage.setItem(ownerKey, JSON.stringify(dataToStore))
            repolist.insertReposList(reposArray, config.USETIP)
        })
        .catch(error => console.error('Error fetching data:', error))
}
