
import { modal, DomUtils, init, config, i18n } from '@/env'
GM_registerMenuCommand(i18n.translate('menu'), function () {
    modal.createModal()
})

window.addSizeToRepos = init.addSizeToRepos
// Add the size to the repos on the page
window.onload = function () {
    //addSizeToRepos()
}
document.addEventListener('DOMContentLoaded', () => {
    DomUtils.main()
    if (config.SECRET) {
        DomUtils.waitForElement('#app_totp', false)//
            .then(() => {
                generateTOTP(SECRET).then(totp => {
                    const totpInput = document.querySelector('#app_totp')
                    const submitButton = totpInput.parentElement.querySelector('button[type=\'submit\']')
                    totpInput.value = totp
                    submitButton.click()
                })
            })
            .catch((error) => {
                console.error('totp发生了错误,找不到元素')
            })
    }
})
DomUtils.observeUrlChanges(DomUtils.main)
