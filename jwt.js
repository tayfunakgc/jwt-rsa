const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

const privateKey = fs.readFileSync(path.join(__dirname, 'keys', 'rsa.key'), 'utf8')
const publicKey = fs.readFileSync(path.join(__dirname, 'keys', 'rsa.key.pub'), 'utf8')


module.exports = {

    signToken: (payload) => {
        try {
            return jwt.sign(payload, privateKey, { algorithm: 'RS256'});
        } catch (err) {
            /*
                TODO throw http 500 here 
                ! Dont send JWT error messages to the client
                ! Let exception handler handles this error
            */
            throw err
        }
    },

    verifyToken: (token) => {
        try {
            return jwt.verify(token, publicKey, { algorithm: 'RS256'});
        } catch (err) {
            /*
                TODO throw http 500 here 
                ! Dont send JWT error messages to the client
                ! Let exception handler handles this error
            */
            throw err
        }
    }

}