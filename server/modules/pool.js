const pg = require('pg');
const url = require('url');
const config = {
    database: process.env.DATABASE_NAME || 'mytasklist',
    host: 'localhost',
    port: 5432,
    max: 10
}

const pool = new Pool(config);

module.exports = new pg.Pool(config);