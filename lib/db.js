const pgp = require('pg-promise')({});
const getDbConfig = require('../db/config');

const config = getDbConfig();
const [ host, port ] = config.flywayArgs._host.split(':');
const dbConfig = {
    host,
    port: parseInt(port),
    database: config.flywayArgs._db,
    user: config.flywayArgs.user,
    password: config.flywayArgs.password,
    ssl: host !== 'localhost',
    max: 30
};

module.exports = pgp(dbConfig);