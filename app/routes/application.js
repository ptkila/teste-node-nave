const router = require('express').Router();
const ApplicationController = require('../controllers/ApplicationController');
const ApplicationCommentController = require('../controllers/ApplicationCommentController');

router.get('/list', (req, res, next) => {
    if (!req.admin) {
        return ApplicationController.listCandidate(req, res);
    }
    return ApplicationController.listAdmin(req, res);
});

router.get('/:application_id/comments', (req, res, next) => {
    if (!req.admin) {
        return res.status(403).json({
            message: 'only admin can access'
        });
    }
    return ApplicationController.listApplicationComments(req, res);
});

router.post('/comment', (req, res, next) => {
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