'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.diagnostico.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                          nombreDiagnostico : "Fractura",
                          descripcionDiagnostico: "Rotura total o parcial de un hueso"                
              }
            }),
            models.diagnostico.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                          nombreDiagnostico : "Luxación",
                          descripcionDiagnostico: "Pérdida de la relación anatómica de una articulación (hueso fuera de su lugar)."                
              }
            }),
            models.diagnostico.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                          nombreDiagnostico : "Esguince",
                          descripcionDiagnostico: "Lesión de ligamentos por estiramiento excesivo."
              }
            }),
            models.diagnostico.findOrCreate({
              where: {
                id: "4"
              },
              defaults:{
                          nombreDiagnostico : "Hipotiroidismo",
                          descripcionDiagnostico: "Hashimoto (autoinmune), subclínico"
              }
            }),
            models.diagnostico.findOrCreate({
              where: {
                id: "5"
              },
              defaults:{
                          nombreDiagnostico : "Hipertiroidismo",
                          descripcionDiagnostico: "Enfermedad de Graves, bocio multinodular tóxico."
              }
            }),
            models.diagnostico.findOrCreate({
              where: {
                id: "6"
              },
              defaults:{
                          nombreDiagnostico : "Manchas (Hiperpigmentación Postinflamatoria)",
                          descripcionDiagnostico: "Son decoloraciones (marrones o rojizas) que quedan tras curarse un grano, causadas por un exceso de producción de melanina."
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
