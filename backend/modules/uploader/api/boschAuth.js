const logger = require('../../logger').logger;
const axios = require('axios');

const getBoschAuthToken = async (clientId, clientSecret, scope) => {
    const url = 'https://access.bosch-iot-suite.com/token';

    try {
        const response = await axios.post(url, {
            'grant_type': 'client_credentials',
            'client_id': clientId,
            'client_secret': clientSecret,
            'scope': scope,
        });
        // TODO: figure out how to extract token from response ('token_type', 'access_token')
    } catch (e) {
        logger.log(`Failed to get Bosch Auth token due to the following error: ${JSON.stringify(e, null, 2)}`);
        throw e;
    }
};

module.exports = {
    getBoschAuthToken,
};