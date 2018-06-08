'use strict';

function Check(resource) {
    this.resource = resource;
}

Check.prototype = {

    list: function(query, callback) {
        var options = {
            method: 'GET',
            uri: '/check'
        };

        if (params) {
            options.qs = query
        }

        return this.resource.request(options, callback);
    },

    sendDigitalCheck: function(params, callback, idempotencyKey) {
        var options = {
            method: 'POST',
            uri: '/check/digital',
            body: params
        };

        if (idempotencyKey) {
            options.headers = {
                'Idempotency-Key': idempotencyKey
            }
        }

        return this.resource.request(options, callback);
    }

};

module.exports = Check;
