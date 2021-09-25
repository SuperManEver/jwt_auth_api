require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

/**
 * Routes imports
 */
const authRoutes = require('./routes/api/auth')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/**
 * Routes declaration
 */
app.use('/api', authRoutes)

module.exports = app
