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
    },

    get: function(subscription_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/subscription/' + subscription_id
        }, callback);
    },

    delete: function(subscription_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/subscription/' + subscription_id
        }, callback);
    },

    update: function(subscription_id, params, callback) {
        return this.resource.request({
            method: 'PUT',
            uri: '/subscription/' + subscription_id,
            body: params
        }, callback);
    },

    sendRecurringCheck: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/subscription/check',
            body: params
        }, callback, idempotencyKey);
    },

    sendRecurringInvoice: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/subscription/invoice',
            body: params
        }, callback, idempotencyKey);
    }

};

module.exports = Subscription;
