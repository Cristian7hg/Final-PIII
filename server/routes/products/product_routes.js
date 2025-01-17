const controller = require('../../PedidosYa.Web/controllers/products/product_controller');
const router = require('express').Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/commerce-product/:id',controller.getProductsByCommerce);
router.get('/category-product/:id',controller.getProductsByCategories);

router.post('/',controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;