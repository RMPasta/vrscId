const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Op } = require('sequelize');
const { body } = require('express-validator');
const { Offer, Listing, sequelize } = require('./db/models');

require('dotenv').config();

const app = express();
// const routes = require('./routes');
const port = process.env.port || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
// app.use(routes)


app.get('/', async (req, res) => {
    res.json('Server is running')
})

app.post('/offers/new', async (req, res) => {
    const { vrscId, price, blockExpiry } = req.body;
  try {
    const newId = await Offer.create({
        vrscId,
        price,
        blockExpiry
    })
    res.json(newId)
  } catch (err) {
    res.json(err)
  }
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

sequelize.sync().then(() => {
    console.log('Database is ready')
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
