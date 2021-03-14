from dotenv import load_dotenv
load_dotenv()

import time
import os

import extractor
import uploader

def main_loop():
    lastTimestamp = None
    measurementPeriod = int(os.getenv('LOOP_FREQUENCY_IN_SECONDS'))

    #while True:
        # run the extractor then the uploader
    csvData, lastTimestamp = extractor.extract_data_from_csv(os.getenv('CSV_FILENAME'), lastTimestamp)
    uploader.upload_data(csvData, measurementPeriod=measurementPeriod)

    time.sleep(measurementPeriod)

if __name__ == '__main__':
    main_loop()