const router = require('express').Router();
const JobController = require('../controllers/JobController');
const Validator = require('../validator/validator');

router.get('/list', (req, res, next) => {
    return JobController.list(req, res);
});

router.post('/apply', Validator.validationRules('job-apply'), (req, res, next) => {
    const errors = Validator.validationResult(req)
    if (! errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    if (req.admin) {
        return res.status(403).json({message: 'only candidate can access'});
    }
    return JobController.apply(req, res);
});

router.post('/create', Validator.validationRules('job-create'), (req, res, next) => {
    const errors = Validator.validationResult(req)
    if (! errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    if (! req.admin) {
        return res.status(403).json({message: 'only admin can access'});
    }
    return JobController.create(req, res);
});

module.exports = {
    router: router,
}
