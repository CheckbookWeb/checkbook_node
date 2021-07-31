import { Resource } from "../resource";

export class Subscription {
    /**
     *
     */
    constructor(private readonly resource: Resource) {
        
    }

    list(query, callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/subscription',
            qs: query
        }, callback);
    }

    get(subscription_id, callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/subscription/' + subscription_id
        }, callback);
    }

    delete(subscription_id, callback: (err, response) => void) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/subscription/' + subscription_id
        }, callback);
    }

    update(subscription_id, params, callback: (err, response) => void) {
        return this.resource.request({
            method: 'PUT',
            uri: '/subscription/' + subscription_id,
            body: params
        }, callback);
    }

    sendRecurringCheck(params, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/subscription/check',
            body: params
        }, callback, idempotencyKey);
    }

    sendRecurringInvoice(params, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/subscription/invoice',
            body: params
        }, callback, idempotencyKey);
    }

}