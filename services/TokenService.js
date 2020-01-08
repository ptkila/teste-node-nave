const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/UserRepository');

const generateToken = async user => {

    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET, {
        expiresIn: 5000
    });

    user.set('token', token);

    await user.save();

    const {
        id,
        email,
        role
    } = user;

    return {
        token,
        user: {
            id,
            email,
            role,
        },
    }
}

const validateToken = async token => {
    try {

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await UserRepository.find(decodedToken.id);
        
        if (user.token !== token) {
            return {
                message: 'Token invalid',
                error: 1,
                user: {},
            };
        };
        
        return {
            message: 'Token validated',
            error: 0,
            user: user,
        };

    } catch (err) {
        return {
            message: err.message,
            error: 1,
            user: {},
        };
    }
}

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

module.exports = {
    generateToken: generateToken,
    validateToken: validateToken,
}