const logger = require('../../logger').logger;
const axios = require('axios');

class AtmanUploader {
    constructor(dataLoggerId, dataLoggerToken) {
        this.dataLoggerId = dataLoggerId;
        this.dataLoggerToken = dataLoggerToken;
    }

    withManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }

    withDevices(devices) {
        this.devices = devices;
        return this;
    }

    asObject() {
        return {
            manufacturer: this.manufacturer,
            devices: this.devices.map(device => device.asObject()),
        };
    }

    async postData() {
        try {
            const url = `https://atman-iot.com/api/data-logger/data/id/${this.dataLoggerId}/token/${this.dataLoggerToken}`;
            const body = this.asObject();

            logger.log(`Posting the following data to ${url}:\n\n${JSON.stringify(body, null, 2)}`);
            const response = await axios.post(url, body);
            logger.log('Successfully posted data to Atman');
        } catch (e) {
            logger.log(`Failed to post data to Atman due to the following error: ${JSON.stringify(e, null, 2)}`);
            throw e;
        }
    }
}

module.exports = {
    AtmanUploader,
};