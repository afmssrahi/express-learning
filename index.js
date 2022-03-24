const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);
app.use(express.static('./public'));

app.use(require('./routes'));

app.use((req, res, next) => {
	const error = new Error('404 Not Found');

	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	console.log('Error: ', error);

	if (error.status) {
		return res.status(error.status).send(`<h1>${error.message}</h1>`);
	}

	res.status(500).send(`<h1>Something Wrong in Server</h1>`);
});

app.listen(port, () => {
	console.log(`Server is listening on PORT ${port}`);
});

//=======================================================

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
