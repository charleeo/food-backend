const express = require('express');
const userRoutes = require('./routes/userRoutes')
const usertypeRoute = require('./routes/usertypeRoute')
const setupRoute = require('./routes/setupRoute')

const app = express()
app.use(express.json())


app.use('/users/',userRoutes)
app.use('/user-type',usertypeRoute)
app.use('/setup',setupRoute)
// app.use('/school/',schoolRoutes)


module.exports = app

