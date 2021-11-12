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
        let userType=null;
        const {name} = req.body
        const schema = Joi.object({
            name: Joi.string()
                .min(3)
                .max(30)
                // .alphanum()
                .required()
        })
        try {
            const {error,value}= schema.validate({ name});
      
            if(error){
                message = error.details[0].message
                statusCode  = 400
            } 
            else{
                //check if name alreay created            
                userType = await models.UserType.findOne({where:{name:name}})
                if(userType){
                    message = `This user type with name ${name} is already in the system`
                }else{
                    data = await models.UserType.create({name:name})
                    if(data){
                        message = "User type created succesfuly"
                        statusCode = 201
                        status = true
                        responseData = data
                    }else{
                        message = "Could not create a user type"
                    }
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
