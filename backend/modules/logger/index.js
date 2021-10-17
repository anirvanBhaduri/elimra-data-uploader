const logger = require('simple-logger-node').config({
    // where to save logs
    file: __dirname + '/logs/info.log',

    // max logfile size in bytes
    maxSizeBytes: 500000, // max file size in bytes

    // max rotated files to persist
    maxFiles: 2, // max files to keep (e.g info.log.1, info.log.2 ..)

    // formatting the logged message
    format: message => {
        const formattedMessage = `[INFO] [${new Date}] - ${message.trim()}\n`;
        console.log(formattedMessage);
        return formattedMessage;
    },
});

module.exports = {
    logger,
};