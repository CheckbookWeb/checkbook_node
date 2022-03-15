'use strict';

function VirtualCreditCard(resource) {
    this.resource = resource;
}

VirtualCreditCard.prototype = {

    add: function (params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/account/vcc',
            body: params
        }, callback, idempotencyKey);
    },

    update: function (vcc_id, params, callback) {
        return this.resource.request({
            method: 'PUT',
            uri: '/account/vcc' + vcc_id,
            body: params
        }, callback);
    },

    get: function (callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/account/vcc'
        }, callback);
    },

    getTransactions: function (vcc_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/account/vcc/' + vcc_id + 'transaction',
            qs: query
        }, callback);
    },

    remove: function (vcc_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/account/vcc/' + vcc_id
        }, callback);
    },

};

module.exports = VirtualCreditCard;
