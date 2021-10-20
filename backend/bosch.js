const logger = require('./modules/logger').logger;
const extractor = require('./modules/extractor');
const extractSensorDataFromCSV = extractor.extractSensorDataFromCSV;
const extractBoschConfig = extractor.extractBoschConfig;
const transformAndUploadBoschData = require('./modules/uploader').transformAndUploadBoschData;

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
    const boschConfig = extractBoschConfig();
    logger.log(`Running Bosch with the following config: ${JSON.stringify(boschConfig, null, 2)}`);

    let lastTimestamp = null;
    const measurementPeriod = boschConfig.sampleRateInSeconds;

    logger.log(`Initialising uploader.\nlastTimestamp = ${lastTimestamp}\nmeasurementPeriod = ${measurementPeriod}`);

    while (true) {
        const sensorData = await extractSensorDataFromCSV(`${boschConfig.sensorDataFilePath}${boschConfig.sensorDataFileName}`, lastTimestamp);
        const newTimestamp = sensorData.getLatestTimestamp();

        logger.log(`Extracted the following data with the last timestamp at ${lastTimestamp}:\n${JSON.stringify(sensorData.getData(), null, 2)}`);

        if (newTimestamp) {
            logger.log(`lastTimestamp is being set to: ${newTimestamp}`);
            lastTimestamp = newTimestamp;
        }

        transformAndUploadBoschData(
            boschConfig.clientId,
            boschConfig.clientSecret,
            boschConfig.scope,
            boschConfig.namespace,
            boschConfig.thingName,
            boschConfig.thingFeature,
            sensorData,
        );

        logger.log(`Sleeping for ${measurementPeriod} seconds with lastTimestamp at ${lastTimestamp}`);
        await sleep(measurementPeriod * 1000);
    }
})();