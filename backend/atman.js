const path = require('path');
const extractSensorDataFromCSV = require('./modules/extractor').extractSensorDataFromCSV;

(async () => {
    const sensorData = await extractSensorDataFromCSV('./samples/sample1.csv');
    console.log(sensorData.getData());
})();