import requests
from requests import RequestException, HTTPError

class DataLogger():

    def __init__(self, id, dataLoggerToken):
        self.id = id
        self.dataLoggerToken = dataLoggerToken

    def withManufacturer(self, manufacturer):
        self.manufacturer = manufacturer
        return self
    
    def withDevices(self, devices):
        self.devices = devices
        return self

    def asDict(self):
        return {
            'manufacturer': self.manufacturer,
            'devices': [ device.asDict() for device in self.devices ],
        }

    def postData(self):
        try:
            url = "https://atman-iot.com/api/data-logger/data/id/{}/token/{}".format(self.id, self.dataLoggerToken)
            json = self.asDict()
            response = requests.post(url, json=json)
            response.raise_for_status()
        
        except HTTPError as e:
            # log this first then rethrow
            raise e
        except RequestException as e:
            # log this first then rethrow
            raise e
