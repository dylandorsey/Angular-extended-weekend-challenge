const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// Routes

// POST route
router.post('/', (req,res) => {
    console.log('initiate POST query');
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
router.get('/', (req,res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry";`;
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