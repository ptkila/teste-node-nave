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

module.exports = {
    generateToken: generateToken,
    validateToken: validateToken,
}