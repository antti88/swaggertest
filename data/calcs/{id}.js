'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /calcs/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: 
     * responses: 200, 404
     * operationId: getCalcsById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: id, calc
     * produces: 
     * responses: 200, 500
     * operationId: putCalcById
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'put',
                response: '500'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: id, calc
     * produces: 
     * responses: 204, 404
     * operationId: deleteCalcsById
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: id, calc
     * produces: 
     * responses: 200, 500
     * operationId: patchCalcsById
     */
    patch: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'patch',
                response: '200'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs/{id}',
                operation: 'patch',
                response: '500'
            }, callback);
        }
    }
};
