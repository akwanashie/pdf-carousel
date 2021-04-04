module.exports = function() {
    return {
        flywayArgs: {
            url: 'jdbc:postgresql://ec2-54-155-87-214.eu-west-1.compute.amazonaws.com:5432/dbcd1n769vf969',
            schemas: 'public',
            locations: 'filesystem:db/sql',
            user: 'fzyxnmerqqoaht',
            password: 'b50a28b6a7b73e7636c7e582a3d0d7aa6701e9b9f5416af8576c6372ecee0709',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: true,
        },
        env: { }
    };
};