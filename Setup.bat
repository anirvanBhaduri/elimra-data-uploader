@echo off
echo "Setting up the application"
mkdir backend\build
cd frontend
npm i && npm run pure:build && xcopy /s/e/y %CD%\build %CD%\..\backend\build && cd ..\backend && npm i && npm run start