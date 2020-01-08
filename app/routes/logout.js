const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.post('/', (req, res, next) => {
    return AuthController.logout(req, res);
});

module.exports = {
    router: router,
}