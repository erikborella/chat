var express = require('express');
var router = express.Router();

router.get('/login', (req, res, next) => {
	res.render('login', {title: 'index'});
})

router.get('/' , (req, res, next) => {
	res.redirect('/login');
})

module.exports = router;
