@echo off
echo "Setting up the application"
cmd /k "py -m virtualenv .virtualenv & .\.virtualenv\Scripts\activate & COPY .env.sample .env & .\.virtualenv\Scripts\pip.exe install -r requirements.txt"
ex-m virtualenv