const controller = require('../../PedidosYa.Web/controllers/Login/userControllers');
const router = require('express').Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

router.post('/newPassword/:token',controller.GetNewPassword);

router.get('/confirm/:token',controller.confirm);

router.post('/',controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);


module.exports = router;