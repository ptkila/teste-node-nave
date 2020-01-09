const AdminRepository = require('../../repositories/AdminRepository');
const UserRepository = require('../../repositories/UserRepository');
const helperMethods = require('../../helpers/methods');
const reqNeededReqBody = ['name', 'password', 'password_confirmation', 'email']; 

const register = async (req, res) => {

    // TODO: REQUEST VALIDATION
    let reqBody = req.body;

    if(! helperMethods.equalStrings(reqBody.password, reqBody.password_confirmation)) {
        return res.json({message:'Passwords are different'});
    }

    try {
        reqBody.role = 'App\\Admin';
        var newUser =  await UserRepository.create(reqBody);
    } catch(err) {
        return res.json({message: err.errors[0].message});
    }

    try {
        reqBody.userId = newUser.id;
        await AdminRepository.create(reqBody);
    } catch (err) {
        await newUser.destroy();
        return res.json({message: err.errors[0].message});
    }

    return res.json({message: 'Success creating new admin', user: newUser});
}

module.exports = {
    register: register,
}