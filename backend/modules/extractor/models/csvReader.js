const csv = require('csv-parser');
const fs = require('fs');
const TIMESTAMP_FORMAT = '%Y-%m-%d %H:%M:%S';

const DataRow = require('./dataRow').DataRow;

class CSVReader {
    constructor(filename) {
        this.filename = filename;
        this.rowDict = {'data': {}};
        this.fields = [];
        this.rows = [];
    }

    extract() {
        return new Promise((resolve, reject) => {
            try {
                fs.createReadStream(this.filename)
                .pipe(csv({ headers: false, separator: ';' }))
                .on('data', (row) => {
                    this.rows.push(row);
                })
                .on('end', () => {
                    console.log('CSV file successfully processed');
                    resolve();
                });
            } catch (e) {
                console.error('[csvReader]', e);
                reject(new Error(`Looks like the file format is incorrect! 
                    Please check you are using the correct sensor data csv file format`
                ));
            }
        });
    }

    extractTimeZone() {
        this.rowDict['timezone'] = this.rows[0][1];
        return this; 
    }

    extractManufacturer() {
        this.rowDict['manufacturer'] = this.rows[1][1];
        return this; 
    }

    extractModelName() {
        this.rowDict['modelName'] = this.rows[2][2];
        return this;
    }

    extractUniqueSerialNumber() {
        this.rowDict['uniqueSerialNo'] = this.rows[3][2];
        return this;
    }

    extractDataLineFormat() {
        this.rowDict['viscosity_units'] = this.rows[5][1];
        this.rowDict['temperature_units'] = this.rows[5][2];
        return this;
    }    

    extractFields() {
        this.fields.push(this.rows[4][1]);
        this.fields.push(this.rows[4][2]);
        return this;
    }

    extractSensorData(fromTimestamp) {
        const dataRows = this.rows.slice(6);

        if (!fromTimestamp) {
            dataRows.map((row) => {
                let currentTime = Date.parse(row[0], TIMESTAMP_FORMAT);
                this.rowDict['data'][row[0]] = new DataRow(
                    new Date(currentTime).toISOString(),
                    row[1],
                    row[2],
                );
            });
            return this;
        }

        fromDateTime = Date.parse(fromTimestamp, TIMESTAMP_FORMAT);

        dataRows.map((row) => {
            let currentTime = Date.parse(row[0], TIMESTAMP_FORMAT);
            
            if (currentTime > fromDateTime) {
                this.rowDict['data'][row[0]] = new DataRow(
                    new Date(currentTime).toISOString(),
                    row[1],
                    row[2],
                );
            }
        });

        return this;
    }

    getData() {
        return this.rowDict['data'];
    }

    getLatestTimestamp() {
        const timestamps = Object.keys(this.rowDict['data']);
        if (timestamps.length === 0) {
            return null;
        }

        const timestampsInDatetime = timestamps.map(timestamp => {
            return Date.parse(timestamp, TIMESTAMP_FORMAT);
        });
    }

    getViscosityUnit() {
        return this.rowDict['viscosity_units'];
    }

    getTemperatureUnit() {
        return this.rowDict['temperature_units'];
    }

    getModelName() {
        return this.rowDict['modelName'];
    }

    getSerialNo() {
        return this.rowDict['uniqueSerialNo'];
    }

    getManufacturer() {
        return this.rowDict['manufacturer'];
    }    
}

module.exports = {
    CSVReader,
};