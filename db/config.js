module.exports = function() {
    const pattern = /^(?:([^:\/?#\s]+):\/{2})?(?:([^@\/?#\s]+)@)?([^\/?#\s]+)?(?:\/([^?#\s]*))?(?:[?]([^#\s]+))?\S*$/;
    const matches =  process.env.DATABASE_URL.match(pattern);
    const [user, password] = matches[2].split(':');

    return {
        flywayArgs: {
            url: `jdbc:postgresql://${matches[3]}/${matches[4]}`,
            schemas: 'public',
            locations: 'filesystem:db/sql',
            user: user,
            password: password,
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: true
        }
    };
};