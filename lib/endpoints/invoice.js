'use strict';

function Invoice(resource) {
    this.resource = resource;
}

Invoice.prototype = {

    list: function(query, callback) {
        var options = {
            method: 'GET',
            uri: '/invoice'
        };

        if (query) {
            options.qs = query
        }

        return this.resource.request(options, callback);
    }

};

module.exports = Invoice;
