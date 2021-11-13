const UserType = require('../config/constants/UserTpe')
const  models = require('../models')
const  UsertypeDefinition={
    userISAdmin: async(id)=>{
        let dataValues = await models.UserType.findByPk(id)
        if(dataValues.name  ==  UserType.ADMIN)  return true
        else return  false
    },
    userISRestaurant: async(id)=>{
        let {dataValues} = await models.UserType.findByPk(id)
        if(dataValues.name  ==  UserType.RESTAURANT)  return true
        else return  false
    },
    userISDispatcher: async(id)=>{
        let {dataValues} = await models.UserType.findByPk(id)
        if(dataValues.name  ==  UserType.DISPATCHER)  return true
        else return  false
    },
    userISOthers: async(id)=>{
        let {dataValues} = await models.UserType.findByPk(id)
        if(dataValues.name  ==  UserType.OTHERS)  return true
        else return  false
    }
}

module.exports = UsertypeDefinition