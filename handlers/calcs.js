'use strict';
var dataProvider = require('../data/calcs.js');
var repository = require('../lib/contactRepository');
var table = module.exports = require('azure-mobile-apps').table();
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
     */
    get: function getAllCalcs(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        var tablecalc = req.azureMobile.tables('calculations');

        res.json(tablecalc);

    },
    //     provider(req, res, function (err, data) {
    //         if (err) {
    //             next(err);
    //             return;
    //         }
    //         res.status(status).send(data && data.responses);
    //     });
    // },
    /**
     * summary: 
     * description: 
     * parameters: calc
     * produces: 
     * responses: 201
     */
    post: function postCalc(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
