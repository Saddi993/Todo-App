'use strict';

const _ = require('lodash');
const moment = require('moment');
const db = require('../db');
const csvtojson = require("csvtojson");

class Product {

    /**
     * Populate Data
     * @description Populate Data
     * @static
     * @memberOf Product
     */
    static async populateData() {
        let data = await csvtojson().fromFile("Full Stack MEAN Developer - MOCK_DATA.csv");

        return await db.models.products.insertMany(data);
    }
}

module.exports = Product;
