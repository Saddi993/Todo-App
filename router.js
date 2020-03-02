'use strict';

const { UserEndpoint, TodoEndpoint } = require('./endpoints');

module.exports = app => {
	app.post('/register', 	UserEndpoint.register);
	app.post('/login', 		UserEndpoint.login);

	app.post('/task', 		TodoEndpoint.add);
	app.get('/task', 		TodoEndpoint.getAll);
	app.put('/task/:id', 	TodoEndpoint.markDone);

};