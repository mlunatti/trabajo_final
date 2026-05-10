'use strict';

const models = require('../models/index')
const bcrypt = require('bcryptjs')

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
                edad: "46",
                password: bcrypt.hashSync('password',10)
              }
            }),
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
