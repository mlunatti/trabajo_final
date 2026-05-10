'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.diagnostico_especialidad.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                diagnosticoId: "1",
                especialidadId: "1"
              }
            }),
            models.diagnostico_especialidad.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                diagnosticoId: "2",
                especialidadId: "1"
              }
            }),
            models.diagnostico_especialidad.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                diagnosticoId: "3",
                especialidadId: "1"
              }
            }),
            models.diagnostico_especialidad.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{
                diagnosticoId: "4",
                especialidadId: "2"
              }
            }),
            models.diagnostico_especialidad.findOrCreate({
              where: {
                id: "5"
              },
              defaults:{
                diagnosticoId: "5",
                especialidadId: "2"
              }
            }),
            models.diagnostico_especialidad.findOrCreate({
              where: {
                id: "6"
              },
              defaults:{
                diagnosticoId: "6",
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
