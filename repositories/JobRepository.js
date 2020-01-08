const Job = require('../models').Job;

const create = async ({
    name,
    description,
}) => Job.create({
    name: name,
    description: description,
});

const find = async id => {
    return Job.findByPk(id)
};

module.exports = {
    create: create,
    find: find,
}