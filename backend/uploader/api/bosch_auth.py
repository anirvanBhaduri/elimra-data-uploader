import requests
from requests.auth import AuthBase
from requests import RequestException, HTTPError

from logger import logger
from pprint import pformat

def get_auth_token(client_id, client_secret, scope):
    url = 'https://access.bosch-iot-suite.com/token'

    try:
        response = requests.post(url, data={
            'grant_type': 'client_credentials',
            'client_id': client_id,
            'client_secret': client_secret,
            'scope': scope,
        })
        response.raise_for_status()
        response_json = response.json()
        return (response_json.token_type, response_json.access_token)
    except HTTPError as e:
            # log this first then rethrow
        logger.error('Failed to acquire bosch auth token due to the following HTTPError: {}'.format(e))
        raise e
    except RequestException as e:
        # log this first then rethrow
        logger.error('Failed to acquire bosch auth token due to the following RequestException: {}'.format(e))
        raise e


class BoschAuth(AuthBase):
    def __init__(self, client_id, client_secret, scope):
        self.cid = client_id
        self.csec = client_secret
        self.scope = scope

    def __call__(self, r):
        token_type, token = get_auth_token(self.cid, self.csec, self.scope)
        r.headers['Authorization'] = "{} {}".format(token_type, token)
        return r
