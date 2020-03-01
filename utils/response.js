'use strict';

const _ = require('lodash');

module.exports = {
	/**
	 * Success Response
	 * @description This method returns the array for success response
	 * @param {Object.<Success>} Success
	 */
	success: (d = null) => {
		const response = { meta: { code: 200, message: 'Ok' } };
		if (!_.isNull(d)) response.data = d;
		return [200, response];
	},
};