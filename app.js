require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const { passport, session } = require('./services/passport')

/**
 * Routes imports
 */
const authRoutes = require('./routes/api/auth')
const profileRoutes = require('./routes/api/profile')

const app = express()

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/**
 * Routes declaration
 */
app.use('/api', authRoutes)
app.use('/api/profile', profileRoutes)

module.exports = app
