const Joi = require('joi')
const logUtils = require('../../logutils')
const models = require('../../models')
const  UserTYpeController ={
   createUserTYpe:async(req,res,next)=>{
        let  status  = false;
        let statusCode = 200
        let responseData = null;
        let message = ""
        let error =null
        let data =null;
        const {name} = req.body
        // res.status(200).json(name)
        // return
        
        try {
            if(name.length >1){
                message = "Name field is required and must be up to two characters"
            }
            else{
                //check if name alreay created            
                const userType = await models.UserType.findOne({where:{name:name}})
                if(userType){
                    message = `This user type with name ${name} is already in the system`
                }
                data = await models.UserType.create(name)
                if(data){
                    message = "User type created succesfuly"
                    statusCode = 201
                    status = true
                    responseData = data
                }else{
                    message = "Could not create a user type"
                }

            }
        } catch (err) {
            statusCode = 500
            res.status(statusCode)
            logUtils.logErrors(err)
            message = "There was an error"
        }

        logUtils.logData(error? error:responseData,req,res,message,statusCode,status)
        res.status(statusCode).json({ status, responseData, message })
   }
}

module.exports = UserTYpeController
