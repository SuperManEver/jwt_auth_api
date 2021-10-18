const Joi = require('joi')
const omit = require('lodash/omit')

const { signAccessToken } = require('../services/auth')

const registrationParamsSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  username: Joi.string().alphanum().min(3).max(30).required()
})

const loginParamsSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
})

async function register(userData) {
  const values = await registrationParamsSchema.validateAsync(userData)

  return values
}

function login(userObj) {
  const data = omit(userObj, ['password', 'createdAt', 'updatedAt'])

  return { user: data, accessToken: signAccessToken(data) }
}

async function validateLoginParams(params) {
  return loginParamsSchema.validateAsync(params)
}

module.exports = {
  register,
  login,
  validateLoginParams
}
