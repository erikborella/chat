let db = require('./db');

let passport = require('passport');
let localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy((username, password, done) => {
	db('user')
		.where('username', username)
		.first()
		.then((user) => {
			if (!user || user.password !== password) {
				return done(null, false, {message: 'Senha ou nome de usuario incorretos'});
			}
			done(null, user);
		}, done);
}));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	db('user')
		.where('id', id)
		.first()
		.then((user) => {
			done(null, user);
		}, done);
});