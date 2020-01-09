const ApplicationRepository = require('../../repositories/ApplicationRepository');
const JobRepository = require('../../repositories/JobRepository');

const helperMethods = require('../../helpers/methods');

const create = async (req, res) => {
    const params = req.body;
    try {
        var job = await JobRepository.create(params);
    } catch(err) {
        return res.json({message: err.message});
    }
    return res.json({message:'success', job: job});
}

const apply = async (req, res) => {
    return res.json({message:'apply'});
}

module.exports = {
    apply: apply, 
    create: create, 
}