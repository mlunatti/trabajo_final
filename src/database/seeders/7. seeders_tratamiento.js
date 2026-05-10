'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.tratamiento.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                           nombreTratamiento:"Reducción Cerrada",
                           descripcionTratamiento:" Realineación de los fragmentos óseos sin cirugía, a menudo bajo anestesia."
              }
            }),
            models.tratamiento.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                           nombreTratamiento:"Inmovilización (Yesos y Férulas)",
                           descripcionTratamiento:" Uso de materiales rígidos para mantener los huesos en posición correcta mientras sanan tras una fractura o para reposo de articulaciones en esguinces graves."
              }
            }),
            models.tratamiento.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                           nombreTratamiento:"Medicamentos Antitiroideos",
                           descripcionTratamiento:"Metimazol (MMI): Es el más utilizado. Propiltiouracilo (PTU): Usado comúnmente en el primer trimestre de embarazo o si hay reacciones al metimazol. Funcionan inhibiendo la formación de hormonas tiroideas y el tratamiento suele durar entre 12 y 18 meses."
              }
            }),
            models.tratamiento.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{
                           nombreTratamiento:"Levotiroxina (T4 sintética)",
                           descripcionTratamiento:"Ajuste de dosis: La dosis inicial se calcula según el peso del paciente (amcg/kg/día), edad y estado de salud. Los controles se realizan generalmente cada 6-8 semanas."
              }
            }),
            models.tratamiento.findOrCreate({
              where: {
                id: "5"
              },
              defaults:{
                           nombreTratamiento:"Peeling Facial",
                           descripcionTratamiento:"Exfoliación química (ácido glicólico, salicílico) para renovar capas superficiales, ideal para acné y manchas."
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
