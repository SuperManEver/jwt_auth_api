const express = require('express')
const router = express.Router()

const { passport } = require('../../services/passport')

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log('PROTECTED: ', req.user)

    res.json({ message: 'awesome' })
  }
)

module.exports = router
