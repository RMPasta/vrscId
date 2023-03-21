const express = require('express');
const router = express.Router();

const { Listing, Sequelize } = require('../db/models');

router.get('/', async (req, res) => {

    let { id, length, price, blockExpiry, page, size, sort } = req.query;

    let query = {
        where: {}
    }
    //page and amount of ids shown
    if (!page) page = 1;
    if (!size) size = 20;
    let offset = size * (page - 1);
    query.limit = size;
    query.offset = offset;

    //filter by price
    if (price === 'asc') {
      query.order = [['price', 'ASC']]
    } else if (price === 'desc') {
      query.order = [['price', 'DESC']]
    }
    //filter by id number
    if (id === 'asc') {
      query.order = [['id', 'ASC']]
    } else if (id === 'desc') {
      query.order = [['id', 'DESC']]
    }
    //filter by length
    length = parseInt(length)
    if (length > 0) {
      query.where = Sequelize.where(Sequelize.fn('LENGTH', Sequelize.col('vrscId')), length)
    }
    //filter by block
    if (blockExpiry === 'asc') {
      query.order = [['blockExpiry', 'ASC']]
    } else if (blockExpiry === 'desc') {
      query.order = [['blockExpiry', 'DESC']]
    }




    try {
        const listings = await Listing.findAll(query)
        res.json(listings);
    } catch (err) {
        console.log(err)
        res.json(err);
    }
})

router.post('/new', async (req, res) => {

    const { vrscId, price, blockExpiry } = req.body;

  try {
    const newId = await Listing.create({
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
