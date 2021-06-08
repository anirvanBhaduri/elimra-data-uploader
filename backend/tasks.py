from celery import Celery
from main import run_atman

app = Celery('tasks', broker='redis://redis:6379/0')

@app.task
def start_atman_task(sensorDataFilePath, sensorDataFileName,
    sampleRateInSeconds, dataLoggerId, dataLoggerToken):

    # here we want to ensure the web socket connection receives
    # the appropriate message to tell the client that its now processing
    run_atman(
        "{}/{}".format(sensorDataFilePath, sensorDataFileName),
        sampleRateInSeconds,
        dataLoggerId, dataLoggerToken
    )
