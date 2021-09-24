const _ = require('lodash')
const { Sequelize, QueryTypes, DataTypes } = require('sequelize')

const configDB = require('../config/database')

const nodeEnv = process.env.NODE_ENV || 'development'
const configDbForEnv = configDB[nodeEnv]
const sequelizeOptions = _.omit(configDbForEnv, ['url'])

const dbConnect = new Sequelize(configDbForEnv.url, sequelizeOptions)

module.exports = {
  dbConnect,
  Sequelize,
  QueryTypes,
  DataTypes
}
