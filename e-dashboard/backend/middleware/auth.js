const Jwt = require('jsonwebtoken')
const secretkey = "komalkahrche"

function verifyToken(req,res,next){
    let token = req.headers['authorization'];
    if(token){
        token = token.split(" ")[1];
        Jwt.verify(token, secretkey,(err,valid)=>{
            if(err){
                res.status(401).send({result : "Please provide valid token", error: err})
            }else{
                next()
            }
        })
    }else{
        res.status(403).send({result : "Please send token in header",token:token})
    }
}

module.exports = verifyToken;