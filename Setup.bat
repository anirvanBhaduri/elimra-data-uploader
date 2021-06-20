@echo off
echo "Setting up the application"
cmd /k "cd frontend & docker run -w=/app --volume=%CD%/:/app node:alpine npm install & docker run -w=/app --volume=%CD%/:/app node:alpine npm run build"
ex-m virtualenv
