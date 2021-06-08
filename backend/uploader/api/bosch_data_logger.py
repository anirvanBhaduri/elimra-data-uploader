import requests
from requests import RequestException, HTTPError

from logger import logger
from pprint import pformat

from .bosch_auth import BoschAuth

class BoschDataLogger():

    def __init__(self, client_id, client_secret, scope):
        self.auth = BoschAuth(client_id, client_secret, scope)

    def withNamespace(self, namespace):
        self.namespace = namespace
        return self

    def withThingName(self, thing_name):
        self.thing_name = thing_name
        return self

    def withThingFeature(self, thing_feature):
        self.thing_feature = thing_feature

    def withData(self, data):
        self.data = data
        return self

    def toDataFormat(self):
        formattedData = {}
        lastDataRow = self.data[-1]

        return {
            self.thing_feature: {
                'properties': {
                    'temperature': lastDataRow.getTemperature(),
                    'viscosity': lastDataRow.getViscosity(),
                    'timestamp': lastDataRow.getTimestamp(),
                },
            }
        }

    def postData(self):
        try:
            url = "https://things.eu-1.bosch-iot-suite.com/api/2/things/{}:{}/features".format(self.namespace, self.thing_name)
            json = self.toDataFormat()

            logger.info('Putting the following data to {}:\n{}'.format(url, pformat(json)))
            response = requests.put(url, json=json, auth=self.auth)
            response.raise_for_status()

        except HTTPError as e:
            # log this first then rethrow
            logger.error('Failed to post data due to the following HTTPError: {}'.format(e))
            raise e
        except RequestException as e:
            # log this first then rethrow
            logger.error('Failed to post data due to the following RequestException: {}'.format(e))
            raise e
