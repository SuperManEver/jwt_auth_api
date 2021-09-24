const Joi = require('joi')

const registrationParamsSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  username: Joi.string().alphanum().min(3).max(30).required()
})

async function register(userData) {
  const values = await registrationParamsSchema.validateAsync(userData)

  console.log(values)

  return userData
}

module.exports = {
  register
}
