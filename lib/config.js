const fs = require('fs');
const appLogger = require('./logger');

var config = undefined;
const env = 'local';

if (!config) {
    const configFile = `config/${env}.json`;
    appLogger.info(`loading config file: ${configFile}`);
    config = JSON.parse(fs.readFileSync(configFile, { encoding: 'utf-8' }));
}

module.exports = config;