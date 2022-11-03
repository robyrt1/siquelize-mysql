'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        cpf: 78945612303,
        email:'john@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Marcos Cintra',
        ativo: true,
        cpf: 79846513220,
        email:'marcos@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Felipe Cardose',
        ativo: true,
        cpf: 89756423115,
        email:'felipe@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sandra Gomes',
        ativo: true,
        cpf: 12345678995,
        email:'sandra@gmail.com',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Souza ',
        ativo: true,
        cpf: 153145678960,
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
