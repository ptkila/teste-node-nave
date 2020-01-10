const router = require('express').Router();
const ApplicationController = require('../controllers/ApplicationController');
const ApplicationCommentController = require('../controllers/ApplicationCommentController');
const Validator = require('../validator/validator');

router.get('/list', (req, res, next) => {
    if (!req.admin) {
        return ApplicationController.listCandidate(req, res);
    }
    return ApplicationController.listAdmin(req, res);
});

router.get('/:application_id/comments', Validator.validationRules('application-list-comments'), (req, res, next) => {
    const errors = Validator.validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    if (!req.admin) {
        return res.status(403).json({
            message: 'only admin can access'
        });
    }
    return ApplicationController.listApplicationComments(req, res);
});

router.post('/comment', Validator.validationRules('application-comment'), (req, res, next) => {
    const errors = Validator.validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        })
    }
    if (!req.admin) {
        return res.status(403).json({
            message: 'only admin can access'
        });
    }
    return ApplicationCommentController.create(req, res);
});

module.exports = {
    router: router,
}