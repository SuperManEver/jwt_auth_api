require('dotenv').config()

const DEFAULT_PORT = 3000

const {
  PORT = DEFAULT_PORT,
  DATABASE_URL,
  DATABASE_POOL_MAX,
  SALT_WORK_FACTOR = 10,
  ACCESS_TOKEN_SECRET,
  SESSION_SECRET,
  ACCESS_TOKEN_TTL = 900,
  REFRESH_TOKEN_TTL = 86400,
  REFRESH_TOKEN_SECRET
} = process.env

module.exports = {
  PORT,
  DATABASE_URL,
  DATABASE_POOL_MAX,
  SALT_WORK_FACTOR: parseInt(SALT_WORK_FACTOR, 10),
  ACCESS_TOKEN_SECRET,
  SESSION_SECRET,
  ACCESS_TOKEN_TTL: parseInt(ACCESS_TOKEN_TTL, 10),
  REFRESH_TOKEN_TTL: parseInt(REFRESH_TOKEN_TTL, 10),
  REFRESH_TOKEN_SECRET
}
