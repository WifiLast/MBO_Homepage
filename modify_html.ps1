# PowerShell script to modify the HTML file

$file = "c:\Users\MartinStark\Documents\GitHub\PLS\MBO_Homepage\MBO_Homepage\src\app\app.component.html"
$content = Get-Content $file -Raw

# 1. Add body styles after <style> tag
$bodyStyles = @"
        body {
            background-image: url('../../../public/ChatGPT Image 25. Apr. 2025, 14_00_47.png');
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: 0;
            padding: 0;
        }

        .sticky-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.95);
        }

"@

$content = $content -replace '(<style>)', "`$1`r`n$bodyStyles"

# 2. Modify section styles
$content = $content -replace 'height: 690px;', 'min-height: 690px;'
$content = $content -replace 'border: 1px solid #333;', 'border: none;'
$content = $content -replace 'background-color: #EFEFEF;', 'background-color: transparent;'
$content = $content -replace 'border-radius: 10px;', 'border-radius: 0px;'
$content = $content -replace 'box-shadow: 1px 1px 3px #AAA;', 'box-shadow: none;'
$content = $content -replace '(?<=section \{[^}]*?)overflow: hidden;', 'overflow: visible;'

# 3. Remove table border
$content = $content -replace 'border: 1px solid black;', ''

# Save the modified content
Set-Content $file $content -NoNewline

Write-Host "File modified successfully!"
