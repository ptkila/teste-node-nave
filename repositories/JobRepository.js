const Job = require('../app/models').Job;

const create = async ({
    name,
    description,
}) => Job.create({
    name: name,
    description: description,
});

const find = async id => {
    return Job.findByPk(id);
};

const list = async =>{
    return Job.findAll();
}

module.exports = {
    create: create,
    find: find,
    list:list,
}