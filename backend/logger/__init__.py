import logging
from logging.handlers import RotatingFileHandler
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

# create main logger at DEBUG level
logger = logging.getLogger('data_uploader')
logger.setLevel(logging.DEBUG)

# create file logging for INFO
ten_MB = 10 * 1024 * 1024
fh = RotatingFileHandler('{}/logs/info.log'.format(dir_path), maxBytes=ten_MB, backupCount=3)
fh.setLevel(logging.INFO)

# create console logger for ERROR
ch = logging.StreamHandler()
ch.setLevel(logging.ERROR)

# formatter
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
ch.setFormatter(formatter)

# add the handlers to the logger instance
logger.addHandler(fh)
logger.addHandler(ch)