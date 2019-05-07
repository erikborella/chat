var express = require('express');
var router = express.Router();
var db = require('../db');
var passport = require('passport');

router.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect("/");
})

router.post('/register',(req, res, next) => {
    db("users").insert(req.body).then((ids) => {
        res.redirect("/");
    })
})

router.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}))

module.exports = router;