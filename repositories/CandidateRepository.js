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

const findByUserId = async userId => {
    return Candidate.findOne({
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