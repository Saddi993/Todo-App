'use strict';

module.exports = {
	clean: require('./clean'),
	response: require('./response'),
	/**
	 * Get unix current timestamp
	 */
	now_ts: () => Math.floor(Date.now() / 1000)
};