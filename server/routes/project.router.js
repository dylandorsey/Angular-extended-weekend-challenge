const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// Routes

// DELETE route
router.delete('/:id', (req, res) => {
    const entry_id = req.params.id;
    console.log(entry_id);
    pool.query(`DELETE FROM "project"
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

// GET route
router.get('/', (req,res) => {
    console.log('initiate GET query');
    const queryText = `SELECT "project"."id", "project"."name", COALESCE(SUM("entry"."hours"),0) AS "total_hours"
    FROM "project"
    LEFT JOIN "entry" ON "entry"."project" = "project"."name"
    GROUP BY "project"."id";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});
// end GET route

// POST route
router.post('/', (req,res) => {
    console.log('initiate POST query');
    const newProject = req.body;
    const queryText = `INSERT INTO "project" ("name")
    VALUES ($1);`;
    pool.query(queryText, [newProject.name])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
}); 
// end POST route

// PUT route
router.put('/', (req,res) => {
    console.log('initiate POST query');
    const project = req.body;
    const queryText = `UPDATE "project" 
    SET "name" = ($1)
    WHERE "id" = ($2);`;
    pool.query(queryText, [project.name, project.id])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
}); 
// end PUT route



module.exports = router;