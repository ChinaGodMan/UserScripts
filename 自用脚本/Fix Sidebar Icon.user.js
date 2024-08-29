// ==UserScript==
// @name         Fix Sidebar Icon
// @namespace    http://tampermonkey.net/
// @version      0.11222
// @description  Fix the sidebar icon to the top right corner while scrolling and toggle sidebar visibility
// @match        https://greasyfork.org/*/scripts/by-site/*
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*/scripts/by-site/*
// @match        https://sleazyfork.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict'

    // Function to toggle sidebar visibility
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar')
        if (sidebar) {
            sidebar.classList.toggle('collapsed')
        }
    }

    // Function to create the sidebar icon
    function createSidebarIcon() {
        const sidebarIcon = document.createElement('div')
        sidebarIcon.className = 'sidebar-icon'
        sidebarIcon.innerHTML = '☰'
        if (isDesktop()) {
            sidebarIcon.style.position = 'fixed'
            sidebarIcon.style.top = '10px'
            sidebarIcon.style.right = '10px'
        } else {
            sidebarIcon.style.position = 'fixed'
            sidebarIcon.style.bottom = '10px'
            sidebarIcon.style.right = '20px'
        }
        sidebarIcon.style.zIndex = '1000'
        sidebarIcon.style.cursor = 'pointer' // Make the icon clickable
        sidebarIcon.style.backgroundColor = '#fff' // Optional: Adds a background color for better visibility
        sidebarIcon.style.padding = '5px' // Optional: Adds some padding for better clickability
        sidebarIcon.style.borderRadius = '5px' // Optional: Adds some rounding to the corners
        sidebarIcon.style.fontSize = '16px' // Optional: Adjusts the font size to maintain the original icon size
        sidebarIcon.addEventListener('click', function () {
            if (isDesktop()) {
                const sidebar = document.querySelector('.sidebar')
                if (sidebar) {
                    sidebar.style.top = parseInt(sidebar.style.top || 0) + 2 + 'px'
                }
                alert('完成')
            } else {
                const sidebar = document.querySelector('.sidebar')
                if (sidebar) {
                    const sidebarContent = sidebar.innerHTML
                    const dialog = document.createElement('dialog')
                    dialog.innerHTML = sidebarContent
                    document.body.appendChild(dialog)
                    dialog.showModal()
                    dialog.addEventListener('click', function (event) {
                        if (event.target.tagName === 'DIALOG') {
                            dialog.close()
                        }
                    })
                }
            }
        })

        document.body.appendChild(sidebarIcon)
    }

    // Check if the device is a desktop
    function isDesktop() {
        return !(/Android|iPhone/i.test(navigator.userAgent))
    }

    // Run the function after the page is fully loaded
    window.addEventListener('load', function () {
        if (isDesktop()) {
            const sidebar = document.querySelector('.sidebar')
            if (sidebar) {
                sidebar.classList.remove('collapsed')
            }
            const oldSidebarIcon = document.querySelector('.old-sidebar-icon')
            if (oldSidebarIcon) {
                oldSidebarIcon.click()
            }
            setTimeout(() => {
                const newSidebarIcon = document.querySelector('.sidebar-icon')
                if (!newSidebarIcon) {
                    sidebar.style.top = parseInt(sidebar.style.top || 0) - 2 + 'px'
                }
            }, 1000) // Adjust the delay if necessary
        } else {
            createSidebarIcon()
            const sidebar = document.querySelector('.sidebar')

            // Function to hide/show the icon based on sidebar visibility
            const observer = new MutationObserver(() => {
                if (sidebar) {
                    const isCollapsed = sidebar.classList.contains('collapsed')
                    const sidebarIcon = document.querySelector('.sidebar-icon')
                    if (isCollapsed && !sidebarIcon) {
                        createSidebarIcon()
                    } else if (!isCollapsed && sidebarIcon) {
                        sidebarIcon.remove()
                    }
                }
            })

            const observerConfig = { attributes: true, attributeFilter: ['class'] }
            observer.observe(sidebar, observerConfig)
        }
    })
})()
