'use strict';

var Resource = require('./resource');

function CheckbookAPI(config) {
    this.resource = new Resource(config);
}

CheckbookAPI.prototype = {

    getChecks: function(callback) {
        return this.resource.request(callback);
    }

};

module.exports = CheckbookAPI;
