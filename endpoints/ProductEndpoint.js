'use strict';

const _ = require('lodash');

const { response, clean } = require('../utils');

const Services = require('../services');

class ProductEndpoint {
	/**
	 * This is used for populate date to monfoDB.
	 */
	static async populateData(req, res, next) {
		try {
			const products = await Services.Product.populateData();

			const [status, body] = response.success(products);
			res.status(status).send(body);
		} catch (e) {
			const [status, body] = response.errors(e);
			res.status(status).send(body);
		}
		return next();
	}
}

module.exports = ProductEndpoint;