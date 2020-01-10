const router = require('express').Router();
const JobController = require('../controllers/JobController');

router.get('/list', (req, res, next) => {
    return JobController.list(req, res);
});

router.post('/apply', (req, res, next) => {
    if (req.admin) {
        return res.status(403).json({message: 'only candidate can access'});
    }
    return JobController.apply(req, res);
});

router.post('/create', (req, res, next) => {
    if (! req.admin) {
        return res.status(403).json({message: 'only admin can access'});
    }
    return JobController.create(req, res);
});

module.exports = {
    router: router,
}
