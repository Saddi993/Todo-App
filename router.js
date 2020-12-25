'use strict';

const { UserEndpoint, TodoEndpoint, ProductEndpoint } = require('./endpoints');

module.exports = app => {
	app.post('/register', 	UserEndpoint.register);
	app.post('/login', 		UserEndpoint.login);

	app.post('/task', 		TodoEndpoint.add);
	app.get('/tasks', 		TodoEndpoint.getAll);
	app.put('/task/:id', 	TodoEndpoint.markDone);

	app.get('/data/populate', 	ProductEndpoint.populateData);

};