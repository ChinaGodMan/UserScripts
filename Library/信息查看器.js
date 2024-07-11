(function () {
    'use strict'

    // 日志类型定义
    const LOG_TYPES = ['info', 'warning', 'error']

    let logContainer // 日志容器

    // 全局记录各种类型日志数量
    window.logCounts = {
        info: 0,
        warning: 0,
        error: 0
    }

    // 创建日志列表的容器bianxiao
    logContainer = document.createElement('div')
    logContainer.style.position = 'fixed'
    logContainer.style.bottom = '20px' // 距离底部 20px
    logContainer.style.right = '20px' // 距离右侧 20px
    logContainer.style.zIndex = '9999'
    logContainer.style.padding = '10px'
    logContainer.style.backgroundColor = '#f0f0f0'
    logContainer.style.border = '1px solid #ccc'
    logContainer.style.width = '400px' // 固定宽度
    logContainer.style.height = '300px' // 固定高度
    logContainer.style.overflowY = 'auto' // 垂直滚动条
    logContainer.style.overflowX = 'hidden' // 隐藏水平滚动条
    logContainer.style.display = 'none' // 初始不可见
    document.body.appendChild(logContainer)

    // 创建导出按钮
    const exportButton = document.createElement('button')
    exportButton.textContent = '导出 Errors'
    exportButton.style.position = 'fixed'
    exportButton.style.bottom = '50px' // 距离底部 50px
    exportButton.style.right = '30px' // 距离右侧 30px
    exportButton.style.zIndex = '10000' // 比日志容器高
    exportButton.style.display = 'none' // 初始不显示
    exportButton.addEventListener('click', () => {
        // 收集所有错误信息
        const errorLogs = Array.from(logContainer.querySelectorAll('.error')).map(log => log.textContent)
        const errorLogsText = errorLogs.join('\n')

        // 创建文本文件并下载
        const blob = new Blob([errorLogsText], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)

        // 创建下载链接
        const downloadLink = document.createElement('a')
        downloadLink.href = url
        downloadLink.download = 'error_logs.txt'
        downloadLink.style.display = 'none'
        document.body.appendChild(downloadLink)

        // 模拟点击下载链接
        downloadLink.click()

        // 清理资源
        URL.revokeObjectURL(url)
        document.body.removeChild(downloadLink)
    })
    document.body.appendChild(exportButton)

    // 创建隐藏按钮
    const hideButton = document.createElement('button')
    hideButton.textContent = 'Hide Logs'
    hideButton.style.position = 'fixed'
    hideButton.style.bottom = '20px' // 距离底部 20px
    hideButton.style.right = '30px' // 距离右侧 30px
    hideButton.style.zIndex = '10000' // 比日志容器高
    hideButton.style.display = 'none' // 初始不显示
    hideButton.addEventListener('click', () => {
        logContainer.style.display = 'none'

        hideButton.style.display = 'none'
        exportButton.style.display = 'none'
    })
    document.body.appendChild(hideButton)

    // 创建显示方法
    window.showLogContainer = function () {
        logContainer.style.display = 'block'
        hideButton.style.display = 'block'
        exportButton.style.display = 'block'
    }

    // 创建日志类型选择器
    const typeSelector = document.createElement('div')
    typeSelector.style.marginBottom = '10px'
    logContainer.appendChild(typeSelector)

    // 创建日志条目列表
    const logList = document.createElement('ul')
    logList.style.listStyleType = 'none'
    logContainer.appendChild(logList)

    // 函数：向日志列表中添加条目
    window.addToLog = function (message, type) {
        const logEntry = document.createElement('li')
        const options = { timeZone: 'Asia/Shanghai', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' }
        const currentTime = new Date().toLocaleTimeString('zh-CN', options) // 获取当前北京时间，中国格式，24小时制
        logEntry.textContent = `[${type.toUpperCase()}] ${currentTime} - ${message}`
        logEntry.classList.add(type) // 添加类型类名

        // 根据日志类型设置不同的颜色样式
        if (type === 'info') {
            logEntry.style.color = '#3498db'
        } else if (type === 'warning') {
            logEntry.style.color = '#f39c12'
        } else if (type === 'error') {
            logEntry.style.color = '#e74c3c'
        }

        // 添加日志条目到日志列表的顶部
        logList.insertBefore(logEntry, logList.firstChild)

        // 更新日志类型计数
        window.logCounts[type]++
        updateTypeButtonsDisplay()
    }

    // 函数：更新类型按钮显示的日志数量
    function updateTypeButtonsDisplay() {
        LOG_TYPES.forEach(type => {
            const button = getTypeButton(type)
            if (button) {
                const count = window.logCounts[type]
                button.textContent = `${type.charAt(0).toUpperCase()}${type.slice(1)} Logs (${count})`
            }
        })

        // 更新 "All Logs" 按钮的显示
        const allLogsButton = getTypeButton('all')
        if (allLogsButton) {
            const totalLogs = Object.values(window.logCounts).reduce((acc, curr) => acc + curr, 0)
            allLogsButton.textContent = `All Logs (${totalLogs})`
        }
    }

    // 函数：获取指定类型的按钮
    function getTypeButton(type) {
        return Array.from(typeSelector.children).find(btn => btn.textContent.toLowerCase().includes(type))
    }

    // 函数：清空日志列表和计数
    window.clearLogs = function () {
        logList.innerHTML = ''
        window.logCounts.info = 0
        window.logCounts.warning = 0
        window.logCounts.error = 0

        updateTypeButtonsDisplay()
    }

    // 函数：根据选择的日志类型过滤显示
    window.filterLogs = function (type) {
        const logEntries = logList.getElementsByTagName('li')
        for (let i = 0; i < logEntries.length; i++) {
            const logEntry = logEntries[i]
            if (type === 'all' || logEntry.classList.contains(type)) {
                logEntry.style.display = 'block'
            } else {
                logEntry.style.display = 'none'
            }
        }
    }

    // 初始化：创建类型选择按钮
    const allLogsButton = document.createElement('button')
    allLogsButton.textContent = 'All Logs (0)'
    allLogsButton.addEventListener('click', () => window.filterLogs('all'))
    typeSelector.appendChild(allLogsButton)

    LOG_TYPES.forEach(type => {
        const typeButton = document.createElement('button')
        typeButton.textContent = `${type.charAt(0).toUpperCase()}${type.slice(1)} Logs (0)`
        typeButton.addEventListener('click', () => window.filterLogs(type))
        typeSelector.appendChild(typeButton)
    })
})()
