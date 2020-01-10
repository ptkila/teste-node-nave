const router = require('express').Router();
const registerCandidateController = require('../controllers/RegisterCandidateController');
const Validator = require('../validator/validator');

router.post('/', Validator.validationRules('candidate-register'), (req, res) => {
    const errors = Validator.validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    return registerCandidateController.register(req, res);
});

module.exports = {
    router: router,
}