const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const userId =  req.user.user_id;
    const queryText = 
    `SELECT * FROM "closet" 
    JOIN "consumer" on "consumer"."user_id" = "closet"."user_id"
    JOIN "clothing" on "clothing"."type_id" = "closet"."type_id"
    WHERE "closet"."user_id" = $1
    ORDER BY "closet"."name"`;
    pool.query(queryText, [userId])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('-------error----', error);
            res.sendStatus(500)});
});

router.post('/new', (req, res) => {    
    const userId = req.user.user_id;
    const itemType = req.body.typeId;
    const name = req.body.name;
    const queryText =
    `INSERT INTO "closet" ("user_id", "type_id", "name") VALUES ($1, $2, $3);`;
    pool.query(queryText, [userId, itemType, name ])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('------- new add error----', error);
            res.sendStatus(500)});
})

router.put('/afterAdd', (req, res) => {
    const userId =  req.user.user_id;
    const typeId = req.body.data;
    let result = doAddMath(typeId);  
    const queryText = 
    `UPDATE consumer SET actual_water = actual_water + $2
    WHERE user_id = $1`;
    pool.query(queryText, [userId, result])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('------- after new add error----', error);
            res.sendStatus(500)});
});


router.delete('/delete/:id', (req, res) => {
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

router.put('/afterDelete', (req, res) => {
    const userId =  req.user.user_id;
    const typeId = doDeleteMath(req.body.data.type_id);
    const deleteType = doDeleteTypeMath(req.body.data.deleteType);    
    const result = typeId * deleteType;
    const queryText = 
    `UPDATE consumer SET actual_waste = actual_waste + $2
    WHERE user_id = $1`;
    pool.query(queryText, [userId, result])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('------- after delete error----', error);
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
    let id = req.body.data.id;
    let typeId = req.body.data.typeName;
    const queryText = `UPDATE closet SET type_id = $2 WHERE item_id = $1;`;
    const values = [id, typeId];
    pool.query(queryText, values)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) =>{
            console.log('Error on PUT updating closet item', error);
            res.sendStatus(500)
        });
});

let doDeleteMath = (typeId) => {    
    switch(typeId){
        case 1:
            return 0.28;
        case 2:
            return 1;
        case 3:
            return 2.5;
        case 4:
            return 0.77;
        case 5:
            return 3;
        default:
            return 0;
    }
}

let doDeleteTypeMath = (deleteType) => {
    switch (deleteType){
        case 2:
            return 0.84;
        case 3:
            return 0;
        default:
            return 1;
    }
}

let doAddMath = (itemType) => {
    switch(itemType){
        case 1:
            return 713;
        case 2:
            return 2108;
        case 3:
            return 3626;
        case 4:
            return 1960;
        case 5:
            return 7639;
        default:
            return 0;        
    }
}

module.exports = router;
