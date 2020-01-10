const AdminRepository = require('../../repositories/AdminRepository');
const UserRepository = require('../../repositories/UserRepository');
const helperMethods = require('../../helpers/methods');
const reqNeededParams = ['name', 'password', 'password_confirmation', 'email'];

const register = async (req, res) => {

    // TODO: REQUEST VALIDATION
    let params = req.body;

    if (!helperMethods.equalStrings(params.password, params.passwordConfirmation)) {
        return res.status(200).json({
            message: 'Passwords are different'
        });
    }

    try {
        params.role = 'App\\Admin';
        var newUser = await UserRepository.create(params);
    } catch (err) {
        return res.status(500).json({
            message: err.errors[0].message
        });
    }

    try {
        params.userId = newUser.id;
        await AdminRepository.create(params);
    } catch (err) {
        await newUser.destroy();
        return res.status(500).json({
            message: err.errors[0].message
        });
    }

    return res.status(201).json({
        message: 'success',
        user: newUser
    });
}

module.exports = {
    register: register,
}