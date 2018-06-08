'use strict';

function Bank(resource) {
    this.resource = resource;
}

Bank.prototype = {

    list: function(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank'
        }, callback);
    },

    institutions: function(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank/institutions'
        }, callback);
    },

    delete: function(bank_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/bank/' + bank_id
        }, callback);
    },

    addBankAccount: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank',
            body: params
        }, callback, idempotencyKey);
    },

    instantAccountVerification: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav',
            body: params
        }, callback, idempotencyKey);
    },

    verifyMicrodesposit: function(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/verify',
            body: params
        }, callback);
    },

    releaseMicrodesposit: function(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/release',
            body: params
        }, callback);
    }

};

module.exports = Bank;
