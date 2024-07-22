# 指定要遍历的目录路径
$directoryPath = "D:\renmindeqinwuyuan"

# 递归遍历目录及其子目录下的所有 md 文件，并打印路径
Get-ChildItem -Path $directoryPath -Recurse -Filter *.md | ForEach-Object {
    $filePath = $_.FullName
    Write-Output "Processing file: $filePath"

    # 读取文件内容
    $content = Get-Content -Path $filePath -Raw

    # 打印文件内容
    Write-Output "Before Replacement:"
    Write-Output $content

    # 替换内容
    $updatedContent = $content -replace "\?svg\&\?", "?svg&"

    # 打印替换后的内容
    Write-Output "After Replacement:"
    Write-Output $updatedContent

    # 保存修改后的内容回文件
    Set-Content -Path $filePath -Value $updatedContent
}
