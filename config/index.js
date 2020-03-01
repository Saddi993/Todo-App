'use strict';

const _ = require('lodash');
const nconf = require('nconf');
const path = require('path');
const env = process.env.NODE_ENV = _.get(process, 'env.NODE_ENV', 'development');

let cfg = null;
const _Nconf = (options = {}) => {
	if (_.isNull(cfg)) {

		const baseConfigPath = options.baseConfigPath || __dirname;
		const customConfigPath = options.customConfigPath || process.cwd();

		// no channel can override the overrides
		nconf.file('overrides', path.join(baseConfigPath, 'overrides.json'));

		nconf.env({ separator: '__' });
		
		nconf.file('custom-env', path.join(customConfigPath, 'config.' + env + '.json'));
		nconf.file('default-env', path.join(baseConfigPath, 'env', 'config.' + env + '.json'));

		//console.log(path.join(baseConfigPath, 'env', 'developers', devname + '.json'));

		// values we have to set manual
		nconf.set('env', env);

		cfg = nconf;
		return cfg;
	}
};
module.exports = _Nconf();
