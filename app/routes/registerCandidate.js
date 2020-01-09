const router = require('express').Router();
const registerCandidateController = require('../controllers/RegisterCandidateController');

router.post('/', (req, res) => {
    return registerCandidateController.register(req, res);
});

module.exports = {
    router: router,
}