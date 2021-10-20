@echo off
echo "Setting up the application"
cd frontend
npm i
npm run build
cd ../backend 
npm i
npm run start
