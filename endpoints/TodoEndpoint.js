'use strict';

const _ = require('lodash');

const { response, clean } = require('../utils');

const Services = require('../services');

class TodoEndpoint {
	/**
	 * This is used for adding task.
	 */
	static async add(req, res, next) {
		try {
			await Services.Todo.add(req.body.task);

			const [status, body] = response.success();
			res.status(status).send(body);
		} catch (e) {
			const [status, body] = response.errors(e);
			res.status(status).send(body);
		}
		return next();
	}

	/**
	 * This is used for getting all task.
	 */
	static async getAll(req, res, next) {
		try {
			await Services.Todo.add(req.body.task);

			const [status, body] = response.success();
			res.status(status).send(body);
		} catch (e) {
			const [status, body] = response.errors(e);
			res.status(status).send(body);
		}
		return next();
	}

	/**
	 * This is used for done task.
	 */
	static async markDone(req, res, next) {
		try {
			await Services.Todo.add(req.body.task);

			const [status, body] = response.success();
			res.status(status).send(body);
		} catch (e) {
			const [status, body] = response.errors(e);
			res.status(status).send(body);
		}
		return next();
	}
}

module.exports = TodoEndpoint;