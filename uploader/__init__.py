# here we can write the code to upload the data to some persistence
from ftplib import FTP
from .api import Device, Channel, DataUnit, DataLogger

import os

# deprecated
# ftpServer = os.getenv('FTP_SERVER_URL')
# ftpServerUsername=os.getenv('FTP_SERVER_USERNAME')
# ftpServerPassword=os.getenv('FTP_SERVER_PASSWORD')
id = os.getenv('DATA_LOGGER_ID')
dataLoggerToken = os.getenv('DATA_LOGGER_TOKEN')

def upload_data(data):
    # we'll have to convert the data to a list of dataUnits first
    dataUnit = DataUnit(period=0, measurement=0, timestamp='2019-08-24T14:15:22Z')
    channel = Channel(name='Viscosity', unit='pascal-second', dataUnits=[dataUnit])
    device = Device(model='elm1', serialNo='1', channels=[channel])

    dataLogger = DataLogger(id=id, dataLoggerToken=dataLoggerToken)
    dataLogger.withManufacturer('Elmira').withDevices([device]).postData()
