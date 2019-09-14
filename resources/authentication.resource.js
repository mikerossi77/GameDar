var crypto = require('crypto')
var _ = require('lodash')
var jwt = require('jsonwebtoken')
var models = require('../models')
module.exports = {
    _generateSalt() {
        return crypto.randomBytes(32).toString('hex')
    },
    _generateHash(salt, password) {
        return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    },
    _generateJWT(userInfo) {
        var expiry = new Date()
        expiry.setDate(expiry.getDate() + 7)
        return jwt.sign({
            userID: userInfo.id,
            name: userInfo.name,
            username: userInfo.username,
            email: userInfo.email,
            phone: userInfo.phone,
            height: userInfo.height,
            level: userInfo.level,
            exp: parseInt(expiry.getTime() / 1000)
        }, process.env.JWT_SECRET)
    },
    register(userInfo) {
        var user = _.pick(userInfo, ['email','name','username','height','phone','level'])
        user.salt = this._generateSalt()
        user.hash = this._generateHash(user.salt, userInfo.password)
        user.email = user.email.toLowerCase()
        return models.Users.create(user)
    },
    login(loginInfo) {
        var self = this;
        return new Promise(function (resolve, reject) {
            models.Users.findOne({
                where:
                    { username: loginInfo.username }
            })
                .then(function (foundUser) {
                    if (!foundUser) return reject(new Error('Username/Password Do Not Match'))
                    var testHash = self._generateHash(foundUser.salt, loginInfo.password)
                    if (foundUser.hash === testHash) {
                        resolve(self._generateJWT(foundUser))
                    }
                    else return reject(new Error('Username/Password Do Not Match'))

                })
                .catch(function (err) {
                    return reject(err)
                })
        })

    }
}
