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

    get: function(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/user'
        }, callback);
    },

    list: function(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/user/list',
            qs: query
        }, callback);
    },

    delete: function(user_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/user/' + user_id
        }, callback);
    }

};

module.exports = User;
