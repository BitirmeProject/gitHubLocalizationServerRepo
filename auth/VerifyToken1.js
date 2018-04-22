let jwt = require('jsonwebtoken');
let config = require('../config');

function verifyToken(req, res, next) {
    
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'Token Bulunamadi..' });
    }
    jwt.verify(token, config.secretLevelOne, function (err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Token Dogrulamasi Basarisiz..' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;