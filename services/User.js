'use strict';

const _ = require('lodash');
const db = require('../db');

class User {

	/**
     * Get User
     * @description Get User
     * @static
     * @param {Number} uid - User id
     * @memberOf Users
     */
	static async getOne(username, password) {
		return await db.models.users.findOne({ username, password });
	}

	/**
     * Create User
     * @description Create User
     * @static
     * @param {Object} user - User Object
     * @memberOf Users
     */
	static async register(user) {
		return await db.models.users(user).save();
	}
}

module.exports = User;
