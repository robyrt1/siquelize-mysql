'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email:'john@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Marcos Cintra',
        ativo: true,
        email:'marcos@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Felipe Cardose',
        ativo: true,
        email:'felipe@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sandra Gomes',
        ativo: true,
        email:'sandra@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Souza ',
        ativo: true,
        email:'ana@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Pessoas', null, {});
  
  }
};
