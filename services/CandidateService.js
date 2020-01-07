const Candidate = require('../app/models').Candidate;

const create = async ({
    
}) => Candidate.create({
    email: email,
    password: password,
    role: role,
});

const find = async id => {
    return Candidate.findByPk(id);
};

module.exports = {
    create: create,
    find: find,
}