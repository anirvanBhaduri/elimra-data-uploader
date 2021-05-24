from flask import Flask, render_template
from tasks import add, app as celery_app

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')