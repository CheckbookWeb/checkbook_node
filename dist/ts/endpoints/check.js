"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
class Check {
    constructor(resource) {
        this.resource = resource;
    }
    list(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/check',
            qs: query
        }, callback);
    }
    get(check_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/check/' + check_id
        }, callback);
    }
    delete(check_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/check/' + check_id
        }, callback);
    }
    sendDigitalCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/digital',
            body: params
        }, callback, idempotencyKey);
    }
    sendPhysicalCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/physical',
            body: params
        }, callback, idempotencyKey);
    }
    sendDirectCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/direct',
            body: params
        }, callback, idempotencyKey);
    }
    sendMultipleChecksCSV(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/check/csv',
            body: params
        }, callback, idempotencyKey);
    }
}
exports.Check = Check;
//# sourceMappingURL=check.js.map