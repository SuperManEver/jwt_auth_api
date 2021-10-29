module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addIndex('users', {
      fields: ['email'],
      unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeIndex('users', ['email'])
  }
}
