@echo off
echo "Running the application"
echo "Go to .\logger\logs to see the logs."
cmd /k "docker-compose up -d"
start "" http://localhost:5000
