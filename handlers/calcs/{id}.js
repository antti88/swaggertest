'use strict';
var dataProvider = require('../../data/calcs/{id}.js');
var repository = require('../../lib/contactRepository');
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
     */
    get: function getCalcsById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        res.json(repository.get(req.params['id']));
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: 
     * parameters: id, calc
     * produces: 
     * responses: 200, 500
     */
    put: function putCalcById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: 
     * parameters: id, calc
     * produces: 
     * responses: 204, 404
     */
    delete: function deleteCalcsById(req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['delete']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: 
     * parameters: id, calc
     * produces: 
     * responses: 200, 500
     */
    patch: function patchCalcsById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['patch']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
