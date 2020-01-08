const UserService = require('../../services/UserService');

const find = async (req, res) => {
    const data = await UserService.find(req.params.id);
    return res.json({
        data
    });
}

const findByEmail = async (req, res) => {
    const data = await UserService.findByEmail(req.params.email);
    return res.json({
        data
    });
}

const create = async (req, res) => {
    const data = await UserService.create(req.body);
    return res.status(201).json({
        data
    });
}

module.exports = {
    create: create,
    findByEmail: findByEmail,
    find: find,
}
