const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('req body is:', req.body);
    const userId =  req.user.user_id;
    console.log('USER ID ->>>>>>>>>>>>>>', userId);
    const queryText = 
    `SELECT "item_id", "type_id", "name" 
    FROM "closet" 
    WHERE "user_id" = $1;`;
    pool.query(queryText, [userId])
        .then( (result) => {
            console.log('---------> closet result', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('-------error----', error);
            res.sendStatus(500)});
});

module.exports = router;