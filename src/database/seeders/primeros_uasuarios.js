'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          return Promise.all([
            models.usuario.findOrCreate({
              where: {
                id: "1"
              },
              defaults:{
                nombre: "Guillermo",
                apellido: "Lunatti",
                email: "guillelu@gmail.com",
                edad: "46"
              }
            }),
            models.usuario.findOrCreate({
              where: {
                id: "2"
              },
              defaults:{
                nombre: "Pedro",
                apellido: "Canoero",
                email: "pedrocanoero@gmail.com",
                edad: "27"
              }
            }),
            models.usuario.findOrCreate({
              where: {
                id: "3"
              },
              defaults:{
                nombre: "Homero",
                apellido: "Simpson",
                email: "avenidasiempreviva742@gmail.com",
                edad: "55"
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
