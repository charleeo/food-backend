const models = require('../models')
 async function getUserType(column){
  const {dataValues} = await models.UserType.findOne({where:{name:column}})
  return dataValues    
}


module.exports={getUserType}