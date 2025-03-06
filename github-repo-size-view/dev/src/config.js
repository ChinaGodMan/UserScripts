// config.js
export const config = {
    TOKEN: "",
    WARNING: GM_getValue('warn', true),
    openInNewTab: GM_getValue('openInNewTab', false),
    DELAY: GM_getValue('DELAY', '24h'),
    USETIP: GM_getValue('USETIP', false), // 为真时使用GitHub自带的TIP提示而不是用网页title
    SECRET: "",
}
