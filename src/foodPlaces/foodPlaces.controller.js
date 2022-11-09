const express = require('express');
const { getFoodPlaces } = require('./sheets');
const app = express.Router();

app.get('/food-place', async (req, res) => {
    try {
        const criteria = {
            avgRating: parseInt(req.query.rating),
            priceKey: parseInt(req.query.price),
            distanceKey: parseInt(req.query.distance),
        }
        return res.status(200).json(await getFoodPlaces(criteria))
    }
    catch(err) {
        res.status(err.code).json({ error: err.message })
    }
});

module.exports = app;