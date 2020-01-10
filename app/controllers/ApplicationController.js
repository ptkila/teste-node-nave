const ApplicationRepository = require('../../repositories/ApplicationRepository');
const ApplicationCommentRepository = require('../../repositories/ApplicationCommentRepository');
const CandidateRepository = require('../../repositories/CandidateRepository');

const listAdmin = async (req, res) => {
    try {
        var applications = await ApplicationRepository.list();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    return res.status(200).json({
        message: 'success',
        applications: applications
    });
}

const listCandidate = async (req, res) => {

    const userId = req.user.id;

    try {
        var candidate = await CandidateRepository.findByUserId(userId);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    try {
        var applications = await ApplicationRepository.findByCandidate(candidate.id);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    return res.status(200).json({
        message: 'success',
        applications: applications
    });
}

const listApplicationComments = async (req, res) => {
    
    const applicationId = req.params.application_id;

    try {
        var application = await ApplicationRepository.find(applicationId);
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
        var application_comments = await ApplicationCommentRepository.findByApplication(applicationId);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    return res.status(200).json({
        message: 'success',
        application_comments: application_comments
    });
}

module.exports = {
    listAdmin: listAdmin,
    listCandidate: listCandidate,
    listApplicationComments: listApplicationComments,
}