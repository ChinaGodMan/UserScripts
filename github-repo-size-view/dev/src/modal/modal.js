import modalCss from './sytle.css?inline'
import { config, i18n } from '@/env'
GM_addStyle(modalCss)
export function createModal() {
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <h3 class="modal-title">${i18n.translate.modaltitle}</h3>
                <p class="modal-description">
                    ${i18n.translate.description}
                    <a href="https://github.com/settings/tokens/new?description=GitHub%20Repo%20Size%20UserScript&scopes=repo" target="_blank" rel="noopener noreferrer">
                        ${i18n.translate.newtoken}
                    </a>
                </p>
                <input type="text" id="github-token-input" placeholder="${i18n.translate.githubtokeninput}">
                <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
                <p class="modal-description">
                    ${i18n.translate.secret}
                    <a href="https://github.com/settings/security?type=app#two-factor-summary" target="_blank" rel="noopener noreferrer">
                        ${i18n.translate.newtoken}
                    </a>
                </p>
                <input type="text" id="two-factor-secret" class="github-token-input" placeholder="${i18n.translate.secret}">
                <label><input type="checkbox" id="warn">${i18n.translate.warncheckbox}</label><br>
                <label><input type="checkbox" id="openInNewTab">    ${i18n.translate.newTab}</label>
                <br>
                <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
                <button id="save-token">${i18n.translate.save}</button>
                <button id="cancel-token" class="cancel">${i18n.translate.cancel}</button>
            </div>
        </div>
    `
    const modalContainer = document.createElement('div')
    modalContainer.innerHTML = modalHTML
    document.body.appendChild(modalContainer)
    const elements = {
        input: modalContainer.querySelector('#github-token-input'),
        secretInput: modalContainer.querySelector('#two-factor-secret'),
        warn: modalContainer.querySelector('#warn'),
        newTab: modalContainer.querySelector('#openInNewTab'),
        saveButton: modalContainer.querySelector('#save-token'),
        cancelButton: modalContainer.querySelector('#cancel-token')
    }
    elements.warn.checked = GM_getValue('warn', true)
    elements.newTab.checked = GM_getValue('openInNewTab', false)
    elements.input.value = GM_getValue('githubToken', '')
    elements.secretInput.value = GM_getValue('SECRET', '')
    elements.saveButton.addEventListener('click', () => {
        const token = elements.input.value.trim()
        GM_setValue('warn', elements.warn.checked)
        config.WARNING = elements.warn.checked
        GM_setValue('openInNewTab', elements.newTab.checked)
        config.openInNewTab = elements.newTab.checked
        GM_setValue('SECRET', elements.secretInput.value.trim())

        if (token) {
            GM_setValue('githubToken', token)
            modalContainer.remove()
            TOKEN = token
        } else {
            const userConfirmed = confirm(i18n.translate('confirm')) //提示是否删除
            if (userConfirmed) {
                GM_setValue('githubToken', token)
                modalContainer.remove()
                TOKEN = token
            }
        }
    })

    elements.cancelButton.addEventListener('click', () => modalContainer.remove())
}
