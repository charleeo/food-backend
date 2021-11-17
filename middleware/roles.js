const jwt = require('jsonwebtoken');
const config = require('../config/config');
const LogUtils = require('../logutils');


function roles(req, res, next){   
     
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            res.status(400).json('Please provide a token')}
        else{
            const decodedToken = jwt.verify(token,config.jwt_secrete);
            req.userData = decodedToken;
            next();
        }
        
    } catch (err) {
        LogUtils.logErrors(err)
        res.status(401).json(error.message)
    }
}

function user(req){  
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token,config.jwt_secrete);
    return decodedToken;
}

module.exports = {
    checkAuth,user
}