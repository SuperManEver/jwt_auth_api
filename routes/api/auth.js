const express = require('express')
const router = express.Router()

router.post('/login', function (req, res, next) {
  res.json({ login: 'ok' })
})

module.exports = router
