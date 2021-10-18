const config = require('./index')

const poolMax = parseInt(config.DATABASE_POOL_MAX, 10) || 5

const commonConfig = {
  url: config.DATABASE_URL,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
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
