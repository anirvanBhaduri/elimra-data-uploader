const logger = require('../../logger').logger;
const axios = require('axios');

const getBoschAuthToken = async (clientId, clientSecret, scope) => {
    const url = 'https://access.bosch-iot-suite.com/token';

    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', clientId);
        params.append('client_secret', clientSecret);
        params.append('scope', scope);

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };

        const response = await axios.post(url, params, config);
        return `${response.data.token_type} ${response.data.access_token}`;
    } catch (e) {
        logger.log(`Failed to get Bosch Auth token due to the following error: ${JSON.stringify(e, null, 2)}`);
        throw e;
    }
};

module.exports = {
    getBoschAuthToken,
};
