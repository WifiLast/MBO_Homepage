# PowerShell script to add sticky-header class to the first section

$file = "c:\Users\MartinStark\Documents\GitHub\PLS\MBO_Homepage\MBO_Homepage\src\app\app.component.html"
$content = Get-Content $file -Raw

# Add class="sticky-header" to the first section after body
$content = $content -replace '(<body>\s*<section[^>]*?)>', '$1 class="sticky-header">'

# Save the modified content
Set-Content $file $content -NoNewline

Write-Host "Added sticky-header class successfully!"
