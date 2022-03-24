exports.homeController = (req, res) => {
	// throw new Error('Something went wrong');
	const title = 'Home page';
	const activeHome = true;

	res.render('pages/home', { title });
};

exports.aboutController = (req, res) => {
	const title = 'About page';
	const activeAbout = true;

	res.render('pages/about', { title });
};

exports.productsController = (req, res) => {
	const title = 'Product page';

	res.render('pages/products', { title });
};
