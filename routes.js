const router = require('express').Router();
const {
	homeController,
	aboutController,
	productsController,
} = require('./controller');

router.get('/', homeController);

router.get('/about', aboutController);

router.get('/products', productsController);

module.exports = router;
