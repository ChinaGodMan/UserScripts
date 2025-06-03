// ==UserScript==
// @name               YouTube Dynamic Video Grid
// @name:zh-CN         YouTube 动态视频网格
// @description        Dynamically adjusts the YouTube video grid to display an optimal number of videos per row based on window width, overriding the default 3-video grid for a more responsive layout
// @description:zh-CN  根据窗口宽度动态调整 YouTube 视频网格，以每行显示最佳数量的视频，覆盖默认的 3 个视频网格，以实现响应更快的布局
// @author             Nick Fedor
// @namespace          https://github.com/nicholas-fedor/youtube-dynamic-grid
// @supportURL         https://github.com/nicholas-fedor/youtube-dynamic-grid/issues
// @homepageURL        https://github.com/nicholas-fedor/youtube-dynamic-grid
// @homepage           https://github.com/nicholas-fedor/youtube-dynamic-grid
// @license            MIT
// @match              https://www.youtube.com/*
// @match              https://youtube.com/*
// @icon               https://www.youtube.com/s/desktop/ee47b5e0/img/logos/favicon_144x144.png
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @version            2025.6.3.1
// @run-at             document-end
// @downloadURL        https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/youtube-dynamic-grid/youtube-dynamic-grid.user.js
// @updateURL          https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/youtube-dynamic-grid/youtube-dynamic-grid.user.js
// ==/UserScript==

/**
 * YouTube Dynamic Video Grid Tampermonkey script.
 * Adjusts the YouTube video grid to display 3-12 videos per row based on window width.
 * Skips execution on playlist pages to prevent layout overlap.
 * Version history:
 * - 1.0.2 (2025-05-30): Fixed playlist overlap, improved navigation handling, refactored for maintainability.
 * - 1.0.1 (2025-05-13): Added SPA navigation, CSP compliance, optimized polling.
 * - 1.0.0 (2024-04-25): Initial release.
 */

(function () {
    'use strict'

    // Configuration constants
    const CONFIG = {
        VIDEO_WIDTH: 340, // Thumbnail width in pixels
        MARGIN: 40, // Total left/right margins in pixels
        GAP: 10, // Spacing between thumbnails in pixels
        MIN_ITEMS: 3, // Minimum items per row
        MAX_ITEMS: 12, // Maximum items per row
        NAVIGATION_POLL_INTERVAL: 500, // Navigation polling interval in ms
        GRID_POLL_INTERVALS: { early: 200, regular: 1000 }, // Polling intervals in ms
        POLLING_DURATIONS: { early: 5000, regular: 25000 }, // Polling durations in ms
        DEBOUNCE_DELAY: 100, // Debounce delay for navigation and resize in ms
        UPDATE_DELAY: 50, // Debounce delay for grid updates in ms
        RETRY_ATTEMPTS: 20, // Grid update retry attempts
        RETRY_INTERVAL: 100, // Retry interval in ms
        STABLE_COUNT: 5 // Number of stable checks to stop polling
    }

    // Utility Functions
    /**
     * Checks if the current page is a YouTube playlist page.
     * @returns {boolean} True if URL starts with /playlist
     */
    const isPlaylistPage = () => window.location.pathname.startsWith('/playlist')

    /**
     * Logs messages to the console based on debug mode and log level.
     * @param {string} message - Message to log
     * @param {'info' | 'debug' | 'error'} [level='info'] - Log level
     */
    const logger = (message, level = 'info') => {
        const isDebug = window.location.search.includes('debug=1')
        if (
            level === 'error' ||
            (isDebug && (level === 'info' || level === 'debug'))
        ) {
            console[level === 'error' ? 'error' : 'log'](
                `[YouTube Dynamic Grid][${level}] ${message}`
            )
        }
    }

    // Grid Management Functions
    const GridManager = {
        /**
         * Calculates the number of items per row based on container width.
         * @returns {number} Number of items per row (3-12)
         */
        calculateItemsPerRow() {
            const container = document.querySelector(
                '#contents, ytd-two-column-browse-results-renderer, body'
            )
            if (!container) {
                logger('No container found for grid calculation', 'error')
                return CONFIG.MIN_ITEMS
            }
            const width =
                container.getBoundingClientRect().width || window.innerWidth
            const items = Math.round(
                (width - CONFIG.MARGIN) / (CONFIG.VIDEO_WIDTH + CONFIG.GAP)
            )
            return Math.max(CONFIG.MIN_ITEMS, Math.min(CONFIG.MAX_ITEMS, items))
        },

        /**
         * Updates the grid's elements-per-row attribute and CSS styles.
         */
        updateGrid() {
            if (this.updateTimeout) clearTimeout(this.updateTimeout)
            this.updateTimeout = setTimeout(() => {
                try {
                    const grid = document.querySelector(
                        'ytd-rich-grid-renderer:not([hidden])'
                    )
                    if (!grid) {
                        logger('No visible grid found')
                        return
                    }
                    const itemsPerRow = this.calculateItemsPerRow()
                    const currentItems = getComputedStyle(grid)
                        .getPropertyValue('--ytd-rich-grid-items-per-row')
                        .trim()
                    const currentAttr =
                        grid.getAttribute('elements-per-row') || 'unknown'
                    if (
                        currentItems !== String(itemsPerRow) ||
                        currentAttr !== String(itemsPerRow)
                    ) {
                        grid.setAttribute('elements-per-row', itemsPerRow)
                        this.updateCSS(itemsPerRow)
                        logger(`Updated grid to ${itemsPerRow} items`)
                    }
                } catch (error) {
                    logger(`Failed to update grid: ${error.message}`, 'error')
                }
            }, CONFIG.UPDATE_DELAY)
        },

        /**
         * Injects or updates the CSS style element for the grid.
         */
        injectCSS() {
            if (isPlaylistPage()) {
                logger('Skipping CSS injection on playlist page')
                this.removeCSS()
                return
            }
            let style = document.getElementById('dynamic-grid-style')
            if (!style) {
                style = document.createElement('style')
                style.id = 'dynamic-grid-style'
                const nonce = document.querySelector('meta[name="csp-nonce"]')?.content
                if (nonce) style.nonce = nonce
                document.head.appendChild(style)
                logger('Injected CSS style element', 'debug')
            }
            this.updateCSS(this.calculateItemsPerRow())
        },

        /**
         * Updates the CSS rule for the specified number of items per row.
         * @param {number} itemsPerRow - Number of items per row
         */
        updateCSS(itemsPerRow) {
            const style = document.getElementById('dynamic-grid-style')
            if (!style) return
            style.textContent = `
          #contents, ytd-two-column-browse-results-renderer {
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
          }
          ytd-rich-grid-renderer:not([hidden]) {
            --ytd-rich-grid-items-per-row: ${itemsPerRow} !important;
            --ytd-rich-grid-posts-per-row: ${itemsPerRow} !important;
            max-width: 100% !important;
            padding: 0 !important;
            gap: ${CONFIG.GAP}px !important;
          }
          ytd-rich-grid-renderer:not([hidden]) [is-in-first-column] {
            margin-left: 8px !important;
            margin-right: 8px !important;
            margin-bottom: 16px !important;
          }
          ytd-rich-grid-renderer:not([hidden]) ytd-rich-item-renderer {
            margin: 0 8px 16px 8px !important;
          }
        `
        },

        /**
         * Removes the CSS style element and resets grid attributes.
         */
        removeCSS() {
            const style = document.getElementById('dynamic-grid-style')
            if (style) {
                style.remove()
                logger('Removed CSS style element', 'debug')
            }
            const grid = document.querySelector('ytd-rich-grid-renderer')
            if (grid) {
                grid.removeAttribute('elements-per-row')
                grid.style.removeProperty('--ytd-rich-grid-items-per-row')
                grid.style.removeProperty('--ytd-rich-grid-posts-per-row')
                logger('Reset grid attributes', 'debug')
            }
        },

        /**
         * Attempts to update the grid with retries.
         * @param {number} [attempts=CONFIG.RETRY_ATTEMPTS] - Retry attempts
         */
        tryUpdate(attempts = CONFIG.RETRY_ATTEMPTS) {
            if (isPlaylistPage()) {
                logger('Skipping grid update on playlist page')
                this.removeCSS()
                return
            }
            this.updateGrid()
            if (
                attempts > 0 &&
                !document.querySelector('ytd-rich-grid-renderer:not([hidden])')
            ) {
                logger(`Retrying grid update (${attempts} attempts left)`, 'debug')
                setTimeout(() => this.tryUpdate(attempts - 1), CONFIG.RETRY_INTERVAL)
            }
        },

        /**
         * Polls the grid for changes until stable.
         * @param {'early' | 'regular'} mode - Polling mode
         */
        pollGrid(mode = 'early') {
            if (isPlaylistPage()) {
                logger(`Skipping ${mode} polling on playlist page`)
                this.removeCSS()
                return
            }
            if (this.pollInterval) clearInterval(this.pollInterval)
            let stableCount = 0
            const interval = CONFIG.GRID_POLL_INTERVALS[mode]
            const duration = CONFIG.POLLING_DURATIONS[mode]
            this.pollInterval = setInterval(() => {
                const grid = document.querySelector(
                    'ytd-rich-grid-renderer:not([hidden])'
                )
                if (grid) {
                    const currentItems = getComputedStyle(grid)
                        .getPropertyValue('--ytd-rich-grid-items-per-row')
                        .trim()
                    const currentAttr =
                        grid.getAttribute('elements-per-row') || 'unknown'
                    const itemsPerRow = this.calculateItemsPerRow()
                    if (
                        currentItems !== String(itemsPerRow) ||
                        currentAttr !== String(itemsPerRow)
                    ) {
                        this.updateGrid()
                        stableCount = 0
                    } else {
                        stableCount++
                        if (stableCount >= CONFIG.STABLE_COUNT) {
                            clearInterval(this.pollInterval)
                            logger(`Stopped ${mode} polling: grid stable`)
                            if (mode === 'early') this.pollGrid('regular')
                            else this.updateGrid()
                        }
                    }
                }
            }, interval)
            setTimeout(() => {
                clearInterval(this.pollInterval)
                logger(`Stopped ${mode} polling`)
                if (mode === 'early') this.pollGrid('regular')
                else this.updateGrid()
            }, duration)
        },

        // Internal state
        updateTimeout: null,
        pollInterval: null
    }

    // Navigation Management Functions
    const NavigationManager = {
        /**
         * Handles navigation events by reinitializing the grid.
         */
        handleNavigation() {
            if (this.navigationDebounce) clearTimeout(this.navigationDebounce)
            this.navigationDebounce = setTimeout(() => {
                this.navigationTimeouts.forEach(clearTimeout)
                this.navigationTimeouts = []
                cleanup()
                if (isPlaylistPage()) {
                    logger('Skipping grid initialization on playlist page')
                    GridManager.removeCSS()
                    return
                }
                logger('Initializing grid for non-playlist page')
                GridManager.injectCSS()
                GridManager.tryUpdate()
                this.startObserver()
                GridManager.pollGrid()
                this.navigationTimeouts.push(
                    setTimeout(() => GridManager.updateGrid(), 1000)
                )
                this.navigationTimeouts.push(
                    setTimeout(() => GridManager.updateGrid(), 5000)
                )
                this.navigationTimeouts.push(
                    setTimeout(() => GridManager.updateGrid(), 10000)
                )
                if (this.eventListeners) cleanup()
                this.eventListeners = this.setupEventListeners()
            }, CONFIG.DEBOUNCE_DELAY)
        },

        /**
         * Monitors SPA navigation via URL polling.
         */
        monitorNavigation() {
            setInterval(() => {
                const currentUrl = location.href
                if (currentUrl !== this.lastUrl) {
                    this.lastUrl = currentUrl
                    logger(`Navigated to ${currentUrl}`, 'debug')
                    this.handleNavigation()
                }
            }, CONFIG.NAVIGATION_POLL_INTERVAL)
            logger('Started navigation polling', 'debug')
        },

        /**
         * Starts the MutationObserver for grid changes.
         */
        startObserver() {
            if (isPlaylistPage()) {
                logger('Skipping observer start on playlist page')
                GridManager.removeCSS()
                return
            }
            if (this.observer) {
                this.observer.disconnect()
                logger('Disconnected previous observer', 'debug')
            }
            this.observer = new MutationObserver(mutations => {
                for (const mutation of mutations) {
                    if (
                        mutation.target.matches('ytd-rich-grid-renderer') ||
                        mutation.target.closest('ytd-rich-grid-renderer') ||
                        mutation.target.querySelector('ytd-rich-grid-renderer') ||
                        ['style', 'hidden', 'class', 'elements-per-row'].includes(
                            mutation.attributeName
                        ) ||
                        mutation.addedNodes.length > 0
                    ) {
                        GridManager.updateGrid()
                        break
                    }
                }
            })
            const target = document.querySelector(
                '#contents, ytd-two-column-browse-results-renderer, ytd-app'
            )
            if (target) {
                this.observer.observe(target, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['style', 'class', 'hidden', 'elements-per-row']
                })
                logger('Started observer', 'debug')
            } else {
                logger('Observer target not found, retrying', 'debug')
                setTimeout(() => this.startObserver(), CONFIG.RETRY_INTERVAL)
            }
        },

        /**
         * Sets up event listeners for resize, load, and popstate.
         * @returns {Object} Listener references
         */
        setupEventListeners() {
            if (isPlaylistPage()) {
                logger('Skipping event listener setup on playlist page')
                return null
            }
            const resizeHandler = () => {
                clearTimeout(this.resizeTimeout)
                this.resizeTimeout = setTimeout(() => {
                    logger('Window resized', 'debug')
                    if (!isPlaylistPage()) GridManager.updateGrid()
                }, CONFIG.DEBOUNCE_DELAY)
            }
            const loadHandler = () => {
                logger('Page loaded', 'debug')
                this.handleNavigation()
            }
            const popstateHandler = () => {
                logger('Popstate navigation detected', 'debug')
                this.handleNavigation()
            }
            window.addEventListener('resize', resizeHandler)
            window.addEventListener('load', loadHandler)
            window.addEventListener('popstate', popstateHandler)
            logger('Set up event listeners', 'debug')
            return { resizeHandler, loadHandler, popstateHandler }
        },

        // Internal state
        lastUrl: location.href,
        observer: null,
        navigationTimeouts: [],
        navigationDebounce: null,
        resizeTimeout: null,
        eventListeners: null
    }

    /**
     * Cleans up all resources (observers, intervals, listeners).
     */
    function cleanup() {
        if (NavigationManager.observer) {
            NavigationManager.observer.disconnect()
            NavigationManager.observer = null
        }
        if (GridManager.pollInterval) {
            clearInterval(GridManager.pollInterval)
            GridManager.pollInterval = null
        }
        NavigationManager.navigationTimeouts.forEach(clearTimeout)
        clearTimeout(NavigationManager.resizeTimeout)
        clearTimeout(GridManager.updateTimeout)
        clearTimeout(NavigationManager.navigationDebounce)
        if (NavigationManager.eventListeners) {
            window.removeEventListener(
                'resize',
                NavigationManager.eventListeners.resizeHandler
            )
            window.removeEventListener(
                'load',
                NavigationManager.eventListeners.loadHandler
            )
            window.removeEventListener(
                'popstate',
                NavigationManager.eventListeners.popstateHandler
            )
            NavigationManager.eventListeners = null
        }
        logger('Cleaned up resources', 'debug')
    }

    /**
     * Initializes the script.
     */
    function init() {
        if (isPlaylistPage()) {
            logger('Skipping initialization on playlist page', 'info')
            GridManager.removeCSS()
            NavigationManager.monitorNavigation()
            return
        }
        logger('Initializing script', 'info')
        NavigationManager.monitorNavigation()
        NavigationManager.handleNavigation()
    }

    // Start the script with a delay to ensure URL evaluation
    setTimeout(init, CONFIG.DEBOUNCE_DELAY)
})()
