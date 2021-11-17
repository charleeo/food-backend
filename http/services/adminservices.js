const express = require('express')
const app = express()
const models = require('../../models')
const AdminRole  = require('../../config/constants/adminRoles')
const UserTypeConsts  = require('../../config/constants/UserTpe')
const {getUserType} = require('../../helpers/userType')

async function adminService(req,transaction){  
   const user = await getUserType(UserTypeConsts.ADMIN)
   let result =null
   type_id =null;

   if(req.user_type_id == user.id){
     result = await createAdmin(req,transaction)
   } 
    return result
}
    

async function createAdmin(data,transaction){
    let role_id =null;
    const {surname,email,phone,first_name} = data
    if(data.role_id){
        role_id=data.role_id
    }else{
        role = await models.AdminRole.findOne({where:{role_name:AdminRole.SUPERADMIN}})
        role_id = role.id
    }
    let  adminData = {fullname:`${surname}  ${first_name}`,email,phone}
    adminData.role_id = role_id
    const result = await models.Admin.create(adminData,{transaction})
     return result
  }

module.exports = {
    adminService
}