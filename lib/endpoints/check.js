'use strict';

function Check(resource) {
    this.resource = resource;
}

Check.prototype = {

    list: function(params, callback) {
        var options = {
            method: 'GET',
            uri: '/check'
        };

        if (params) {
            options.qs = params
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
