$srcPath = "D:\Haneek\next\newwebsite demo\src"
$files = Get-ChildItem -Recurse -Path $srcPath -Include "*.tsx", "*.ts" -File
foreach ($file in $files) {
    $content = Get-Content -Raw -LiteralPath $file.FullName
    $newContent = $content -replace "bg-ornix-navy-950", "bg-ornix-navy-850"
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done!"
