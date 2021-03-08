from dotenv import load_dotenv
load_dotenv()

import time
import os

import extractor
import uploader

def main_loop():
    numberOfRows = 0

    #while True:
        # run the extractor then the uploader
    newData = extractor.extract_data_from_csv(os.getenv('CSV_FILENAME'))
    relevantData = []

    if (numberOfRows < len(newData)):
        relevantData = newData[numberOfRows - len(newData): len(newData)]
        
        numberOfRows = len(newData)
        uploader.upload_data(relevantData)

    time.sleep(int(os.getenv('LOOP_FREQUENCY_IN_SECONDS')))

if __name__ == '__main__':
    main_loop()