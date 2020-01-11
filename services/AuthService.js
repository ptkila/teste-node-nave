const UserRepository = require('../repositories/UserRepository');
const TokenService = require('../services/TokenService');
const bcrypt = require('bcryptjs');

const login = async ({
    email,
    password
}) => {
    try {
        const user = await UserRepository.findByEmail(email);
        
        if (! user) {
            return {
                error: 1,
                message: "user not found",
                user: {},
            }
        };

        const passwordIsMatching = await passwordMatches(password, user.password);
        if (! passwordIsMatching) {
            return {
                error: 1,
                message: "user not found",
                user: {},
            }
        };

        return TokenService.generateToken(user);

    } catch (err) {
        return {
            error: 2,
            message: err.message
        }
    }
}

const logout = async user => {
    try {
        user.set('token', null);
        await user.save();
        return {
            error: 0,
            message: 'user logout',
        };
    } catch (err) {
        return {
            error: 1,
            message: 'error on logout',
        };
    }
}

const passwordMatches = async (password_a, password_b) => {
    return bcrypt.compareSync(password_a, password_b);
};

module.exports = {
    login: login,
    logout: logout,
}