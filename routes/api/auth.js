const express = require('express')
const router = express.Router()

const AuthController = require('../../controllers/auth')

router.post('/login', function (req, res, next) {
  res.json({ login: 'ok' })
})

router.post('/register', async (req, res) => {
  try {
    const newUser = await AuthController.register(req.body)

    res.status(201).json(newUser)
  } catch (err) {
    console.error(err)
    res.status(400).send({ message: 'Error' })
  }
})

module.exports = router
