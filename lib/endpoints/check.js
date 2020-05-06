'use strict';

function Check(resource) {
    this.resource = resource;
}

Check.prototype = {

    list: function(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/check',
            qs: query
        }, callback);
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

    sendDirect: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/direct',
            body: params
        }, callback, idempotencyKey);
    },

    sendDigitalCheck: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/digital',
            body: params
        }, callback, idempotencyKey);
    },

    sendPhysicalCheck: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/physical',
            body: params
        }, callback, idempotencyKey);
    },

    sendMultipleChecksCSV: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/csv',
            body: params
        }, callback, idempotencyKey);
    }

};

module.exports = Check;
