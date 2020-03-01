'use strict';

const _ = require('lodash');

const { response } = require('../utils');

const Services = require('../services');

class UserEndpoint {
	/**
	 * This is used for getting all the messages unseen counts.
	 */
    static async Login(req, res, next) {
        try {
            const user = await Services.User.getOne();

            const [status, body] = response.success({ user });
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }
}

module.exports = UserEndpoint;