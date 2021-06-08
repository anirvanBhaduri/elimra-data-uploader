# here we can write the code to upload the data to some persistence
from ftplib import FTP
from .api import Device, Channel, DataUnit, AtmanDataLogger
from logger import logger

import os

def upload_data(sensorData, measurementPeriod, dataLoggerId, dataLoggerToken):
    channels = [
        Channel(name=sensorData.fields[0], unit=sensorData.getViscosityUnit(), dataUnits=[]),
        Channel(name=sensorData.fields[1], unit=sensorData.getTemperatureUnit(), dataUnits=[]),
    ]
    device = Device(model=sensorData.getModelName(), serialNo=sensorData.getSerialNo(), channels=channels)

    if not sensorData.getData().values():
        logger.info('Not posting any data as we have no data to post. (atman)')
        return

    for dataRow in sensorData.getData().values():
        dataUnitViscosity = DataUnit(period=measurementPeriod, measurement=dataRow.getViscosity(), timestamp=dataRow.getTimestamp())
        dataUnitTemperature = DataUnit(period=measurementPeriod, measurement=dataRow.getTemperature(), timestamp=dataRow.getTimestamp())
        channels[0].addDataUnit(dataUnitViscosity)
        channels[1].addDataUnit(dataUnitTemperature)

    dataLogger = AtmanDataLogger(dataLoggerId=dataLoggerId, dataLoggerToken=dataLoggerToken)
    dataLogger.withManufacturer(sensorData.getManufacturer()).withDevices([device])
    dataLogger.postData()

def upload_data_bosch(sensorData):
    if not sensorData.getData().values():
        logger.info('Not posting any data as we have no data to post. (bosch)')
        return


