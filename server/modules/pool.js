const pg = require('pg');
const url = require('url');
const config = {
    database: process.env.DATABASE_NAME || 'mytasklist',
    host: 'localhost',
    port: 5432,
    max: 10
}
module.exports = new pg.Pool(config);