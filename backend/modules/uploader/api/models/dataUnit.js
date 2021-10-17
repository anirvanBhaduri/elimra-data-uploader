class DataUnit {
    constructor(period, measurement, timestamp) {
        this.period = period;
        this.measurement = measurement;
        this.timestamp = timestamp;
    }

    asObject() {
        return {
            period: parseInt(this.period),
            measurement: parseFloat(this.measurement),
            timestamp: this.timestamp,
        };
    }
}

module.exports = {
    DataUnit,
};