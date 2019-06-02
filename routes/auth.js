let express = require('express');
let router = express.Router();
let db = require('../db');
let passport = require('passport');

router.get('/logout', (req, res) => {
	req.session.destroy();
	res.redirect('/');
});

router.post('/register', (req, res) => {
	db('user').insert(req.body).then(() => {
		res.redirect('/');
	});
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

module.exports = router;