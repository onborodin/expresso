
var path = require('path')

module.exports = {
    development: {
        //debug: true,
        client: 'pg',
        connection:'postgres://pgsql@localhost/expresso',
        useNullAsDefault: true,
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        },
        //pool: { 
        //    min: 0,
        //    max: 10
        //},
        //acquireConnectionTimeout: 10000
    },
    staging: {
        client: 'pg',
        connection:'postgres://localhost/expresso',
        useNullAsDefault: true,
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    },
    production: {
        client: 'pg',
        connection:'postgres://localhost/expresso',
        useNullAsDefault: true,
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    }
}
