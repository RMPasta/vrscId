const express = require('express');

const router = express.Router();
const port = process.env.port || 8080;

const { Offer, Listing } = require('./db/models');

router.get('/', async (req, res) => {
    res.json('Server is running')
})

// app.get('/offers', async (req, res) => {
//     try {
//         const offers = await Offer.findAll()
//         res.json('offers');
//     } catch (err) {
//         console.log(err)
//         res.json(err);
//     }
// })

module.exports = router;
