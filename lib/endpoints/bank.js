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

    instantAccountVerification: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav',
            body: params
        }, callback, idempotencyKey);
    },

    instantAccountVerificationPlaid: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav/plaid',
            body: params
        }, callback, idempotencyKey);
    },

    addBankAccount: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank',
            body: params
        }, callback, idempotencyKey);
    },

    verifyMicrodesposits: function(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/verify',
            body: params
        }, callback);
    }

};

module.exports = Bank;
