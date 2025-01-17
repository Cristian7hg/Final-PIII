const controller = require('../../PedidosYa.Web/controllers/commerce/commerceController');
const router = require('express').Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/commerce-type/:id', controller.getByType);
router.get('/commerce-filter/:name', controller.getByName);


router.post('/',controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;