'use strict';

const { UserEndpoint } = require('./endpoints');

module.exports = app => {
	app.get('/login', UserEndpoint.Login);
};