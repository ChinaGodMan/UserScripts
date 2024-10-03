const fs = require('fs');
const path = require('path');

// 格式化单个文件的 Tampermonkey 元数据头部
function formatMetadata(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    const formattedLines = lines.map(line => {
        if (line.startsWith('// @')) {
            const parts = line.split(/\s+/);
            const label = parts[1].replace(/@/g, ''); // e.g., 'name', 'version', etc.
            const value = parts.slice(2).join(' ');
            return `// @${label.padEnd(15)} ${value}`;
        }
        return line;
    });

    fs.writeFileSync(filePath, formattedLines.join('\n'), 'utf-8');
}

// 递归查找所有的 JavaScript 文件
function findJsFiles(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.lstatSync(fullPath);

        if (stat.isDirectory()) {
            // 如果是目录，递归处理子目录
            findJsFiles(fullPath);
        } else if (stat.isFile() && fullPath.endsWith('.js')) {
            // 如果是 .js 文件，调用格式化函数
            console.log(`Formatting: ${fullPath}`);
            formatMetadata(fullPath);
        }
    });
}

// 仓库的根目录（可以根据实际情况调整）
const repoRoot = path.resolve(__dirname, '..'); // 假设此脚本在项目根目录的子文件夹中

// 开始遍历仓库中的所有 .js 文件
findJsFiles(repoRoot);
