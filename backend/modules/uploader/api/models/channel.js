class Channel {
    constructor(name, unit, dataUnits = []) {
        this.name = name;
        this.unit = unit;
        this.dataUnits = dataUnits;
    }

    getName() {
        return this.name;
    }

    addDataUnit(dataUnit) {
        this.dataUnits.push(dataUnit);
    }

    replaceDataUnits(dataUnits) {
        this.dataUnits = dataUnits;
    }

    asObject() {
        return {
            name: this.name,
            unit: this.unit,
            floatData: this.dataUnits.map(unit => unit.asObject()),
        };
    }
}

module.exports = {
    Channel,
};