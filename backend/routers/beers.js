const express = require('express');
const router = express.Router();
const db = require('../models');

// get all beers from DB
router.get('/getAll', async (req, res) => {
    const beers = await db.Beer.findAll();
    res.json(beers);
});

// get beers by type
router.get('/getAll/:type', async (req, res) => {
    const beerType = req.params.type;
    const beers = await db.Beer.findAll({
        where: {
            type: beerType
        }
    })
        res.send(beers)
});

module.exports = router;