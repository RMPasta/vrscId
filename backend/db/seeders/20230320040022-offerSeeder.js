'use strict';

const { Offer } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
   await Offer.bulkCreate(
    [
      {
        vrscId: 'messi',
        blockExpiry: 40000,
        price: 77777,
      },
      {
        vrscId: 'google',
        blockExpiry: 600000,
        price: 69,
      },
      {
        vrscId: 'amazon',
        blockExpiry: 4000,
        price: 420,
      },
    ]
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Offers")
  }
};
