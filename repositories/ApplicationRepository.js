const Application = require('../app/models').Application;

const create = async ({
    candidate_id,
    job_id,
}) => Application.create({
    candidateId: candidate_id,
    jobId: job_id,
});

const find = async id => {
    return Application.findByPk(id);
};

const findByCandidate = async candidateId => {
    return Application.findAll({
        where: {
            candidateId: candidateId,
        }
    })
};

const findByJob = async jobId => {
    return Application.findAll({
        where: {
            jobId: jobId,
        }
    })
};

const findByCandidateAndJob = async (candidateId, jobId) => {
    return Application.findOne({
        where: {
            candidateId: candidateId,
            jobId: jobId,
        }
    })
};

const list = async => {
    return Application.findAll();
}

module.exports = {
    create: create,
    find: find,
    findByCandidate: findByCandidate,
    findByJob: findByJob,
    findByCandidateAndJob: findByCandidateAndJob,
    list: list,
}

