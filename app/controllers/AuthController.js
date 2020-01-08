const AuthService = require('../../services/AuthService');

const login = async (req, res) => {
    const response = await AuthService.login(req.body);
    return res.json(response);
}

const logout = async (req, res) => {
    await AuthService.logout(req.params.user);
    return res.status(204).json({
        message: 'Logged out successfully'
    });
}

module.exports = {
    login: login,
    logout: logout,
}
