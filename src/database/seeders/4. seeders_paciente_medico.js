'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.paciente_medico.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                          pacienteId: "1",
                          medicoId:"1"
              }
            }),
            models.paciente_medico.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                          pacienteId: "2",
                          medicoId:"2"
              }
            }),
            models.paciente_medico.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                          pacienteId: "3",
                          medicoId:"1"
              }
            }),
            models.paciente_medico.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{
                          pacienteId: "1",
                          medicoId:"3"
              }
            }),
            models.paciente_medico.findOrCreate({
              where: {
                id: "5"
              },
              defaults:{
                          pacienteId: "3",
                          medicoId:"3"
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
