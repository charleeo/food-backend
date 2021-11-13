const express = require('express')
const app = express()
const models = require('../models')
const userTypeConsts  = require('../config/constants/UserTpe')
const {getUserType} = require('../helpers/userType')

async function adminListener(req, res, next){  
   const user = await getUserType(userTypeConsts.ADMIN)
   next()
   if(req.body.user_type_id == user.id) app.emit('adminCreate',req)
}
    
app.on('adminCreate',async function (req) {
  await createAdmin(req.body)
});  

async function createAdmin(data){
    const {surname,email,phone,first_name} = data
    const  adminData = {fullname:`${surname}  ${first_name}`,email,phone}
     await models.Admin.create(adminData)
     return 
  }

module.exports = {
    adminListener
}