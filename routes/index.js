let express = require('express');
let router = express.Router();

let authorize = require('../middlewares/authorize');

router.get('/login', authorize.isNotAuth, (req, res) => {
	res.render('login', {title: 'Logar'});
});

router.get('/register', authorize.isNotAuth, (req, res) => {
	res.render('register', {title: 'Cadastrar'});
});

router.get('/' , (req, res) => {
	if (req.isAuthenticated()) {
		res.render('navbar', {title: 'Tela inicial', 'user': req.user});
	} else {
		res.redirect('/login');
	}
});

module.exports = router;
