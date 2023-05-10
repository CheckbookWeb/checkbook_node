'use strict';

function Bank(resource) {
    this.resource = resource;
}

Bank.prototype = {

    list: function (callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank'
        }, callback);
    },

    institutions: function (callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank/institutions'
        }, callback);
    },

    delete: function (bank_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/bank/' + bank_id
        }, callback);
    },

    instantAccountVerification: function (params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav',
            body: params
        }, callback, idempotencyKey);
    },

    addBankAccount: function (params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank',
            body: params
        }, callback, idempotencyKey);
    },

    releaseMicrodesposits: function (params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/release',
            body: params
        }, callback);
    },

    verifyMicrodesposits: function (params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/verify',
            body: params
        }, callback);
    },

    update: function (bank_id, params, callback) {
        return this.resource.request({
            method: 'PUT',
            uri: '/bank/' + bank_id,
            body: params
        }, callback);
    }

};

module.exports = Bank;
