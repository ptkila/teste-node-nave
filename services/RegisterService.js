const TokenService = require('./TokenService');
const UserRepository = require('../repositories/UserRepository');

const registerAdmin = async user => {
    const newUser = await UserRepository.create(user);
    return TokenService.generateToken(newUser);
}

const registerCandidate = async user => {
    const newUser = await UserRepository.create(user);
    return TokenService.generateToken(newUser);
}

module.exports = {
    registerAdmin: registerAdmin,
    registerCandidate: registerCandidate,
}