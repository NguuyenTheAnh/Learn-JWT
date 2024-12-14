'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        email: 'user2@gmail.com',
        password: '1234',
        username: 'user 2'
      },
      {
        email: 'user3@gmail.com',
        password: '1234',
        username: 'user 3'
      }, {
        email: 'user4@gmail.com',
        password: '1234',
        username: 'user 4'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
