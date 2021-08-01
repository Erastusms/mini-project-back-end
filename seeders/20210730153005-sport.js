"use strict";
const fs = require("fs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let sports = JSON.parse(fs.readFileSync("./seeders/sport.json", "utf8"));
    let sportData = sports.map((sport) => {
      const { name, logo, status, venue, updatedQuota, quota, day, date, detail } = sport;
      return {
        name,
        logo,
        status,
        venue,
        updatedQuota,
        quota,
        day,
        date,
        detail,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert("Sports", sportData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Sports", null, {});
  },
};
