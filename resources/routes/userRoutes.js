const express = require('express')
const { adminListener } = require('../../events/adminListener')
const UserController = require('../../http/controllers/UserController')
const authMiddleWare = require("../../middleware/auth_middleware")

const router = express.Router()

router.get('', UserController.getAllUsers)
router.get('/:id', authMiddleWare.checkAuth,  UserController.getAUser)
router.post('/save', adminListener, UserController.registerUser)
router.post('/update/:id', UserController.updateUsers)

router.post('/login', UserController.login)

module.exports = router