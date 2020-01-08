const router = require('express').Router();

const application = require('./application');
const job = require('./job');
const login = require('./login');
const logout = require('./logout');
const register = require('./register');

const AuthMiddleware = require('../middlewares/AuthMiddleware');

// Auth - OFF

router.use('/login', login.router);

// Auth - ON

router.use(AuthMiddleware.authenticateUser);

router.use('/logout', logout.router);

router.use('/application', application.router);

router.use('/job', job.router);

router.use('/register', register.router);

module.exports = {
    router: router
};