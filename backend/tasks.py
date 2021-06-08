from celery import Celery
from main import run_atman, run_bosch

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

@app.task
def start_bosch_task(sensorDataFilePath, sensorDataFileName,
    sampleRateInSeconds, client_id, client_secret, scope,
    namespace, thing_name, thing_feature):

    run_bosch(
        "{}/{}".format(sensorDataFilePath, sensorDataFileName),
        sampleRateInSeconds,
        client_id, client_secret, scope, namespace, thing_name, thing_feature,
    )
