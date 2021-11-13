const express = require('express');
const userRoutes = require('./routes/userRoutes')
const usertypeRoute = require('./routes/usertypeRoute')
const setupRoute = require('./routes/setupRoute')
const UsertypeControler = require('../http/controllers/UsertypeControler');
const { testEvents } = require('../events/adminListener');
const app = express()
app.use(express.json())


app.use('/users/',userRoutes)
app.use('/user-type',usertypeRoute)
app.use('/setup',setupRoute)
// app.get('/test', testEvents, UsertypeControler.testEvent)
// app.use('/school/',schoolRoutes)

app.on('testEvent', function () {
    return console.log('responded to testEvent');
  });
  
  app.get('/test', function (req, res) {
    app.emit('testEvent');
    return res.status(200).end();
  });


module.exports = app

