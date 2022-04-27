const Sheets = require('node-sheets').default;
const gs = new Sheets(process.env.SHEET_ID)

module.exports.getFoodPlaces = async (criteria) => {

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
    return randomizer(foodResults)
}

const randomizer = (foodPlaces) => {
    return foodPlaces[Math.floor((Math.random() * (foodPlaces.length)))]
}
