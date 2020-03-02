'use strict';

const _ = require('lodash');
const md5 = require('md5');

const { response } = require('../utils');

const Services = require('../services');

class UserEndpoint {
	/**
	 * This is used for login user.
	 */
    static async login(req, res, next) {
        try {
            const user = await Services.User.getOne(req.body.username, md5(req.body.password));

            let loggedIn = false;
            if (user != null) {
                loggedIn = true;
            }

            const [status, body] = response.success({ loggedIn });
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }

    /**
	 * This is used for register user.
	 */
    static async register(req, res, next) {
        try {
            let _user = {
                username: req.body.username,
                password: md5(req.body.password),
                name: req.body.name,
            }
            const user = await Services.User.register(_user);
            delete user.password;
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