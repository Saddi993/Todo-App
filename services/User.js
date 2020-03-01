'use strict';

const _ = require('lodash');

class User {

	/**
     * Get User
     * @description Get User
     * @static
     * @param {Number} uid - User id
     * @memberOf Users
     */
	static async getOne(username, password) {
		uid = parseInt(uid);
		return await models.users.findOne({ username, password });
	}
}

module.exports = User;
