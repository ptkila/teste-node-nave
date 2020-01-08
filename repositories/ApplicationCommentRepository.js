const Application_Comment = require('../models').Application_Comment;

const create = async ({
    applicationId,
    text
}) => Application_Comment.create({
    applicationId: applicationId,
    text: text,
});

const find = async id => {
    return Application_Comment.findByPk(id)
};

const findByApplication = async applicationId => {
    return Application_Comment.findOne({
        where: {
            applicationId: applicationId,
        }
    })
};

module.exports = {
    create: create,
    find: find,
    findByApplication: findByApplication,
}