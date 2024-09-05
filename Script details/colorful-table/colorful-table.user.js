// ==UserScript==
// @name:zh-CN 绚丽渐变美化网页表格
// @description:zh-CN  自动为表格所有列应用颜色渐变来美化
// @grant        none
// @match        *://*/*
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @namespace    https://github.com/ChinaGodMan/UserScripts
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDExIDExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiM0NEMiIGQ9Ik0wIDBoNHYzSDB6Ii8+PHBhdGggZmlsbD0iIzRDNCIgZD0iTTAgNGg0djNIMHoiLz48cGF0aCBmaWxsPSIjQzQ0IiBkPSJNMCA4aDR2M0gweiIvPjxwYXRoIGZpbGw9IiM0Q0MiIGQ9Ik01IDBoMTF2M0g1eiIvPjxwYXRoIGZpbGw9IiNDQzQiIGQ9Ik01IDRoMTF2M0g1eiIvPjxwYXRoIGZpbGw9IiNDNEMiIGQ9Ik01IDhoMTF2M0g1eiIvPjwvc3ZnPg==
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @version     1.0.0.0
// @Created         2024-09-06 05:02:49
// @modified        2024-09-06 05:02:49
// ==/UserScript==
(function () {
    'use strict'

    const DEBOUNCE_DELAY = 300
    const POLL_INTERVAL = 1000
    const HUE_RANGE = 120
    const SATURATION = '80%'
    const LIGHTNESS = '88%'

    function extractFirstFloat(str) {
        const match = str.match(/[-+]?\d*\.?\d+/)
        return match ? parseFloat(match[0]) : NaN
    }

    function applyGradient(table, column) {
        const values = Array.from(table.rows)
            .map(row => row.cells[column])
            .filter(cell => cell)
            .map(cell => extractFirstFloat(cell.textContent || cell.innerText))
            .filter(val => !isNaN(val))

        if (values.length === 0) return

        const min = Math.min(...values)
        const max = Math.max(...values)
        if (min === max) return

        const headerCell = table.rows[0]?.cells[column]
        if (!headerCell) return

        headerCell.gradient_fill_increase = !headerCell.gradient_fill_increase
        const isIncreasing = headerCell.gradient_fill_increase

        Array.from(table.rows).forEach(row => {
            const cell = row.cells[column]
            if (!cell) return

            const value = extractFirstFloat(cell.textContent || cell.innerText)
            if (isNaN(value)) return

            const hue = isIncreasing
                ? HUE_RANGE - ((value - min) / (max - min)) * HUE_RANGE
                : ((value - min) / (max - min)) * HUE_RANGE

            cell.style.backgroundColor = `hsl(${hue}, ${SATURATION}, ${LIGHTNESS})`
        })
    }

    function debounce(func, delay) {
        let timeoutId
        return function (...args) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func.apply(this, args), delay)
        }
    }

    function initializeTable(table) {
        if (table.hasAttribute('data-gradient-initialized')) return
        table.setAttribute('data-gradient-initialized', 'true')

        table.addEventListener('click', debounce(event => {
            const column = event.target.cellIndex
            if (column !== undefined) {
                applyGradient(table, column)
            }
        }, DEBOUNCE_DELAY))
    }

    function initializeTables() {
        document.querySelectorAll('table:not([data-gradient-initialized])').forEach(initializeTable)
    }

    // Initial call and setup interval
    initializeTables()
    setInterval(initializeTables, POLL_INTERVAL)
})()