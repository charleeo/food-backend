const models = require('../../models')
const userTypes = require('../../custom-data/userTypes.json')
const { user } = require('../../middleware/auth_middleware')
const UsertypeDefinition = require('../../middleware/userTypeDefinition')

createType =   async()=>{
  
   userTypes.forEach( async(type)=>{
       let existingRecords = await models.UserType.findOne({where:{name:type.name}})
       if(existingRecords){
          records = await models.UserType.update(
               {name:existingRecords.name},
               {where:{name:type.name}}
               )
       }else{
           records= await models.UserType.create({name:type.name})
       }
   })
   
   return true
}
const UserTYpeController ={
    createUserTYpe:async(req,res,next)=>{
        let status =false
        // if(UsertypeDefinition.userISAdmin(user(req).id)){
        //     console.log("User is acting for Admin")
        // }
        if(await createType()){
            status=  true
        }
        if(status==true){

            res.status(201).json({message:"User type created successully"})
        }else{

            res.status(201).json({message:"Could not create user type"})
        }
    }
}
module.exports = UserTYpeController
 

