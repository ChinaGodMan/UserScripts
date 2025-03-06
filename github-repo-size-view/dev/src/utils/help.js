export function getHumanReadableSize(sizeInKB) {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const size = sizeInKB * 1024
    let i = parseInt(Math.floor(Math.log(size) / Math.log(1024)))
    const humanReadableSize = (size / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i]
    return humanReadableSize
}
export function systemTime(isoString) {
    const date = new Date(isoString)
    return date.toLocaleString()
}
export function timeToSeconds(timeStr) {
    let hours = 0, minutes = 0, seconds = 0
    const hoursMatch = timeStr.match(/(\d+)h/)
    const minutesMatch = timeStr.match(/(\d+)m/)
    const secondsMatch = timeStr.match(/(\d+)s/)
    if (hoursMatch) {
        hours = parseInt(hoursMatch[1], 10)
    }
    if (minutesMatch) {
        minutes = parseInt(minutesMatch[1], 10)
    }
    if (secondsMatch) {
        seconds = parseInt(secondsMatch[1], 10)
    }
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds
    return totalSeconds
}
export function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
export function extractPath(input) {
    const thirdSlashIndex = input.indexOf(
        '/',
        input.indexOf('/', input.indexOf('/') + 1) + 1
    )
    if (thirdSlashIndex !== -1) {
        return input.substring(0, thirdSlashIndex)
    }
    return input
}
