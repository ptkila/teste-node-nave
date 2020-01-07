const Admin = require('../models').Admin;

const create = async ({
   
}) => Admin.create({
    
});

const find = async id => {
    Admin.findByPk(id)
};

module.exports = {
    create: create,
    find: find,
}