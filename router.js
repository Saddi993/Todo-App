'use strict';

const { UserEndpoint } = require('./endpoints');

module.exports = app => {
	app.post('/register', UserEndpoint.register);
	app.post('/login', UserEndpoint.login);
};