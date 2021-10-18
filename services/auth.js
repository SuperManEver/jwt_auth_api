const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const omit = require('lodash/omit')
const { promisify } = require('util')

const {
  SALT_WORK_FACTOR,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_TTL
} = require('../config')

const genSalt = promisify(bcrypt.genSalt)
const generatePasswordHash = promisify(bcrypt.hash)

async function encryptPassword(password) {
  const salt = await genSalt(SALT_WORK_FACTOR)
  return generatePasswordHash(password, salt)
}
function signAccessToken(params) {
  const body = { _id: params.id, ...omit(params, ['id']) }

  return jwt.sign({ user: body }, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_TTL
  })
}

module.exports = {
  genSalt,
  generatePasswordHash,
  encryptPassword,
  signAccessToken
}
