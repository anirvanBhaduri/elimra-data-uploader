@echo off
echo "Running the application. Please do not close this command prompt!"
echo "Go to .\logger\logs to see the logs."
cmd /k ".\.virtualenv\Scripts\activate & py main.py"
pause