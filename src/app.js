const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('./utils/errors/errorHandler')

require('dotenv').config();

const port = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(errorHandler);

const foodPlacesController = require('./foodPlaces/foodPlaces.controller')
app.use('/', foodPlacesController)

module.exports = {
    run: () => {
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    },
}; 