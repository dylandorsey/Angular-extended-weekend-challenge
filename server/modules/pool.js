const pg = require('pg');

// create a pool
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'time_tracker',
    max: 10,
    idleTimeoutMillis: 30000
}); // end create a pool

// pool connection status logging
pool.on('connect', () => {
    console.log('PG is connected');
});

pool.on('error', (error) => {
    console.log('There was an error', error);
});

module.exports = pool;