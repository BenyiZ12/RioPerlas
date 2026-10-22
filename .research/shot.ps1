param([string]$Url, [string]$Out, [int]$W = 1440, [int]$H = 1000, [int]$Wait = 9000)
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$dir = "C:\Users\USUARIO\AppData\Local\Temp\opencode\shots"
New-Item -ItemType Directory -Force -Path $dir | Out-Null
& $chrome --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=$Wait --window-size=$W,$H --screenshot="$dir\$Out.png" $Url 2>&1 | Out-Null
Write-Output "$dir\$Out.png"
