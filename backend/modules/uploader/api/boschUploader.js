const logger = require('../../logger').logger;
const axios = require('axios');
const getBoschAuthToken = require('./boschAuth').getBoschAuthToken;

class BoschUploader {
    constructor(clientId, clientSecret, scope) {
        this.client = axios.create();

        this.client.interceptors.request.use(
            async config => {
                config.headers = { 
                    'Authorization': this.authHeader,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                return config;
            },
            error => {
                Promise.reject(error)
            }
        );

        this.client.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                if (error.response.status === 403 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    // TODO fix this
                    this.authHeader = await getBoschAuthToken(clientId, clientSecret, scope);            
                    axios.defaults.headers.common['Authorization'] = this.authHeader;
                    return this.client(originalRequest);
                }
                return Promise.reject(error);
            },
        );
    }

    withNamespace(namespace) {
        this.namespace = namespace;
        return this;
    }

    withThingName(thingName) {
        this.thingName = thingName;
        return this;
    }

    withThingFeature(thingFeature) {
        this.thingFeature = thingFeature;
        return this;
    }

    withData(data) {
        this.data = data;
        return this;
    }

    toRequestFormat() {
        const lastDataRow = this.data[this.data.length - 1];
        return {
            [this.thingFeature]: {
                properties: {
                    temperature: lastDataRow.getTemperature(),
                    viscosity: lastDataRow.getViscosity(),
                    timestamp: lastDataRow.getTimestamp(),
                },
            },
        };
    }

    async postData() {
        try {
            const url = `https://things.eu-1.bosch-iot-suite.com/api/2/things/${this.namespace}:${this.thingName}/features`;
            const body = this.toRequestFormat();

            logger.log(`Putting the following data to ${this.url}:\n\n${JSON.stringify(body, null, 2)}`);
            await this.client.put(url, body);
            logger.log('Successfully posted data to Bosch');
        } catch (e) {
            logger.log(`Failed to post data to Bosch due to the following error: ${JSON.stringify(e, null, 2)}`);
            throw e;
        }
    }
}

module.exports = {
    BoschUploader,
};