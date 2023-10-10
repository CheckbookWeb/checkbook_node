"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(resource) {
        this.resource = resource;
    }
    create(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/user',
            body: params
        }, callback, idempotencyKey);
    }
    update(params, callback) {
        return this.resource.request({
            method: 'PUT',
            uri: '/user',
            body: params
        }, callback);
    }
    get(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/user'
        }, callback);
    }
    list(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/user/list',
            qs: query
        }, callback);
    }
    delete(user_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/user/' + user_id
        }, callback);
    }
    addSignature(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/user/signature',
            body: params
        }, callback);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map