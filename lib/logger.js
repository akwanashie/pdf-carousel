const winston = require('winston');

var logger = undefined;

if (!logger) {
    logger = winston.createLogger({
        transports: [
            new winston.transports.Console()
        ]
    });
}

module.exports = logger;