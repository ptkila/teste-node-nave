const router = require('express').Router();

const application = require('./application');
const job = require('./job');
const login = require('./login');
const logout = require('./logout');
const registerAdmin = require('./registerAdmin');
const registerCandidate = require('./registerCandidate');

const AuthMiddleware = require('../middlewares/AuthMiddleware');

// Auth - OFF

router.use('/login', login.router);

router.use('/register-candidate', registerCandidate.router);

// Auth - ON

router.use(AuthMiddleware.authenticateUser);

router.use('/register-admin', registerAdmin.router);

router.use('/job', job.router);

router.use('/application', application.router);

router.use('/logout', logout.router);

module.exports = {
    router: router
};