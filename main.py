from dotenv import load_dotenv
load_dotenv()

import time
import os

import extractor
import uploader
from logger import logger

def main_loop():
    lastTimestamp = None
    measurementPeriod = int(os.getenv('LOOP_FREQUENCY_IN_SECONDS'))

    logger.info('Initialising uploader.\nlastTimestamp = {}\nmeasurementPeriod = {}'.format(lastTimestamp, measurementPeriod))

    while True:
        # run the extractor then the uploader
        csvData, newTimestamp = extractor.extract_data_from_csv(os.getenv('CSV_FILENAME'), lastTimestamp)
        logger.info('Extracted the following data with the last timestamp at {}:\n{}'.format(lastTimestamp, csvData.rowDict))
        if newTimestamp:
            logger.info('lastTimestamp being set to: {}'.format(newTimestamp))
            lastTimestamp = newTimestamp
        uploader.upload_data_atman(csvData, measurementPeriod=measurementPeriod)

        logger.debug('Sleeping for {} seconds with lastTimestamp at {}'.format(measurementPeriod, lastTimestamp))
        time.sleep(measurementPeriod)

if __name__ == '__main__':
    main_loop()
