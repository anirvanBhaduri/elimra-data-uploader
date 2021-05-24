import requests
from requests import RequestException, HTTPError

from logger import logger
from pprint import pformat

class DataLogger():

    def __init__(self, client_id, client_secret, scope):
        self.client_id = client_id
        self.client_secret = client_secret
        self.scope = scope

    def withThingName(self, thing_name):
        self.thing_name = thing_name
        return self

    def withThingFeature(self, thing_feature):
        self.thing_feature = thing_feature

    def withData(self, data):
        self.data = data
        return self

    def withAuth(self):
        pass

    def toDataFormat(self):
        formattedData = {}
        for dataRow in self.data:
                formattedData[feature.getName()] = {
                    'properties': {
                        'temperature': feature.,
                        'viscosity': '',
                        'timestamp': '',
                    },
                }

        return {
            self.
            'manufacturer': self.manufacturer,
            'devices': [ device.asDict() for device in self.devices ],
        }

    def postData(self):
        try:
            url = "https://atman-iot.com/api/data-logger/data/id/{}/token/{}".format(self.dataLoggerId, self.dataLoggerToken)
            json = self.asDict()

            logger.info('Posting the following data to {}:\n{}'.format(url, pformat(json)))
            response = requests.post(url, json=json)
            response.raise_for_status()

        except HTTPError as e:
            # log this first then rethrow
            logger.error('Failed to post data due to the following HTTPError: {}'.format(e))
            raise e
        except RequestException as e:
            # log this first then rethrow
            logger.error('Failed to post data due to the following RequestException: {}'.format(e))
            raise e
