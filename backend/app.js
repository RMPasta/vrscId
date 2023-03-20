const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Op } = require('sequelize');
const { body } = require('express-validator');
const { Offer, Listing, sequelize } = require('./db/models');

require('dotenv').config();

const app = express();
const port = process.env.port || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use('/offers', require('./routes/offers'));
app.use('/listings', require('./routes/listings'));


app.get('/', async (req, res) => {
    res.json('Server is running')
})

sequelize.sync({forec: true}).then(() => {
    console.log('Database is ready')
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
