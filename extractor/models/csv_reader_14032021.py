import csv

from .csv_reader_interface import CSVReaderInterface

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

    def extractSensorData(self):
        dataRows = self.rows[6:]

        for row in dataRows:
            self.rowDict['data'][row[0]] = {
                'timestamp': row[0],
                'viscosity': row[1],
                'temperature': row[2],
            }

        return self
    
    def getData(self):
        return self.rowDict['data']