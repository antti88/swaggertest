'use strict';

var calcs = require('./calcs.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(calcs, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return calcs;
    }
};
