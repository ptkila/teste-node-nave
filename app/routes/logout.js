const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.post('/', (req, res, next) => {
    return res.json('req.params');
    return AuthController.logout();
});

module.exports = {
    router: router,
}