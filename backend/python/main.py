from dotenv import load_dotenv
load_dotenv()

import time
import os

import extractor
import uploader
from logger import logger

def run_atman(sensorDataFileName, sampleRateInSeconds,
                            dataLoggerId, dataLoggerToken):
    lastTimestamp = None
    measurementPeriod = sampleRateInSeconds

    logger.info('Initialising uploader.\nlastTimestamp = {}\nmeasurementPeriod = {}'.format(lastTimestamp, measurementPeriod))

    while True:
        # run the extractor then the uploader
        csvData, newTimestamp = extractor.extract_data_from_csv(sensorDataFileName, lastTimestamp)
        logger.info('Extracted the following data with the last timestamp at {}:\n{}'.format(lastTimestamp, csvData.rowDict))
        if newTimestamp:
            logger.info('lastTimestamp being set to: {}'.format(newTimestamp))
            lastTimestamp = newTimestamp
        uploader.upload_data(csvData, measurementPeriod=measurementPeriod, dataLoggerId=dataLoggerId, dataLoggerToken=dataLoggerToken)

        logger.debug('Sleeping for {} seconds with lastTimestamp at {}'.format(measurementPeriod, lastTimestamp))
        time.sleep(measurementPeriod)


def run_bosch(sensorDataFileName, sampleRateInSeconds,
    client_id, client_secret, scope, namespace, thing_name, thing_feature):
    lastTimestamp = None
    measurementPeriod = sampleRateInSeconds

    logger.info('Initialising uploader.\nlastTimestamp = {}\nmeasurementPeriod = {}'.format(lastTimestamp, measurementPeriod))

    while True:
        # run the extractor then the uploader
        csvData, newTimestamp = extractor.extract_data_from_csv(sensorDataFileName, lastTimestamp)
        logger.info('Extracted the following data with the last timestamp at {}:\n{}'.format(lastTimestamp, csvData.rowDict))
        if newTimestamp:
            logger.info('lastTimestamp being set to: {}'.format(newTimestamp))
            lastTimestamp = newTimestamp
        uploader.upload_data_bosch(
            client_id,
            client_secret,
            scope,
            namespace,
            thing_name,
            thing_feature,
            csvData)

        logger.debug('Sleeping for {} seconds with lastTimestamp at {}'.format(measurementPeriod, lastTimestamp))
        time.sleep(int(measurementPeriod))
