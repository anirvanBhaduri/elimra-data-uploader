import csv
from datetime import datetime

from .csv_reader_interface import CSVReaderInterface
from .data_row import DataRow

TIMESTAMP_FORMAT = '%Y-%m-%d %H:%M:%S'

class CSVReader(CSVReaderInterface):
    def __init__(self, filename):
        self.filename = filename
        self.rowDict = { 'data': {} }
        self.fields = []

    def extract(self):
        try:
            with open(self.filename, newline='') as csvfile:
                rows = csv.reader(csvfile, delimiter=';')

                self.rows = []

                for row in rows:
                    self.rows.append(row)
            return self
        except Exception as e:
            raise IOError('Looks like the file format is different! Please check you are using the correct sensor data file.')
    
    def extractTimeZone(self):
        self.rowDict['timezone'] = self.rows[0][1]
        return self

    def extractManufacturer(self):
        self.rowDict['manufacturer'] = self.rows[1][1]
        return self
    
    def extractModelName(self):
        self.rowDict['modelName'] = self.rows[2][2]
        return self
    
    def extractUniqueSerialNumber(self):
        self.rowDict['uniqueSerialNo'] = self.rows[3][2]
        return self

    def extractDataLineFormat(self):
        self.rowDict['viscosity_units'] = self.rows[5][1]
        self.rowDict['temperature_units'] = self.rows[5][2]
        return self

    def extractFields(self):
        self.fields.append(self.rows[4][1])
        self.fields.append(self.rows[4][2])
        return self

    def extractSensorData(self, fromTimestamp=None):
        dataRows = self.rows[6:]

        if not fromTimestamp:
            for row in dataRows:
                currentTime = datetime.strptime(row[0], TIMESTAMP_FORMAT)
                self.rowDict['data'][row[0]] = DataRow(
                    currentTime.strftime('%Y-%m-%dT%H:%M:%SZ'),
                    row[1],
                    row[2],
                )
            return self

        fromDatetime = datetime.strptime(fromTimestamp, TIMESTAMP_FORMAT)
        for row in dataRows:    
            currentTime = datetime.strptime(row[0], TIMESTAMP_FORMAT)
            if currentTime > fromDatetime:
                self.rowDict['data'][row[0]] = DataRow(
                    currentTime.strftime('%Y-%m-%dT%H:%M:%SZ'),
                    row[1],
                    row[2],
                )

        return self
    
    def getData(self):
        return self.rowDict['data']

    def getLatestTimestamp(self):
        timestamps = self.rowDict['data'].keys()
        if not timestamps:
            return None

        timestampsInDatetime = [datetime.strptime(timestamp, TIMESTAMP_FORMAT) for timestamp in timestamps]
        return max(timestampsInDatetime).strftime(TIMESTAMP_FORMAT)

    def getViscosityUnit(self):
        return self.rowDict['viscosity_units']
    
    def getTemperatureUnit(self):
        return self.rowDict['temperature_units']

    def getModelName(self):
        return self.rowDict['modelName']
    
    def getSerialNo(self):
        return self.rowDict['uniqueSerialNo']
    
    def getManufacturer(self):
        return self.rowDict['manufacturer']