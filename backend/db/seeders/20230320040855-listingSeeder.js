'use strict';

const { Listing } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Listing.bulkCreate(
      [
        {
          vrscId: 'messi',
          blockExpiry: 400000,
          price: 69696969,
        },
        {
          vrscId: 'google',
          blockExpiry: 700000,
          price: 69000,
        },
        {
          vrscId: 'amazon',
          blockExpiry: 40000,
          price: 420000,
        },
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Offers")
  }
};
