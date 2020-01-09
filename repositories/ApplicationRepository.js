const Application = require('../app/models').Application;

const create = async ({
    candidateId,
    jobId,
}) => Application.create({
    candidateId: candidateId,
    jobId: jobId,
});

const find = async id => {
    return Application.findByPk(id)
};

const findByCandidate = async candidateId => {
    return Application.findOne({
        where: {
            candidateId: candidateId,
        }
    })
};

const findByJob = async jobId => {
    return Application.findOne({
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

module.exports = {
    create: create,
    find: find,
    findByCandidate: findByCandidate,
    findByJob: findByJob,
    findByCandidateAndJob: findByCandidateAndJob,
}

