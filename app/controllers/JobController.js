const ApplicationRepository = require('../../repositories/ApplicationRepository');
const JobRepository = require('../../repositories/JobRepository');
const CandidateRepository = require('../../repositories/CandidateRepository');

const create = async (req, res) => {
    if (!req.admin) {
        return res.status(403).json({
            message: 'only admin can access'
        });
    }

    const params = req.body;
    try {
        var job = await JobRepository.create(params);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
    return res.status(200).json({
        message: 'success',
        job: job
    });
}

const apply = async (req, res) => {

    if (req.admin) {
        return res.status(403).json({
            message: 'only candidate can access'
        });
    }

    const params = req.body;
    const userId = req.user.id;

    try {
        var candidate = await CandidateRepository.find(params.candidate_id);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    if (!candidate) {
        return res.status(404).json({
            message: 'candidate not found'
        });
    }

    if (candidate.userId != userId) {
        return res.status(403).json({
            message: 'candidate invalid'
        });
    }

    try {
        var jobExists = await JobRepository.find(params.job_id);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    if (!jobExists) {
        return res.status(404).json({
            message: 'Job not found'
        });
    }

    try {
        var applicationExists = await ApplicationRepository.findByCandidateAndJob(params.candidate_id, params.job_id);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    if (applicationExists) {
        return res.status(409).json({
            message: 'already applied to job'
        });
    }

    try {
        var application = await ApplicationRepository.create(params);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    return res.status(201).json({
        message: 'success',
        application: application
    });

}

const list = async (req, res) => {
    try {
        var jobs = await JobRepository.list();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    return res.status(200).json({
        message: 'success',
        jobs: jobs
    });
}

module.exports = {
    apply: apply,
    create: create,
    list: list, 
}