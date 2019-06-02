let knex = require('knex');

let db = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'password',
		database: 'db'
	}
});

module.exports = db;