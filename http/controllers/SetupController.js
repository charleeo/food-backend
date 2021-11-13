const models = require('../../models')
const states = require('../../custom-data/states.json')
const LGAs = require('../../custom-data/local_governments.json')
const admins = require('../../custom-data/adminRoles.json')

const SetupController ={
    setupData:async(req,res,next)=>{
        let status =false
        if(await createAdminRoles()){
            status=  true
        }
        if(await createStates()){
            status=  true
        }
        if(await createLGAs()){
            status=  true
        }
        if(status==true){

            res.status(201).json({message:"Set up data created successully"})
        }else{

            res.status(201).json({message:"Could not create set up data"})
        }
    }
}
module.exports = SetupController
 createStates=   async()=>{
   
    states.forEach( async(state)=>{
        let existingRecords = await models.State.findOne({where:{name:state.name}})
        if(existingRecords){
           records = await models.State.update(
                {name:existingRecords.name},
                {where:{name:state.name}}
                )
        }else{
            records= await models.State.create({name:state.name})
        }
    })
    
    return true
}
 createLGAs=   async()=>{
   
    LGAs.forEach( async(lga)=>{
        let existingRecords = await models.LGA.findOne({where:{name:lga.name}})
        if(existingRecords){
           records = await models.LGA.update(
                {name:existingRecords.name,state_id:existingRecords.state_id},
                {where:{name:lga.name}}
                )
        }else{
            records= await models.LGA.create({name:lga.name,state_id:lga.state_id})
        }
    })
    
    return true
}
 createAdminRoles=   async()=>{
   
    admins.forEach( async(admin)=>{
        let existingRecords = await models.AdminRole.findOne({where:{role_name:admin.name}})
        if(existingRecords){
           records = await models.AdminRole.update(
                {role_name:existingRecords.role_name},
                {where:{role_name:admin.name}}
                )
        }else{
            records= await models.AdminRole.create({role_name:admin.name})
        }
    })
    
    return true
}