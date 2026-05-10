'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.paciente.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                          dni: "29855548",    
                          nombre : "Polly",  
                          apellido: "Gray",
                          email:"gitana@gmail.com",
                          edad:"48",
                          obraSocial: "IOMA",
              }
            }),
            models.paciente.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                          dni: "35585055",    
                          nombre : "Artur",  
                          apellido: "Shelby",
                          email:"pickyblinders@gmail.com",
                          edad:"58",
                          obraSocial: "OSECAC",
              }
            }),
            models.paciente.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                          dni: "44855455",    
                          nombre : "Luca",  
                          apellido: "Changretta",
                          email:"vendetta@gmail.com",
                          edad:"53",
                          obraSocial: "OSDE",
              }
            })

          ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
