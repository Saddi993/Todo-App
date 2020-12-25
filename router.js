'use strict';

const { UserEndpoint, TodoEndpoint, ProductEndpoint } = require('./endpoints');

module.exports = app => {
	app.post('/register', 		UserEndpoint.register);
	app.post('/login', 			UserEndpoint.login);

	app.post('/task', 			TodoEndpoint.add);
	app.get('/tasks', 			TodoEndpoint.getAll);
	app.put('/task/:id', 		TodoEndpoint.markDone);

	app.get('/data/populate', 	ProductEndpoint.populateData);
	app.get('/products', 		ProductEndpoint.getAll);
	app.get('/products/:id', 	ProductEndpoint.getById);
	app.post('/products', 		ProductEndpoint.create);
	app.put('/products/:id', 	ProductEndpoint.update);
	app.del('/products/:id', 	ProductEndpoint.destroy);

};