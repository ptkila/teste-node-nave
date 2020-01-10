const ApplicationCommentRepository = require('../../repositories/ApplicationCommentRepository');
const ApplicationRepository = require('../../repositories/ApplicationRepository');

const create = async (req, res) => {
    const params = req.body;

    try {
        var application = await ApplicationRepository.find(params.application_id);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    if (!application) {
        return res.status(404).json({
            message: 'application not found'
        });
    }

    try {
        var applicationComment = await ApplicationCommentRepository.create(params);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    return res.status(201).json({
        message: 'success',
        application_comment: applicationComment
    });
}

module.exports = {
    create: create,
}