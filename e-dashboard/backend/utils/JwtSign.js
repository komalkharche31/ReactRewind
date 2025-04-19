const Jwt = require('jsonwebtoken')
const secretkey = "komalkahrche"

const SignToken = (playload, expiresIn = "1h")=>{
    try {
        const token = Jwt.sign(playload,secretkey , {expiresIn})
            return { success: true, token };
        
    } catch (error) {
        //console.error("Error signing JWT:", error.message);
        return { success: false, error: "Token generation failed" };
    }
}

module.exports = { SignToken}