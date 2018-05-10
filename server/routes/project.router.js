const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// Routes

// POST route

// end POST route


// GET route
router.get('/', (req,res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "name", "total_hours" FROM "project";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});
// end GET route

// PUT route

// end GET route

// DELETE route

// end DELETE route

module.exports = router;