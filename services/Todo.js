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
	static async save(name) {
		return await new db.models.tasks({ name }).save();
	}


	/**
	   * Get Tasks
	   * @description Get tasks
	   * @static
	   * @memberOf Tasks
	   */
	static async getTasks() {
		return await db.models.tasks.find();
	}

	/**
	   * Complete Tasks
	   * @description Complete tasks
	   * @static
	   * @memberOf Tasks
	   */
	static async comepleteTask(id) {
		const task = await db.models.tasks.findOne({ _id: db.mongoose.Types.ObjectId(id) });
		if (!task) return false;

		task.status = "DONE";
		await task.update(task);
		return task;
	}
}

module.exports = Todo;
