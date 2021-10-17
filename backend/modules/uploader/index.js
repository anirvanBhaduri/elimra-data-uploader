const logger = require('../logger').logger;
const api = require('./api');

const transformAndUploadAtmanData = (
    sensorData,
    measurementPeriod,
    dataLoggerId,
    dataLoggerToken,
) => {
    const channels = [
        new api.Channel(sensorData.fields[0], sensorData.getViscosityUnit(), []),
        new api.Channel(sensorData.fields[1], sensorData.getTemperatureUnit(), []),
    ];
    const device = new api.Device(sensorData.getModelName(), sensorData.getSerialNo(), channels);

    if (Object.keys(sensorData.getData()).length === 0) {
        logger.log('Not posting any data as we have no data to post. (Atman)');
        return;
    }

    Object.values(sensorData.getData()).map(dataRow => {
        const dataUnitViscosity = new api.DataUnit(
            measurementPeriod, 
            dataRow.getViscosity(), 
            dataRow.getTimestamp(),
        );
        const dataUnitTemperature = new api.DataUnit(
            measurementPeriod, 
            dataRow.getTemperature(), 
            dataRow.getTimestamp(),
        );

        channels[0].addDataUnit(dataUnitViscosity);
        channels[1].addDataUnit(dataUnitTemperature);
    });

    const atmanUploader = new api.AtmanUploader(dataLoggerId, dataLoggerToken);
    atmanUploader.withManufacturer(sensorData.getManufacturer())
        .withDevices([device]);
    atmanUploader.postData();
};

const transformAndUploadBoschData = (
    clientId,
    clientSecret,
    scope,
    namespace,
    thingName,
    thingFeature,
    sensorData,
) => {
    if (Object.keys(sensorData.getData()).length === 0) {
        logger.log('Not posting any data as we have no data to post. (Bosch)');
        return;
    }

    const boschUploader = new api.BoschUploader(clientId, clientSecret, scope);
    boschUploader.withNamespace(namespace)
        .withThingName(thingName)
        .withThingFeature(thingFeature)
        .withData(Object.values(sensorData.getData()));
    boschUploader.postData();
};

module.exports = {
    transformAndUploadAtmanData,
    transformAndUploadBoschData,    
};