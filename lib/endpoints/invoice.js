'use strict';

function Invoice(resource) {
    this.resource = resource;
}

Invoice.prototype = {

    list: function(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/invoice',
            qs: query
        }, callback);
    },

    get: function(invoice_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/invoice/' + invoice_id
        }, callback);
    },

    delete: function(invoice_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/invoice/' + invoice_id
        }, callback);
    },

    sendInvoice: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/invoice',
            body: params
        }, callback, idempotencyKey);
    },

    payInvoice: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/invoice/payment',
            body: params
        }, callback, idempotencyKey);
    }

};

module.exports = Invoice;
