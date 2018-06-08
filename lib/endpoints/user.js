'use strict';

function User(resource) {
    this.resource = resource;
}

User.prototype = {

    create: function(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/user',
            body: params
        }, callback, idempotencyKey);
    },

    update: function(params, callback) {
        return this.resource.request({
            method: 'PUT',
            uri: '/user',
            body: params
        }, callback);
    },

    sendVerificationCode: function(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/user/verify',
            body: params
        }, callback);
    },

    checkVerificationCode: function(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/user/verify/check',
            body: params
        }, callback);
    }

};

module.exports = User;
