const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const Validator = require('../validator/validator');

router.post('/', Validator.validationRules('login'), (req, res, next) => {
    const errors = Validator.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    return AuthController.login(req, res);
});

module.exports = {
    router: router,
}