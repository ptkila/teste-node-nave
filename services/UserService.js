const User = require('../app/models').User;

const create = async ({
    email,
    password,
    role,
}) => User.create({
    email: email,
    password: password,
    role: role,
});

const find = async id => {
    return User.findByPk(id);
};

const findByEmail = async email => {
    return User.findOne({
        where: {
            email: email,
        }
    })
};

module.exports = {
    create: create,
    find: find,
    findByEmail: findByEmail,
}