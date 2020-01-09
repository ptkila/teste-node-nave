const Candidate = require('../app/models').Candidate;

const create = async ({
    name,
    userId,
    phone,
    cpf,
}) => Candidate.create({
    name: name,
    userId: userId,
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