const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log('req body is:', req.param);
    const userId =  req.user.user_id;
    const queryText = 
    `SELECT * FROM "closet" 
    JOIN "consumer" on "consumer"."user_id" = "closet"."user_id"
    WHERE "closet"."user_id" = $1
    ORDER BY "type_name";`;
    pool.query(queryText, [userId])
        .then( (result) => {
            res.send(result.rows);
            console.log('RESULT ROWS OF CLOSET GET------------>', result.rows);
            
        })
        .catch((error) => {
            console.log('-------error----', error);
            res.sendStatus(500)});
});

router.put('/name/:id', (req, res) => {
    // edit name for cardItems in closet
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

router.put('/type/:id', (req, res) => {
    // edit type for cardItems in closet
    console.log('req body data for type is ------------------------>', req.body.data);
    let id = req.body.data.id;
    let type = req.body.data.typeName;
    const queryText = `UPDATE closet SET type_id = $2 WHERE item_id = $1;`;
    const values = [id, type];
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

    console.log('DELETE REQ PARAMS ARE---------->', req.params);
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

// let doMath = (type) => {

//     switch(){
//         case 'tshirt':
//             result = totalWaste + 0.28;
//             break;
//         case 'jeans':
//             result = totalWaste + 1;
//             break;
//         case 'shoes':
//             result = totalWaste + 2.5;
//             break;
//         case 'sweatshirt/sweater':
//             result = totalWaste + 0.77;
//             break;
//         case 'winter jacket':
//             result = totalWaste + 3;
//             break;
//     }

// }

module.exports = router;
