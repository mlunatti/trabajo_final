
const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.medico.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                        dni:"28955444",
                        nombre:"Thomas ",
                        apellido:"Shellby",
                        edad: "46",
                        email: "pickyblinders@gmail.com"  , 
                        especialidadId: "1"
                }
            }),
            models.medico.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                        dni:"27714009",
                        nombre:"Guillermo",
                        apellido:"Del Toro",
                        edad: "46",
                        email: "guillermo.toro@gmail.com"  , 
                        especialidadId: "2"
              }
            }),
            models.medico.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                        dni:"2025588", 
                        nombre: "Alfie ",
                        apellido: "Salomon",
                        edad: "49",
                        email: "salomon.alfie@gmail.com"  , 
                        especialidadId: "3"
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
