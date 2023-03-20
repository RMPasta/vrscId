'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Listings",
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Offers")
  }
};
