'use strict';

const config = require('./config');
const chalk = require('chalk');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

class DB {

    static init() {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', config.get('environment') !== 'production');

        mongoose.connect(`mongodb+srv://${config.get('server:database:username')}:${config.get('server:database:password')}@cluster0-6tf1w.mongodb.net/test?retryWrites=true&w=majority`);

        // mongoose.connect(`mongodb://${config.get('server:database:username')}:${config.get('server:database:password')}@${config.get('server:database:host')}:${config.get('server:database:port')}/${config.get('server:database:name')}`);

        // if (config.get('environment') === 'production')
        //     mongoose.connect(`mongodb + srv://${config.get('server:database:username')}:${config.get('server:database:password')}@cluster0-6tf1w.mongodb.net/test?retryWrites=true&w=majority`);
        // else
        //     mongoose.connect(`mongodb://${config.get('server:database:host')}:${config.get('server:database:port')}/${config.get('server:database:name')}`);

        const models = {};

        const models_path = path.join(__dirname, 'models', 'mongo');

        fs.readdirSync(models_path).forEach(file => {
            models[path.basename(file, path.extname(file))] = require(path.join(models_path, file))(mongoose);
        });

        mongoose.connection.on('error', err => {
            console.log(chalk.hex('#FFFFFF').bgHex('#ED2B28').bold('[\u274C] Mongoose default connection error. ' + err));
        });

        mongoose.connection.on('disconnected', () => {
            console.log(chalk.hex('#FFFFFF').bgHex('#1E8BC3').bold('[\u2713] Mongoose connection closed. '));
        });

        DB.connection = mongoose.connection;
        DB.models = models;
        DB.mongoose = mongoose;
    }

    static get connection() {
        return DB_CONNECTION;
    }

    static set connection(c) {
        DB_CONNECTION = c;
    }

    static get models() {
        return DB_MODELS;
    }

    static set models(m) {
        DB_MODELS = m;
    }

    static get mongoose() {
        return DB_ORM;
    }

    static set mongoose(orm) {
        DB_ORM = orm;
    }
}

let DB_CONNECTION = null;
let DB_MODELS = null;
let DB_ORM = null;

DB.init();
module.exports = DB;