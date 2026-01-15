$file = "c:\Users\MartinStark\Documents\GitHub\PLS\MBO_Homepage\MBO_Homepage\src\app\app.component.html"
$content = Get-Content $file -Raw

# Fix min-min-height typo
$content = $content -replace 'min-min-height', 'min-height'

# Remove duplicate body and sticky-header styles (keep only first occurrence)
$lines = @()
$inStyle = $false
$skipNext = 0
$bodyCount = 0
$stickyCount = 0

foreach ($line in ($content -split "`r?`n")) {
    if ($skipNext -gt 0) {
        $skipNext--
        continue
    }
    
    if ($line -match '^\s*body\s*\{' -and $bodyCount -gt 0) {
        # Skip this body block
        $skipNext = 7  # Skip next 7 lines (body block)
        continue
    } elseif ($line -match '^\s*body\s*\{') {
        $bodyCount++
    }
    
    if ($line -match '^\s*\.sticky-header\s*\{' -and $stickyCount -gt 0) {
        # Skip this sticky-header block
        $skipNext = 5  # Skip next 5 lines
        continue
    } elseif ($line -match '^\s*\.sticky-header\s*\{') {
        $stickyCount++
    }
    
    $lines += $line
}

$content = $lines -join "`r`n"

# Fix duplicate class attribute
$content = $content -replace ' class="sticky-header" class="sticky-header"', ' class="sticky-header"'

Set-Content $file $content -NoNewline
Write-Host "Cleanup completed successfully!"
