const router = require('express').Router();
const registerAdminController = require('../controllers/RegisterAdminController');
const Validator = require('../validator/validator');

router.post('/', Validator.validationRules('admin-register'), (req, res, next) => {
    const errors = Validator.validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    if (! req.admin) {
        return res.status(403).json({message: 'only admin can access'});
    }
    return registerAdminController.register(req, res);
});

module.exports = {
    router: router,
}