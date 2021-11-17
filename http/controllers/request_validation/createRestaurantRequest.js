const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(225)
        .required(),
    
    address: Joi.string()
        .min(3)
        .max(225)
        .required(),
    phone: Joi.string()
        .min(9)
        .max(13)
        .required(),
    lga_id: Joi.number().required(),
    
    email: Joi.string() .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','info','ng'] } }).required()
})
const validateRestaurant=(req)=>{
    const {name,phone,address,email,lga_id} = req.body
    const {error,value}= schema.validate({name,phone,address, email,lga_id});
    return error
}

module.exports = {validateRestaurant}