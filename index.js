const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
app.use(cors());

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

app.get('/about', morgan('dev'), async (req, res) => {
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
