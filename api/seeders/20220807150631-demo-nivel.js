"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Niveis",
      [
        {
          desc_nivel: "basico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc_nivel: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc_nivel: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Niveis", null, {});
  },
};
