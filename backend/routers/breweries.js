const express = require('express');
const router = express.Router();
const db = require('../models');

// get all breweries from DB
router.get('/getAll', async (req, res) => {
    const breweries = await db.Brewery.findAll();
    res.json(breweries);
});

module.exports = router;