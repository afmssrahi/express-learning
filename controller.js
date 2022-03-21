const fs = require('fs');

exports.homeController = (req, res) => {
	throw new Error('Something went wrong');

	fs.readFile('./pages/index.html', (err, data) => {
		if (err) {
			console.log('Error', err);
			res.send('<h1>Something went wrong.</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
};

exports.aboutController = (req, res) => {
	fs.readFile('./pages/about.html', (err, data) => {
		if (err) {
			console.log('Error', err);
			res.send('<h1>Something went wrong.</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
};

exports.productsController = (req, res) => {
	fs.readFile('./pages/products.html', (err, data) => {
		if (err) {
			console.log('Error', err);
			res.send('<h1>Something went wrong.</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
};
