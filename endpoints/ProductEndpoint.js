'use strict';

const _ = require('lodash');

const { response, clean } = require('../utils');

const Services = require('../services');

class ProductEndpoint {
    /**
     * This is used for populate data
     */
    static async populateData(req, res, next) {
        try {
            await Services.Product.populateData();

            const [status, body] = response.success();
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }

    /**
     * This is used for get all products
     */
    static async getAll(req, res, next) {
        try {
            const products = await Services.Product.getProducts();

            const [status, body] = response.success(products);
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }

    /**
     * This is used for get single product by id
     */
    static async getById(req, res, next) {
        try {
            const product = await Services.Product.getProductById(req.params.id);

            const [status, body] = response.success(product);
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }

    /**
     * This is used for create product
     */
    static async create(req, res, next) {
        try {
            const product = await Services.Product.createProduct(req.body);

            const [status, body] = response.success(product);
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }

    /**
     * This is used for update product by id
     */
    static async update(req, res, next) {
        try {
            const product = await Services.Product.updateProduct(req.params.id, req.body);

            const [status, body] = response.success(product);
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }

    /**
     * This is used for delete product by id
     */
    static async destroy(req, res, next) {
        try {
            await Services.Product.deleteProduct(req.params.id);

            const [status, body] = response.success();
            res.status(status).send(body);
        } catch (e) {
            const [status, body] = response.errors(e);
            res.status(status).send(body);
        }
        return next();
    }
}

module.exports = ProductEndpoint;