const logger = require('./modules/logger').logger;
const extractor = require('./modules/extractor');
const extractSensorDataFromCSV = extractor.extractSensorDataFromCSV;
const extractAtmanConfig = extractor.extractAtmanConfig;
const transformAndUploadAtmanData = require('./modules/uploader').transformAndUploadAtmanData;

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
    const atmanConfig = extractAtmanConfig();
    logger.log(`Running Atman with the following config: ${JSON.stringify(atmanConfig, null, 2)}`);

    let lastTimestamp = null;
    const measurementPeriod = atmanConfig.sampleRateInSeconds;

    logger.log(`Initialising uploader.\nlastTimestamp = ${lastTimestamp}\nmeasurementPeriod = ${measurementPeriod}`);

    while (true) {
        const sensorData = await extractSensorDataFromCSV(`${atmanConfig.sensorDataFilePath}${atmanConfig.sensorDataFileName}`, lastTimestamp);
        const newTimestamp = sensorData.getLatestTimestamp();

        logger.log(`Extracted the following data with the last timestamp at ${lastTimestamp}:\n${JSON.stringify(sensorData.getData(), null, 2)}`);

        if (newTimestamp) {
            logger.log(`lastTimestamp is being set to: ${newTimestamp}`);
            lastTimestamp = newTimestamp;
        }

        transformAndUploadAtmanData(
            sensorData,
            measurementPeriod,
            atmanConfig.dataLoggerId,
            atmanConfig.dataLoggerToken,
        );

        logger.log(`Sleeping for ${measurementPeriod} seconds with lastTimestamp at ${lastTimestamp}`);
        await sleep(measurementPeriod * 1000);
    }
})();