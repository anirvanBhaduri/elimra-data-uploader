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

def upload_data(sensorData, measurementPeriod):
    channels = [
        Channel(name='Viscosity', unit=sensorData.getViscosityUnit()),
        Channel(name='Temperature', unit=sensorData.getTemperatureUnit()),
    ]
    device = Device(model=sensorData.getModelName(), serialNo=sensorData.getSerialNo(), channels=channels)

    for dataRow in sensorData.getData().values():
        dataUnitViscosity = DataUnit(period=measurementPeriod, measurement=dataRow.getViscosity(), timestamp=dataRow.getTimestamp())
        dataUnitTemperature = DataUnit(period=measurementPeriod, measurement=dataRow.getTemperature(), timestamp=dataRow.getTimestamp())
        channels[0].addDataUnit(dataUnitViscosity)
        channels[1].addDataUnit(dataUnitTemperature)

    dataLogger = DataLogger(id=id, dataLoggerToken=dataLoggerToken)
    dataLogger.withManufacturer(sensorData.getManufacturer()).withDevices([device]).postData()
