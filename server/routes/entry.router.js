const express = require('express');
const router = express.Router();
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

// Routes

// POST route
router.post('/', (req,res) => {
    console.log('initiate post query');
    const newEntry = req.body;
    const queryText = `INSERT INTO "entry" ("line_item", "description", "project", "date", "hours")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newEntry.lineItem, newEntry.description, newEntry.project, newEntry.date, newEntry.hours])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});// end POST route


// GET route

// end GET route

// PUT route

// end GET route

// DELETE route

// end DELETE route

module.exports = router;