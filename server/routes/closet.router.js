const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('req body is:', req.body);
    const userId =  req.user.user_id;
    console.log('USER ID ->>>>>>>>>>>>>>', userId);
    const queryText = 
    `SELECT "item_id", "type_id", "type_name", "name" 
    FROM "closet" 
    WHERE "user_id" = $1
    ORDER BY "type_name";`;
    pool.query(queryText, [userId])
        .then( (result) => {
            console.log('---------> closet result', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('-------error----', error);
            res.sendStatus(500)});
});

router.put('/:id', (req, res) => {
    // edit cardItems in closet
    let id = req.body.item_id;
    let typeName = req.body.type_name;
    let name = req.body.name;
    const queryText = `UPDATE closet SET type_name = $2, name = $3 WHERE item_id = $1;`;
    const values = [id, typeName, name];
    pool.query(queryText, values)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) =>{
            console.log('Error on PUT updating closet item', error);
            res.sendStatus(500)
        });
});

module.exports = router;