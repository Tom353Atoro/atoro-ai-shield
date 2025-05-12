# PowerShell script to copy client logos from Desktop to project

# Source and destination directories
$sourceDir = "C:\Users\tommc\Desktop\ClientLogos"
$destDir = ".\public\logos"

# Create destination directory if it doesn't exist
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir
}

# Copy all logo files from source to destination
Copy-Item -Path "$sourceDir\*" -Destination $destDir -Recurse -Force

Write-Host "Copied all logo files from $sourceDir to $destDir"

# List the copied files
Get-ChildItem -Path $destDir | ForEach-Object {
    Write-Host "Copied: $($_.Name)"
} 