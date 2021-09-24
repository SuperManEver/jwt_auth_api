const bcrypt = require('bcrypt')
const { promisify } = require('util')

const { SALT_WORK_FACTOR } = require('../config')

const genSalt = promisify(bcrypt.genSalt)
const generatePasswordHash = promisify(bcrypt.hash)

async function encryptPassword(password) {
  const salt = await genSalt(SALT_WORK_FACTOR)
  return generatePasswordHash(password, salt)
}

module.exports = {
  genSalt,
  generatePasswordHash,
  encryptPassword
}
