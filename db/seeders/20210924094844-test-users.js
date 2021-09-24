// const eachOf = require('async/eachOf')
const { v4: uuidv4 } = require('uuid')

const { User } = require('../../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    User.create({
      id: uuidv4(),
      email: 'example@example.com',
      password: '123123',
      username: 'jawosomo'
    })

    // return queryInterface.bulkInsert('users', [
    //   {
    //     id: uuidv4(),
    //     email: 'example@example.com',
    //     password: '123123',
    //     username: 'jawosomo'
    //   },
    //   {
    //     id: uuidv4(),
    //     email: 'admin@test.com',
    //     password: '123123',
    //     username: 'dude_slow'
    //   },
    //   {
    //     id: uuidv4(),
    //     email: 'guest@main.com',
    //     password: '123123',
    //     username: 'bobobo'
    //   }
    // ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
