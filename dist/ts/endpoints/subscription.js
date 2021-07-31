"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
    constructor(resource) {
        this.resource = resource;
    }
    list(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/subscription',
            qs: query
        }, callback);
    }
    get(subscription_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/subscription/' + subscription_id
        }, callback);
    }
    delete(subscription_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/subscription/' + subscription_id
        }, callback);
    }
    update(subscription_id, params, callback) {
        return this.resource.request({
            method: 'PUT',
            uri: '/subscription/' + subscription_id,
            body: params
        }, callback);
    }
    sendRecurringCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/subscription/check',
            body: params
        }, callback, idempotencyKey);
    }
    sendRecurringInvoice(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/subscription/invoice',
            body: params
        }, callback, idempotencyKey);
    }
}
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.js.map