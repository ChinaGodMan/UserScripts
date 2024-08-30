# GitHub CommitMessage Html View

## Description

`GitHub CommitMessage Html View` is a user script designed to convert commit messages on GitHub into HTML views, providing clearer commit details. This script automatically transforms commit message lists, commit headers, 和 the latest commit information into HTML format to enhance visual appeal and user experience, 和 can be used in conjunction with Git.

## Features

- **Commit Message List Transformation**: Converts commit messages in the commit list to HTML view.
- **Header Information Display**: Shows detailed information about commit headers and the latest commit.
- **Enhanced Visuals**: Improves the visibility and user experience of commit information.

## Using PowerShell to Upload to a Remote Repository

Click[qinwuyuan.ps1](https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/Script%20details/Github-commit-view/preview/qinwuyuan.ps1) to download the PowerShell script.

<pre> param (
    [string]$qinwuyuan_messageFilePath
)
$qinwuyuan_scriptPath = $PSScriptRoot
$qinwuyuan_rootDrive1 = [System.IO.Path]::GetPathRoot($qinwuyuan_scriptPath).TrimEnd('\')
if (-not $qinwuyuan_messageFilePath) {
    $qinwuyuan_messageFilePath = "$qinwuyuan_rootDrive1\path\to\change\commit.txt"
}
$qinwuyuan_oldCommitFilePath = "$qinwuyuan_scriptPath\oldcommit.txt"
if (-not (Test-Path $qinwuyuan_messageFilePath)) {
    exit 1
}
if (-not (Test-Path .git)) {
    exit 1
}
$qinwuyuan_newCommitMessage = Get-Content $qinwuyuan_messageFilePath -Raw
$qinwuyuan_oldCommitMessage = if (Test-Path $qinwuyuan_oldCommitFilePath) {
    Get-Content $qinwuyuan_oldCommitFilePath -Raw
} else {
    ""
}
if ($qinwuyuan_newCommitMessage -eq $qinwuyuan_oldCommitMessage) {
    $qinwuyuan_currentDateTime = Get-Date -Format "yyyy/M/d HH:mm:ss"
    $qinwuyuan_commitMessage = @"
https://avatars.githubusercontent.com/u/96548841?v=4&size=32">
https://github.com/ChinaGodMan">
  <ruby>人民的勤务员<rt>Github:ChinaGodMan</rt></ruby>
</a>
<span>(UTC+8) $qinwuyuan_currentDateTime </span></b>
"@
} else {
    $qinwuyuan_currentDateTime = Get-Date -Format "yyyy/M/d HH:mm:ss"
    $qinwuyuan_commitMessage = $qinwuyuan_newCommitMessage -replace '\$qinwuyuan_currentDateTime', $qinwuyuan_currentDateTime
}
$qinwuyuan_currentBranch = git rev-parse --abbrev-ref HEAD
if ($LASTEXITCODE -ne 0) {
    exit 1
}
git add .
git commit -m $qinwuyuan_commitMessage
if ($LASTEXITCODE -ne 0) {
    exit 1
}
git push origin $qinwuyuan_currentBranch --force
if ($LASTEXITCODE -ne 0) {
    exit 1
}
Copy-Item -Path $qinwuyuan_messageFilePath -Destination $qinwuyuan_oldCommitFilePath -Force
</pre>

## Support

- [Report Issues](https://github.com/ChinaGodMan/UserScripts/issues)
- [Project Homepage](https://github.com/ChinaGodMan/UserScripts)

## License

This script is licensed under the [MIT License](https://opensource.org/licenses/MIT).

<b>After:</b>
![1.png](https://s2.loli.net/2024/08/30/lhJrcbzDdABY2pO.png)
<b>Before:</b>
![2.png](https://s2.loli.net/2024/08/30/56sANeoMWb7QRY2.png)
