const Application_Comment = require('../app/models').Application_Comment;

const create = async ({
    application_id,
    text
}) => Application_Comment.create({
    applicationId: application_id,
    text: text,
});

const find = async id => {
    return Application_Comment.findByPk(id)
};

const findByApplication = async applicationId => {
    return Application_Comment.findAll({
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