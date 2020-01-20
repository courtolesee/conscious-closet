const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log('req body is:', req.param);
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

router.put('/name/:id', (req, res) => {
    // edit name for cardItems in closet
    console.log('REQ PARAMS ARE------------------>', req.body.data);
    let id = req.body.data.id;
    let name = req.body.data.name;
    const queryText = `UPDATE closet SET name = $2 WHERE item_id = $1;`;
    const values = [id, name];
    pool.query(queryText, values)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) =>{
            console.log('Error on PUT updating closet item', error);
            res.sendStatus(500)
        });
});


router.delete('/delete/:id', (req, res) => {
    console.log('f;laksjd;flkajsd;lfkja;sdklfj;alskdj', req.params.id);
    let id = [req.params.id]
    let queryText = `DELETE FROM closet WHERE item_id = $1;`;
    pool.query(queryText, id)
    .then(result => {
        res.sendStatus(200);
    }).catch(error=>{
        console.log('ERROR DELETING ITEM', error);
        res.sendStatus(400);
    })
})

module.exports = router;
