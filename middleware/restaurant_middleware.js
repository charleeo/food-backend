const UserType = require('../config/constants/UserTpe')
const { getUserType } = require('../helpers/userType')
const logUtils = require('../logutils');
const { user } = require('./auth_middleware');
const models = require('../models')
const restaurantMiddleware = async(req,res,next)=>{
    let  status  = false;
    let statusCode = 201
    let responseData = null;
    let message = ""
    const authUser = await models.User.findByPk(user(req).id)
    const user_type = await getUserType(UserType.RESTAURANT)
    if(!authUser){
        statusCode=401
        message = "You must be logged in to access this resource"
        logUtils.logData(responseData,req,res,message,statusCode,status)
        res.status(statusCode).json({ status, responseData, message })
    }else if(authUser.user_type_id != user_type.id){
        statusCode = 403
        message = "You need to be restaurant operator to access this resource"
        logUtils.logData(responseData,req,res,message,statusCode,status)
        res.status(statusCode).json({ status, responseData, message })
    }else next()

}

module.exports = {restaurantMiddleware}