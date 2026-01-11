@echo off
echo Starting Portfolio Server...
echo.
echo Your portfolio will be available at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
npx http-server -p 8000 -o
pause
