const logUtils = require('../../logutils')
const models = require('../../models')
const {sequelize} = require('../../models')
const {validateRestaurant} = require("./request_validation/createRestaurantRequest")
const {adminService} = require('../services/adminservices')
                            

const RestaurantController ={
    async createRestaurant(req,res){
        let  status  = false;
        let statusCode = 201
        let responseData = null;
        let message = ""
        let result =null
        let error = null
        const transaction = await sequelize.transaction()//declare the transaction object
        const { name, email,lga_id,address,phone } = req.body
    
      try {
           error = validateRestaurant(req)
            if(error){
                message = error.details[0].message
                statusCode  = 400
            } else{
    
            const checkIfResstaurantExists = await models.Restaurant.findOne({where:{name}});
            
            if(checkIfResstaurantExists){
                statusCode = 409
                message = `Restaurant with this name ${name} already exists`
            }else{
                let restaurant = { lga_id, address,phone,name,email}
                                 
                result =  await models.Restaurant.create(restaurant,{transaction})
                if(result){
                    await transaction.commit()
                    responseData = result
                    message = "Restau rant created successfully"
                    status = true
                }else {
                    transaction.rollback()
                    message="Could not create a user"
                }
            }
        }
        
        } catch (err) { 
            transaction.rollback()
            message = "There  is a server error"
            statusCode = 500
            error = err.message 
            logUtils.logErrors(err)
        }
            logUtils.logData(error? error:responseData,req,res,message,statusCode,status)
            res.status(statusCode).json({ status, responseData, message })
       },

       uploadRestaurantLogo:async(req,res)=>{
        let  status  = false;
        let statusCode = 201
        let responseData = null;
        let message = ""
        let result =null
        let error = null
          try {
             console.log(req.file)
          } catch (err) {
            message = "There  is a server error"
            statusCode = 500
            error = err.message 
            logUtils.logErrors(err)
        }
            logUtils.logData(error? error:responseData,req,res,message,statusCode,status)
            res.status(statusCode).json({ status, responseData, message })
       }
}


module.exports = RestaurantController