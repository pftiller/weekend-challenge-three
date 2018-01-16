const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body, req.res);
    const queryText = `INSERT INTO todolist (taskDetails, status) VALUES($1, $2)`
    pool.query(queryText, [req.body.taskDetails, req.body.status])
        .then((result) => {
            console.log('post result: ', result);
            res.send(201);
        })
        .catch((err) => {
            console.log('post error: ', err);
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM todolist;`
    pool.query(queryText)
        .then((result) => {
            console.log('get results: ', result.rows);
            res.send(result.rows); 
        })
        .catch((err) => {
            console.log('get error: ', err);
            res.sendStatus(500);
        })
});


router.put('/:id', (req, res) => {
    const queryText =  `UPDATE todolist SET status = $1 WHERE status = $2;`
    pool.query(queryText, [req.body.status, req.params.id])
    .then((result) => {
        console.log('put success: ', result);
        res.send(201);
    })
    .catch((err) => {
        console.log('put error: ', err);
        res.sendStatus(500);
    });
});


router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM todolist WHERE id=$1`
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log('delete success: ', result);
        res.sendStatus(200); 
    })
    .catch((err) => {
        console.log('delete error: ', err);
        res.sendStatus(500);
    })
})
 

module.exports = router;