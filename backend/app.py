from flask import Flask, render_template, request
from tasks import start_atman_task, app as celery_app
from celery import uuid

app = Flask(__name__)

atman_task_id = None
bosch_task_id = None

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/start-atman', methods=['PUT'])
def start_atman():
    global atman_task_id
    if atman_task_id is not None:
        return 'Task already running', 400
    atman_task_id = uuid()
    request_data = request.get_json()
    start_atman_task.apply_async((
        request_data.get('sensorDataFilePath'),
        request_data.get('sensorDataFileName'),
        request_data.get('sampleRateInSeconds'),
        request_data.get('dataLoggerId'),
        request_data.get('dataLoggerToken'),
    ), task_id=atman_task_id)
    return 'Successfully started task', 200

@app.route('/stop-atman', methods=['PUT'])
def stop_atman():
    global atman_task_id
    if atman_task_id is None:
        return 'No task available to stop', 400
    celery_app.control.revoke(atman_task_id, terminate=True)
    atman_task_id = None
    return 'Successfully stopped task', 200
