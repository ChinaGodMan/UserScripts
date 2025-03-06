import { addSizeToRepos } from '../init'
import { selectors } from '@/env'
export function observeUrlChanges(callback, delay = 10) {
    let lastUrl = location.href
    const observer = new MutationObserver(() => {
        const url = location.href
        if (url !== lastUrl) {
            lastUrl = url
            setTimeout(() => {
                callback()
            }, delay)
        }
    })
    observer.observe(document, { subtree: true, childList: true })
    return observer
}
export function waitForElement(selector, dis = true) {
    return new Promise((resolve, reject) => {
        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve()
                observer.disconnect()
            }
        })
        if (dis) {
            const timeout = setTimeout(() => {
                observer.disconnect()
                reject(new Error('超时：未找到指定元素'))
            }, 10000)
        }
        observer.observe(document.body, { childList: true, subtree: true })
    })
}
export function main(delay = 0) {
    Promise.race(selectors.map((selector) => waitForElement(selector))).then(() => {
        setTimeout(() => {
            addSizeToRepos()
        }, delay)
    }).catch((error) => {
        console.error(error.message)
    })
}
