const router = require('express').Router();
const registerAdminController = require('../controllers/RegisterAdminController');

router.post('/', (req, res, next) => {
    if (! req.admin) {
        return res.json({message: 'only admin can access'});
    }
    return registerAdminController.register(req, res);
});

module.exports = {
    router: router,
}