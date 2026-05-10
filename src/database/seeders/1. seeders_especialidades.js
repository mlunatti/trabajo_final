'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.especialidad.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                nombreEspecialidad: "Traumatología"
              }
            }),
            models.especialidad.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                nombreEspecialidad: "Endocrinología"              
              }
            }),
            models.especialidad.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                nombreEspecialidad: "Dermatología"
              }
            }),
            models.especialidad.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{
                nombreEspecialidad: "Cardiología"
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
