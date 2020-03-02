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
			const tasks = await Services.Todo.save(req.body.name);

			const [status, body] = response.success(tasks);
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
			const tasks = await Services.Todo.getTasks();

			const [status, body] = response.success(tasks);
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
			const task = await Services.Todo.comepleteTask(req.params.id);

			const [status, body] = response.success(task);
			res.status(status).send(body);
		} catch (e) {
			const [status, body] = response.errors(e);
			res.status(status).send(body);
		}
		return next();
	}
}

module.exports = TodoEndpoint;