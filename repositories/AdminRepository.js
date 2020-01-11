const Admin = require('../app/models').Admin;

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

const findByUserId = async userId => {
    return Admin.findOne({
        where: {
            userId: userId,
        }
    });
}

module.exports = {
    create: create,
    find: find,
    findByUserId: findByUserId,
}