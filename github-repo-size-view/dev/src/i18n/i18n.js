import { translations } from './locale'
export const userLang =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    'en'

export const getTranslations = (lang) => {
    for (const key in translations) {
        if (key === lang || key.split(',').includes(lang)) {
            return translations[key]
        }
    }
    return translations['en']
}
export const translate = new Proxy(
    function (key) {
        const lang = userLang
        const strings = getTranslations(lang)
        return strings[key] || translations['en'][key]
    },
    {
        get(target, prop) {
            const lang = userLang
            const strings = getTranslations(lang)
            return strings[prop] || translations['en'][prop]
        }
    }
)
