'use strict';

function Subscription(resource) {
    this.resource = resource;
}

Subscription.prototype = {

    list: function(params, callback) {
        var options = {
            method: 'GET',
            uri: '/subscription'
        };

        if (params) {
            options.qs = params
        }

        return this.resource.request(options, callback);
    }

};

module.exports = Subscription;
