const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Op } = require('sequelize');
const { body } = require('express-validator');

require('dotenv').config();

const app = express();
const port = process.env.port || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

const db = require('./db/models');
const { Offer, Listing } = db;

app.get('/', async (req, res) => {
    res.send('hi')
})
app.get('/offers', async (req, res) => {
    try {
        const offers = await Offer.findAll()
        res.json(offers);
    } catch (err) {
        console.log(err)
        res.json(err);
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
