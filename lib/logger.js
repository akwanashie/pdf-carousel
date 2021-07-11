const winston = require('winston');

var logger = undefined;

if (!logger) {
    logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console()
        ]
    });
}

module.exports = logger;