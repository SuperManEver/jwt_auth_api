const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        email: 'example@example.com',
        password_hash: '123123',
        username: 'jawosomo'
      },
      {
        id: uuidv4(),
        email: 'admin@test.com',
        password_hash: '123123',
        username: 'dude_slow'
      },
      {
        id: uuidv4(),
        email: 'guest@main.com',
        password_hash: '123123',
        username: 'bobobo'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
