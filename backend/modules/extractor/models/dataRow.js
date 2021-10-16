class DataRow {
    constructor(timestamp, viscosity, temperature) {
        this.timestamp = timestamp;
        this.viscosity = viscosity;
        this.temperature = temperature;
    }

    getTimestamp() {
        return this.timestamp;
    }

    getViscosity() {
        return this.viscosity;
    }

    getTemperature() {
        return this.temperature;
    }
}

module.exports = {
    DataRow,
};