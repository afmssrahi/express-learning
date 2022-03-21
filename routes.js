const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
	fs.readFile('./pages/index.html', (err, data) => {
		if (err) {
			console.log('Error', err);
			res.send('<h1>Something went wrong.</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
});

router.get('/about', async (req, res) => {
	fs.readFile('./pages/about.html', (err, data) => {
		if (err) {
			console.log('Error', err);
			res.send('<h1>Something went wrong.</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
});

router.get('/products', (req, res) => {
	fs.readFile('./pages/products.html', (err, data) => {
		if (err) {
			console.log('Error', err);
			res.send('<h1>Something went wrong.</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
});

module.exports = router;
