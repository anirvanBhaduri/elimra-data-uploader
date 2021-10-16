const logger = require('./modules/logger').logger;
const extractSensorDataFromCSV = require('./modules/extractor').extractSensorDataFromCSV;

(async () => {
    const sensorData = await extractSensorDataFromCSV('./samples/sample1.csv');
    logger.log(JSON.stringify(sensorData.getData()));
})();