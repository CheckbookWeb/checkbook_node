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

        if (query) {
            options.qs = query
        }

        return this.resource.request(options, callback);
    },

    get: function(check_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/check/' + check_id
        }, callback);
    },

    delete: function(check_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/check/' + check_id
        }, callback);
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
    },

    sendPhysicalCheck: function(params, callback, idempotencyKey) {
        var options = {
            method: 'POST',
            uri: '/check/physical',
            body: params
        };

        if (idempotencyKey) {
            options.headers = {
                'Idempotency-Key': idempotencyKey
            }
        }

        return this.resource.request(options, callback);
    },

    sendDirectDeposit: function(params, callback, idempotencyKey) {
        var options = {
            method: 'POST',
            uri: '/check/direct',
            body: params
        };

        if (idempotencyKey) {
            options.headers = {
                'Idempotency-Key': idempotencyKey
            }
        }

        return this.resource.request(options, callback);
    },

    sendMultipleChecksCSV: function(params, callback, idempotencyKey) {
        var options = {
            method: 'POST',
            uri: '/check/csv',
            body: params
        };

        if (idempotencyKey) {
            options.headers = {
                'Idempotency-Key': idempotencyKey
            }
        }

        return this.resource.request(options, callback);
    },

    convertDigitalToPhysical: function(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/convert',
            body: params
        }, callback);
    }

};

module.exports = Check;
