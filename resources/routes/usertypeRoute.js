const express = require('express')
const UserTYpeController = require('../../http/controllers/UsertypeControler')

const router = express.Router()

router.post('', UserTYpeController.createUserTYpe)


module.exports = router;