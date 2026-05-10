'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.atencion.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                          observacionAtencion:"La fractura se produjo realizando vida normal solo caminando... etc. etc. etc",
                          pacienteMedicoId: "1",
                          deTratamientoId:"1"
              }
            }),
            models.atencion.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                          observacionAtencion:"Concurrió por Ojos saltones y taquicardia",
                          pacienteMedicoId: "2",
                          deTratamientoId:"4"
              }
            }),
            models.atencion.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                          observacionAtencion:"Torcedura Jugando al futbol",
                          pacienteMedicoId: "3",
                          deTratamientoId:"3"              
              }
            }),
            models.atencion.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{ 
                          observacionAtencion:"Concurrió por caida de pelo, aumento de peso, cansancio extremo",
                          pacienteMedicoId: "2",
                          deTratamientoId:"5"
              }
            }),
            models.atencion.findOrCreate({
              where: {
                id: "5"
              },
              defaults:{
                          observacionAtencion:"Concurrió a la consulta por Manchas rojizas y Acné",
                          pacienteMedicoId: "5",
                          deTratamientoId:"6"
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
