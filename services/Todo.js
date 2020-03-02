'use strict';

const _ = require('lodash');
const moment = require('moment');
const db = require('../db');

class Todo {

	/**
     * Save Task
     * @description Save Task
     * @static
     * @param {String} task - task string
     * @memberOf Task
     */
	static async save(task) {
		return await new db.models.tasks({ task }).save();
	}


	/**
	   * Get Tasks
	   * @description Get tasks
	   * @static
	   * @memberOf Tasks
	   */
	static async getTasks() {
		const tasks = await db.models.tasks.findAll();
		return _.head(tasks).toJSON();
	}

	/**
	   * Complete Tasks
	   * @description Complete tasks
	   * @static
	   * @memberOf Tasks
	   */
	static async comepleteTask(_id) {
		const task = await db.models.tasks.findOne({ _id });
		if (!task) return false;

		await task.update(user);
		return true;
	}
}

module.exports = Todo;
