const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: process.env.DATABASE_NAME || 'mytasklist',
    host: 'localhost',
    port: 5432,
    max: 10
}

const pool = new Pool(config);

module.exports = pool;
