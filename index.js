const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(require('./routes'));
app.use(globalMiddleware);

app.listen(port, () => {
	console.log(`Server is listening on PORT ${port}`);
});

// middlewareSignature
function middlewareSignature(req, res, next) {
	next();
}

// custom global middleware
function globalMiddleware(req, res, next) {
	console.log(`${req.method} - ${req.url}`);
	console.log('I am a global middleware');

	if (req.query.bad) {
		return res.status(400).send('Bad Request');
	}

	next();
}

// custom local middleware
function localMiddleware(req, res, next) {
	console.log('I am Local middleware');
	next();
}
