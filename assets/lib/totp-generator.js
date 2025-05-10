// ==UserScript==
// @name         TOTP Generator
// @namespace   https://github.com/ChinaGodMan/UserScripts
// @version     2024/10/07
// @description https://greasyfork.org/zh-CN/scripts/502291 脚本使用
// @author      人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @license     MIT
// @supportURL  https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==
function base32Decode(str) {
    const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
    let buffer = ''
    for (let i = 0; i < str.length; i++) {
        const value = base32chars.indexOf(str[i])
        if (value < 0) continue
        buffer += value.toString(2).padStart(5, '0')
    }
    const bytes = []
    for (let i = 0; i < buffer.length; i += 8) {
        bytes.push(parseInt(buffer.substr(i, 8), 2))
    }
    return new Uint8Array(bytes)
}
async function hmacSHA1(key, message) {
    const crypto = window.crypto || window.msCrypto
    const keyBuffer = await crypto.subtle.importKey(
        'raw',
        key,
        { name: 'HMAC', hash: { name: 'SHA-1' } },
        false,
        ['sign']
    )
    const signature = await crypto.subtle.sign('HMAC', keyBuffer, message)
    return new Uint8Array(signature)
}
async function generateHOTP(key, counter, digits = 6) {
    const counterBuffer = new ArrayBuffer(8)
    const view = new DataView(counterBuffer)
    view.setBigInt64(0, BigInt(counter), false) // Big-endian
    const hmac = await hmacSHA1(key, new Uint8Array(counterBuffer))
    const offset = hmac[hmac.length - 1] & 0x0F
    let dynamicPassword =
        (hmac[offset] & 0x7F) << 24 |
        (hmac[offset + 1] & 0xFF) << 16 |
        (hmac[offset + 2] & 0xFF) << 8 |
        (hmac[offset + 3] & 0xFF)
    dynamicPassword = dynamicPassword % Math.pow(10, digits)
    return dynamicPassword.toString().padStart(digits, '0')
}
function getCounter(timeStep = 30) {
    const currentTime = Math.floor(Date.now() / 1000)
    return Math.floor(currentTime / timeStep)
}
async function generateTOTP(secret, timeStep = 30, digits = 6) {
    const key = base32Decode(secret)
    const counter = getCounter(timeStep)
    const totp = await generateHOTP(key, counter, digits)
    return totp
}

