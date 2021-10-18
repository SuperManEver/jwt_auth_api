const config = require('./index')

const poolMax = parseInt(config.DATABASE_POOL_MAX, 10) || 5

const dialectOptions =
  config.ENV === 'production'
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    : {}

const commonConfig = {
  url: config.DATABASE_URL,
  dialect: 'postgres',
  dialectOptions,
  logging: false,
  pool: {
    max: poolMax,
    min: 0,
    idle: 10000
  }
}

module.exports = {
  development: commonConfig,
  test: commonConfig,
  production: commonConfig
}
