const fs = require('fs');

var config = undefined;
const env = 'local';

if (!config) {
    const configFile = `config/${env}.json`;
    console.log(`loading config file: ${configFile}`);
    config = JSON.parse(fs.readFileSync(configFile, { encoding: 'utf-8' }));
}

module.exports = config;