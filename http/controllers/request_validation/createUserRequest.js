const Joi = require('joi')

const schema = Joi.object({
    user_name: Joi.string()
        .min(3)
        .max(30)
        .alphanum()
        .required(),
    surname: Joi.string()
        .min(3)
        .max(30)
        .alphanum()
        .required(),
    first_name: Joi.string()
        .min(3)
        .max(30)
        .alphanum()
        .required(),
    address: Joi.string()
        .min(3)
        .max(30)
        .required(),
    phone: Joi.string()
        .min(9)
        .max(12)
        .required(),
    lga_id: Joi.number().required(),
    user_type_id: Joi.number().required(),
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6),
    email: Joi.string() .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','info','ng'] } }).required()
})
const validateUser=(req)=>{
    const {surname,first_name,phone,address, user_name,email,password,lga_id,user_type_id} = req.body
    const {error,value}= schema.validate({surname,first_name,phone,address, user_name,email,password,lga_id,user_type_id});
    return error
}

module.exports = {validateUser}