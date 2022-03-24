exports.homeController = (req, res) => {
	// throw new Error('Something went wrong');
	const title = 'Dynamic title (Home)';

	res.render('pages/home', { title });
};

exports.aboutController = (req, res) => {
	res.render('pages/about');
};

exports.productsController = (req, res) => {
	res.render('pages/products');
};
