const express = require('express')
const SetupController = require('../../http/controllers/SetupController')


const router = express.Router()

router.get('/', SetupController.setupData)

module.exports = router