const express = require('express');
const { getFoodPlaces } = require('./sheets');
const app = express.Router();

app.get('/food-place', async (req, res) => {
    try {
        const criteria = {
            avgRating: req.body.avgRating,
            priceKey: req.body.priceKey,
            distanceKey: req.body.distanceKey,
        }
        return res.status(200).json(await getFoodPlaces(criteria))
    }
    catch(err) {
        res.status(err.code).json({ error: err.message })
    }
});

module.exports = app;