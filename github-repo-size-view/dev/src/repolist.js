
import { help, config, i18n } from '@/env'
export function insertReposList(links, tip = false) {
    const gitHubStyle = `
#view-user-repos {
  order: 10;
}
#view-user-repos .dropdown-menu {
  min-width: 170px;
  width: auto;
}
#view-user-repos .dropdown-menu .dropdown-item .d-inline-flex {
  vertical-align:sub;
}`
    if (!document.head.querySelector('style[data-id="view-user-repos-css"]')) {
        const globalStyle = document.createElement('style')
        globalStyle.dataset.id = 'view-user-repos-css'
        globalStyle.innerHTML = gitHubStyle
        document.head.appendChild(globalStyle)
    }
    const selectors = [
        '.jxTzTd', // Repo main page
        '.faNtbn .d-flex.gap-2', // Repo files page
        '.gwHaUx .d-flex.gap-2' // Commits page
    ]
    //document.querySelector(selectors.join(', '))
    const existingButton = document.querySelector('.jxTzTd')
    if (existingButton) {
        const sortedLinks = links.sort((a, b) => {//!SECTION 排序
            // 首先比较 fork 下沉到数组的低端.
            if (b.fork > 0 && a.fork <= 0) {
                return -1 // a 在前
            } else if (a.fork > 0 && b.fork <= 0) {
                return 1 // b 在前
            } else {
                // 如果 fork 相同，比较 private
                if (b.private === a.private) {
                    // 如果 private 相同，进一步判断 private 为 false 的情况
                    if (!a.private && !b.private) {
                        return b.stargazers_count - a.stargazers_count // stargazers_count 大的在前
                    }
                    return 0 // private 相同且不是 false 的情况下不排序
                }
                return (b.private ? -1 : 1) // private 为 true 的在前
            }
        })
        function getIconPath(link) {
            var fillColor = null
            if (link.private) fillColor = 'green'
            if (!link.private && !link.fork) fillColor = 'red'
            var svg = `<path fill="${fillColor}" fill-rule="evenodd" d="M1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55 0-.133-.058-.318-.282-.551-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742-.508.224-.873.471-1.1.708-.224.232-.282.417-.282.55Zm0 4.5c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406Z"></path>`
            if (fillColor) return svg
            if (link.fork) return '<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>'
        }
        let privateClassAdded = false
        let forkClassAdded = false
        const stats = {
            privateTrue: 0,
            privateFalse: 0,
            forkTrue: 0,
            forkFalse: 0
        }
        const listItems = sortedLinks.map(link => {
            stats.privateTrue += (link.private && !link.fork) ? 1 : 0
            stats.privateFalse += (link.private ? 0 : 1) && !link.fork ? 1 : 0
            stats.forkTrue += link.fork ? 1 : 0
            stats.forkFalse += link.fork ? 0 : 1
            let liClass = ''
            if (link.private && !privateClassAdded) {
                liClass += 'border-top'
                privateClassAdded = true
            }
            if (link.fork && !forkClassAdded) {
                liClass += 'border-top'
                forkClassAdded = true
            }
            const starsAndForks = [
                link.stargazers_count > 0 ? `${i18n.translate.repoStars}${link.stargazers_count}` : '',
                link.forks_count > 0 ? `${i18n.translate.repoForks}${link.forks_count}` : ''
            ].filter(Boolean).join(' ')
            const repoInfo = [
                (link.description ? `${i18n.translate.repoDes}${link.description}` : ''),
                starsAndForks,
                `${i18n.translate.repoSize}${help.getHumanReadableSize(link.size)}`,
                link.language ? `${i18n.translate.repoLang}${link.language}` : '',
                `${i18n.translate.repoCreated}${link.created_at}`,
                `${i18n.translate.repoUpdated}${link.updated_at}`,
                `${i18n.translate.repoPushed}${link.pushed_at}`
            ].filter(Boolean).join('\n')
            return `
        <li class="${liClass}${(tip) ? ' tooltipped tooltipped-s' : ''}"  aria-label="${repoInfo}">
            <a href="${link.html_url}" class="dropdown-item" ${(config.openInNewTab) ? 'target="_blank"' : ''} rel="noopener noreferrer" ${(tip) ? '"' : ` title="${repoInfo}"`}>
                <span class="d-inline-flex mr-2">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                        ${getIconPath(link)}
                    </svg>
                </span>
                ${link.name}
            </a>
        </li>
    `
        }).join('')
        const ariaLabel = [
            ` ${i18n.translate.view}[${links[0].owner}]${i18n.translate.allRepos} `,
            `${i18n.translate.allRepos} : ${sortedLinks.length}`,
            stats.privateTrue > 0 ? `${i18n.translate.privateRepos} ${stats.privateTrue}` : '',
            stats.privateFalse > 0 ? `${i18n.translate.publicRepos}  ${stats.privateFalse}` : '',
            stats.forkTrue > 0 ? `${i18n.translate.forkRepos} ${stats.forkTrue}` : ''
            //stats.forkFalse > 0 ? `非分叉仓库: ${stats.forkFalse}` : ''
        ].filter(Boolean).join('\n')
        const detailsHTML = `
<details id="view-user-repos" class="details-overlay details-reset position-relative d-flex">
    <summary role="button" type="button" class="btn text-center">
        <span class="d-none d-xl-flex flex-items-center tooltipped tooltipped-s" aria-label="${ariaLabel}">
            ${i18n.translate.view}<mark>[${links[0].owner}]</mark>${i18n.translate.allRepos}
            <span class="dropdown-caret ml-2"></span>
        </span>
        <span class="d-inline-block d-xl-none">
            ${links[0].owner}
            <span class="dropdown-caret d-none d-sm-inline-block d-md-none d-lg-inline-block"></span>
        </span>
    </summary>
    <div>
        <ul class="dropdown-menu dropdown-menu-sw">
            ${listItems}
        </ul>
    </div>
</details>`

        existingButton.insertAdjacentHTML('beforebegin', detailsHTML)
    } else {
    }
}
