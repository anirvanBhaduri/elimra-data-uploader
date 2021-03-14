# here we can write the code to extract the CSV content 
# into a python dict
from .models import CSVReader14032021

def extract_data_from_csv(filename):
    csv = CSVReader14032021(filename)
    csv.extract() \
        .extractTimeZone() \
        .extractManufacturer() \
        .extractModelName() \
        .extractUniqueSerialNumber() \
        .extractFields() \
        .extractDataLineFormat() \
        .extractSensorData()
        
    return csv
