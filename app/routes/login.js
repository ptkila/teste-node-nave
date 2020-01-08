const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.post('/', (req, res, next) => {
    return AuthController.login(req, res);
});

module.exports = {
    router: router,
}