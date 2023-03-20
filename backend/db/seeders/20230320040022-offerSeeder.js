'use strict';
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
    "Offers",
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Offers")
  }
};
