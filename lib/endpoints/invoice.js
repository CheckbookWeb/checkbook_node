'use strict';

function Invoice(resource) {
    this.resource = resource;
}

Invoice.prototype = {

    list: function(params, callback) {
        var options = {
            method: 'GET',
            uri: '/invoice'
        };

        if (params) {
            options.qs = params
        }

        return this.resource.request(options, callback);
    }

};

module.exports = Invoice;
