const express = require('express')
const multer = require('multer')

const RestaurantController = require('../../http/controllers/Restaurantcontroller')
const authMiddleWare = require("../../middleware/auth_middleware")
const { restaurantMiddleware } = require('../../middleware/restaurant_middleware')

const router = express.Router()

// router.get('/:id', authMiddleWare.checkAuth,  UserController.getAUser)
router.post('/save', authMiddleWare.checkAuth, restaurantMiddleware, RestaurantController.createRestaurant)

// const storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//       callback(null, '/src/my-images');
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.fieldname);
//     }
//   });
const upload = multer({dest:"/public/images"})
router.post('/upload-image', upload.single('avatar'), RestaurantController.uploadRestaurantLogo)
// router.post('/update/:id', UserController.updateUsers)

module.exports = router