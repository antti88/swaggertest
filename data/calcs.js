'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /calcs
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: getAllCalcs
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: calc
     * produces: 
     * responses: 201
     * operationId: postCalc
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/calcs',
                operation: 'post',
                response: '201'
            }, callback);
        }
    }
};
