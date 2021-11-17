const express = require('express')
const app = express()
const models = require('../../models')
const userTypeConsts  = require('../../config/constants/UserTpe')
const {getUserType} = require('../../helpers/userType')
const { randomString } = require('../../helpers/helpers')
const RestaurantConstant = require('../../config/constants/restaurntAdminConstants')
const {sequelize } = require('../../models')

async function restaurantService(req,transaction){  
   const user = await getUserType(userTypeConsts.RESTAURANT)
   let result =null
     
   if(req.user_type_id == user.id){
     result = await createAdmin(req,transaction)
   } 
    return result
}
  

async function createAdmin(data,transaction){
    const  restaurant_identifier = randomString(10)
    let role_id=null
    if(data.role_id){
        role_id=data.role_id
    }else{
        role = await models.RestaurantRole.findOne({where:{role_name:RestaurantConstant.SUPERADMIN}})
        role_id = role.id
    }
    const {surname,email,phone,first_name} = data
    const  adminData = {fullname:`${surname}  ${first_name}`,email,phone,role_id,restaurant_identifier}
    const result = await models.RestaurantUser.create(adminData,{transaction})
     return result
  }

module.exports = {
    restaurantService
}