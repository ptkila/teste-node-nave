const CandidateRepository = require('../../repositories/CandidateRepository');
const UserRepository = require('../../repositories/UserRepository');
const helperMethods = require('../../helpers/methods');

const register = async (req, res) => {

    let params = req.body;

    if (!helperMethods.equalStrings(params.password, params.password_confirmation)) {
        return res.status(422).json({
            message: 'Passwords are different'
        });
    }

    try {
        params.role = 'App\\Candidate';
        var newUser = await UserRepository.create(params);
    } catch (err) {
        return res.status(500).json({
            message: err.errors[0].message
        });
    }

    try {
        params.userId = newUser.id;
        var newCandidate = await CandidateRepository.create(params);
    } catch (err) {
        await newUser.destroy();
        return res.status(500).json({
            message: err.errors[0].message
        });
    }

    return res.status(201).json({
        message: 'success',
        user: newUser,
        candidate: newCandidate
    });
}

module.exports = {
    register: register,
}