'use strict';

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');

const config = require('./config');
const db = require('./db');

const log = console.log;

const app = express();

app.set('json spaces', 2);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//prefix for all routes
app.use('/api', express.Router());

require('./router')(app);

const server = app.listen(config.get('server:api:port'), () => {
	log(chalk.hex('#FFFFFF').bgHex('#3FC380').bold(`[\u2139] Environment : ${config.get('environment')} `));
	log(chalk.hex('#FFFFFF').bgHex('#3FC380').bold(`[\u2713] Server Started ${config.get('hostname')} `));
	db.connection.once('open', () => log(chalk.hex('#FFFFFF').bgHex('#1E8BC3').bold('[\u2713] MongoDB connected ')));
});

app.route('/').get((req, res, next) => {
	res.status(200).json({});
	return next();
});

const close = exitParam => {
	db.connection.close(() => {
		exitParam ?
			log(chalk.hex('#FFFFFF').bgHex('#D91E18').bold('[\u2a2f] Could not close connections in time, forcefully shutting down. ')) :
			log(chalk.hex('#FFFFFF').bgHex('#1E8BC3').bold('[\u2713] Closed out remaining connections. '));
		process.exit(exitParam);
	});
};

const shutdown = () => {
	log();
	log(chalk.hex('#FFFFFF').bgHex('#6C7A89').bold(`[\u2713]Shutting down instance ${_.get(process.env, 'NODE_APP_INSTANCE', 0)} gracefully... `));

	const forcedTimeout = 20 * 1000;
	server.close(() => {
		close(0);
	});

	// Force to stop after some time
	setTimeout(() => {
		close(1);
	}, forcedTimeout);
};

// Kill
process.on('SIGTERM', shutdown);

// Ctrl + C
process.on('SIGINT', shutdown);
