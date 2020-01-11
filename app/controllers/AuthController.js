const AuthService = require('../../services/AuthService');
const CandidateRepository = require('../../repositories/CandidateRepository');
const AdminRepository = require('../../repositories/AdminRepository');

const login = async (req, res) => {
    var response = await AuthService.login(req.body);
    if (response.error == 1) {
        return res.status(404).json({
            message: response.message
        });
    } else if (response.error == 2) {
        return res.status(500).json({
            message: response.message
        });
    } else {
        if (response.user.role == 'App\\Admin') {
            var admin = await AdminRepository.findByUserId(response.user.id);
            response.admin = admin;
        } else {
            var candidate = await CandidateRepository.findByUserId(response.user.id);
            response.candidate = candidate;
        }
        return res.status(200).json(response);
    }
}

const logout = async (req, res) => {
    const response = await AuthService.logout(req.user);
    if (response.error == 0) {
        return res.status(204).json({
            message: response.message
        });
    } else {
        return res.status(500).json({
            message: response.message
        });
    }
}

module.exports = {
    login: login,
    logout: logout,
}