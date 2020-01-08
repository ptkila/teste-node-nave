const Admin = require('../models').Admin;

const create = async ({
    name,
    userId,
}) => Admin.create({
    name: name,
    userId: userId,
});

const find = async id => {
    return Admin.findByPk(id)
};

module.exports = {
    create: create,
    find: find,
}