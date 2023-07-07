const Router = require('express');
const userController = require('../controllers/user-controller');
const statisticsController = require('../controllers/statistics-controller')
const {body} = require('express-validator')

const router = new Router();

router.post('/registration', body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    body('name').isLength({min: 3, max: 32}),userController.registration);
router.post('/login', body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}), userController.login);
router.post('/data', statisticsController.sendData);
router.get('/data', statisticsController.getAllStatistics);
router.post('/myData', statisticsController.getMyStatistics);
module.exports = router;