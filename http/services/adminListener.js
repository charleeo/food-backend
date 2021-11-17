const express = require('express')
const app = express()
const models = require('../../models')
const userTypeConsts  = require('../../config/constants/UserTpe')
const {getUserType} = require('../../helpers/userType')

async function adminService(req, res, next){  
   const user = await getUserType(userTypeConsts.ADMIN)
   let result =null
   if(req.body.user_type_id == user.id){
      // let test= app.emit('adminCreate',req)
      // console.log(test)
     result = await createAdmin(req.body)
   } 
   req.type_id = result.id
   next()
}
    
// app.on('adminCreate',async function (req) {
//  const result = await createAdmin(req.body)
//  return result
// });  

async function createAdmin(data){
    const {surname,email,phone,first_name} = data
    const  adminData = {fullname:`${surname}  ${first_name}`,email,phone}
    const result = await models.Admin.create(adminData)
     return result
  }

module.exports = {
    adminService
}