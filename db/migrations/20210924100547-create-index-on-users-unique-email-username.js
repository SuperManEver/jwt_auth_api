'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addIndex('users', {
      fields: ['email', 'username'],
      unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeIndex('users', ['email', 'username'])
  }
}
