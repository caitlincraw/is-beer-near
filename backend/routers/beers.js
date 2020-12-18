const express = require('express');
const router = express.Router();
const db = require('../models');

// get all beers from DB
router.get('/getAll', async (req, res) => {
    const beers = await db.Beer.findAll({
        include: {
            model: db.Brewery,
            attributes:['name', 'website']
        }
    });
    res.json(beers);
});

// update beer rating
router.put('/rating/:id', async (req, res) => {
    // move this ENUM into the model so can reuse without redifining
    const possibleRatings = [
        "favorite",
        "needtotry",
        "nasty",
        "notrated"
    ]
    const rating = req.body.rating;
    const beerId = req.params.id;

    // get rid of console logs and replace with logging package (tracing level)
    if (!rating) {
        console.log(`no rating was sent`);
        return res.status(400).send("There is no rating");
    } 

    if (!possibleRatings.includes(rating)) {
        console.log(`${rating} is not a possible rating`);
        return res.status(400).send("That is not a possible rating");
    }

    const beer = await db.Beer.findByPk(beerId, {
        include: {
            model: db.Brewery,
            attributes:['name', 'website']
        }
    });
    
    if (beer === null) {
        console.log(`there is no beer with ${beerId}`);
        return res.status(400).send("There is no beer with that ID");
    }
    
    beer.ratingList = rating;
    const ratedBeer = await beer.save().catch(err => console.error(err));
        
    return res.send(beer);
})

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