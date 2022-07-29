const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('IN /shelf');
        console.log(`isAuthenticated`, req.isAuthenticated());
        // console.log(`user`, req.user);
        let queryText = `select * from item`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
                console.log(`Our result is:`, result.rows);
            })
            .catch((err) => {
                console.log(`ERR in /shelf router`, err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    // endpoint functionality
    const item = req.body;
    const queryText = `insert into "item" ("description", "image_url","user_id")
    values ($1, $2, $3);`;
    //databse columns have to match redux object from dispatch payload (ShelfForm.jsx)
    pool.query(queryText, [item.description, item.image_url, item.user_id])
        .then((result) => {
            res.send(result.rows);
            console.log(`POST successful:`, result.rows);
        })
        .catch((err) => {
            console.log(`ERR in /shelf router`, err);
            res.sendStatus(500);
        });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()){
    // endpoint functionality
    const userId = req.params.id;
    const queryText = `delete from "item" where id = $1;`;
    //databse columns have to match redux object from dispatch payload (ShelfForm.jsx)
    pool.query(queryText, [userId,])
        .then((result) => {
            res.send(result.rows);
            console.log(`POST successful:`, result.rows);
        })
        .catch((err) => {
            console.log(`ERR in /shelf router`, err);
            res.sendStatus(500);
        });
    } {
        res.sendStatus(403);
    }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
    // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
    // endpoint functionality
});

module.exports = router;
