Write-Host "Starting Portfolio Server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
npx http-server -p 8000 -o
