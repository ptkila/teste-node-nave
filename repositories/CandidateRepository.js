const Candidate = require('../app/models').Candidate;

const create = async ({
    name,
    userId,
    email,
    phone,
    cpf,
}) => Candidate.create({
    name: name,
    user_id: userId,
    email: email,
    phone: phone,
    cpf: cpf,
});

const find = async id => {
    return Candidate.findByPk(id);
};

module.exports = {
    create: create,
    find: find,
}