const express = require('express');
const router = express.Router();

const { Offer } = require('../db/models');

router.get('/', async (req, res) => {

    let { vrscId, price, blockExpiry, page, size } = req.query;

    let query = {
        where: {}
    }

    if (!page) page = 1;
    if (!size) size = 20;
    let offset = size * (page - 1);
    query.limit = size;
    query.offset = offset;


    try {
        const offers = await Offer.findAll(query)
        res.json(offers);
    } catch (err) {
        console.log(err)
        res.json(err);
    }
})

router.post('/new', async (req, res) => {

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

module.exports = router;
