const CSVReader = require('./models/csvReader').CSVReader;
const DataRow = require('./models/dataRow').DataRow;

const extractSensorDataFromCSV = async (filename, lastTimestamp) => {
    const csv = new CSVReader(filename);
    await csv.extract()
    csv.extractTimeZone()
        .extractManufacturer()
        .extractModelName()
        .extractUniqueSerialNumber()
        .extractFields()
        .extractDataLineFormat()
        .extractSensorData(lastTimestamp);

    return csv;
}

const extractAtmanConfig = () => require('../../config/atman-run-config.json');
const extractBoschConfig = () => require('../../config/bosch-run-config.json');

module.exports = {
    CSVReader,
    DataRow,
    extractSensorDataFromCSV,
    extractAtmanConfig,
    extractBoschConfig,
};