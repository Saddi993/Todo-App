'use strict';

const _ = require('lodash');

const { response, clean } = require('../utils');

const Services = require('../services');

class TodoEndpoint {
	/**
	 * This is used for getting all the messages unseen counts.
	 */
	static async add(req, res, next) {
		try {
			const unseen_count = await Services.Todo.add(req.session.uid);

			const [status, body] = response.success({ unseen_count });
			res.status(status).send(body);
		} catch (e) {
			const [status, body] = response.errors(e);
			res.status(status).send(body);
		}
		return next();
	}
}

module.exports = TodoEndpoint;