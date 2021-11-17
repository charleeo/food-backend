const express = require('express');
const userRoutes = require('./routes/userRoutes')
const usertypeRoute = require('./routes/usertypeRoute')
const setupRoute = require('./routes/setupRoute')
const UsertypeControler = require('../http/controllers/UsertypeControler');
const { testEvents } = require('../http/services/adminListener');
const restaurantRoutes = require('./routes/restaurantRoute')
const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use('/users/',userRoutes)
app.use('/user-type',usertypeRoute)
app.use('/setup',setupRoute)
app.use('/restaurants',restaurantRoutes)
// app.get('/test', testEvents, UsertypeControler.testEvent)
// app.use('/school/',schoolRoutes)


module.exports = app

