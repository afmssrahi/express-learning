const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
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

app.get('/about', async (req, res) => {
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

app.get('/products', (req, res) => {
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

app.listen(port, () => {
	console.log(`Server is listening on PORT ${port}`);
});
