const pgp = require('pg-promise')({});

const pattern = /^(?:([^:\/?#\s]+):\/{2})?(?:([^@\/?#\s]+)@)?([^\/?#\s]+)?(?:\/([^?#\s]*))?(?:[?]([^#\s]+))?\S*$/;
const matches =  process.env.DATABASE_URL.match(pattern);
const [user, password] = matches[2].split(':');
const [ host, port ] = matches[3].split(':');

const dbConfig = {
    host,
    port: parseInt(port),
    database: matches[4],
    user,
    password,
    max: 30
};

if (host !== 'localhost') {
    dbConfig.ssl = {
        rejectUnauthorized: false
    }
}

module.exports = pgp(dbConfig);