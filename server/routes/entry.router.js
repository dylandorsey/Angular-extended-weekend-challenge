const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// Routes

// DELETE route
router.delete('/:id', (req, res) => {
    const entry_id = req.params.id;
    console.log(entry_id);
    pool.query(`DELETE FROM "entry"
                        WHERE "id" = ($1);`, [entry_id])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problem with DELETE from database', error);
            res.sendStatus(500);
        });
});
// end DELETE route

// GET routes
// default sorting
router.get('/', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "id" DESC;`;
    doTheGet(queryText, res);
});
// end default sorting

// sort by line item ascending
router.get('/lineAsc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "line_item";`;
    doTheGet(queryText, res);
});
// end by line item ascending

// sort by line item descending
router.get('/lineDesc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "line_item" DESC;`;
    doTheGet(queryText, res);
});
// end by line item descending

// sort by line project ascending
router.get('/projectAsc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "project";`;
    doTheGet(queryText, res);
});
// end by line project ascending

// sort by line project descending
router.get('/projectDesc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "project" DESC;`;
    doTheGet(queryText, res);
});
// end by line project descending

// sort by line date ascending
router.get('/DateAsc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "date";`;
    doTheGet(queryText, res);
});
// end by line date ascending

// sort by line date descending
router.get('/DateDesc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "date" DESC;`;
    doTheGet(queryText, res);
});
// end by line date descending

// sort by hours ascending
router.get('/hoursAsc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "hours";`;
    doTheGet(queryText, res);
});
// end by hours ascending

// sort by hours descending
router.get('/hoursDesc', (req, res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "id", "line_item", "description", "project", "date", "hours" FROM "entry" ORDER BY "hours" DESC;`;
    doTheGet(queryText, res);
});
// end by hours descending
// end GET routes

// GET function
function doTheGet(queryText, res) {
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        });
}// end GET function

// end GET routes

// POST route
router.post('/', (req, res) => {
    console.log('initiate POST query');
    const newEntry = req.body;
    const queryText = `INSERT INTO "entry" ("line_item", "description", "project", "date", "hours")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newEntry.lineItem, newEntry.description, newEntry.project, newEntry.date, newEntry.billingHours])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        });
});// end POST route

// PUT route
router.put('/', (req, res) => {
    console.log('initiate PUT query');
    const entry = req.body;
    const queryText = `UPDATE "entry" SET ("line_item", "description", "project", "date", "hours")
    = ($1, $2, $3, $4, $5)
    WHERE "id" = $6;`;
    pool.query(queryText, [entry.line_item, entry.description, entry.project, entry.date, entry.hours, entry.id])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        });
});
// end PUT route


module.exports = router;