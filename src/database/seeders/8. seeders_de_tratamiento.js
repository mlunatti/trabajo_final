'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.de_tratamiento.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                           tratamientoId:"1",
                           diagnosticoEspecialidadId:"1"
              }
            }),
            models.de_tratamiento.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                           tratamientoId:"2",
                           diagnosticoEspecialidadId:"2"
              }
            }),
            models.de_tratamiento.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                           tratamientoId:"2",
                           diagnosticoEspecialidadId:"3"
              }
            }),
            models.de_tratamiento.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{
                           tratamientoId:"3",
                           diagnosticoEspecialidadId:"5"
              }
            }),
            models.de_tratamiento.findOrCreate({
              where: {
                id: "5"
              },
              defaults:{
                           tratamientoId:"4",
                           diagnosticoEspecialidadId:"4"
              }
            }),
            models.de_tratamiento.findOrCreate({
              where: {
                id: "6"
              },
              defaults:{
                           tratamientoId:"5",
                           diagnosticoEspecialidadId:"6"
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
