param (
    [string]$folderPath = (Get-Location),
    [string]$repoUrl = "https://raw.githubusercontent.com/10086100886/UserScripts/main/"
)

# 获取文件夹的绝对路径
$folderPath = [System.IO.Path]::GetFullPath($folderPath)

# 检查指定路径是否是一个有效的文件夹
if (!(Test-Path $folderPath -and (Test-Path $folderPath -PathType Container))) {
    Write-Error "指定的路径不是一个有效的文件夹。"
    exit 1
}

# 读取 .gitignore 文件中的规则
$gitignorePath = Join-Path $folderPath ".gitignore"
$gitignorePatterns = @()

if (Test-Path $gitignorePath) {
    $gitignorePatterns = Get-Content $gitignorePath | Where-Object { $_ -and $_.Trim() -ne '' }
}
else {
    Write-Output ".gitignore 文件不存在。quxiaozhixing"
}

# 解析 .gitignore 文件中的排除规则
$excludedPatterns = @()

foreach ($pattern in $gitignorePatterns) {
    if ($pattern -notmatch '^\s*#') {
        $excludedPatterns += $pattern
    }
}

# 递归获取文件夹中的所有文件
$filePaths = Get-ChildItem -Path $folderPath -Recurse -File

# 转换为 GitHub 下载链接并排除 .gitignore 中的文件
$downloadLinks = $filePaths | Where-Object {
    $filePath = $_.FullName
    $relativePath = [System.IO.Path]::GetRelativePath($folderPath, $filePath).Replace("\", "/")

    # 检查是否符合 .gitignore 中的排除规则
    $isExcluded = $excludedPatterns | Where-Object {
        $match = [System.Text.RegularExpressions.Regex]::IsMatch($relativePath, [System.Text.RegularExpressions.Regex]::Escape($_).Replace("\*", ".*").Replace("\?", "."))
        $match
    }

    -not $isExcluded
} | ForEach-Object {
    $filePath = $_.FullName
    $relativePath = [System.IO.Path]::GetRelativePath($folderPath, $filePath).Replace("\", "/")
    $encodedRelativePath = [System.Uri]::EscapeDataString($relativePath)
    $downloadUrl = "${repoUrl}${encodedRelativePath}"
    [PSCustomObject]@{
        FileName     = $relativePath
        DownloadLink = $downloadUrl
    }
}

# 生成HTML内容
$htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>下载链接</title>
</head>
<body>
    <h1>文件下载链接</h1>
    <table border="1">
        <thead>
            <tr>
                <th>文件名</th>
                <th>下载链接</th>
            </tr>
        </thead>
        <tbody>
"@

foreach ($link in $downloadLinks) {
    $htmlContent += "<tr><td>$($link.FileName)</td><td><a href='$($link.DownloadLink)' target='_blank'>$($link.DownloadLink)</a></td></tr>`n"
}

$htmlContent += @"
        </tbody>
    </table>
</body>
</html>
"@

# 将HTML内容写入文件
$htmlFilePath = Join-Path $folderPath "download_links.html"
$htmlContent | Out-File -FilePath $htmlFilePath -Encoding utf8

# 输出文件路径
Write-Output "HTML 文件已生成：$htmlFilePath"
