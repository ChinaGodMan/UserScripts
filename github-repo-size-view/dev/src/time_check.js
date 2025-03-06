import * as i18n from './i18n/i18n'
export function displayMessage(el) {
    document
        .querySelector('#js-repo-pjax-container')
        .insertAdjacentElement('beforebegin', el)
}
export function renderWarning(timediff) {
    const banner = document.createElement('div')
    banner.id = 'zh-banner-warning'
    banner.setAttribute(
        'style',
        `
    background-color: red;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 36px;
    position: relative;
  `
    )
    banner.textContent = i18n.translate.renderWarning
    const smallTag = document.createElement('div')
    smallTag.setAttribute(
        'style',
        `
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 10px;
    font-size: 14px;
    border-top-left-radius: 5px;
  `
    )
    smallTag.textContent = timediff
    banner.appendChild(smallTag)
    displayMessage(banner)
}
export function renderCaution(timediff) {
    const banner = document.createElement('div')
    banner.id = 'zh-banner-warning'
    banner.setAttribute(
        'style',
        `
    background-color: yellow;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
  `
    )
    banner.textContent = i18n.translate.renderCaution
    const smallTag = document.createElement('div')
    smallTag.setAttribute(
        'style',
        `
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 10px;
    font-size: 14px;
    border-top-left-radius: 5px;
  `
    )
    smallTag.textContent = timediff
    banner.appendChild(smallTag)
    displayMessage(banner)
}
export function checkCommitDate(datetimeString) {
    if (document.querySelector('#zh-banner-warning')) return
    const date = new Date(datetimeString)
    const now = new Date()
    const yearsDiff = now.getFullYear() - date.getFullYear()
    const monthsDiff = now.getMonth() - date.getMonth()
    const daysDiff = now.getDate() - date.getDate()
    let adjustedMonths = monthsDiff
    let adjustedDays = daysDiff
    if (adjustedDays < 0) {
        adjustedMonths--
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        adjustedDays += lastMonth.getDate()
    }
    let finalYears = yearsDiff
    if (adjustedMonths < 0) {
        finalYears--
        adjustedMonths += 12
    }
    let result = i18n.translate.timediff
    if (finalYears === 0) {
        result = result.replace(/\{years\}.*?(?=\{months\})/, '')
    }
    result = result.replace('{years}', finalYears > 0 ? finalYears : '')
    result = result.replace('{months}', adjustedMonths)
    result = result.replace('{days}', adjustedDays)
    const daysSinceLastCommit = (Date.now() - date.getTime()) / 1000 / 60 / 60 / 24
    if (daysSinceLastCommit > 365) {
        renderWarning(result)
    } else if (daysSinceLastCommit > 182.5) {
        renderCaution(result)
    } else {
        /* noop */
    }
}
