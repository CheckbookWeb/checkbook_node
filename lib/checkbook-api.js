'use strict';

var Resource = require('./resource');

function CheckbookAPI(config) {
    this.resource = new Resource(config);
}

CheckbookAPI.prototype = {

    getChecks: function(params, callback) {
        return this.resource.request(params, callback);
    }

};

module.exports = CheckbookAPI;
