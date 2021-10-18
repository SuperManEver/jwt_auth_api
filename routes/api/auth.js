const express = require('express')
const router = express.Router()

const AuthController = require('../../controllers/auth')
const { passport } = require('../../services/passport')

router.post('/login', (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    await AuthController.validateLoginParams(req.body)

    if (err) {
      return next(err)
    }

    if (!user) {
      return res.status(400).json({ message: 'Error' })
    }

    req.login(user, async () => {
      const data = AuthController.login(user)

      res.json({ data })
    })
  })(req, res, next)
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
