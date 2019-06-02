let express = require('express');
let router = express.Router();

let authorize = require('../middlewares/authorize');

let db = require('../db');


function getParticipants(user) {
	return db('participants').where('user_id', user.id);
}

function getUserPartipRooms(user) {
	let promise = getParticipants(user).then((participants) => {
		return Promise.all(participants.map(participant => {
			return db('room').where('id', participant['room_id']).then((room) => {
				return room;
			});
		}));
	});

	return promise;
}

router.get('/login', authorize.isNotAuth, (req, res) => {
	res.render('login', { title: 'Logar', errMessage: req.flash('error') });
});


router.get('/register', authorize.isNotAuth, (req, res) => {
	res.render('register', { title: 'Cadastrar', errMessage: req.flash('error') });
});

router.get('/', (req, res) => {
	if (req.isAuthenticated()) {
		getUserPartipRooms(req.user).then((roomsData) => {

			let rooms = [];
			for (let room of roomsData) {
				rooms.push(room[0]);
			}

			if (req.device.type === 'phone') {
				res.render('home-mobile', {
					title: 'Tela inicial',
					user: req.user,
					rooms: rooms
				});
			} else {
				res.render('home-desktop', {
					title: 'Tela inicial',
					user: req.user,
					rooms: rooms
				});
			}
		});
	} else {
		res.redirect('/login');
	}
});

module.exports = router;
