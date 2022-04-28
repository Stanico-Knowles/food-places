const HTTPError = require('../utils/errors/httpError');
const CustomErrors = require('./enums/customErrors');
const ValidRatings = require('./enums/validRatings');
const Sheets = require('node-sheets').default;
const gs = new Sheets(process.env.SHEET_ID)

/**
 * 
 * @param {object} criteria 
 * @returns object
 */
module.exports.getFoodPlaces = async (criteria) => {
    validateCriteria(criteria)
    await gs.authorizeApiKey(process.env.GOOGLE_API_KEY);
    const table = await gs.tables('A:E')
    const rows = table.rows
    const foodResults = []

    for (let i = 0; i < rows.length; i++) {
        let rating = rows[i]['Food Average Rating'].value
        let foodPlace = rows[i]['Food Places'].value
        let price = rows[i]['Price'].value
        let distance = rows[i]['Distance from Office'].value

        if (rating >= criteria.avgRating && price <= criteria.priceKey && distance <= criteria.distanceKey) {
            foodResults.push(foodPlace)
        }
    }
    if (foodResults.length < 1) return { foodPlace: CustomErrors.NoFoodPlaceFitsCriteria }
    return { foodPlace: randomizer(foodResults) }
}

/**
 * 
 * @param {object} foodPlaces 
 * @returns string
 */
const randomizer = (foodPlaces) => {
    return foodPlaces[Math.floor((Math.random() * (foodPlaces.length)))]
}

/**
 * 
 * @param {object} criteria 
 */
const validateCriteria = (criteria) => {
    if (!criteria.avgRating || !Object.values(ValidRatings).includes(criteria.avgRating)) {
        throw HTTPError.badRequest(CustomErrors.AvgRatingRequired)
    }
    if (!criteria.distanceKey || !Object.values(ValidRatings).includes(criteria.distanceKey)) {
        throw HTTPError.badRequest(CustomErrors.DistanceKeyRequired)
    }
    if (!criteria.priceKey || !Object.values(ValidRatings).includes(criteria.priceKey)) {
        throw HTTPError.badRequest(CustomErrors.PriceKeyRequired)
    }
}
