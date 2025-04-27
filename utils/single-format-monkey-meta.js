const fs = require('fs')
const path = require('path')
// 格式化单个文件的 Tampermonkey 元数据头部
function formatMetadata(filePath) {
    if (!filePath.includes('user.js')) { return }
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const lines = fileContent.split('\n')
    // 首先找到最长的标签长度
    let maxLabelLength = 0
    const metadataLines = lines.filter(line => line.startsWith('// @'))
    metadataLines.forEach(line => {
        const parts = line.split(/\s+/)
        const label = parts[1].replace(/@/g, '') // 获取标签，去掉 @
        maxLabelLength = Math.max(maxLabelLength, label.length)
    })
    // 然后根据最长标签长度格式化
    const formattedLines = lines.map(line => {
        if (line.startsWith('// @')) {
            const parts = line.split(/\s+/)
            const label = parts[1].replace(/@/g, '') // 获取标签，去掉 @
            const value = parts.slice(2).join(' ')
            return `// @${label.padEnd(maxLabelLength)} ${value.trimEnd()}` // 使用最长标签长度进行对齐,并删除行尾空
        }
        return line
    })
    fs.writeFileSync(filePath, formattedLines.join('\n'), 'utf-8')
}
// 从命令行参数获取文件路径
const args = process.argv.slice(2)
if (args.length !== 1) {
    console.error('请提供一个 JavaScript 文件的路径。')
    process.exit(1)
}
const filePath = path.resolve(args[0])
// 格式化指定的 JavaScript 文件
formatMetadata(filePath)
console.log(`格式化完成: ${filePath}`)
