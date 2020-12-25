'use strict';

const _ = require('lodash');
const moment = require('moment');
const db = require('../db');
const csvtojson = require("csvtojson");
const generateSafeId = require('generate-safe-id');

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

    /**
     * Get All Products
     * @description Get All Products
     * @static
     * @memberOf Product
     */
    static async getProducts() {
        return await db.models.products.find();
    }

    /**
     * Get Product by id
     * @description Get Product by id
     * @static
     * @param {String} id - Object Id product id
     * @memberOf Product
     */
    static async getProductById(id) {
        return await db.models.products.find({ id });
    }

    /**
     * Create Product
     * @description Create Product
     * @static
     * @param {Object} data - object of product
     * @memberOf Product
     */
    static async createProduct(data) {
        data.id = generateSafeId();
        return await db.models.products(data).save();
    }

    /**
     * Update Product by id
     * @description Update Product by id
     * @static
     * @param {String} id - Object Id product id
     * @param {Object} data - object of product
     * @memberOf Product
     */
    static async updateProduct(id, data) {
        return await db.models.products.findOneAndUpdate({ id }, data);
    }

    /**
     * Delete Product
     * @description Delete Product
     * @static
     * @param {String} id - Object Id product id
     * @memberOf Product
     */
    static async deleteProduct(id) {
        return await db.models.products.remove({ id });
    }
}

module.exports = Product;
