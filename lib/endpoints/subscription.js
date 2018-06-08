'use strict';

function Subscription(resource) {
    this.resource = resource;
}

Subscription.prototype = {

    list: function(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/subscription',
            qs: query
        }, callback);
    }

};

module.exports = Subscription;
