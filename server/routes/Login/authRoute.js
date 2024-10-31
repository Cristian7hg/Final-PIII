const controller = require('../../PedidosYa.Web/controllers/Login/authController');
const router = require('express').Router();


router.post('/login',controller.generateToken);

router.get('/reset');
router.post('/reset',controller.PostReset);

module.exports = router;