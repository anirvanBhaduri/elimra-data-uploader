@echo off
echo "Setting up the application"
cmd /k "virtualenv .virtualenv & .\.virtualenv\Scripts\activate & COPY .env.sample .env & .\.virtualenv\Scripts\pip.exe install -r requirements.txt"
exit