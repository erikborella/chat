var express = require('express');
var router = express.Router();

var authorize = require("../middlewares/authorize")


router.get('/login', authorize.isNotAuth, (req, res, next) => {
	res.render('login', {title: 'Logar'});
})

router.get('/register', authorize.isNotAuth, (req, res, next) => {
	res.render('register', {title: "Cadastrar"})
})

router.get('/' , (req, res, next) => {
	if (req.isAuthenticated()) {
		res.render("navbar", {"user": req.user});
	} else {
		res.redirect("/login");
	}
})

module.exports = router;
